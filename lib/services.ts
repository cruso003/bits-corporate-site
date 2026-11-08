import type { LucideIcon } from "lucide-react";
import {
  BrainCircuit,
  Cloud,
  Code2,
  Compass,
  Crosshair,
  LifeBuoy,
  Radar,
  Scale,
} from "lucide-react";

export type Pillar = "secure" | "continue" | "build";

export type Service = {
  slug: string;
  code: string;
  pillar: Pillar;
  name: string;
  short: string;
  tagline: string;
  summary: string;
  icon: LucideIcon;
  offerings: { title: string; body: string }[];
  deliverables: string[];
  standards: string[];
  process: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
};

export const pillars: Record<
  Pillar,
  { label: string; verb: string; line: string }
> = {
  secure: {
    label: "Security",
    verb: "Secure it",
    line: "Find the holes before someone else does, then close them and watch for the next one.",
  },
  continue: {
    label: "Resilience",
    verb: "Keep it running",
    line: "Plan for the bad day: the ransomware note, the dead data centre, the vendor that vanishes.",
  },
  build: {
    label: "Engineering",
    verb: "Build what's next",
    line: "Software, cloud and data systems built by people who also know how they get attacked.",
  },
};

export const services: Service[] = [
  {
    slug: "penetration-testing",
    code: "SEC-01",
    pillar: "secure",
    name: "Penetration Testing & Red Teaming",
    short: "Pentesting",
    tagline:
      "We attack your systems the way a real adversary would. With permission, and a report you can act on.",
    summary:
      "Manual, scoped, evidence-backed testing of your web apps, mobile apps, APIs, networks, cloud and people. Scanners are where we start, never where we stop. Every finding comes with a working proof, a business-impact rating and a fix your engineers can ship.",
    icon: Crosshair,
    offerings: [
      {
        title: "Web application testing",
        body: "Auth flaws, broken access control, injection, business-logic abuse and session handling, tested against OWASP ASVS. The bugs scanners miss live in your logic.",
      },
      {
        title: "Mobile application testing",
        body: "Android and iOS: insecure storage, certificate pinning bypass, reverse engineering, API abuse from the device side. Mapped to OWASP MASVS.",
      },
      {
        title: "API security testing",
        body: "REST, GraphQL and gRPC. BOLA, mass assignment, rate-limit bypass and token handling. The stuff that leaks customer records from fintech apps.",
      },
      {
        title: "External & internal network",
        body: "Perimeter exposure, VPN and remote access, then the assumed-breach view: Active Directory paths, lateral movement, privilege escalation to domain admin.",
      },
      {
        title: "Cloud configuration review",
        body: "AWS, Azure and GCP. IAM sprawl, public storage, exposed secrets, flat networks and logging gaps, tested against CIS benchmarks and real attack paths.",
      },
      {
        title: "Red team & adversary simulation",
        body: "Objective-based, multi-week operations that test detection and response, not just prevention. TTPs mapped to MITRE ATT&CK, run with your blue team or against it.",
      },
      {
        title: "Social engineering",
        body: "Phishing campaigns, vishing and pretexting that measure how your people actually behave, with training aimed at what went wrong rather than generic slides.",
      },
      {
        title: "Wireless & physical",
        body: "Rogue access points, WPA2-Enterprise attacks, badge cloning and tailgating. If someone can walk in and plug in, we'll find out first.",
      },
    ],
    deliverables: [
      "Executive summary written for the board, not the SOC",
      "Technical report with reproducible proof-of-concept for every finding",
      "CVSS 4.0 scoring adjusted for your actual business context",
      "Prioritised remediation plan with owners and effort estimates",
      "Retest of fixed findings to confirm closure",
      "Attestation letter for regulators, auditors and customers",
    ],
    standards: [
      "OWASP ASVS",
      "OWASP MASVS",
      "PTES",
      "MITRE ATT&CK",
      "NIST SP 800-115",
      "CBN RBCF",
    ],
    process: [
      {
        title: "Scope & rules of engagement",
        body: "Targets, windows, out-of-bounds systems and an emergency stop contact, signed before a single packet is sent.",
      },
      {
        title: "Recon & threat modelling",
        body: "We map what an attacker can see and decide where the real risk sits for your business.",
      },
      {
        title: "Exploitation",
        body: "Manual testing, chained findings, controlled impact. Critical issues are reported the same day, not at the end.",
      },
      {
        title: "Report & walkthrough",
        body: "A live session with engineers and leadership. Questions answered, fixes agreed.",
      },
      {
        title: "Retest",
        body: "We verify the fixes and update the report so you have clean evidence for audit.",
      },
    ],
    faqs: [
      {
        q: "How is this different from a vulnerability scan?",
        a: "A scan lists known issues automatically. A pentest is a human trying to break in: chaining low-risk findings into a real compromise, abusing business logic and proving impact. We use scanners for coverage, then do the actual work by hand.",
      },
      {
        q: "Will testing take our systems down?",
        a: "We agree testing windows, avoid destructive payloads by default and keep a named contact on call throughout. Production testing is common and safe when it's scoped properly.",
      },
      {
        q: "How long does a test take?",
        a: "A typical web app takes 5 to 10 working days. An internal network for a mid-sized organisation takes about two weeks. Red team operations run for 4 to 8 weeks. You'll get a fixed quote after scoping.",
      },
      {
        q: "Does this satisfy CBN or PCI DSS requirements?",
        a: "Yes. We scope and report to meet the CBN Risk-Based Cybersecurity Framework, PCI DSS 11.4 and similar regulatory testing requirements, and provide attestation letters.",
      },
    ],
  },
  {
    slug: "managed-security",
    code: "SEC-02",
    pillar: "secure",
    name: "Managed Detection & Incident Response",
    short: "SOC & IR",
    tagline:
      "Someone watching your logs at 3am. And a team ready to move when the alert is real.",
    summary:
      "24/7 monitoring, threat hunting and incident response for organisations that can't staff a full security operations centre. We tune detections to your environment so analysts chase real threats, and when something does go wrong we contain it, investigate it and tell you exactly what happened.",
    icon: Radar,
    offerings: [
      {
        title: "24/7 managed detection & response",
        body: "Continuous monitoring of endpoints, identity, cloud and network telemetry with analyst triage. You get calls about incidents, not noise.",
      },
      {
        title: "SIEM design & tuning",
        body: "Deploy or fix Microsoft Sentinel, Wazuh, Elastic or Splunk. Log sources prioritised, detections written for your environment, false positives killed.",
      },
      {
        title: "Incident response retainer",
        body: "Guaranteed response times, pre-agreed terms and a team that already knows your network when ransomware hits.",
      },
      {
        title: "Digital forensics",
        body: "Disk, memory and log forensics to establish root cause, scope of compromise and evidence that holds up for legal, insurance and regulators.",
      },
      {
        title: "Threat hunting",
        body: "Hypothesis-driven hunts across your telemetry for attackers who got past the alerts. Mapped to MITRE ATT&CK.",
      },
      {
        title: "Vulnerability management",
        body: "Continuous scanning, asset inventory, risk-based prioritisation and patch tracking. A shrinking backlog you can report on monthly.",
      },
      {
        title: "Endpoint & email security",
        body: "EDR rollout and tuning, email authentication (SPF, DKIM, DMARC) and phishing defence that actually blocks the business email compromise attempts.",
      },
      {
        title: "Threat intelligence",
        body: "Brand monitoring, leaked credential alerts and dark-web monitoring focused on threats aimed at Nigerian and African organisations.",
      },
    ],
    deliverables: [
      "Defined response SLAs by severity",
      "Monthly security operations report with trends and actions",
      "Custom detection rules mapped to MITRE ATT&CK",
      "Incident reports with timeline, root cause and lessons learned",
      "NDPA breach notification support within the 72-hour window",
      "Quarterly purple-team exercises to prove detections fire",
    ],
    standards: [
      "MITRE ATT&CK",
      "NIST SP 800-61",
      "NDPA 2023",
      "CBN RBCF",
      "ISO/IEC 27035",
    ],
    process: [
      {
        title: "Onboard",
        body: "Connect log sources, baseline normal activity, agree escalation paths and run-books.",
      },
      {
        title: "Detect",
        body: "Correlated alerts triaged by analysts around the clock. Context added before anyone wakes you up.",
      },
      {
        title: "Respond",
        body: "Isolate hosts, disable accounts, block indicators. Contain first, then investigate.",
      },
      {
        title: "Recover",
        body: "Eradicate persistence, restore safely and confirm the attacker is gone.",
      },
      {
        title: "Improve",
        body: "New detections and hardening from every incident, so the same trick doesn't work twice.",
      },
    ],
    faqs: [
      {
        q: "We already have antivirus. Why do we need this?",
        a: "Antivirus stops known malware. Most serious breaches now use stolen credentials and legitimate admin tools that antivirus ignores. Detection and response is about spotting that behaviour and stopping it fast.",
      },
      {
        q: "Do we have to replace our existing tools?",
        a: "No. We work with what you have wherever it's workable, and only recommend changes where there's a real coverage gap.",
      },
      {
        q: "What happens if we're breached before signing up?",
        a: "Call us anyway. We take emergency incident response engagements and can be working on your environment within hours.",
      },
    ],
  },
  {
    slug: "governance-risk-compliance",
    code: "SEC-03",
    pillar: "secure",
    name: "Governance, Risk & Compliance",
    short: "GRC",
    tagline:
      "Certifications that reflect how you actually operate. Not a binder that sits on a shelf.",
    summary:
      "We get you ready for ISO 27001, PCI DSS, NDPA and CBN audits, and we build security programmes that survive past audit day. Policies people can follow, risk registers that drive decisions, and a virtual CISO when you need senior security leadership without the full-time salary.",
    icon: Scale,
    offerings: [
      {
        title: "ISO/IEC 27001 implementation",
        body: "Gap analysis, ISMS design, risk treatment, Statement of Applicability, internal audit and certification support from first meeting to certificate.",
      },
      {
        title: "NDPA & GDPR compliance",
        body: "Data mapping, DPIAs, privacy notices, lawful basis reviews, data subject request handling and NDPC Compliance Audit Returns.",
      },
      {
        title: "PCI DSS v4.0",
        body: "Scoping and segmentation, gap assessment, SAQ support and readiness for QSA assessment for merchants, processors and switches.",
      },
      {
        title: "CBN & sector regulation",
        body: "Readiness for the CBN Risk-Based Cybersecurity Framework, NCC, SEC and NAICOM requirements, with the board reporting they expect.",
      },
      {
        title: "Virtual CISO",
        body: "Senior security leadership on a part-time basis: strategy, board reporting, vendor decisions and someone accountable for the programme.",
      },
      {
        title: "Risk assessment & management",
        body: "Asset-based risk assessments, risk registers and treatment plans that tie security spend to the risks that matter most.",
      },
      {
        title: "Third-party risk",
        body: "Vendor security questionnaires, due diligence and contract clauses. Your suppliers are part of your attack surface.",
      },
      {
        title: "Security awareness training",
        body: "Role-based training and phishing simulations measured by behaviour change, not completion certificates.",
      },
    ],
    deliverables: [
      "Gap assessment against your target standard with a costed roadmap",
      "Policy set written for your organisation, not a template with your logo",
      "Risk register and treatment plan",
      "Records of processing and DPIAs for NDPA",
      "Internal audit report ahead of certification",
      "Board-ready security posture reporting",
    ],
    standards: [
      "ISO/IEC 27001:2022",
      "NDPA 2023",
      "GDPR",
      "PCI DSS v4.0",
      "CBN RBCF",
      "NIST CSF 2.0",
      "SOC 2",
      "COBIT 2019",
    ],
    process: [
      {
        title: "Assess",
        body: "Interviews, document review and technical sampling to see where you really stand.",
      },
      {
        title: "Plan",
        body: "A prioritised roadmap with costs, owners and timelines your leadership can approve.",
      },
      {
        title: "Implement",
        body: "Policies, controls and processes rolled out alongside your team, not dumped on them.",
      },
      {
        title: "Audit-ready",
        body: "Internal audit, evidence packs and mock interviews before the certification body arrives.",
      },
      {
        title: "Sustain",
        body: "Ongoing monitoring, metrics and management reviews so you keep the certificate.",
      },
    ],
    faqs: [
      {
        q: "How long does ISO 27001 take?",
        a: "For most mid-sized organisations, 6 to 9 months from gap analysis to certification. It depends on how much you already have in place and how quickly decisions get made.",
      },
      {
        q: "Does the NDPA apply to us?",
        a: "If you process personal data of people in Nigeria, almost certainly yes. Organisations processing data at scale are classed as data controllers or processors of major importance and must register with the NDPC and file compliance audit returns.",
      },
      {
        q: "Can you also be our certification body?",
        a: "No, and you should be wary of anyone who offers that. Independence matters. We prepare you; an accredited certification body audits you.",
      },
    ],
  },
  {
    slug: "business-continuity-disaster-recovery",
    code: "RES-01",
    pillar: "continue",
    name: "Business Continuity & Disaster Recovery",
    short: "BCM / DR",
    tagline:
      "When the data centre floods or ransomware locks everything, you'll already know what to do.",
    summary:
      "Business impact analysis, continuity plans, disaster recovery architecture and the drills that prove they work. We design for the failures Nigerian organisations actually face: grid outages, fibre cuts, ransomware, single points of failure in one building, and vendors who go dark.",
    icon: LifeBuoy,
    offerings: [
      {
        title: "Business impact analysis",
        body: "Find out which processes matter most, how long each can be down, and set defensible RTO and RPO targets agreed by the business, not guessed by IT.",
      },
      {
        title: "Business continuity planning",
        body: "Plans for people, premises, technology and suppliers. Clear roles, call trees and workarounds that function when the usual systems don't.",
      },
      {
        title: "Disaster recovery architecture",
        body: "Secondary sites, cloud DR, replication and failover design sized to your recovery targets and budget. Active-passive, pilot light or warm standby.",
      },
      {
        title: "Backup & ransomware resilience",
        body: "Immutable, offline and tested backups. The 3-2-1-1-0 rule applied properly, because ransomware goes for the backups first.",
      },
      {
        title: "DR testing & failover drills",
        body: "Planned failovers with measured recovery times. We record what actually happened against what the plan promised.",
      },
      {
        title: "Tabletop & crisis exercises",
        body: "Facilitated scenarios for executives: ransomware, a regulator calling, a data leak trending online. Decisions get made under pressure before the real thing.",
      },
      {
        title: "ISO 22301 implementation",
        body: "A full business continuity management system, from policy to certification readiness.",
      },
      {
        title: "Crisis communications",
        body: "Pre-approved statements, stakeholder maps and channels for customers, staff, regulators and press when things go wrong.",
      },
    ],
    deliverables: [
      "Business impact analysis with agreed RTO/RPO per process",
      "Business continuity plans per department and site",
      "DR runbooks detailed enough for someone who has never seen the system",
      "DR test reports with measured vs. target recovery times",
      "Exercise after-action reports and improvement tracker",
      "ISO 22301 gap assessment and roadmap",
    ],
    standards: [
      "ISO 22301",
      "ISO/IEC 27031",
      "NIST SP 800-34",
      "CBN BCM guidelines",
      "BCI Good Practice Guidelines",
    ],
    process: [
      {
        title: "Analyse",
        body: "BIA and risk assessment to find critical processes, dependencies and single points of failure.",
      },
      {
        title: "Strategise",
        body: "Choose recovery strategies that meet targets at a cost the business accepts.",
      },
      {
        title: "Build",
        body: "Plans, runbooks and DR infrastructure put in place and documented.",
      },
      {
        title: "Exercise",
        body: "Tabletops and live failovers. Real timings recorded, gaps logged.",
      },
      {
        title: "Maintain",
        body: "Plans reviewed after every change, exercise and incident. Tested at least annually.",
      },
    ],
    faqs: [
      {
        q: "What's the difference between BCP and DR?",
        a: "Disaster recovery restores technology: systems, data, networks. Business continuity keeps the organisation operating, which includes people, premises, suppliers and manual workarounds while IT recovers. You need both.",
      },
      {
        q: "We back up daily. Isn't that enough?",
        a: "Only if those backups are isolated from ransomware, regularly restored as a test, and fast enough to meet your recovery targets. Many organisations discover during an incident that restores take days, not hours.",
      },
      {
        q: "Can our DR site be in the cloud?",
        a: "Often, yes, and it's usually cheaper than a second physical data centre. We'll check data residency and regulatory constraints first, including CBN and NDPA requirements.",
      },
    ],
  },
  {
    slug: "cloud-infrastructure",
    code: "RES-02",
    pillar: "continue",
    name: "Cloud, Infrastructure & DevSecOps",
    short: "Cloud & Infra",
    tagline:
      "Infrastructure that scales, stays up, and doesn't hand an attacker the keys.",
    summary:
      "Cloud migration, architecture, networking and managed infrastructure on AWS, Azure, GCP and on-premises. Everything as code, everything monitored, security built into the pipeline instead of bolted on before go-live.",
    icon: Cloud,
    offerings: [
      {
        title: "Cloud migration",
        body: "Assessment, landing zone design and migration waves for workloads moving from on-prem or between clouds, with rollback plans for every wave.",
      },
      {
        title: "Cloud architecture",
        body: "Well-architected designs for availability, cost and security. Multi-account structures, network segmentation and identity done right from day one.",
      },
      {
        title: "DevSecOps & CI/CD",
        body: "Pipelines with SAST, dependency scanning, secret detection and IaC scanning built in. Developers get fast feedback, not a security gate at the end.",
      },
      {
        title: "Infrastructure as code",
        body: "Terraform, Pulumi and Ansible. Reproducible environments, peer-reviewed changes and no more snowflake servers.",
      },
      {
        title: "Kubernetes & containers",
        body: "Cluster design, hardening, GitOps deployments and observability for EKS, AKS, GKE or self-managed clusters.",
      },
      {
        title: "Network design & security",
        body: "LAN, WAN, SD-WAN, firewalls, zero-trust access and segmentation for offices, branches and data centres.",
      },
      {
        title: "Managed infrastructure",
        body: "Monitoring, patching, backups and on-call support for servers, cloud and networks, with SLAs and monthly reporting.",
      },
      {
        title: "Cloud cost optimisation",
        body: "Rightsizing, reserved capacity, storage tiering and waste elimination. Dollar-denominated bills hurt more when the naira moves.",
      },
    ],
    deliverables: [
      "Architecture decision records and diagrams",
      "Infrastructure as code repositories you own",
      "CI/CD pipelines with security tooling integrated",
      "Monitoring dashboards and alerting",
      "Runbooks and handover documentation",
      "Monthly cost and performance reports",
    ],
    standards: [
      "AWS Well-Architected",
      "Azure CAF",
      "CIS Benchmarks",
      "ISO/IEC 20000",
      "NIST SP 800-190",
    ],
    process: [
      {
        title: "Discover",
        body: "Inventory workloads, dependencies, costs and constraints including data residency.",
      },
      {
        title: "Design",
        body: "Target architecture and migration plan reviewed with your engineers and security team.",
      },
      {
        title: "Build",
        body: "Landing zones, pipelines and environments provisioned as code.",
      },
      {
        title: "Migrate & ship",
        body: "Wave-by-wave cutovers with testing, rollback plans and minimal downtime.",
      },
      {
        title: "Operate",
        body: "Ongoing management, or a clean handover to your team with training.",
      },
    ],
    faqs: [
      {
        q: "Can data stay in Nigeria?",
        a: "Yes. We design for data residency requirements using local data centres, African cloud regions or hybrid setups where regulation or policy requires it.",
      },
      {
        q: "Which cloud should we use?",
        a: "It depends on your existing licences, skills, workloads and compliance needs. We don't resell cloud, so our recommendation isn't tied to a commission.",
      },
      {
        q: "Do you support on-premises infrastructure too?",
        a: "Yes. Plenty of critical systems still run on-prem for good reasons. We manage hybrid environments every day.",
      },
    ],
  },
  {
    slug: "software-engineering",
    code: "BLD-01",
    pillar: "build",
    name: "Software Engineering",
    short: "Software",
    tagline:
      "Web, mobile and enterprise software. Designed, built and secured by the same team.",
    summary:
      "We design and build custom software for businesses, individuals and government: customer-facing apps, internal platforms, APIs and integrations. Our engineers sit next to our pentesters, so security reviews happen during the build, not after launch.",
    icon: Code2,
    offerings: [
      {
        title: "Web applications",
        body: "Customer portals, dashboards and SaaS products built with modern frameworks, accessible and fast on Nigerian mobile networks.",
      },
      {
        title: "Mobile applications",
        body: "iOS and Android apps, native or cross-platform, with offline support and secure local storage.",
      },
      {
        title: "APIs & integrations",
        body: "Payment gateways, NIBSS, core banking, ERP and identity (NIN, BVN) integrations. Documented, versioned and rate-limited.",
      },
      {
        title: "Enterprise & government platforms",
        body: "Workflow, case management, licensing and records systems built for scale, auditability and long life.",
      },
      {
        title: "Product design & UX",
        body: "Research, prototyping and interface design that starts from how people actually use the product.",
      },
      {
        title: "Legacy modernisation",
        body: "Untangle old systems piece by piece without stopping the business. Strangler patterns, not big-bang rewrites.",
      },
      {
        title: "Secure code review",
        body: "Manual review of your codebase for security flaws, plus secure development training for your engineers.",
      },
      {
        title: "QA & test automation",
        body: "Automated test suites, performance testing and release processes that catch bugs before your customers do.",
      },
    ],
    deliverables: [
      "Source code and IP owned by you",
      "Architecture and API documentation",
      "Automated tests and CI/CD pipelines",
      "Security review and pentest before launch",
      "Deployment to your infrastructure or ours",
      "Post-launch support and maintenance options",
    ],
    standards: [
      "OWASP SAMM",
      "OWASP ASVS",
      "WCAG 2.2",
      "ISO/IEC 25010",
      "12-Factor App",
    ],
    process: [
      {
        title: "Discovery",
        body: "Workshops to pin down users, goals, constraints and what success looks like.",
      },
      {
        title: "Design",
        body: "Prototypes tested with real users before a line of production code.",
      },
      {
        title: "Build in sprints",
        body: "Two-week cycles with working software demoed every time. You see progress, not status reports.",
      },
      {
        title: "Secure & test",
        body: "Code review, automated tests and an internal pentest before release.",
      },
      {
        title: "Launch & support",
        body: "Monitored rollout, then maintenance and new features on your schedule.",
      },
    ],
    faqs: [
      {
        q: "Who owns the code?",
        a: "You do. Full IP transfer on payment, with the repositories in your accounts from the start.",
      },
      {
        q: "Fixed price or time and materials?",
        a: "Both. Fixed price works for well-defined scopes; time and materials suits products that will evolve. We'll recommend one after discovery.",
      },
      {
        q: "Can you take over an existing codebase?",
        a: "Yes. We start with a code and security audit so we both know what we're inheriting before committing to timelines.",
      },
    ],
  },
  {
    slug: "data-ai-emerging-tech",
    code: "BLD-02",
    pillar: "build",
    name: "Data, AI & Emerging Technology",
    short: "Data & AI",
    tagline:
      "AI, IoT and blockchain where they solve a real problem. Honest advice where they don't.",
    summary:
      "Data platforms, analytics, machine learning and applied AI, plus research and development in IoT and blockchain. We start with the business problem and the data you actually have, then build what pays for itself, with the security and privacy controls these systems need.",
    icon: BrainCircuit,
    offerings: [
      {
        title: "Data engineering",
        body: "Pipelines, warehouses and lakehouses that pull scattered data into one reliable source. Quality checks included.",
      },
      {
        title: "Analytics & BI",
        body: "Dashboards and reporting that leadership actually opens. Metrics defined once, used everywhere.",
      },
      {
        title: "Applied AI & LLMs",
        body: "Document processing, internal assistants, retrieval over your own knowledge base and workflow automation, with data kept under your control.",
      },
      {
        title: "Machine learning",
        body: "Fraud detection, credit scoring, churn and demand forecasting. Models monitored for drift and bias in production.",
      },
      {
        title: "AI security & governance",
        body: "Prompt injection testing, model risk assessment and AI usage policies aligned with NDPA and emerging AI regulation.",
      },
      {
        title: "IoT solutions",
        body: "Sensor networks, telemetry platforms and device management for energy, logistics, agriculture and facilities, secured from device to cloud.",
      },
      {
        title: "Blockchain & digital ledgers",
        body: "Smart contract development, audits and permissioned ledgers for supply chain, credentials and settlement, where a shared ledger genuinely beats a database.",
      },
      {
        title: "Research & prototyping",
        body: "Rapid proofs of concept to test whether an idea works before you commit a full budget.",
      },
    ],
    deliverables: [
      "Data architecture and governance model",
      "Production pipelines and dashboards",
      "Trained, documented and monitored models",
      "AI risk assessment and usage policy",
      "Smart contract audit reports",
      "Proof-of-concept with a go / no-go recommendation",
    ],
    standards: [
      "NDPA 2023",
      "ISO/IEC 42001",
      "NIST AI RMF",
      "OWASP Top 10 for LLMs",
      "ETSI EN 303 645",
    ],
    process: [
      {
        title: "Frame",
        body: "Define the decision or process to improve and how to measure it.",
      },
      {
        title: "Assess data",
        body: "Find out what data exists, its quality and what it's legally allowed to be used for.",
      },
      {
        title: "Prototype",
        body: "A working proof of concept against real data in weeks, not months.",
      },
      {
        title: "Productionise",
        body: "Harden, secure, integrate and monitor what proved its value.",
      },
      {
        title: "Govern",
        body: "Ongoing monitoring for accuracy, drift, bias and misuse.",
      },
    ],
    faqs: [
      {
        q: "Will our data be sent to third-party AI providers?",
        a: "Only if you choose that. We can build with self-hosted open models or enterprise APIs with no-training guarantees, depending on your data sensitivity and budget.",
      },
      {
        q: "Do we need blockchain?",
        a: "Usually not. If one trusted party runs the system, a well-secured database is cheaper and faster. We'll tell you straight when a ledger is justified.",
      },
      {
        q: "How quickly can we see results?",
        a: "A focused proof of concept typically takes 3 to 6 weeks. That's enough to know whether to invest further.",
      },
    ],
  },
  {
    slug: "it-advisory",
    code: "BLD-03",
    pillar: "build",
    name: "IT Advisory & Digital Transformation",
    short: "Advisory",
    tagline:
      "Technology strategy from people who have to live with the consequences of their advice.",
    summary:
      "Independent technical consultancy on strategy, architecture, procurement and delivery. We help leadership teams decide what to build, buy or retire, keep large IT programmes on track and get value from technology budgets that are under pressure.",
    icon: Compass,
    offerings: [
      {
        title: "IT strategy & roadmaps",
        body: "Multi-year technology roadmaps tied to business goals and budgets, with clear priorities and sequencing.",
      },
      {
        title: "Enterprise architecture",
        body: "Current and target state architecture, application rationalisation and integration strategy.",
      },
      {
        title: "Digital transformation",
        body: "Process redesign and digitisation for organisations moving off paper, spreadsheets and disconnected systems.",
      },
      {
        title: "IT audit & assurance",
        body: "Independent reviews of IT general controls, change management, access and operations for internal audit and boards.",
      },
      {
        title: "Vendor selection & procurement",
        body: "Requirements, RFPs, evaluation and contract negotiation support. Vendor neutral, every time.",
      },
      {
        title: "Programme & project delivery",
        body: "Project management and recovery for programmes that are late, over budget or drifting.",
      },
      {
        title: "Technical due diligence",
        body: "Technology, security and team assessments for investors and acquirers before the deal closes.",
      },
      {
        title: "Government digital services",
        body: "Strategy and delivery support for ministries, departments and agencies digitising public services.",
      },
    ],
    deliverables: [
      "Technology strategy and costed roadmap",
      "Architecture blueprints",
      "Procurement packs and vendor evaluation matrices",
      "IT audit reports with management responses",
      "Due diligence reports with red-flag summaries",
      "Programme health checks and recovery plans",
    ],
    standards: ["COBIT 2019", "TOGAF", "ITIL 4", "PRINCE2", "ISO/IEC 38500"],
    process: [
      {
        title: "Listen",
        body: "Stakeholder interviews to understand goals, constraints and politics.",
      },
      {
        title: "Diagnose",
        body: "Evidence-based assessment of current systems, spend and capability.",
      },
      {
        title: "Recommend",
        body: "Options with costs, risks and trade-offs. A clear recommendation, not a menu.",
      },
      {
        title: "Mobilise",
        body: "Business cases, plans and governance to get approved work moving.",
      },
      { title: "Assure", body: "Ongoing check-ins to keep delivery honest." },
    ],
    faqs: [
      {
        q: "Are you tied to any vendors?",
        a: "No. We don't take referral fees from software or hardware vendors, which keeps our advice independent.",
      },
      {
        q: "Can you work with our existing IT team?",
        a: "That's the default. Advisory works best when your team owns the outcome and we bring outside perspective and specialist depth.",
      },
    ],
  },
];

export const servicesByPillar = (p: Pillar) =>
  services.filter((s) => s.pillar === p);

export const getService = (slug: string) =>
  services.find((s) => s.slug === slug);
