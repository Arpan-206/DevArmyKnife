import { marked } from "marked";
import { useState } from "react";
import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
import { languages } from "@codemirror/language-data";

export default function MarkdownEditor() {
  const [markdownText, setMarkdownText] = useState("# Hello World!");
  const parsedMarkdown = marked.parse(markdownText);

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container-fluid px-5 py-24 mx-auto">
          <div className="flex text-center w-full mb-2">
            <h1 className="sm:text-3xl text-2xl sm:w-full lg:w-1/2 font-medium title-font mb-4 text-white anurati">
              Markdown Editor
            </h1>
            <p className="lg:w-2/3 sm:w-full mx-auto leading-relaxed text-base justify-start comfortaa">
              This is a simple markdown editor. It doesn't have any fancy
              features but it's simplicity gets out of your way to quickly get a
              markdown preview and make changes. It also features a beautiful
              dark theme editor with syntax highlighting for code snippets.
            </p>
          </div>
          <div className="md:container-fluid md:mx-auto lg:columns-2 sm:columns-1">
            <CodeMirror
              value={markdownText}
              height="100vh"
              className="w-full h-full"
              theme={oneDark}
              extensions={[
                markdown({
                  base: markdownLanguage,
                  codeLanguages: languages,
                }),
              ]}
              onChange={(value, viewUpdate) => {
                // console.log('value:', value);
                setMarkdownText(value);
              }}
            />

            <div
              dangerouslySetInnerHTML={{ __html: parsedMarkdown }}
              className="w-full md-preview container-fluid overflow-auto"
              style={{ height: "100vh" }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
