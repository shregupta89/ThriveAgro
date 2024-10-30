import React from "react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className=" py-6 bg-yellow-700">
      <div className=" px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 text-white">
          <nav className="flex gap-6">
            <Link
              className="flex justify-around items-center text-sm font-medium "
              href="#"
            >
              <Image src="/logo.png" alt="logo" width="40" height="25" />
              <h3 className=".font-bold text-xl">ThriveAgro</h3>
            </Link>
          </nav>
          <p className="text-sm "> © 2024 ABC Inc. All rights reserved.</p>
          <Link className="text-sm font-medium " href="/landingpg/Contactus">
            <h3 className=".font-bold text-xl">Contact Us</h3>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
