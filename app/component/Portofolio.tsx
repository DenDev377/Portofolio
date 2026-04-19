import React from "react";
import Image from "next/image";
import { PiStarFourFill } from "react-icons/pi";

export default function Portofolio() {
  //Array untuk projectnya
  const projects = [
    {
      id: 1,
      title: "Machine Learning untuk Prediksi Harga Rumah",
      image: "/assets/portfolio-1.png",
      description:
        "Proyek ini menggunakan algoritma regresi untuk memprediksi harga rumah berdasarkan fitur seperti luas, jumlah kamar, dan lokasi. Dataset yang digunakan adalah dataset rumah dari Kaggle.",
      tags: ["Python", "Machine Learning", "Data Science"],
    },
    {
      id: 2,
      title: "Mobile App UI Design",
      image: "/assets/portfolio-2.png",
      description:
        "Proyek ini adalah desain UI untuk aplikasi mobile yang fokus pada pengalaman pengguna yang intuitif dan estetis. Desain ini dibuat menggunakan Figma dan mencakup berbagai layar seperti login, dashboard, dan profil.",
      tags: ["UI/UX Design", "Figma", "Mobile App"],
    },
  ];
  return (
    <section className="my-8 md:my-16" id="portofolio">
      {/*Heading*/}
      <div className="text-center">
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Portofolio
        </p>
        <h2 className="text-2xl md:text-3xl font-bold mb-8">
          Lihat <span className="text-primary">proyek</span> unggulan saya.{" "}
        </h2>
      </div>
      {/*Daftar Proyek*/}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.id}
            className="group bg-white/0 rounded-lg overflow-hidden transition-transform transform hover:-translate-y-1 hover:shadow-lg"
            aria-labelledby={`project-${project.id}-title`}
          >
            <div className="relative w-full h-64 md:h-112.5">
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 640px) 100vw, 50vw"
                className="object-cover rounded-lg"
                priority={false}
              />
              {/* Glass overlay + title */}
              <div className="absolute left-0 right-0 bottom-0 p-4 bg-white/10 backdrop-blur-sm border border-white/10">
                <h3
                  id={`project-${project.id}-title`}
                  className="text-white text-lg font-semibold"
                >
                  {project.title}
                </h3>
                <p className="text-sm text-white/90 mt-1 hidden md:block">
                  {project.description}
                </p>
              </div>
            </div>

            {/* Tags and meta */}
            <div className="px-2 py-3">
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-outer text-content-alter px-2 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
