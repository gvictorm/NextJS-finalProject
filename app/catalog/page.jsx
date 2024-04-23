import Navbar from "../navbar/page";
import Background from "../background/page";
import Image from "next/image";
export default function () {
  return (
    <body>
      <Navbar />
      <Background />
      <section className="mainbgColor">
        <div className="container py-10 px-10 mx-auto catalogbgColor rounded-lg">
          <h2 className="mb-20 text-center text-white font-serif text-4xl">
            Catalog
          </h2>
          {/* <!-- narrative: first category of the catalog --> */}

          <h3 className="text-white font-serif my-5 text-2xl">Narrative</h3>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* <!-- each book of narrative --> */}
            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img src="enbabia-padro.jpeg" alt="book_img" className="mb-2" />
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
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img src="pandora-ferre.jpeg" alt="book_img" className="mb-2" />
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
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img src="estampas-todd.jpeg" alt="book_img" className="mb-2" />
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
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4  border-4 borderbooksColor rounded-lg">
              <img
                src="volumen-1-nilita.jpeg"
                alt="book_img"
                className="mb-2"
              />
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
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img
                src="aclaraciones-pedreira.jpeg"
                alt="book_img"
                className="mb-2"
              />
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
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img
                src="mujerdelmar-ramos.jpeg"
                alt="book_img"
                className="mb-2"
              />
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
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <!-- poetry: second category of the catalog --> */}
          <a href="#">
            <h3 className="text-white font-serif mt-20 mb-5 p-5 rounded text-2xl">
              Poetry
            </h3>
          </a>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {/* <!-- each book of poetry --> */}
            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img src="ecaparate-padro.jpeg" alt="book_img" className="mb-2" />
              <h4 className="font-serif text-sm p-1 font-semibold">
                Escaparate iluminado
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: José de Diego Padró</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Ediciones Rvmbos</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1962</p>
                </li>
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img
                src="animal_fiero-angela.jpeg"
                alt="book_img"
                className="mb-2"
              />
              <h4 className="font-serif text-sm p-1 font-semibold">
                Animal fiero y tierno
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: ángelamaría dávila</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Ediciones huracán</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1962</p>
                </li>
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img
                src="tropico_amargo-lair.jpeg"
                alt="book_img"
                className="mb-2"
              />
              <h4 className="font-serif text-sm p-1 font-semibold">
                Trópico amargo
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Clara Lair</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Biblioteca de autores puertorriqueños</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1956</p>
                </li>
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img
                src="silaba_piel-lima.jpeg"
                alt="book_img"
                className="mb-2"
              />
              <h4 className="font-serif text-sm p-1 font-semibold">
                Sílaba en la piel
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: José María Lima</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Ediciones Qease</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1981</p>
                </li>
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img src="tuntun-lpm.jpeg" alt="book_img" className="mb-2" />
              <h4 className="font-serif text-sm p-1 font-semibold">
                Tun tun de pasa y grifería
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Luis Palés Matos</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Universidad de Puerto Rico</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1950</p>
                </li>
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-white shadow-lg p-4 border-4 borderbooksColor rounded-lg">
              <img
                src="poetica-chevremont.jpeg"
                alt="book_img"
                className="mb-2"
              />
              <h4 className="font-serif text-sm p-1 font-semibold">
                Obra poética 1
              </h4>
              <ul className="text-sm font-serif p-2">
                <li className="mb-2">
                  <p>Author: Evaristo Chevremont</p>
                </li>
                <li className="mb-2">
                  <p>Editorial: Universidad de Puerto Rico</p>
                </li>
                <li className="mb-2">
                  <p>Year: 1980</p>
                </li>
                <li>
                  <a href="#" id="anchorcolor" className=" ">
                    See more
                  </a>
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
              <li>
                <a href="#" className="mr-4 hover:text-white hover:underline">
                  Facebook
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:text-white hover:underline">
                  Instagram
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="mr-4">
                  prlibrary@gmail.com
                </a>
              </li>
              <li>
                <a href="#" className="mr-4">
                  787-208-5555
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </body>
  );
}
