import { useQRCode } from "next-qrcode";
import { useState } from "react";

export default function QRCode() {
  const defaultFrontColor = "#e53170";
  const defaultBackColor = "#0f0e17";

  const { Image: QRImage } = useQRCode();
  const [value, setValue] = useState("Hello World!");
  const [frontColor, setFrontColor] = useState(defaultFrontColor);
  const [backColor, setBackColor] = useState(defaultBackColor);

  let textValue = "";

  function isHex(str) {
    const regexp = /^[0-9a-fA-F]+$/;

    if (regexp.test(str)) {
      return true;
    } else {
      return false;
    }
  }

  function handleChange(e) {
    textValue = e.target.value;
    if (textValue == "") {
      setValue("Hello World!");
    } else {
      setValue(textValue);
    }
  }

  function handleFrontColor(e) {
    if (e.target.value == "") {
      setFrontColor(defaultFrontColor);
    } else if (isHex(e.target.value)) {
      setFrontColor(e.target.value);
    } else {
      setFrontColor(defaultFrontColor);
    }
  }
  function handleBackColor(e) {
    if (e.target.value == "") {
      setBackColor(defaultBackColor);
    } else if (isHex(e.target.value)) {
      setBackColor(e.target.value);
    } else {
      setBackColor(defaultBackColor);
    }
  }

  return (
    <section className="text-gray-400 bg-gray-900 body-font relative">
      <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <QRImage
            text={value}
            options={{
              type: "image/jpeg",
              quality: 1,
              level: "M",
              margin: 3,
              scale: 4,
              width: 500,
              color: {
                dark: frontColor,
                light: backColor,
              },
            }}
            className="absolute inset-0 w-full h-full"
          />
        </div>
        <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="text-white text-lg mb-1 font-medium title-font">
            Generate QR Code
          </h2>
          <p className="leading-relaxed mb-5">
            Enter the text you want to generate a QR code for.
          </p>
          <div className="relative mb-4">
            <label for="message" className="leading-7 text-sm text-gray-400">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              onChange={handleChange}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 reFrontColor-none leading-6 transition-colors duration-200 ease-in-out"
            ></textarea>
          </div>
          <div className="relative mb-4">
            <label for="FrontColor" className="leading-7 text-sm text-gray-400">
              Front Color (Without #)
            </label>
            <input
              id="FrontColor"
              name="FrontColor"
              type="text"
              onClick={handleFrontColor}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-16 outline-none text-gray-100 py-1 px-3 reFrontColor-none leading-6 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <div className="relative mb-4">
            <label for="BackColor" className="leading-7 text-sm text-gray-400">
              Back Color (Without #)
            </label>
            <input
              id="BackColor"
              name="BackColor"
              type="text"
              onClick={handleBackColor}
              className="w-full bg-gray-800 rounded border border-gray-700 focus:border-yellow-500 focus:ring-2 focus:ring-yellow-900 h-16 outline-none text-gray-100 py-1 px-3 reFrontColor-none leading-6 transition-colors duration-200 ease-in-out"
            ></input>
          </div>
          <p className="text-xs text-yellow-300 text-opacity-90 mt-3">
            Note:- This QR code is generated from the text you have entered. We
            don't store any data. We don't know what is the text you have
            entered so we have no liability over anything generated using this
            tool.
          </p>
        </div>
      </div>
    </section>
  );
}
