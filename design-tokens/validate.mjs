/**
 * Token Validation Script
 *
 * Validates DTCG token files for:
 * - Required $value on every token
 * - Valid $type values
 * - Reference resolution (no broken {aliases})
 *
 * Usage: node design-tokens/validate.mjs
 */

import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const VALID_TYPES = new Set([
  'color',
  'dimension',
  'fontFamily',
  'fontWeight',
  'duration',
  'cubicBezier',
  'number',
  'shadow',
  'typography',
  'border',
  'gradient',
  'transition',
  'strokeStyle',
]);

const TOKEN_DIR = 'design-tokens';
const errors = [];
const allTokenPaths = new Set();
const allReferences = [];

function collectFiles(dir) {
  const entries = readdirSync(dir);
  const files = [];
  for (const entry of entries) {
    const full = join(dir, entry);
    if (statSync(full).isDirectory()) {
      files.push(...collectFiles(full));
    } else if (entry.endsWith('.tokens.json')) {
      files.push(full);
    }
  }
  return files;
}

/** Extract {token.path} references from string values only */
function collectReferences(value, tokenPath, file) {
  if (typeof value === 'string') {
    const refMatches = value.matchAll(/\{([a-zA-Z0-9._-]+)\}/g);
    for (const match of refMatches) {
      allReferences.push({ from: tokenPath, to: match[1], file });
    }
  } else if (Array.isArray(value)) {
    for (const item of value) collectReferences(item, tokenPath, file);
  }
  // Objects (composite types like shadow) are not scanned — they use typed sub-values
}

function walkTokens(obj, path, inheritedType, file) {
  if (obj === null || typeof obj !== 'object') return;

  const currentType = obj.$type || inheritedType;

  // Check if this is a token (has $value)
  if ('$value' in obj) {
    const tokenPath = path.join('.');
    allTokenPaths.add(tokenPath);

    if (!currentType) {
      errors.push(`${relative('.', file)}: Token "${tokenPath}" has no $type (inherited or explicit)`);
    } else if (!VALID_TYPES.has(currentType)) {
      errors.push(`${relative('.', file)}: Token "${tokenPath}" has invalid $type "${currentType}"`);
    }

    // Check for references in $value (only string values or string parts)
    collectReferences(obj.$value, tokenPath, file);
    return;
  }

  // Recurse into children (skip $ properties)
  for (const [key, value] of Object.entries(obj)) {
    if (key.startsWith('$')) continue;
    walkTokens(value, [...path, key], currentType, file);
  }
}

// Collect and validate all token files
const files = collectFiles(TOKEN_DIR);

if (files.length === 0) {
  console.error('✗ No .tokens.json files found in', TOKEN_DIR);
  process.exit(1);
}

for (const file of files) {
  try {
    const content = JSON.parse(readFileSync(file, 'utf-8'));
    walkTokens(content, [], null, file);
  } catch (e) {
    errors.push(`${relative('.', file)}: Invalid JSON — ${e.message}`);
  }
}

// Validate references resolve
for (const ref of allReferences) {
  if (!allTokenPaths.has(ref.to)) {
    errors.push(
      `${relative('.', ref.file)}: Token "${ref.from}" references "{${ref.to}}" which does not exist`
    );
  }
}

// Report
console.log(`Scanned ${files.length} token files, ${allTokenPaths.size} tokens, ${allReferences.length} references`);

if (errors.length > 0) {
  console.error(`\n✗ ${errors.length} validation error(s):\n`);
  for (const err of errors) {
    console.error(`  - ${err}`);
  }
  process.exit(1);
} else {
  console.log('✓ All tokens valid');
}
