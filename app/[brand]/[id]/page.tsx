"use client";
import Loading from "@/app/loading";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import MobilePriceTable from "@/components/MobilePriceTable";
import PhoneContent from "@/components/PhoneContent";
import { capitalizeFirstWord } from "@/lib/utils";
import { useGetProductByIdQuery } from "@/redux/api";

import Image from "next/image";
import { useParams } from "next/navigation";

const DetailsPage = () => {
  const { id } = useParams() as { id: string };
  const { data, isLoading } = useGetProductByIdQuery(id);

  return (
    <div className="min-h-screen flex flex-col ">
      <Header def={true} />
      <main className="flex-1">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="py-8  mx-auto screen">
            {data && (
              <>
                <article className="mx-auto bg-white border rounded-md grid grid-cols-1 text-sm md:grid-cols-3 gap-2 max-w-3xl ">
                  <div className="flex flex-col gap-2 p-6">
                    <Image
                      alt={`${data?.brand} ${data?.model} mobile`}
                      src={data.img_url}
                      width={150}
                      height={180}
                      priority
                      className="max-w-[140px] max-h-40 mx-auto"
                    />
                    <div className="text-center">
                      <p className="font-bold text-primary-bg-dark">
                        {data.brand}
                      </p>
                      <p>{data.model}</p>
                    </div>
                  </div>
                  <div className="md:col-span-2 p-2  md:p-8   ">
                    <MobilePriceTable
                      variants={data.variants}
                      date={new Date(data.updatedAt).toLocaleDateString()}
                      id={data.id}
                    />
                    <div className="mt-2 flex gap-2 border text-sm md:text-base items-center md:hidden  ">
                      <p className="p-2 bg-slate-50 border-r ">Last Updated</p>
                      <time>
                        {new Date(data.updatedAt).toLocaleDateString()}
                      </time>
                    </div>
                  </div>
                </article>
                <article className="max-w-3xl mx-auto mt-2">
                  {Object.keys(data.content).map((section) => {
                    const title = capitalizeFirstWord(
                      section.split("_").join(" ")
                    );
                    return (
                      <PhoneContent
                        key={section}
                        content={data.content[section]}
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
