"use client";

import Acquisition from "@/components/Acquisition";
import Customer from "@/components/Customer";
import Sales from "@/components/Sales";

const CustomerPage = () => {
  return (
    <div className=" p-8  ">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          <Acquisition />
        </div>
        <Customer />
      </div>
      <Sales />
    </div>
  );
};

export default CustomerPage;
