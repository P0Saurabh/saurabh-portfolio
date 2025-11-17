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
    title: "JSVoice Library – Web Speech API Integration",
    shortDescription:
      "Modular JS library that wraps Web Speech API to enable voice-driven UI automation with simple commands.",
    tech: "JavaScript • Web Speech API • Frontend Automation • AI Voice",
    details: [
      "Reusable JSVoice library that abstracts speech recognition & synthesis into simple functions.",
      "Maps voice commands to DOM actions (click, scroll, navigation, forms).",
      "Drop-in architecture – can be mounted on existing frontends.",
      "Future scope: LLM-based semantic command matching for natural language UX.",
    ],
    links: [{ label: "GitHub Repo", href: "https://github.com/VoiceUI-js/JSVoice" }],
  },
  {
    id: "proctor",
    title: "AI-Based Real-Time Proctoring System",
    shortDescription:
      "Browser-based proctoring with face tracking, gaze detection, voice alerts and violation logging.",
    tech: "React • Computer Vision • WebRTC • Node.js • AI Automation",
    details: [
      "Real-time face tracking & gaze monitoring to detect off-screen behaviour.",
      "Voice activity & multi-face/device detection for suspicious activity.",
      "Automatic violation logging with timestamps & reasons.",
      "Lightweight, browser-first UI – no heavy agent installs.",
    ],
    links: [{ label: "Live Demo", href: "https://proctor-g1yd.onrender.com/" }],
  },
  {
    id: "devops-lab",
    title: "Cloud DevOps Lab – CI/CD & K8s Playground",
    shortDescription:
      "Personal lab for CI/CD pipelines, Kubernetes deployments and cloud-native automation experiments.",
    tech: "GitHub Actions • Docker • Kubernetes • Terraform (basic)",
    details: [
      "GitHub Actions pipelines for building, testing & containerizing services.",
      "Kubernetes deployments with rolling updates & health checks.",
      "Terraform experiments for provisioning cloud infrastructure.",
      "Playground for trying new DevOps + AI automation ideas quickly.",
    ],
    links: [],
  },
];
