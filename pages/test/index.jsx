import React, { useState, useEffect } from "react";
import BookMarkIcon from "../../components/icons/BookMarkIcon";

import ItemTest from "../../components/test/ItemTest";
import { testsData } from "../../data/data";
function TestPage() {
  const [witchQuestion, setWitchQuestion] = useState(0);

  const [questions, setQuestions] = useState(testsData);
  // const buildItemsQuestions=new Array(testsData.length).

  // status for every question
  // answered
  // reminder
  // nothing
  // { number: item.number, status: "noting", correct: "", answer: "" };

  function changeQuestion(value) {
    let newTest = witchQuestion + value;
    if (newTest >= 0 && newTest <= 60) {
      setWitchQuestion(newTest);
    }
  }
  function changeCertainQuestion(value) {
    setWitchQuestion(value);
  }

  function choiceStyle(value) {
    if (questions[value].answer && value == witchQuestion) {
      return "bg-ciGreen  -translate-y-1 ";
    }
    if (questions[value].answer) {
      return "bg-ciGreen  ";
    }
    if (value == witchQuestion) {
      return "bg-ciForeground shadow-lg  ";
    } else {
      return "bg-gray-300";
    }
  }

  function selectAnsQuestion(answer, indexQuestion) {
    let newQuestion = [...questions];
    newQuestion[indexQuestion] = {
      ...newQuestion[indexQuestion],
      answer: answer,
    };
    setQuestions(newQuestion);
  }

  function deletedAnsQuestion(indexQuestion) {
    let newQuestion = [...questions];
    newQuestion[indexQuestion] = {
      ...newQuestion[indexQuestion],
      answer: "",
    };
    setQuestions(newQuestion);
  }

  function bookedAnsQuestion(indexQuestion) {
    let newQuestion = [...questions];

    if (newQuestion[indexQuestion].booked) {
      newQuestion[indexQuestion] = {
        ...newQuestion[indexQuestion],
        booked: false,
      };
    } else {
      newQuestion[indexQuestion] = {
        ...newQuestion[indexQuestion],
        booked: true,
      };
    }
    console.log("newQuestion", newQuestion);
    setQuestions(newQuestion);
  }

  return (
    <div className=" min-h-screen bg-ciBackground p-4 relative flex flex-col items-center ">
      <p className="absolute right-0   top-0 p-4 text-ciTiter ">
        آزمون عمران اجرا اردیبهشت 97
      </p>
      <div className="absolute left-0 top-0 text-ciTiter flex p-4">
        <p className="ml-4">زمان باقی مانده :</p>
        <p className="text-ciForeground font-bold">2:54:36</p>
      </div>
      <div
        className="  mt-8 w-full flex  flex-wrap gap-1 p-4"
        style={{ direction: "ltr" }}
      >
        {questions.map((item, index) => (
          <span
            onClick={() => changeCertainQuestion(index)}
            key={index}
            className={`${choiceStyle(
              index
            )} relative w-6 h-6 rounded-lg flex justify-center items-center text-xs font-bold cursor-pointer active:scale-90 duration-100`}
          >
            {index + 1}
            {item.booked && (
              <span className="absolute -top-4 flex left-0 right-0 justify-center">
                <BookMarkIcon className="fill-ciOrange w-3 h-3 " />
              </span>
            )}
          </span>
        ))}
      </div>

      <div className="mt-6">
        <ItemTest
          data={questions[witchQuestion]}
          indexQuestion={witchQuestion}
          changeQuestion={changeQuestion}
          deletedAnsQuestion={deletedAnsQuestion}
          selectAnsQuestion={selectAnsQuestion}
          bookedAnsQuestion={bookedAnsQuestion}
        />
      </div>
    </div>
  );
}

export default TestPage;
