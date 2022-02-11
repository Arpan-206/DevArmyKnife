import Link from "next/link";

export default function Explore() {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-yellow-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0 anurati">
                Generators
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-64 pl-0">
                These are the generators for creating things like QR codes, barcodes etc.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/images/thumbnails/QR Code Generator.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                QR Code Generator
              </h2>
              <p className="text-base leading-relaxed mt-2">
                A simple QR code generator. You can also customize the colors of the QR code to your liking.
              </p>
              <Link href="/generators/qrcode">
                <a className="text-yellow-400 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/images/thumbnails/Bar Code Generator.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Bar Code Generator
              </h2>
              <p className="text-base leading-relaxed mt-2">
                A simple Bar code generator to help you create bar codes quickly
                and hassle-free.{" "}
              </p>
              <Link href="/generators/barcode">
                <a className="text-yellow-400 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-800 rounded overflow-hidden">
              <div className="w-24 h-full bg-yellow-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-white font-medium title-font text-2xl mb-2 sm:mb-0 anurati">
                Cryptography
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-64 pl-0">
                These are the tools related to cryptography like hashing, HMAC generation etc.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/images/thumbnails/Hash Generator.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                Hash Generator
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Utilise the power of SHA256 or SHA512 to generate hashes quickly and easily.
              </p>
              <Link href="/cryptography/hash">
                <a className="text-yellow-400 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
            <div className="p-4 md:w-1/2 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <img
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="/images/thumbnails/HMAC Generator.png"
                />
              </div>
              <h2 className="text-xl font-medium title-font text-white mt-5">
                HMAC Generator
              </h2>
              <p className="text-base leading-relaxed mt-2">
                A simple HMAC generator to help you create HMACs (Or Hash with a password) quickly and hassle-free using SHA256 and SHA512 algorithms.{" "}
              </p>
              <Link href="/cryptography/hmac">
                <a className="text-yellow-400 inline-flex items-center mt-3">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
