export type CostRow = { route: string; open?: string; enclosed?: string; price?: string };
export type FaqItem = { q: string; a: string };

export type ServiceData = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  tagline: string;
  intro: string;
  whatIs: string;
  howItWorks: string[];
  costIntro: string;
  costRows: CostRow[];
  costNote: string;
  factors: { title: string; text: string }[];
  faqs: FaqItem[];
  relatedSlugs: string[];
};

export const serviceData: Record<string, ServiceData> = {
  "door-to-door-car-shipping": {
    slug: "door-to-door-car-shipping",
    metaTitle: "Door-to-Door Car Shipping Services | Royal Auto Ship",
    metaDesc:
      "Door-to-door auto transport nationwide — carrier picks up and delivers directly to your address. $0 down, fully insured. Free quote: (215) 201-2020.",
    h1: "Door-to-Door Car Shipping Services",
    tagline: "Pickup at your driveway. Delivery to theirs.",
    intro:
      "Door-to-door car shipping means a carrier meets you at your address, loads your vehicle, and drops it at the destination address — no terminals, no extra miles, no second trip. It is the most convenient form of auto transport and the standard Royal Auto Ship uses on every individual shipment.",
    whatIs:
      "With door-to-door service your car never sits in a storage lot. The carrier comes to where the vehicle lives, completes a bumper-to-bumper inspection report, and delivers to wherever the car needs to be — a home, a business, a new apartment. If a large carrier truck cannot safely reach a tight street, the driver arranges a nearby meeting point and walks you through it in advance.",
    howItWorks: [
      "Submit your free quote with origin address, destination address and vehicle details.",
      "A dedicated advisor confirms the all-inclusive price and books the order.",
      "We assign a vetted, insured carrier — you receive driver details and expected pickup window.",
      "Driver arrives, completes a photo inspection report, loads the vehicle.",
      "Live updates throughout transit; you or your designee meets the driver at the destination.",
      "Final inspection against the pickup report, sign, pay the balance.",
    ],
    costIntro:
      "Door-to-door rates are typically 3–8% higher than terminal-to-terminal because of the added carrier flexibility. The convenience almost always outweighs the difference.",
    costRows: [
      { route: "Philadelphia → Miami (1,200 mi)", open: "$650 – $850", enclosed: "$1,050 – $1,350" },
      { route: "Chicago → Dallas (920 mi)", open: "$600 – $800", enclosed: "$950 – $1,200" },
      { route: "New York → Los Angeles (2,800 mi)", open: "$1,050 – $1,350", enclosed: "$1,600 – $2,100" },
      { route: "Seattle → Phoenix (1,400 mi)", open: "$750 – $950", enclosed: "$1,150 – $1,500" },
    ],
    costNote:
      "Prices are estimates based on current fuel and demand. Your quote is all-inclusive — no fuel surcharges, no hidden fees.",
    factors: [
      { title: "Distance", text: "The primary driver. Longer routes spread cost over more miles and more carrier time." },
      { title: "Transport type", text: "Open carriers are the economical choice; enclosed adds weather and debris protection." },
      { title: "Vehicle size", text: "Oversized trucks, lifted vehicles and non-standard widths may require larger equipment." },
      { title: "Season & demand", text: "Snowbird corridors (Florida, Arizona) surge in fall and spring. Book early to lock a rate." },
      { title: "Running vs non-running", text: "A non-running vehicle needs a winch-equipped carrier — add $75–$200." },
    ],
    faqs: [
      { q: "How close to my address can the carrier come?", a: "Almost always directly to your driveway. On very narrow streets or low-clearance roads the driver may ask you to meet a short distance away — they call you first and choose the closest safe point." },
      { q: "Do I need to be present for pickup?", a: "Someone needs to be present to sign the inspection report at pickup and delivery. You can designate a trusted person if you cannot be there yourself." },
      { q: "How long does door-to-door shipping take?", a: "Regional routes (under 500 miles) typically take 1–3 days. Coast-to-coast runs 7–10 days. Your advisor gives you a pickup window at booking." },
      { q: "Is door-to-door more expensive than terminal shipping?", a: "Usually 3–8% more. For most customers the saved time and eliminated terminal trips make door-to-door the better value." },
      { q: "What if my car is not running?", a: "Tell us at quoting and we will assign a carrier with a winch. The rate is slightly higher to account for the extra equipment." },
    ],
    relatedSlugs: ["open-car-shipping", "enclosed-car-shipping", "motorcycle-shipping"],
  },

  "open-car-shipping": {
    slug: "open-car-shipping",
    metaTitle: "Open Car Shipping & Auto Transport | Royal Auto Ship",
    metaDesc:
      "Open car transport — the safe, insured industry standard for moving vehicles across the US. Most economical option. Free quote from Royal Auto Ship.",
    h1: "Open Car Shipping Services",
    tagline: "The industry standard. Safe, insured, most economical.",
    intro:
      "Open car shipping is how the vast majority of vehicles move across the United States. Your car rides on an exposed multi-vehicle carrier — the same type that delivers new cars from factories to dealerships. It is safe, well-understood and the most cost-effective way to transport a vehicle.",
    whatIs:
      "An open carrier is a multi-level trailer holding 6–10 vehicles, exposed to the elements. The vehicles are strapped and secured by the driver; exposure to rain, dust or road spray is the nature of open transport. For any standard passenger vehicle it presents no meaningful risk — millions of cars ship this way every year without incident. If you are moving a classic, exotic or freshly restored vehicle, enclosed transport may be worth the premium.",
    howItWorks: [
      "Request your free quote — route, vehicle type, preferred dates.",
      "Advisor confirms the all-inclusive price. Nothing due at this step.",
      "Carrier assigned; you receive driver details and pickup window.",
      "Driver loads your vehicle onto the multi-car trailer, completes inspection report.",
      "Updates throughout; you meet the driver at the destination.",
      "Final inspection, sign, pay balance on delivery.",
    ],
    costIntro:
      "Open transport is the most affordable category in auto shipping. Typical ranges by route:",
    costRows: [
      { route: "East Coast ↔ West Coast (2,500–3,000 mi)", open: "$950 – $1,400" },
      { route: "Midwest ↔ South (600–1,200 mi)", open: "$550 – $850" },
      { route: "Northeast ↔ Southeast (800–1,500 mi)", open: "$600 – $950" },
      { route: "Within a single region (under 500 mi)", open: "$350 – $600" },
    ],
    costNote: "All quotes include fuel, insurance and tolls. No deposit required until carrier assignment.",
    factors: [
      { title: "Distance", text: "The biggest factor. Per-mile cost decreases on longer hauls." },
      { title: "Vehicle size & weight", text: "Pickups, large SUVs and lifted vehicles take more space on the trailer." },
      { title: "Seasonal demand", text: "Summer and snowbird season (Oct–Dec southbound, Mar–May northbound) push rates up." },
      { title: "Lead time", text: "Booking 2–3 weeks out typically secures the best rate; last-minute adds urgency fees." },
      { title: "Running condition", text: "Non-running vehicles require winch equipment — slightly higher cost." },
    ],
    faqs: [
      { q: "Is open transport safe?", a: "Yes. It is the industry standard — the method used for virtually every new car shipped from factory to dealer. Vehicles are secured with straps and chains; incidents are rare." },
      { q: "Will my car get dirty?", a: "Road grime and dust are possible. A wash on arrival is common. Physical damage from exposure is extremely rare on properly secured vehicles." },
      { q: "When should I choose enclosed instead?", a: "Consider enclosed for classic, exotic, show or freshly restored vehicles where any cosmetic exposure is unacceptable. For everyday drivers, open is the right choice." },
      { q: "How many cars are on the truck?", a: "Typically 8–10 vehicles on a standard two-level open carrier." },
      { q: "What insurance covers my vehicle?", a: "The carrier's cargo insurance covers your vehicle from pickup to delivery. We verify this before every assignment." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "enclosed-car-shipping", "classic-car-shipping"],
  },

  "enclosed-car-shipping": {
    slug: "enclosed-car-shipping",
    metaTitle: "Enclosed Car Shipping Services — Classic & Exotic Transport | Royal Auto Ship",
    metaDesc:
      "Enclosed auto transport for classics, exotics and luxury vehicles. Full protection from weather and road debris. $0 down, fully insured. Free quote.",
    h1: "Enclosed Car Shipping Services",
    tagline: "Maximum protection for your most prized vehicle.",
    intro:
      "Enclosed car shipping places your vehicle inside a fully covered trailer — protected from weather, road debris and prying eyes. It is the transport method of choice for classic cars, exotic sports cars, luxury vehicles and any car whose cosmetic condition cannot be compromised.",
    whatIs:
      "Enclosed carriers hold 2–6 vehicles in a sealed trailer with no exposure to the elements. Soft straps protect against scratch damage; many carriers include lift gates for low-clearance vehicles. The added protection commands a premium of roughly 50–80% over open transport, but for vehicles worth $50,000 or more the difference in cost is minor relative to the peace of mind.",
    howItWorks: [
      "Request a quote and specify enclosed transport.",
      "Advisor confirms pricing — enclosed rates are all-inclusive.",
      "We assign a carrier with the right enclosed equipment for your vehicle type.",
      "Lift gate or soft-strap loading as appropriate; full photo inspection at pickup.",
      "Sealed transit with updates; delivery to your door.",
      "Final inspection report, sign, pay balance.",
    ],
    costIntro:
      "Enclosed transport costs 50–80% more than open. For high-value vehicles the premium is easily justified:",
    costRows: [
      { route: "Philadelphia → Miami (1,200 mi)", enclosed: "$1,050 – $1,350" },
      { route: "Chicago → Dallas (920 mi)", enclosed: "$950 – $1,200" },
      { route: "New York → Los Angeles (2,800 mi)", enclosed: "$1,600 – $2,100" },
      { route: "Seattle → Phoenix (1,400 mi)", enclosed: "$1,150 – $1,500" },
    ],
    costNote: "Enclosed rates vary more than open rates due to lower carrier availability. Book 2+ weeks ahead.",
    factors: [
      { title: "Vehicle value", text: "The primary driver of the decision. Enclosed is standard for vehicles over $40–50k." },
      { title: "Vehicle height", text: "Extra-tall vehicles may require specific trailer types; our advisors will confirm." },
      { title: "Carrier availability", text: "Fewer enclosed carriers operate in any given corridor — book early for best rates." },
      { title: "Distance", text: "Same distance multiplier as open, on top of the base enclosed premium." },
    ],
    faqs: [
      { q: "What vehicles should use enclosed transport?", a: "Classic cars, exotic and supercar marques, luxury sedans and SUVs, freshly restored vehicles, show cars, and any car you are not comfortable exposing to road conditions." },
      { q: "Is enclosed transport significantly more expensive?", a: "Typically 50–80% more than open transport for the same route. On a cross-country move that might be $500–$700 extra on a vehicle worth $80,000 — most owners consider it worthwhile." },
      { q: "Do enclosed carriers use soft straps?", a: "Quality enclosed carriers use soft straps that contact the tires only, protecting painted surfaces and undercarriage components. We confirm equipment with the carrier before assignment." },
      { q: "How many cars fit in an enclosed trailer?", a: "2–6 vehicles depending on trailer type. Fewer vehicles means more personal attention to each." },
      { q: "Can you ship a non-running exotic?", a: "Yes, with a lift gate-equipped carrier. Mention the running condition at quoting." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "open-car-shipping", "classic-car-shipping"],
  },

  "motorcycle-shipping": {
    slug: "motorcycle-shipping",
    metaTitle: "Motorcycle Shipping Services — Nationwide Bike Transport | Royal Auto Ship",
    metaDesc:
      "Ship your motorcycle safely across the US. Strapped, crated or padded — Royal Auto Ship moves all bike types nationwide. $0 down, fully insured. Free quote.",
    h1: "Motorcycle Shipping Services",
    tagline: "Every bike strapped, padded and delivered the way it left.",
    intro:
      "Motorcycles require a different approach to transport than passenger cars — they need proper tie-down points, soft straps and carriers experienced with two-wheelers. Royal Auto Ship moves all motorcycle types, from cruisers and sport bikes to touring rigs and classic machines, across all 50 states.",
    whatIs:
      "Motorcycle shipping uses a combination of soft straps, foam padding and — for maximum protection — wooden crates or enclosed bike-specific trailers. The right method depends on the bike's value, distance and your preference. Our advisors will recommend the appropriate approach at quoting.",
    howItWorks: [
      "Request a quote and specify motorcycle type, size and any custom parts.",
      "Advisor recommends soft-strap open, enclosed or crated shipping.",
      "Carrier assigned; driver has experience with motorcycle loading.",
      "Bike inspected, secured and documented at pickup.",
      "Live updates throughout transit.",
      "Delivery to your door; inspect against pickup report.",
    ],
    costIntro: "Motorcycle shipping rates by distance:",
    costRows: [
      { route: "Under 500 miles", price: "$250 – $450" },
      { route: "500 – 1,000 miles", price: "$400 – $650" },
      { route: "1,000 – 2,000 miles", price: "$600 – $950" },
      { route: "Cross-country (2,000+ miles)", price: "$850 – $1,300" },
    ],
    costNote: "Crated shipping adds $150–$300 over standard soft-strap rates.",
    factors: [
      { title: "Bike size & weight", text: "Touring bikes and heavyweight cruisers cost slightly more than sport bikes." },
      { title: "Custom parts", text: "Wide bars, fairings or extended bags may require specific equipment." },
      { title: "Shipping method", text: "Open soft-strap is cheapest; crated enclosed is most protective and most expensive." },
      { title: "Route demand", text: "Seasonal routes (Sturgis corridor, Florida winter) see higher rates." },
    ],
    faqs: [
      { q: "Can you ship any type of motorcycle?", a: "Yes — cruisers, sport bikes, touring bikes, dirt bikes, ATVs, scooters and vintage machines. Note the type and any custom modifications at quoting." },
      { q: "What is crated motorcycle shipping?", a: "The bike is secured inside a wooden crate which then loads into an enclosed trailer. It offers maximum protection and is recommended for show bikes, vintage machines and high-value customs." },
      { q: "Should I drain the fuel tank?", a: "You should leave no more than a quarter tank of fuel — standard for all vehicle shipping for safety and weight regulations." },
      { q: "Will my chrome and paint be protected?", a: "Soft straps contact the frame only, not painted or chrome surfaces. We recommend noting any pre-existing chips or scratches on the inspection report." },
      { q: "Can you ship a non-running motorcycle?", a: "Yes. A non-rolling bike needs a carrier with ramp-loading capability; mention this at quoting." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "enclosed-car-shipping", "classic-car-shipping"],
  },

  "military-car-shipping": {
    slug: "military-car-shipping",
    metaTitle: "Military Car Shipping — PCS Auto Transport | Royal Auto Ship",
    metaDesc:
      "Military car shipping for PCS moves — priority scheduling, military discounts and advisors who understand deployment timelines. Free quote: (215) 201-2020.",
    h1: "Military Car Shipping Services",
    tagline: "PCS moves are stressful enough. We handle the car.",
    intro:
      "Permanent Change of Station orders don't wait. Royal Auto Ship offers priority scheduling and military discounts to service members and their families relocating under PCS orders, whether stateside or between CONUS ports of embarkation.",
    whatIs:
      "Military car shipping follows the same door-to-door process as civilian transport, with two differences: priority carrier dispatch for urgent PCS timelines and military-verified pricing. We work with active duty, reserve, National Guard and veterans. POA (Power of Attorney) shipments are handled routinely for service members who cannot be present at pickup.",
    howItWorks: [
      "Request a quote and mention your PCS orders or military status.",
      "Advisor applies military rate and confirms priority scheduling.",
      "Carrier assigned — we can accommodate tight windows typical of PCS moves.",
      "POA holder or designee can authorize pickup if the service member is not present.",
      "Live updates; delivery to new duty-station address or nearest accessible point.",
      "Inspection report, sign, payment on delivery.",
    ],
    costIntro: "Military rates are typically 5–10% below standard civilian rates:",
    costRows: [
      { route: "East Coast → West Coast", price: "$950 – $1,300" },
      { route: "Midwest → Southeast", price: "$550 – $800" },
      { route: "Any region, under 500 mi", price: "$300 – $550" },
    ],
    costNote: "Military discount applied at booking on verification of service status.",
    factors: [
      { title: "PCS timeline", text: "Rush moves within 72 hours carry a priority premium; standard lead time (5–7 days) gets the best rate." },
      { title: "New duty station location", text: "Remote installations may require a terminal or nearby meeting point for the final leg." },
      { title: "Vehicle type", text: "POVs of all types — sedans, trucks, SUVs — transported at standard rates with military discount applied." },
    ],
    faqs: [
      { q: "Do you offer a military discount?", a: "Yes. Active duty, reserve, National Guard and veterans receive a 5–10% discount on all shipments, verified at booking." },
      { q: "Can someone else authorize pickup on my behalf?", a: "Yes. A POA (Power of Attorney) document allows a designated person to authorize pickup and delivery in your absence — standard practice for deployed service members." },
      { q: "How quickly can you pick up for a PCS move?", a: "With priority dispatch we can often arrange pickup within 48–72 hours of booking. Contact your advisor as soon as orders are received." },
      { q: "Does the government reimburse auto transport for PCS?", a: "It depends on orders and branch of service. Many service members are partially or fully reimbursed through their transportation entitlement. We provide itemized receipts for reimbursement claims." },
      { q: "Can you deliver to an overseas port?", a: "We transport to CONUS ports of embarkation (Baltimore, Jacksonville, San Diego and others). OCONUS shipping from the port is arranged separately through the branch's transportation office." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "open-car-shipping", "enclosed-car-shipping"],
  },

  "snowbird-car-shipping": {
    slug: "snowbird-car-shipping",
    metaTitle: "Snowbird Car Shipping — Seasonal Auto Transport Florida & Arizona | Royal Auto Ship",
    metaDesc:
      "Ship your car south for winter, north for summer — the snowbird route specialist. Seasonal routes Florida, Arizona, South Carolina. Book early for best rates.",
    h1: "Snowbird Car Shipping Services",
    tagline: "Head south in October, north in April — we move your car both ways.",
    intro:
      "Snowbird car shipping moves vehicles between northern states and warm-weather destinations — primarily Florida, Arizona and the Carolinas — as retirees and seasonal residents follow the weather. Royal Auto Ship runs these corridors year-round, with surge capacity during the peak fall southbound and spring northbound seasons.",
    whatIs:
      "A snowbird shipment is a standard door-to-door or open transport on a high-volume seasonal corridor. What makes it different is timing: demand spikes sharply in October (southbound) and March–April (northbound), pushing rates up 15–30% and tightening pickup windows. Booking 3–6 weeks early is the single most effective way to secure a good rate and an on-time pickup.",
    howItWorks: [
      "Book 3–6 weeks before your desired pickup date — earlier is better in peak season.",
      "Advisor locks in your rate; you pay nothing until carrier assignment.",
      "Carrier dispatched; pickup at your northern address.",
      "Vehicle transported south on high-frequency Florida or Arizona corridor.",
      "Delivered to your seasonal residence, condo or storage facility.",
      "Reverse booking available in the same conversation for the spring return.",
    ],
    costIntro: "Snowbird corridor pricing (peak season Oct–Dec southbound, Mar–May northbound):",
    costRows: [
      { route: "Northeast (NJ/NY/CT) → Florida", open: "$750 – $1,100" },
      { route: "Midwest (IL/OH/MI) → Florida", open: "$700 – $1,000" },
      { route: "Northeast / Midwest → Arizona", open: "$950 – $1,350" },
      { route: "Same corridors, enclosed", enclosed: "$1,200 – $1,800" },
    ],
    costNote: "Off-peak (Jan–Sep) rates run 15–25% lower on these same corridors.",
    factors: [
      { title: "Booking timing", text: "Peak season early bookings (6+ weeks out) save 10–20% over last-minute requests." },
      { title: "Destination state", text: "Florida runs cheapest due to carrier volume; Arizona adds distance premium from the Northeast." },
      { title: "Origin city", text: "Coastal Northeast cities (Boston, NYC, Philly) have the most carrier availability." },
    ],
    faqs: [
      { q: "When should I book my fall southbound shipment?", a: "Ideally September for an October–November pickup. The later you wait, the higher the rate and the longer the pickup window." },
      { q: "Can I book the return trip at the same time?", a: "Yes. We encourage booking both directions together. You can set the return pickup to 'flexible' if the spring date is not yet confirmed." },
      { q: "What if I need to change my pickup date?", a: "We build in flexibility. Pickup date changes with more than 48 hours' notice are generally accommodated at no cost." },
      { q: "Can you deliver to a condo complex or gated community?", a: "Usually yes. For gated communities the driver needs entry access, which you arrange in advance. Very tight parking structures may require a nearby meet point." },
      { q: "Is enclosed worthwhile for the snowbird route?", a: "For standard vehicles, open transport is perfectly safe on these corridors. Enclosed makes sense for classics, convertibles and luxury vehicles where any cosmetic exposure is a concern." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "open-car-shipping", "enclosed-car-shipping"],
  },

  "college-student-car-shipping": {
    slug: "college-student-car-shipping",
    metaTitle: "College Student Car Shipping — Ship a Car to Campus | Royal Auto Ship",
    metaDesc:
      "Ship your car to college or home for the summer — affordable, door-to-door auto transport for students. $0 down, free quote. Call (215) 201-2020.",
    h1: "College Student Car Shipping",
    tagline: "Move-in weekend minus the 20-hour drive.",
    intro:
      "College student car shipping gives students and their families a practical alternative to driving across the country at the start and end of each school year. Ship the car to campus, fly to your destination — and skip 1,500 miles of highway.",
    whatIs:
      "Student shipments are standard open, door-to-door transports. The main considerations are timing (move-in weekend logistics), budget (open transport is the economical choice) and communication (a parent often books while the student receives delivery). We handle the coordination across multiple parties routinely.",
    howItWorks: [
      "Parent or student requests a quote with campus ZIP or city.",
      "Advisor confirms dates around move-in weekend and locks in the rate.",
      "Carrier dispatched to home address.",
      "Vehicle delivered to campus address, dorm parking area or designated student lot.",
      "Student or designated person signs inspection report at delivery.",
    ],
    costIntro: "Typical ranges by region:",
    costRows: [
      { route: "Same region / under 500 miles", price: "$350 – $600" },
      { route: "Cross-region (500 – 1,500 mi)", price: "$650 – $950" },
      { route: "Cross-country (1,500+ mi)", price: "$950 – $1,350" },
    ],
    costNote: "Booking 2–3 weeks before move-in weekend secures the best rate and avoids late-availability surcharges.",
    factors: [
      { title: "Campus location", text: "Rural campuses may require meeting the carrier at a nearby access point." },
      { title: "Timing vs. move-in weekend", text: "Carriers on popular college corridors fill up fast around August; book early." },
      { title: "Vehicle size", text: "Subcompacts and compacts cost less than large SUVs and trucks." },
    ],
    faqs: [
      { q: "Can the carrier deliver directly to campus?", a: "In most cases yes. Large multi-level carriers may not fit into tight parking structures, in which case the driver arranges a nearby meeting point and calls the student." },
      { q: "Who needs to be present at delivery?", a: "The student, a parent or any designated adult. You can authorize someone else to accept delivery in writing." },
      { q: "Is it cheaper to drive or ship?", a: "For routes over 800 miles, shipping often costs less than the combined fuel, tolls, hotel and wear on the vehicle — and saves 1–2 days of travel time." },
      { q: "Can items be left in the car?", a: "No. Carriers are not licensed to transport personal belongings and the items are not covered by cargo insurance. Remove everything from the car." },
      { q: "When should I book for fall move-in?", a: "Book by late July for August move-in to get the best rate and a reliable pickup window." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "open-car-shipping", "snowbird-car-shipping"],
  },

  "classic-car-shipping": {
    slug: "classic-car-shipping",
    metaTitle: "Classic Car Shipping & Collector Vehicle Transport | Royal Auto Ship",
    metaDesc:
      "Enclosed transport for classic cars, vintage vehicles and collector automobiles. Soft straps, lift gates, white-glove service. Free quote — Royal Auto Ship.",
    h1: "Classic Car Shipping Services",
    tagline: "Your restoration deserves more than an open trailer.",
    intro:
      "Classic car shipping combines the premium protection of enclosed transport with carriers who understand vintage and collector vehicles. Whether you are moving a freshly restored muscle car, a pre-war European roadster or a show-winning custom, Royal Auto Ship matches you with enclosed carriers experienced in handling irreplaceable automobiles.",
    whatIs:
      "Classic and collector vehicles require soft-tie systems that contact tires only, lift gates for low-slung chassis and enclosed trailers that block road debris, weather and UV exposure. Our classic car carriers are specialists — not general freight drivers pressed into automotive service.",
    howItWorks: [
      "Quote request with vehicle year, make, model, value estimate and any special notes (low clearance, custom bodywork, non-running).",
      "Advisor selects an enclosed carrier with soft-strap and lift-gate capability.",
      "Detailed photo inspection at pickup documenting existing condition.",
      "Enclosed sealed transit with carrier updates.",
      "Delivery with second full photo inspection; sign only when satisfied.",
    ],
    costIntro: "Classic car shipping uses enclosed pricing — typically 50–80% above open rates:",
    costRows: [
      { route: "Regional (under 500 mi)", enclosed: "$600 – $900" },
      { route: "Mid-haul (500 – 1,500 mi)", enclosed: "$900 – $1,400" },
      { route: "Cross-country (1,500+ mi)", enclosed: "$1,400 – $2,200" },
    ],
    costNote: "For vehicles above $100k in value, full-value agreed-value insurance is available through specialty carriers — ask your advisor.",
    factors: [
      { title: "Vehicle value", text: "Higher-value vehicles warrant additional insurance verification." },
      { title: "Low clearance", text: "Ground-clearance under 4 inches requires a lift-gate carrier — always specify at quoting." },
      { title: "Custom bodywork", text: "Wide fender flares, extended bumpers or show-car wings may limit carrier selection." },
      { title: "Show schedule", text: "Time-sensitive show deliveries can be prioritized; mention the event date at booking." },
    ],
    faqs: [
      { q: "What is soft-strap loading?", a: "Soft straps wrap around the tires and secure to the trailer deck, never touching painted panels, chrome or undercarriage components. It is the standard for collector vehicles." },
      { q: "Do you handle non-running classics?", a: "Yes. Low-clearance and non-running vehicles need a carrier with a hydraulic lift gate. Specify at quoting and we confirm the right equipment." },
      { q: "Can I choose which carrier handles my car?", a: "You can review carrier profiles and ratings. We present the best-matched option for your route and vehicle; if you have concerns, we find an alternative." },
      { q: "Is the carrier insured for high-value vehicles?", a: "All carriers carry cargo insurance. For vehicles over $75–100k we recommend confirming the per-vehicle limit with your advisor before booking." },
      { q: "How do I prepare my classic for shipping?", a: "Remove personal items, disable aftermarket alarms, document existing condition with your own photos, check that battery terminals are secure and fuel is at a quarter tank." },
    ],
    relatedSlugs: ["enclosed-car-shipping", "door-to-door-car-shipping", "motorcycle-shipping"],
  },

  "online-car-buyers": {
    slug: "online-car-buyers",
    metaTitle: "Car Shipping for Online Car Buyers — Vehicle Delivery After Purchase | Royal Auto Ship",
    metaDesc:
      "Bought a car online? Royal Auto Ship delivers it door-to-door from the seller's address. $0 down, fully insured, coast-to-coast. Free quote.",
    h1: "Car Shipping for Online Car Buyers",
    tagline: "You bought it. We deliver it.",
    intro:
      "Buying a car online — through Carvana, AutoTrader, eBay Motors, Bring a Trailer, Facebook Marketplace or a private seller — means the car is wherever the seller is, not where you are. Royal Auto Ship bridges that gap: we pick up from the seller and deliver to your door, coast to coast.",
    whatIs:
      "Online buyer shipments differ from standard moves in one key way: the pickup is from a third party (the seller), not from you. We are experienced with the logistics of coordinating pickup from dealers, auctions, private sellers and consignment lots — often without the buyer being present.",
    howItWorks: [
      "Request a quote with the seller's address and your delivery address.",
      "Advisor confirms all-inclusive price; you share seller contact details.",
      "We coordinate pickup time directly with the seller.",
      "Full photo inspection at pickup — images shared with you before the car leaves.",
      "Transit with live updates; delivery to your door.",
      "Inspect on arrival, sign, pay balance.",
    ],
    costIntro: "Standard door-to-door rates by route length:",
    costRows: [
      { route: "Under 500 miles", price: "$350 – $600" },
      { route: "500 – 1,500 miles", price: "$650 – $1,000" },
      { route: "1,500 – 2,500 miles", price: "$950 – $1,350" },
      { route: "Cross-country (2,500+ mi)", price: "$1,100 – $1,500" },
    ],
    costNote: "Add enclosed transport for vehicles over $40,000 in value.",
    factors: [
      { title: "Seller cooperation", text: "We coordinate directly with the seller; you just need to share their contact info." },
      { title: "Vehicle condition", text: "Non-running or non-driving vehicles cost slightly more due to winch equipment." },
      { title: "Pickup location type", text: "Private driveway, dealer lot and auction facility all accommodate standard carriers." },
    ],
    faqs: [
      { q: "Do I need to be present at pickup from the seller?", a: "No. We coordinate directly with the seller. You receive the inspection photos before the car moves so you can see the condition at pickup." },
      { q: "What if the car is not as described when it arrives?", a: "Note all discrepancies on the delivery inspection report. Damage that occurred in transit is covered by the carrier's cargo insurance. Pre-existing condition disputes are between buyer and seller." },
      { q: "Can you pick up from an auto auction?", a: "Yes. We regularly pick up from Manheim, Copart, IAAI and private auction houses. Auction-specific logistics (gate pass, lot fee) are handled by you or the auction; we handle the transport." },
      { q: "How quickly can pickup be arranged after purchase?", a: "Typically within 3–5 business days of booking. Rush pickups within 48 hours are available at a premium." },
      { q: "What if the car needs to be inspected before I buy it?", a: "We can transport to a third-party inspection shop before final delivery — ask your advisor to arrange a two-stop route." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "open-car-shipping", "enclosed-car-shipping"],
  },

  "car-resellers": {
    slug: "car-resellers",
    metaTitle: "Car Shipping for Auto Resellers — Fleet & Volume Transport | Royal Auto Ship",
    metaDesc:
      "Auto transport for independent dealers, flippers and car resellers. Volume discounts, fast dispatch, single advisor per account. Free quote.",
    h1: "Car Shipping for Auto Resellers & Independent Dealers",
    tagline: "Your inventory moves as fast as you do.",
    intro:
      "Auto resellers — independent dealers, car flippers, arbitrage buyers and consignment sellers — ship vehicles constantly and cannot afford transport surprises. Royal Auto Ship provides volume pricing, fast dispatch and a dedicated account advisor who knows your business.",
    whatIs:
      "Reseller accounts get priority carrier dispatch, volume-based rate tiers and consolidated billing. Whether you are moving one car a week from auction or twenty a month across multiple states, your advisor keeps logistics running in the background while you focus on inventory.",
    howItWorks: [
      "Set up a reseller account with your advisor — takes one call.",
      "Submit each shipment via phone or email with pickup/delivery info.",
      "Advisor dispatches carrier from the same vetted network, priority queue.",
      "Inspection reports and transit updates sent automatically.",
      "Consolidated invoicing available weekly or monthly.",
    ],
    costIntro: "Reseller rates by monthly volume:",
    costRows: [
      { route: "1–4 vehicles / month", price: "Standard rates" },
      { route: "5–9 vehicles / month", price: "3–5% discount" },
      { route: "10–19 vehicles / month", price: "6–9% discount" },
      { route: "20+ vehicles / month", price: "Contact for custom pricing" },
    ],
    costNote: "Volume discounts applied automatically once monthly shipment threshold is confirmed.",
    factors: [
      { title: "Volume consistency", text: "Consistent monthly volume unlocks better rates and priority dispatch." },
      { title: "Route diversity", text: "Resellers who ship varied routes benefit from our national carrier network." },
      { title: "Auction sourcing", text: "We coordinate directly with auction lots — you provide lot number and gate details." },
    ],
    faqs: [
      { q: "Do you offer account billing for resellers?", a: "Yes. We offer weekly or monthly consolidated invoicing for established reseller accounts." },
      { q: "Can you pick up from auction facilities?", a: "Yes. Manheim, Copart, IAAI, OVE and private auction houses are routine pickup points. You provide lot and gate information; we handle the rest." },
      { q: "What if I need a fast turnaround on a purchase?", a: "Reseller accounts get priority dispatch — typical carrier assignment within 24 hours of booking on high-volume corridors." },
      { q: "Do I get one contact or a call center?", a: "One dedicated advisor for your account. Same number, same person, no repeating yourself." },
      { q: "Can I see my shipment history and reports?", a: "Yes — inspection reports, delivery confirmations and invoices are provided for every shipment and available on request." },
    ],
    relatedSlugs: ["door-to-door-car-shipping", "open-car-shipping", "online-car-buyers"],
  },
};

export type BusinessData = {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  tagline: string;
  intro: string;
  benefits: { title: string; text: string }[];
  costRows: CostRow[];
  costNote: string;
  faqs: FaqItem[];
};

export const businessData: Record<string, BusinessData> = {
  "auto-dealerships": {
    slug: "auto-dealerships",
    metaTitle: "Auto Transport for Car Dealerships — Dealer Fleet Shipping | Royal Auto Ship",
    metaDesc:
      "Dealer-to-dealer transfers, auction transport, trade-in moves — Royal Auto Ship keeps your lot stocked. Volume discounts, priority dispatch. Free quote.",
    h1: "Auto Transport for Car Dealerships",
    tagline: "Keep your lot stocked. We handle the miles.",
    intro:
      "Car dealerships move inventory constantly — from auction lanes, between franchise locations, to customer deliveries and trade-in pickups. Royal Auto Ship provides dealers with priority dispatch, volume rates and a single point of contact who understands lot logistics.",
    benefits: [
      { title: "Priority dispatch", text: "Dealer accounts receive carrier assignments within 24 hours on major corridors." },
      { title: "Volume pricing", text: "Rate tiers from 5 vehicles per month up — the more you ship, the more you save." },
      { title: "Auction pickup expertise", text: "We coordinate directly with Manheim, Copart, IAAI and private lanes." },
      { title: "Dedicated advisor", text: "One contact, all your shipments, consolidated billing options." },
    ],
    costRows: [
      { route: "Regional (under 500 mi)", price: "$300 – $550" },
      { route: "Mid-haul (500 – 1,500 mi)", price: "$550 – $900" },
      { route: "Cross-country (1,500+ mi)", price: "$900 – $1,350" },
    ],
    costNote: "Dealer volume discounts apply from 5+ vehicles per month. Contact us for a custom rate sheet.",
    faqs: [
      { q: "Can you pick up from auction on the same day as purchase?", a: "We schedule pickup for the next available carrier slot — usually 1–3 business days after purchase on major corridors. Rush same-day dispatch is available at a premium." },
      { q: "Do you handle lot-to-lot dealer transfers?", a: "Yes. Franchise and independent dealers use us for inter-location inventory transfers, loaner vehicle moves and wholesale trades." },
      { q: "Can you deliver to a customer's address directly?", a: "Yes. We deliver to any address the dealer specifies — lot, service center or customer home." },
      { q: "What documentation is required?", a: "Bill of sale and your dealer license on file with your account. We handle inspection and condition reports on every unit." },
    ],
  },

  "auto-auctions": {
    slug: "auto-auctions",
    metaTitle: "Auto Auction Transport — Pick Up from Manheim, Copart, IAAI | Royal Auto Ship",
    metaDesc:
      "Car transport from auto auctions nationwide — Manheim, Copart, IAAI, OVE and private lanes. Fast pickup, fully insured. Free quote from Royal Auto Ship.",
    h1: "Auto Auction Transport Services",
    tagline: "Bought it. We pull it from the lot.",
    intro:
      "Auto auctions — Manheim, Copart, IAAI, OVE, dealer-only lanes — require transport partners who know lot protocols. Royal Auto Ship dispatches carriers who work auction facilities daily, know the gate processes and have the relationships to get vehicles loaded without delays.",
    benefits: [
      { title: "Auction facility experience", text: "Our carriers work Manheim, Copart and IAAI regularly — no learning curve, no delays." },
      { title: "Fast pickup", text: "Most auction pickups dispatched within 1–3 business days of booking." },
      { title: "Non-running expertise", text: "Copart and salvage vehicles often do not run — we have the winch-equipped carriers." },
      { title: "National reach", text: "Auction transport from any facility in all 50 states to any destination." },
    ],
    costRows: [
      { route: "Under 500 miles", price: "$300 – $550" },
      { route: "500 – 1,500 miles", price: "$550 – $900" },
      { route: "Cross-country", price: "$900 – $1,400" },
    ],
    costNote: "Non-running vehicles and salvage units add $75–$200 for winch-equipped carriers.",
    faqs: [
      { q: "What information do you need to pick up from an auction?", a: "Lot number, unit number (stock or VIN), auction facility name and address, gate pass instructions and your buyer number. Your advisor will confirm what the specific facility requires." },
      { q: "Do you handle Copart and IAAI salvage vehicles?", a: "Yes. Salvage and non-running units from Copart and IAAI are routine. We dispatch winch-equipped carriers and confirm running/driving condition at booking." },
      { q: "How long does pickup take after I buy at auction?", a: "Typically 1–3 business days on major corridors. Some facilities have specific pickup windows; your advisor confirms timing." },
      { q: "Can you transport directly from the auction to my customer?", a: "Yes — multi-stop routes are available. Auction → dealer → customer or any other two-stop configuration." },
    ],
  },

  "car-rental-companies": {
    slug: "car-rental-companies",
    metaTitle: "Fleet Transport for Car Rental Companies | Royal Auto Ship",
    metaDesc:
      "Auto transport for rental fleets — rebalancing, seasonal repositioning, new unit delivery. Volume rates, priority dispatch. Free quote from Royal Auto Ship.",
    h1: "Car Shipping for Car Rental Companies",
    tagline: "Fleet rebalancing, repositioning and delivery — handled.",
    intro:
      "Car rental companies need to move fleets constantly — repositioning vehicles between locations, delivering new units from manufacturer lots, moving seasonal surplus and rebalancing high-demand markets. Royal Auto Ship provides the carrier network and logistics coordination to keep rental fleets in the right place at the right time.",
    benefits: [
      { title: "Fleet volume rates", text: "Custom pricing tiers for 10, 25, 50 and 100+ unit monthly programs." },
      { title: "Manufacturer pickup", text: "We pick up new units from fleet delivery centers and manufacturer lots." },
      { title: "Seasonal repositioning", text: "Summer resort and winter sun market repositioning managed on recurring schedules." },
      { title: "Dedicated fleet coordinator", text: "A single coordinator manages your program, not a different agent each call." },
    ],
    costRows: [
      { route: "Regional rebalancing (under 500 mi)", price: "From $280 / unit" },
      { route: "Interstate repositioning (500 – 1,500 mi)", price: "From $500 / unit" },
      { route: "Cross-country fleet moves", price: "Custom — contact for quote" },
    ],
    costNote: "Fleet pricing requires minimum 10 units/month commitment. Custom SLA contracts available.",
    faqs: [
      { q: "Can you handle recurring monthly repositioning programs?", a: "Yes. We set up scheduled programs with fixed pickup calendars, recurring carrier assignments and consolidated billing for predictable fleet operations." },
      { q: "What is your capacity for large fleet moves?", a: "Our carrier network supports multi-truck moves of 50–200+ units. Large fleet programs are quoted separately with dedicated capacity planning." },
      { q: "Do you transport to rental branches without a dedicated lot?", a: "Yes. We deliver to any accessible address — branch offices, shared parking facilities, airport lots and satellite locations." },
      { q: "Can you pick up from manufacturer fleet delivery centers?", a: "Yes. OEM fleet delivery centers (GM, Ford, Stellantis and others) are routine pickup points for rental company deliveries." },
    ],
  },
};
