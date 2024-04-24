"use client";
import Background from "@/components/Background";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
export default function AboutUs() {
  return (
    <div>
      <Background />
      <Navbar />
      <section className="mainbgColor px-10 my-52 mx-auto lg:w-1/2 rounded-md">
        <div className="text-white font-serif">
          <div className="grid grid-col-1">
            <div className="mb-10">
              <h2 className="text-5xl mt-20 text-center">
                Welcome to The Puerto Rico Library
              </h2>
            </div>
            {/* <!-- information about puerto rican library --> */}
            <div className="py-20">
              <h3 className="mb-5 text-2xl">About Us</h3>
              <p className="text-justify">
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
    </div>
  );
}
