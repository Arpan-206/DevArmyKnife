const Barcode = require("react-barcode");
import { useState } from "react";

export default function BarCode() {
  const [value, setValue] = useState("Hello World!");

  let textValue = "";

  function handleChange(e) {
    textValue = e.target.value;
    if (textValue == "") {
      setValue("Hello World!");
    } else {
      setValue(textValue);
    }
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-center justify-start relative">
          <Barcode
            value={value}
            options={{
              background: "#ffff0f",
              lineColor: "#000f00",
            }}
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Generate Bar Code
          </h2>
          <p className="leading-relaxed mb-5 comfortaa">
            Enter the text you want to generate a Barcode for.
          </p>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 reFrontColor-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <p className="text-xs text-yellow-300 text-opacity-90 mt-3 comfortaa">
            Note:- This barcode code is generated from the text you have
            entered. We don&apos;t store any data. We don&apos;t know what is
            the text you have entered so we have no liability over anything
            generated using this tool.
          </p>
        </div>
      </div>
    </section>
  );
}
