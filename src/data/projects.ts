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
    title: "JSVoice Library – Voice-Based UI Automation",
    shortDescription:
      "Modular JS library that wraps Web Speech API to enable voice-driven UI automation with simple commands.",
    tech: "JavaScript • Web Speech API • Frontend Automation • AI Voice",
    details: [
      "Developed a modular and reusable JavaScript library abstracting the Web Speech API (speech recognition and synthesis).",
      "Enabled voice-driven UI commands, navigation, and accessibility features for modern web applications.",
      "Designed for easy integration and extensibility across multiple frontend frameworks.",
      "Future scope: LLM-based semantic command matching for natural language UX.",
    ],
    links: [
      { label: "Live Demo", href: "https://js-voice-website-pi.vercel.app/" },
      { label: "GitHub", href: "https://github.com/VoiceUI-js/JSVoice" }
    ],
  },
  {
    id: "proctor",
    title: "AI-Based Real-Time Proctoring System",
    shortDescription:
      "Browser-based proctoring with face tracking, gaze detection, voice alerts and violation logging.",
    tech: "React • Computer Vision • WebRTC • Node.js • AI Automation",
    details: [
      "Built a browser-based proctoring platform with real-time face tracking, gaze monitoring, and voice detection.",
      "Implemented multi-face and device detection with automated violation logging and real-time alerts.",
      "Designed a lightweight and scalable architecture suitable for large-scale online examinations.",
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
