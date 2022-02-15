const defaultEndpoint = `https://devwiki.deta.dev/`;

export async function getStaticProps() {
  const res = await fetch(defaultEndpoint);
  let data = await res.json();
  data = data["_items"];
  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 anurati text-white">
            DevTools Wiki
          </h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-justify text-opacity-80 comfortaa">
            This is a simple wiki for developers. It lists various tools and
            frameworks that are used in the development process and points you
            to resources that can be used to learn them.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {data.map((tool) => {
            return (
              <div key={tool.key} className="p-4 lg:w-1/3">
                <div className="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                    {tool.tags}
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-white mb-3 anurati">
                    {tool.name}
                  </h1>
                  <p className="leading-relaxed text-justify mb-3 comfortaa">{tool.description}</p>
                  <a
                    className="text-yellow-400 inline-flex items-center"
                    href={tool.url}
                  >
                    Learn More
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
