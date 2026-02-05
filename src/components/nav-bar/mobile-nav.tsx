"use client";

import React from "react";
import { Menu, Bell, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { navigation, user, userNavigation } from "./constants";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export const MobileNav = () => {
  const [open, setOpen] = React.useState(false);

  const handleLinkClick = () => {
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="relative md:hidden"
          aria-label="Open navigation menu"
        >
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full max-w-xs p-0 flex flex-col">
        {/* Header with user profile */}
        <div className="p-6 pb-4">
          <SheetHeader className="mb-6">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
          </SheetHeader>

          {/* User Profile Card */}
          <div className="flex items-center gap-4 rounded-xl bg-muted/50 p-4">
            <Avatar className="size-12 ring-2 ring-background">
              <AvatarImage
                src={user.imageUrl || "/placeholder.svg"}
                alt={user.name}
              />
              <AvatarFallback>
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <div className="flex-1 min-w-0">
              <p className="font-semibold text-foreground truncate">
                {user.name}
              </p>
              <p className="text-sm text-muted-foreground truncate">
                {user.email}
              </p>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 relative"
              aria-label="View notifications"
            >
              <Bell className="size-5" />
              <Badge className="absolute -top-1 -right-1 size-5 p-0 flex items-center justify-center text-[10px]">
                3
              </Badge>
            </Button>
          </div>
        </div>

        <Separator />

        {/* Main Navigation */}
        <nav className="flex-1 overflow-y-auto p-4">
          <p className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Navigation
          </p>
          <ul className="space-y-1">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      item.current
                        ? "bg-primary text-primary-foreground"
                        : "text-foreground hover:bg-accent",
                    )}
                  >
                    <Icon className="size-5 shrink-0" />
                    <span className="flex-1">{item.name}</span>
                    {item.current && (
                      <span className="size-1.5 rounded-full bg-primary-foreground" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>

          <Separator className="my-4" />

          <p className="px-3 mb-2 text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Account
          </p>
          <ul className="space-y-1">
            {userNavigation.map((item) => {
              const Icon = item.icon;
              const isSignOut = item.name === "Sign out";
              return (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    onClick={handleLinkClick}
                    className={cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                      isSignOut
                        ? "text-destructive hover:bg-destructive/10"
                        : "text-foreground hover:bg-accent",
                    )}
                  >
                    <Icon className="size-5 shrink-0" />
                    <span className="flex-1">{item.name}</span>
                    {!isSignOut && (
                      <ChevronRight className="size-4 text-muted-foreground" />
                    )}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t bg-muted/30">
          <p className="text-xs text-center text-muted-foreground">
            App Version 1.0.0
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
};
