// ============================================================================
// ZEERAK SERVICES — MASTER DATA REPOSITORY (VERIFIED SOURCE OF TRUTH)
// B2B Industrial Fire Safety & Compliance Platform
// ============================================================================

export interface CompanyInfo {
  name: string;
  tagline: string;
  established: number;
  phone: string;
  phoneDisplay: string;
  email: string;
  address: string;
  city: string;
  country: string;
  coverage: string;
  taglines: string[];
}

export interface ServiceItem {
  id: string;
  index: string;
  title: string;
  shortDescription: string;
  scope: string[];
}

export interface ClientProfile {
  name: string;
  units?: string[];
  sector?: string;
}

export const COMPANY_INFO: CompanyInfo = {
  name: "ZEERAK SERVICES",
  tagline: "Fire Safety Supplies & Services",
  established: 2010,
  phone: "03703241640",
  phoneDisplay: "0370 3241640",
  email: "zeerakservices@gmail.com",
  address: "Office #305, Sehar Tower, 34-C, Lane-06, Phase-VI, DHA",
  city: "Karachi",
  country: "Pakistan",
  coverage: "Pakistan-wide support",
  taglines: [
    "Safety, made dependable.",
    "Protecting people. Supporting compliance. Building safer workplaces.",
    "Reliable products. Professional installation. Responsible maintenance. A safer tomorrow.",
    "Safety is not just equipment — it is preparation, service, and the confidence to respond.",
  ],
};

export const CORE_SERVICES: ServiceItem[] = [
  {
    id: "fire-fighting",
    index: "01",
    title: "Fire Fighting Equipment",
    shortDescription:
      "Supply, installation, and refilling of all types of fire extinguishers, with support to help customers select suitable equipment for their premises.",
    scope: [
      "Supply of certified fire extinguishers (CO2, DCP, Foam, Clean Agent, Water)",
      "Professional mounting and architectural wall/bracket installation",
      "Certified refilling and hydraulic pressure testing of cylinders",
      "Facility hazard matching and premises suitability survey",
    ],
  },
  {
    id: "fire-alarm",
    index: "02",
    title: "Fire Alarm Systems",
    shortDescription:
      "Supply, installation, testing, and maintenance activities for all types of fire alarm systems, supporting early warning and emergency readiness.",
    scope: [
      "Conventional and addressable fire alarm system supply",
      "Turnkey conduit, wiring, and panel installation",
      "Detector testing, call points, and sounder validation",
      "Routine preventive maintenance and inspection schedules",
    ],
  },
  {
    id: "ppe",
    index: "03",
    title: "Personal Protective Equipment (PPEs)",
    shortDescription:
      "Supply of all types of PPEs and third-party inspection services to support workplace protection and safety requirements.",
    scope: [
      "Full industrial PPE supply (head, eye, hearing, respiratory, body, foot)",
      "Third-party quality and compliance inspections",
      "Audit readiness documentation and hazard level matching",
      "Workplace protective compliance advisory",
    ],
  },
  {
    id: "fire-hydrant",
    index: "04",
    title: "Fire Hydrant Systems",
    shortDescription:
      "Supply, installation, and maintenance activities for fire hydrant systems, helping sites maintain readiness for fire emergencies.",
    scope: [
      "Hydrant network hardware, landing valves, and hose reels supply",
      "Underground and overhead piping network installation",
      "Hydraulic calculations and hydrant engineering drawings",
      "Flow rate testing, pump room maintenance, and emergency pressure readiness",
    ],
  },
];

export const TECHNICAL_RISK_SCOPE = [
  "Building Safety Risk Analysis",
  "Fire Safety Risk Analysis",
  "Electrical Safety Risk Analysis",
  "Product Safety & Process Control Risk Analysis",
  "Hydraulic Calculation",
  "Electrical Diagram",
  "Hydrant Drawing",
  "GAP Analysis as per Customer Requirement",
  "3rd-Party Quality Inspections",
] as const;

export const AUDIT_READINESS_MATRIX = {
  iso: [
    "ISO 45001 (Occupational Health & Safety)",
    "ISO 9001 (Quality Management)",
    "ISO 14001 (Environmental Management)",
    "ISO 22000 (Food Safety)",
    "ISO 27001 (Information Security)",
    "ISO 50001 (Energy Management)",
  ],
  socialSecurity: [
    "SLCP",
    "Sedex",
    "WRAP",
    "BSCI",
    "SA-8000",
    "Higg Index",
    "CT-Pat",
    "GSV",
    "SCS",
  ],
  environmental: [
    "SEPA NOC",
    "Energy Consumption Data Management",
  ],
  buyerAudits: [
    "Inditex",
    "Wal-Mart",
    "VF",
    "Target",
    "Costco",
    "C&A",
    "Next",
    "Adidas",
    "Puma",
  ],
};

export const VERIFIED_CLIENT_ROSTER: ClientProfile[] = [
  {
    name: "Ismail Industries Limited",
    units: [
      "Candyland-1",
      "Candyland-2",
      "Bisconni PQ",
      "Bisconni Hub",
      "Nutrition",
    ],
    sector: "Food & Confectionery FMCG",
  },
  { name: "AuVitronics Limited", sector: "Automotive Parts & Electronics" },
  { name: "J. (Junaid Jamshed)", sector: "Textile & Retail" },
  { name: "Osways Logistics", sector: "Logistics & Warehousing" },
  { name: "Rototec Pvt. Ltd.", sector: "Industrial Manufacturing" },
  { name: "Ali Printpack Pvt. Ltd.", sector: "Printing & Packaging" },
  { name: "Prime Global", sector: "Industrial Supplies" },
  { name: "AMS Supplies", sector: "Commercial Supplies" },
  { name: "Pack World", sector: "Packaging & Containers" },
  { name: "Multi Printing & Packaging (MPP)", sector: "Printing & Packaging" },
  { name: "Hayat Industries", sector: "Manufacturing" },
  { name: "Capricorn Associates (Omer Group)", sector: "Industrial Conglomerate" },
  { name: "Euro Weaving International", sector: "Textile Weaving" },
  { name: "P.G. Enterprise Pvt. Ltd.", sector: "Industrial Trade" },
  { name: "Finetex Industries", sector: "Textile Manufacturing" },
  { name: "A.N. Foods", sector: "Food Processing" },
  { name: "Anabia Garments", sector: "Apparel & Garments" },
  { name: "Ammara Commercial Printers Pvt. Ltd.", sector: "Commercial Printing" },
  { name: "Zaco (Zahid Abid & Company)", sector: "Engineering & Trading" },
  { name: "Magnum Packages", sector: "Packaging Solutions" },
];
