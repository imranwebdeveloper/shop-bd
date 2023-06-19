"use client";

import React, { useEffect, useState } from "react";
import { Button, buttonVariants } from "./ui/Button";
import { ShoppingCart } from "lucide-react";
import axios from "axios";
import { PhoneShortInfo } from "@/types";
import Image from "next/image";
import Link from "next/link";
import CardPrice from "./CardPrice";
import Loading from "@/app/loading";

const FeatureProducts = () => {
  const [products, setProducts] = useState<PhoneShortInfo[]>();
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios
      .get("/api/mobiles")
      .then((res) => {
        setProducts(res.data);
        setLoading(false);
      })
      .catch((err) => setLoading(false));
  }, []);

  return (
    <section className="">
      <div className="py-8 lg:py-16 mx-auto max-w-4xl">
        <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900  md:text-4xl">
          Feature Products
        </h2>
        {loading ? (
          <Loading />
        ) : (
          <section className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 rounded gap-2 md:gap-4  ">
            {products?.map((product) => {
              return (
                <Link
                  key={product._id}
                  href={`mobile/${product.brand.toLowerCase()}/${
                    product.model_id
                  }`}
                >
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
                      <div className="flex gap-2 mt-4 justify-between">
                        <Link
                          className={buttonVariants({
                            size: "sm",
                            variant: "secondary",
                          })}
                          href={`/${product.brand.toLowerCase()}/${
                            product.model_id
                          }`}
                        >
                          Details
                        </Link>
                        <Button size="sm" variant="outline">
                          Add to cart
                          {/* <ShoppingCart className="6-8 h-6" /> */}
                        </Button>
                      </div>
                    </footer>
                  </article>
                </Link>
              );
            })}
          </section>
        )}
      </div>
    </section>
  );
};

export default FeatureProducts;
