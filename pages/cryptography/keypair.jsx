import { generateKeyPairSync } from "crypto";

export async function getServerSideProps() {
  const keyPair = generateKeyPairSync("rsa", {
    modulusLength: 4096,
    publicKeyEncoding: {
      type: "spki",
      format: "pem",
    },
    privateKeyEncoding: {
      type: "pkcs8",
      format: "pem",
    },
  });
  const publicKey = keyPair.publicKey;
  const privateKey = keyPair.privateKey;
  return {
    props: {
      publicKey,
      privateKey,
    },
  };
}

export default function Keypair({ publicKey, privateKey }) {
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
              RSA Key Pair Generation
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base comfortaa justify-center">
              Generate a random RSA Keypair. <br /> <span className="text-red-800">Server Side Render Alert!</span>
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="PrivateKeyArea"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Private Key
                  </label>
                  <textarea
                    readOnly={true}
                    id="PrivateKeyArea"
                    name="PrivateKeyArea"
                    value={privateKey}
                    className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-yellow-500 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  ></textarea>
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label
                    htmlFor="PublicKeyArea"
                    className="leading-7 text-sm text-gray-400"
                  >
                    Public Key
                  </label>
                  <textarea
                    readOnly={true}
                    id="PublicKeyArea"
                    name="PublicKeyArea"
                    value={publicKey}
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
