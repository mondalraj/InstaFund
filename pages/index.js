import Link from "next/link";
import { useEffect, useState } from "react";
import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";
import { supabase } from "../utils/supabaseClient";

export default function Home() {
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (supabase.auth.user()) {
      setUser(supabase.auth.user());
    }
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <section className="text-gray-400 bg-gray-900 body-font py-10 flex justify-center items-center">
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 className="title-font text-[3rem] leading-snug mb-4 font-semibold text-white">
                Invest in world-changing
                <br />
                companies of your choice.
              </h1>
              <p className="mb-8 text-lg leading-relaxed">
                Join leading investors funding the next wave of world-changing
                startups.
                <br />
                Investment made easy and more secure now with tez
                cryptocurrency.
              </p>
              <div className="flex justify-center">
                {user ? (
                  <Link href={`/dashboard/${user.id}`}>
                    <button className="inline-flex text-white btn-secondary border-0 py-2 px-6 focus:outline-none rounded text-lg">
                      Go to Dashboard
                    </button>
                  </Link>
                ) : (
                  <>
                    <Link href="/auth?type=register">
                      <button className="inline-flex text-white btn-secondary border-0 py-2 px-6 focus:outline-none rounded text-lg">
                        Get Started
                      </button>
                    </Link>
                    <Link href="/auth?type=login">
                      <button className="ml-4 inline-flex bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 text-white rounded text-lg">
                        Login
                      </button>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/Which-Type-of-Investment-Has-the-Highest-Risk.jpg"
              />
            </div>
          </div>
        </section>
      </div>
      <section className="text-gray-100 bg-gray-800 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 text-center">
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                14.5K
              </h2>
              <p className="leading-relaxed">Users</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                1.02K
              </h2>
              <p className="leading-relaxed">Startups</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                104
              </h2>
              <p className="leading-relaxed">Unicorns</p>
            </div>
            <div className="p-4 sm:w-1/4 w-1/2">
              <h2 className="title-font font-medium sm:text-4xl text-3xl text-white">
                535k tez
              </h2>
              <p className="leading-relaxed">Funds Raised</p>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 body-font bg-gray-900">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              How does it work?
            </h1>
            <p className="lg:w-1/2 w-full leading-relaxed text-opacity-80">
              lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quos quisquam cupiditate autem. Quisquam quos quisquam cupiditate
              autem.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  COMPANIES
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="6" cy="6" r="3"></circle>
                    <circle cx="6" cy="18" r="3"></circle>
                    <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  INVESTORS
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
            <div className="xl:w-1/3 md:w-1/2 p-4">
              <div className="border border-gray-700 border-opacity-75 p-6 rounded-lg">
                <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <h2 className="text-lg text-white font-medium title-font mb-2">
                  EMPLOYEES
                </h2>
                <p className="leading-relaxed text-base">
                  Fingerstache flexitarian street art 8-bit waist co, subway
                  tile poke farm.
                </p>
              </div>
            </div>
          </div>
          <Link href="/auth?type=register">
            <button className="flex mx-auto mt-16 btn btn-secondary">
              Get Started
            </button>
          </Link>
        </div>
      </section>
      <Footer />
    </div>
  );
}
