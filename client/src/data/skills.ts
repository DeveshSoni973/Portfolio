import type { ReactNode } from "react";
import { Database, Ship, GitBranch, Cloud, BrainCircuit, Box } from "lucide-react";

export const technicalSkills = [
  {
    name: "Python",
    percentage: 95
  },
  {
    name: "Machine Learning",
    percentage: 90
  },
  {
    name: "Deep Learning",
    percentage: 85
  },
  {
    name: "Django",
    percentage: 92
  },
  {
    name: "SQL & Databases",
    percentage: 88
  }
];

// We'll export the icon components directly and handle the JSX in the React component
export const technologies = [
  {
    name: "TensorFlow",
    icon: BrainCircuit
  },
  {
    name: "PyTorch",
    icon: Box
  },
  {
    name: "PostgreSQL",
    icon: Database
  },
  {
    name: "Docker",
    icon: Ship
  },
  {
    name: "Git",
    icon: GitBranch
  },
  {
    name: "AWS",
    icon: Cloud
  }
];
