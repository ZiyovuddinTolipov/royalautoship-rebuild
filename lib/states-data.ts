export type StateRecord = {
  name: string;
  slug: string;
  abbr: string;
  blurb: string;
  cities: string[];
  seasonal?: string;
  popularRoutes: string[]; // route slugs
};

export const statesData: StateRecord[] = [
  {
    name: "Alabama", slug: "alabama", abbr: "AL",
    blurb: "Alabama sits at the crossroads of southeastern auto transport corridors, with strong connections to Florida snowbird routes and Midwest industrial hubs.",
    cities: ["Birmingham", "Huntsville", "Mobile", "Montgomery"],
    popularRoutes: ["alabama-to-florida", "florida-to-alabama", "alabama-to-texas", "alabama-to-georgia"],
  },
  {
    name: "Alaska", slug: "alaska", abbr: "AK",
    blurb: "Alaska vehicle transport typically ships to Seattle or other West Coast ports, then onward by road. Our advisors handle the multi-leg logistics.",
    cities: ["Anchorage", "Fairbanks", "Juneau", "Sitka"],
    popularRoutes: ["alaska-to-washington", "washington-to-alaska"],
  },
  {
    name: "Arizona", slug: "arizona", abbr: "AZ",
    blurb: "Arizona is one of the top snowbird destinations in the country. Northerners flood southbound routes to Phoenix and Scottsdale each fall.",
    cities: ["Phoenix", "Tucson", "Scottsdale", "Mesa", "Flagstaff"],
    seasonal: "Peak demand: October–December (southbound), March–May (northbound). Book 3–6 weeks early during snowbird season.",
    popularRoutes: ["illinois-to-arizona", "new-york-to-arizona", "michigan-to-arizona", "ohio-to-arizona", "california-to-arizona", "arizona-to-california"],
  },
  {
    name: "Arkansas", slug: "arkansas", abbr: "AR",
    blurb: "Arkansas connects Midwest buyers to Gulf Coast and Southeast corridors, with steady transport volume through Little Rock.",
    cities: ["Little Rock", "Fort Smith", "Fayetteville", "Jonesboro"],
    popularRoutes: ["arkansas-to-texas", "texas-to-arkansas", "arkansas-to-florida"],
  },
  {
    name: "California", slug: "california", abbr: "CA",
    blurb: "California is the single highest-volume auto transport state. Los Angeles and the Bay Area generate more shipments than any other metro in the country.",
    cities: ["Los Angeles", "San Francisco", "San Diego", "Sacramento", "San Jose"],
    popularRoutes: ["california-to-new-york", "new-york-to-california", "california-to-texas", "texas-to-california", "california-to-florida", "florida-to-california", "california-to-illinois", "california-to-washington"],
  },
  {
    name: "Colorado", slug: "colorado", abbr: "CO",
    blurb: "Colorado sees strong transport demand from Denver and Boulder, particularly on Texas and California corridors and for seasonal ski-area moves.",
    cities: ["Denver", "Colorado Springs", "Boulder", "Fort Collins"],
    popularRoutes: ["colorado-to-california", "california-to-colorado", "colorado-to-texas", "texas-to-colorado"],
  },
  {
    name: "Connecticut", slug: "connecticut", abbr: "CT",
    blurb: "Connecticut generates robust snowbird transport southbound to Florida each fall, and strong reverse flows in spring.",
    cities: ["Hartford", "Bridgeport", "New Haven", "Stamford"],
    seasonal: "Peak southbound October–December; peak northbound March–May.",
    popularRoutes: ["connecticut-to-florida", "florida-to-connecticut", "connecticut-to-south-carolina"],
  },
  {
    name: "Delaware", slug: "delaware", abbr: "DE",
    blurb: "Delaware's proximity to Philadelphia and the I-95 corridor makes it a convenient pick-up hub for Northeast-to-Southeast and Midwest routes.",
    cities: ["Wilmington", "Dover", "Newark"],
    popularRoutes: ["delaware-to-florida", "florida-to-delaware"],
  },
  {
    name: "Florida", slug: "florida", abbr: "FL",
    blurb: "Florida is the #1 destination for snowbird auto transport. High season brings thousands of northerners shipping their cars south — and back again in spring.",
    cities: ["Miami", "Orlando", "Tampa", "Jacksonville", "Fort Lauderdale", "Naples"],
    seasonal: "Demand peaks October–January (inbound) and March–May (outbound). The earlier you book, the lower the rate.",
    popularRoutes: ["new-york-to-florida", "florida-to-new-york", "illinois-to-florida", "florida-to-illinois", "ohio-to-florida", "florida-to-ohio", "michigan-to-florida", "florida-to-michigan", "pennsylvania-to-florida", "florida-to-pennsylvania", "new-jersey-to-florida", "florida-to-new-jersey"],
  },
  {
    name: "Georgia", slug: "georgia", abbr: "GA",
    blurb: "Georgia's Atlanta metro is a major transport hub on the Southeast corridor, with steady flows to Florida, the Northeast, and Texas.",
    cities: ["Atlanta", "Savannah", "Augusta", "Columbus"],
    popularRoutes: ["georgia-to-florida", "florida-to-georgia", "georgia-to-new-york", "new-york-to-georgia"],
  },
  {
    name: "Hawaii", slug: "hawaii", abbr: "HI",
    blurb: "Hawaii vehicle transport requires ocean freight via Roll-on/Roll-off ships from West Coast ports. Our advisors coordinate port-to-door logistics.",
    cities: ["Honolulu", "Hilo", "Kailua", "Pearl City"],
    popularRoutes: ["california-to-hawaii", "hawaii-to-california"],
  },
  {
    name: "Idaho", slug: "idaho", abbr: "ID",
    blurb: "Idaho shipping runs primarily on Pacific Northwest and Mountain West corridors — Boise connects well with California, Washington and Utah.",
    cities: ["Boise", "Nampa", "Meridian", "Idaho Falls"],
    popularRoutes: ["idaho-to-california", "california-to-idaho"],
  },
  {
    name: "Illinois", slug: "illinois", abbr: "IL",
    blurb: "Chicago is one of the busiest auto transport hubs in the country. Illinois drivers ship to Florida snowbird destinations and California more than almost any other state.",
    cities: ["Chicago", "Aurora", "Naperville", "Rockford", "Springfield"],
    seasonal: "Peak snowbird southbound October–November; strong California corridor year-round.",
    popularRoutes: ["illinois-to-florida", "florida-to-illinois", "illinois-to-california", "california-to-illinois", "illinois-to-arizona", "illinois-to-texas"],
  },
  {
    name: "Indiana", slug: "indiana", abbr: "IN",
    blurb: "Indiana sits on major Midwest-to-South and Midwest-to-East corridors, with strong transport volume from Indianapolis.",
    cities: ["Indianapolis", "Fort Wayne", "Evansville", "South Bend"],
    popularRoutes: ["indiana-to-florida", "florida-to-indiana", "indiana-to-texas"],
  },
  {
    name: "Iowa", slug: "iowa", abbr: "IA",
    blurb: "Iowa sees steady transport demand on Midwest corridors, particularly southbound to Florida and westbound to California.",
    cities: ["Des Moines", "Cedar Rapids", "Davenport", "Sioux City"],
    popularRoutes: ["iowa-to-florida", "florida-to-iowa", "iowa-to-california"],
  },
  {
    name: "Kansas", slug: "kansas", abbr: "KS",
    blurb: "Kansas connects central US corridors — Wichita and Kansas City see regular transport flows to both coasts and south to Texas and Florida.",
    cities: ["Wichita", "Overland Park", "Kansas City", "Topeka"],
    popularRoutes: ["kansas-to-florida", "kansas-to-california", "texas-to-kansas"],
  },
  {
    name: "Kentucky", slug: "kentucky", abbr: "KY",
    blurb: "Kentucky routes connect the Midwest to Southeast — Louisville is a central hub for I-65 corridor transport.",
    cities: ["Louisville", "Lexington", "Bowling Green", "Owensboro"],
    popularRoutes: ["kentucky-to-florida", "florida-to-kentucky", "kentucky-to-texas"],
  },
  {
    name: "Louisiana", slug: "louisiana", abbr: "LA",
    blurb: "Louisiana transport centers on New Orleans and Baton Rouge, with strong corridors to Texas and the Southeast.",
    cities: ["New Orleans", "Baton Rouge", "Shreveport", "Lafayette"],
    popularRoutes: ["louisiana-to-texas", "texas-to-louisiana", "louisiana-to-florida"],
  },
  {
    name: "Maine", slug: "maine", abbr: "ME",
    blurb: "Maine ships primarily to Florida snowbird destinations in winter and receives northbound returns in spring — one of the longest snowbird corridors.",
    cities: ["Portland", "Lewiston", "Bangor", "South Portland"],
    seasonal: "Among the longest snowbird corridors to Florida — book early.",
    popularRoutes: ["maine-to-florida", "florida-to-maine"],
  },
  {
    name: "Maryland", slug: "maryland", abbr: "MD",
    blurb: "Maryland benefits from its I-95 position between the Northeast and Southeast. Baltimore is a common departure point for Florida and Southeast routes.",
    cities: ["Baltimore", "Frederick", "Rockville", "Gaithersburg"],
    popularRoutes: ["maryland-to-florida", "florida-to-maryland", "maryland-to-california"],
  },
  {
    name: "Massachusetts", slug: "massachusetts", abbr: "MA",
    blurb: "Massachusetts generates high snowbird transport volume to Florida and is a strong origin for California and Arizona routes.",
    cities: ["Boston", "Worcester", "Springfield", "Cambridge"],
    seasonal: "Peak southbound October–December; northbound March–May.",
    popularRoutes: ["massachusetts-to-florida", "florida-to-massachusetts", "massachusetts-to-california", "massachusetts-to-arizona"],
  },
  {
    name: "Michigan", slug: "michigan", abbr: "MI",
    blurb: "Michigan's auto industry and large retiree population make it one of the top snowbird shipping states — Florida and Arizona are the dominant destinations.",
    cities: ["Detroit", "Grand Rapids", "Ann Arbor", "Lansing", "Flint"],
    seasonal: "High snowbird demand October–December to Florida and Arizona.",
    popularRoutes: ["michigan-to-florida", "florida-to-michigan", "michigan-to-arizona", "michigan-to-california"],
  },
  {
    name: "Minnesota", slug: "minnesota", abbr: "MN",
    blurb: "Minnesota winters drive strong snowbird transport to Arizona and Florida, with Minneapolis serving as the main corridor origin.",
    cities: ["Minneapolis", "Saint Paul", "Rochester", "Duluth"],
    seasonal: "Strong snowbird demand; Arizona is a top destination from Minnesota.",
    popularRoutes: ["minnesota-to-florida", "florida-to-minnesota", "minnesota-to-arizona"],
  },
  {
    name: "Mississippi", slug: "mississippi", abbr: "MS",
    blurb: "Mississippi transport runs primarily on Southeast and Texas corridors, with steady flows through Jackson.",
    cities: ["Jackson", "Gulfport", "Southaven", "Hattiesburg"],
    popularRoutes: ["mississippi-to-texas", "texas-to-mississippi", "mississippi-to-florida"],
  },
  {
    name: "Missouri", slug: "missouri", abbr: "MO",
    blurb: "Missouri sits at the center of the country — St. Louis and Kansas City connect East-West and North-South transport corridors efficiently.",
    cities: ["Kansas City", "St. Louis", "Springfield", "Columbia"],
    popularRoutes: ["missouri-to-florida", "florida-to-missouri", "missouri-to-california", "missouri-to-texas"],
  },
  {
    name: "Montana", slug: "montana", abbr: "MT",
    blurb: "Montana transport typically connects to Pacific Northwest and Midwest hubs — Billings and Missoula have reliable carrier coverage.",
    cities: ["Billings", "Missoula", "Great Falls", "Bozeman"],
    popularRoutes: ["montana-to-california", "california-to-montana"],
  },
  {
    name: "Nebraska", slug: "nebraska", abbr: "NE",
    blurb: "Nebraska routes connect the Great Plains to both coasts and south to Texas and Florida — Omaha is the primary corridor hub.",
    cities: ["Omaha", "Lincoln", "Bellevue", "Grand Island"],
    popularRoutes: ["nebraska-to-florida", "nebraska-to-california"],
  },
  {
    name: "Nevada", slug: "nevada", abbr: "NV",
    blurb: "Las Vegas and Reno are well-served by California corridor carriers, with strong connections to the Pacific Northwest and Southwest.",
    cities: ["Las Vegas", "Henderson", "Reno", "North Las Vegas"],
    popularRoutes: ["nevada-to-california", "california-to-nevada", "nevada-to-texas"],
  },
  {
    name: "New Hampshire", slug: "new-hampshire", abbr: "NH",
    blurb: "New Hampshire snowbirds ship primarily to Florida, with Manchester and Concord as main origin cities.",
    cities: ["Manchester", "Nashua", "Concord", "Dover"],
    popularRoutes: ["new-hampshire-to-florida", "florida-to-new-hampshire"],
  },
  {
    name: "New Jersey", slug: "new-jersey", abbr: "NJ",
    blurb: "New Jersey is among the highest-volume auto transport states in the Northeast — strong Florida snowbird corridor and solid California route demand.",
    cities: ["Newark", "Jersey City", "Paterson", "Elizabeth", "Trenton"],
    seasonal: "High snowbird volume southbound each October–December.",
    popularRoutes: ["new-jersey-to-florida", "florida-to-new-jersey", "new-jersey-to-california", "california-to-new-jersey"],
  },
  {
    name: "New Mexico", slug: "new-mexico", abbr: "NM",
    blurb: "New Mexico serves as a waypoint on the I-40 corridor between California and Texas — Albuquerque has good carrier availability.",
    cities: ["Albuquerque", "Las Cruces", "Rio Rancho", "Santa Fe"],
    popularRoutes: ["new-mexico-to-california", "california-to-new-mexico", "new-mexico-to-texas"],
  },
  {
    name: "New York", slug: "new-york", abbr: "NY",
    blurb: "New York City is the busiest auto transport market on the East Coast. Snowbird routes to Florida and cross-country routes to California are the dominant corridors.",
    cities: ["New York City", "Buffalo", "Rochester", "Albany", "Syracuse"],
    seasonal: "NYC-to-Florida is one of the highest-demand routes in the country, peaking October–December.",
    popularRoutes: ["new-york-to-florida", "florida-to-new-york", "new-york-to-california", "california-to-new-york", "new-york-to-texas", "new-york-to-arizona"],
  },
  {
    name: "North Carolina", slug: "north-carolina", abbr: "NC",
    blurb: "North Carolina bridges Northeast snowbird flows with Southeast corridors — Charlotte and Raleigh have strong carrier availability.",
    cities: ["Charlotte", "Raleigh", "Greensboro", "Durham", "Winston-Salem"],
    popularRoutes: ["north-carolina-to-florida", "florida-to-north-carolina", "north-carolina-to-new-york"],
  },
  {
    name: "North Dakota", slug: "north-dakota", abbr: "ND",
    blurb: "North Dakota transport connects to Midwest hubs — Fargo and Bismarck have reliable coverage on Minnesota and South Dakota corridors.",
    cities: ["Fargo", "Bismarck", "Grand Forks", "Minot"],
    popularRoutes: ["north-dakota-to-florida", "north-dakota-to-california"],
  },
  {
    name: "Ohio", slug: "ohio", abbr: "OH",
    blurb: "Ohio is one of the top snowbird shipping states — Cleveland, Columbus and Cincinnati all generate high volume to Florida and Arizona annually.",
    cities: ["Columbus", "Cleveland", "Cincinnati", "Toledo", "Akron"],
    seasonal: "Strong October–December southbound to Florida; March–May reverse.",
    popularRoutes: ["ohio-to-florida", "florida-to-ohio", "ohio-to-arizona", "ohio-to-california"],
  },
  {
    name: "Oklahoma", slug: "oklahoma", abbr: "OK",
    blurb: "Oklahoma connects central US to Texas and Southeast corridors — Oklahoma City and Tulsa have strong carrier availability.",
    cities: ["Oklahoma City", "Tulsa", "Norman", "Broken Arrow"],
    popularRoutes: ["oklahoma-to-texas", "texas-to-oklahoma", "oklahoma-to-florida"],
  },
  {
    name: "Oregon", slug: "oregon", abbr: "OR",
    blurb: "Oregon sits on busy Pacific Northwest corridors shared with Washington and California. Portland is the primary transport hub.",
    cities: ["Portland", "Salem", "Eugene", "Gresham"],
    popularRoutes: ["oregon-to-california", "california-to-oregon", "oregon-to-arizona"],
  },
  {
    name: "Pennsylvania", slug: "pennsylvania", abbr: "PA",
    blurb: "Pennsylvania is a major Northeast transport state — Philadelphia and Pittsburgh both generate high volume to Florida, California and Southeast destinations.",
    cities: ["Philadelphia", "Pittsburgh", "Allentown", "Erie"],
    seasonal: "Strong snowbird southbound from Philadelphia each fall.",
    popularRoutes: ["pennsylvania-to-florida", "florida-to-pennsylvania", "pennsylvania-to-california", "pennsylvania-to-arizona"],
  },
  {
    name: "Rhode Island", slug: "rhode-island", abbr: "RI",
    blurb: "Rhode Island snowbirds ship to Florida each fall — Providence connects well to the Northeast carrier network.",
    cities: ["Providence", "Cranston", "Warwick", "Pawtucket"],
    popularRoutes: ["rhode-island-to-florida", "florida-to-rhode-island"],
  },
  {
    name: "South Carolina", slug: "south-carolina", abbr: "SC",
    blurb: "South Carolina is both a snowbird destination and a transit point — Hilton Head and Myrtle Beach see seasonal transport peaks.",
    cities: ["Charleston", "Columbia", "Greenville", "Myrtle Beach"],
    seasonal: "Receives snowbird traffic in winter; strong northbound spring flows.",
    popularRoutes: ["south-carolina-to-new-york", "new-york-to-south-carolina", "south-carolina-to-florida"],
  },
  {
    name: "South Dakota", slug: "south-dakota", abbr: "SD",
    blurb: "South Dakota transport connects to Midwest and Mountain West hubs — Sioux Falls is the primary corridor city.",
    cities: ["Sioux Falls", "Rapid City", "Aberdeen", "Brookings"],
    popularRoutes: ["south-dakota-to-florida", "south-dakota-to-california"],
  },
  {
    name: "Tennessee", slug: "tennessee", abbr: "TN",
    blurb: "Tennessee bridges the Midwest and Southeast — Nashville and Memphis connect strong corridors to Florida, Texas and the Northeast.",
    cities: ["Nashville", "Memphis", "Knoxville", "Chattanooga"],
    popularRoutes: ["tennessee-to-florida", "florida-to-tennessee", "tennessee-to-texas"],
  },
  {
    name: "Texas", slug: "texas", abbr: "TX",
    blurb: "Texas is the second-largest auto transport market in the country. Houston, Dallas and San Antonio connect enormous volumes to California, Florida and the Northeast.",
    cities: ["Houston", "Dallas", "San Antonio", "Austin", "Fort Worth"],
    popularRoutes: ["texas-to-california", "california-to-texas", "texas-to-new-york", "new-york-to-texas", "texas-to-florida", "florida-to-texas", "texas-to-illinois"],
  },
  {
    name: "Utah", slug: "utah", abbr: "UT",
    blurb: "Utah's Salt Lake City is a Mountain West hub with strong connections to California and Pacific Northwest corridors.",
    cities: ["Salt Lake City", "West Valley City", "Provo", "West Jordan"],
    popularRoutes: ["utah-to-california", "california-to-utah", "utah-to-texas"],
  },
  {
    name: "Vermont", slug: "vermont", abbr: "VT",
    blurb: "Vermont generates snowbird flows to Florida and South Carolina — Burlington is the primary origin city.",
    cities: ["Burlington", "South Burlington", "Rutland", "Essex"],
    popularRoutes: ["vermont-to-florida", "florida-to-vermont"],
  },
  {
    name: "Virginia", slug: "virginia", abbr: "VA",
    blurb: "Virginia sits on the I-95 corridor between the Northeast and Southeast — Northern Virginia and Richmond connect strong flows to Florida and California.",
    cities: ["Virginia Beach", "Norfolk", "Chesapeake", "Richmond", "Arlington"],
    popularRoutes: ["virginia-to-florida", "florida-to-virginia", "virginia-to-california"],
  },
  {
    name: "Washington", slug: "washington", abbr: "WA",
    blurb: "Washington State is the Pacific Northwest transport hub. Seattle generates one of the highest volumes on the West Coast, with strong California and Arizona corridors.",
    cities: ["Seattle", "Spokane", "Tacoma", "Vancouver", "Bellevue"],
    popularRoutes: ["washington-to-california", "california-to-washington", "washington-to-arizona", "washington-to-texas"],
  },
  {
    name: "West Virginia", slug: "west-virginia", abbr: "WV",
    blurb: "West Virginia transport connects to Southeast and Mid-Atlantic corridors — Charleston and Huntington have carrier access on I-64 and I-79.",
    cities: ["Charleston", "Huntington", "Morgantown", "Parkersburg"],
    popularRoutes: ["west-virginia-to-florida", "florida-to-west-virginia"],
  },
  {
    name: "Wisconsin", slug: "wisconsin", abbr: "WI",
    blurb: "Wisconsin snowbirds ship to Florida and Arizona in large numbers from Milwaukee and Madison each fall.",
    cities: ["Milwaukee", "Madison", "Green Bay", "Kenosha"],
    seasonal: "Strong snowbird demand to Florida and Arizona October–December.",
    popularRoutes: ["wisconsin-to-florida", "florida-to-wisconsin", "wisconsin-to-arizona"],
  },
  {
    name: "Wyoming", slug: "wyoming", abbr: "WY",
    blurb: "Wyoming transport runs on Mountain West corridors — Cheyenne and Casper connect to Colorado and California routes.",
    cities: ["Cheyenne", "Casper", "Laramie", "Gillette"],
    popularRoutes: ["wyoming-to-california", "california-to-wyoming"],
  },
];

export const stateBySlug: Record<string, StateRecord> = Object.fromEntries(
  statesData.map((s) => [s.slug, s])
);
