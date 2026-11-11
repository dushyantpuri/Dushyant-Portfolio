export type ProjectMetricIcon =
  | "target"
  | "trending-up"
  | "zap"
  | "clock"
  | "users"
  | "dollar"
  | "activity"
  | "leaf"
  | "file-check"
  | "database"
  | "shield"

export type ProjectMetric = {
  /** Headline figure (e.g. ">95%"). */
  stat: string
  /** Caption shown under the figure. */
  label: string
  icon: ProjectMetricIcon
}

type ProjectBase = {
  slug: string
  title: string
  /** Optional timeframe, e.g. "Mar 2017 – Aug 2018". */
  date?: string
  /** First tag is the category/domain; additional tags are qualifiers. */
  tags: string[]
  /** Domain used by the portfolio filter tabs. */
  domain: "Embedded & IoT" | "Applied AI / RAG" | "Enterprise & Operations"
  metrics: ProjectMetric[]
  /** Ordered nodes for the interactive architecture view. */
  architectureNodes?: string[]
  /** Brief technical note on data flow and constraints. */
  architectureNote?: string
}

/** Tier 1 — full case-study card. */
export type FlagshipProject = ProjectBase & {
  tier: "flagship"
  problem: string
  role: string[]
  outcome: string
}

/** Tier 2 — compact card: title, tags, one-liner, and KPI tiles. */
export type CompactProject = ProjectBase & {
  tier: "compact"
  /** One-line description of the project. */
  summary: string
}

export type Project = FlagshipProject | CompactProject

export const flagshipProjects: FlagshipProject[] = [
  {
    slug: "unified-multi-sensor-iot-platform-dexterra",
    tier: "flagship",
    title: "Unified Multi-Sensor IoT Platform — Dexterra Group",
    tags: ["Embedded & IoT"],
    domain: "Embedded & IoT",
    problem:
      "Commercial facility operations relied on disparate, vendor-locked washroom dispensers with high battery drain and manual inspection overhead.",
    role: [
      "Architected a vendor-agnostic, low-power ESP32 custom PCB integrating capacitive, optical, and time-of-flight (ToF) sensors for liquid soap, paper rolls, and footfall detection",
      "Directed cross-functional embedded, firmware, and software engineers from prototype through live facility pilot at Conestoga SMART Centre",
      "Designed a bidirectional MQTT/REST telemetry pipeline with local buffering streaming directly into Dexterra's enterprise facility management software",
    ],
    outcome:
      "Delivered a unified, retrofit-ready IoT hardware and telemetry system validated in live commercial washrooms with zero vendor lock-in.",
    metrics: [
      { stat: ">95%", label: "Supply Level Accuracy", icon: "target" },
      { stat: "<5%", label: "Peak Footfall Error", icon: "activity" },
      { stat: "~$864K", label: "Projected Annual Savings", icon: "dollar" },
      { stat: "8 Mo", label: "Delivery Timeline", icon: "clock" },
    ],
    architectureNodes: [
      "ESP32 Multi-Sensor PCB",
      "Dynamic Pinging Firmware",
      "Local MQTT/REST Buffer",
      "Dexterra Enterprise FM Software",
    ],
    architectureNote:
      "Sensor readings flow from the ESP32 multi-sensor PCB through dynamic-pinging firmware into a local MQTT/REST buffer, then stream into Dexterra's enterprise FM software. Constraints: battery life on retrofit mounts, intermittent connectivity (local buffering), and zero vendor lock-in.",
  },
  {
    slug: "zoniq-ai-permit-zoning-compliance",
    tier: "flagship",
    title: "ZonIQ — AI Co-Pilot for Building Permits & Zoning Compliance",
    tags: ["Applied AI / RAG"],
    domain: "Applied AI / RAG",
    problem:
      "Manual screening of building permit applications against dense municipal bylaws and building codes took up to 5 days per review and created engineering bottlenecks.",
    role: [
      "Co-created and architected an AI compliance co-pilot powered by a local Retrieval-Augmented Generation (RAG) pipeline over the Ontario Building Code and municipal bylaws",
      "Designed parallel document ingestion and reasoning workflows to run multiple permit pre-checks concurrently before formal engineering review",
      "Established hardware baselines and zero-cloud-leakage local inference pipelines for sensitive architectural submissions",
    ],
    outcome:
      "Compressed a 5-day manual permit screening process into under an hour while enabling parallel multi-application reviews with higher consistency.",
    metrics: [
      { stat: "< 1 Hr", label: "Review Time (Down from 5 Days)", icon: "file-check" },
      { stat: "Parallel", label: "Multi-App Processing", icon: "zap" },
      { stat: "100%", label: "Local Zero-Leakage RAG", icon: "shield" },
      { stat: "8 Mo", label: "Delivery Timeline", icon: "clock" },
    ],
    architectureNodes: [
      "Permit Submission Docs",
      "Local RAG Vector Store (OBC & Bylaws)",
      "Pre-Check Reasoning Engine",
      "Structured Compliance Report",
    ],
    architectureNote:
      "Permit documents are ingested into a local RAG vector store over the Ontario Building Code and bylaws; the pre-check reasoning engine produces a structured compliance report. Constraints: fully on-prem (zero cloud leakage), parallel multi-application processing, sub-hour review latency.",
  },
  {
    slug: "smartcv-computer-vision-inventory",
    tier: "flagship",
    title: "SmartCV – Computer Vision Inventory Analytics",
    tags: ["IoT", "AI/ML"],
    domain: "Applied AI / RAG",
    problem:
      "Manual inventory tracking in warehouses was error-prone and time-consuming, limiting operational efficiency.",
    role: [
      "Led discovery to define MVP scope and technical feasibility",
      "Coordinated cross-functional team of engineers, data scientists, and operations",
      "Drove decision-making on edge computing architecture and camera placement",
    ],
    outcome:
      "MVP delivered for pilot deployment, enabling real-time inventory tracking with 90% inventory accuracy in a controlled environment.",
    metrics: [
      { stat: "90%", label: "Inventory Accuracy", icon: "target" },
      { stat: "70%", label: "Error Reduction", icon: "trending-up" },
      { stat: "2×", label: "Productivity Increase", icon: "zap" },
      { stat: "8 Mo", label: "Delivery Timeline", icon: "clock" },
    ],
    architectureNodes: [
      "Edge Camera Nodes",
      "On-Device CV Inference (YOLO)",
      "Inventory Event Stream",
      "Ops Dashboard & Alerts",
    ],
    architectureNote:
      "Camera feeds are processed by on-device computer-vision inference; inventory events stream to an ops dashboard with alerts. Constraints: edge compute limits, controlled-environment accuracy, and real-time latency.",
  },
  {
    slug: "vortex-ibms-smart-battery",
    tier: "flagship",
    title: "Vortex iBMS – Smart Battery Platform",
    tags: ["Embedded", "IoT"],
    domain: "Embedded & IoT",
    problem:
      "Industrial equipment needed intelligent battery management to prevent failures and optimize performance across distributed sites.",
    role: [
      "Framed problem with stakeholders to align on technical and business requirements",
      "Created phased roadmap balancing firmware, cloud platform, and analytics delivery",
      "Managed RAID log and unblocked engineering team through hardware integration challenges",
    ],
    outcome:
      "Pilot-ready system launched with remote monitoring capabilities, reducing battery-related equipment failures by 40%.",
    metrics: [
      { stat: "15%", label: "Grid Usage Reduction", icon: "trending-up" },
      { stat: "5+", label: "Fleet Operators", icon: "users" },
      { stat: "85%", label: "Uptime Improvement", icon: "zap" },
      { stat: "30%", label: "Cost Reduction", icon: "dollar" },
    ],
    architectureNodes: [
      "Battery Telemetry (BMS)",
      "Edge Gateway",
      "Cloud Analytics",
      "Fleet Monitoring Dashboard",
    ],
    architectureNote:
      "Battery telemetry from the BMS flows through an edge gateway into cloud analytics and a fleet monitoring dashboard. Constraints: distributed sites, intermittent connectivity, and hardware integration complexity.",
  },
]

export const compactProjects: CompactProject[] = [
  {
    slug: "skyjack-digital-services",
    tier: "compact",
    title: "Skyjack Digital Services",
    date: "Sep 2018 – Mar 2020",
    tags: ["B2B SaaS", "Platform"],
    domain: "Enterprise & Operations",
    summary:
      "Launched a fleet-management and predictive-maintenance digital service for a construction equipment manufacturer.",
    metrics: [
      { stat: "$1M+", label: "Project Value", icon: "dollar" },
      { stat: "10%", label: "Revenue Growth", icon: "trending-up" },
      { stat: "500+", label: "Active Users", icon: "users" },
      { stat: "18 Mo", label: "Delivery Timeline", icon: "clock" },
    ],
    architectureNodes: [
      "Fleet Sensors",
      "Telemetry Pipeline",
      "Predictive Maintenance Engine",
      "Operator Dashboard",
    ],
    architectureNote:
      "Fleet sensor telemetry flows through a telemetry pipeline into a predictive-maintenance engine and operator dashboard. Constraints: construction-equipment environments, 18-month delivery, and platform scalability.",
  },
  {
    slug: "packing-digitization-d2c",
    tier: "compact",
    title: "Packing Digitization for D2C Brand",
    date: "Jan 2024 – Dec 2024",
    tags: ["Operations", "Analytics"],
    domain: "Enterprise & Operations",
    summary:
      "Digitized a D2C brand's packing workflow with barcode scanning, WMS integration, and real-time fulfillment analytics.",
    metrics: [
      { stat: "70%", label: "Error Reduction", icon: "trending-up" },
      { stat: "2×", label: "Throughput Increase", icon: "zap" },
      { stat: "80%", label: "Uptime Improvement", icon: "target" },
      { stat: "12 Mo", label: "Implementation", icon: "clock" },
    ],
    architectureNodes: [
      "Barcode Scans",
      "WMS Integration",
      "Fulfillment Analytics",
      "Ops Dashboard",
    ],
    architectureNote:
      "Barcode scans feed WMS integration, producing real-time fulfillment analytics on an ops dashboard. Constraints: throughput doubling, error reduction, and 12-month implementation.",
  },
  {
    slug: "precision-knurl-hardened-tapered-shafts",
    tier: "compact",
    title: "Achieving Precision Knurl in Hardened Tapered Shafts",
    date: "Mar 2017 – Aug 2018",
    tags: ["SR&ED", "Precision Manufacturing"],
    domain: "Enterprise & Operations",
    summary:
      "Developed a precision material-displacement knurling process for hardened, tapered drill shanks that holds a pre-determined interference fit under high torque and vibration.",
    metrics: [
      { stat: "SR&ED", label: "Successful Project", icon: "file-check" },
      { stat: "High Load", label: "Torque & Vibration Tested", icon: "activity" },
      { stat: "Knurl", label: "Precision Interference Fit", icon: "target" },
      { stat: "17 Mo", label: "Development Timeline", icon: "clock" },
    ],
    architectureNodes: [
      "Material-Displacement Knurling",
      "Interference Fit Validation",
      "Torque & Vibration Test Rig",
      "SR&ED Technical Report",
    ],
    architectureNote:
      "The knurling process displaces material to achieve a pre-determined interference fit, validated on a torque and vibration test rig and documented for SR&ED. Constraints: hardened tapered shanks, precision alignment under high load, and SR&ED compliance.",
  },
]

export const projects: Project[] = [...flagshipProjects, ...compactProjects]
