import Link from "next/link";
import { useState } from "react";

export default function Excuser() {
  let category = "";
  const [excuse, setExcuse] = useState("");
  const handleCatChange = (e) => {
    const catInput = e.target.value.toLowerCase();
    if (catInput === "" || catInput === "random") {
      category = "";
    } else if (catInput === "family") {
      category = catInput;
    } else if (catInput === "office") {
      category = catInput;
    } else if (catInput === "children") {
      category = catInput;
    } else if (catInput === "college") {
      category = catInput;
    } else if (catInput === "party") {
      category = catInput;
    }
  };

  async function getExcuse() {
    setExcuse("Loading Excuse...");
    const res = await fetch(
      "https://excuser.herokuapp.com/v1/excuse/" + category
    );
    const data = await res.json();
    setExcuse(data[0].excuse);
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
              Excuser
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base comfortaa">
              A fun little tool to help you make excuses. Special thanks to the{" "}
              <Link href="https://excuser.herokuapp.com/">Excuser API.</Link>
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
                    onChange={handleCatChange}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="excuse"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Excuse
                  </label>
                  <textarea
                    id="excuse"
                    name="excuse"
                    readOnly={true}
                    value={excuse}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={getExcuse}
                  className="flex mx-auto text-white border-blue-500 border-4 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Get Excuse
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
