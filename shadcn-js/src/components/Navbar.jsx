import React from "react";
import { SidebarTrigger } from "./ui/sidebar";
import { ModeToggle } from "./ModeToggle"; // Adjust the import path as necessary

const Navbar = () => {
  return (
    <nav className="bg-background text-foreground">
      <div className="p-4 flex justify-between items-center">
        <SidebarTrigger></SidebarTrigger>
        <h1 className="text-2xl font-bold">MyLogo</h1>
        <ul className="flex space-x-6">
          <li className="content-center">
            <a href="#home" className="hover:text-gray-400">
              Home
            </a>
          </li>
          <li className="content-center">
            <a href="#about" className="hover:text-gray-400">
              About
            </a>
          </li>
          <li className="content-center">
            <a href="#services" className="hover:text-gray-400">
              Services
            </a>
          </li>
          <li className="content-center">
            <a href="#contact" className="hover:text-gray-400">
              Contact
            </a>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
