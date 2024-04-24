import Navbar from "../navbar/page";
import Background from "../background/page";

export default function Catalog() {
  return (
    <div>
      <Navbar />
      <Background />
      <section>
        <div className="container py-10 px-10 my-20 mx-auto catalogbgColor rounded-lg">
          {/* <!-- using animation on header --> */}
          <h2 className="mb-20 text-center text-white font-serif text-4xl ">
            Catalog
          </h2>
          {/* <!-- narrative: first category of the catalog --> */}

          <h3 className="text-white font-serif my-5 text-2xl">Narrative</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* <!-- each book of narrative --> */}
            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <h4 className="font-serif text-sm p-1 font-semibold">
                Papeles de pandora
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: José de Diego Padró</p>
                </li>

                <li className="mb-2">
                  <p>Year: 1962</p>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <h4 className="font-serif text-sm p-1 font-semibold">
                Papeles de pandora
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Rosario Ferré</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Joaquin Mortiz</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1976</p>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <h4 className="font-serif text-sm p-1 font-semibold">
                Estampas coloniales
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Roberto H. Todd</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Biblioteca de autores puertorrqueños</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1954</p>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <h4 className="font-serif text-sm p-1 font-semibold">
                Indice cultural
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Nilita Vientos Gastón</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Universidad de Puerto Rico</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1962</p>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <h4 className="font-serif text-sm p-1 font-semibold">
                Aclaraciones y críticas
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Antonio S. Pedreira</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Phi Eta Mu UPR</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1941</p>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <h4 className="font-serif text-sm p-1 font-semibold">
                El cuento de la mujer del mar
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Manuel Ramos Otero</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Ediciones huracán</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1979</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Footer --> */}
      <footer className="navbgColor p-3 items-center bottom-0">
        <div className="container my-2 mx-auto">
          <div className="font-serif justify-between flex">
            <p className="flex-wrap italic font-serif">
              &copy; 2024 The Puerto Rico Library
            </p>
            <ul className="mx-auto flex flex-wrap">
              <li className="mr-4 hover:text-white hover:underline">
                <a href="https://www.facebook.com/">Facebook</a>
              </li>
              <li className="mr-4 hover:text-white hover:underline">
                <a href="https://www.instagram.com/">Instagram</a>
              </li>
            </ul>
            <ul>
              <li>
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
