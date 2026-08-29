# Coffeniya — Market Opportunity Report
## Supplier & Inventory Management Software for Independent Coffee Shops

**Prepared:** 29 August 2026
**Scope:** Competitive landscape, voice-of-customer pain analysis, market sizing (TAM/SAM/SOM), pricing and subscription model design, go-to-market wedge, risks, and an AI build prompt for v1.

> **Sourcing note.** Every figure in this report links to the page it came from. Values from market-research firms are labeled **[EST]**, government counts **[GOV]**, and our own arithmetic **[DERIVED]**. Where a number could not be verified from a primary source it is written **n.a.** rather than estimated. Forum quotes were captured via automated extraction — cite the thread, not the exact string.

---

## 1. Executive summary

**The verdict: yes, there is a real opportunity — but it is a narrow, pricing-disciplined one, and the wedge is not inventory counting.**

Five findings drive the thesis:

1. **The category exists but has abandoned the bottom of the market.** Dedicated restaurant inventory/purchasing software clusters at $99, $150–$160, $199–$249 and $350 per location per month ([Square](https://squareup.com/us/en/inventory-management/restaurants), [Dripos](https://www.dripos.com/coffee-shop-inventory-management), [MarketMan](https://www.marketman.com/), [WISK](https://www.wisk.ai/price), [MarginEdge](https://www.marginedge.com/pricing/)). A single café's realistic back-office anchor is the $49–$149/month band it already pays Square ([Square pricing](https://squareup.com/us/en/point-of-sale/restaurants/pricing)). The $20–$80 café-native band is essentially empty.

2. **Most credible-looking competitors will not even show a price.** Craftable, xtraCHEF, Restaurant365, Apicbase, Nory, Crunchtime, Odeko, Toast Inventory, Clover, BlueCart, Ottimate, COGS-Well and Kitchen Stocker are all demo- or quote-walled. A solo owner cannot buy without a sales call.

3. **The default competitor is a spreadsheet plus a group chat, and it is losing.** "We frequently deplete our supplies since we only communicate in a group chat when items are running low," and "everyone judges 'out' or 'low' differently" ([r/coffeeshopowners](https://www.reddit.com/r/coffeeshopowners/comments/1f4x26n/inventory/)). Operators running $160k/month and $1.5M/year venues still report Google Sheets, Excel and Tableau ([r/barista](https://www.reddit.com/r/barista/comments/1pfqcbq/how_do_other_cafes_and_restaurant_owners_track/)).

4. **The only pain owners spontaneously put a dollar figure on is supplier price creep, not counting.** "Started ordering with different vendors and I'm saving over $1,000–$1,500 every week"; "With three food distributors we see a 10% decrease in food spend across the board" ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/127v9rv/vendor_was_overcharging_me_for_every_product/)). Waste tracking, by contrast, is explicitly "low on priority list" ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/17dwf1m/how_to_keep_track_of_waste/)).

5. **Timing is favorable.** Only 30% of US coffee industry leaders report positive trading conditions, down 50% from 2024, against record green coffee costs and a 50% tariff on Brazilian imports ([World Coffee Portal](https://www.worldcoffeeportal.com/news/growth-slows-in-58-5bn-us-branded-coffee-shop-market-amid-unprecedented-cost-pressures/)). Cost-control tooling sells into fear.

**The constraint to internalize:** this is a **$100–226M global annual TAM** at realistic ARPU, not a billion-dollar one. It is a capital-efficient, high-retention niche business — or a wedge into a broader café operating system. It is not a venture-scale market on inventory SaaS revenue alone. Monetization beyond subscription (supplier rebates, group purchasing, payments, financing) is what changes that ceiling.

**Recommended positioning:** *"Coffeniya watches what your suppliers charge you and tells you what to order. Free to start, $39/month, live in an afternoon."* Lead with invoice price-change auditing and one-tap reordering. Add counts and recipe costing as the retention layer, not the pitch.

---

## 2. Competitive landscape

### 2.1 Market map

The space splits into six groups that rarely overlap — which is itself the opportunity.

| Group | Representative players | What they do | What they miss for cafés |
|---|---|---|---|
| **Mid-market inventory + purchasing suites** | MarketMan, WISK, Craftable, MarginEdge, Optimum Control | Counts, POs, recipe costing, actual-vs-theoretical variance | $150–$350/mo, heavy setup, contracts |
| **Enterprise back-office platforms** | Restaurant365, Crunchtime/Zenput, Apicbase, Nory, Yellow Dog | Multi-unit consolidation, accounting, ops execution | Priced and built for 5+ units; quote-only |
| **POS-native inventory** | Square (MarketMan-powered), Toast Inventory/xtraCHEF, Lightspeed, Clover, Dripos | Depletion tracking tied to sales | Shallow supplier workflow; "usually not great" per operators |
| **Free supplier-ordering networks** | REKKI, Choco, Cut+Dry, BlueCart, Notch | Order and chat with suppliers in one place | No counts, no costing, no invoice auditing |
| **Costing / recipe tools** | meez, Galley, COGS-Well, Cropster | Recipe cards, plate cost, roast data | No supplier ordering |
| **Café supply aggregators** | Odeko | They *are* the supplier — order and delivery | Locks you into their catalog; no price published |

### 2.2 Published pricing — the honest comparison

The single most useful competitive fact is who publishes a price and what it is.

| Product | Published price (per location/month) | Contract | Free tier / trial | Source |
|---|---|---|---|---|
| Backbar | **$0** Basic / $99 Essential / $149 Pro | None; annual paid upfront | Permanent free tier + 1-month trial | [Backbar](https://www.getbackbar.com/pricing) |
| Thrive by Shopventory | $49 / $109 / $229 | Annual for best rate | 14-day full-featured trial | [Thrive](https://shopventory.com/cafe-and-coffee-shop-inventory-management/) |
| Square Restaurant Inventory | **$99** add-on (on top of Square Plus/Premium) | Month-to-month, no setup fees | No | [Square](https://squareup.com/us/en/inventory-management/restaurants) |
| Galley (SMB) | $99 | "No enterprise-level commitment required" | n.a. | [Galley](https://www.galleysolutions.com/blog/new-pricing-for-smb-kitchens) |
| Optimum Control OC Pro | $150 **+ $250 setup** | Not stated | Not stated | [TracRite](https://www.tracrite.net/restaurant-management-software/) |
| Dripos (POS + inventory) | $160 core | Not stated | Not stated | [Dripos](https://www.dripos.com/coffee-shop-inventory-management) |
| MarketMan | $199 Starter / $249 Growth (homepage & G2) — but $249/$299/$449+ on its own pricing page | Reported 12-month term, 60-day notice, reports of $500 setup fee | **No trial, no free plan** | [MarketMan](https://www.marketman.com/), [pricing page](https://www.marketman.com/pricing-for-restaurant-inventory-management-system), [G2](https://www.g2.com/products/marketman/pricing), [r/restaurateur](https://www.reddit.com/r/restaurateur/comments/1sybx38/marginedge_vs_marketman/) |
| WISK | $249 beverage / $249 food / $399 bundled | Annual saves 17% | "WISK does not offer a free trial" | [WISK](https://www.wisk.ai/price) |
| Yellow Dog | $295 | **Two-year contract** | n.a. | [Yellow Dog](https://www.yellowdogsoftware.com/pricing) |
| MarginEdge | **$350** all-inclusive ($500 with Freepour) | 10% off annual | n.a. | [MarginEdge](https://www.marginedge.com/pricing/) |
| meez | $19 / $89 / $179 | n.a. | n.a. | [meez](https://www.getmeez.com/pricing) |
| Cropster | From €26 (roasting) + Cafe €39/machine; free app to 10 roasts | n.a. | Free app tier | [Cropster](https://www.cropster.com/packages/) |
| Craftable, xtraCHEF, R365, Apicbase, Nory, Crunchtime, Ottimate, BlueCart, Notch, Odeko, Clover, Kitchen Stocker, COGS-Well, Petpooja, Restroworks, Lavu | **Not published** | — | — | vendor pricing pages, all demo-gated |
| REKKI / Choco / Cut+Dry | **Free for the buyer** | None | Free forever | [REKKI](https://rekki.com/app), [Choco FAQ](https://choco.com/us/faq), [Cut+Dry](https://cutanddry.com/restaurants/) |

**Read this table as a pricing corridor.** Anything a café can self-serve today is either free-and-shallow (ordering networks), $49–$99 and generic, or $150+ and heavy. The gap is a *café-native* product that unifies ordering, price auditing and counts under $80.

### 2.3 Who actually serves a single independent café

**Genuinely viable today:** Backbar (only real freemium), Square's MarketMan-powered add-on, Dripos, Thrive, Kitchen Stocker, meez, Galley SMB, Optimum Control, COGS-Well (month-to-month, no annual commitment — [COGS-Well](https://www.cogs-well.com/pricing)), and the free ordering apps.

**Built for chains, despite marketing to independents:**
- **Apicbase** — tiering literally "Starting from 5 outlets," annual credit-card billing, +15% for monthly ([Apicbase](https://get.apicbase.com/pricing-plans/)).
- **Crunchtime/Zenput** — "850+ restaurant brands in 150,000+ locations" ([Crunchtime](https://www.crunchtime.com/)).
- **Restaurant365** — "consolidates purchasing, inventory, and reporting across all units"; reviewers report "Adoption and setup took a long time" and site outages "during our accounting close week" ([R365](https://www.restaurant365.com/inventory/inventory-management/), [Capterra](https://www.capterra.com/p/139768/Restaurant365/reviews/)).
- **Nory** — $37M Series B, but the Ordering Assistant is still Beta and the Invoicing Assistant is "coming soon" ([Nory](https://www.nory.ai/)).
- **MarketMan** — markets Starter to "independent operators," yet G2 notes reviewers "report serious difficulty canceling contracts, citing undisclosed 12-month agreements and aggressive retention tactics" ([G2](https://www.g2.com/products/marketman/pricing)).

The recurring operator verdict on the mid-market tier, from a ~$300k-revenue venue evaluating four products: xtraChef "too costly and complicated for what we need," Restaurant365 "too pricey and complicated," MarginEdge "also too expensive and complex," Craftable "pricey and complicated without autopar or real-time data feeds from Toast (only updates once daily)" ([r/ToastPOS](https://www.reddit.com/r/ToastPOS/comments/1lq9vs3/current_state_of_inventory_software/)).

### 2.4 Ten white-space gaps

1. **The $20–$80/month café-native band is empty.** Below $99 you get recipe-costing-only (meez $19) or generic non-food inventory (Zoho $29).
2. **Only one vendor offers a permanent free single-site tier** — Backbar Basic, capped at 10 recipes and 6 months of history ([Backbar](https://www.getbackbar.com/pricing)).
3. **Nobody unifies free supplier ordering with counts and cost tracking.** REKKI, Choco and Cut+Dry are ordering-only; meez, COGS-Well and Cropster have no supplier ordering.
4. **Invoice OCR is gated to expensive AP tools.** Ottimate has 98%-accuracy capture but no counts, no food cost, quote-only pricing; Yellow Dog bundles unlimited scanning at $295/mo on a two-year term.
5. **Automatic recipe re-costing when vendor prices move is an admitted gap** — "both platforms lack the capability to automatically adjust recipe costs when vendor prices fluctuate" (MarginEdge vs MarketMan) ([r/restaurateur](https://www.reddit.com/r/restaurateur/comments/1sybx38/marginedge_vs_marketman/)). Only Kitchen Stocker promises it, and hides its price.
6. **Beverage-first bias.** WISK, Backbar, Sculpture/Bevinco and Craftable's Bevager all originate in liquor counting. Café units — bean bags, milk cases, cups/lids, pastry par by daypart — appear only in the smallest tools.
7. **Contract-free self-serve buying is rare.** Only Square inventory, Zoho, COGS-Well, Backbar and Kitchen Stocker state month-to-month terms.
8. **Onboarding is the category's failure mode, not features.** "I find it really difficult to implement, especially getting it started" (MarketMan); "There is a fair amount of setup required" (Optimum Control); "the implementation team did a very careless job" (Yellow Dog); "The initial set up takes time" (Craftable) — all from [Capterra](https://www.capterra.com/p/136439/Marketman-Restaurant-Inventory/reviews/) review pages.
9. **The reliability bar is low enough to be a differentiator.** "It was quite buggy and had inadequate support. They even deleted our entire database once by mistake" (Backbar) ([r/ToastPOS](https://www.reddit.com/r/ToastPOS/comments/1lq9vs3/current_state_of_inventory_software/)).
10. **Supplier-side lock-in.** Cut+Dry restricts you to "your existing contracted distributors" and is not a marketplace; Choco users cannot self-add a supplier ("Impossibilité d'ajouter soi-même un fournisseur" — [Capterra](https://www.capterra.com/p/251850/Choco/)). REKKI's no-forms supplier onboarding is the exception worth copying.

### 2.5 Consolidation timeline — the category is being rolled up

| Date | Event | Source |
|---|---|---|
| 2021 | Toast acquires xtraCHEF (terms undisclosed) | [Restaurant Business](https://www.restaurantbusinessonline.com/technology/toast-acquires-back-office-software-company-xtrachef) |
| 12 Jan 2022 | MarketMan merges with Meal Ticket; PSG invests $100M | [BoiseDev](https://boisedev.com/news/2022/01/12/meal-ticket-marketman/) |
| 12 Apr 2022 | Choco raises $111M at $1.2B valuation | [Choco](https://choco.com/us/press/choco-achieves-unicorn-status) |
| 16 Jun 2022 | BlueCart acquires Revolution Ordering | [BlueCart](https://www.bluecart.com/blog/bluecart-acquires-revolution) |
| 23 Jun 2022 | Crunchtime acquires Zenput; combined 100,000+ locations | [Crunchtime](https://www.crunchtime.com/press/crunchtime-acquires-zenput) |
| 2022–23 | ChefHero → Notch, then $13.7M CAD raise to pivot to fintech | [BetaKit](https://betakit.com/after-navigating-major-changes-to-restaurant-industry-notch-closes-13-7-million-cad-to-fuel-pivot-to-fintech/) |
| 12 Dec 2023 | Plate IQ rebrands as Ottimate, broadens beyond restaurants | [Ottimate](https://ottimate.com/news/meet-ottimate-plate-iq-rebrands-as-leading-ap-automation-ai/) |
| 10 Sep 2024 | TouchBistro acquires PeachWorks, launches Inventory & Labor | [BusinessWire](https://www.businesswire.com/news/home/20240910808759/en/TouchBistro-Launches-Inventory-Management-and-Labor-Management-Software-Expanding-its-Portfolio-of-Back-of-House-Solutions-for-Restaurants) |
| 4 Mar 2025 | Odeko raises $126M Series E, acquires Butter Insurance | [NRN](https://www.nrn.com/restaurant-technology/e-commerce-startup-odeko-raises-126-million-in-series-e-funding) |
| 16 Sep 2025 | Nory raises $37M Series B (total $62.6M), US expansion | [Nory](https://www.nory.ai/blog/nory-series-b-funding-to-revolutionise-restaurant-operations) |

**Two implications.** First, the strategic buyers are identified and active — POS platforms (Toast, TouchBistro, Square/Block, Lightspeed) and back-office roll-ups (Crunchtime, R365, MarketMan/PSG) all buy in this space, which is a credible exit path. Second, the well-funded players are all moving *up* market or sideways into fintech, which is precisely why the bottom is vacating.

---

## 3. What coffee shop owners actually complain about

Eight themes, ranked by the combination of frequency and how much money owners attach to them.

### Theme 1 — Supplier price creep hides inside invoices *(highest commercial value)*
- "the same vendor and item, yet the price keeps creeping higher each week. Then occasional 'fuel surcharges,' delivery fees, or 'market adjustments' appear." ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/1op4fi6/how_are_you_keeping_track_of_vendor_price_changes/))
- "Suppliers often employ a tactic called product differentiation — altering descriptions or package sizes — to make price tracking harder." Same operator built a Google Sheets script to pull invoices from supplier sites and flag "margin creep." ([same thread](https://www.reddit.com/r/restaurantowners/comments/1op4fi6/how_are_you_keeping_track_of_vendor_price_changes/))
- "Started ordering with different vendors and I'm saving over $1,000–$1,500 every week." ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/127v9rv/vendor_was_overcharging_me_for_every_product/))
- "my produce supplier revises their prices bi-weekly… They pay less simply because they order in larger quantities." ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/1aln7z9/why_are_we_constantly_complaining_about_the_same/))

**Severity: high. This is the only theme owners dollarize themselves, and the only one where they build their own tools.** That is the definition of a wedge.

### Theme 2 — Ordering and stock control run on spreadsheets and group chats
- "We frequently deplete our supplies since we only communicate in a group chat when items are running low." ([r/coffeeshopowners](https://www.reddit.com/r/coffeeshopowners/comments/1f4x26n/inventory/))
- "everyone judges 'out' or 'low' differently… some will say we are out when there is just no backup of the item." ([same](https://www.reddit.com/r/coffeeshopowners/comments/1f4x26n/inventory/))
- "we're utilizing Google Sheets with specific 'thresholds'… When our stock dips below these thresholds, we initiate a new order." ([r/barista](https://www.reddit.com/r/barista/comments/1pfqcbq/how_do_other_cafes_and_restaurant_owners_track/))

Near-universal across threads from 2018 to 2026.

### Theme 3 — Counting is a recurring time tax
- "I've been tracking inventory with Excel spreadsheets, but it's too time-consuming." ([r/barista](https://www.reddit.com/r/barista/comments/jm8uej/how_do_you_guys_keep_track_of_inventory/))
- The same operator, after moving to Toast: "Inventory always takes a lot of time… Still, I had to count everything." ([same](https://www.reddit.com/r/barista/comments/jm8uej/how_do_you_guys_keep_track_of_inventory/))
- Reported cadences range from "Last shift takes inventory. 15 minutes. worth it" to monthly full counts with weekly coffee counts ([r/coffeeshopowners](https://www.reddit.com/r/coffeeshopowners/comments/1f4x26n/inventory/), [r/barista](https://www.reddit.com/r/barista/comments/1pfqcbq/how_do_other_cafes_and_restaurant_owners_track/)).

A verified hours-per-week benchmark is **n.a.** — do not put a fabricated "5 hours a week" in a pitch deck.

### Theme 4 — Order minimums, delivery windows and short-shipping
- "a 15-case minimum is required… they delivered the wrong product… not until two days later, forcing me to abandon my planned recipe." ([r/KitchenConfidential](https://www.reddit.com/r/KitchenConfidential/comments/1ih511l/food_distributor_questionsissues/))
- "if they are out of something, they don't have the decency to call… it just gets shorted on the order." ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/1aln7z9/why_are_we_constantly_complaining_about_the_same/))
- "email vs. phone orders, fulfilling par levels, mandatory order minimums… Some suppliers require certain permits, that you pay COD, only deliver on certain days." ([r/Coffee](https://www.reddit.com/r/Coffee/comments/9mmfhh/coffee_shop_owners_what_do_you_use_for_managing/))

### Theme 5 — Multi-vendor fragmentation
- "setup with at least two food distributors (three or more is better) and compare the price of each item on every order… Break down each pack size to the smallest possible unit." ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/127v9rv/vendor_was_overcharging_me_for_every_product/))
- "I have to now price shop Cash & Carry, Costco, WinCo, Walmart and Fred Meyer." ([same subreddit](https://www.reddit.com/r/restaurantowners/comments/1aln7z9/why_are_we_constantly_complaining_about_the_same/))
- A group-buying thread: beans at £17–22/kg individually versus a £13–15/kg pooled target — though a roaster pushed back that "the volume one cafe works at (10kg/week ish) is all the discount" ([r/coffeeshopowners](https://www.reddit.com/r/coffeeshopowners/comments/1m0gkjv/coffee_shop_owners_would_you_be_interested_in/)).

**Note the counter-evidence on group buying.** It tempers any plan to lead with a buying-collective model.

### Theme 6 — Input inflation compressing already-thin margins
- "record green coffee costs, a 50% tariff on Brazilian coffee imports… just 30% of industry leaders surveyed reporting positive trading conditions – down 50% from 2024." ([World Coffee Portal](https://www.worldcoffeeportal.com/news/growth-slows-in-58-5bn-us-branded-coffee-shop-market-amid-unprecedented-cost-pressures/))
- "To maintain our margins from 18 months ago, we should raise wholesale prices by about 75 to 100%." — Rick Evans, Evans Brothers ([r/roasting](https://www.reddit.com/r/roasting/comments/1s3wwfj/keeping_wholesale_accounts_amidst_rising_coffee/))
- "So we absorb the cost, and every time it gets harder." — UK operator ([Perfect Daily Grind, Aug 2026](https://perfectdailygrind.com/2026/08/medium-sized-coffee-shops-struggles/))
- Median $3.52 hot coffee and $5.47 cold brew (Aug 2025), prices up year-over-year in 41 states ([Daily Coffee News](https://dailycoffeenews.com/2025/09/29/report-u-s-coffee-shop-coffee-prices-are-rising/))

### Theme 7 — Waste measurement never sticks *(and is a GTM trap)*
- "always as we're half way through the list it gets busy and the list is abandoned." ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/17dwf1m/how_to_keep_track_of_waste/))
- "Now I own a restaurant, that is low on priority list." ([same](https://www.reddit.com/r/restaurantowners/comments/17dwf1m/how_to_keep_track_of_waste/))
- "Wastage, dialling in, extra cups to fight the heat, mistakes, spills… makes the 'per unit' makeup quite hard to judge." ([r/Coffee](https://www.reddit.com/r/Coffee/comments/9mmfhh/coffee_shop_owners_what_do_you_use_for_managing/))
- Context: 12.5M tons of foodservice surplus food in 2024, over 85% landfilled or incinerated ([ReFED](https://refed.org/stakeholders/restaurants-and-foodservice/)). Café-level waste percentage: **n.a.**

**Do not lead with waste.** It matters to the P&L and not to the buyer's attention.

### Theme 8 — Existing tools are too heavy, too expensive, too painful to set up
- MarketMan reviews: "setup can be time-consuming for complex menus, and very small operations may find the pricing and feature depth more than needed"; "The setup is very tedious and takes a LOT of work." ([Capterra](https://www.capterra.com/p/136439/Marketman-Restaurant-Inventory/))
- "Built-in inventory tools on budget POS systems such as Square aren't very helpful for coffee shop stock management." ([r/Coffee](https://www.reddit.com/r/Coffee/comments/9mmfhh/coffee_shop_owners_what_do_you_use_for_managing/))
- "managing inventory and COGS" was the **#1 restaurant tech challenge** (22% ranking it top-3, up 4 points YoY), while invoice/procurement management fell outside the top five most-used technologies ([Toast Restaurant Industry Outlook 2023](https://d2c9w5yn32a2ju.cloudfront.net/assets/Toast-Restaurant-Industry-Outlook-Report-2023-Edition.pdf))
- The category on G2 for small business spans 114 products averaging 4.26/5, with recurring cons around sync gaps, slow order updates, and MarginEdge's "steep learning curve" ([G2](https://www.g2.com/categories/restaurant-inventory-management/small-business))

**That last data point is the whole thesis in one line: the #1 stated tech problem is the one whose tooling operators refuse to buy.**

### Cross-cutting: margins too thin to absorb any of it
- "the spreadsheet doesn't balance unless you as the owner are working for free for 90+ hours a week" ([r/smallbusiness](https://www.reddit.com/r/smallbusiness/comments/zzxq1g/how_bad_of_an_idea_is_it_to_open_a_coffee_shop/))
- "Aim for at least a 70% margin"; specialty beans 40–60p/cup; "She doesn't even earn a salary from it." ([r/smallbusinessuk](https://www.reddit.com/r/smallbusinessuk/comments/1ldh6r2/coffee_shop_owners_how_do_you_make_any_money/))
- UK: 13,000+ businesses lost since 2022 and 13,250+ hospitality insolvencies since the April 2022 VAT change ([Caffè Culture](https://www.caffecultureshow.com/uk-coffee-shops-struggling))
- Industry net profit margin, Canadian proxy: **3.8% of revenue** (2026) **[EST]** ([IBISWorld Canada](https://www.ibisworld.com/canada/industry/coffee-snack-shops/1973/))

---

## 4. Total addressable market

### 4.1 Establishment counts

| Measure | Value | Year | Label | Source |
|---|---|---|---|---|
| US Coffee & Snack Shops businesses | 94,331 (+3.4% YoY) | 2026 | [EST] | [IBISWorld](https://www.ibisworld.com/united-states/number-of-businesses/coffee-snack-shops/1973/) |
| US NAICS 722515 private establishments | **83,817** (945,076 employees) | 2024 | **[GOV]** | [BLS QCEW](https://data.bls.gov/cew/data/api/2024/a/industry/722515.csv) |
| US branded (chain, ≥5 outlets) outlets | **45,227** across 588 brands | 2026 | [EST] | [World Coffee Portal](https://www.worldcoffeeportal.com/news/growth-slows-in-58-5bn-us-branded-coffee-shop-market-amid-unprecedented-cost-pressures/) |
| **US independents (derived)** | **~38,600–49,100** | 2024–26 | [DERIVED] | 83,817 − 45,227 = 38,590; 94,331 − 45,227 = 49,104 |
| Independent share of US cafés & bars | 61.88% | 2025 | [EST] | [Mordor Intelligence](https://www.mordorintelligence.com/industry-reports/united-states-cafes-&-bars-market) |
| Independent directory listing count | "64,000+ independent coffee shops" | 2026 | first-party | [joe.coffee](https://joe.coffee/) |
| Canada | 8,769 businesses ($6.7bn) | 2026 | [EST] | [IBISWorld Canada](https://www.ibisworld.com/canada/industry/coffee-snack-shops/1973/) |
| UK cafés | 8,881 businesses (£6.7bn) | 2026 | [EST] | [IBISWorld UK](https://www.ibisworld.com/united-kingdom/industry/cafes-coffee-shops/6242/) |
| Australia | 27,821 businesses (A$15.9bn) | 2026 | [EST] | [IBISWorld AU](https://www.ibisworld.com/australia/industry/cafes-coffee-shops/2015/) |
| Europe branded outlets | 51,042 (+4.7%) | 2025 | [EST] | [World Coffee Portal](https://www.worldcoffeeportal.com/news/fastest-growth-in-five-years-for-the-european-branded-coffee-shop-market/) |

**Caveats that matter.** The 38,600–49,100 independent range mixes units (establishments vs. businesses vs. outlets) and NAICS 722515 includes non-coffee snack bars. Use the range, not a point estimate. Independent-vs-chain splits for Canada, Europe and Australia are **n.a.**

### 4.2 Industry revenue

| Measure | Value | Label | Source |
|---|---|---|---|
| US coffee & snack shops revenue | $75.5bn (2026), 2.5% CAGR 2021–26 | [EST] | [IBISWorld](https://www.ibisworld.com/united-states/industry/coffee-snack-shops/1973/) |
| US branded coffee shop segment | $58.5bn → $82.4bn by Sept 2030 (7.1% CAGR) | [EST] | [World Coffee Portal](https://www.worldcoffeeportal.com/news/growth-slows-in-58-5bn-us-branded-coffee-shop-market-amid-unprecedented-cost-pressures/) |
| Implied US non-branded revenue | ~$17bn (rough; mismatched scopes) | [DERIVED] | — |
| Average revenue per US coffee/snack business | ~$800k | [DERIVED] | $75.5bn ÷ 94,331 |
| US restaurant industry | $1.5T sales, 15.9M employees (2025) | [EST] | [NRA](https://restaurant.org/education-and-resources/resource-library/the-2025-state-of-the-industry-shows-cautious-optimism/) |
| Global coffee shop market | **n.a.** — third-party estimates ranged $81bn–$237bn for the same year; none validated | — | — |

### 4.3 How much software budget actually exists

This is the constraint that sets your price ceiling.

| Measure | Value | Source |
|---|---|---|
| Restaurant IT budget as % of revenue | **1.97%** (2021; 2.0% in 2020) | [Hospitality Technology 2022 study](https://www.hughes.com/sites/hughes.com/files/2022-11/HT-2022-Restaurant-Technology-Study-Making-Magic-Happen.pdf) |
| Distribution of IT spend | <0.99%: 21% of operators; 1–1.99%: 47%; 2–2.99%: 13%; 3–3.99%: 8%; 4–5.99%: 11% | [same](https://www.hughes.com/sites/hughes.com/files/2022-11/HT-2022-Restaurant-Technology-Study-Making-Magic-Happen.pdf) |
| Software adoption | POS 82%, payroll 56%, accounting 55%; 84% of new restaurants chose cloud POS | [Toast Outlook 2023](https://d2c9w5yn32a2ju.cloudfront.net/assets/Toast-Restaurant-Industry-Outlook-Report-2023-Edition.pdf) |
| Operators planning tech investment | 28% | [NRA 2025](https://restaurant.org/education-and-resources/resource-library/the-2025-state-of-the-industry-shows-cautious-optimism/) |

**[DERIVED] The math:** 1.97% × ~$800k average revenue ≈ **$15.8k/year (~$1,300/month) total IT wallet per location** — and POS plus payments consume most of it. A back-office ordering/inventory product realistically competes for **$1,200–$3,000/year, i.e. $100–$250/month**. That is exactly where the incumbents sit, which is why they are stuck: they are pricing at the top of the available wallet for a product that is not the operator's first purchase.

**What independents already pay, for calibration:**

| Product | Price | Source |
|---|---|---|
| Toast Point of Sale | $69/mo (1 location, up to 2 terminals) | [Toast](https://pos.toasttab.com/pricing) |
| Square for Restaurants | $0 / $49 / $149 per location/mo | [Square](https://squareup.com/us/en/point-of-sale/restaurants/pricing) |
| Square inventory add-on | $99/mo/location | [Square](https://squareup.com/us/en/point-of-sale/restaurants/pricing) |
| Square payroll | $35/mo + $6/person | [Square](https://squareup.com/us/en/point-of-sale/restaurants/pricing) |

The mental anchor for "another back-office subscription" is **$49–$149**. The dedicated inventory category starts at $199. **That gap is the packaging opening.**

### 4.4 TAM / SAM / SOM

**Bottom-up TAM — English-speaking core markets**

Addressable sites = US independents (conservative 38,600) + Canada 8,769 + UK 8,881 + Australia 27,821 ≈ **84,000 sites** (≈94,600 using the higher US figure). [DERIVED]

| ARPU/mo | Sites | Annual TAM |
|---|---|---|
| $39 (Coffeniya Core, proposed) | 84,000 | **~$39M** |
| $79 (Coffeniya Pro, proposed) | 84,000 | **~$80M** |
| $99 (Square inventory anchor) | 84,000 | ~$100M |
| $149 (Square Premium anchor) | 84,000 | ~$150M |
| $199 (MarketMan Starter) | 84,000 | ~$201M |
| $199 | 94,600 | ~$226M |

**US-only TAM:** 38,600–49,100 sites × $199/mo = **$92M–$117M**; at $99/mo, **$46M–$58M**. [DERIVED]

**SAM — US independents with a POS** (82% POS adoption, [Toast](https://d2c9w5yn32a2ju.cloudfront.net/assets/Toast-Restaurant-Industry-Outlook-Report-2023-Edition.pdf)) ≈ **31,700–40,300 sites** → **$75M–$96M at $199/mo**, $38M–$48M at $99/mo. [DERIVED]

**SOM — 5-year penetration scenarios** (assumption set, not research):

| Penetration | Sites (US SAM) | ARR at $59 blended | ARR at $99 blended |
|---|---|---|---|
| 1% | ~320–400 | $0.23M–$0.28M | $0.38M–$0.48M |
| 3% | ~950–1,210 | $0.67M–$0.86M | $1.13M–$1.44M |
| 5% | ~1,590–2,020 | $1.13M–$1.43M | $1.89M–$2.40M |
| 10% | ~3,170–4,030 | $2.24M–$2.85M | $3.77M–$4.79M |

**Sanity check against the category:** a $100–226M independent-café TAM is 2–4% of the $5.26bn (2026) global restaurant inventory and purchasing software market **[EST]** ([Research and Markets](https://www.globenewswire.com/news-release/2026/01/16/3220210/28124/en/5-25-Bn-Restaurant-Inventory-Management-Purchasing-Software-Market-Global-Forecasts-Report-2026-2032.html)), which is forecast to reach $12.69bn by 2032 at 15.75% CAGR. The broader restaurant management software market is put at $6.60bn in 2025 growing to $14.70bn by 2030 at 17.4% CAGR **[EST]** ([Grand View Research](https://www.grandviewresearch.com/industry-analysis/restaurant-management-software-market)). Both include chains, hotels and catering — treat them as ceiling references, not as your TAM.

**The honest conclusion:** subscription revenue alone caps this at a strong small business — roughly $3–5M ARR at 10% US penetration. Getting past that requires either geographic expansion (Australia has more café businesses than the UK), adjacent modules (scheduling, cash-up, payments), or **transaction-based revenue on the supply flow** — which is exactly why Odeko raised $126M and Notch pivoted to fintech.

### 4.5 Retention and unit-economics reality

| Metric | Value | Source |
|---|---|---|
| Monthly logo churn at ARPA <$25 | **6.1%** | [ChartMogul](https://chartmogul.com/blog/good-customer-churn-rate/) |
| Monthly logo churn at ARPA >$500 | 2.2% | [ChartMogul](https://chartmogul.com/blog/good-customer-churn-rate/) |
| Top-quartile retention, <$25 ARPA vs >$1k ARPA | 64.7% vs 85.8% | [ChartMogul](https://chartmogul.com/blog/good-customer-churn-rate/) |
| Median NRR / GRR, ACV <$12k band | 98% / 90% | [SaaS Capital 2025 Retention Benchmarks](https://www.saas-capital.com/wp-content/uploads/2025/09/RB32WS1-2025-B2B-SaaS-Retention-Benchmarks.pdf) |
| Startup median customer churn | 16.25%/yr; revenue churn 12.50%/yr | [Lighter Capital 2025](https://www.lightercapital.com/blog/2025-b2b-saas-startup-benchmarks) |
| Median S&M efficiency multiple | 3.19x in 2025, down from 6.08x | [Lighter Capital](https://www.lightercapital.com/blog/2025-b2b-saas-startup-benchmarks) |
| Business survival, all US establishments | ~50% at 5 years; ~35–36% at 10 years | **[GOV]** [BLS](https://www.bls.gov/bdm/entrepreneurship/bdm_chart3.htm) |

**Plan for 3–5% monthly logo churn (30–46% annually)** at a $39–$79 price point unless the product creates genuine workflow lock-in. Note that roughly half of your customers will not exist in five years regardless of product quality — a structural churn floor no amount of UX fixes. SMB restaurant SaaS CAC in dollars is **n.a.**; use the S&M efficiency multiple rather than inventing a CAC.

**Design implication:** lock-in must come from being where the supplier order actually happens. A tool the owner opens once a month to count is churnable. A tool that holds their order guides, their supplier contacts and their price history is not.

---

## 5. Is there really an opportunity? — the verdict

**Yes, with three qualifications.**

### The case for

| Signal | Evidence |
|---|---|
| The problem is the #1 stated tech pain | "Managing inventory and COGS" ranked #1 restaurant tech challenge, up 4 pts YoY ([Toast](https://d2c9w5yn32a2ju.cloudfront.net/assets/Toast-Restaurant-Industry-Outlook-Report-2023-Edition.pdf)) |
| The incumbent is a spreadsheet | Multiple threads, 2018–2026, including $1.5M-revenue venues ([r/barista](https://www.reddit.com/r/barista/comments/1pfqcbq/how_do_other_cafes_and_restaurant_owners_track/)) |
| Existing tools are actively rejected on price/complexity | Four products dismissed as "too pricey and complicated" in one thread ([r/ToastPOS](https://www.reddit.com/r/ToastPOS/comments/1lq9vs3/current_state_of_inventory_software/)) |
| Owners already build DIY versions of the wedge | Google Sheets scripts pulling supplier invoices to flag margin creep ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/1op4fi6/how_are_you_keeping_track_of_vendor_price_changes/)) |
| Quantified value is large relative to price | $1,000–$1,500/week savings, 10% food spend reduction claims ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/127v9rv/vendor_was_overcharging_me_for_every_product/)) |
| Macro urgency | Only 30% of leaders report positive trading conditions, −50% vs 2024 ([World Coffee Portal](https://www.worldcoffeeportal.com/news/growth-slows-in-58-5bn-us-branded-coffee-shop-market-amid-unprecedented-cost-pressures/)) |
| Incumbents are vacating the low end | Nory, Apicbase, Crunchtime, R365 all multi-unit; Odeko and Notch moved to supply and fintech |
| Clear acquirer set | Toast, TouchBistro, Square, Lightspeed, Crunchtime, R365 all acquired in this space since 2021 |

### The case against

| Risk | Evidence |
|---|---|
| **The TAM is small** | $100–226M globally at $99–199 ARPU; $39M at $39 ARPU [DERIVED] |
| **Churn is structural** | 6.1%/mo at low ARPA ([ChartMogul](https://chartmogul.com/blog/good-customer-churn-rate/)); ~50% of establishments gone in 5 years ([BLS](https://www.bls.gov/bdm/entrepreneurship/bdm_chart3.htm)) |
| **Free competitors already own the ordering workflow** | REKKI (10,000+ venues), Choco ($1.2B valuation), Cut+Dry — all free to the buyer |
| **Square can bundle you away** | Square already resells MarketMan-powered inventory at $99/mo, month-to-month, no setup fee ([Square](https://squareup.com/us/en/inventory-management/restaurants)) |
| **The buyer has no time and thin margins** | "Now I own a restaurant, that is low on priority list" ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/17dwf1m/how_to_keep_track_of_waste/)); 3.8% industry net margin [EST] |
| **Group buying may not deliver the promised discount** | "the volume one cafe works at (10kg/week ish) is all the discount" ([r/coffeeshopowners](https://www.reddit.com/r/coffeeshopowners/comments/1m0gkjv/coffee_shop_owners_would_you_be_interested_in/)) |
| **Data acquisition is the hard part** | Supplier catalogs and invoices are PDFs, emails and portals; there is no standard |

### The three qualifications

1. **Win on onboarding, not features.** Every incumbent's worst review is about setup. The product must be useful within one session — upload three invoices, see price changes. Anything requiring a full recipe database before first value will fail against a spreadsheet.

2. **Price under the Square anchor, not under the MarketMan anchor.** $39 Core and $79 Pro, not $149 and $249. You are competing with free plus a spreadsheet, not with MarginEdge.

3. **Plan the second revenue line from day one.** Subscription alone tops out around $3–5M ARR at plausible penetration. Supplier-side monetization (paid supplier profiles, order-flow fees, group purchasing rebates, working-capital financing on coffee purchases) is the difference between a niche SaaS and a platform. REKKI's model — free to buyers, £10/month per customer to suppliers ([REKKI](https://rekki.com/marketplace)) — is the proof of concept.

---

## 6. Pricing and subscription model

### 6.1 Design principles

| Principle | Rationale |
|---|---|
| **Free tier must be permanent and genuinely useful** | Only Backbar offers one; free is how you beat the spreadsheet ([Backbar](https://www.getbackbar.com/pricing)) |
| **Self-serve, month-to-month, no setup fee** | Contracts and setup fees are the loudest complaint against MarketMan and Yellow Dog |
| **Per location, unlimited users** | Cafés have high staff turnover; per-seat pricing punishes the exact behavior you want (baristas logging counts) |
| **Price below $99** | $99 is the Square add-on anchor; you must be visibly cheaper than the incumbent bundle |
| **Annual discount ~17–20%** | Matches WISK (17%) and Backbar (~13–20%); improves cash and cuts churn |
| **No feature paywalls on the core loop** | Gating ordering or price alerts kills the retention mechanism |

### 6.2 Recommended tiers

| | **Free** | **Core** | **Pro** | **Multi-Site** |
|---|---|---|---|---|
| **Price** | $0 forever | **$39**/mo per location ($390/yr, ~17% off) | **$79**/mo per location ($790/yr) | **$69**/mo per location, 3+ locations |
| **Target** | Solo owner, pre-revenue, or new café | Single independent café | Established café doing real cost control | Small local group / roaster with 2–5 bars |
| Suppliers tracked | 3 | Unlimited | Unlimited | Unlimited |
| Users | Unlimited | Unlimited | Unlimited | Unlimited |
| Mobile stock counts | ✓ | ✓ | ✓ | ✓ |
| Par levels & low-stock alerts | ✓ (5 items) | ✓ Unlimited | ✓ Unlimited | ✓ Unlimited |
| One-tap reorder (email/SMS/WhatsApp to supplier) | — | ✓ | ✓ | ✓ |
| Invoice capture (photo/PDF/email-in) | 10/mo | 100/mo | Unlimited | Unlimited |
| **Price-change alerts & vendor price history** | Last 30 days | ✓ Full history | ✓ Full history + per-item trend charts | ✓ + cross-location price comparison |
| Recipe/drink cost cards with auto re-costing | — | 15 recipes | Unlimited | Unlimited |
| COGS %, theoretical vs actual usage | — | Monthly summary | ✓ Weekly + variance reporting | ✓ + site-vs-site benchmarking |
| POS integration (Square, Toast, Clover, Lightspeed) | — | ✓ 1 POS | ✓ | ✓ |
| Accounting export (QuickBooks, Xero) | CSV | CSV | ✓ Direct sync | ✓ Direct sync |
| Multi-location roll-up & transfers | — | — | — | ✓ |
| Support | Email, 48h | Email, 24h | Priority chat | Named contact |
| Onboarding | Self-serve | Self-serve + guided import | Free 45-min setup call | White-glove import |
| Contract | None | Month-to-month | Month-to-month | Month-to-month |
| Setup fee | **$0** | **$0** | **$0** | **$0** |

**14-day free trial of Pro for every new account**, then auto-downgrade to Free (never to a paywall). Free is the safety net, so nobody loses their data — which is the single strongest anti-churn mechanic available at this price point.

### 6.3 Why $39 / $79

| Reference point | Price | Implication for Coffeniya |
|---|---|---|
| Square for Restaurants Plus | $49/mo/location ([Square](https://squareup.com/us/en/point-of-sale/restaurants/pricing)) | $39 sits below the POS the café already pays for — an easy yes |
| Square inventory add-on | $99/mo ([Square](https://squareup.com/us/en/inventory-management/restaurants)) | Coffeniya Pro at $79 undercuts the default bundle by 20% |
| Thrive Starter | $49/mo ([Thrive](https://shopventory.com/cafe-and-coffee-shop-inventory-management/)) | Nearest self-serve competitor; beat it on café-native workflow |
| Backbar Essential | $99/mo ([Backbar](https://www.getbackbar.com/pricing)) | Beat on price and on not being bar-first |
| MarketMan Starter | $199/mo, no trial ([G2](https://www.g2.com/products/marketman/pricing)) | 5x your Core price — your competitive headline |
| MarginEdge | $350/mo ([MarginEdge](https://www.marginedge.com/pricing/)) | The price operators cite when rejecting the category |
| Total IT wallet per location | ~$1,300/mo, mostly POS [DERIVED] | $39–79 is 3–6% of IT spend — a rounding error to approve |

**Value framing for the sales page:** $39/month is $468/year. A single caught price increase on one high-volume SKU — or one avoided emergency milk run — covers it. Operators in the source threads describe five-figure annual savings from vendor price discipline ([r/restaurantowners](https://www.reddit.com/r/restaurantowners/comments/127v9rv/vendor_was_overcharging_me_for_every_product/)). The ROI story does not require exaggeration.

### 6.4 Modeled economics

Assumptions stated as assumptions, not findings.

| Assumption | Value | Basis |
|---|---|---|
| Blended ARPU | $52/mo | Mix of 60% Core, 30% Pro, 10% Multi-Site |
| Free-to-paid conversion | 6% | Assumption; freemium SMB norm range 2–10% |
| Monthly logo churn | 4% | Between ChartMogul's <$25 (6.1%) and >$500 (2.2%) bands ([ChartMogul](https://chartmogul.com/blog/good-customer-churn-rate/)) |
| Gross margin | 82% | Assumption; hosting + OCR inference costs |
| Payback target | <9 months | Assumption; keeps S&M multiple near the 3.19x median ([Lighter Capital](https://www.lightercapital.com/blog/2025-b2b-saas-startup-benchmarks)) |

Implied lifetime at 4% monthly churn ≈ 25 months → **LTV ≈ $1,066 gross-margin dollars** per customer. That sets a **CAC ceiling of roughly $350** for a 3:1 LTV:CAC. At that CAC, paid acquisition is marginal and the go-to-market must be content, community and roaster/supplier partnerships — not ads.

### 6.5 Second revenue line (year 2+)

| Stream | Model | Precedent |
|---|---|---|
| Supplier subscriptions | Free to cafés, paid supplier profiles and order management | REKKI: free to buyers, £10/mo per customer to suppliers ([REKKI](https://rekki.com/marketplace)) |
| Order-flow / marketplace fee | % of GMV on orders placed through discovered suppliers | Choco, BlueCart ($2B+ platform sales, [BlueCart](https://www.bluecart.com/blog/bluecart-acquires-revolution)) |
| Group purchasing rebates | Aggregate demand for milk, cups, lids; take a share of the discount | Caution: roaster pushback on bean-volume discounts ([r/coffeeshopowners](https://www.reddit.com/r/coffeeshopowners/comments/1m0gkjv/coffee_shop_owners_would_you_be_interested_in/)) |
| Supply + delivery | Become the supplier | Odeko, $126M Series E ([NRN](https://www.nrn.com/restaurant-technology/e-commerce-startup-odeko-raises-126-million-in-series-e-funding)) |
| Payments / working capital | Pay suppliers on terms, finance coffee purchases | Notch's fintech pivot ([BetaKit](https://betakit.com/after-navigating-major-changes-to-restaurant-industry-notch-closes-13-7-million-cad-to-fuel-pivot-to-fintech/)) |

Start with supplier subscriptions and order-flow fees — they require no balance sheet and no inventory risk.

---

## 7. Go-to-market wedge

**Sequence: audit → order → count → cost.** Do not build in the order the category built.

| Phase | Wedge | Why now |
|---|---|---|
| **1. Invoice price auditing** | Photograph or email in an invoice; Coffeniya extracts line items and flags every price change vs. last order, including pack-size and description changes | The only dollarized pain; owners already DIY it in Sheets |
| **2. One-tap reordering** | Par levels + low-stock alerts + send the order to the supplier however they receive it (email, SMS, WhatsApp) with no supplier onboarding required | REKKI proved suppliers do not need to be on the platform |
| **3. Fast counts** | 90-second shift-end count on phone, café units (bean bags, milk cases, cups/lids), photo-based | Replaces the group chat; "Last shift takes inventory. 15 minutes" |
| **4. Auto re-costed drinks** | Recipe cards for every drink that re-cost automatically when bean or oat milk prices move | Explicit admitted gap in MarginEdge and MarketMan |

**Beachhead:** single-location specialty cafés in one metro, 1–3 sites, $300k–$900k revenue, already on Square or Toast, buying from 4–10 suppliers including a local roaster and a dairy distributor.

**Channels, ranked by fit to a $350 CAC ceiling:**
1. Roaster partnerships — a roaster with 30 wholesale accounts is a 30-café distribution channel, and roasters have a direct interest in accounts that order predictably.
2. r/coffeeshopowners, r/barista, r/cafeowners — where the pain is already documented; participate, don't advertise.
3. Square and Toast app marketplaces — where the buyer already shops for add-ons.
4. Local coffee festivals and SCA events — where Sculpture Hospitality still runs "Discovery Audits" ([FSR Magazine](https://www.fsrmagazine.com/industry-news/sculpture-hospitality-accelerates-growth-while-celebrating-30th-anniversary/)).
5. Free "invoice price audit" as a lead magnet — upload three invoices, get a report on what your suppliers raised. This is the entire wedge as a growth loop.

**Validation checklist before writing production code:**
- Collect 20 real invoice sets from 20 cafés and measure how many price increases you can detect automatically. If extraction accuracy is below ~95% on line items, the wedge does not work.
- Confirm the average number of suppliers per café — this is currently **n.a.** in all sources and is a core assumption.
- Measure hours per week spent ordering and counting — also **n.a.**; you need your own number for the ROI page.
- Test whether owners will pay $39 before it exists (pre-orders or a waitlist deposit).

---

## 8. Risks and mitigations

| Risk | Severity | Mitigation |
|---|---|---|
| Square/Toast bundles equivalent inventory into their base tier | High | Be POS-agnostic; own the supplier relationship layer they don't touch; build the price-audit data moat |
| Invoice extraction accuracy below the usability bar | High | Human-in-the-loop review for the first N invoices per supplier; build per-supplier templates that improve with volume |
| Churn from café closures | High (structural) | ~50% 5-year survival ([BLS](https://www.bls.gov/bdm/entrepreneurship/bdm_chart3.htm)); price for it, and build multi-site expansion revenue |
| Free ordering apps (REKKI, Choco) add counting and costing | Medium | They have been ordering-only for years; move fast on the combined workflow, and go deeper on café-specific units than a generalist will |
| Suppliers resist digitization | Medium | Never require supplier onboarding — send orders in whatever format they already accept |
| TAM ceiling limits fundraising | Medium | Frame as café operating system with a supply-side take rate, not as inventory SaaS |
| Owners simply don't have time to adopt anything | Medium | The 48-hour-setup, no-credit-card standard set by Kitchen Stocker is the bar to beat ([Kitchen Stocker](https://www.kitchenstocker.com/en/para/software-gestion-inventario-para-cafeterias)) |

---

## 9. Known evidence gaps

Do not fill these with invented numbers in any investor or customer-facing material. All are **n.a.** after primary-source search:

- Average annual revenue of a single independent coffee shop (only the ~$800k [DERIVED] industry-wide average and anecdotes of ~$160k/month and ~$1.5M/year)
- Café COGS %, gross margin %, and waste % — the SCA's own benchmarking article names the ratios but publishes no values ([SCA](https://sca.coffee/sca-news/25/issue-6/english/benchmarking-your-business-zbaz2))
- Hours per week spent on ordering and counting
- Average number of suppliers per coffee shop
- Coffee-shop-specific closure/failure rate
- Independent-vs-chain splits for Canada, Europe and Australia
- Validated global coffee shop market revenue (third-party estimates ranged $81bn–$237bn for the same year)
- SMB restaurant SaaS CAC in dollars
- Pricing for Craftable, xtraCHEF, R365, Apicbase, Nory, Crunchtime, Odeko, Kitchen Stocker, COGS-Well and Ottimate (all quote-walled)

---

## 10. AI build prompt for v1

Paste the block below into a code-generation tool (Claude Code, Cursor, Lovable, v0, Bolt, Replit Agent). It is written to produce a working, demo-able v1 focused on the wedge — invoice price auditing plus one-tap reordering — rather than the whole category.

```
# BUILD PROMPT — Coffeniya v1

## Role
You are a senior full-stack engineer and product designer. Build a production-quality
web application called **Coffeniya**: supplier and inventory management for independent
coffee shops. Ship a working v1 that a real café owner could use tomorrow.

## The user
Maya owns two independent coffee shops. She has 7 suppliers: a local roaster, a dairy
distributor, a bakery, a cups/lids wholesaler, a syrup supplier, a produce vendor and
Costco. She orders by text, email and phone. She tracks stock in a Google Sheet that
is always out of date, and her team reports low stock in a group chat. She suspects her
suppliers raise prices quietly. She has 20 minutes a day and no patience for setup.

## The core insight — build for this, in this order
1. **Invoice price auditing is the hook.** Maya uploads or emails in invoices; Coffeniya
   extracts line items and flags every price change versus the last time she bought that
   item, including sneaky pack-size and description changes.
2. **One-tap reordering is the habit.** Par levels trigger a suggested order; she reviews
   and sends it to the supplier in whatever format that supplier already accepts. Suppliers
   NEVER need an account.
3. **Fast counting is the data engine.** A 90-second phone count at shift end.
4. **Auto re-costed drinks are the retention layer.** When bean or oat milk prices change,
   every drink cost updates automatically.

Do NOT build a full ERP. Do NOT require a complete recipe database before the app is useful.
First value must arrive within 5 minutes of signup.

## Tech stack
- Next.js 15 (App Router) + TypeScript + Tailwind CSS + shadcn/ui
- Postgres via Supabase (auth, storage, row-level security), Drizzle or Prisma ORM
- Server Actions for mutations; Zod for all validation
- Invoice extraction: multimodal LLM call (vision) on the uploaded image/PDF returning
  strict JSON. Abstract this behind `lib/extraction/` with a mock provider so the app is
  fully testable without API keys.
- Charts: Recharts. Dates: date-fns. Tables: TanStack Table.
- Mobile-first: the counting and ordering flows must be thumb-usable on a phone one-handed.
- Seed script with realistic demo data (2 locations, 7 suppliers, 60 items, 6 months of
  invoice history with deliberate price creep planted in 5 items, 12 drink recipes).

## Data model (minimum)
- organizations, locations, users (roles: owner, manager, barista)
- suppliers: name, contact_name, email, phone, preferred_order_channel
  (email | sms | whatsapp | portal), order_minimum, delivery_days[], lead_time_days, notes
- items: name, category (coffee | dairy | bakery | packaging | syrups | produce | other),
  base_unit (g | kg | ml | L | each | case), pack_size, pack_unit, supplier_id, sku,
  current_unit_cost, par_level, reorder_point, is_active
- item_aliases: maps messy supplier-invoice descriptions to a canonical item (critical —
  suppliers rename and re-pack items to obscure price changes)
- invoices: supplier_id, location_id, invoice_number, invoice_date, subtotal, fees, total,
  file_url, extraction_status, extraction_confidence
- invoice_lines: invoice_id, raw_description, matched_item_id, qty, pack_size, unit_cost,
  line_total, previous_unit_cost, pct_change, flagged_reason
- price_events: item_id, supplier_id, observed_at, old_unit_cost, new_unit_cost, pct_change,
  source_invoice_id, acknowledged_by, acknowledged_at
- counts: location_id, counted_by, counted_at, status; count_lines: count_id, item_id,
  qty_on_hand
- orders: supplier_id, location_id, status (draft | sent | confirmed | received | cancelled),
  sent_via, sent_at, expected_delivery, total_estimate
- order_lines: order_id, item_id, qty, unit_cost_estimate
- recipes: name, yield_qty, yield_unit, sell_price; recipe_ingredients: recipe_id, item_id,
  qty, unit  → derive cost_per_unit and margin, recalculated whenever an item cost changes

## Screens to build
1. **Onboarding (must take under 5 minutes)**
   - Create org + first location.
   - Three paths to get data in, all optional and skippable: (a) upload 1–3 invoices,
     (b) paste a Google Sheets/CSV item list with a smart column mapper, (c) add suppliers
     manually. Never block the user on completing setup.
   - Immediately after the first invoice, show the extracted lines and let the user confirm
     item matches. This confirmation trains item_aliases.

2. **Dashboard — "This week's money"**
   - Big number: total flagged price increases this month, in dollars and percent.
   - Cards: items below reorder point; orders to send today (based on supplier delivery days
     and lead times); invoices awaiting review; drinks whose margin dropped this month.
   - A sparkline of unit cost over time for the top 5 most volatile items.

3. **Price Watch (the hero feature)**
   - Table of every price change detected, newest first: item, supplier, old cost → new cost,
     % change, dollar impact annualized at current purchase volume, invoice link.
   - Filters by supplier, category, magnitude. Sort by dollar impact, not percentage.
   - Detect and label these cases distinctly: straight price increase, pack-size shrink at
     the same price (unit cost up), description change on the same product, new fee or
     surcharge line, and an item that got cheaper (so she can renegotiate the ones that didn't).
   - "Acknowledge" and "Dispute with supplier" actions. Dispute generates a short, polite,
     editable email quoting the previous invoice number, date and price.

4. **Invoices**
   - Upload (drag-drop, camera capture on mobile, or a unique email-in address per org).
   - Extraction review screen: invoice image on the left, editable extracted lines on the
     right, confidence highlighting on low-certainty fields. Unmatched descriptions get a
     fuzzy-match suggestion list plus "create new item".
   - Any human correction must persist as an alias so the same supplier's format improves.

5. **Order Builder**
   - Per supplier: suggested order from par level minus current on-hand plus expected usage,
     with the supplier's order minimum and next delivery day shown inline.
   - Editable quantities, running total, warning when below order minimum.
   - Send via the supplier's preferred channel. Generate a clean plain-text order body plus a
     PDF attachment. Suppliers need no account — this is a hard requirement.
   - Order history with a "receive" flow that reconciles delivered vs. ordered and captures
     shorts (short-shipping is a top operator complaint).

6. **Count (mobile-first)**
   - Category-grouped list, large tap targets, numeric keypad, no scrolling between fields.
   - Remembers the last count order so the sequence matches the physical walk through the shop.
   - Café-native units: bean bags (kg), milk cases (units), cup sleeves, syrup bottles.
   - Shows the previous count and expected usage inline so a mis-key is obvious.
   - Partial counts are valid — never force a full count.

7. **Drink Costing**
   - Recipe builder for espresso drinks with configurable dose in grams, milk in ml, cup, lid,
     sleeve, syrup pumps.
   - Cost per drink, margin at the current sell price, and a badge when margin dropped because
     an ingredient cost rose — with a link to the invoice that caused it.
   - "What if" slider: if bean cost rises 10%, what happens to every drink's margin.

8. **Suppliers**
   - Directory with contact, preferred channel, order minimum, delivery days, lead time.
   - Per supplier: spend over time, price-change count, on-time and short-shipping record.
   - Item-level price comparison across suppliers where the same item is bought from more
     than one.

## Product rules that must not be violated
- Zero setup fee, zero contract framing anywhere in the UI. Self-serve throughout.
- Unlimited users on every plan. Baristas must be able to count without a paid seat.
- Nothing in the core loop (count → alert → order → invoice → price flag) is paywalled.
- The free tier is permanent: 3 suppliers, 5 par-level alerts, 10 invoices per month,
  30 days of price history. Paid tiers are Core $39/mo per location and Pro $79/mo per
  location, month-to-month, with a 14-day Pro trial that downgrades to Free rather than
  locking the account. Implement plan gating with a feature-flag layer, not hard-coded checks.
- Every list view is usable on a phone in a loud café with wet hands. Big targets, high
  contrast, no hover-only affordances.
- Offline tolerance on the Count screen: queue locally and sync when connectivity returns.

## Design direction
Warm, calm, and confident — the opposite of enterprise back-office software. Cream and
espresso-brown neutrals with a single terracotta accent for actions and a clear amber/red
for price increases. Generous whitespace. Numbers set in a tabular-figure font so columns
align. No dashboards for their own sake: every number must answer "what should I do today?"

## Deliverables
1. Working app, `npm install && npm run dev`, seeded demo data, no API keys required
   (mock extraction provider by default, real provider behind an env var).
2. `README.md` with setup, architecture, data model diagram and the plan-gating map.
3. Unit tests for: unit-cost normalization across pack sizes, price-change detection
   including pack-size shrink, par-level order suggestion math, and recipe re-costing.
4. A `DEMO.md` script walking a café owner through the 5-minute first-value path.
5. Deployable to Vercel with Supabase; include env var documentation.

## Build order
Ship in this sequence and make each step demo-able before moving on:
1. Auth, org/location setup, seed data, suppliers and items CRUD.
2. Invoice upload → extraction → review → price_events generation. **This is the hero; get
   it genuinely good before anything else.**
3. Price Watch screen with dollar-impact ranking and the dispute email generator.
4. Counts (mobile) and par-level alerts.
5. Order Builder and multi-channel send.
6. Drink costing with auto re-costing.
7. Plan gating, billing stubs, onboarding polish.
```

---

## 11. Recommended next steps

| # | Action | Timeline |
|---|---|---|
| 1 | Interview 20 independent café owners; capture supplier count, ordering hours, and willingness to pay $39 | Weeks 1–3 |
| 2 | Collect 20 real invoice sets and measure automated line-item extraction accuracy — the go/no-go gate | Weeks 1–4 |
| 3 | Build the v1 wedge from the prompt above; target first value in under 5 minutes | Weeks 3–10 |
| 4 | Design partners: 5 cafés free for 90 days in exchange for weekly feedback | Weeks 6–14 |
| 5 | Recruit 3 local roasters as referral partners; their wholesale books are your channel | Weeks 8–16 |
| 6 | Launch the free "invoice price audit" lead magnet and publish the aggregate findings as content | Month 4 |
| 7 | Instrument the metrics that decide the business: activation (first invoice reviewed), week-4 retention, price increases caught per account per month | Ongoing |
| 8 | Revisit supplier-side monetization once you have 200 paying cafés and real order-flow volume | Month 12+ |

---

### Appendix — source inventory

Primary and secondary sources fetched for this report include: vendor pricing and product pages (MarketMan, WISK, Backbar, Craftable, Restaurant365, MarginEdge, Yellow Dog, Optimum Control/TracRite, Apicbase, Nory, Dripos, Thrive/Shopventory, Kitchen Stocker, COGS-Well, meez, Galley, Cropster, REKKI, Choco, Cut+Dry, BlueCart, Odeko, Ottimate, Toast, Square, Clover, Petpooja, Restroworks, Crunchtime/Zenput, Sculpture Hospitality); G2 and Capterra product and review pages; operator threads in r/coffeeshopowners, r/barista, r/Coffee, r/restaurantowners, r/restaurateur, r/ToastPOS, r/KitchenConfidential, r/roasting, r/smallbusiness and r/smallbusinessuk; trade and industry sources including World Coffee Portal, Daily Coffee News, Perfect Daily Grind, Caffè Culture, Specialty Coffee Association, FSR Magazine, Nation's Restaurant News, Restaurant Business, BetaKit, BoiseDev, BusinessWire and EU-Startups; market and benchmark data from IBISWorld (US, Canada, UK, Australia), BLS QCEW and Business Employment Dynamics, National Restaurant Association, Hospitality Technology, Toast Restaurant Industry Outlook, ReFED, Datassential, Mordor Intelligence, Grand View Research, Research and Markets, SaaS Capital, ChartMogul and Lighter Capital. Every specific figure links inline to the page that stated it.

*Research and analysis compiled 29 August 2026. Figures labeled [EST] are third-party research-firm estimates, [GOV] are government statistics, and [DERIVED] are calculations from cited inputs. Items marked n.a. could not be verified from a primary source and should not be treated as known.*
