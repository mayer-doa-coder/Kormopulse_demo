import React, { useEffect, useState } from "react";
import {
  fallbackDemoWorkflows,
  getDemoWorkflows,
} from "../../services/demoService";

const workflowLabels = {
  candidate: "Candidate",
  employer: "Employer",
};

function WorkflowPreview() {
  const [workflows, setWorkflows] = useState(fallbackDemoWorkflows);
  const [activeWorkflow, setActiveWorkflow] = useState("candidate");

  useEffect(() => {
    let isMounted = true;

    getDemoWorkflows()
      .then((data) => {
        if (isMounted && data?.candidate && data?.employer) {
          setWorkflows(data);
        }
      })
      .catch(() => {
        if (isMounted) {
          setWorkflows(fallbackDemoWorkflows);
        }
      });

    return () => {
      isMounted = false;
    };
  }, []);

  const selectedWorkflow = workflows[activeWorkflow];

  return (
    <section className="px-6 md:px-20 py-12 bg-neutral-50">
      <div className="grid lg:grid-cols-[0.8fr_1.2fr] gap-8 items-start">
        <div>
          <p className="font-semibold text-primary">_/ Workflow Preview</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mt-2">
            Show both sides of the platform
          </h2>
          <p className="text-text-secondary mt-4 leading-7">
            {selectedWorkflow.summary}
          </p>
          <div className="flex gap-3 mt-6">
            {Object.keys(workflowLabels).map((key) => (
              <button
                key={key}
                type="button"
                onClick={() => setActiveWorkflow(key)}
                className={`px-5 py-2 border font-semibold ${
                  activeWorkflow === key
                    ? "bg-primary text-text-inverse border-primary"
                    : "bg-white text-text-primary border-neutral-300"
                }`}
              >
                {workflowLabels[key]}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-4">
          {selectedWorkflow.steps.map((step, index) => (
            <article
              key={step.title}
              className="bg-white border border-neutral-300 p-5 flex gap-4"
            >
              <div className="h-9 w-9 shrink-0 bg-primary text-text-inverse font-semibold flex items-center justify-center">
                {index + 1}
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3">
                  <h3 className="font-semibold text-text-primary">
                    {step.title}
                  </h3>
                  <span className="text-xs font-semibold text-primary bg-neutral-100 px-3 py-1">
                    {step.status}
                  </span>
                </div>
                <p className="text-sm text-text-secondary leading-6 mt-2">
                  {step.detail}
                </p>
              </div>
            </article>
          ))}
          <p className="text-sm text-text-secondary">{workflows.demoNote}</p>
        </div>
      </div>
    </section>
  );
}

export default WorkflowPreview;
