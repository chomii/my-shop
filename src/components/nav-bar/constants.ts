import { Home, Package, Users, User, Settings, LogOut } from "lucide-react";

export const navigation = [
  { name: "Home", href: "/", icon: Home, current: true },
  { name: "Products", href: "/products", icon: Package, current: false },
  { name: "About Us", href: "/about", icon: Users, current: false },
];

export const userNavigation = [
  { name: "Your profile", href: "/profile", icon: User },
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Sign out", href: "/logout", icon: LogOut },
];

export const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
