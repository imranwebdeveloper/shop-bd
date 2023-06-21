"use client";

import Acquisition from "@/components/Acquisition";
import Customer from "@/components/Customer";
import Sales from "@/components/Sales";

const CustomerPage = () => {
  return (
    <div className="mt-8">
      <div className="grid md:grid-cols-3 gap-4">
        <div className="md:col-span-2">
          <Acquisition />
        </div>
        <Customer />
      </div>
      <Sales />
    </div>
  );
};

export default CustomerPage;
