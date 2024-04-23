import Background from "../background/page";
import Navbar from "../navbar/page";
import Footer from "../footer/page";
export default function AboutUs() {
  return (
    <main>
      <Background />
      <Navbar />
      <section class="mainbgColor px-10 my-56 mx-auto lg:w-1/2 rounded-md">
        <div class="text-white font-serif  ">
          <div class="grid grid-col-1">
            <div class="mb-10">
              <h2 class="text-5xl mt-20 text-center ">
                Welcome to The Puerto Rico Library
              </h2>
            </div>
            {/* <!-- information about puerto rican library --> */}
            <div class="py-20">
              <h3 class="mb-5 text-2xl">About Us</h3>
              <p class="text-justify">
                The Puerto Rican Library is an online bookshop that specializes
                in literature, academic research, and the history of Puerto
                Rico. This bookshop aims to offer a rich selection of
                discontinued books of Puerto Rico and Puerto Rican writers. Our
                inventory is a complex collection of rare books and first
                editions of the most influential literary works of Puerto Rican
                authors. For that reason, our team are experts in history and
                literature who guarantee the best service to the customers.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
