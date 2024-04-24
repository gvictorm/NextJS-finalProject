"use client";
import Link from "next/link";
export default function Footer() {
  return (
    <div>
      {/* <!-- Footer --> */}
      <footer className="navbgColor p-3 items-center bottom-0 sticky">
        <div className="container my-2 mx-auto">
          <div className="font-serif justify-between flex">
            <p className="flex-wrap italic font-serif">
              &copy; 2024 The Puerto Rico Library
            </p>
            <ul className="mx-auto flex flex-wrap">
              <li className="mr-4 hover:text-white hover:underline">
                <Link href="#">Facebook</Link>
              </li>
              <li className="mr-4 hover:text-white hover:underline">
                <Link href="#">Instagram</Link>
              </li>
            </ul>
            <ul>
              <li className="mr-4">
                <p className="mr-4">prlibrary@gmail.com</p>
              </li>
              <li>
                <p className="mr-4">787-208-5555</p>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
