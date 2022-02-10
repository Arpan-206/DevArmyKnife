import Image from "next/image";

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
            <p className="leading-relaxed mb-8 comfortaa justify-start">
              Introducing the Dev Army Knife, a toolkit for developers to do
              various tasks. Whether it may be a simple QR Code generation or
              editing a few lines of code without the editor, the Dev Army Knife
              is here to help you. Inspired by the Swiss Army Knife, this
              toolkit includes many useful tools for developers to use in
              day-to-day tasks. No registration required.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-yellow-600 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-700 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                Button
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
