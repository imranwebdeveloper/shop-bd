"use client";

import SearchBox from "./SearchBox";
import { BellRing, User2 } from "lucide-react";
import Menubar from "./Menu";

const DashboardHeader = () => {
  return (
    <header className="my-2 flex  items-center rounded-md bg-white p-4 shadow  ">
      <Menubar />
      <div className="flex flex-1 items-center gap-2">
        <SearchBox />
      </div>
      <div className="flex gap-3 text-gray-500 items-center ">
        <button className={`hover-bg-secondary relative `}>
          <BellRing className="h-5 w-5" />
        </button>
        <button className="hover-bg-secondary ">
          <User2 className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default DashboardHeader;
