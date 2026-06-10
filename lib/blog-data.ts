export type ContentBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "h3"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "callout"; text: string };

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  readMinutes: number;
  excerpt: string;
  category: string;
  content: ContentBlock[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: "how-much-does-it-cost-to-ship-a-car",
    title: "How Much Does It Cost to Ship a Car? (2026 Pricing Guide)",
    date: "2026-05-20",
    readMinutes: 7,
    excerpt:
      "Average car shipping costs range from $400 to $1,600 depending on distance, transport type, and season. This guide breaks down every factor so you know exactly what to expect.",
    category: "Pricing",
    content: [
      {
        type: "p",
        text: "Car shipping prices vary widely — a short 300-mile move might cost $350, while a coast-to-coast shipment can reach $1,600. Most customers shipping a standard sedan across a popular corridor pay somewhere between $600 and $1,100. Here is a complete breakdown of what drives the price and how to get the best deal.",
      },
      {
        type: "h2",
        text: "Average car shipping cost by distance",
      },
      {
        type: "table",
        headers: ["Route distance", "Open transport", "Enclosed transport"],
        rows: [
          ["Under 500 miles", "$300 – $600", "$500 – $900"],
          ["500 – 1,000 miles", "$550 – $850", "$850 – $1,300"],
          ["1,000 – 1,500 miles", "$700 – $1,000", "$1,100 – $1,600"],
          ["1,500 – 2,000 miles", "$850 – $1,150", "$1,300 – $1,900"],
          ["2,000+ miles (coast-to-coast)", "$1,000 – $1,600", "$1,500 – $2,400"],
        ],
      },
      {
        type: "callout",
        text: "All Royal Auto Ship quotes are all-inclusive — fuel surcharges, tolls, and cargo insurance are built in. The price you see is the price you pay.",
      },
      {
        type: "h2",
        text: "What factors affect the price?",
      },
      {
        type: "h3",
        text: "1. Distance",
      },
      {
        type: "p",
        text: "Distance is the single biggest factor. Longer routes cost more in total, but the price-per-mile drops on longer hauls. A 300-mile move might cost $1.50/mile while a 2,500-mile coast-to-coast haul averages closer to $0.45/mile.",
      },
      {
        type: "h3",
        text: "2. Open vs enclosed transport",
      },
      {
        type: "p",
        text: "Open transport carries your vehicle on an exposed multi-car carrier — safe, standard, and used for 93% of all shipments. Enclosed transport seals the vehicle inside a covered trailer, adding 40–60% to the price. It is worth it for luxury, classic, or high-value vehicles.",
      },
      {
        type: "h3",
        text: "3. Vehicle size and weight",
      },
      {
        type: "p",
        text: "Standard sedans and compact SUVs fit most carriers without extra fees. Lifted trucks, large SUVs, extended vans, and vehicles with roof racks or oversized dimensions may cost $75–$200 more because they displace more carrier capacity.",
      },
      {
        type: "h3",
        text: "4. Time of year and route demand",
      },
      {
        type: "p",
        text: "Snowbird corridors (Florida, Arizona) surge in October–November and March–April as retirees move south for winter and north for summer. Prices on those routes can jump 15–25% during peak weeks. Cross-country routes to California tend to be busier in summer. Book 2–3 weeks in advance for standard moves, 4–6 weeks for seasonal routes.",
      },
      {
        type: "h3",
        text: "5. Running vs non-running vehicle",
      },
      {
        type: "p",
        text: "A vehicle that cannot be driven onto the carrier under its own power needs a winch-equipped carrier to load it. Expect to pay $100–$250 more. Always disclose a non-running status when requesting a quote — brokers who find out on pickup day may reprice.",
      },
      {
        type: "h3",
        text: "6. How quickly you need it picked up",
      },
      {
        type: "p",
        text: "Standard dispatch takes 2–7 business days from booking. If you need guaranteed pickup within 24–48 hours, you will pay an expedite premium of $150–$400 depending on the route.",
      },
      {
        type: "h2",
        text: "Why do some quotes look much cheaper?",
      },
      {
        type: "p",
        text: "Low-ball quotes are a common tactic in this industry. A company quotes you $400 for a 1,500-mile move — then the carrier is never assigned because no driver will accept the low rate. Weeks later they come back asking for more money or your car still has not moved. Always ask whether the quote is all-inclusive and whether it includes carrier pay, fuel, and insurance. A good broker cannot give away the carrier's fuel.",
      },
      {
        type: "h2",
        text: "How to get the best price",
      },
      {
        type: "ul",
        items: [
          "Book 2–3 weeks out. Last-minute moves always cost more.",
          "Be flexible on pickup date by 2–3 days. Flexibility unlocks more carriers.",
          "Choose open transport unless you have a specific reason for enclosed.",
          "Avoid peak season on snowbird routes — book in September or February if the timing works.",
          "Get quotes from 2–3 brokers and compare what is included, not just the number.",
        ],
      },
    ],
  },
  {
    slug: "how-long-does-car-shipping-take",
    title: "How Long Does Car Shipping Take? Transit Times by Route",
    date: "2026-05-27",
    readMinutes: 5,
    excerpt:
      "Coast-to-coast shipments take 7–10 days. A 500-mile move takes 1–2 days. This guide covers transit times for every route length plus what affects the schedule.",
    category: "Planning",
    content: [
      {
        type: "p",
        text: "One of the most common questions customers ask is how long the whole process takes. There are two timelines to track: dispatch (how long until a carrier picks up your car) and transit (how long it rides on the carrier). Here is what to expect.",
      },
      {
        type: "h2",
        text: "Transit times by route length",
      },
      {
        type: "table",
        headers: ["Route distance", "Typical transit", "Example route"],
        rows: [
          ["Under 500 miles", "1 – 2 days", "Philadelphia → Boston"],
          ["500 – 1,000 miles", "2 – 4 days", "Chicago → Atlanta"],
          ["1,000 – 1,500 miles", "4 – 6 days", "Dallas → Denver"],
          ["1,500 – 2,000 miles", "5 – 7 days", "Miami → Chicago"],
          ["2,000 – 2,500 miles", "7 – 9 days", "New York → Phoenix"],
          ["2,500+ miles (coast-to-coast)", "8 – 12 days", "New York → Los Angeles"],
        ],
      },
      {
        type: "h2",
        text: "Dispatch window: before the carrier is assigned",
      },
      {
        type: "p",
        text: "After you book, a carrier still has to be assigned to your move. On popular corridors this happens within 24–48 hours. On rural pickups or less-traveled routes, allow 3–7 business days. Your advisor confirms the pickup window when a carrier is assigned — not at booking.",
      },
      {
        type: "callout",
        text: "Total time from booking to delivery: plan for 5–14 days on most routes. Coast-to-coast can reach 2–3 weeks if you need to account for dispatch.",
      },
      {
        type: "h2",
        text: "What affects delivery speed?",
      },
      {
        type: "ul",
        items: [
          "Route popularity — high-traffic corridors (Northeast, LA/NY, FL/Midwest) dispatch faster.",
          "Pickup location — urban pickup points attract more carriers. Rural areas may add 2–4 days.",
          "Time of year — peak snowbird season slows southbound routes in November and northbound in April.",
          "Vehicle type — oversized or non-running vehicles narrow the carrier pool.",
          "Expedite fee — paying for priority dispatch guarantees pickup within 24–48 hours.",
        ],
      },
      {
        type: "h2",
        text: "Can the carrier give an exact delivery date?",
      },
      {
        type: "p",
        text: "Carriers can give a delivery window but not a guaranteed hour. Weather, traffic, other stops on the route, and inspection delays at weigh stations all affect arrival time. Your driver will call 24 hours before delivery with an estimated arrival window.",
      },
      {
        type: "h2",
        text: "Tips to keep your shipment on schedule",
      },
      {
        type: "ol",
        items: [
          "Be available (or have a designee available) at pickup. A missed appointment delays the dispatch clock.",
          "Have your vehicle ready — cleaned out, alarm disabled, 1/4 tank of gas.",
          "Keep your phone on. Carriers and advisors call with updates.",
          "Build a 2-day buffer on each end when planning around a move-in date or cross-country drive.",
        ],
      },
    ],
  },
  {
    slug: "open-vs-enclosed-auto-transport",
    title: "Open vs Enclosed Auto Transport: Which Should You Choose?",
    date: "2026-06-02",
    readMinutes: 6,
    excerpt:
      "Open transport is safe for 93% of vehicles and costs 40–60% less. Enclosed is the right call for classics, exotics, and high-value cars. Here is how to decide.",
    category: "How It Works",
    content: [
      {
        type: "p",
        text: "The most common question after price is transport type. Open or enclosed? Here is the honest answer: open transport is what moves most of the country's cars — it is the industry standard, it is safe, and it is less expensive. Enclosed transport serves a specific need, and when that need is real, it is worth every extra dollar.",
      },
      {
        type: "h2",
        text: "Open auto transport",
      },
      {
        type: "p",
        text: "An open carrier is the double-deck trailer you see on the highway with 6–10 vehicles loaded on it. Your car is exposed to the elements — sun, rain, highway debris — the same as it is when you drive it. The same carriers that deliver brand-new vehicles from manufacturer to dealership use open transport. It is not a budget compromise. It is simply the standard method.",
      },
      {
        type: "ul",
        items: [
          "Lower cost — 40–60% less than enclosed on the same route",
          "Faster dispatch — far more open carriers available nationwide",
          "Safe for all standard vehicles",
          "Industry norm — new cars arrive at dealerships this way",
        ],
      },
      {
        type: "h2",
        text: "Enclosed auto transport",
      },
      {
        type: "p",
        text: "An enclosed carrier is a fully covered trailer — think of an armored moving truck for cars. Your vehicle is shielded from road debris, weather, and UV exposure. The carrier typically holds 2–6 vehicles, which means more personal attention and careful loading.",
      },
      {
        type: "ul",
        items: [
          "Full weather and debris protection",
          "Higher-touch loading — soft straps, wheel cradles",
          "Appropriate for classic cars, exotics, luxury vehicles, show cars",
          "Lower carrier-to-vehicle ratio means more care",
          "40–60% premium over open on most routes",
        ],
      },
      {
        type: "h2",
        text: "Which one do you actually need?",
      },
      {
        type: "table",
        headers: ["Vehicle type", "Recommended transport"],
        rows: [
          ["Daily driver, sedan, standard SUV", "Open"],
          ["New car (under factory warranty)", "Open"],
          ["Pickup truck, minivan", "Open"],
          ["Luxury sedan (BMW, Mercedes, Audi)", "Either — enclosed if it matters to you"],
          ["Exotic (Ferrari, Lamborghini, Porsche GT)", "Enclosed"],
          ["Classic or collector car", "Enclosed"],
          ["Show car or recently restored vehicle", "Enclosed"],
          ["Leased vehicle with strict mileage/damage terms", "Enclosed"],
        ],
      },
      {
        type: "callout",
        text: "When in doubt: if you would park it in your garage rather than on the street, ship it enclosed.",
      },
      {
        type: "h2",
        text: "Cost difference on common routes",
      },
      {
        type: "table",
        headers: ["Route", "Open", "Enclosed"],
        rows: [
          ["Philadelphia → Miami", "$650 – $850", "$1,050 – $1,350"],
          ["New York → Los Angeles", "$1,050 – $1,350", "$1,600 – $2,100"],
          ["Chicago → Dallas", "$600 – $800", "$950 – $1,200"],
          ["Seattle → Phoenix", "$750 – $950", "$1,150 – $1,500"],
        ],
      },
    ],
  },
  {
    slug: "cheapest-way-to-ship-a-car",
    title: "Cheapest Way to Ship a Car Across the Country",
    date: "2026-06-05",
    readMinutes: 5,
    excerpt:
      "Six proven tactics to reduce your auto transport bill — from timing your shipment to choosing the right transport type. Real savings, no scams.",
    category: "Pricing",
    content: [
      {
        type: "p",
        text: "There is no single magic trick to cut car shipping costs, but there are real, legitimate levers. Using even two or three of these can save $150–$400 on a typical cross-country move.",
      },
      {
        type: "h2",
        text: "1. Choose open transport",
      },
      {
        type: "p",
        text: "Open transport is safe for virtually every standard vehicle and costs 40–60% less than enclosed. Unless you are shipping a classic, exotic, or high-value car, open is the right call. If someone automatically quotes you enclosed without asking about your vehicle, ask why.",
      },
      {
        type: "h2",
        text: "2. Be flexible on pickup dates",
      },
      {
        type: "p",
        text: "Carriers plan routes and try to fill their trailer before heading out. If you can offer a 3–5 day pickup window instead of a specific date, you become easier to match and often get a lower rate. Customers who need guaranteed same-day pickup pay a premium every time.",
      },
      {
        type: "h2",
        text: "3. Book 2–3 weeks in advance",
      },
      {
        type: "p",
        text: "Last-minute bookings (within 48 hours) carry a rush premium. Booking 2–3 weeks out gives more carriers time to see and accept your order at the standard rate. It also lets you compare multiple quotes without the pressure of a deadline.",
      },
      {
        type: "h2",
        text: "4. Avoid peak snowbird season",
      },
      {
        type: "p",
        text: "The Florida and Arizona corridors surge in October–November (southbound) and March–April (northbound). If you can move a few weeks earlier or later than the peak, you may save $150–$300 on those routes. The same applies to summer moves to California.",
      },
      {
        type: "h2",
        text: "5. Terminal-to-terminal instead of door-to-door",
      },
      {
        type: "p",
        text: "Some carriers offer terminal-to-terminal service — you drop off and pick up at a depot location rather than having them come to your address. This saves 3–8% but requires you to handle both ends. Terminal locations are not always convenient, so factor in your time and any rental car cost.",
      },
      {
        type: "h2",
        text: "6. Compare brokers — but read the fine print",
      },
      {
        type: "p",
        text: "Get 2–3 quotes from different brokers. The lowest number is not always the best deal — check what is included. Does the quote include cargo insurance? Is the price all-inclusive or a base rate that grows with surcharges? A $50 lower headline quote that comes with a fuel surcharge and a $150 pickup fee is not a deal.",
      },
      {
        type: "callout",
        text: "Red flag: any quote more than 20–25% below market rate is either inaccurate or a bait-and-switch. No carrier will haul your vehicle from New York to Los Angeles for $500.",
      },
      {
        type: "h2",
        text: "What NOT to do to save money",
      },
      {
        type: "ul",
        items: [
          "Do not hide that your vehicle is non-running — it reprices on pickup day and wastes everyone's time.",
          "Do not pick an uninsured carrier to save $50 — verify MC and DOT numbers at FMCSA.dot.gov.",
          "Do not wire money to a carrier you found on a classifieds site with no verifiable MC number.",
          "Do not accept a verbal quote — get the all-inclusive price in writing before booking.",
        ],
      },
    ],
  },
  {
    slug: "how-to-prepare-your-car-for-shipping",
    title: "How to Prepare Your Car for Shipping — Complete Checklist",
    date: "2026-06-03",
    readMinutes: 5,
    excerpt:
      "Follow this 10-step checklist before your carrier arrives. Takes 30 minutes and prevents 90% of shipping day issues.",
    category: "How It Works",
    content: [
      {
        type: "p",
        text: "Proper preparation protects your vehicle, keeps the inspection honest, and ensures a smooth pickup. Here is exactly what to do before the carrier arrives.",
      },
      {
        type: "h2",
        text: "The 10-step car shipping checklist",
      },
      {
        type: "ol",
        items: [
          "Wash the exterior — a clean car makes it far easier to document existing scratches, dings, and chips during the pre-shipping inspection.",
          "Take your own photos from all angles — bumpers, roof, sides, wheels. Date-stamped photos are your best protection if a dispute arises.",
          "Remove all personal belongings — federal law limits carriers to 100 lbs of personal items in the trunk, and many carriers do not allow any items at all. Do not ship laptops, wallets, or valuables.",
          "Disable or deactivate your alarm — a car alarm that triggers repeatedly during transport is a problem for the driver. Use the key fob to disable it or pull the fuse.",
          "Bring the fuel level to 1/4 tank — enough for loading and unloading. A full tank adds unnecessary weight and a liability if fuel leaks.",
          "Check for fluid leaks — park on a clean surface overnight and look for any drips. Disclose active leaks to your broker before booking.",
          "Note existing damage — write it down on the Bill of Lading at pickup. Both you and the driver sign it. This is the legal record for any insurance claim.",
          "Retract or remove antennas, spoilers, and any aftermarket attachments that stick out — these are the most common transport damage points.",
          "Fold in or remove side mirrors if they extend unusually wide.",
          "Leave one key with the carrier and keep a copy — you will need it at delivery.",
        ],
      },
      {
        type: "h2",
        text: "The Bill of Lading — what it is and why it matters",
      },
      {
        type: "p",
        text: "The Bill of Lading (BOL) is the inspection report the carrier and customer both sign at pickup and again at delivery. It records the vehicle's condition before transit. If there is damage at delivery that was not on the pickup BOL, that is a documented claim. Never sign a blank or incomplete BOL. Never sign the delivery BOL before you have personally inspected the vehicle.",
      },
      {
        type: "callout",
        text: "If you cannot be present for pickup or delivery, designate someone you trust to perform the inspection and sign the BOL on your behalf.",
      },
      {
        type: "h2",
        text: "What happens if damage is found at delivery?",
      },
      {
        type: "p",
        text: "Note every concern directly on the delivery BOL before signing. Take photos on the spot. Do not pay the balance and then try to make a claim — the signed BOL is your documentation. Contact your broker immediately; they will file a claim with the carrier's cargo insurance.",
      },
    ],
  },
  {
    slug: "shipping-a-non-running-car",
    title: "Shipping a Non-Running Car: What You Need to Know",
    date: "2026-05-15",
    readMinutes: 4,
    excerpt:
      "Non-running vehicles can be shipped — but you must disclose the condition upfront, expect a $100–$250 surcharge, and verify the carrier has winch equipment.",
    category: "How It Works",
    content: [
      {
        type: "p",
        text: "A non-running (inoperable) vehicle needs different equipment to load onto a carrier. Most standard car haulers use drive-on ramps — if your car cannot be driven or rolled under its own power, the driver cannot load it without a winch. Here is what to know before booking.",
      },
      {
        type: "h2",
        text: "What counts as non-running?",
      },
      {
        type: "ul",
        items: [
          "Engine does not start or run",
          "Transmission is seized — vehicle cannot roll forward or backward",
          "Steering is locked and cannot be turned",
          "Vehicle sits on flat tires that cannot be inflated",
          "Flood, fire, or collision damage that prevents normal movement",
        ],
      },
      {
        type: "p",
        text: "A vehicle that starts but has other mechanical issues — brakes, electrical, HVAC — is still considered running for shipping purposes as long as it can be driven or rolled onto the carrier.",
      },
      {
        type: "h2",
        text: "How non-running vehicles are loaded",
      },
      {
        type: "p",
        text: "Winch-equipped carriers use a steel cable and wheel net system to drag the vehicle onto the trailer without engine power. The wheels must be able to roll, or the carrier needs skids to slide the vehicle. For severely damaged vehicles (collapsed frame, crushed roof), a flatbed truck and specialized equipment may be needed.",
      },
      {
        type: "h2",
        text: "Cost premium for non-running vehicles",
      },
      {
        type: "table",
        headers: ["Condition", "Extra cost estimate"],
        rows: [
          ["Rolls and steers, does not start", "$100 – $150"],
          ["Does not roll (seized trans or flat tires)", "$150 – $250"],
          ["Severely damaged (flatbed required)", "$250 – $500+"],
        ],
      },
      {
        type: "callout",
        text: "Always disclose non-running status when requesting your quote. A broker who learns about it on pickup day may cancel the order or charge a large repricing fee.",
      },
      {
        type: "h2",
        text: "Tips for shipping a non-running car",
      },
      {
        type: "ul",
        items: [
          "Be specific about the condition — describe exactly what the vehicle can and cannot do.",
          "Confirm in writing that the assigned carrier has winch equipment for inoperable vehicles.",
          "Clear access around the vehicle — the driver needs space to maneuver the winch cable.",
          "Keep the vehicle's keys accessible even if it will not start — some loading methods still require them.",
          "Take photos before pickup to document pre-existing condition.",
        ],
      },
    ],
  },
  {
    slug: "snowbird-car-shipping-guide",
    title: "Snowbird Car Shipping Guide: Florida & Arizona Season Timing",
    date: "2026-04-10",
    readMinutes: 6,
    excerpt:
      "Snowbirds ship millions of cars between the Northeast/Midwest and Florida or Arizona every year. Book 4–6 weeks ahead during peak season to lock your rate.",
    category: "Planning",
    content: [
      {
        type: "p",
        text: "If you follow the sun — spending winters in Florida or Arizona and summers up north — you are a snowbird, and managing a second car is one of the most practical reasons people ship vehicles. Here is how the snowbird shipping market works and how to time your shipment.",
      },
      {
        type: "h2",
        text: "The snowbird shipping calendar",
      },
      {
        type: "table",
        headers: ["Season", "Direction", "Peak months", "Demand level"],
        rows: [
          ["Fall migration", "North → Florida / Arizona", "Oct – Nov", "Very high"],
          ["Spring return", "Florida / Arizona → North", "Mar – Apr", "Very high"],
          ["Summer shoulder", "Both directions", "Jun – Aug", "Moderate"],
          ["Winter off-peak", "Both directions", "Dec – Feb", "Lower"],
        ],
      },
      {
        type: "h2",
        text: "Florida: the largest snowbird corridor",
      },
      {
        type: "p",
        text: "The Northeast-to-Florida corridor (New York, New Jersey, Pennsylvania, Connecticut → Miami, Fort Lauderdale, Naples, Sarasota) is the single busiest auto transport route in the country. Prices surge 15–25% in October and November as demand spikes. Southbound capacity fills fast; northbound capacity in March and April is also tight as everyone returns at once.",
      },
      {
        type: "h2",
        text: "Arizona: the western snowbird hub",
      },
      {
        type: "p",
        text: "Scottsdale, Tucson, and the greater Phoenix metro attract snowbirds from the Midwest and Pacific Northwest. The Midwest-to-Arizona corridor (Chicago, Detroit, Minneapolis → Phoenix) peaks in October and again in March. California-to-Arizona moves are shorter and easier to book year-round.",
      },
      {
        type: "h2",
        text: "How far ahead should you book?",
      },
      {
        type: "ul",
        items: [
          "Peak season (Oct–Nov southbound, Mar–Apr northbound): book 4–6 weeks in advance.",
          "Shoulder season (Sep, May): 2–3 weeks advance booking is usually enough.",
          "Off-peak: 1–2 weeks is typically fine on major corridors.",
          "If your dates are fixed (condo lease end, return flight booked), lock in early regardless of season.",
        ],
      },
      {
        type: "callout",
        text: "Book before you buy your flights. It is easier to adjust a car shipping date than it is to change an airline ticket.",
      },
      {
        type: "h2",
        text: "What to do with the car in storage",
      },
      {
        type: "p",
        text: "If you keep the car at a second home rather than shipping each year, consider the costs: storage, insurance, registration in both states, and the risk of sitting unused. Many snowbirds find that shipping once per year is cheaper and more convenient than maintaining a full second vehicle setup.",
      },
      {
        type: "h2",
        text: "Snowbird shipping tips",
      },
      {
        type: "ul",
        items: [
          "Use the same broker each year — repeat customers often get preferential dispatch.",
          "Ask about a multi-year discount if you plan to ship the same route annually.",
          "Schedule pickup a few days before you fly — the vehicle may arrive before you do, which is fine.",
          "Have a trusted contact at the destination who can accept delivery if you have not arrived yet.",
          "Confirm the carrier has your Florida/Arizona address on file for delivery.",
        ],
      },
    ],
  },
  {
    slug: "military-pcs-car-shipping-guide",
    title: "Military PCS Car Shipping Guide",
    date: "2026-05-01",
    readMinutes: 6,
    excerpt:
      "PCS orders move fast. Here is how to ship your POV efficiently, what the military covers, when a private broker is the better option, and how to protect yourself.",
    category: "Planning",
    content: [
      {
        type: "p",
        text: "A Permanent Change of Station (PCS) move comes with enough stress already. Shipping your privately owned vehicle (POV) should not add to it. Here is a practical guide to your options, timelines, and costs.",
      },
      {
        type: "h2",
        text: "Government shipping vs. private broker",
      },
      {
        type: "p",
        text: "The military will ship one POV per service member to an overseas duty station or within certain CONUS routes through Vehicle Processing Centers (VPCs). For domestic PCS moves between stateside bases, government shipping applies to overseas-bound vehicles only — most CONUS moves are handled privately.",
      },
      {
        type: "table",
        headers: ["Option", "Cost to you", "Timeline", "Best for"],
        rows: [
          ["Government VPC (overseas)", "Usually free", "4–8 weeks", "OCONUS moves"],
          ["DITY/PPM (move yourself)", "Govt reimburses mileage", "You control", "Short CONUS moves"],
          ["Private auto transport broker", "Out of pocket or BAH offset", "5–14 days", "CONUS PCS moves"],
        ],
      },
      {
        type: "h2",
        text: "When to use a private broker for PCS",
      },
      {
        type: "p",
        text: "Private auto transport is the right choice when: you need the vehicle at the new duty station quickly, you are flying ahead without the car, your timeline is compressed, or the government option does not cover your route. Most CONUS PCS moves use private carriers.",
      },
      {
        type: "h2",
        text: "Military discount",
      },
      {
        type: "p",
        text: "Royal Auto Ship offers a military discount for active duty, veterans, and dependent family members. Mention your military status when requesting a quote and have your military ID ready. The discount applies to both open and enclosed transport.",
      },
      {
        type: "h2",
        text: "What to have ready when booking",
      },
      {
        type: "ul",
        items: [
          "PCS orders — brokers may ask to see them for military rate verification.",
          "Reporting date at the new installation — sets your latest delivery deadline.",
          "Pickup address — base housing address or off-base current residence.",
          "Delivery address — new base, on-post housing address, or off-post address.",
          "POC at destination if you will not be there for delivery.",
        ],
      },
      {
        type: "h2",
        text: "Preparing your POV for shipment",
      },
      {
        type: "p",
        text: "Follow the same steps as any car shipping move: clean the vehicle, photograph all sides, remove personal items, bring fuel to 1/4 tank, disable the alarm, and review the Bill of Lading carefully at pickup. Military members are entitled to the same cargo insurance coverage as any other customer.",
      },
      {
        type: "callout",
        text: "Book as soon as you receive orders. PCS timelines compress fast and peak-season dispatch windows fill up. Waiting until 5 days before report date creates expensive rush moves.",
      },
    ],
  },
  {
    slug: "buying-a-car-online-how-delivery-works",
    title: "Buying a Car Online? How Vehicle Delivery Works",
    date: "2026-05-08",
    readMinutes: 5,
    excerpt:
      "Bought a car on eBay Motors, Carvana, or from a private seller across the country? Here is how to get it to your door safely.",
    category: "How It Works",
    content: [
      {
        type: "p",
        text: "Online car buying is now mainstream — platforms like eBay Motors, Cars.com, Autotrader, and Carvana let you buy vehicles from anywhere in the country. The shipping part is simpler than most buyers expect. Here is how it works.",
      },
      {
        type: "h2",
        text: "How to coordinate shipping after purchase",
      },
      {
        type: "ol",
        items: [
          "Get the seller's exact address (street address, city, state, zip) for pickup.",
          "Confirm the vehicle is running and can be driven onto a carrier under its own power.",
          "Book auto transport with origin = seller's address, destination = your address.",
          "Inform the seller of the pickup window — they need to be available to hand over the keys and sign the Bill of Lading.",
          "Pay the balance at delivery once you have inspected the vehicle.",
        ],
      },
      {
        type: "h2",
        text: "Private seller purchases",
      },
      {
        type: "p",
        text: "When buying from a private seller, coordinate directly about pickup timing. The seller needs to know when the carrier will arrive and must be present to complete the inspection and hand over the keys. Give them a 2-day pickup window rather than a hard date — it makes dispatch easier and faster.",
      },
      {
        type: "h2",
        text: "eBay Motors and auction purchases",
      },
      {
        type: "p",
        text: "eBay Motors purchases have a short payment window and dealers may have limited storage. Book shipping immediately after payment. Confirm the pickup address with the seller — sometimes a dealer's mailing address and their physical lot are different. Auction vehicles must be inspected and approved for pickup by the seller before a carrier can load them.",
      },
      {
        type: "h2",
        text: "Carvana, Vroom, and other platforms",
      },
      {
        type: "p",
        text: "These platforms handle their own delivery logistics. You typically pay a delivery fee as part of the purchase price and they ship to a hub near you or directly to your door. If you want third-party shipping instead, confirm with the platform whether that is allowed before booking a separate broker.",
      },
      {
        type: "h2",
        text: "What to do when the car arrives",
      },
      {
        type: "ol",
        items: [
          "Do a full walkthrough before signing the delivery Bill of Lading.",
          "Compare the vehicle's condition to the photos and inspection report from pickup.",
          "Test all major functions — start the engine, check lights, operate windows and locks.",
          "Note any discrepancies on the BOL before signing.",
          "Do not pay the balance until you are satisfied with the vehicle's condition as delivered.",
        ],
      },
      {
        type: "callout",
        text: "Auto transport insurance covers damage that occurs during shipping — not pre-existing mechanical issues or cosmetic problems that were present at pickup. The pre-shipping inspection protects both parties.",
      },
    ],
  },
  {
    slug: "car-shipping-scams-red-flags-to-avoid",
    title: "Car Shipping Scams & Red Flags to Avoid",
    date: "2026-06-01",
    readMinutes: 6,
    excerpt:
      "The auto transport industry has real bad actors. Here are the exact red flags to spot scam brokers before they take your deposit and disappear.",
    category: "Tips",
    content: [
      {
        type: "p",
        text: "Car shipping fraud costs customers millions of dollars each year. The good news: scammers follow predictable patterns. If you know what to look for, you can spot them in the first five minutes of a conversation. Here are the red flags to watch for.",
      },
      {
        type: "h2",
        text: "Red flag #1: A quote that is drastically lower than everyone else",
      },
      {
        type: "p",
        text: "Auto transport is a commodity service with real fuel, real driver time, and real insurance costs. If five brokers quote you $900–$1,100 for a route and one quotes $550, they are either planning to raise the price later or they will never assign a carrier at all. Get your deposit back and walk away.",
      },
      {
        type: "h2",
        text: "Red flag #2: They cannot provide an MC or DOT number",
      },
      {
        type: "p",
        text: "Every legitimate auto transport broker and carrier must be registered with the FMCSA (Federal Motor Carrier Safety Administration). Ask for the broker's MC (Motor Carrier) or FF (Freight Forwarder) number and verify it at safer.fmcsa.dot.gov. No number, no business.",
      },
      {
        type: "h2",
        text: "Red flag #3: Wire transfer or Zelle only — no credit card",
      },
      {
        type: "p",
        text: "Legitimate brokers accept credit cards or ACH for deposits. A broker who only accepts wire transfer, Zelle, CashApp, or cryptocurrency is making it impossible for you to dispute or reverse the charge. This is the payment method of scammers because it is irreversible.",
      },
      {
        type: "h2",
        text: "Red flag #4: Pressure to pay a large deposit upfront",
      },
      {
        type: "p",
        text: "Standard broker deposits are $0–$200. A broker demanding $400–$600 upfront before a carrier is even assigned is collecting money they may never earn. Royal Auto Ship and most legitimate brokers require $0 down until a carrier is assigned.",
      },
      {
        type: "h2",
        text: "Red flag #5: Vague or unsigned contract",
      },
      {
        type: "p",
        text: "Your transport agreement should spell out: the all-inclusive price, pickup window, delivery window, insurance coverage amount, cancellation terms, and what happens if a carrier is not assigned. A one-paragraph email with a price is not a contract.",
      },
      {
        type: "h2",
        text: "Red flag #6: No physical address or traceable business history",
      },
      {
        type: "p",
        text: "Search for the company name on Google, the BBB, and Transport Reviews. A company with no reviews, a website created in the last 90 days, and a Gmail address for billing is a serious warning sign. Check how long the domain has been registered — fraud operations spin up new sites constantly.",
      },
      {
        type: "h2",
        text: "Red flag #7: The bait-and-switch",
      },
      {
        type: "p",
        text: "A broker quotes a low price to win your booking, collects a deposit, then calls back days later saying no carrier will accept the rate and the real price is $300 more. At this point you are out your deposit if you cancel. The counter: book with a broker who requires no deposit until dispatch, so you have full flexibility to walk away.",
      },
      {
        type: "callout",
        text: "Verify any auto transport broker or carrier at safer.fmcsa.dot.gov before sending money. It takes 30 seconds and it is the single most effective way to avoid fraud.",
      },
      {
        type: "h2",
        text: "What to do if you have already been scammed",
      },
      {
        type: "ul",
        items: [
          "File a dispute with your credit card company immediately (if you paid by card).",
          "File a complaint with the FMCSA at nccdb.fmcsa.dot.gov.",
          "Report to the BBB and Transport Reviews to warn other customers.",
          "File a police report if the amount is significant — it builds the documentation trail.",
        ],
      },
    ],
  },
];

export const blogBySlug = Object.fromEntries(blogPosts.map((p) => [p.slug, p]));
