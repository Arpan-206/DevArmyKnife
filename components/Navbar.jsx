import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
export default function Navbar() {
  return (
    <>
      <header className="text-gray-400 bg-gray-900 body-font">
        <div className="container-fluid mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="flex lg:w-2/5 flex-wrap items-center text-base md:ml-auto">
            <Link href="/">
              <a className="mr-5 hover:text-white">Home</a>
            </Link>
            <Link href="/toolsWiki">
              <a className="mr-5 hover:text-white">devTools Wiki</a>
            </Link>
            <Link href="https://dakdocs.hackersreboot.tech/">
              <a className="mr-5 hover:text-white">Docs</a>
            </Link>
            <Link href="https://hackersreboot.tech/">
              <a className="mr-5 hover:text-white">My Blog</a>
            </Link>
          </nav>
          <a
            href="/"
            className="flex order-first lg:order-none lg:w-1/5 title-font font-medium items-center text-white lg:items-center lg:justify-center mb-4 md:mb-0"
          >
            <>
              <Image
                height={75}
                width={75}
                src="/logo.svg"
                alt="logo"
                className="mx-3 rounded-lg"
              />
              <span
                className="ml-3 text-xl xl:block lg:hidden anurati"
                style={{ fontSize: 25 }}
              >
                Dev Army Knife
              </span>
            </>
          </a>
          <div className="lg:w-2/5 inline-flex lg:justify-end ml-5 lg:ml-0">
            <button
              onClick={() => Router.push("/explore")}
              className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
            >
              Explore
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4 h-4 ml-1"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7"></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}
