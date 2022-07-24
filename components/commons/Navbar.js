import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header class="sticky top-0 right-0 left-0 text-neutral-focus bg-primary-content">
      <div class="container mx-auto flex flex-wrap px-5 py-3 flex-col md:flex-row items-center">
        <Link href="/">
          <span class="ml-3 title-font font-semibold text-secondary text-2xl cursor-pointer hover:scale-105 transition-all">
            InstaFund
          </span>
        </Link>
        <nav class="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <Link href="/">
            <a class="mr-5 hover:font-medium cursor-pointer">Companies</a>
          </Link>
          <Link href="/">
            <a class="mr-5 hover:font-medium cursor-pointer">Investors</a>
          </Link>
          <Link href="/">
            <a class="mr-5 hover:font-medium cursor-pointer">Jobs</a>
          </Link>
          <Link href="/">
            <a class="mr-5 hover:font-medium cursor-pointer">Transactions</a>
          </Link>
        </nav>
        <div className="space-x-3">
          <Link href="/auth?type=login">
            <button class="btn btn-secondary btn-outline btn-sm">Login</button>
          </Link>
          <Link href="/auth?type=register">
            <button class="btn btn-secondary btn-sm">Register</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
