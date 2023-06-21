"use client";
import Loading from "@/app/loading";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobilePriceTable from "@/components/MobilePriceTable";
import PhoneContent from "@/components/PhoneContent";
import { capitalizeFirstWord } from "@/lib/utils";
import { Phone } from "@/types";
import axios from "axios";
import Image from "next/image";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

const DetailsPage = () => {
  const [details, setDetails] = useState<Phone>();
  const [loading, setLoading] = useState(true);
  const { id } = useParams() as { id: string };
  useEffect(() => {
    if (id) {
      axios
        .get(`/api/mobiles/${id}`)
        .then((res) => {
          setDetails(res.data);
          setLoading(false);
        })
        .catch((err) => setLoading(false));
    }
  }, [id]);

  return (
    <div className="min-h-screen flex flex-col ">
      <Header />
      <main className="flex-1">
        {loading ? (
          <Loading />
        ) : (
          <div className="py-8  mx-auto screen">
            {details && (
              <>
                <article className="mx-auto bg-white border rounded-md grid grid-cols-1 text-sm md:grid-cols-3 gap-2 max-w-3xl ">
                  <div className="flex flex-col gap-2 p-6">
                    <Image
                      alt={`${details?.brand} ${details?.model} mobile`}
                      src={details.img_url}
                      width={150}
                      height={180}
                      priority
                      className="max-w-[140px] max-h-40 mx-auto"
                    />
                    <div className="text-center">
                      <p className="font-bold text-primary-bg-dark">
                        {details.brand}
                      </p>
                      <p>{details.model}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-2  md:p-8   ">
                    <MobilePriceTable
                      variants={details.variants}
                      date={new Date(details.updatedAt).toLocaleDateString()}
                      id={details.id}
                    />
                    <div className="mt-2 flex gap-2 border text-sm md:text-base items-center md:hidden  ">
                      <p className="p-2 bg-slate-50 border-r ">Last Updated</p>
                      <time>
                        {new Date(details.updatedAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </article>
                <article className="max-w-3xl mx-auto mt-2">
                  {Object.keys(details.content).map((section) => {
                    const title = capitalizeFirstWord(
                      section.split("_").join(" ")
                    );
                    return (
                      <PhoneContent
                        key={section}
                        content={details.content[section]}
                        title={title}
                      />
                    );
                  })}
                </article>
              </>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default DetailsPage;
