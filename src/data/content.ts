export interface ExperienceItem {
  role: string;
  company: string;
  companyDetail?: string;
  period: string;
  highlights: string[];
  skills?: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  period: string;
  status?: string;
  research?: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  description: string;
  skills: string[];
}

export interface ProjectItem {
  title: string;
  description: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  status?: string;
}

export interface InterestItem {
  title: string;
  description: string;
  iconName: string;
}

export interface StatItem {
  label: string;
  value: string;
  description: string;
}

export const portfolioContent = {
  personal: {
    fullName: "Fiasorgbor George Etornam Kobla",
    preferredName: "Elroy",
    headline: "Network Engineer | Cybersecurity Specialist | Software Developer",
    tagline: "Securing modern infrastructure, engineering resilient networks, and developing software through AI-assisted workflows.",
    location: "Accra, Ghana",
    email: "georgefias01@gmail.com",
    github: "https://github.com/Georgefiasorgbor",
    linkedin: "https://linkedin.com/in/george-fiasorgbor", // Update with your personal LinkedIn profile URL
    cvPath: "/cv.pdf",
    availability: "Open to High-Impact Opportunities & Technical Collaborations",
  },

  summary:
    "Multidisciplinary IT professional with 4+ years of progressive experience spanning network engineering, cybersecurity and software development across ISP, enterprise utility, academic and customer-facing environments. Currently Assistant Network Manager at a growing ISP, supporting routing, security and service delivery, while completing an MSc in Cybersecurity and Digital Forensics. Hands-on experience building and securing production networks, automating operations with Python and Bash, and developing web applications through AI-assisted workflows. Research-minded, with a focus on adaptive, AI-resilient defences and advancing technology adoption in Ghana and across Africa.",

  stats: [
    {
      value: "4+ Years",
      label: "Progressive Experience",
      description: "ISP, Enterprise Utility & Academia",
    },
    {
      value: "ISP Scale",
      label: "Network Infrastructure",
      description: "MikroTik, BGP/OSPF & Core Routing",
    },
    {
      value: "MSc (Cand.)",
      label: "Cybersecurity & Forensics",
      description: "Adaptive AI Threat Detection Research",
    },
    {
      value: "Full-Stack",
      label: "Software & Automation",
      description: "Python, Next.js, Bash & AI Workflows",
    },
  ] as StatItem[],

  experience: [
    {
      role: "Assistant Network Manager",
      company: "Kingsville Internet Services",
      companyDetail: "ISP start-up, Dovewin Ghana Limited",
      period: "Oct 2024 - Present",
      highlights: [
        "Build and maintain multi-site topology on MikroTik RouterOS, managed switches and enterprise wireless APs for high availability",
        "Configure and optimise BGP/OSPF, VLAN segmentation, NAT and QoS for residential and SME clients",
        "Enforce firewall ACLs, IDS baselines and IPsec/VPN tunnels",
        "Set up customer connections on site, from installation to live service",
        "Manage broadband provisioning and SLA performance; resolve outages, latency issues and CPE failures with minimal MTTR",
        "Contribute to network expansion: site surveys, fibre/wireless feasibility studies, procurement and cabling design",
      ],
      skills: ["MikroTik RouterOS", "BGP", "OSPF", "VLAN", "IPsec", "QoS", "Firewall ACLs"],
    },
    {
      role: "Customer Service Associate",
      company: "Concentrix",
      companyDetail: "River US Project",
      period: "Apr 2026 - Jul 2026",
      highlights: [
        "Delivered voice and email support to US customers; isolated root causes across CRM, billing and order systems",
        "Met or exceeded KPIs (AHT, FCR, CSAT); awarded the 'Smile Story' recognition",
      ],
      skills: ["Root Cause Analysis", "CRM Systems", "Incident Escalation", "SLA Adherence"],
    },
    {
      role: "IT Support Specialist",
      company: "Electricity Company of Ghana (ECG)",
      companyDetail: "National Enterprise Utility",
      period: "Nov 2023 - Oct 2024",
      highlights: [
        "Set up networks at multiple offices; administered LAN/WAN and Windows Server environments",
        "Led design and implementation of a data collation and aggregation system for a large-scale revenue mobilisation exercise",
        "Built a centralised IT asset inventory; resolved support tickets across departments",
      ],
      skills: ["Windows Server", "Active Directory", "LAN/WAN", "Data Aggregation", "IT Asset Inventory"],
    },
    {
      role: "Network Support Intern",
      company: "University of Ghana Computing Systems Department",
      companyDetail: "UGCS",
      period: "Sep 2022 - Dec 2022",
      highlights: [
        "Configured routers, switches and APs; provided Tier 1/2 support; documented issues for the knowledge base",
      ],
      skills: ["Switching & Routing", "Wireless APs", "Tier 1/2 Support", "Technical Documentation"],
    },
  ] as ExperienceItem[],

  education: [
    {
      degree: "MSc",
      field: "Cybersecurity & Digital Forensics",
      institution: "Wisconsin International University College, Ghana",
      period: "Aug 2026 - Present",
      status: "In progress",
      research:
        "Research: How AI-based network intrusion detection systems can learn to recognise new cyberattacks without forgetting old ones (continual learning against catastrophic forgetting).",
    },
    {
      degree: "BSc",
      field: "Computer Science",
      institution: "Kwame Nkrumah University of Science and Technology (KNUST), Kumasi",
      period: "2019 - 2023",
      status: "Completed",
    },
  ] as EducationItem[],

  skillCategories: [
    {
      category: "Network Engineering",
      iconName: "Network",
      description: "Core routing protocols, traffic shaping, carrier topologies, and hardware orchestration.",
      skills: [
        "BGP",
        "OSPF",
        "VLAN (802.1Q)",
        "STP",
        "TCP/IP",
        "DNS",
        "DHCP",
        "NAT",
        "QoS",
        "Wi-Fi 5/6",
        "MikroTik RouterOS",
        "Fibre & Structured Cabling",
      ],
    },
    {
      category: "Cybersecurity",
      iconName: "ShieldCheck",
      description: "Perimeter defense, intrusion detection, vulnerability assessments, and security hygiene.",
      skills: [
        "Firewall ACLs",
        "IPsec/VPN",
        "IDS/IPS",
        "EDR",
        "Nmap",
        "Nessus (basic)",
        "Kali Linux",
        "Hashcat",
        "John the Ripper",
        "ExifTool",
        "CIS Benchmarks",
        "OWASP Top 10",
        "Zero Trust",
        "AES",
        "TLS/SSL",
        "SIEM fundamentals",
        "Incident Response",
        "IAM",
      ],
    },
    {
      category: "Software Development",
      iconName: "Code2",
      description: "Full-stack web engineering, scripting, backend integration, and AI-accelerated workflows.",
      skills: [
        "Python",
        "JavaScript",
        "Bash",
        "SQL (MySQL)",
        "Next.js",
        "Node.js",
        "Supabase",
        "Expo",
        "Flutter",
        "Git/GitHub",
        "VS Code",
        "GitHub Copilot",
        "Antigravity",
        "AI-assisted development",
      ],
    },
    {
      category: "Systems & Cloud",
      iconName: "Server",
      description: "Server administration, virtualization, directory services, and disaster recovery.",
      skills: [
        "Windows Server",
        "Linux (Ubuntu, CentOS)",
        "Active Directory",
        "Group Policy",
        "VMware",
        "VirtualBox",
        "AWS (Fundamentals)",
        "Azure (Fundamentals)",
        "Backup & DR",
      ],
    },
    {
      category: "AI & Data",
      iconName: "Cpu",
      description: "LLM workflows, applied machine learning foundations, and continual learning research.",
      skills: [
        "LLM Workflows (Claude, ChatGPT, LM Studio)",
        "Prompt Engineering",
        "Supervised Learning",
        "Model Evaluation",
        "TensorFlow/PyTorch Foundations",
      ],
    },
    {
      category: "IT Operations",
      iconName: "Wrench",
      description: "ITIL alignment, lifecycle administration, SLA performance, and operational documentation.",
      skills: [
        "ITIL Service Desk",
        "Incident Management",
        "CRM & Ticketing",
        "Asset Lifecycle",
        "SOPs",
        "Runbooks",
        "Topology Diagrams",
      ],
    },
  ] as SkillCategory[],

  projects: [
    {
      title: "Personal Engineering & Portfolio Platform",
      description:
        "Modern developer & cybersecurity portfolio built with Next.js (App Router, static export), TypeScript, and Tailwind CSS. Features centralized data architecture, dark-mode terminal aesthetics, responsive navigation, and automated deployment pipelines.",
      techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Lucide React", "Vercel / GitHub Pages"],
      githubUrl: "https://github.com/Georgefiasorgbor/portfolio-website",
      liveUrl: "#",
      featured: true,
      status: "Live & Maintained",
    },
    {
      title: "Multi-Site ISP Topology & BGP/OSPF Routing Lab",
      description:
        "High-availability ISP core network implementation featuring MikroTik RouterOS edge routers, dynamic BGP peering, OSPF internal routing, VLAN segmentation, and redundant IPsec failover links.",
      techStack: ["MikroTik RouterOS", "BGP", "OSPF", "IPsec", "VLAN", "Traffic Engineering"],
      githubUrl: "https://github.com/Georgefiasorgbor",
      liveUrl: "",
      featured: false,
      status: "Lab Prototype",
    },
    {
      title: "Adaptive Continual-Learning NIDS (Research)",
      description:
        "MSc cybersecurity research project designing an AI-driven Network Intrusion Detection System that mitigates catastrophic forgetting, learning novel zero-day attack vectors while preserving detection accuracy for legacy signatures.",
      techStack: ["Python", "PyTorch", "Network Flow Analysis", "IDS/IPS", "Continual Learning"],
      githubUrl: "https://github.com/Georgefiasorgbor",
      liveUrl: "",
      featured: false,
      status: "Active Research",
    },
    {
      title: "Enterprise Revenue Mobilisation Data Collation System",
      description:
        "Custom data collation and reporting pipeline deployed during a large-scale public utility revenue mobilisation exercise, consolidating field metrics across multiple regional offices.",
      techStack: ["Python", "MySQL", "Bash", "Windows Server", "Data Aggregation"],
      githubUrl: "https://github.com/Georgefiasorgbor",
      liveUrl: "",
      featured: false,
      status: "Enterprise Deployed",
    },
  ] as ProjectItem[],

  interests: [
    {
      title: "Technology in Africa",
      description:
        "Passionate about expanding resilient digital infrastructure, internet penetration, and local tech ecosystems across Ghana and the African continent.",
      iconName: "Globe2",
    },
    {
      title: "AI & Cybersecurity Research",
      description:
        "Investigating trustworthy AI, adaptive threat detection, zero-day resilience, and secure-by-design architectures to stay ahead of evolving adversarial tactics.",
      iconName: "ShieldAlert",
    },
    {
      title: "Emerging Technology",
      description:
        "Exploring edge computing, next-generation wireless networking (Wi-Fi 6/7, 5G), and automated network telemetry.",
      iconName: "Zap",
    },
    {
      title: "Organisational Growth Through Technology",
      description:
        "Harnessing robust ITIL workflows, infrastructure automation, and data collation systems to drive operational efficiency and measurable business outcomes.",
      iconName: "TrendingUp",
    },
  ] as InterestItem[],

  contact: {
    email: "georgefias01@gmail.com",
    location: "Accra, Ghana",
    availabilityNote: "Available for technical inquiries, consulting, and full-time roles.",
    // Formspree ID: Replace with your form ID (e.g. 'mdoqjklz') or leave empty to use instant mailto fallback
    formspreeEndpoint: "",
  },
};
