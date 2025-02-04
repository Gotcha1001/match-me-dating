import { Button, Navbar, NavbarBrand, NavbarContent } from "@nextui-org/react";
import Link from "next/link";
import React from "react";
import { GiSelfLove } from "react-icons/gi";
import NavLink from "./NavLink";

export default async function TopNav() {
  return (
    <>
      <Navbar
        maxWidth="full"
        className="gradient-background2"
        classNames={{
          item: [
            "text-xl",
            "text-white",
            "uppercase",
            "data-[active=true]:text-yellow-200",
          ],
        }}
      >
        <NavbarBrand as={Link} href="/">
          <GiSelfLove
            size={40}
            className="text-gray-200 shadow-teal horizontal-rotate rounded-full p-1"
          />
          <div className="font-bold text-3xl flex">
            <span className="text-gray-200 ml-2">MatchMe</span>
          </div>
        </NavbarBrand>
        <NavbarContent justify="center">
          <NavLink href="/members" label="Matches" />
          <NavLink href="/lists" label="Lists" />
          <NavLink href="/messages" label="Messages" />
        </NavbarContent>
        <NavbarContent justify="end">
          <Button
            as={Link}
            href="/login"
            variant="bordered"
            className="text-white"
          >
            Login
          </Button>
          <Button
            as={Link}
            href="/register"
            variant="bordered"
            className="text-white"
          >
            Register
          </Button>
        </NavbarContent>
      </Navbar>
    </>
  );
}
