import React from "react";
import { PiStarFourFill } from "react-icons/pi";
import { MdWork, MdSchool } from "react-icons/md";

export default function Resume() {
  const experiences = [
    {
      id: 1,
      title: "Senior Fullstack Developer",
      company: "Tech Solutions Inc.",
      duration: "2023 - Sekarang",
      description:
        "Memimpin tim frontend dalam mengembangkan aplikasi manajemen berbasis React dan Node.js, meningkatkan performa sistem secara keseluruhan.",
    },
    {
      id: 2,
      title: "Web Developer",
      company: "Kreatif Digital Agency",
      duration: "2021 - 2023",
      description:
        "Membangun dan merancang berbagai website interaktif untuk klien korporat dengan fokus pada SEO dan antarmuka yang ramah pengguna.",
    },
  ];

  const educations = [
    {
      id: 1,
      title: "Sarjana Teknik Informatika",
      company: "Universitas Teknologi",
      duration: "2017 - 2021",
      description:
        "Lulus dengan predikat Cumlaude. Berfokus pada peminatan rekayasa perangkat lunak dan kecerdasan buatan.",
    },
    {
      id: 2,
      title: "Bootcamp UI/UX & Frontend",
      company: "Tech Academy",
      duration: "2021",
      description:
        "Menyelesaikan program intensif selama 6 bulan untuk memperkuat keterampilan desain antarmuka dan implementasi React.js.",
    },
  ];

  return (
    <section className="my-8 md:my-16" id="resume">
      {/*Heading*/}
      <div className="text-center mb-12">
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Resume
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">
          Perjalanan <span className="text-primary">Karir & Pendidikan</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Kolom Experience */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/20 p-3 rounded-full text-primary">
              <MdWork className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold">Pengalaman</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outer before:to-transparent">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-base bg-primary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 backdrop-blur-sm border border-outer p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-primary font-semibold text-sm block mb-1">
                    {exp.duration}
                  </span>
                  <h4 className="text-xl font-bold mb-1">{exp.title}</h4>
                  <p className="text-gray-600 font-medium mb-3">{exp.company}</p>
                  <p className="text-gray-500 text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kolom Education */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-primary/20 p-3 rounded-full text-primary">
              <MdSchool className="text-2xl" />
            </div>
            <h3 className="text-2xl font-bold">Pendidikan</h3>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-outer before:to-transparent">
            {educations.map((edu) => (
              <div
                key={edu.id}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-base bg-secondary text-white shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white/10 backdrop-blur-sm border border-outer p-6 rounded-2xl shadow-sm hover:-translate-y-1 transition-transform duration-300">
                  <span className="text-secondary font-semibold text-sm block mb-1">
                    {edu.duration}
                  </span>
                  <h4 className="text-xl font-bold mb-1">{edu.title}</h4>
                  <p className="text-gray-600 font-medium mb-3">{edu.company}</p>
                  <p className="text-gray-500 text-sm">{edu.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
