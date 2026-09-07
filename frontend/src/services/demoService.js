import { api_url } from "../../config";

export const fallbackDemoJobs = [
  {
    id: "fallback-frontend-engineer",
    title: "Frontend Engineer",
    company: "Northstar Labs",
    location: "Dhaka, Bangladesh",
    type: "Full-time",
  },
  {
    id: "fallback-product-designer",
    title: "Product Designer",
    company: "Orbit Works",
    location: "Remote",
    type: "Contract",
  },
  {
    id: "fallback-growth-analyst",
    title: "Growth Analyst",
    company: "PulseStack",
    location: "Hybrid",
    type: "Full-time",
  },
];

export const fallbackDemoWorkflows = {
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

export async function getDemoOverview() {
  const response = await fetch(`${api_url}/demo/overview`);

  if (!response.ok) {
    throw new Error("Demo overview is unavailable");
  }

  return response.json();
}

export async function getDemoWorkflows() {
  const response = await fetch(`${api_url}/demo/workflows`);

  if (!response.ok) {
    throw new Error("Demo workflows are unavailable");
  }

  return response.json();
}
