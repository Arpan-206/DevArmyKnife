import Link from "next/link";
import { useState } from "react";

export default function Jokes() {
  const [joke, setJoke] = useState("");

  async function getJoke() {
    setJoke("Loading Joke...");
    const res = await fetch(
      `https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit`
    );
    const data = await res.json();
    setJoke(data.joke);
  }

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
              Programming Jokes
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base comfortaa">
              A fun little tool to get some nice programming jokes. Special thanks to the{" "}
              <Link href="https://sv443.net/jokeapi/v2/">Joke API.</Link>
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="joke"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Joke
                  </label>
                  <textarea
                    id="joke"
                    name="joke"
                    readOnly={true}
                    value={joke}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={getJoke}
                  className="flex mx-auto text-white border-red-500 border-4 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
                >
                  Get a Joke
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
