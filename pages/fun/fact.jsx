import Link from "next/link";
import { useState } from "react";

export default function FunFact() {
  const [fact, setFact] = useState("");
  const [category, setCategory] = useState("");
  async function getFact() {
    setFact("Loading Fun Fact...");
    const res = await fetch(`https://asli-fun-fact-api.herokuapp.com/`);
    const data = await res.json();
    if (data.status == true) {
      setCategory(data.data.cat);
      setFact(data.data.fact);
    } else {
      getFact();
    }
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
              Fun Facts
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base comfortaa">
              A fun little tool to get some random fun facts. Special thanks to
              the{" "}
              <Link href="https://asli-fun-fact-api.herokuapp.com/">
                Asli Fun Fact API.
              </Link>
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="category"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Category
                  </label>
                  <input
                    type="text"
                    id="category"
                    name="category"
                    readOnly={true}
                    value={category}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="fact"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Fun Fact
                  </label>
                  <textarea
                    id="fact"
                    name="fact"
                    readOnly={true}
                    value={fact}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={getFact}
                  className="flex mx-auto text-white border-green-500 border-4 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg"
                >
                  Get a Fun Fact
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
