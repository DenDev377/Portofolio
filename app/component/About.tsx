import React from "react";
import { PiStarFourFill } from "react-icons/pi";

export default function About() {
  return (
    <section className="mt-12 pb-8" id="about">
      {/*Heading*/}
      <div className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-olive-950 py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Tentang
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Membuat desain yang simple{" "}
          <span className="text-primary">dan efektif</span>.{" "}
        </h2>
      </div>
    </section>
  );
}
