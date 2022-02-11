import { oneDark } from "@codemirror/theme-one-dark";
import CodeMirror from "@uiw/react-codemirror";
import { python } from "@codemirror/lang-python";
import { javascript } from "@codemirror/lang-javascript";
import { go } from "@codemirror/legacy-modes/mode/go";
import { cpp } from "@codemirror/lang-cpp";
import { useRouter } from "next/router";
import { useState } from "react";
import { StreamLanguage } from "@codemirror/stream-parser";

export default function CodeEditor() {
  const router = useRouter();
  const { lang } = router.query;
  let starterCode = "";
  let lang_ext_func = "";
  if (
    lang != "python" &&
    lang != "javascript" &&
    lang != "go" &&
    lang != "cpp"
  ) {
    return (
      <h1 className="h-screen w-screen bg-gray-900 text-white">
        Error: Invalid language
      </h1>
    );
  } else if (lang == "python") {
    starterCode = `print("Hello World!")`;
    lang_ext_func = python();
  } else if (lang == "javascript") {
    starterCode = `console.log("Hello World!");`;
    lang_ext_func = javascript();
    console.log(lang_ext_func);
  } else if (lang == "go") {
    starterCode = `package main
import "fmt"
    
func main() {
    fmt.Println("Hello, world.")
}
    `;
    lang_ext_func = StreamLanguage.define(go);
  } else if (lang == "cpp") {
    starterCode = `#include <iostream>
using namespace std;
    
int main() {
    cout << "Hello World!";
    return 0;
}`;
    lang_ext_func = cpp();
  } else {
    return <h1 className="h-screen w-screen bg-gray-900 text-white">Error</h1>;
  }
  const theme = oneDark;

  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-24 mx-auto">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
            Code Editor
          </h1>
          <p className="mx-auto leading-relaxed items-start text-base comfortaa justify-start">
            This is a simple code editor. It doesn&apos;t have any fancy
            features but it&apos;s simplicity gets out of your way to quickly
            make changes. It also features a beautiful dark theme editor with
            syntax highlighting for code snippets. 
          </p>
          <div className="flex flex-wrap -mx-4 -mb-10">
            <CodeMirror
              value={starterCode}
              height="100vh"
              className="w-full h-full"
              theme={theme}
              extensions={[lang_ext_func]}
            />
          </div>
        </div>
      </section>
    </>
  );
}
