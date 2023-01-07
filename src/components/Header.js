import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import Header from "../assets/desktop/image-header.jpg";
import arrow from "../assets/icon-arrow-down.svg"

const navigation = [
  { name: "About", href: "#" },
  { name: "Service", href: "#" },
  { name: "Projects", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="relative  ">
        <div className="flex flex-col  lg:flex lg:flex-col lg:justify-center  place-items-center">
        <img src={Header} alt="bg" className="" />
        <h1 className="absolute top-48  text-white font-bold text-5xl tracking-widest		 ">WE ARE CREATIVES</h1>
        <img src={arrow} className="absolute lg:flex lg:justify-center  top-80" />
        </div>

        <div className=" lg:px-10  absolute top-0 right-4 ">
          <div className="">
            <nav className="flex  m-5 h-20 items-center ">
             

              <div className="flex   lg:hidden">
                <button
                  type="button"
                  className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 bg-white	"
                 onClick={() => setMobileMenuOpen(true)}
                >
                  <span className="sr-only">Open main menu</span>
                  <Bars3Icon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="hidden m-10 lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-14">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="  text-white  hover:text-gray-900"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="hidden right-0 lg:flex lg:min-w-0 lg:flex-1 lg:justify-end">
                <a href="#"className="inline-block rounded-full px-8 py-4 text-lg font-semibold leading-6 bg-white	 shadow-sm ring-1 ring-gray-900/10 hover:ring-gray-900/20"
                >CONTACT</a>
              </div>
            </nav>
            <Dialog as="div" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
              <Dialog.Panel
                focus="true"
                className="fixed inset-0 z-10 overflow-y-auto bg-lime-300 px-6 py-6 lg:hidden"
              >
                <div className="flex h-9 items-center justify-between">
                  <div className="flex">
                    <a
                      href="#"
                      className="-m-1.5 font-mono p-1.5  text-3xl text-white	 "
                    >
                      Adubi
                    </a>
                  </div>
                  <div className="flex">
                    <button
                      type="button"
                      className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="sr-only">Close menu</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="">
                  <div className="-my-6 divide-y divide-gray-500/10">
                    <div className="space-y-10 mt-10 text-center py-6">
                      {navigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="-mx-3 block rounded-lg py-2 px-3 text-base  leading-7 text-white hover:bg-gray-400/10"
                        >
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Dialog.Panel>
            </Dialog>
          </div>
        </div>
      </div>
    </>
  );
}
