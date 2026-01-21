
import { Product, Review, BusinessStat } from './types';

export const BUSINESS_INFO = {
  name: "Asham Overseas",
  address: "396 A-Block, Ansal Sushant City, Panipat - 132103, Haryana, India",
  phone: "08046070204",
  gst: "06BBHPC4754L1ZJ",
  iec: "BBHPC4754L",
  ceo: "Jatin Chugh",
  established: "2012",
  nature: "Trader - Wholesaler/Distributor",
  email: "info@ashamoverseas.com"
};

export const CATEGORIES = [
  "Sofa Fabric",
  "Designer Curtains",
  "Double Bed Sheets",
  "King Size Bed Sheets",
  "Bed Sheets",
  "Bed Comforters"
];

export const MATERIALS = ["Cotton", "Jute", "Polyester", "Velvet", "Flannel"];
export const USAGES = ["Hotel", "Home", "Commercial", "Hospital"];

export const PRODUCTS: Product[] = [
  {
    id: "p1",
    name: "Ultrasonic AC Comforter",
    category: "Bed Comforters",
    description: "Premium ultrasonic quilted comforter for year-round comfort. Engineered for durability and temperature regulation.",
    imageUrl: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?auto=format&fit=crop&q=80&w=1000",
    material: "Polyester",
    usage: ["Home", "Hotel"],
    features: ["Lightweight", "Durable Quilting", "Easy Wash"]
  },
  {
    id: "p2",
    name: "Pure Cotton Deewan Set",
    category: "Bed Sheets",
    description: "Elegant 8-piece pure cotton set designed for luxury living spaces. Traditional Panipat craftsmanship meets modern aesthetics.",
    imageUrl: "https://images.unsplash.com/photo-1595113316349-9fa4ee24f884?auto=format&fit=crop&q=80&w=1000",
    material: "Cotton",
    usage: ["Home"],
    features: ["Breathable", "Pure Cotton", "8 Piece Set"]
  },
  {
    id: "p3",
    name: "Stripe King Bed Sheet",
    category: "King Size Bed Sheets",
    description: "Luxurious striped patterns with high thread count for a hotel-like feel. Fade-resistant and wrinkle-free.",
    imageUrl: "https://images.unsplash.com/photo-1629079447841-d83b1999f0c0?auto=format&fit=crop&q=80&w=1000",
    material: "Cotton",
    usage: ["Hotel", "Home"],
    features: ["Stripe Design", "Premium Feel", "King Size"]
  },
  {
    id: "p4",
    name: "Velvet Texture Designer Curtain",
    category: "Designer Curtains",
    description: "Heavy-duty velvet curtains providing thermal insulation and complete privacy for modern interiors.",
    imageUrl: "https://images.unsplash.com/photo-1513519245088-0e12902e5a38?auto=format&fit=crop&q=80&w=1000",
    material: "Velvet",
    usage: ["Home", "Commercial"]
  },
  {
    id: "p5",
    name: "Classic Jute Sofa Fabric",
    category: "Sofa Fabric",
    description: "Authentic jute blend upholstery fabric. High martindale rating for heavy commercial and domestic use.",
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1000",
    material: "Jute",
    usage: ["Commercial", "Home"]
  },
  {
    id: "p6",
    name: "Medical Grade Bed Linen",
    category: "Bed Sheets",
    description: "Antibacterial and highly durable linens specifically designed for hospital environments.",
    imageUrl: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&q=80&w=1000",
    material: "Polyester",
    usage: ["Hospital"],
    features: ["Antibacterial", "High Durability", "Bleach Safe"]
  },
  {
    id: "p7",
    name: "Super Soft Flannel Blanket",
    category: "Bed Sheets",
    description: "Ultra-soft brushed flannel for maximum warmth and comfort during peak winter seasons.",
    imageUrl: "https://images.unsplash.com/photo-1580301762395-21ce84d00bc6?auto=format&fit=crop&q=80&w=1000",
    material: "Flannel",
    usage: ["Home"]
  },
  {
    id: "p8",
    name: "Modern Quilted Sofa Fabric",
    category: "Sofa Fabric",
    description: "Quilted upholstery fabric with a sophisticated grey finish. Perfect for luxury sofa manufacturing.",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=1000",
    material: "Polyester",
    usage: ["Home", "Commercial"]
  }
];

export const REVIEWS: Review[] = [
  {
    id: "r1",
    user: "Payal Agarwal",
    location: "Surat, Gujarat",
    rating: 4,
    comment: "Excellent quality 5D bedsheets, though delivery took a bit longer. Highly recommend for bulk orders.",
    date: "10-Nov-2025",
    productName: "5D Bedsheets"
  },
  {
    id: "r2",
    user: "Manoj Harsukhrai Thakker",
    location: "Mumbai, Maharashtra",
    rating: 5,
    comment: "The comforters are top-notch. Great response from Jatin and quality service throughout the process.",
    date: "22-Sep-2025",
    productName: "Bed Comforters"
  },
  {
    id: "r3",
    user: "Vikram S.",
    location: "Karur, Tamil Nadu",
    rating: 4,
    comment: "Reliable supplier for hotel linens. The stripe cotton sheets are world-class.",
    date: "10-Nov-2025"
  }
];

export const STATS: BusinessStat[] = [
  { label: "Response Rate", value: "81%" },
  { label: "Quality Rating", value: "85%" },
  { label: "Delivery Success", value: "77%" },
  { label: "Years Experience", value: "12+" }
];
