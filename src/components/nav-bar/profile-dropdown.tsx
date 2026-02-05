import Image from "next/image";
import { Button } from "../ui/button/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import Link from "next/link";
import { user, userNavigation } from "./constants";

export const ProfileDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          //   className="focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          <span className="sr-only">Open user menu</span>
          <Image
            alt="User avatar"
            src={user.imageUrl}
            className="size-8 rounded-full"
            width={100}
            height={100}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {userNavigation.map((item) => (
          <DropdownMenuItem key={item.name} asChild>
            <Link
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              {item.name}
            </Link>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
