import type { LucideIcon } from "lucide-react";
import {
  Banknote,
  Building2,
  Factory,
  GraduationCap,
  HeartPulse,
  RadioTower,
  ShoppingBag,
  Zap,
} from "lucide-react";

export type Industry = {
  name: string;
  icon: LucideIcon;
  pressure: string;
  body: string;
  services: string[];
};

export const industries: Industry[] = [
  {
    name: "Banking, fintech & payments",
    icon: Banknote,
    pressure: "CBN RBCF · PCI DSS · NDPA",
    body: "Regulators expect annual pentests, tested continuity plans and board-level cyber reporting. Attackers expect weak APIs and over-trusted mobile apps. We cover both.",
    services: [
      "penetration-testing",
      "governance-risk-compliance",
      "business-continuity-disaster-recovery",
    ],
  },
  {
    name: "Government & public sector",
    icon: Building2,
    pressure: "Citizen data · uptime · procurement scrutiny",
    body: "Ministries and agencies hold sensitive citizen data and run services people can't do without. We build and secure platforms that need to last longer than a budget cycle.",
    services: ["software-engineering", "it-advisory", "penetration-testing"],
  },
  {
    name: "Telecoms & ISPs",
    icon: RadioTower,
    pressure: "NCC · subscriber data · always-on networks",
    body: "Huge subscriber databases, sprawling infrastructure and zero tolerance for downtime. Network security, SOC coverage and DR that fits carrier-grade expectations.",
    services: [
      "managed-security",
      "cloud-infrastructure",
      "business-continuity-disaster-recovery",
    ],
  },
  {
    name: "Oil, gas & energy",
    icon: Zap,
    pressure: "OT/ICS · remote sites · safety",
    body: "Operational technology that was never meant to touch the internet now does. We assess IT/OT boundaries, monitor remote sites with IoT and plan for disruption.",
    services: [
      "penetration-testing",
      "data-ai-emerging-tech",
      "business-continuity-disaster-recovery",
    ],
  },
  {
    name: "Healthcare",
    icon: HeartPulse,
    pressure: "Patient records · availability · NDPA",
    body: "Health data is among the most sensitive personal data under the NDPA, and hospital systems can't go offline. Privacy compliance, secure records platforms and continuity planning.",
    services: [
      "governance-risk-compliance",
      "software-engineering",
      "managed-security",
    ],
  },
  {
    name: "Insurance & capital markets",
    icon: Factory,
    pressure: "NAICOM · SEC · client trust",
    body: "Client portfolios, claims data and trading platforms make a high-value target. Security programmes and assurance that satisfy regulators and institutional clients.",
    services: ["governance-risk-compliance", "managed-security", "it-advisory"],
  },
  {
    name: "Education",
    icon: GraduationCap,
    pressure: "Student data · open networks · thin budgets",
    body: "Universities and schools run open networks with thousands of unmanaged devices. Practical security, learning platforms and infrastructure that work on real budgets.",
    services: [
      "cloud-infrastructure",
      "software-engineering",
      "governance-risk-compliance",
    ],
  },
  {
    name: "Retail & e-commerce",
    icon: ShoppingBag,
    pressure: "Card data · peak traffic · fraud",
    body: "Checkout flows, loyalty programmes and logistics integrations that must hold up on sale day and resist fraud the rest of the year.",
    services: [
      "software-engineering",
      "penetration-testing",
      "data-ai-emerging-tech",
    ],
  },
];
