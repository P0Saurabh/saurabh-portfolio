// src/data/projects.ts
export type ProjectLink = { label: string; href: string };

export type Project = {
  id: string;
  title: string;
  shortDescription: string;
  tech: string;
  details: string[];
  links: ProjectLink[];
};

export const PROJECTS: Project[] = [
  {
    id: "jsvoice",
    title: "JSVoice Framework",
    shortDescription: "High-performance modular library bridging Web Speech API with reactive state management for hands-free UI.",
    tech: "TypeScript • Web Speech API • State Management",
    details: [
      "Engineered event-driven architecture with <100ms latency for real-time command execution.",
      "Implemented intelligent noise-filtering for high accuracy in real-world environments.",
      "Tree-shakable modular system with legacy support and dynamic phoneme mapping."
    ],
    links: [
      { label: "Live Demo", href: "https://js-voice-website-pi.vercel.app/" },
      { label: "Source", href: "https://github.com/VoiceUI-js/JSVoice" }
    ],
  },
  {
    id: "proctor",
    title: "AI-Sentinel Proctoring",
    shortDescription: "Automated supervision platform using Computer Vision to detect exam violations in real-time.",
    tech: "TensorFlow.js • WebRTC • Node.js",
    details: [
      "Developed high-speed gaze and facial tracking using browser-native TensorFlow.js models.",
      "Secure WebRTC pipeline for multi-feed stream processing with zero server-side storage.",
      "Real-time alerting engine classifying cheating behaviors with 94%+ accuracy."
    ],
    links: [{ label: "Live Demo", href: "https://proctor-g1yd.onrender.com/" }],
  },
  {
    id: "devops-lab",
    title: "Cloud-Native Laboratory",
    shortDescription: "Infrastructure lab for testing CI/CD resilience, Kubernetes scaling, and IaC patterns.",
    tech: "K8s • Terraform • AWS • CI/CD",
    details: [
      "Architected multi-stage CI/CD pipelines with automated security scanning and blue-green flows.",
      "Optimized cloud costs by 40% via HPA and Cluster Autoscaler configurations.",
      "Provisioned secure multi-zone VPCs and EKS clusters using modular Terraform IaC."
    ],
    links: [
      { label: "Lab Docs", href: "https://github.com/P0Saurabh" }
    ],
  },
];
