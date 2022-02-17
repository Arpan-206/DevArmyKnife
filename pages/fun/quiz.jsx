import Link from "next/link";
import { useState } from "react";

export default function Quiz() {
  const [question, setQuestion] = useState("");
  function ifQuestion() {
    if (question === "") {
      return 0;
    } else {
      return 1;
    }
  }
  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
  }
  let options = [];
  if (ifQuestion() === 1) {
    question.incorrect_answers.forEach((option) => {
      options.push(option);
    });
    options.push(question.correct_answer);
    shuffleArray(options);
  }
  async function getQuestion() {
    const res = await fetch(
      "https://opentdb.com/api.php?amount=1&category=18&type=multiple"
    );
    let data = await res.json();
    setQuestion(data.results[0]);
    console.log(data.results[0]);
  }

  function checkAnswer(e) {
    if (e.target.value === question.correct_answer) {
      e.target.classList.remove("border-blue-500");
      e.target.classList.add("border-green-500");
    } else {
      e.target.classList.remove("border-blue-500");
      e.target.classList.add("border-red-500");
    }
  }

  function reset() {
    setQuestion("");
  }
  return (
    <>
      <section className="text-gray-400 bg-gray-900 body-font relative">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white anurati">
              Computer Science Trivia Quiz
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base comfortaa">
              An easy computer science trivia quiz. Powered by the{" "}
              <Link href="https://opentdb.com/">Open Trivia Database</Link>.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto border-gray-800 border-2">
            <div className="flex flex-wrap -m-2 p-6">
              <div className="w-full ">
                <h3
                  className="sm:text-2xl text-xl font-medium title-font mb-4 text-white text-center"
                  dangerouslySetInnerHTML={{
                    __html: question.question ? question.question : "",
                  }}
                />
              </div>
              {options.map((option) => {
                return (
                  <div key={option} className="p-2 w-full">
                    <button
                      value={option}
                      onClick={checkAnswer}
                      dangerouslySetInnerHTML={{
                        __html: decodeURIComponent(option),
                      }}
                      className="flex mx-auto w-full text-white border-blue-500 border-2 py-2 px-8 focus:outline-none hover:bg-blue-400 rounded text-lg"
                    ></button>
                  </div>
                );
              })}

              <div className="p-2 w-full">
                <button
                  onClick={getQuestion}
                  className="flex mx-auto text-white border-orange-500 border-2 py-2 px-8 focus:outline-none hover:bg-orange-400 rounded text-lg"
                >
                  {ifQuestion() === 0 ? "Start A Quiz" : "Next Question"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
