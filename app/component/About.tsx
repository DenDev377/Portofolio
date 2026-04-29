import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { HiDownload } from "react-icons/hi";

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
      {/*About data*/}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/*Data 1*/}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            40+
          </h3>
          <p className="text-gray-700 font-medium text-lg">Happy Client</p>
        </div>
        {/*Data 2*/}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            2+
          </h3>
          <p className="text-gray-700 font-medium text-lg">Years Experience</p>
        </div>
        {/*Data 3*/}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 text-center border border-outer">
          <h3 className="text-3xl md:text-4xl font-bold text-primary mb-2">
            50+
          </h3>
          <p className="text-gray-700 font-medium text-lg">
            Projects Completed
          </p>
        </div>
      </div>

      {/*Content text*/}
      <div className="text-center max-w-3xl mx-auto mb-8 px-4">
        <p className="text-gray-600 font-medium text-lg md:text-xl leading-relaxed">
          Saya memiliki gairah mendalam dalam dunia pengembangan perangkat lunak, khususnya sebagai seorang <strong>Fullstack Developer</strong>. Berpusat pada pembuatan antarmuka (UI) yang memanjakan mata dan performa sistem yang dapat diandalkan, setiap proyek yang saya kerjakan dirancang untuk menciptakan pengalaman pengguna yang mulus dan interaktif.
        </p>
      </div>

      {/*Tombol Download  */}
      <div className="flex justify-center mt-8">
        <a
          href="/assets/resume.pdf"
          download
          className="bg-primary py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
        >
          Download CV <HiDownload className="text-lg" />
        </a>
      </div>
    </section>
  );
}
