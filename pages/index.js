import Footer from "../components/commons/Footer";
import Navbar from "../components/commons/Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <section class="text-gray-400 bg-gray-900 body-font py-10 flex justify-center items-center">
          <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <h1 class="title-font text-[3rem] leading-snug mb-4 font-semibold text-white">
                Invest in world-changing
                <br />
                companies of your choice.
              </h1>
              <p class="mb-8 text-lg leading-relaxed">
                Join leading investors funding the next wave of world-changing
                startups.
                <br />
                Investment made easy and more secure now with tez
                cryptocurrency.
              </p>
              <div class="flex justify-center">
                <button class="inline-flex text-white btn-secondary border-0 py-2 px-6 focus:outline-none rounded text-lg">
                  Get Started
                </button>
                <button class="ml-4 inline-flex bg-gray-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-800 text-white rounded text-lg">
                  Login
                </button>
              </div>
            </div>
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                class="object-cover object-center rounded"
                alt="hero"
                src="https://s28126.pcdn.co/blogs/ask-experian/wp-content/uploads/Which-Type-of-Investment-Has-the-Highest-Risk.jpg"
              />
            </div>
          </div>
        </section>
      </div>
      <section class="text-gray-100 bg-gray-800 body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4 text-center">
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                4.5K
              </h2>
              <p class="leading-relaxed">Users</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                1.02K
              </h2>
              <p class="leading-relaxed">Startups</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                104
              </h2>
              <p class="leading-relaxed">Unicorns</p>
            </div>
            <div class="p-4 sm:w-1/4 w-1/2">
              <h2 class="title-font font-medium sm:text-4xl text-3xl text-white">
                35k tez
              </h2>
              <p class="leading-relaxed">Funds Raised</p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
