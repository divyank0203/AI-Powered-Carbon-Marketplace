export const products = [
  {
    id: "1",
    name: "Amazon Rainforest Reforestation",
    category: "Forestry",
    location: "Brazil",
    verraCertified: true,
    sdgs: ["Climate Action", "Life on Land"],
    description:
      "A large-scale reforestation initiative restoring degraded rainforest land.",
    sellers: [
      {
        sellerId: "S1",
        name: "GreenFuture",
        pricePerCredit: 12,
        rating: 4.7,
      },
      {
        sellerId: "S2",
        name: "EcoTrade",
        pricePerCredit: 10,
        rating: 4.2,
      },
    ],
  },
  {
    id: "2",
    name: "Wind Energy Expansion Project",
    category: "Renewable Energy",
    location: "India",
    verraCertified: true,
    sdgs: ["Affordable Clean Energy", "Climate Action"],
    description:
      "Wind farm expansion supporting clean energy generation and grid stability.",
    sellers: [
      {
        sellerId: "S3",
        name: "RenewX",
        pricePerCredit: 9,
        rating: 4.5,
      },
      {
        sellerId: "S4",
        name: "CarbonBridge",
        pricePerCredit: 11,
        rating: 4.3,
      },
    ],
  },
  {
    id: "3",
    name: "Industrial Methane Capture",
    category: "Infrastructure",
    location: "USA",
    verraCertified: false,
    sdgs: ["Industry Innovation", "Climate Action"],
    description:
      "Capturing methane emissions from industrial waste facilities.",
    sellers: [
      {
        sellerId: "S5",
        name: "InfraCarbon",
        pricePerCredit: 8,
        rating: 4.1,
      },
    ],
  },
];
