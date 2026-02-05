import { cn } from "@/lib/utils";
import { MobileNav } from "./mobile-nav";
import Link from "next/link";
import { navigation } from "./constants";
import { Button } from "../ui/button";
import { Bell } from "lucide-react";

import { ProfileDropdown } from "./profile-dropdown";

export const NavBar = () => {
  return (
    <header className="flex justify-center sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="size-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">A</span>
          </div>
          <span className="font-semibold text-lg hidden sm:inline-block">
            Acme Inc
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-md transition-colors",
                item.current
                  ? "bg-accent text-accent-foreground"
                  : "text-muted-foreground hover:text-foreground hover:bg-accent/50",
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        {/* Desktop User Menu */}
        <div className="hidden md:flex items-center gap-2">
          {/* Notification Bell */}
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="size-5" />
            <span className="absolute -top-0.5 -right-0.5 flex size-4 items-center justify-center rounded-full bg-primary text-[10px] font-medium text-primary-foreground">
              3
            </span>
            <span className="sr-only">Notifications</span>
          </Button>

          {/* User Dropdown */}
          <ProfileDropdown />
        </div>

        {/* Mobile Navigation */}
        <MobileNav />
      </div>
    </header>
  );
};
