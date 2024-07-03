import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import ArduinoFace from "../../../images/blog/algo/arduino/image2.gif";
import ManyArduino from "../../../images/blog/algo/arduino/image4.jpg";
import Image3 from "../../../images/blog/algo/arduino/image3.png";
import HappyCoding from "../../../images/blog/algo/arduino/image1.png";

const quizQuestions = [
  {
    question: "What is Arduino?",
    options: [
      "A type of microcontroller",
      "A programming language",
      "A software development tool",
      "A manufacturer of development boards"
    ],
    answer: "A manufacturer of development boards",
  },
  {
    question: "Which IDE is used to program Arduino?",
    options: [
      "Visual Studio",
      "Arduino IDE",
      "Code::Blocks",
      "Eclipse"
    ],
    answer: "Arduino IDE",
  },
  {
    question: "What are the basic movement capabilities of the robot?",
    options: [
      "Can move sideways",
      "Can only run front and back",
      "Can fly",
      "Can teleport"
    ],
    answer: "Can only run front and back",
  },
  {
    question: "What angles can the robot turn?",
    options: [
      "15, 30, 45 degrees",
      "45, 90, 180 degrees",
      "90, 180, 270, 360 degrees",
      "Any angle"
    ],
    answer: "90, 180, 270, 360 degrees",
  },
  {
    question: "How should the robot navigate the warzone?",
    options: [
      "Fly over it",
      "Navigate each and every path",
      "Move in a straight line",
      "Move randomly"
    ],
    answer: "Navigate each and every path",
  }
];

const Arduino = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim()) {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  const handleQuizAnswer = (index, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [index]: answer,
    });
  };

  const handleSubmitQuiz = () => {
    let score = 0;
    quizQuestions.forEach((question, index) => {
      if (quizAnswers[index] === question.answer) {
        score += 1;
      }
    });
    setQuizResult(`Your score is ${score} out of ${quizQuestions.length}`);
  };

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Arduino and PS</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <p className="my-8">
          Throughout this journey, you learned a lot about bits and bytes,
          flowcharts and pseudocode, programming and it’s various core
          constructs, and finally algorithms. Well, we hope you did. Before
          wrapping up, there’s one very important thing that remains. How does
          all this fall in place in robotics? Why does a robotics enthusiast
          actually require algorithms and pseudocode along with everything else
          you have studied?
        </p>

        <p>
          Now the applications of algorithms and pseudocodes in robotics are too
          vast to even list. However, we shall take a small peek at one
          particular one. The first love of every robotics aficionado, welcome
          to the world of Arduino!
        </p>

        <div className="text-center my-8">
          <Image src={ArduinoFace} />
        </div>

        <p>
          What is this Arduino, then? Arduino is actually the name of a
          manufacturer of programmable development boards. However, generally,
          the boards themselves are referred to as “Arduino”. Take a look at
          various types of Arduino boards.
        </p>

        <div className="text-center my-8 mx-32">
          <Image src={ManyArduino} />
        </div>

        <p>
          Think of them being like the brain of the robot. We program this brain
          to work as we want it to. This is done with the help of the Arduino
          IDE. We will learn to use Arduino in our upcoming blogs.
        </p>
        <p className="font-bold">
          With this, we have reached the end of this blog. Hope you enjoyed it!
          We’ll wrap it up with a question.
        </p>

        <h1 className="text-2xl font-bold my-8">PROBLEM STATEMENT</h1>

        <p>
          Now is the time to do the real brainstorming, your robot is stuck in a
          warzone and has to return to you after navigating the whole area of
          your enemy. It has the following features:-
        </p>

        <p className="mt-8">
          1. It can sense where the paths are(right, left, front, etc).
        </p>
        <p>2. It can make turns of (90,180,270,360) degrees only. ( both left and right turn).</p>
        <p>3. It can run front and back only. (no sideways movement).</p>

        <p className="my-8">The warzone is shown in the image:-</p>

        <div className="text-center my-8">
          <Image src={Image3} />
        </div>

        <p>
          The robot is in the square-shaped box and has to return to the circle
          after navigating each and every path i.e.- it has to visit every node.
        </p>

        <p className="my-8">
          Using the full use of the features that your robot possesses, write a
          pseudocode/algorithm and submit your answer attached.
        </p>

        <p>
          However, we have tried our best to avoid using any coding language in
          this blog but in some parts, it was necessary to give examples using
          one language. C has been used as the default language as it is widely
          used in universities for their first-year course.
        </p>

        <div className="text-center my-8">
          <Image src={HappyCoding} />
        </div>

        <p className="border-2 border-solid border-black px-4 my-8">
          Mail your assignment answers to zine.nitj@gmail.com and contact us in
          communication channel with doubts.
        </p>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <h2 className="font-bold text-2xl my-8">Quiz</h2>
        {quizQuestions.map((question, index) => (
          <div key={index} className="my-4">
            <p>{question.question}</p>
            {question.options.map((option) => (
              <div key={option}>
                <label>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleQuizAnswer(index, option)}
                  />
                  {option}
                </label>
              </div>
            ))}
          </div>
        ))}
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleSubmitQuiz}>
          Submit Quiz
        </button>
        {quizResult && <p className="mt-4">{quizResult}</p>}
      </div>

      <div className="mx-32 mt-8 text-lg">
        <h2 className="font-bold text-2xl my-8">Like</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLike}>
          Like
        </button>
        <p>Likes: {likeCount}</p>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <h2 className="font-bold text-2xl my-8">Comments</h2>
        <div className="my-4">
          <input
            type="text"
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="border rounded w-full py-2 px-3"
            placeholder="Write a comment..."
          />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mt-2" onClick={handleAddComment}>
            Add Comment
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <p key={index} className="border-b py-2">{comment}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Arduino;
