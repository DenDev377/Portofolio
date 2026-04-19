import React from "react";
import Image from "next/image";

export default function Hero() {
  const icons = [
    "/assets/icon-1.svg",
    "/assets/icon-2.svg",
    "/assets/icon-3.svg",
    "/assets/icon-4.svg",
    "/assets/icon-5.svg",
    "/assets/icon-6.svg",
    "/assets/icon-7.svg",
    "/assets/icon-8.svg",
  ];
  return (
    <section>
      <div className="max-w-2xl m-auto flex flex-col items-center justify-center text-center pt-24 md:pt-36 px-4 md:px-0 pb-8 overflow-hidden">
        {/*Gambar Profile*/}
        <div>
          <Image
            src="/assets/profile.png"
            alt="profile"
            width={150}
            height={150}
            className="rounded-full border-4 border-primary mb-6"
            loading="eager"
          />
        </div>
        {/*Nama dan Deskripsi*/}
        <h3 className="text-2xl md:text-2xl font-bold">
          Halo Saya <span className="text-primary">Dendi</span>
        </h3>
        <p className="text-lg text-gray-600 mt-4">
          Saya seorang <span className="text-primary text-2xl">fullstack</span>{" "}
          developer yang berfokus pada pembuatan aplikasi web yang menarik dan
          fungsional.
        </p>
        {/*Ikon Teknologi*/}
        <div className="relative my-6 md:my-8 w-full overflow-hidden">
          <div
            className="flex gap-6 w-max will-change-transform animate-[marquee_20s_linear_infinite]"
            style={{ display: "flex" }}
            aria-hidden="true"
          >
            {icons.concat(icons).map((icon, idx) => (
              <div key={icon + "-" + idx} className="shrink-0">
                <Image src={icon} alt="" width={48} height={48} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
