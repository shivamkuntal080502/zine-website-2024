import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import House from "../../../images/blog/bee/diodes/image1.png";
import Computer from "../../../images/blog/bee/diodes/comp.jpeg";
import Laptop from "../../../images/blog/bee/diodes/laptop.jpg";
import Diode from "../../../images/blog/bee/diodes/image14.png";
import SideAnode from "../../../images/blog/bee/diodes/image21.png";
import DiagramAnode from "../../../images/blog/bee/diodes/image27.png";
import Silicon from "../../../images/blog/bee/diodes/image18.jpg";
import Valence from "../../../images/blog/bee/diodes/image3.jpg";
import Unbiased from "../../../images/blog/bee/diodes/image6.png";
import DynamicGif from "../../../images/blog/bee/diodes/image2.gif";
import ForwardReversed from "../../../images/blog/bee/diodes/image25.png";
import ColorfulLeds from "../../../images/blog/bee/diodes/image5.png";
import Bulb from "../../../images/blog/bee/diodes/image15.png";
import QuestionLed from "../../../images/blog/bee/diodes/image22.jpg";
import FlatSpot from "../../../images/blog/bee/diodes/image4.png";
import MemeDiode from "../../../images/blog/bee/diodes/image42.png";
import PhotoDiode from "../../../images/blog/bee/diodes/image29.png";
import Yellow from "../../../images/blog/bee/diodes/image9.png";
import Blue from "../../../images/blog/bee/diodes/image8.png";
import Fat from "../../../images/blog/bee/diodes/image32.png";
import Thin from "../../../images/blog/bee/diodes/image31.png";
import Symbol from "../../../images/blog/bee/diodes/image33.png";
import CathodeAnode from "../../../images/blog/bee/diodes/image12.png";
import Graph from "../../../images/blog/bee/diodes/image20.png";
import Stabiliser from "../../../images/blog/bee/diodes/image26.png";
import ZenerDiagram from "../../../images/blog/bee/diodes/image11.png";
import HalfWave from "../../../images/blog/bee/diodes/image10.gif";
import FullWave from "../../../images/blog/bee/diodes/image36.png";
import ForwardBiased from "../../../images/blog/bee/diodes/image24.gif";
import ReverseBiased from "../../../images/blog/bee/diodes/image43.gif";
import FullWaveBridge from "../../../images/blog/bee/diodes/image30.gif";
import SolarCell from "../../../images/blog/bee/diodes/image28.png";
import VLTC from "../../../images/blog/bee/diodes/image7.png";
import SmallSolarCell from "../../../images/blog/bee/diodes/image37.png";
import SolarSystem from "../../../images/blog/bee/diodes/image39.png";
import OGSolarSystem from "../../../images/blog/bee/diodes/image38.gif";
import SolarDiagram from "../../../images/blog/bee/diodes/image16.gif";
import Crystalline from "../../../images/blog/bee/diodes/image40.png";
import Cylindrical from "../../../images/blog/bee/diodes/image35.png";
import LastImage from "../../../images/blog/bee/diodes/image13.png";

// Quiz Component
const Quiz = () => {
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);

  const questions = [
    {
      question: "What is the basic building block of all major electronic devices?",
      options: ["Resistor", "Capacitor", "Transistor", "Diode"],
      correctAnswer: "Diode",
    },
    {
      question: "Which type of semiconductor has holes as majority charge carriers?",
      options: ["N-type", "P-type", "Intrinsic", "Extrinsic"],
      correctAnswer: "P-type",
    },
    {
      question: "Which component is used to convert AC to DC?",
      options: ["Transformer", "Rectifier", "Inductor", "Capacitor"],
      correctAnswer: "Rectifier",
    },
    {
      question: "What is the function of a Zener diode?",
      options: ["Amplify current", "Emit light", "Regulate voltage", "Store charge"],
      correctAnswer: "Regulate voltage",
    },
    {
      question: "What principle does a photodiode work on?",
      options: ["Ohm's Law", "Photoelectric Effect", "Faraday's Law", "Joule's Law"],
      correctAnswer: "Photoelectric Effect",
    },
  ];

  const handleAnswer = (index, answer) => {
    setAnswers({ ...answers, [index]: answer });
  };

  const handleSubmit = () => {
    let newScore = 0;
    questions.forEach((question, index) => {
      if (answers[index] === question.correctAnswer) {
        newScore += 1;
      }
    });
    setScore(newScore);
  };

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold">Quiz</h2>
      {questions.map((question, index) => (
        <div key={index} className="my-4">
          <p>{question.question}</p>
          {question.options.map((option, i) => (
            <label key={i} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleAnswer(index, option)}
                className="mr-2"
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Submit
      </button>
      {score !== null && (
        <p className="mt-4">
          Your score is {score} out of {questions.length}
        </p>
      )}
    </div>
  );
};

// Like Button Component
const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="my-8">
      <button
        onClick={handleLike}
        className="bg-red-500 text-white py-2 px-4 rounded"
      >
        Like
      </button>
      <p className="mt-2">{likes} {likes === 1 ? 'Like' : 'Likes'}</p>
    </div>
  );
};

// Comment Section Component
const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = () => {
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div className="my-8">
      <h2 className="text-3xl font-bold">Comments</h2>
      <div className="my-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-2 border border-gray-300 rounded"
          rows="4"
          placeholder="Add a comment"
        ></textarea>
        <button
          onClick={handleCommentSubmit}
          className="bg-green-500 text-white py-2 px-4 rounded mt-2"
        >
          Submit
        </button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-300 py-2">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

const Diodes = () => {
  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Diodes</h1>
        </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
        <p>Look at the picture of a house and try to decode the basic structural unit of it.</p>

        <div className="text-center">
          <Image src={House} width={500} height={250} />
        </div>

        <p className="my-8">Yeah, guys! we know all of you know it's a brick. But what about these? Can you tell their smallest electronic component?</p>

        <div className="grid grid-cols-2 gap-16 mx-32">
          <Image src={Computer} width={200} height={150} />
          <Image src={Laptop} width={200} height={150} />
        </div>

        <p className="my-8">Yes! It’s a Diode...</p>
        
        <div className="text-center">
          <Image src={Diode} width={300} height={150} />
        </div>

        {/* ... (rest of your content) ... */}

        <Quiz />
        <LikeButton />
        <CommentSection />

      </div>
    </div>
  );
};

export default Diodes;
