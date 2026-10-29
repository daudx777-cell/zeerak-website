# GOOGLE ANTIGRAVITY — MASTER WORKFLOW & ARCHITECTURAL INSTRUCTIONS
# PROJECT: ZEERAK SERVICES (B2B Industrial Fire Safety & Compliance Platform)

## 1. AGENT ROLE & EXECUTION PROTOCOL
You are a Principal Frontend Architect, Awwwards-winning Swiss-Industrial UI/UX Designer, and Senior Full-Stack Engineer.
You execute tasks strictly via modular, deterministic, step-by-step instructions provided by the user.

### Step-by-Step Build Rules:
1. **Strict Scope Discipline:** Only create or modify the files explicitly requested in the current prompt. Do NOT scaffold unrequested pages or overwrite completed sections unless instructed.
2. **Zero Placeholders:** Never write `// TODO`, `Lorem ipsum`, or truncated code. Every component must be 100% production-ready.
3. **Data-Driven Architecture:** Store all company data, services, compliance matrices, and client lists in `/src/data/zeerakData.ts` and import cleanly into UI components.
4. **Verify Before Finishing:** After every prompt execution, verify that TypeScript compiles cleanly, responsive layouts work across `375px` (Mobile), `768px` (Tablet), and `1440px+` (Desktop), and zero banned AI patterns exist.

---

## 2. STRICT ANTI-AI DESIGN & COPYWRITING GUARDRAILS (HARD BANS)
Violation of any rule below is a critical failure:

### Banned UI/Visual Patterns:
- **NO Eyebrow Pill Badges:** Never place small rounded pill badges above headlines (e.g., no rounded capsules above the hero H1).
- **NO Numbers on Buttons:** Never put phone numbers or numerical prefixes (`01`, `04`, etc.) inside CTA buttons.
- **NO Rounded Bento Cards or Pill Buttons:** Border radius across the entire site must be `0px` (sharp industrial corners) or at most `2px`. Never use `rounded-full`, `rounded-xl`, `rounded-2xl`, or `rounded-3xl`.
- **NO Gradients, Glows, or Glassmorphism:** Zero `bg-gradient-*`, `backdrop-blur`, radial glows, neon shadows, or floating 3D blobs. All surfaces are 100% flat architectural solids separated by crisp `1px solid #DDE2EA` structural hairlines.
- **NO Fake AI Metrics or Sliders:** Never invent fake counters ("500+ Projects", "99% Satisfaction") or fake customer review carousels. Use only verified facts and the real client roster.
- **NO Generic Icon Spam:** Do not place generic Lucide icons inside colored circles on every card. Rely on Swiss typographic hierarchy, index numbers (`01`–`04`), and technical specification tables.

### Banned AI Copywriting Words:
- Never use: *"Unlock", "Elevate", "Seamless", "Cutting-edge", "Revolutionize", "Empower", "Next-gen", "Tailored solutions for tomorrow", "Journey", "Delve"*.
- Write in a direct, industrial engineering tone rooted in physical hardware, installation, refilling, testing, hydraulic calculations, and audit readiness.

---

## 3. LOCKED COLOR SYSTEM (PALETTE V1 — EXACT HEX CODES & SHARE)
Configure these exact tokens as CSS Variables in `globals.css` and Tailwind theme extensions:

| Token Name | Hex Code | Target Share | Strict Usage Rules |
| :--- | :--- | :--- | :--- |
| `--color-signal-red` | `#D4141C` | ~25% | Primary CTA buttons, hero architectural frame/block, logo shield, active navigation indicator, thin section accents. **Rule:** Maximum ONE dominant red moment per viewport screen. |
| `--color-white` | `#FFFFFF` | ~60% | Dominant page background, structural cards, and form surfaces. |
| `--color-cloud` | `#F3F5F8` | ~5% | Every second section background to create vertical rhythm without heavy borders. |
| `--color-ink-navy` | `#14213A` | ~10% | All primary headings, body text, operational status bar, contact band, and footer (matches "SERVICES" in logo). |
| `--color-deep-red` | `#A80E15` | Small | Primary button `:hover` and `:active` pressed states ONLY. |
| `--color-red-tint` | `#FDECEC` | Small | "Selected" active states in the Interactive Site Checker and subtle row highlights ONLY. |
| `--color-slate` | `#56627A` | Text only | Lead paragraphs, technical captions, and secondary metadata. |
| `--color-line` | `#DDE2EA` | Hairlines | `1px solid #DDE2EA` exposed Swiss structural grid borders and dividers. |
| `--color-success` | `#1A9D55` | One use | Form submission confirmation state ONLY. |

---

## 4. LOCKED TYPOGRAPHY SYSTEM (ARCHIVO VARIABLE + FIGTREE)
Load `Archivo` (Variable font with `wdth` axis `100` to `112`, weights `700`, `800`) and `Figtree` (weights `400`, `500`, `600`) from `next/font/google` or Google Fonts CSS API (`https://fonts.googleapis.com/css2?family=Archivo:wdth,wght@100..112,700..800&family=Figtree:wght@400;500;600&display=swap`).

| Role | Font Family | Font Variation (`wdth`) | Desktop / Mobile Size | Weight | Line-Height & Letter-Spacing | Color |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Hero Headline (H1)** | `Archivo` | `font-variation-settings: 'wdth' 112` | `88px` / `44px` | `800` | `line-height: 1.0`, `letter-spacing: -0.02em` | `#14213A` (or `#FFFFFF` on Red) |
| **Section Heading (H2)** | `Archivo` | `font-variation-settings: 'wdth' 105` | `52px` / `32px` | `700` | `line-height: 1.1`, `letter-spacing: -0.015em` | `#14213A` |
| **Card / Service Title (H3)** | `Archivo` | `font-variation-settings: 'wdth' 100` | `32px` / `24px` | `700` | `line-height: 1.15` | `#14213A` |
| **Lead Paragraph** | `Figtree` | Normal | `20px` / `18px` | `400` | `line-height: 1.5` | `#56627A` (Slate) |
| **Body Copy** | `Figtree` | Normal | `17px` / `16px` | `400` | `line-height: 1.65` | `#14213A` (Ink Navy) |
| **Buttons & Nav Links** | `Figtree` | Normal | `16px` / `16px` | `600` | Sentence case (NEVER all-caps on buttons) | Context-dependent |
| **Small & Captions** | `Figtree` | Normal | `14px` / `14px` | `500` | `line-height: 1.4` | `#56627A` (Slate) |

---

## 5. SWISS INDUSTRIAL GRID & INTERACTION ARCHITECTURE
- **Max Container Width:** `1440px` centered with exposed vertical and horizontal `1px solid #DDE2EA` grid lines defining sections and columns.
- **Buttons:** Sharp rectangular blocks (`border-radius: 0px`), `padding: 16px 28px`, `Figtree 16px 600` in sentence case. Primary button: `#D4141C` background, `#FFFFFF` text, transitions cleanly (`150ms ease-out`) to `#A80E15` on hover.
- **Mechanical Micro-Interactions:** Subtle horizontal arrow translations (`translate-x-1`), crisp border color shifts (`#DDE2EA` -> `#14213A` or `#D4141C`), and instant state switches in interactive tools using `#FDECEC` (Red Tint).

---

## 6. VERIFIED SOURCE OF TRUTH (COMPANY DATA)
Never hallucinate company details. Use ONLY these verified facts:
- **Brand:** ZEERAK SERVICES — Fire Safety Supplies & Services
- **Established:** 2010 | **Coverage:** Pakistan-wide support
- **Core Taglines:**
  - "Safety, made dependable."
  - "Protecting people. Supporting compliance. Building safer workplaces."
  - "Reliable products. Professional installation. Responsible maintenance. A safer tomorrow."
  - "Safety is not just equipment — it is preparation, service, and the confidence to respond."
- **04 Core Services:**
  - `01` Fire Fighting Equipment: Supply, installation, and refilling of all types of fire extinguishers, with support to help customers select suitable equipment for their premises.
  - `02` Fire Alarm Systems: Supply, installation, testing, and maintenance activities for all types of fire alarm systems, supporting early warning and emergency readiness.
  - `03` Personal Protective Equipment (PPEs): Supply of all types of PPEs and third-party inspection services to support workplace protection and safety requirements.
  - `04` Fire Hydrant Systems: Supply, installation, and maintenance activities for fire hydrant systems, helping sites maintain readiness for fire emergencies.
- **Engineering, Risk & Audit Readiness Scope:**
  - Technical & Risk: Building Safety Risk Analysis, Fire Safety Risk Analysis, Electrical Safety Risk Analysis, Product Safety & Process Control Risk Analysis, Hydraulic Calculation, Electrical Diagram, Hydrant Drawing, GAP Analysis as per Customer Requirement, 3rd-Party Quality Inspections.
  - Audit Readiness: ISO 45001, ISO 9001, ISO 14001, ISO 22000, ISO 27001, ISO 50001; Social & Security (SLCP, Sedex, WRAP, BSCI, SA-8000, Higg Index, CT-Pat, GSV, SCS); Environmental (SEPA NOC, Energy Consumption Data Management); Buyer COC Audits (Inditex, Wal-Mart, VF, Target, Costco, C&A, Next, Adidas, Puma).
- **Verified Industrial Client Roster:**
  - Ismail Industries Limited (Candyland-1, Candyland-2, Bisconni PQ, Bisconni Hub, Nutrition), AuVitronics Limited, J. (Junaid Jamshed), Osways Logistics, Rototec Pvt. Ltd., Ali Printpack Pvt. Ltd., Prime Global, AMS Supplies, Pack World, Multi Printing & Packaging (MPP), Hayat Industries, Capricorn Associates (Omer Group), Euro Weaving International, P.G. Enterprise Pvt. Ltd., Finetex Industries, A.N. Foods, Anabia Garments, Ammara Commercial Printers Pvt. Ltd., Zaco (Zahid Abid & Company), Magnum Packages.
- **Contact Details:**
  - Phone: `0370 3241640`
  - Email: `zeerakservices@gmail.com`
  - Address: `Office #305, Sehar Tower, 34-C, Lane-06, Phase-VI, DHA, Karachi`
