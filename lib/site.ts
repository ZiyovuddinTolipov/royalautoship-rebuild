export const site = {
  name: "Royal Auto Ship",
  url: "https://www.royalautoship.com",
  phone: "(215) 201-2020",
  phoneHref: "tel:+12152012020",
  email: "support@royalautoship.com",
  address: {
    street: "300 Avon St",
    city: "Philadelphia",
    state: "PA",
    zip: "19116",
  },
  hours: [
    { days: "Monday – Friday", time: "9:00 AM – 9:00 PM" },
    { days: "Sunday", time: "9:00 AM – 6:00 PM" },
  ],
  social: {
    facebook: "https://www.facebook.com/royalautoship",
    instagram: "https://www.instagram.com/royalautoship",
    twitter: "https://twitter.com/royalautoship",
  },
  rating: { value: 4.9, count: 1000 },
} as const;

export const services = [
  {
    title: "Door-to-Door Shipping",
    slug: "door-to-door-car-shipping",
    blurb:
      "Pickup at your driveway, delivery to the destination address. No terminals, no detours.",
  },
  {
    title: "Open Car Transport",
    slug: "open-car-shipping",
    blurb:
      "The industry standard. Safe, insured and the most economical way to move a vehicle.",
  },
  {
    title: "Enclosed Car Transport",
    slug: "enclosed-car-shipping",
    blurb:
      "Full protection from weather and road debris — the choice for classics and exotics.",
  },
  {
    title: "Motorcycle Shipping",
    slug: "motorcycle-shipping",
    blurb:
      "Strapped, padded and crated where needed. Bikes arrive exactly as they left.",
  },
  {
    title: "Military Car Shipping",
    slug: "military-car-shipping",
    blurb:
      "PCS orders move fast — so do we. Priority scheduling and military discounts.",
  },
  {
    title: "Snowbird Shipping",
    slug: "snowbird-car-shipping",
    blurb:
      "Seasonal routes south in fall, north in spring. Book early, ride a fixed price.",
  },
] as const;
