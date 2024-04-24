import { login, signup } from "./action";
import Navbar from "@/components/Navbar";
import Background from "@/components/Background";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div>
      <Background />
      <Navbar />
      <section className="mainbgColor px-10 py-7 mx-auto my-52 w-1/2 rounded-md">
        <div className="text-white text-center font-serif">
          <h2 className="py-10 text-4xl">Login</h2>
          <form lassName="mx-auto max-w-lg">
            <div className="block  p-3 mb-4 text-2xl ">
              <label htmlFor="email">Email:</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-1/2 rounded-md ml-1"
                required
              />
            </div>
            <div className="block p-3 mb-4 text-2xl ">
              <label htmlFor="password">Password:</label>
              <input
                id="password"
                name="password"
                type="password"
                className="w-1/2 rounded-md ml-1 text-black"
                required
              />
            </div>
            <div className="flex flex-col px-3 items-center justify-center text-xl ">
              <button
                className=" p-4 w-36 my-4 navbgColor rounded-md"
                formAction={login}
              >
                Log in
              </button>
              <button
                className="p-4 w-36 navbgColor rounded-md"
                formAction={signup}
              >
                Sign up
              </button>
            </div>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}
