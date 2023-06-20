"use client";

import React from "react";
import { Button, buttonVariants } from "./ui/Button";

import Image from "next/image";
import Link from "next/link";
import CardPrice from "./CardPrice";
import Loading from "@/app/loading";
import { useGetProductQuery } from "@/redux/api";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/cartSlice";

const FeatureProducts = () => {
  const { isLoading, data } = useGetProductQuery(null);
  const dispatch = useDispatch();

  return (
    <section id="product" className="py-8 lg:py-16 mx-auto max-w-5xl">
      <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900  md:text-4xl">
        Feature Products
      </h2>
      {isLoading ? (
        <Loading />
      ) : (
        <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded gap-2 md:gap-4  ">
          {data?.map((product, i: number) => {
            return (
              <div key={i}>
                <article className="transition cursor-pointer bg-white hover:scale-105  flex flex-col border rounded-md bg-primary-bg-light p-4">
                  <header>
                    <Image
                      src={product.img_url}
                      width={100}
                      height={120}
                      priority
                      alt={`${product.brand} ${product.model} mobile`}
                      className="w-24 h-28 md:w-28 md:h-32 mx-auto lg:w-32 lg:h-36 "
                    />
                  </header>

                  <main className="text-sm text-center mt-1">
                    <p className="font-bold md:text-base ">{product.brand}</p>
                    <p>{product.model}</p>
                  </main>
                  <footer>
                    <CardPrice prices={product.variants} />
                    <div className="flex flex-col  md:flex-row-reverse gap-2 mt-4 justify-between items-center">
                      <Button
                        size="sm"
                        variant="outline"
                        className="w-full"
                        onClick={() => dispatch(addToCart(product.id))}
                      >
                        Add to cart
                      </Button>
                      <Link
                        className={buttonVariants({
                          size: "sm",
                          className: "w-full",
                          variant: "outline",
                        })}
                        href={`/${product.brand.toLowerCase()}/${
                          product.model_id
                        }`}
                      >
                        Details
                      </Link>
                    </div>
                  </footer>
                </article>
              </div>
            );
          })}
        </section>
      )}
    </section>
  );
};

export default FeatureProducts;
