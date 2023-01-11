import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle, AiFillInstagram } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { GoHome } from "react-icons/go";
import {BsHandThumbsUpFill} from 'react-icons/bs'
import { useEffect, useRef, useState } from "react";
import Sidebar from "./Sidebar";
import Link from "next/link";
import Head from "next/head";
import Header from "../ui/Header";

function Layout({ children }) {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [toggleSidebarDes, setToggleSidebarDes] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Head>
        <title>آماده برای آزمون</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div className="">
        
        <div className="flex h-screen flex-col bg-gray-50 md:flex-row  ">
          {/* sideBar in laptop */}
          {toggleSidebarDes && (
            <div className=" h-screen ">
              <Sidebar />
            </div>
          )}
          {toggleSidebar && (
            <div className="animate-slide-in fixed z-10 h-screen w-4/5 overflow-y-auto bg-white shadow-md">
              <div className="absolute flex w-full items-center justify-end p-2">
                <AiFillCloseCircle
                  fontSize={30}
                  className="cursor-pointer"
                  onClick={() => setToggleSidebar(false)}
                />
              </div>
              <Sidebar closeToggle={setToggleSidebar} />
            </div>
          )}
          <div className="min-h-screen flex-1  pb-2" ref={scrollRef}>
            <div className="bg-gray-50">
              <div className="h-full">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Layout;
