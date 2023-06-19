import { config } from "@/config/env.config";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button, buttonVariants } from "./ui/Button";
import { LogIn, ShoppingCart } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const Header = () => {
  return (
    <header className=" bg-white border-b">
      <nav className="screen  border-gray-200  mx-auto py-2.5 ">
        <div className="flex flex-wrap justify-between items-center  ">
          <Link href="/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9 hidden md:flex"
              alt="Flowbite Logo"
              width={100}
              height={40}
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              ShopBD
            </span>
          </Link>
          <div className="flex items-center gap-2 md:order-2">
            <Link
              href="/checkout"
              className={`${buttonVariants({
                size: "sm",
                variant: "link",
                className: "relative",
              })}`}
            >
              <span className=" bg-orange-600 text-white absolute bottom-6 text-xs left-10 rounded-full px-1">
                12
              </span>
              <ShoppingCart className="w-8 h-8" />
            </Link>

            <Link
              href="/login"
              className={`${buttonVariants({
                size: "sm",
              })}`}
            >
              <LogIn className="w-4 h-4 mr-2" /> Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
