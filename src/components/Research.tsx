import React from "react";
import { ResearchCard } from "./ResearchCard";
import { researchItems } from "../data/researchWork";

export function Research() {
  return (
    <section id="research" className="py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl mb-2">Research & Publications</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Selected publications and research projects focused on NLP, neural machine translation, and applied ML.
          </p>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-1 gap-8">
          {researchItems.map((r) => (
            <ResearchCard key={r.id} research={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
