# WordPress Feature Inventory: Content Marketing Platform Baseline

**Purpose**: Comprehensive feature matrix showing why WordPress is the default choice for content-heavy sites. This is the baseline against which alternative platforms (Astro, Next.js, static sites) must be evaluated.

**Document**: 2026-02-22
**Scope**: Core + essential plugins covering 80% of SMB content operations

---

## 1. CONTENT MANAGEMENT

### 1.1 Post Types & Structure
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Blog posts | Native | — | Post type, unlimited posts |
| Pages | Native | — | Hierarchical pages with parent/child |
| Custom post types | Native (CLI) | Custom Post Type UI | Services, testimonials, resources |
| Taxonomy (categories/tags) | Native | — | Unlimited hierarchical taxonomies |
| Hierarchical categories | Native | — | Parent-child category relationships |
| Multi-level navigation | Native | — | Menu builder with nesting |
| Post status templates | Native | — | Draft, scheduled, pending review, private |

### 1.2 Content Editing & Creation
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| WYSIWYG editor | Native (Gutenberg) | Elementor, Divi | Block-based editor (Gutenberg) or visual builders |
| Code block editor | Gutenberg | — | Write raw HTML/shortcodes |
| Reusable blocks | Gutenberg | — | Template blocks saved and reused |
| Block templates | Gutenberg | — | Set default block structure per post type |
| Markdown support | — | Markdown Editor | Write in Markdown, render to blocks |
| Copy/paste formatting | Gutenberg | — | Paste from Google Docs, clean formatting |
| Keyboard shortcuts | Gutenberg | — | Format text, navigate with shortcuts |
| Undo/redo | Gutenberg | — | Multi-step undo |

### 1.3 Content Revisions & Versioning
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Automatic revisions | Native | — | Saves every change (configurable frequency) |
| Revision history | Native | — | View, restore, compare previous versions |
| Author attribution | Native | — | Track who made each change |
| Revision compare | Native | — | Side-by-side diff of versions |
| Scheduled posts | Native | — | Set publish date/time in future |
| Post status log | — | Post Status Notifier | Track status transitions (draft → review → live) |
| Content locking | Native (roles) | Advanced Content Protector | Restrict editing by user role or password |

### 1.4 Drafts, Workflows & Approval Chains
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Draft status | Native | — | Save unpublished content |
| Pending review | Native | — | Require approval before publishing |
| Scheduled status | Native | — | Auto-publish at specified time |
| Private posts | Native | — | Visible only to logged-in users |
| Password-protected posts | Native | — | View behind password entry |
| User roles & capabilities | Native | — | Editor, contributor, author, subscriber |
| Editorial calendar | — | Edit Flow, CoBlocks | Drag-drop calendar, status filters |
| Approval workflows | — | PublishPress, Workflow Builder | Define approval chains (editor → manager → publish) |
| Comments on revisions | — | Comment on Posts | Collaborative feedback on drafts |
| Email notifications | — | Post Status Notifier, PublishPress | Notify team of status changes |

### 1.5 Bulk Operations
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Bulk edit posts | Native | — | Edit meta, status, category for multiple posts |
| Bulk delete | Native | — | Delete multiple posts at once |
| Bulk change status | Native | — | Publish/draft/schedule multiple |
| Bulk change category | Native | — | Add/remove category from multiple posts |
| Bulk change author | Native | — | Reassign author |
| Bulk export | — | WP All Export | Export posts to CSV/XML with custom fields |
| Bulk import | — | WP All Import | Import posts from CSV/XML with mapping |
| Find & replace | — | Better Find and Replace | Global search/replace across all posts |

### 1.6 Custom Fields & Metadata
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Custom fields (post meta) | Native | — | Add arbitrary key-value data to posts |
| Advanced Custom Fields (ACF) | — | Advanced Custom Fields Pro | Visual field builder, repeaters, relationships |
| Field groups | ACF | — | Organize fields into logical groups |
| Conditional logic | ACF | — | Show/hide fields based on other field values |
| Repeater fields | ACF | — | Array fields (e.g., multiple authors, testimonials) |
| Relationship fields | ACF | — | Link posts together (e.g., related articles) |
| File & image fields | ACF | — | Upload and link files to posts |
| Date & time pickers | ACF | — | Calendar UI for date selection |
| Options pages | ACF | — | Store global site options (no post required) |
| Field validation | ACF | — | Require fields, regex patterns, custom validation |

---

## 2. MEDIA LIBRARY

### 2.1 Upload & Organization
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Media library | Native | — | Centralized file storage with browser |
| Drag-drop upload | Native | — | Upload by dragging files to post editor |
| Bulk upload | Native | — | Upload multiple files at once |
| Media folders | — | FileBird, Folders | Organize media into folders |
| Media search | Native | — | Search by filename, alt text |
| Media filtering | Native | — | Filter by date, type (image/video/audio), author |
| MIME type support | Native | — | Images, video, audio, documents, PDFs |
| Upload limits | Native | — | Set max file size per WordPress config |

### 2.2 Image Editing & Cropping
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Built-in image crop | Native | — | Crop images without leaving WordPress |
| Rotate & flip | Native | — | Rotate 90°, flip horizontally/vertically |
| Resize on upload | Native | — | Auto-resize to multiple dimensions |
| Focus point (crop area) | Native (Gutenberg) | Imagify | Set focal point for responsive crops |
| Advanced image editing | — | Pixlr, PhotoDrop, Canva | Full image editor within WordPress |
| Batch image resize | — | Bulk Image Resizer | Resize all existing images to new dimensions |
| Image compression | — | Imagify, ShortPixel, Smush | Auto-compress uploaded images |

### 2.3 Image Metadata
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Alt text | Native | — | Accessibility text for images |
| Image caption | Native | — | Caption displayed below image |
| Image description | Native | — | Long description for accessibility |
| Image title | Native | — | Hover text (deprecated in modern HTML) |
| EXIF data | Native | — | Preserve camera metadata |
| Custom image sizes | Native | — | Define thumbnail, medium, large dimensions |
| Featured image (post thumbnail) | Native | — | Set primary image for post |
| Image galleries | Gutenberg | — | Gallery block with lightbox |

### 2.4 Advanced Media Features
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| SVG upload | — | SVG Support | Upload and use SVG files (native WordPress blocks them) |
| WebP/AVIF conversion | — | Imagify, ShortPixel | Auto-convert to modern formats |
| CDN integration | — | Cloudflare, Bunny CDN, Kinsta | Serve images from global CDN |
| Media variants | — | Responsive Images, Imgix | Generate/serve responsive image versions |
| Video embed | Gutenberg | — | Embed YouTube, Vimeo, native video |
| Video streaming | — | JetPack, Bunny Stream | Host video with adaptive bitrate |
| Audio player | Gutenberg | — | Audio block with player controls |
| Lightbox gallery | — | Envira Gallery, Elementor | Click image to expand in lightbox |

### 2.5 Media Categories & Tagging
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Media categories | — | Webnus Media Category | Tag media files for organization |
| EXIF camera tagging | — | Camera Taxonomy | Auto-categorize by camera model |
| Color tagging | — | Visual metadata plugins | Tag media by dominant color |
| License management | — | Media Library Categories | Track usage rights per image |

---

## 3. SEO (Search Engine Optimization)

### 3.1 On-Page SEO
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Meta title override | — | Yoast, RankMath, All in One SEO | Set custom title different from post title |
| Meta description | — | Yoast, RankMath | 155-160 character snippet in search results |
| Focus keyword | — | Yoast, RankMath | Primary keyword to optimize for |
| Keyword density checker | — | Yoast, RankMath | Ensure keyword appears at optimal frequency |
| Readability scoring | — | Yoast, RankMath | Sentence length, passive voice, subheadings |
| Synonym support | — | RankMath | Include related keywords (synonyms) |
| Internal linking suggestions | — | Yoast, RankMath, Internal Links | AI suggestions for linking to related posts |
| LSI keywords | — | RankMath | Latent Semantic Indexing keyword suggestions |
| Content length recommendation | — | Yoast, RankMath | Target word count for topic |
| Outbound link analysis | — | Yoast, RankMath | Track external links, suggest additions |

### 3.2 Technical SEO
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| XML sitemap | Native | Yoast, RankMath | Auto-generate sitemap.xml for search engines |
| Sitemap indexing | — | Yoast, RankMath | Split large sitemaps for faster crawling |
| Robots.txt | Native | — | Auto-generated, configurable |
| Meta robots | — | Yoast, RankMath | Set noindex/nofollow per post |
| Canonical URLs | Native | Yoast, RankMath | Prevent duplicate content issues |
| Self-referential canonical | — | Yoast, RankMath | Auto-set canonical to post itself |
| Pagination handling | — | Yoast, RankMath | rel=next/prev for paginated content |
| Breadcrumb navigation | — | Yoast, RankMath, Navxt | Show hierarchy path in search results |
| Breadcrumb schema | — | Yoast, RankMath | Structured data for breadcrumbs |

### 3.3 Structured Data & Schema Markup
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Schema.org markup | — | Yoast, RankMath, Schema Pro | JSON-LD structured data |
| Article schema | — | Yoast, RankMath | Mark up articles with date, author, image |
| Blog posting schema | — | Yoast, RankMath | BlogPosting schema with headline, description |
| Organization schema | — | Yoast, RankMath | Logo, contact, social profiles |
| Local business schema | — | Yoast, RankMath, Local SEO | Address, phone, hours for local businesses |
| Product schema | — | Yoast, WooCommerce | Price, rating, availability |
| Review schema | — | Schema Pro, RankMath | Star ratings, review text |
| Event schema | — | Schema Pro, Events Manager | Date, location, description for events |
| Recipe schema | — | Schema Pro, Recipe plugins | Ingredients, instructions, cook time |
| Video schema | — | Schema Pro, Yoast | Video title, description, duration |
| FAQ schema | — | Schema Pro, RankMath | Q&A structured data (Google SERP feature) |

### 3.4 Social Integration & Preview
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Open Graph meta tags | — | Yoast, RankMath | Facebook/LinkedIn share preview |
| Twitter Card meta tags | — | Yoast, RankMath | Twitter share preview (title, description, image) |
| Social image preview | — | Yoast, RankMath | Preview how post appears on social media |
| Custom social image | — | Yoast, RankMath | Override default featured image for social |
| Social description override | — | Yoast, RankMath | Different text for social vs search |
| Pinterest metadata | — | Yoast, RankMath | Pin description, rich pins |
| LinkedIn article preview | — | Yoast, RankMath | Preview on LinkedIn |

### 3.5 SEO Audits & Reporting
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Content SEO score | — | Yoast, RankMath | 1-100 overall SEO quality score |
| Readability analysis | — | Yoast, RankMath | Grade based on structure, readability metrics |
| Missing alt text alerts | — | Yoast, RankMath | Warn about images without alt text |
| Keyword optimization report | — | Yoast, RankMath | Track which posts rank for which keywords |
| Keyword position tracking | — | RankMath, SemRush, Ahrefs | Track rankings in Google Search |
| Broken link detection | — | Broken Link Checker, RankMath | Find 404 internal/external links |
| Redirect management | — | Redirection plugin | 301 redirects from old to new URLs |
| 404 page | Native | — | Custom 404 error page |
| Search Console integration | — | Yoast, RankMath | Connect to Google Search Console |
| Competitive analysis | — | SemRush, Ahrefs integrations | Compare SEO metrics with competitors |
| Bulk SEO updates | — | Yoast, RankMath | Update meta titles/descriptions for multiple posts |

### 3.6 Keyword Research & Analysis
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Keyword difficulty | — | RankMath, SemRush integration | Show how hard to rank for keyword |
| Search volume | — | RankMath, SemRush integration | Show monthly searches |
| Related keywords | — | RankMath, SemRush integration | Suggest similar keywords to target |
| Keyword clustering | — | RankMath | Group keywords to avoid cannibalization |
| Competitor keyword analysis | — | SemRush, Ahrefs integrations | See what competitors rank for |

---

## 4. FORMS & LEAD GENERATION

### 4.1 Contact & Information Forms
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Contact form builder | — | Contact Form 7, WPForms, Gravity Forms | Drag-drop form builder |
| Pre-built templates | — | WPForms, Gravity Forms | Contact, newsletter signup, feedback forms |
| Form fields (text, email, textarea, dropdown, checkbox, radio, etc.) | — | All form plugins | Standard HTML form inputs |
| Required field validation | — | All form plugins | Mark fields as required |
| Email validation | — | All form plugins | Verify valid email format |
| Custom validation | — | Gravity Forms, WPForms Pro | Regex patterns, custom messages |
| Phone number formatting | — | WPForms, Gravity Forms | Auto-format phone (US: (123) 456-7890) |
| File upload | — | Gravity Forms, WPForms Pro | Allow users to attach files |
| Conditional logic | — | Gravity Forms, WPForms Pro | Show/hide fields based on previous answers |
| Multi-step forms | — | Gravity Forms, WPForms Pro | Wizard-style multi-page forms |
| Progress bar | — | Gravity Forms, WPForms Pro | Show completion % on multi-step forms |
| CAPTCHA | Native | Gravity Forms | reCAPTCHA v3 to prevent spam |
| Honeypot spam protection | — | Most form plugins | Hidden field trick to catch bots |

### 4.2 Form Submissions & Data Management
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Submission database | — | Gravity Forms, WPForms Pro | Store form responses in WordPress database |
| Submission history | — | Gravity Forms, WPForms Pro | View, filter, sort submissions |
| Export submissions | — | Gravity Forms, WPForms Pro | Export to CSV/Excel |
| Duplicate detection | — | Gravity Forms | Detect & prevent duplicate submissions |
| Submission editing | — | Gravity Forms, WPForms Pro | Edit submitted data after the fact |
| Submission flagging/starring | — | Gravity Forms | Mark important leads |
| Search submissions | — | Gravity Forms | Find specific submissions by field value |
| Notes on submissions | — | Gravity Forms | Add internal comments to leads |
| Assignment/workflow | — | Gravity Forms | Assign submission to team member |

### 4.3 Email Notifications
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Admin notification email | — | All form plugins | Notify admin when form submitted |
| Auto-responder email | — | All form plugins | Auto-reply to user confirming receipt |
| Conditional notifications | — | Gravity Forms, WPForms Pro | Send email only if conditions met |
| Email template | — | Gravity Forms, WPForms Pro | Custom email HTML template |
| Merge tags (dynamic content) | — | All form plugins | Insert user's name, email, form data into email |
| Email from/reply-to | — | Gravity Forms | Set sender address and reply-to |
| Multiple recipient emails | — | Gravity Forms, WPForms Pro | Send to multiple admin email addresses |
| CC/BCC | — | Gravity Forms, WPForms Pro | Add CC/BCC recipients |
| Attachment in email | — | Gravity Forms, WPForms Pro | Include user-uploaded files in email |

### 4.4 Payment Integration
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Stripe payment | — | Gravity Forms Stripe, WPForms Stripe | Accept credit card payments |
| PayPal payment | — | Gravity Forms PayPal, WPForms PayPal | Accept PayPal, Venmo, card payments |
| Square payment | — | WPForms, Gravity Forms | Accept card payments via Square |
| Payment field | — | Gravity Forms, WPForms Pro | Add payment amount field to form |
| Subscription/recurring | — | Gravity Forms Stripe, WPForms Stripe | Monthly or annual recurring payments |
| Payment confirmation | — | Gravity Forms, WPForms Pro | Show receipt after successful payment |
| Invoice generation | — | Gravity Forms, WPForms Pro | Auto-generate PDF invoice |
| Tax calculation | — | Gravity Forms, WPForms Pro | Auto-add sales tax based on location |
| Discount codes | — | Gravity Forms, WPForms Pro | Apply coupon codes to reduce payment |
| Refund management | — | Gravity Forms, WPForms Pro | Issue refunds through WordPress |

### 4.5 CRM & Integration
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Email list subscription | — | Gravity Forms MailChimp, WPForms Mailchimp | Auto-add leads to email list |
| HubSpot integration | — | Gravity Forms, WPForms Pro | Sync form submissions to HubSpot |
| Salesforce integration | — | Gravity Forms Salesforce | Sync to Salesforce CRM |
| Zapier integration | — | Most form plugins | Connect to 7000+ apps via Zapier |
| Webhook POST | — | Gravity Forms, WPForms Pro | Send form data to external endpoint |
| Slack notification | — | Zapier integration | Post submission to Slack channel |
| Google Sheets integration | — | Zapier or Formlets | Auto-add submissions to Google Sheets |
| Airtable integration | — | Zapier integration | Save to Airtable base |
| Pipedrive integration | — | Zapier integration | Create deals in Pipedrive |
| MailerLite integration | — | MailerLite WordPress plugin | Auto-subscribe to MailerLite |
| ConvertKit integration | — | ConvertKit WordPress plugin | Add subscribers to ConvertKit |

### 4.6 Lead Scoring & Qualification
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Field-based lead scoring | — | Gravity Forms, HubSpot integration | Score leads based on form field values |
| Behavioral scoring | — | HubSpot, Marketo | Score based on page views, email opens |
| Lead routing | — | Gravity Forms, HubSpot | Route leads to different emails based on criteria |
| Lead status tracking | — | HubSpot, Salesforce integration | Track lead through sales funnel |
| Lead qualification workflow | — | Gravity Forms, HubSpot | Automate lead scoring and assignment |
| Distribution to sales | — | Zapier, HubSpot, Salesforce | Auto-assign leads to sales reps |

### 4.7 User Registration & Login Forms
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Custom registration form | — | WPForms, Ultimate Member, Gravity Forms | Customizable user registration |
| Custom login form | — | Custom Login, Theme My Login | Branded login page |
| Email verification | — | User verification plugins | Require email confirmation before account active |
| User approval | — | Email Verification plugins | Admin must approve registration |
| Password reset | Native | — | Self-service password reset |
| Social login | — | Social plugins (Google, Facebook login) | Login via Google, Facebook, GitHub, Apple |
| Two-factor authentication (2FA) | — | WP 2FA, iThemes Security | Require second auth factor |
| GDPR consent checkbox | — | Most modern form plugins | Collect GDPR consent |

---

## 5. EMAIL MARKETING & AUTOMATION

### 5.1 Email List Management
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Email subscriber list | — | Mailchimp for WordPress, MailerLite | Store email subscribers in WordPress |
| Double opt-in | — | Email verification plugins | Require email confirmation before subscribing |
| List segmentation | — | Mailchimp, MailerLite, ConvertKit | Divide list by interest, behavior, location |
| Subscriber management | — | All email plugins | Add, remove, manage subscribers |
| Subscriber import | — | All email plugins | Bulk import from CSV |
| Subscriber export | — | All email plugins | Export list to CSV |
| Subscriber status | — | All email plugins | Active, unsubscribed, bounced, etc. |
| Unsubscribe management | — | All email plugins | Easy unsubscribe link, bounce handling |
| GDPR compliance | — | Modern plugins | Consent tracking, right to be forgotten |

### 5.2 Email Capture Forms
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Email opt-in form | — | Mailchimp, MailerLite, ConvertKit plugins | Embedded form for list signup |
| Pop-up subscriber form | — | OptinMonster, Popup Builder | Modal or slide-in form |
| Exit-intent pop-up | — | OptinMonster, Popup Builder | Pop when user tries to leave |
| Time-based pop-up | — | Popup Builder | Show after X seconds on page |
| Scroll-trigger pop-up | — | Popup Builder | Show after scrolling X% down page |
| Form incentive (lead magnet) | — | OptinMonster | Offer free download for email signup |
| Inline form (newsletter box) | — | Mailchimp, MailerLite | Sidebar or footer form |
| Split testing | — | OptinMonster | A/B test form designs |

### 5.3 Email Sequences & Automation
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Welcome series | — | Mailchimp, MailerLite, ConvertKit | Auto-send emails after signup |
| Drip campaign | — | Mailchimp, MailerLite | Send emails on schedule (day 1, 3, 7, 14) |
| Trigger-based automation | — | Mailchimp, ConvertKit, MailerLite Pro | Send email when user takes action |
| Tag-based trigger | — | Mailchimp, MailerLite | Send when user tagged with specific tag |
| Re-engagement campaign | — | Most email tools | Auto-send to inactive subscribers |
| Abandoned cart email | — | WooCommerce email plugins | Recover lost sales |
| Birthday email | — | Email automation plugins | Send on subscriber's birthday |
| Workflow builder | — | ConvertKit, MailerLite Pro | Visual automation workflow editor |
| Conditional branching | — | ConvertKit, MailerLite Pro | Branch based on opens, clicks, links |
| Delay/wait steps | — | ConvertKit, MailerLite Pro | Wait days/weeks before sending next email |

### 5.4 Newsletter Publishing
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Broadcast email | — | Mailchimp, MailerLite, ConvertKit | Send one-time email to list |
| RSS-to-email | — | Mailchimp, MailerLite, Newsletter plugins | Auto-email latest posts as newsletter |
| Email template builder | — | All email platforms | Drag-drop email design |
| Mobile-responsive emails | — | All email platforms | Optimize for mobile |
| Email preview | — | All email platforms | Preview in different clients (Gmail, Outlook) |
| Send time optimization | — | Mailchimp, ConvertKit | Send at best time for each subscriber |
| Email editor (WYSIWYG) | — | All email platforms | Edit emails without code |
| Merge tags in email | — | All email platforms | Personalize with {{first_name}}, {{last_name}} |

### 5.5 Email Analytics
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Open rate | — | All email platforms | % of subscribers who opened |
| Click rate | — | All email platforms | % of opens that clicked links |
| Unsubscribe rate | — | All email platforms | Track unsubscribes |
| Bounce rate | — | All email platforms | Track hard/soft bounces |
| Link tracking | — | All email platforms | See which links clicked most |
| Engagement tracking | — | All email platforms | Identify engaged vs inactive subscribers |
| A/B test results | — | Email platforms with split testing | Compare subject line, content performance |
| Revenue attribution | — | Mailchimp, ConvertKit Pro | Track purchases from email campaigns |

### 5.6 Third-Party Email Integrations
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Mailchimp | — | Official Mailchimp for WordPress plugin | Free list management, automation basics |
| MailerLite | — | MailerLite WordPress plugin | Unlimited emails, automation, forms |
| ConvertKit | — | ConvertKit WordPress plugin | Creator-focused, subscriber tagging |
| ActiveCampaign | — | ActiveCampaign WordPress plugin | CRM + email automation |
| Brevo (Sendinblue) | — | Official Brevo plugin | SMS + email, contact CRM |
| GetResponse | — | GetResponse WordPress plugin | Email, webinar, landing page builder |
| Aweber | — | Aweber WordPress plugin | Email automation, split testing |
| Buttondown | — | Buttondown (newsletter platform) | Minimal newsletter tool |

---

## 6. ANALYTICS & CONVERSION TRACKING

### 6.1 Traffic Analytics
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Google Analytics integration | — | MonsterInsights, GA4 integrations | Track pageviews, traffic sources, audience |
| Google Analytics 4 (GA4) | — | GA4 plugins | Modern GA implementation |
| Pageview tracking | — | MonsterInsights | Track individual page views |
| Traffic source | — | MonsterInsights | See organic search, social, direct, referral |
| Device tracking | — | MonsterInsights | Desktop, mobile, tablet breakdown |
| Browser tracking | — | MonsterInsights | Chrome, Firefox, Safari, Edge breakdown |
| Geo-tracking | — | MonsterInsights | Pageviews by country/city |
| Session tracking | — | MonsterInsights | Track user sessions and duration |
| User flow | — | MonsterInsights | Visualize user journey through site |
| Bounce rate | — | MonsterInsights | % who leave after 1 page |
| Time on page | — | MonsterInsights | Average time spent per page |

### 6.2 Conversion & Goal Tracking
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Goal tracking | — | MonsterInsights, GA4 setup | Track form submissions, downloads, signups |
| Form submission tracking | — | MonsterInsights, Gravity Forms GA | Auto-track contact form submissions |
| Download tracking | — | MonsterInsights | Track PDF, file downloads |
| Link tracking (utm_source, utm_medium, utm_campaign, utm_content) | — | UTM plugins, MonsterInsights | Add UTM parameters to track campaigns |
| UTM parameter generator | — | UTM Taginator, Google Campaign URL Builder | Build trackable links |
| UTM auto-append | — | UTM plugins | Auto-add UTM to all outbound links |
| Event tracking | — | GA4 events, MonsterInsights | Track custom events (newsletter signup, etc.) |
| Conversion funnel | — | MonsterInsights | Visualize user path to conversion |
| Multi-touch attribution | — | MonsterInsights Pro | See contribution of all touchpoints |

### 6.3 A/B Testing
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| A/B test builder | — | MonsterInsights, Google Optimize integration | Split traffic between variants |
| Title A/B test | — | Google Optimize | Test different headlines |
| CTA A/B test | — | OptinMonster, A/B testing plugins | Test button text, color, placement |
| Form A/B test | — | OptinMonster, Gravity Forms | Test form designs |
| Landing page A/B test | — | Leadpages, Unbounce integrations | Compare full page designs |
| Multivariate test | — | Google Optimize | Test multiple elements simultaneously |
| Statistical significance | — | A/B testing tools | Determine if test results are significant |
| Test results reporting | — | A/B testing tools | See winner and performance delta |

### 6.4 Heatmaps & Session Recording
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Heatmap | — | Hotjar, VWO, Crazy Egg | Visualize where users click, scroll |
| Click heatmap | — | Hotjar, Crazy Egg | See most-clicked elements |
| Scroll heatmap | — | Hotjar, Crazy Egg | See how far down page users scroll |
| Session recording | — | Hotjar, FullStory | Video playback of user sessions |
| Visitor identification | — | Hotjar | See which leads/customers visit site |
| Form analytics | — | Hotjar | See form field interactions, abandonment |
| Page-level heatmaps | — | Hotjar | Compare heatmaps across pages |

### 6.5 Lead Tracking & CRM Integration
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Lead tracking by email | — | HubSpot WordPress plugin, Zapier | Track specific leads through site |
| Contact database | — | HubSpot, Salesforce integrations | Store contact info in CRM |
| Lead scoring based on behavior | — | HubSpot, Marketo integrations | Auto-score leads by site activity |
| Lead attribution | — | HubSpot, Salesforce | See which content/campaign influenced lead |
| Deal tracking | — | HubSpot, Salesforce integrations | Track sales opportunities |
| Customer lifetime value (CLV) | — | HubSpot | Estimate customer value |

### 6.6 eCommerce Analytics
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Product pageview tracking | — | WooCommerce GA plugin | Track product page views |
| Add-to-cart tracking | — | WooCommerce GA plugin | Track when products added to cart |
| Purchase tracking | — | WooCommerce GA plugin | Track completed sales, revenue |
| Product revenue | — | WooCommerce GA plugin | Revenue per product |
| Checkout funnel | — | WooCommerce GA plugin | Track drop-off in checkout flow |
| Cart abandonment | — | WooCommerce, Zapier | Recover lost sales |
| Average order value (AOV) | — | WooCommerce analytics | Revenue divided by number of orders |
| Customer repeat rate | — | WooCommerce analytics | % of customers who buy again |

### 6.7 Custom Analytics Dashboard
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| WordPress analytics dashboard | — | MonsterInsights Pro, Analytify | Custom analytics dashboard in WordPress admin |
| Key metrics widget | — | MonsterInsights | Display KPIs in WordPress dashboard |
| Real-time visitor count | — | StatCounter, Jetpack | See live visitor count |
| Content performance report | — | MonsterInsights | See top performing posts/pages |
| Search console integration | — | MonsterInsights | Show Google search performance in WordPress |
| Campaign performance | — | MonsterInsights | See which campaigns convert best |

---

## 7. SOCIAL MEDIA INTEGRATION

### 7.1 Social Sharing
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Share button (Facebook, Twitter, LinkedIn, Pinterest, WhatsApp) | — | Social Snap, AddToAny | Add share buttons to posts |
| Floating share buttons | — | Social Snap | Fixed sidebar share buttons |
| Inline share buttons | — | Social Snap | Share buttons within content |
| Share count | — | Social plugins | Show how many times shared |
| Custom share message | — | Social Snap, RankMath | Set message for each social platform |
| Pinterest save button | — | Social Snap | Pin-specific button for Pinterest |
| Email share | — | Social plugins | Share post via email |

### 7.2 Social Cards & Previews
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Open Graph image | — | Yoast, RankMath, MetaBox | Custom image for social preview |
| Open Graph description | — | Yoast, RankMath | Custom text for social preview |
| Twitter Card image | — | Yoast, RankMath | Custom Twitter preview image |
| Pinterest description | — | Yoast, RankMath | Custom Pinterest preview text |
| LinkedIn article card | — | Yoast, RankMath | Custom LinkedIn preview |
| Social preview editor | — | Yoast, RankMath | See preview before publishing |

### 7.3 Social Proof Widgets
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Social count widget | — | Social Proof widgets | Show follower counts from all platforms |
| Social feed widget | — | SnapWidget, Envira Social | Display Instagram/Twitter feed on site |
| Recent posts from social | — | Autoblog, Feed plugins | Auto-display posts shared on social media |
| User testimonials from social | — | Review plugins | Pull reviews/testimonials from Google, Facebook |
| Live notification | — | Trustpulse, NotificationX | "X just subscribed" popup notifications |
| Review/rating display | — | Review plugins | Show star ratings from Google, Yelp, Trustpilot |

### 7.4 Auto-Posting & Social Scheduling
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Auto-post to social | — | Social Snap, Buffer, Hootsuite integration | Automatically share posts to social media |
| Schedule post timing | — | Buffer, Social Snap Pro | Schedule social posts for specific times |
| Auto-generate social copy | — | Social Snap, Zapier | Generate variation of post title for social |
| Platform-specific copy | — | Social Snap, Buffer | Different text/image per platform |
| Hashtag management | — | Social Snap | Add hashtags to social posts |
| Multiple account support | — | Buffer, Hootsuite | Post to multiple social accounts |
| Social media calendar | — | Buffer, Hootsuite, Later | Visualize social posts on calendar |
| Social analytics in WordPress | — | Jetpack, Social plugins | See social engagement metrics in WordPress |

### 7.5 Third-Party Social Integrations
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Twitter integration | — | Social plugins, Zapier | Post to Twitter, embed tweets |
| Facebook integration | — | Facebook for WordPress, Jetpack | Post to Facebook, embed posts |
| LinkedIn integration | — | Zapier, Social plugins | Post to LinkedIn |
| Instagram integration | — | SnapWidget, Elementor | Embed Instagram feed |
| TikTok integration | — | Native embed, TikTok WordPress plugins | Embed TikTok videos |
| YouTube integration | — | Native YouTube embed, Jetpack | Embed YouTube videos |
| Mastodon integration | — | Zapier, Mastodon WordPress plugin | Post to Mastodon |

---

## 8. CONTENT CALENDAR & EDITORIAL WORKFLOW

### 8.1 Editorial Calendar
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Calendar view | — | Edit Flow, CoBlocks | Visual calendar of all posts |
| Month/week/day view | — | Editorial Calendar, CoBlocks | Switch between calendar views |
| Drag-drop scheduling | — | Editorial Calendar | Drag posts to calendar dates |
| Post status on calendar | — | Edit Flow | Color-code by status (draft, pending, scheduled) |
| Author filter | — | Editorial Calendar | Filter calendar by author |
| Category filter | — | Editorial Calendar | Filter calendar by content type |
| Post type filter | — | Edit Flow | Filter by post type (post, page, custom) |
| Publish date | — | All calendars | Set publish date on calendar |
| Status tracking | — | Edit Flow | See which posts are approved, scheduled, etc. |

### 8.2 Team Collaboration & Approval
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| User roles (admin, editor, author, contributor) | Native | — | Role-based permissions |
| Granular permissions | — | PublishPress | Control who can publish, edit others' posts |
| Content editing assignment | — | PublishPress, Gravity Forms | Assign editing tasks to team members |
| Collaborative editing | — | Jetpack, Google Docs integration | Real-time multi-user editing |
| Mentions/comments on posts | — | Comments, Post Reviews | Tag team members for feedback |
| Email notifications on updates | — | Post Status Notifier, PublishPress | Alert team when status changes |
| Approval workflow | — | PublishPress Workflows, Approval plugins | Define multi-step approval chain |
| Deadline tracking | — | Edit Flow, PublishPress | Due dates for posts |
| Edit history with attribution | — | Jetpack, Edit Flow | See who changed what and when |

### 8.3 Content Planning & Brainstorming
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Idea capture | — | Content planning plugins | Quick capture of post ideas |
| Story outline | — | Content planning plugins | Outline before drafting |
| Research notes | — | Content planning plugins | Store research alongside post |
| Content brief | — | Content Brief plugins | Template for content requirements |
| Target audience selector | — | Content Brief plugins | Define audience for content |
| Outline structure | — | Content planning plugins | H1, H2, H3 outline builder |
| Content scoring | — | Content planning plugins | Score ideas by impact/effort |

---

## 9. AUTOMATION & WORKFLOWS

### 9.1 Scheduled Publishing & Automation
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Scheduled posts | Native | — | Set future publish date/time |
| Scheduled auto-posting to social | — | Social Snap, Buffer | Auto-share to social on publish |
| Scheduled drip content | — | Email automation plugins | Release content series on schedule |
| Scheduled email | — | Email plugins | Send email at future date |
| Scheduled backups | — | UpdraftPlus, BackupBuddy | Auto-backup site on schedule |
| Scheduled updates | — | Easy Updates Manager | Auto-update plugins/themes |
| Scheduled cache clear | — | Cache plugins | Clear cache on schedule |
| Cron jobs | Native | — | WordPress scheduled tasks |

### 9.2 Zapier & Webhook Automation
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Zapier integration | — | Zapier WordPress plugin | Connect to 7000+ apps |
| New post trigger | — | Zapier | Trigger automation when post published |
| Form submission trigger | — | Zapier + form plugins | Trigger when form submitted |
| Webhook outbound | — | Gravity Forms, WPForms | Send post data to external API |
| Webhook inbound | — | IFTTT, Zapier | Receive data from external services |
| Multi-step workflows | — | Zapier | Chain multiple actions together |
| Conditional triggers | — | Zapier | "If X then Y else Z" logic |

### 9.3 Content Series & Auto-Publish
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Content series (related posts) | — | Series plugins | Link related posts together |
| Auto-publish series | — | Content automation plugins | Release series on schedule |
| Republish old content | — | Revive Old Posts | Periodically reshare old posts to social |
| Update publish date | — | Admin plugins | Update post date when republishing |
| Update featured image | — | Content automation plugins | Rotate featured image on reshare |
| Update URL slug | — | Redirection plugin | Keep old URLs working with redirects |

### 9.4 Conditional Content & Dynamic Display
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| User role-based visibility | — | Conditional Content plugins | Show content only to specific user roles |
| Date-based visibility | — | Conditional Content plugins | Show/hide content after specific date |
| Geo-targeting | — | Geo Targeting plugins | Show different content by country/city |
| Device-based content | — | Responsive Design, Conditional plugins | Show different on mobile vs desktop |
| Personalized content for logged-in users | — | Conditional Content plugins | Different experience for members |
| Conditional blocks (Gutenberg) | — | Conditional Blocks plugin | Show blocks based on conditions |

---

## 10. PERSONALIZATION & DYNAMIC CONTENT

### 10.1 User Segmentation
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Segment by role | Native | — | Different content for different user types |
| Segment by registration date | — | User Segmentation plugins | Content for new vs existing users |
| Segment by engagement | — | Email plugins, BehaviorMath | Engaged vs inactive users |
| Segment by purchase history | — | WooCommerce, CRM integrations | Customer segments vs prospects |
| Segment by page views | — | Analytics plugins | Power users vs casual browsers |
| Custom segment criteria | — | CRM integrations | Advanced segmentation by multiple attributes |

### 10.2 Dynamic Content Display
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Personalized greeting | — | Personalization plugins | "Hello {{first_name}}" |
| Dynamic CTAs | — | Personalization plugins | Different call-to-action by segment |
| Product recommendations | — | WooCommerce, personalization plugins | "Recommended for you" |
| Dynamic pricing | — | WooCommerce, membership plugins | Different price per user role |
| Member-exclusive content | — | Membership plugins | Behind login/paywall |
| Progressive profiling | — | Form plugins | Gradually ask for more info over multiple forms |
| Smart forms | — | Gravity Forms Pro | Auto-fill known data, skip known fields |

### 10.3 Behavioral Personalization
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Behavior tracking | — | Analytics plugins, CRM integrations | Track pages visited, time spent |
| Trigger-based content | — | Behavioral triggers | Show content based on behavior |
| Predictive content | — | Predictive plugins | Show next best action based on behavior |
| Smart recommendations | — | Recommendation engine plugins | AI-suggested content based on browsing |
| Site-wide analytics by user | — | HubSpot, Marketo integrations | Track individual user journey |

---

## 11. COMMENTS & COMMUNITY

### 11.1 Native Comments
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Post comments | Native | — | Users can comment on posts |
| Comment moderation | Native | — | Approve comments before publishing |
| Comment spam filtering | Native + Akismet | — | Auto-detect spam comments |
| Nested replies | Native | — | Comments can have replies |
| Comment author info | Native | — | Name, email, website |
| Gravatar avatars | Native | — | Auto-display user avatar |
| Comment form fields | Native | — | Name, email, website, comment text |
| Comment notifications | Native | — | Notify author when comment added/replied |
| Comment thread email | Native | — | Subscribe to replies on specific comment |
| Comment threading depth | Native | — | Control nesting levels |
| Comment pagination | Native | — | Multiple pages if many comments |

### 11.2 Advanced Comments
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Disqus comments | — | Disqus WordPress plugin | Third-party comment system with advanced features |
| Facebook comments | — | Facebook Comments plugin | Comments via Facebook login |
| Social login for comments | — | Social login plugins | Comment via Google, Facebook, GitHub |
| Comment upvoting | — | Disqus, Comment voting plugins | Users vote on comment quality |
| Comment filtering | — | Comment plugins | Sort by newest, oldest, highest rated |
| Comment reaction emoji | — | Emoji reaction plugins | React with emoji instead of writing comment |
| Comment profanity filter | — | Comment moderation plugins | Auto-hide/filter profanity |
| Comment reputation system | — | Community plugins | Track user credibility |

### 11.3 Community Forums
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Forum creation | — | Asgaros Forum, bbPress | Create discussion forums |
| Topic creation | — | Forum plugins | Users create discussion topics |
| Forum categories | — | Forum plugins | Organize forums by topic |
| Forum moderation | — | Forum plugins | Review posts, ban users |
| User reputation | — | Forum plugins | Track user status, karma points |
| Forum search | — | Forum plugins | Full-text search of forum posts |
| Email digest | — | Forum plugins | Daily/weekly forum activity digest |
| Forum badges | — | Forum plugins | Achievement badges for active users |

### 11.4 User Registration & Profiles
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| User registration | Native | — | Users can create accounts |
| Email verification | — | Email verification plugins | Verify email before account active |
| User profile | Native | — | User can edit name, bio, avatar |
| User avatar (custom) | — | Custom Avatar plugins | Upload custom profile picture |
| User meta fields | — | User Profile plugins | Store additional user data (company, interests) |
| User roles | Native | — | Subscriber, contributor, author, editor, admin |
| User capabilities | Native | — | Fine-grained permissions |
| Member directory | — | BuddyPress, Ultimate Member | Public user profiles and search |
| Private messaging | — | BuddyPress, Private Message plugins | Users can message each other |
| User deactivation/deletion | — | User plugins | Remove/suspend user accounts |

---

## 12. MULTILINGUAL & INTERNATIONALIZATION

### 12.1 Translation Management
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| WPML (WordPress Multilingual) | — | WPML premium plugin | Multi-language site management |
| Polylang | — | Polylang free plugin | Alternative to WPML, lighter weight |
| Language switcher | — | WPML, Polylang | Menu to switch between languages |
| Per-language menus | — | WPML, Polylang | Different navigation per language |
| Per-language URLs | — | WPML, Polylang | /en/post vs /fr/post vs /de/post |
| Duplicate content for translation | — | WPML, Polylang | Duplicate post to create alternate language version |
| Translation management | — | WPML | Dashboard to manage translations |
| Translation status | — | WPML | See which posts translated in which languages |
| Automatic translation (Google) | — | WPML, TranslatePress | Auto-translate to other languages |
| Human translation assignment | — | WPML | Assign translation to translators |

### 12.2 SEO for Multiple Languages
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| hreflang tags | — | WPML, Polylang, Yoast | Tell Google about alternate language versions |
| Language meta tags | — | WPML, Polylang | Set lang="en", lang="fr", etc. |
| Sitemap per language | — | WPML, Polylang | Separate sitemaps for each language |
| Canonical per language | — | WPML, Polylang | Prevent duplicate content penalties |
| SEO per language | — | WPML, Yoast | Set different meta, title per language |
| Breadcrumbs per language | — | WPML, Polylang | Localized breadcrumb navigation |

### 12.3 Language-Specific Features
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| RTL language support | — | WPML, RTL theme support | Support right-to-left languages (Arabic, Hebrew) |
| Character set handling | Native | — | UTF-8 support for all languages |
| Locale switching | Native | — | Date/time format per language |
| Widget translation | — | WPML | Translate sidebar widgets |
| Theme string translation | Native | — | Translate theme text via .po files |
| Plugin string translation | Native | — | Translate plugin text via .po files |

---

## 13. E-COMMERCE

### 13.1 WooCommerce Product Management
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Products | — | WooCommerce | Create, list, manage products |
| Product variants | — | WooCommerce | Size, color, other product options |
| Variable products | — | WooCommerce | Different prices/stock per variant |
| Product categories | — | WooCommerce | Organize products by category |
| Product tags | — | WooCommerce | Additional product taxonomy |
| Product images | — | WooCommerce | Multiple images per product |
| Product gallery | — | WooCommerce | Image gallery with zoom/lightbox |
| Product description | — | WooCommerce | Full WYSIWYG description |
| Product short description | — | WooCommerce | Summary for product list |
| Product SKU | — | WooCommerce | Track inventory via SKU |
| Product weight/dimensions | — | WooCommerce | For shipping calculation |
| Product attributes | — | WooCommerce | Color, size, material, etc. |
| Product links | — | WooCommerce | Link to related/upsell products |
| Affiliate links | — | Affiliate plugins | Earn commission on product sales |

### 13.2 Inventory Management
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Stock quantity | — | WooCommerce | Inventory tracking |
| Low stock alert | — | WooCommerce | Notify when stock runs low |
| Backorder | — | WooCommerce | Allow orders when out of stock |
| Backorder notification | — | WooCommerce | Notify when in stock again |
| Stock by location | — | WooCommerce Multi-Warehouse | Track stock in multiple warehouses |
| Inventory sync | — | Inventory sync plugins | Sync stock between WooCommerce and suppliers |

### 13.3 Shopping Cart & Checkout
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Shopping cart | — | WooCommerce | View and manage items before purchase |
| Cart persistence | — | WooCommerce | Cart survives browser close |
| Save for later | — | WooCommerce | Wish list / save items |
| Quantity updater | — | WooCommerce | Change quantity in cart |
| Coupon code | — | WooCommerce | Discount codes |
| Cart abandonment email | — | Cart recovery plugins | Email about abandoned carts |
| Guest checkout | — | WooCommerce | Purchase without account |
| Account creation on checkout | — | WooCommerce | Create account during checkout |
| Checkout form fields | — | WooCommerce | Billing, shipping, custom fields |
| Shipping calculator | — | WooCommerce | Show shipping cost before purchase |
| Payment methods | — | WooCommerce | Credit card, PayPal, etc. |
| Order notes | — | WooCommerce | Customer can add order notes |

### 13.4 Payments
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Stripe | — | WooCommerce Stripe Gateway | Accept credit cards via Stripe |
| PayPal | — | WooCommerce PayPal | Accept PayPal payments |
| Square | — | WooCommerce Square | Accept payments via Square |
| Apple Pay | — | Payment plugins | One-click Apple Pay |
| Google Pay | — | Payment plugins | One-click Google Pay |
| Subscription products | — | WooCommerce Subscriptions | Recurring payments |
| Pre-order products | — | WooCommerce Pre-Orders | Collect payment for future products |
| Payment confirmation | — | WooCommerce | Confirmation email with receipt |
| Invoice | — | WooCommerce | PDF invoice for customer |
| Payment receipt | — | WooCommerce | Email receipt after purchase |
| Manual order creation | — | WooCommerce | Admin creates order for customer |

### 13.5 Digital Products & Licenses
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Digital products | — | WooCommerce | Downloadable files (ebooks, plugins) |
| File downloads | — | WooCommerce | Deliver files after purchase |
| Download limits | — | WooCommerce | Limit number of downloads |
| Download expiration | — | WooCommerce | Downloads expire after X days |
| Software licenses | — | License Key plugins | Issue license keys for software |
| License validation | — | License Key plugins | Verify license is valid and active |
| Software updates | — | EDD (Easy Digital Downloads) | Deliver software updates to license holders |
| Bundle products | — | WooCommerce, EDD | Sell package of digital products |

### 13.6 Affiliates & Referrals
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Affiliate program | — | AffiliateWP, Refersion | Track referral sales |
| Affiliate links | — | AffiliateWP | Generate unique affiliate links |
| Affiliate dashboard | — | AffiliateWP | Affiliates view their stats |
| Affiliate payouts | — | AffiliateWP | Pay affiliates for referrals |
| Referral tracking | — | Referral plugins | Track when referral converts |
| Referral commission | — | AffiliateWP | Set commission per sale |
| Referral fraud detection | — | AffiliateWP | Detect fraudulent referrals |

---

## 14. PERFORMANCE & OPTIMIZATION

### 14.1 Caching
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Page cache | — | WP Super Cache, W3 Total Cache | Cache HTML pages |
| Browser cache | — | Cache plugins | Cache in user's browser |
| Database query cache | — | W3 Total Cache, Redis | Cache database queries |
| Object cache | — | Redis, Memcached | Cache PHP objects in memory |
| Cache invalidation | — | Cache plugins | Automatically clear cache on update |
| Manual cache clear | — | Cache plugins | Admin can manually flush cache |
| Cache warming | — | Cache plugins | Pre-populate cache with popular pages |
| Conditional caching | — | Cache plugins | Don't cache for logged-in users |

### 14.2 Content Delivery Network (CDN)
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| CDN integration | — | Cloudflare, Bunny CDN plugins | Serve assets from global servers |
| Image CDN | — | Cloudflare, Imgix | Optimize and serve images globally |
| JavaScript CDN | — | Cloudflare | Serve JS from edge locations |
| CSS CDN | — | Cloudflare | Serve CSS from edge locations |
| Auto-purge CDN cache | — | CDN plugins | Clear CDN cache on content update |
| CNAME setup | — | CDN plugins | Use custom domain for CDN |
| Origin shield | — | Cloudflare Pro | Additional cache layer between origin and edge |

### 14.3 Image Optimization
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Image compression | — | Imagify, ShortPixel, Smush | Automatically compress images on upload |
| Lossless compression | — | Imagify, ShortPixel | Compress without quality loss |
| Lossy compression | — | Imagify, ShortPixel | Higher compression with minor quality loss |
| WebP conversion | — | Imagify, ShortPixel | Convert to modern WebP format |
| AVIF conversion | — | ShortPixel | Convert to even newer AVIF format |
| Lazy loading | Native (img loading="lazy") | — | Defer off-screen images |
| Responsive images | Native srcset | — | Serve different sizes for different devices |
| Image focus point | Native (Gutenberg) | — | Determine crop area for responsive images |
| Bulk optimize | — | Imagify, ShortPixel | Optimize all existing images |
| Image dimensions | Native | — | Specify image width/height to prevent CLS |

### 14.4 Code Optimization
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Minify CSS | — | W3 Total Cache, WP Rocket | Remove unnecessary characters from CSS |
| Minify JavaScript | — | W3 Total Cache, WP Rocket | Remove unnecessary characters from JS |
| Minify HTML | — | Cache plugins | Minify HTML output |
| Remove unused CSS | — | Autoptimize, WP Rocket | Strip CSS rules not used on page |
| Defer JavaScript | — | WP Rocket, Autoptimize | Load JS after page renders |
| Load critical CSS | — | WP Rocket | Inline CSS needed for above-fold content |
| Remove Query Strings | — | Cache plugins | Strip query strings from static assets |
| Code splitting | — | Advanced plugins | Split JS into chunks |

### 14.5 Database Optimization
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Database cleanup | — | WP-Optimize, Advanced Database Cleaner | Remove old revisions, spam comments, etc. |
| Revision limit | Native | — | Keep only X recent revisions |
| Transient cleanup | — | DB cleanup plugins | Remove expired transients |
| Table optimization | — | DB plugins | Optimize database tables |
| Query monitoring | — | Query Monitor, Debug Bar | See slow database queries |
| Index creation | — | DB plugins | Add indexes for faster queries |

### 14.6 Performance Monitoring
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Core Web Vitals | — | MonsterInsights, Perfmatrix | Track LCP, FID, CLS metrics |
| Page speed score | — | Perfmatrix, MonsterInsights | Google PageSpeed Insights integration |
| Lighthouse score | — | Perfmatrix | Automated audits |
| Real user monitoring (RUM) | — | Perfmatrix, MonsterInsights | Measure actual user experience |
| Uptime monitoring | — | Uptime Robot, StatusCake | Alert if site goes down |
| Performance alerts | — | Perfmatrix | Notify if performance degrades |
| Performance comparison | — | Perfmatrix | Compare before/after optimization |
| Page load time tracking | — | Analytics plugins | Track load time over time |

---

## 15. SECURITY

### 15.1 Access Control & Authentication
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| User roles | Native | — | Admin, editor, author, contributor, subscriber |
| Granular permissions | Native | — | Specific capabilities per role |
| Two-factor authentication (2FA) | — | WP 2FA, iThemes Security | Require second authentication factor |
| Password complexity | — | Force Strong Passwords | Require strong passwords |
| Password reuse prevention | — | Password management plugins | Prevent reusing old passwords |
| Login rate limiting | — | iThemes Security, Wordfence | Limit failed login attempts |
| Login whitelist | — | Security plugins | Only allow specific IPs to login |
| Session timeout | — | Security plugins | Auto-logout after inactivity |
| Remember me expiration | — | Security plugins | Auto-logout from remember-me token |
| Account lockout | — | Security plugins | Lock after X failed login attempts |

### 15.2 Malware & Vulnerability Protection
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Malware scanning | — | Wordfence, Sucuri | Regular scans for malware |
| Malware removal | — | Wordfence, Sucuri | Auto-remove detected malware |
| Vulnerability database | — | Wordfence, Security plugins | Check for known vulnerabilities |
| Vulnerable plugin alerts | — | Wordfence, iThemes Security | Alert if installed plugin has vulnerability |
| Vulnerable theme alerts | — | Wordfence, iThemes Security | Alert if installed theme has vulnerability |
| File integrity monitoring | — | Wordfence, Sucuri | Detect if files are modified |
| Backdoor detection | — | Wordfence, Sucuri | Detect hidden malware |

### 15.3 Firewall & DDoS Protection
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Web application firewall (WAF) | — | Wordfence, Sucuri, Cloudflare | Protect against attacks |
| DDoS protection | — | Cloudflare, Sucuri | Protect against DDoS attacks |
| IP blocking | — | Wordfence, Security plugins | Block specific IPs |
| Geo-blocking | — | Wordfence, Security plugins | Block traffic from specific countries |
| Rate limiting | — | Cloudflare, Wordfence | Limit requests per IP |
| SQL injection protection | — | WAF plugins | Prevent SQL injection attacks |
| XSS protection | — | WAF plugins | Prevent cross-site scripting |
| CSRF protection | — | Native | CSRF tokens on forms |

### 15.4 Content Security
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Content type validation | Native | — | Only allow specific file types |
| File upload scanning | — | Wordfence | Scan uploaded files for malware |
| Image upload validation | — | Security plugins | Verify images aren't exploits |
| SVG upload restrictions | — | Security plugins | Disable SVG or scan for XSS |
| Executable file blocking | — | wp-config.php rules | Prevent running .php/.exe in uploads |

### 15.5 Backup & Recovery
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Automated backups | — | UpdraftPlus, BackupBuddy | Daily/hourly automatic backups |
| Manual backup | — | Backup plugins | On-demand backup |
| Backup storage | — | UpdraftPlus | Local, cloud (S3, Dropbox, Google Drive) |
| Incremental backups | — | BackupBuddy | Only backup changed files |
| One-click restore | — | UpdraftPlus, BackupBuddy | Restore entire site from backup |
| Backup encryption | — | UpdraftPlus, BackupBuddy | Encrypt backups for security |
| Backup testing | — | Security plugins | Verify backups are working |
| Staging environment | — | WP Staging, Kinsta Staging | Test updates before deploying |

### 15.6 SSL/HTTPS
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| SSL certificate | Native | — | HTTPS encryption |
| Auto SSL (Let's Encrypt) | Native (host-dependent) | — | Free auto-renewing SSL |
| SSL migration | — | SSL Insecure Content Fixer | Fix mixed content warnings |
| SSL certificate validation | Native | — | Verify SSL is valid |
| Force HTTPS | — | Security plugins, .htaccess | Redirect HTTP to HTTPS |
| HSTS header | — | Security headers plugins | Force HTTPS in browser |
| Certificate expiration alert | — | Security plugins | Alert before SSL expires |

### 15.7 Privacy & GDPR
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Privacy policy page | Native | — | WordPress-provided privacy policy template |
| Cookie consent banner | — | Cookiebot, CookieYes | Display cookie consent |
| GDPR compliance | — | GDPR plugins | GDPR compliance tooling |
| Data export | Native | — | User can export their data |
| Data deletion | Native | — | User can request deletion |
| Consent tracking | — | GDPR plugins | Track user consent |
| Opt-in for tracking | — | Consent plugins | Get consent before Google Analytics |
| Log retention | — | Privacy plugins | Auto-delete access logs after X days |

### 15.8 Audit & Compliance
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Activity log | — | Wordfence, iThemes Security | Log user/admin actions |
| Login history | — | Security plugins | Track logins with timestamp, IP |
| Change log | — | Wordfence | Track content changes |
| Admin changes log | — | Wordfence | Track admin setting changes |
| User management log | — | Wordfence | Track user creation/deletion |
| Plugin/theme change log | — | Wordfence | Track installation/updates |

---

## 16. ADMIN & CUSTOMIZATION

### 16.1 Theme & Design
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Themes | Native | — | Change site appearance |
| Custom theme | Native | — | Develop custom theme with code |
| Theme customizer | Native | — | Live preview of theme changes |
| Custom colors | — | Theme customizer | Change brand colors |
| Custom fonts | — | Google Fonts integration | Add custom fonts |
| Logo upload | Native | — | Set custom logo |
| Header image | Native | — | Set custom header background |
| Footer widgets | Native | — | Customize footer area |
| Menu builder | Native | — | Create and manage menus |
| Mega menu | — | Menu plugins | Advanced multi-column menus |

### 16.2 Page Builders (Visual Design)
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Gutenberg block editor | Native | — | Built-in WordPress block editor |
| Elementor | — | Elementor free/pro | Drag-drop page builder |
| Divi | — | Divi theme/plugin | Visual page builder |
| Beaver Builder | — | Beaver Builder | Visual page builder with templates |
| WP Bakery | — | WP Bakery | Drag-drop page builder |
| Custom Elementor blocks | — | Elementor | Create reusable page sections |
| Template library | — | Elementor, Divi | Pre-built page templates |
| Responsive editor | — | Page builders | Edit mobile/tablet/desktop separately |

### 16.3 Widgets
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Widget areas | Native | — | Sidebar, footer, custom areas |
| Text widget | Native | — | Add text/HTML to sidebar |
| Image widget | Native | — | Add image to sidebar |
| Video widget | Native | — | Embed video in sidebar |
| Recent posts widget | Native | — | Show latest blog posts |
| Category widget | Native | — | Show category links |
| Tag cloud widget | Native | — | Show all tags |
| Search widget | Native | — | Search form in sidebar |
| Custom widgets | — | Widget plugins | Create custom widget functionality |
| Widget block editor | Gutenberg | — | Edit widget with block editor |

### 16.4 Custom Post Types & Taxonomies
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Custom post types | Native (CLI/code) | Custom Post Type UI | Services, portfolio, testimonials |
| Custom taxonomies | Native (CLI/code) | Custom Taxonomy UI | Custom categories/tags |
| Post type icon | — | Custom post type plugins | Set icon for post type |
| Post type archive | Native | — | Archive page for custom post type |
| Hierarchical post type | Native | — | Parent-child relationships |
| Taxonomy archive | Native | — | Archive page for custom taxonomy |

### 16.5 Admin Customization
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Admin theme | — | Admin themes | Customize WordPress admin appearance |
| Hide menu items | — | Admin Menu Editor | Remove menu items from non-admins |
| Custom logo | — | Branding plugins | Logo on login screen, admin |
| Custom login page | — | Login plugins | Branded login page |
| Admin bar customization | Native | — | Add custom admin bar items |
| Dashboard widgets | Native | — | Add custom dashboard widgets |
| Admin columns | — | Admin Columns plugin | Customize post list columns |
| Bulk actions | — | Admin plugins | Add custom bulk actions |
| Quick edit | Native | — | Quick edit inline in post list |

### 16.6 API & Integrations
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| REST API | Native | — | JSON API for external apps |
| API authentication | Native | — | JWT, OAuth, API keys |
| Custom API endpoints | Native | — | Create custom API routes |
| Webhook support | — | Zapier, custom plugins | Send data to external services |
| GraphQL API | — | GraphQL plugins | GraphQL API alternative |

---

## 17. DEVELOPER TOOLS & DEBUGGING

### 17.1 Development & Debugging
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Debug mode | Native | — | WP_DEBUG constant enables error logging |
| Debug log | Native | — | /wp-content/debug.log |
| Query monitor | — | Query Monitor plugin | See database queries, hooks, conditionals |
| Debug bar | — | Debug Bar plugin | Debugging toolbar in WordPress |
| Performance profiling | — | Query Monitor | Identify slow queries |
| Hook inspector | — | Query Monitor | See all hooks firing on page |
| Variable inspector | — | Query Monitor | Inspect PHP variables |

### 17.2 Local Development
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Local development environment | — | Local by Flywheel, Docker | Run WordPress locally |
| Database sync | — | Staging plugins | Copy production database to local |
| WP-CLI | Native | — | Command-line WordPress management |
| Composer | — | Composer | Dependency management for PHP packages |

### 17.3 Testing
| Feature | WordPress Core | Plugin | Notes |
|---------|---|---|---|
| Unit testing | Native | — | PHPUnit testing framework |
| Integration testing | Native | — | Test WordPress with database |
| E2E testing | — | E2E testing plugins | End-to-end testing |
| Performance testing | — | Performance testing tools | Load testing |

---

## SUMMARY TABLE: Feature Completeness by Category

| Category | Coverage | Key Plugins | Notes |
|----------|----------|-------------|-------|
| **1. Content Management** | 95% | Gutenberg, ACF Pro, Edit Flow, PublishPress | Native + plugins cover all needs |
| **2. Media Library** | 90% | Imagify, FileBird, Elementor | Native support strong; enhancement plugins add folders, AI |
| **3. SEO** | 98% | Yoast, RankMath, Schema Pro | Comprehensive; multiple premium options |
| **4. Forms & Lead Generation** | 95% | Gravity Forms, WPForms, Contact Form 7 | Excellent coverage; Gravity Forms gold standard |
| **5. Email Marketing** | 90% | Mailchimp, ConvertKit, MailerLite plugins | Good integrations; some features require external platform |
| **6. Analytics** | 85% | MonsterInsights, GA4 integrations | Good Google integration; heatmaps need third-party |
| **7. Social Media** | 80% | Social Snap, Jetpack, Buffer | Auto-posting and analytics well covered |
| **8. Editorial Calendar** | 85% | Edit Flow, PublishPress, CoBlocks | Good workflow support |
| **9. Automation** | 75% | Zapier, Workflows plugins | Strong external integration; native limited |
| **10. Personalization** | 70% | Advanced plugins, CRM integrations | Requires serious extensions |
| **11. Comments & Community** | 80% | Disqus, BuddyPress, Asgaros Forum | Native comments basic; forums need plugin |
| **12. Multilingual** | 90% | WPML, Polylang | Industry-leading tools |
| **13. E-commerce** | 95% | WooCommerce | Dominant, nearly complete ecosystem |
| **14. Performance** | 90% | WP Rocket, Cloudflare, ShortPixel | Excellent optimization options |
| **15. Security** | 95% | Wordfence, iThemes Security, Sucuri | Best-in-class protection |
| **16. Admin & Customization** | 95% | Elementor, ACF Pro, Theme plugins | Highly customizable without code |
| **17. Developer Tools** | 90% | Query Monitor, WP-CLI, Composer | Strong developer experience |

---

## RECOMMENDATION: Why WordPress Dominates

**Coverage**: 90%+ feature coverage across all 17 categories
**Ecosystem**: 58,000+ plugins provide extensibility
**Community**: 43% of web uses WordPress
**Pricing**: Free core + affordable plugins ($50-500/year for SMB setup)
**Hosting**: Managed WordPress hosting optimized for platform
**No Custom Build Required**: Off-the-shelf plugins handle 95% of needs

### The Baseline You Must Match

To compete with WordPress, a content platform must provide:

1. **Real-time editing** with revision history & approval workflows
2. **Integrated SEO** with keyword tracking, readability, schema markup
3. **Native email integration** (signup forms, automation)
4. **Analytics** (traffic, conversions, heatmaps)
5. **Social publishing** (auto-posting, social cards, scheduling)
6. **Multi-contributor workflow** (drafts, review, publication)
7. **File-system simplicity** (not SaaS-locked)
8. **Performance** (caching, CDN, lazy loading built-in)
9. **Security** (backups, malware scanning, access control)
10. **Customization** without leaving the platform

WordPress meets all 10. Alternative platforms (Astro, Next.js static sites) require custom development for most—making them unsuitable for SMBs without engineering teams.
