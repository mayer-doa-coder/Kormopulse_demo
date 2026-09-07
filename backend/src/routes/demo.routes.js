import { Router } from "express";

const router = Router();

const demoOverview = {
  status: "demo-ready",
  message: "Kormopulse demo data is available without MongoDB.",
  stats: [
    { label: "Open roles", value: 24 },
    { label: "Partner companies", value: 8 },
    { label: "Applications tracked", value: 136 },
  ],
  featuredJobs: [
    {
      id: "demo-frontend-engineer",
      title: "Frontend Engineer",
      company: "Northstar Labs",
      location: "Dhaka, Bangladesh",
      type: "Full-time",
    },
    {
      id: "demo-product-designer",
      title: "Product Designer",
      company: "Orbit Works",
      location: "Remote",
      type: "Contract",
    },
    {
      id: "demo-growth-analyst",
      title: "Growth Analyst",
      company: "PulseStack",
      location: "Hybrid",
      type: "Full-time",
    },
  ],
};

const demoRoadmap = {
  currentSprint: "Teacher progress demo",
  completionTarget: 30,
  stages: [
    {
      name: "Foundation",
      status: "complete",
      owner: "Backend and frontend setup",
    },
    {
      name: "Demo mode",
      status: "complete",
      owner: "API preview without MongoDB",
    },
    {
      name: "Core workflows",
      status: "in-progress",
      owner: "Jobs, dashboards, and applications",
    },
    {
      name: "Database setup",
      status: "next",
      owner: "MongoDB connection and seed data",
    },
  ],
};

const demoWorkflows = {
  candidate: {
    summary: "A job seeker can browse roles, save matches, and track applications.",
    steps: [
      {
        title: "Build profile",
        detail: "Add education, skills, experience, social links, and resume.",
        status: "available",
      },
      {
        title: "Find matching jobs",
        detail: "Use job listing filters and preview role details before applying.",
        status: "available",
      },
      {
        title: "Track applications",
        detail: "Review submitted applications and saved jobs from the dashboard.",
        status: "available",
      },
    ],
  },
  employer: {
    summary: "An employer can create a company profile, publish jobs, and review applicants.",
    steps: [
      {
        title: "Create company profile",
        detail: "Set up company identity, details, and hiring presence.",
        status: "available",
      },
      {
        title: "Post a job",
        detail: "Publish role information with skills, requirements, and benefits.",
        status: "available",
      },
      {
        title: "Manage candidates",
        detail: "Review applicants, shortlist candidates, and update decisions.",
        status: "available",
      },
    ],
  },
  demoNote: "These workflow previews are static until MongoDB data is connected.",
};

router.get("/overview", (req, res) => {
  res.status(200).json(demoOverview);
});

router.get("/roadmap", (req, res) => {
  res.status(200).json(demoRoadmap);
});

router.get("/workflows", (req, res) => {
  res.status(200).json(demoWorkflows);
});

export default router;
