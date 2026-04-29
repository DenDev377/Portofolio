import React from "react";
import { PiStarFourFill, PiChatsBold } from "react-icons/pi";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";

export default function Contact() {
  const contactInfo = [
    {
      id: 1,
      icon: <FiMapPin className="text-2xl" />,
      title: "Lokasi",
      value: "Jakarta, Indonesia",
    },
    {
      id: 2,
      icon: <FiMail className="text-2xl" />,
      title: "Email",
      value: "hello@dendidev.com",
    },
    {
      id: 3,
      icon: <FiPhone className="text-2xl" />,
      title: "Telepon",
      value: "+62 812 3456 7890",
    },
  ];

  return (
    <section className="my-8 md:my-16" id="contact">
      {/*Heading*/}
      <div className="text-center mb-12">
        <p className="text-content font-semibold inline-flex items-center gap-1 border border-outer py-1.5 px-3 rounded-2xl mb-4">
          <PiStarFourFill className="text-lg" />
          Kontak
        </p>
        <h2 className="text-2xl md:text-3xl font-bold">
          Mari Bekerja <span className="text-primary">Bersama</span>
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">
        {/* Contact Information */}
        <div className="w-full lg:w-1/3 space-y-6">
          <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
          <p className="text-gray-600 mb-8">
            Apakah Anda memiliki proyek yang ingin dikerjakan atau sekadar ingin menyapa? Silakan hubungi saya melalui form pesan atau menggunakan kontak di bawah ini.
          </p>
          <div className="space-y-4">
            {contactInfo.map((info) => (
              <div
                key={info.id}
                className="flex items-center gap-4 bg-white/10 backdrop-blur-sm border border-outer p-4 rounded-2xl hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="bg-primary/10 text-primary p-3 rounded-xl">
                  {info.icon}
                </div>
                <div>
                  <p className="text-gray-500 text-sm">{info.title}</p>
                  <p className="font-semibold text-content">{info.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Form */}
        <div className="w-full lg:w-2/3 bg-white/10 backdrop-blur-sm border border-outer p-6 md:p-8 rounded-3xl shadow-sm">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700" htmlFor="name">
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Masukkan nama Anda"
                  className="w-full bg-white/50 border border-outer rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700" htmlFor="email">
                  Alamat Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Masukkan email Anda"
                  className="w-full bg-white/50 border border-outer rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700" htmlFor="subject">
                Subjek
              </label>
              <input
                type="text"
                id="subject"
                placeholder="Topik pesan"
                className="w-full bg-white/50 border border-outer rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-semibold text-gray-700" htmlFor="message">
                Pesan
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tulis pesan Anda di sini..."
                className="w-full bg-white/50 border border-outer rounded-xl px-4 py-3 outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors resize-none"
              ></textarea>
            </div>

            <button
              type="button"
              className="w-full sm:w-auto bg-primary py-3 px-8 text-white rounded-full font-semibold flex items-center justify-center gap-2 hover:opacity-90 hover:scale-105 transition-all duration-300 shadow-md"
            >
              Kirim Pesan <PiChatsBold className="text-lg" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
