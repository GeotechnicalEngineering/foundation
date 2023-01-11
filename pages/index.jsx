import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
// import TopBar from "../components/layout/TopBar";
import Layout from "../components/layout/Layout";
import { CategoryData } from "../data/data";
import { motion } from "framer-motion";
import Header from "../components/ui/Header";
import Hero from "../components/Hero";
import Navbar from "../components/ui/Navbar/Navbar";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-gray-100  ">
       <Navbar/>
        {/* <Hero/>  */}
      
      <section className="my-8 mx-auto flex max-w-5xl flex-wrap justify-center  gap-8 ">
        {CategoryData.map((item, index) => (
          <>
            <Link href={item.link}>
              <div className="  cursor-pointer  ">
                <div className="h-28 w-28    overflow-hidden ">
                  <img src={item.img} alt="" />
                </div>
                <p className="mt-1 text-center font-bold text-ciTiter md:text-xl">
                  {item.name}
                </p>
              </div>
            </Link>
          </>
        ))}
      </section>
    </div>
  );
}
