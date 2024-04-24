"use client";
import Background from "@/components/Background";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
export default function Contact() {
  return (
    <div>
      <Navbar />
      <Background />
      <section className="mainbgColor px-10 py-7 my-56 mx-auto w-1/2 rounded-md">
        <div className="text-white text-center font-serif">
          <h2 className="py-10 text-4xl">Contact Us</h2>
          {/* <!-- use of form --> */}
          <form className="mx-auto max-w-lg">
            <input
              type="text"
              placeholder="Name"
              className="block w-full p-3 mb-4 rounded"
            />
            <input
              type="email"
              placeholder="Email"
              className="block w-full p-3 mb-4 rounded"
            />
            <input
              type="phone"
              placeholder="Phone"
              className="block w-full p-3 mb-4 rounded"
            />
            <textarea
              placeholder="Message"
              className="block w-full p-3 mb-4 rounded"
            ></textarea>
            <button className="navbgColor w-full p-2 rounded text-xlg font-semibold ">
              Submit
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
