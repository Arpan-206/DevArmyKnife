import Image from "next/image";
import Script from "next/script";
import Router from "next/router";
export default function Home() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="Dev Army Knife Header"
            src="images/DevArmyKnifeHeader.png"
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white anurati">
              Dev Army Knife
            </h1>
            <p className="leading-relaxed mb-8 comfortaa text-justify">
              Introducing the Dev Army Knife, a toolkit for developers to do
              various tasks. Whether it may be a simple QR Code generation or
              editing a few lines of code without the editor, the Dev Army Knife
              is here to help you. Inspired by the Swiss Army Knife, this
              toolkit includes many useful tools for developers to use in
              day-to-day tasks. No registration required.
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => Router.push("/explore")}
                className="inline-flex text-white border-blue-600 border-2 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg"
              >
                Go to tools
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-6 h-6 ml-1"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
              <button onClick={() => Router.push("/toolsWiki")} className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                DevTools Wiki
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
