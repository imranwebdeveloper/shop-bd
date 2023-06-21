"use client";

import { Button } from "@/components/ui/Button";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./Sidebar";
import { Menu } from "lucide-react";

const Menubar = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          variant="outline"
          className="mr-2 md:hidden text-gray-500 "
          size="sm"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent position="left" size="content">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default Menubar;
