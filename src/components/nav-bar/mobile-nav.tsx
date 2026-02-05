"use client";

import React from "react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";
import {
  Menu as Bars3Icon,
  Bell as BellIcon,
  X as XMarkIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, user, userNavigation } from "./constants";
import Image from "next/image";
import { Button } from "../ui/button/button";
import Link from "next/link";

export const MobileNav = () => {
  const [open, setOpen] = React.useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <CollapsibleTrigger asChild>
        <button className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500">
          <span className="absolute -inset-0.5" />
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XMarkIcon aria-hidden="true" className="size-6" />
          ) : (
            <Bars3Icon aria-hidden="true" className="size-6" />
          )}
        </button>
      </CollapsibleTrigger>
      <CollapsibleContent>
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          {navigation.map((item) => (
            <Button key={item.name} asChild variant="ghost">
              <Link
                href={item.href}
                aria-current={item.current ? "page" : undefined}
                className={cn(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-white/5 hover:text-white",
                  "block rounded-md px-3 py-2 text-base font-medium",
                )}
              >
                {item.name}
              </Link>
            </Button>
          ))}
        </div>
        <div className="border-t border-white/10 pt-4 pb-3">
          <div className="flex items-center px-5">
            <div className="shrink-0">
              <Image
                alt=""
                src={user.imageUrl}
                className="size-10 rounded-full outline -outline-offset-1 outline-white/10"
                width={100}
                height={100}
              />
            </div>
            <div className="ml-3">
              <div className="text-base/5 font-medium text-white">
                {user.name}
              </div>
              <div className="text-sm font-medium text-gray-400">
                {user.email}
              </div>
            </div>
            <button
              type="button"
              className="relative ml-auto shrink-0 rounded-full p-1 text-gray-400 hover:text-white focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
            >
              <span className="absolute -inset-1.5" />
              <span className="sr-only">View notifications</span>
              <BellIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-3 space-y-1 px-2">
            {userNavigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-400 hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
};
