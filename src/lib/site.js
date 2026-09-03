// Single source of truth for copy + assets used across every design concept.
// Contact details marked PLACEHOLDER need to be confirmed by the client.

export const company = {
  name: "Griffin Brothers Properties",
  shortName: "Griffin Brothers",
  region: "the Shoals",
  regionLong: "the Shoals, North Alabama",
  values: "Built on faith, family & integrity.",
  heroLines: ["We own it.", "We build it.", "We make it work."],
  heroSub:
    "Commercial real estate ownership and development in the Shoals.",
  familyStatement:
    "We're a family-owned real estate company with deep roots in the Shoals. Our approach is simple: build carefully, own for the long term, and treat every property and tenant like it matters — because to us, it does.",
  aboutStatement:
    "Griffin Brothers Properties is Jeff and Lynn — two brothers who build, own, and manage commercial property across the Shoals. We're not a national firm and we don't want to be. We answer our own phones, we know our tenants by name, and we plan to still own these buildings in twenty years.",
  founders: "Jeff & Lynn",
  contact: {
    phone: "(256) 000-0000", // PLACEHOLDER
    phoneHref: "tel:+12560000000", // PLACEHOLDER
    email: "info@griffinbrothersproperties.com", // PLACEHOLDER
    address: ["Florence, Alabama"], // PLACEHOLDER — full street address to confirm
  },
};

export const nav = [
  { label: "Home", href: "#top" },
  { label: "Divisions", href: "#divisions" },
  { label: "Property Locations", href: "#locations" },
  { label: "Gallery", href: "/gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export const divisions = [
  {
    id: "retail",
    name: "Retail",
    image: "/photos/retail.jpg",
    alt: "Griffin Brothers retail center with wood-slat facade in the Shoals",
    blurb:
      "Storefronts and small shopping centers built for local businesses to be seen and stay a while. Careful buildout, visible frontage, and a landlord who actually picks up the phone.",
  },
  {
    id: "flex",
    name: "Flex",
    image: "/photos/flex.jpg",
    alt: "Row of flex warehouse units with roll-up doors under a big sky",
    blurb:
      "Warehouse-and-office space for makers, contractors, and growing companies — room to work, load, and store under one roof, with the flexibility to take another bay when you outgrow this one.",
  },
  {
    id: "land-leases",
    name: "Land Leases",
    image: "/photos/land.jpg",
    alt: "Aerial view of a prepared commercial parcel along a main road",
    blurb:
      "Prepared, well-located parcels available for long-term ground lease — a way onto a strong corner without carrying the cost of the dirt.",
  },
  {
    id: "build-to-suit",
    name: "Build to Suit",
    image: "/photos/build-to-suit.jpg",
    alt: "Custom-built commercial building at dusk with brick and wood detailing",
    blurb:
      "Tell us what your business needs. We design it, build it, and then own and maintain it — so you get the right building without becoming a developer to get it.",
  },
  {
    id: "residential",
    name: "Residential",
    image: null, // no photo supplied — concepts render a branded panel instead
    alt: "",
    blurb:
      "A small, deliberately chosen portfolio of rental homes, held to the same standard as everything else we own and managed by the same people.",
  },
];

export const locations = [
  {
    name: "Shoppes on 2nd",
    logo: "/locations/shoppes-on-2nd.png",
    kind: "Retail center",
  },
  {
    name: "Wilson Crossing",
    logo: "/locations/wilson-crossing.png",
    kind: "Mixed-use development",
  },
  {
    name: "Airport Business Park",
    logo: "/locations/airport-business-park.png",
    kind: "Flex & industrial",
  },
  {
    name: "HWY 72 Business Park",
    logo: "/locations/hwy-72-business-park.png",
    kind: "Flex & industrial",
  },
  {
    name: "Mini Flex of the Shoals",
    logo: "/locations/mini-flex-of-the-shoals.png",
    kind: "Small-bay flex",
  },
];

// Gallery: everything supplied, reused as "properties + memories of the business".
export const gallery = [
  { src: "/photos/hero.jpg", w: 2016, h: 1512, caption: "Refine — 2nd Street, Muscle Shoals" },
  { src: "/photos/build-to-suit.jpg", w: 1280, h: 851, caption: "One Ride — build-to-suit, completed" },
  { src: "/photos/flex.jpg", w: 2015, h: 1144, caption: "Flex bays & drive aisle" },
  { src: "/photos/retail.jpg", w: 1244, h: 509, caption: "Refine storefront row" },
  { src: "/photos/founders-photo.jpg", w: 1284, h: 743, caption: "Jeff & Lynn on site" },
  { src: "/photos/land.jpg", w: 1362, h: 548, caption: "Land held for ground lease" },
  { src: "/photos/founders-illustration.jpg", w: 738, h: 430, caption: "Griffin Brothers Properties" },
];

