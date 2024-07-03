import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import JackyChan from "../../../images/blog/algo/home/image1.jpg";
import ComputerUnderstands from "../../../images/blog/algo/home/image3.png";
import BigImage from "../../../images/blog/algo/home/image2.png";

const Intro = () => {
  const [quizAnswers, setQuizAnswers] = useState(Array(5).fill(null));
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleQuizChange = (index, value) => {
    const newAnswers = [...quizAnswers];
    newAnswers[index] = parseInt(value);
    setQuizAnswers(newAnswers);
  };

  const handleQuizSubmit = (e) => {
    e.preventDefault();
    setQuizSubmitted(true);
  };

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const quizQuestions = [
    {
      question: "What is an algorithm?",
      options: [
        "A programming language",
        "A step-by-step procedure to solve a problem",
        "A hardware component",
        "A software application",
      ],
      correctAnswer: 1,
    },
    {
      question: "Which of the following is NOT a characteristic of an algorithm?",
      options: ["Finite", "Definite", "Effective", "Ambiguous"],
      correctAnswer: 3,
    },
    {
      question: "What is Big O notation used for?",
      options: [
        "To measure the efficiency of an algorithm",
        "To write code",
        "To debug code",
        "To execute code",
      ],
      correctAnswer: 0,
    },
    {
      question: "Which sorting algorithm has the best average time complexity?",
      options: ["Bubble Sort", "Merge Sort", "Insertion Sort", "Selection Sort"],
      correctAnswer: 1,
    },
    {
      question: "What is the purpose of a flowchart?",
      options: [
        "To compile code",
        "To represent an algorithm visually",
        "To execute code",
        "To write pseudocode",
      ],
      correctAnswer: 1,
    },
  ];

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Introduction</h1>
        </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
        <div className="text-center my-8">
          <Image src={ComputerUnderstands} />
        </div>

        <p>
          Are you one of those who feel programming languages and algorithms are
          extremely hard to understand and you have no clue where to even start? Or you
          have a bit of an idea about them and want to expand your knowledge? Then you
          are in the right place. Grab a hot cup of coffee and enjoy an introduction to
          programming and algorithms and a peek behind the curtain on how they actually
          fall in place in our daily lives and in robotics. We will learn a lot about
          bits and bytes, flowcharts and pseudocode, programming and it’s various core
          constructs, and finally algorithms.
        </p>

        <div className="text-center my-8">
          <Image src={JackyChan} />
        </div>

        <p>
          Before all that, let us first understand why we should learn all this? What is
          the motivation behind all this?
        </p>

        <p className="my-8">
          Programming and algorithms are essential for everyone, across all fields. This
          will only be reemphasized as we move further. Some domains where they play a
          crucial part are Computational Statistics, Artificial Intelligence, Cloud
          Computing, Game Development, E-Commerce and Computer Vision.
        </p>

        <p>
          This is only a very small part of their applications. They are essential to so
          many other fields and hence it is necessary that everyone must know at least
          the basics of algorithm and programming. On that note, let’s dive right in.
        </p>

        <div className="text-center my-8">
          <Image src={BigImage} />
        </div>

        <p className="mb-8">
          Have you ever wondered how computers understand what we command them to do?
        </p>

        {/* Quiz Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold">Quiz: Algorithms in Programming</h2>
          <form onSubmit={handleQuizSubmit} className="my-4">
            {quizQuestions.map((q, index) => (
              <div key={index} className="mb-4">
                <p>{q.question}</p>
                {q.options.map((option, i) => (
                  <label key={i} className="block">
                    <input
                      type="radio"
                      name={`question-${index}`}
                      value={i}
                      onChange={(e) => handleQuizChange(index, e.target.value)}
                      disabled={quizSubmitted}
                    />
                    {option}
                  </label>
                ))}
              </div>
            ))}
            {!quizSubmitted && (
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
              >
                Submit Quiz
              </button>
            )}
          </form>
          {quizSubmitted && (
            <div>
              <h3 className="text-xl font-bold">Quiz Results</h3>
              <ul>
                {quizQuestions.map((q, index) => (
                  <li key={index}>
                    {q.question} - Your answer:{" "}
                    {quizAnswers[index] !== null
                      ? q.options[quizAnswers[index]]
                      : "Not answered"}{" "}
                    - {quizAnswers[index] === q.correctAnswer ? "Correct" : "Incorrect"}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Like Button */}
        <div className="my-8">
          <button
            onClick={handleLike}
            className="px-4 py-2 bg-green-500 text-white rounded"
          >
            Like ({likes})
          </button>
        </div>

        {/* Comment Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold">Comments</h2>
          <div className="space-y-4">
            {comments.map((comment, index) => (
              <div key={index} className="bg-gray-200 rounded-lg p-4">
                {comment}
              </div>
            ))}
          </div>

          <div className="my-8">
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              placeholder="Add a comment"
              className="w-full p-2 border border-gray-300 rounded"
            />
            <button
              onClick={handleCommentSubmit}
              className="px-4 py-2 bg-blue-500 text-white rounded mt-2"
            >
              Submit Comment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
