export type CategoryType = "cp-2.4mp" | "cp-5mp";

export type BrandType = "CP Plus";

export interface Product {
  id: string;
  model: string;
  name: string;
  brand: BrandType;
  category: CategoryType;
  categoryName: string;
  price: number;
  originalPrice: number;
  discount: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  warranty: string;
  features: string[];
  specs: {
    resolution?: string;
    lens?: string;
    nightVision?: string;
    connectivity?: string;
    casing?: string;
    audio?: string;
  };
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isNewArrival?: boolean;
  description: string;
}

export const PRODUCTS: Product[] = [
  // ==================== 1. CP PLUS 2.4MP — ANALOG ====================
  {
    id: "cp-umc-da24l4-l",
    model: "CP-UMC-DA24L4-L",
    name: "CP Plus 2.4MP Dome Camera - 40 Mtr IR (2-Way Audio)",
    brand: "CP Plus",
    category: "cp-2.4mp",
    categoryName: "CP PLUS 2.4MP — Analog",
    price: 1850,
    originalPrice: 2450,
    discount: "24% OFF",
    rating: 4.8,
    reviewCount: 94,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "2.4MP Full HD 1080P",
      "40 Meter Smart IR Night Vision",
      "Built-in Two-Way Audio",
      "DWDR & 2D-DNR Noise Reduction",
    ],
    specs: {
      resolution: "2.4MP (1920 x 1080)",
      lens: "3.6mm Lens",
      nightVision: "Up to 40M Smart IR",
      connectivity: "HD Analog BNC / Audio over Coax",
      casing: "Polycarbonate Dome",
      audio: "Two-Way Audio Support",
    },
    isBestSeller: true,
    isFeatured: true,
    description:
      "Professional 2.4MP HD analog dome camera with extended 40-meter Smart IR night vision and built-in two-way audio communication for enhanced commercial and residential security.",
  },
  {
    id: "cp-umc-ta24l3-l",
    model: "CP-UMC-TA24L3-L",
    name: "CP Plus 2.4MP Bullet Camera - 30 Mtr IR (2-Way Audio)",
    brand: "CP Plus",
    category: "cp-2.4mp",
    categoryName: "CP PLUS 2.4MP — Analog",
    price: 1928,
    originalPrice: 2550,
    discount: "24% OFF",
    rating: 4.9,
    reviewCount: 112,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "2.4MP Full HD Resolution",
      "30 Meter IR Night Vision",
      "Two-Way Audio Support",
      "IP66 Weatherproof Housing",
    ],
    specs: {
      resolution: "2.4MP (1920 x 1080)",
      lens: "3.6mm Fixed Focal Lens",
      nightVision: "Up to 30M IR Range",
      connectivity: "Coaxial BNC / 12V DC",
      casing: "IP66 Weatherproof Metal + ABS",
      audio: "Two-Way Audio Support",
    },
    isBestSeller: true,
    isFeatured: true,
    description:
      "Rugged outdoor 2.4MP bullet camera featuring 30m Smart IR illumination and crystal-clear two-way audio talkback capability with IP66 weatherproof defense.",
  },
  {
    id: "cp-urc-dc24plc-l-0360",
    model: "CP-URC-DC24PLC-L-0360",
    name: "CP Plus 2.4MP Dome Camera - 20 Mtr Dual IR (Audio)",
    brand: "CP Plus",
    category: "cp-2.4mp",
    categoryName: "CP PLUS 2.4MP — Analog",
    price: 1674,
    originalPrice: 2200,
    discount: "24% OFF",
    rating: 4.8,
    reviewCount: 86,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "2.4MP High Definition",
      "20 Meter Dual Smart IR",
      "Integrated Audio Mic",
      "Plug & Play HD Analog",
    ],
    specs: {
      resolution: "2.4MP 1080P",
      lens: "3.6mm Lens (0360 series)",
      nightVision: "20M Dual IR LEDs",
      connectivity: "BNC / Audio over Coax",
      casing: "Compact Indoor Dome",
      audio: "Integrated Audio Mic",
    },
    isBestSeller: false,
    isFeatured: false,
    description:
      "Affordable and reliable 2.4MP dome camera equipped with dual IR LEDs for 20m night vision and integrated audio recording over standard coaxial cabling.",
  },
  {
    id: "cp-urc-tc24plc-l-0360",
    model: "CP-URC-TC24PLC-L-0360",
    name: "CP Plus 2.4MP Bullet Camera - 20 Mtr Dual IR (Audio)",
    brand: "CP Plus",
    category: "cp-2.4mp",
    categoryName: "CP PLUS 2.4MP — Analog",
    price: 1752,
    originalPrice: 2300,
    discount: "24% OFF",
    rating: 4.8,
    reviewCount: 78,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "2.4MP 1080P Sensor",
      "20 Meter Dual IR Illumination",
      "Built-in High Sensitivity Mic",
      "IP66 All-Weather Resistance",
    ],
    specs: {
      resolution: "2.4MP (1920 x 1080)",
      lens: "3.6mm Lens",
      nightVision: "20M Dual Smart IR",
      connectivity: "HD BNC / DC Jack",
      casing: "IP66 Weatherproof Bullet",
      audio: "Built-in High Sensitivity Mic",
    },
    isBestSeller: false,
    isFeatured: false,
    description:
      "Weatherproof 2.4MP outdoor bullet camera with dual IR night vision up to 20 meters and high-clarity coaxial audio surveillance.",
  },

  // ==================== 2. CP PLUS 5MP — ANALOG ====================
  {
    id: "cp-usc-dc51plc2-0360",
    model: "CP-USC-DC51PLC2-0360",
    name: "CP Plus 5MP Ultra HD Dome Camera (Audio)",
    brand: "CP Plus",
    category: "cp-5mp",
    categoryName: "CP PLUS 5MP — Analog",
    price: 1768,
    originalPrice: 2350,
    discount: "25% OFF",
    rating: 4.8,
    reviewCount: 105,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "5MP Ultra HD Clarity",
      "20 Meter Smart IR",
      "Integrated Audio Mic",
      "HD/SD Switchable",
    ],
    specs: {
      resolution: "5MP (2560 x 1944)",
      lens: "3.6mm Fixed Lens",
      nightVision: "20M Smart IR",
      connectivity: "BNC Video / Audio over Coax",
      casing: "Aesthetic Indoor Dome",
      audio: "Integrated Audio Mic",
    },
    isBestSeller: true,
    isFeatured: true,
    description:
      "High-definition 5MP indoor dome camera offering superior resolution, 20m night clarity, and integrated audio capture over coaxial cables.",
  },
  {
    id: "cp-usc-tc51plc2-0360",
    model: "CP-USC-TC51PLC2-0360",
    name: "CP Plus 5MP Ultra HD Bullet Camera (Audio)",
    brand: "CP Plus",
    category: "cp-5mp",
    categoryName: "CP PLUS 5MP — Analog",
    price: 1850,
    originalPrice: 2450,
    discount: "24% OFF",
    rating: 4.9,
    reviewCount: 129,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "5MP Ultra HD Image Sensor",
      "20 Meter Night Vision",
      "Built-in Microphone",
      "IP66 Weather Protection",
    ],
    specs: {
      resolution: "5MP (2560 x 1944)",
      lens: "3.6mm Lens",
      nightVision: "20M Smart IR",
      connectivity: "Coaxial BNC / 12V DC",
      casing: "IP66 Weatherproof Housing",
      audio: "Built-in Microphone",
    },
    isBestSeller: true,
    isFeatured: true,
    description:
      "Ultra-sharp 5MP bullet camera designed for perimeter monitoring with 20m IR night vision, built-in mic, and durable IP66 outdoor protection.",
  },
  {
    id: "cp-urc-dc51plc-l-0360",
    model: "CP-URC-DC51PLC-L-0360",
    name: "CP Plus 5MP Dome Camera - 20 Mtr Dual IR (Audio)",
    brand: "CP Plus",
    category: "cp-5mp",
    categoryName: "CP PLUS 5MP — Analog",
    price: 2166,
    originalPrice: 2850,
    discount: "24% OFF",
    rating: 4.8,
    reviewCount: 64,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "5MP Ultra HD Resolution",
      "20 Meter Dual IR LEDs",
      "Audio over Coaxial Cable",
      "DWDR Dynamic Range",
    ],
    specs: {
      resolution: "5MP (2880 x 1620)",
      lens: "3.6mm Lens",
      nightVision: "20M Dual IR Range",
      connectivity: "BNC / 12V DC",
      casing: "High Grade ABS Dome",
      audio: "Audio over Coaxial Cable",
    },
    isBestSeller: false,
    isFeatured: false,
    description:
      "High-spec 5MP dome camera with advanced dual IR night vision and audio recording, ideal for modern office and commercial installations.",
  },
  {
    id: "cp-urc-tc51plc-l-0360",
    model: "CP-URC-TC51PLC-L-0360",
    name: "CP Plus 5MP Bullet Camera - 20 Mtr Dual IR (Audio)",
    brand: "CP Plus",
    category: "cp-5mp",
    categoryName: "CP PLUS 5MP — Analog",
    price: 2249,
    originalPrice: 2950,
    discount: "24% OFF",
    rating: 4.8,
    reviewCount: 71,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "5MP Pixel Density",
      "20 Meter Dual IR Night Vision",
      "Built-in Mic Audio Recording",
      "IP67 Rated Waterproof",
    ],
    specs: {
      resolution: "5MP (2880 x 1620)",
      lens: "3.6mm Lens",
      nightVision: "20M Dual IR Illumination",
      connectivity: "HD Analog BNC",
      casing: "IP67 Rugged Housing",
      audio: "Built-in Mic Audio Recording",
    },
    isBestSeller: false,
    isFeatured: false,
    description:
      "Heavy-duty 5MP outdoor bullet camera engineered with dual IR LEDs for seamless night vision up to 20m and IP67 weather resistance.",
  },
  {
    id: "cp-gpc-da51pl2c-se-0360",
    model: "CP-GPC-DA51PL2C-SE-0360",
    name: "CP Plus 5MP Guard+ Color Dome Camera (Audio)",
    brand: "CP Plus",
    category: "cp-5mp",
    categoryName: "CP PLUS 5MP — Analog",
    price: 2414,
    originalPrice: 3150,
    discount: "23% OFF",
    rating: 4.9,
    reviewCount: 153,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "5MP Guard+ Full-Color at Night",
      "20 Meter Warm White Light",
      "Built-in Mic over Coax",
      "2D-DNR Noise Reduction",
    ],
    specs: {
      resolution: "5MP Ultra HD",
      lens: "3.6mm F1.6 Large Aperture",
      nightVision: "20M Warm LED Full Color",
      connectivity: "HD Analog BNC / Audio over Coax",
      casing: "Reinforced Guard+ Dome",
      audio: "Built-in Mic over Coax",
    },
    isBestSeller: true,
    isFeatured: true,
    description:
      "CP Plus Guard+ series 5MP dome camera delivering full-color video 24/7 with warm LED illumination and crystal-clear audio recording.",
  },
  {
    id: "cp-gpc-ta51pl2c-se",
    model: "CP-GPC-TA51PL2C-SE",
    name: "CP Plus 5MP Guard+ Color Bullet Camera (Audio)",
    brand: "CP Plus",
    category: "cp-5mp",
    categoryName: "CP PLUS 5MP — Analog",
    price: 2490,
    originalPrice: 3250,
    discount: "23% OFF",
    rating: 4.9,
    reviewCount: 168,
    inStock: true,
    warranty: "2 Years Official CP Plus Warranty",
    features: [
      "5MP Guard+ 24/7 Color Recording",
      "20 Meter Warm LED Illumination",
      "Built-in Audio Microphone",
      "IP67 Weatherproof Metal Body",
    ],
    specs: {
      resolution: "5MP Ultra HD",
      lens: "3.6mm F1.6 Large Aperture",
      nightVision: "20M Warm LED Full Color",
      connectivity: "HD Analog BNC",
      casing: "IP67 Heavy-duty Metal Body",
      audio: "Built-in Audio Microphone",
    },
    isBestSeller: true,
    isFeatured: true,
    description:
      "Flagship CP Plus Guard+ 5MP bullet camera with F1.6 aperture for vibrant 24/7 full-color footage, IP67 metal body, and integrated coaxial audio.",
  },
];

export const CATEGORIES_LIST = [
  { id: "all", name: "All Cameras (10)" },
  { id: "cp-2.4mp", name: "CP PLUS 2.4MP — Analog (4)" },
  { id: "cp-5mp", name: "CP PLUS 5MP — Analog (6)" },
] as const;
