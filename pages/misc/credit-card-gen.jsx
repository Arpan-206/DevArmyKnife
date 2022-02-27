import generateCardNumber from "../../lib/cc-gen";
import { useState } from "react";
import Image from "next/image";
export default function Home() {
  let cardType = "visa";
  const [cardNumber, setCardNumber] = useState(generateCardNumber(cardType));
  const [cardImg, setCardImg] = useState(`/images/cardLogos/${cardType}.svg`);
  function handleTypeChange(e) {
    const cardInput = e.target.value.toLowerCase();
    if (
      cardInput === "american-express" ||
      cardInput === "amex" ||
      cardInput === "american express" ||
      cardInput === "discover" ||
      cardInput === "mastercard" ||
      cardInput === "visa"
    ) {
      if (
        cardInput === "amex" ||
        cardInput === "american express" ||
        cardInput === "american-express"
      ) {
        cardType = "american-express";
      } else {
        cardType = cardInput;
      }
      document.getElementById("card-type-alert").classList.add("hidden");
    } else {
      document.getElementById("card-type-alert").classList.remove("hidden");
    }
  }

  function handleOnClick(e) {
    setCardNumber(generateCardNumber(cardType));
    setCardImg(`/images/cardLogos/${cardType}.svg`);
    document.getElementById("type").value = "";
  }
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
              Credit Card Generator
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base comfortaa">
              This tool is to help you create fake credit cards for testing.{" "}
              <br />
            </p>
            <div
              className="bg-orange-100 md:w-1/2 sm:w-full place-self-center border-l-4 border-orange-500 text-orange-700 p-4"
              role="alert"
            >
              <p className="font-bold text-justify">Warning!</p>
              <p className="text-justify">
                {" "}
                It is a purely random generator. We only check if the cards
                follow Luhn&apos;s Algorithm. These have good chances of turning
                out to be real world cards. We will not be responsible for any
                consequences that may unfold due to the use of this tool. If you
                want only test cards. Click{" "}
                <a
                  className="text-orange-600"
                  href="https://developer.paypal.com/api/nvp-soap/payflow/integration-guide/test-transactions/"
                >
                  here.
                </a>
              </p>
            </div>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    id="name"
                    name="name"
                    readOnly={true}
                    value={cardNumber}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <input
                    type="text"
                    id="type"
                    name="type"
                    defaultValue={cardType}
                    onChange={handleTypeChange}
                    className="w-2/3 bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                  <Image
                    width={50}
                    height={25}
                    className="inline"
                    src={cardImg}
                    alt="card-type"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button
                  onClick={handleOnClick}
                  className="flex mx-auto text-white bg-yellow-500 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                >
                  Generate
                </button>
              </div>
              <div
                id="card-type-alert"
                className="bg-yellow-100 hidden place-self-center w-full border border-yellow-400 text-yellow-700 px-4 py-3 rounded relative"
                role="alert"
              >
                <strong className="font-bold">Warning!</strong>
                <span className="block sm:inline text-justify">
                  {" "}
                  The Card type you entered is not valid. Valid types are:
                  <ul>
                    <li>Visa</li>
                    <li>Mastercard</li>
                    <li>American Express or AMEX</li>
                    <li>Discover</li>
                  </ul>
                </span>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
