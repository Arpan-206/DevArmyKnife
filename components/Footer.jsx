import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
          <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
            <Link
              href="/"
              className="flex title-font font-medium items-center md:justify-start justify-center text-white"
            >
              <>
                <img className="w-10 h-10 rounded-full" src="/logo.svg" />
                <span className="ml-3 text-xl anurati">Dev Army Knife</span>
              </>
            </Link>
            <p className="mt-2 text-sm text-gray-500 comfortaa">
              A toolkit of tools for developers.
            </p>
          </div>
          <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center comfortaa">
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                GENERATORS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/generators/qrcode" className="text-gray-400 hover:text-white">
                    QR Code Generator
                  </Link>
                </li>
                <li>
                  <Link href="/generators/barcode" className="text-gray-400 hover:text-white">
                    Barcode Generator
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CRYPTOGRAPHY
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/cryptography/hash" className="text-gray-400 hover:text-white">
                    Hash Generator
                  </Link>
                </li>
                <li>
                  <Link href="/cryptography/hmac" className="text-gray-400 hover:text-white">
                    HMAC Generator
                  </Link>
                </li>
                <li>
                  <Link href="/cryptography/keypair" className="text-gray-400 hover:text-white">
                    RSA Keypair Generator
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                CODE
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/code/markdown" className="text-gray-400 hover:text-white">
                    Markdown Editor
                  </Link>
                </li>
                <li>
                  <Link href="/code/python" className="text-gray-400 hover:text-white">
                    Code Editor
                  </Link>
                </li>
              </nav>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full px-4">
              <h2 className="title-font font-medium text-white tracking-widest text-sm mb-3">
                MISCELLANEOUS
              </h2>
              <nav className="list-none mb-10">
                <li>
                  <Link href="/misc/colorPicker" className="text-gray-400 hover:text-white">
                    Color Picker
                  </Link>
                </li>
                <li>
                  <Link href="/misc/image-compressor" className="text-gray-400 hover:text-white">
                    Image Compressor
                  </Link>
                </li>
              </nav>
            </div>
          </div>
        </div>
        <div className="bg-gray-800 bg-opacity-75">
          <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-400 text-sm text-center sm:text-left comfortaa">
              Made with <span className="text-red-700">♥</span> by Arpan Pandey
            </p>
            <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
              <a
                href="https://twitter.com/HackersReboot"
                className="ml-3 text-gray-400"
              >
                <svg
                  fill="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/arpan-pandey/"
                className="ml-3 text-gray-400"
              >
                <svg
                  fill="currentColor"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="0"
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="none"
                    d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                  ></path>
                  <circle cx="4" cy="4" r="2" stroke="none"></circle>
                </svg>
              </a>
              <a
                href="https://github.com/Arpan-206"
                className="ml-3 text-gray-400"
              >
                <svg
                  className="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  style={{ fill: "#e5e7eb" }}
                >
                  <path d="M32 6C17.641 6 6 17.641 6 32c0 12.277 8.512 22.56 19.955 25.286-.592-.141-1.179-.299-1.755-.479V50.85c0 0-.975.325-2.275.325-3.637 0-5.148-3.245-5.525-4.875-.229-.993-.827-1.934-1.469-2.509-.767-.684-1.126-.686-1.131-.92-.01-.491.658-.471.975-.471 1.625 0 2.857 1.729 3.429 2.623 1.417 2.207 2.938 2.577 3.721 2.577.975 0 1.817-.146 2.397-.426.268-1.888 1.108-3.57 2.478-4.774-6.097-1.219-10.4-4.716-10.4-10.4 0-2.928 1.175-5.619 3.133-7.792C19.333 23.641 19 22.494 19 20.625c0-1.235.086-2.751.65-4.225 0 0 3.708.026 7.205 3.338C28.469 19.268 30.196 19 32 19s3.531.268 5.145.738c3.497-3.312 7.205-3.338 7.205-3.338.567 1.474.65 2.99.65 4.225 0 2.015-.268 3.19-.432 3.697C46.466 26.475 47.6 29.124 47.6 32c0 5.684-4.303 9.181-10.4 10.4 1.628 1.43 2.6 3.513 2.6 5.85v8.557c-.576.181-1.162.338-1.755.479C49.488 54.56 58 44.277 58 32 58 17.641 46.359 6 32 6zM33.813 57.93C33.214 57.972 32.61 58 32 58 32.61 58 33.213 57.971 33.813 57.93zM37.786 57.346c-1.164.265-2.357.451-3.575.554C35.429 57.797 36.622 57.61 37.786 57.346zM32 58c-.61 0-1.214-.028-1.813-.07C30.787 57.971 31.39 58 32 58zM29.788 57.9c-1.217-.103-2.411-.289-3.574-.554C27.378 57.61 28.571 57.797 29.788 57.9z"></path>
                </svg>
              </a>
            </span>
          </div>
        </div>
      </footer>
    </>
  );
}
