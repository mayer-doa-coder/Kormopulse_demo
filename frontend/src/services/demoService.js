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

export async function getDemoOverview() {
  const response = await fetch(`${api_url}/demo/overview`);

  if (!response.ok) {
    throw new Error("Demo overview is unavailable");
  }

  return response.json();
}
