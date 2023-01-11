import React, { useState } from "react";

import { links } from "./Mylinks";

import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

function NavLinksMobile() {
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");
  return (
    <>
      {links.map((link, index) => (
        <div key={index}>
          <div className="group mb-1 rounded-md bg-blue-100 py-3 px-3 text-right ">
            <h1
              className="group flex items-center justify-between  "
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="inline text-xl ">
                {heading === link.name ? <IoIosArrowUp /> : <IoIosArrowDown />}
              </span>
            </h1>
          </div>

          <div
            className={` 
            ${heading === link.name ? "md:hidden" : "hidden"}
          `}
          >
            {link.sublinks.map((slinks, index) => (
              <div key={index}>
                <div>
                  <h1
                    onClick={() =>
                      subHeading !== slinks.Head
                        ? setSubHeading(slinks.Head)
                        : setSubHeading("")
                    }
                    className="flex items-center justify-between  py-4 pl-7 pr-5  font-semibold "
                  >
                    {slinks.Head}

                    <span className="inline text-xl">
                      <a
                        name={`${
                          subHeading === slinks.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></a>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subHeading === slinks.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slinks.sublink.map((slink) => (
                      <li className="py-3 pl-14">
                        <a href={slink.link}>{slink.name}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default NavLinksMobile;
