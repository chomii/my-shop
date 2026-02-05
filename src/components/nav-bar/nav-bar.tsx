import { cn } from "@/lib/utils";
import { Bell as BellIcon } from "lucide-react";
import { ProfileDropdown } from "./profile-dropdown";
import { MobileNav } from "./mobile-nav";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import { navigation } from "./constants";

export const NavBar = () => {
  return (
    <nav className="bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <div className="shrink-0">
              <Image
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="size-8"
                width={100}
                height={100}
              />
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                {navigation.map((item) => (
                  <Button key={item.id} asChild>
                    <Link
                      key={item.name}
                      href={item.href}
                      aria-current={item.current ? "page" : undefined}
                      className={cn(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-white/5 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium",
                      )}
                    >
                      {item.name}
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 gap-1">
              <Button
                variant="outline"
                size="icon"
                className="relative rounded-full p-1 text-gray-400 hover:text-black focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500"
              >
                <span className="sr-only">View notifications</span>
                <BellIcon aria-hidden="true" className="size-6" />
              </Button>

              {/* Profile dropdown */}
              <ProfileDropdown />
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            {/* Mobile menu button */}
            <MobileNav />
          </div>
        </div>
      </div>
    </nav>
  );
};
