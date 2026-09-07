import React, { useEffect, useState } from "react";
import { fallbackDemoJobs, getDemoOverview } from "../../services/demoService";

function DemoJobs() {
  const [jobs, setJobs] = useState(fallbackDemoJobs);
  const [source, setSource] = useState("sample");

  useEffect(() => {
    let isMounted = true;

    getDemoOverview()
      .then((data) => {
        if (isMounted && data?.featuredJobs?.length) {
          setJobs(data.featuredJobs);
          setSource("api");
        }
      })
      .catch(() => {
        if (isMounted) {
          setSource("sample");
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <section className="px-6 md:px-20 py-12">
      <div className="flex items-center justify-between gap-4 mb-6">
        <div>
          <p className="font-semibold text-primary">_/ Demo Jobs</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
            Featured openings preview
          </h2>
        </div>
        <span className="hidden md:inline text-sm font-semibold text-text-secondary border border-neutral-300 px-4 py-2">
          Source: {source === "api" ? "Demo API" : "Local sample"}
        </span>
      </div>

      <div className="grid md:grid-cols-3 gap-5">
        {jobs.map((job) => (
          <article key={job.id} className="border border-neutral-300 p-5">
            <p className="text-sm text-primary font-semibold">{job.type}</p>
            <h3 className="text-xl font-semibold text-text-primary mt-2">
              {job.title}
            </h3>
            <p className="text-text-secondary mt-2">{job.company}</p>
            <p className="text-sm text-text-secondary mt-4">{job.location}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export default DemoJobs;
