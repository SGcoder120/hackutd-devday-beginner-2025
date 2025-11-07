import Image from "next/image";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Courses from "./components/courses";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Courses />
    </div>
  );
}
