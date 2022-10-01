import React from "react";
import { useState, useEffect } from "react";
import { questions } from "../utils/questions";

function Test() {
  questions.sort((a, b) => (a.order > b.order ? 1 : -1));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [finish, setFinish] = useState(false);

  const [questionStatus, setQuestionStatus] = useState(
    new Array(questions.length)
  );

  console.log(questionStatus);

  const handleSubmit = (index) => {
    let newArray = [...questionStatus]
    newArray[index] = "1"
    setQuestionStatus(newArray);
    if(index < 35) {
      setCurrentIndex(index + 1);
    }
  };

  useEffect(() => {
    let flag = true
    for (let i = 0; i < questions.length; i++) {
      if (questionStatus[i] !== "1") {
        flag = false;
      }
    }
    if (flag) {
      setFinish(true);
    }
  }, [currentIndex, questionStatus]);

  return (
    <div className="w-[50%] h-[60%] justify-self-center mt-40 px-3 py-1 border-2 rounded-lg bg-[#252d4a]">
      <div className="grid text-white">
        <div className="grid w-full">
          <div className="flex w-full justify-between">
            {[...Array(questions.length)].map((_, i) => {
              return (
                <div
                  class="bg-white rounded-full w-3 h-3"
                  onClick={() => setCurrentIndex(i)}
                ></div>
              );
            })}
          </div>

          <p>{currentIndex + 1 + ". " + questions[currentIndex].question}</p>
          {!finish ? (
            <button
              onClick={() => handleSubmit(currentIndex)}
              className="bg-red-600"
              disabled={currentIndex >= questions.length}
            >
              ANSWER
            </button>
          ) : (
            <button className="bg-blue-600">SUBMIT</button>
          )}
          <button
            onClick={() => setCurrentIndex(currentIndex + 1)}
            className="bg-cyan-300"
          >
            SKIP
          </button>
        </div>
      </div>
    </div>
  );
}

export default Test;
