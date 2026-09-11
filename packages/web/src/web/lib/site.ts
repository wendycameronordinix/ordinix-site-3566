/** Single source of truth for site content. Every email address on the site comes from here. */
export const CONTACT_EMAIL = "wendy.cameron@ordinix.co.uk";

export const COMPANY = {
  name: "Ordinix Limited",
  headline: "Principal Architect & Strategic Advisory",
  strapline:
    "Ordinix partners with financial services, insurance, and media organisations to architect and deliver high-impact digital transformations.",
  experience: "25+ years leading mission-critical transformations at scale",
  principal: "Wendy Cameron",
};

export interface Capability {
  id: string;
  index: string;
  title: string;
  summary: string;
  points: string[];
}

export const CAPABILITIES: Capability[] = [
  {
    id: "ai-first",
    index: "01",
    title: "AI-First Orchestration & Agentic Workflows",
    summary:
      "Designing enterprise adoption frameworks for AI-driven automation and intelligent business processes.",
    points: [
      "Enterprise AI adoption frameworks",
      "Agentic workflow design & orchestration",
      "Intelligent process automation",
    ],
  },
  {
    id: "data",
    index: "02",
    title: "Data Strategy & Platforms",
    summary:
      "Azure Lakehouse (Databricks), Snowflake, and federated Data Mesh governance that unlock competitive advantage.",
    points: [
      "Azure Lakehouse on Databricks",
      "Snowflake platform strategy",
      "Federated Data Mesh governance",
    ],
  },
  {
    id: "integration",
    index: "03",
    title: "Enterprise Integration Architecture",
    summary:
      "API-first solutions, integration governance, and seamless ecosystem connectivity.",
    points: ["API-first architecture", "Integration governance", "Ecosystem connectivity"],
  },
  {
    id: "cloud",
    index: "04",
    title: "Cloud-Native & Microservices",
    summary:
      "Scalable, resilient architectures across AWS, Azure, and Kubernetes with security built in.",
    points: ["AWS & Azure landing zones", "Kubernetes & microservices", "Security by design"],
  },
  {
    id: "discovery",
    index: "05",
    title: "Strategic Discovery",
    summary:
      "Time-boxed sandbox spikes and fail-fast validation to de-risk architectural investment.",
    points: ["Time-boxed sandbox spikes", "Fail-fast validation", "De-risked investment cases"],
  },
];

export const SECTORS = ["Financial Services", "Insurance", "Media"];

export const APPROACH = [
  {
    title: "A force multiplier, not a headcount",
    body: "Ordinix operates alongside your existing teams — bridging the gaps between strategy, architecture, and delivery so decisions get made and work ships.",
  },
  {
    title: "Evidence before commitment",
    body: "Architecture choices are proven with time-boxed spikes and sandbox builds, so investment follows evidence rather than opinion.",
  },
  {
    title: "Built to run, not to demo",
    body: "Every design accounts for security, governance, cost and operability from day one — because the target state has to survive production.",
  },
  {
    title: "Regulated-industry fluency",
    body: "Mission-critical transformation in financial services, insurance and media, where resilience, auditability and compliance are non-negotiable.",
  },
];

export const BOOK = {
  title: "Evolve or Die",
  author: "Wendy Cameron",
  status: "Coming soon",
  cover: "/images/evolve-or-die-cover.png",
  path: "/evolveordie",
  teaser:
    "A forthcoming book on how organisations adapt — or fail to adapt — as AI rewrites how work gets done.",
};
