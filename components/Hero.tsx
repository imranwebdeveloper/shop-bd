import Image from "next/image";
import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/Button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="flex-1 flex items-center ">
      <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
          <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none md:text-5xl xl:text-6xl dark:text-white">
            Payments tool for software companies
          </h1>
          <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            From checkout to global sales tax compliance, companies around the
            world use Flowbite to simplify their payment stack.
          </p>
          <Link
            href="/"
            className={`${buttonVariants({
              size: "lg",
            })} text-sm md:text-base`}
          >
            Get started <ArrowRight className="ml-2 h-6 w-6" />
          </Link>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
          <Image
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
            alt="mockup"
            width={600}
            height={600}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
