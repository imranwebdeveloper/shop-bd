"use client";
import { store } from "@/redux/store";
import React from "react";
import { Provider } from "react-redux";
import Toaster from "../ui/toaster";

interface Props {
  children: React.ReactNode;
}

const ReduxProvider: React.FC<Props> = ({ children }) => {
  return (
    <Provider store={store}>
      <Toaster />
      {children}
    </Provider>
  );
};

export default ReduxProvider;
