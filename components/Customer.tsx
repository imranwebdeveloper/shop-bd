import { customer } from "@/lib/data";
import Image from "next/image";
import React from "react";

const Customer = () => {
  return (
    <div className="bg-white shadow rounded-lg  p-2 sm:p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-bold leading-none text-gray-900">
          Latest Customers
        </h3>
        <a
          href="#"
          className="text-sm font-medium text-cyan-600 hover:bg-gray-100 rounded-lg inline-flex items-center p-2"
        >
          View all
        </a>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200">
          {customer.map((item) => {
            return (
              <li className="py-3 sm:py-4" key={item.id}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-8 w-8 rounded-full"
                      src={item.imageUrl}
                      alt="Neil image"
                      width={32}
                      height={32}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {item.name}
                    </p>
                    <p className="text-sm text-gray-500 truncate">
                      <a
                        href="#"
                        className="__cf_email__"
                        data-cfemail="17727a767e7b57607e7973646372653974787a"
                      >
                        {item.email}
                      </a>
                    </p>
                  </div>
                  <div className="inline-flex items-center text-base font-semibold text-gray-900">
                    {item.amount} Tk.
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Customer;
