import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/gdt.svg";

export default function Footer() {
  return (
    <footer className="bg-white/50 dark:bg-slate-950/50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center sm:justify-start">
            <Link href="https://gtowntech.org" className="bg-white rounded-xl">
              <Image
                width="200"
                height="80"
                alt="Georgetown Disruptive Tech Logo"
                src={Logo}
              />
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 dark:text-slate-300 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br /> This site is operated by student of{" "}
            <Link className="hover:underline" href="https://georgetown.edu">
              Georgetown University
            </Link>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
