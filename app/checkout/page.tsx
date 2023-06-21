"use client";

import Header from "@/components/Header";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import {
  Cart,
  addCheckoutProduct,
  removeCartFromCheckout,
} from "@/redux/cartSlice";
import { RootState } from "@/redux/store";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../loading";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";

const CheckoutPage = () => {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const { totalPrice, checkout } = useSelector(
    (state: RootState) => state.cart
  );

  useEffect(() => {
    const localCart = localStorage.getItem("shopDBCart");
    if (localCart) {
      setLoading(true);
      const cart: Cart[] = JSON.parse(localCart);
      const ids = cart.map((item) => item.id);
      axios
        .post("/api/mobiles", { id: ids })
        .then((response) => {
          if (response.data) {
            dispatch(addCheckoutProduct(response.data));
            setLoading(false);
          }
        })
        .catch((error) => setLoading(false));
    }
  }, [dispatch]);

  return (
    <>
      <Header />

      {loading ? (
        <Loading />
      ) : (
        <>
          {checkout.length <= 0 ? (
            <h1 className="text-2xl font-bold text-center mt-10">
              Your cart list empty. To shop{" "}
              <Link href="/" className="text-blue-600 underline">
                Click
              </Link>
            </h1>
          ) : (
            <main className="screen mx-auto grid lg:grid-cols-2 py-8 gap-4">
              <div>
                <p className="text-xl font-medium">Order Summary</p>
                <p className="mb-8">
                  Check your items. And select a suitable shipping method.
                </p>

                <div className=" divide-y rounded-md border bg-white p-2 md:p-4">
                  {checkout?.map((item) => (
                    <div
                      className="flex gap-2 py-2 rounded-lg bg-white "
                      key={item.id}
                    >
                      <Image
                        className="w-24 h-28 rounded-md"
                        src={item.img_url}
                        alt={item.title}
                        width={80}
                        height={90}
                      />
                      <div className=" flex-1 items-center md:flex justify-between px-4 py-4">
                        <div className="flex-1">
                          <p className="font-bold">{`${item.brand}`}</p>
                          <p>{item.model}</p>
                          <p>{item.variants[0].official} Tk</p>
                        </div>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() =>
                            dispatch(removeCartFromCheckout(item.id))
                          }
                        >
                          Delete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className=" ">
                <p className="text-xl font-medium">Payment Details</p>
                <p className="mb-8">
                  Complete your order by providing your payment details.
                </p>

                <div className="bg-white rounded-md border md:p-8 p-4">
                  <div className="relative  ">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      placeholder="your.email@gmail.com"
                      className=" pl-11"
                    />
                    <div className="pointer-events-none absolute bottom-[12px] inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                  </div>

                  <div className="relative my-3">
                    <Label htmlFor="card-holder">Card Holder</Label>
                    <Input
                      id="card-holder"
                      name="card-holder"
                      placeholder="Your full name here"
                      className="pl-11"
                    />
                    <div className="pointer-events-none absolute bottom-[12px] inline-flex items-center px-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                        />
                      </svg>
                    </div>
                  </div>

                  <Label htmlFor="card-no">Card Details</Label>
                  <div className="flex gap-2 ">
                    <div className="relative w-7/12 flex-shrink-0  gap-2 items-center">
                      <Input
                        id="card-no"
                        name="card-no"
                        placeholder="xxxx-xxxx-xxxx-xxxx"
                        className=" pl-11"
                      />
                      <div className="pointer-events-none absolute bottom-[12px] inline-flex items-center px-3">
                        <svg
                          className="h-4 w-4 text-gray-400"
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 16 16"
                        >
                          <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                          <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                        </svg>
                      </div>
                    </div>
                    <Input
                      name="credit-expiry"
                      id="credit-expiry"
                      placeholder="MM/YY"
                    />
                    <Input name="credit-cvc" placeholder="CVC" />
                  </div>

                  <div className=" mt-4 border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">
                        {totalPrice} Tk
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Shipping
                      </p>
                      <p className="font-semibold text-gray-900">120 Tk</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm font-medium ">Total</p>
                    <p className="text-xl font-semibold ">
                      {totalPrice + 120} TK
                    </p>
                  </div>
                  <Button className="w-full mt-4">Place Order</Button>
                </div>
              </div>
            </main>
          )}
        </>
      )}
    </>
  );
};

export default CheckoutPage;
