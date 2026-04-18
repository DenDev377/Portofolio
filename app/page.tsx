"use client";
import Navbar from "./component/Navbar";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto w-[90%]">
      <div className="fixed top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-orange-200 via-pink-200 to-rose-200 rounded-b-full  blur-2xl opacity-40 animate-pulse"></div>
      <div
        className="fixed top-0 left-0 w-48 h-48 md:w-96 md:h-96 bg-gradient-to-bl from-pink-200 via-rose-200 to-orange-200 rounded-b-full  blur-3xl opacity-30 animate-pulse"
        style={{ animationDelay: "1s" }}
      ></div>
      <Navbar />
    </div>
  );
}
