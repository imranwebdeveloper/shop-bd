"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect } from "react";
import { buttonVariants } from "./ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { LogIn, ShoppingCart } from "lucide-react";
import { RootState } from "@/redux/store";
import { addLocalStorageCart } from "@/redux/cartSlice";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const Header = () => {
  const cart = useSelector((state: RootState) => state.cart.products);
  const dispatch = useDispatch();
  useEffect(() => {
    const localCart = localStorage.getItem("shopDBCart");
    if (localCart) {
      dispatch(addLocalStorageCart(JSON.parse(localCart)));
    }
  }, [dispatch]);
  return (
    <header>
      <nav className="screen mx-auto py-2.5 ">
        <div className="flex flex-wrap justify-between items-center  ">
          <Link href="/" className="flex items-center">
            <Image
              src="https://flowbite.com/docs/images/logo.svg"
              className="mr-3 h-6 sm:h-9 hidden md:flex"
              alt="Flowbite Logo"
              width={40}
              height={40}
            />
            <span className="self-center text-xl text-white font-extrabold whitespace-nowrap ">
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
                {cart.length}
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

            <Link href="/dashboard">
              <Avatar>
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
