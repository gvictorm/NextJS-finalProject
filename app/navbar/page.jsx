import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav className="navbgColor font-serif sticky z-10 top-0">
        <div className=" container mx-auto flex flex-wrap justify-between items-center p-4 ">
          <a className="text-white ">
            <span className=" text-3xl">The Puerto Rico Library</span>
          </a>
          <ul className="flex flex-wrap text-xlg text-white ">
            <li className="mr-4 hover:text-black hover:underline">
              <Link href="/">Home</Link>
            </li>
            <li className="mr-4 hover:text-black hover:underline">
              <Link href="/aboutus">About Us</Link>
            </li>
            <li className="mr-4 hover:text-black hover:underline">
              <Link href="/catalog">Catalog</Link>
            </li>
            <li className="hover:text-black mr-4 hover:underline">
              <Link href="/contactUs">Contact Us</Link>
            </li>
            <li className="hover:text-black hover:underline">
              <Link href="/login">Login</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
