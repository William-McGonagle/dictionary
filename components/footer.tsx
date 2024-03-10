import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white/50">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start">
            <Link href="https://gtowntech.org">
              <Image
                width="40"
                height="40"
                alt="Georgetown Disruptive Tech Logo"
                src={
                  "https://raw.githubusercontent.com/georgetown-tech/reroto-dash/master/res/gdt.svg"
                }
              />
            </Link>
          </div>

          <p className="mt-4 text-center text-sm text-gray-500 lg:mt-0 lg:text-right">
            Copyright &copy; {new Date().getFullYear()}. All rights reserved.
            <br /> This site is operated by student of Georgetown University.
          </p>
        </div>
      </div>
    </footer>
  );
}
