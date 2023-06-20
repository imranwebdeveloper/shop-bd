"use client";

import { PhoneVariants } from "@/types";
import React from "react";
interface Props {
  prices: PhoneVariants[];
}

const CardPrice: React.FC<Props> = ({ prices }) => {
  let price = 0;
  prices.forEach((item) => {
    if (!price) {
      if (item.official) {
        price = item.official;
      } else {
        price = item.official;
      }
    }
  });
  return (
    <p className="text-sm text-center font-bold text-orange-600">
      {price ? `${price} Tk` : "Coming Soon "}
    </p>
  );
};

export default CardPrice;
