import React, { useState } from "react";
import Image from "next/image";
import Thanos from "../../../images/blog/bee/intro/4.jpg";
import BeepBoop from "../../../images/blog/bee/intro/1.gif";
import Grid1 from "../../../images/blog/bee/intro/2.gif";
import Grid2 from "../../../images/blog/bee/intro/3.gif";
import Confusion from "../../../images/blog/bee/intro/5.gif";
import Tv from "../../../images/blog/bee/intro/6.gif";
import Bulb from "../../../images/blog/bee/intro/7.gif";
import VIR from "../../../images/blog/bee/intro/9.png";
import Animation from "../../../images/blog/bee/intro/8.jpg";
import Sigma from "../../../images/blog/bee/intro/10.jpg";
import Graph from "../../../images/blog/bee/intro/11.png";

const quizQuestions = [
  {
    question: "What is the basic principle behind Ohm's Law?",
    options: ["V=IR", "P=VI", "F=ma", "E=mc^2"],
    answer: "V=IR",
  },
  {
    question: "Which of the following is an example of an electronic device?",
    options: ["Bulb", "Television", "Resistor", "Switch"],
    answer: "Television",
  },
  {
    question: "What does the 'I' in Ohm's Law stand for?",
    options: ["Inductance", "Impedance", "Current", "Voltage"],
    answer: "Current",
  },
  {
    question: "What is the unit of resistance?",
    options: ["Ohm", "Watt", "Volt", "Ampere"],
    answer: "Ohm",
  },
  {
    question: "Which of these is a non-Ohmic device?",
    options: ["Resistor", "Diode", "Capacitor", "Inductor"],
    answer: "Diode",
  },
];

const Intro = () => {
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
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Introduction</h1>
        </div>
      </div>

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
        <p>Hola Amigos!</p>
        <p>Zine welcomes you all to this wonderful world of Robotics.</p>
        <p className="mb-8">Y’all must be fascinated with robots like WALL-E, Optimus Prime, BayMax, and many more...</p>

        <div className="mt-8 text-center">
          <Image src={BeepBoop} />
        </div>

        <p className="my-8">Yeah, those above are robots!😃</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="col-span-1 text-center">
            <Image src={Grid1} />
          </div>
          <div className="col-span-1 text-center">
            <Image src={Grid2} />
          </div>
        </div>

        <p>And those too! 😅 The one on left is an obstacle-avoiding bot and the right one is a line follower bot.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-8 gap-16">
          <div className="col-span-1 md:col-span-1 lg:col-span-2">
            <p>Now you all must be curious to know how we build them?...</p>
          </div>
          <div className="col-span-1 lg:col-span-2 mx-auto">
            <Image src={Thanos} width={400} height={700} />
          </div>
        </div>

        <div className="grid grid-cols-7 gap-12 my-8">
          <div className="col-span-5">
            <p>Yes, yes, WiFi and Bluetooth don’t use wires at all but they aren’t exceptions guys, it’s just electronics doing telepathy. 😉</p>
            <p>Let's start with basics but first, do you know the difference between electrical and electronics?... Think! Try a little harder! Still not getting it? No problemo.</p>
          </div>
          <div className="col-span-2">
            <Image src={Confusion} />
          </div>
        </div>

        <p className="my-8">We’ll work this out with an activity. Consider a bulb and a television screen...</p>

        <div className="grid grid-cols-2 gap-8">
          <div className="col-span-1">
            <Image src={Tv} height={400} />
          </div>
          <div className="col-span-1">
            <Image src={Bulb} height={400} />
          </div>
        </div>

        <p className="my-8">Both bulbs and television do similar tasks of emitting light...</p>

        <h1 className="font-bold text-2xl my-8">Ohm's Law</h1>
        <div className="grid grid-cols-5 gap-8">
          <div className="col-span-3">
            <p>Ohm’s Law provides a mathematical relationship between Voltage, Current, and Resistance in a circuit.</p>
            <Image src={VIR} width={200} height={80} />
            <p>But we hope you know about another form of Ohm’s law too...</p>
          </div>
          <div className="col-span-2">
            <Image src={Animation} height={350} />
          </div>
        </div>

        <h1 className="font-bold text-2xl">Microscopic Ohm's Law-</h1>
        <div className="text-center">
          <Image src={Sigma} />
        </div>

        <p className="my-8">But do you know that Ohm’s Law is not always valid? 🤔...</p>
        <div className="grid grid-cols-6 gap-16">
          <div className="col-span-2">
            <p className="mt-8">Now that you know about the importance of electrical and electronics, it's time to find more about “The Power Stone of Robotics” and get it in our hands. So let’s go.</p>
          </div>
          <div className="col-span-4">
            <Image src={Graph} />
          </div>
        </div>
      </div>

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
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

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
        <h2 className="font-bold text-2xl my-8">Like</h2>
        <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleLike}>
          Like
        </button>
        <p>Likes: {likeCount}</p>
      </div>

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
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

export default Intro;
