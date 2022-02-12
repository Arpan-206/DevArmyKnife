const { createHmac } = require("crypto");
import { useState } from "react";
export default function HMAC() {
  const [algorithm, setAlgorithm] = useState("sha256");
  const [text, setText] = useState("");
  const [password, setPassword] = useState("Hello");
  let hash = "";
  if (text == "") {
    hash = "";
  } else {
    hash = createHmac(algorithm, password).update(text).digest("hex");
  }

  function handleOnChange(e) {
    setText(e.target.value);
  }

  function handleOnAlgorithmChange(e) {
    const providedAlgorithm = e.target.value.toLowerCase();
    if (providedAlgorithm == "" || providedAlgorithm == undefined) {
      setAlgorithm("sha256");
    } else if (providedAlgorithm == "sha256" || providedAlgorithm == "sha512") {
      setAlgorithm(providedAlgorithm);
    }
  }

  function handleOnPasswordChange(e) {
    setPassword(e.target.value);
  }
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
              HMAC
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base comfortaa justify-center">
              Enter the text you want to generate a HMAC for. <br /> Note: We
              only support sha256 and sha512 till now (more to be added soon).
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="message"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    onChange={handleOnChange}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="algorithm"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Algorithm
                  </label>
                  <input
                    id="algorithm"
                    name="algorithm"
                    defaultValue="sha256"
                    onChange={handleOnAlgorithmChange}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-1/2 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
                
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="passwordField"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Password
                  </label>
                  <input
                    id="passwordField"
                    name="PasswordField"
                    defaultValue={password}
                    onChange={handleOnPasswordChange}
                    type="password"
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-1/2 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></input>
                </div>
                
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="hashArea"
                    className="leading-7 text-sm text-gray-400"
                  >
                    HMAC
                  </label>
                  <textarea
                    readOnly={true}
                    id="hashArea"
                    name="hashArea"
                    value={hash}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
