import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import FirstImage from "../../../images/blog/bee/instruments/image5.gif";
import DoctorStrange from "../../../images/blog/bee/instruments/image9.gif";
import Soldering from "../../../images/blog/bee/instruments/image24.gif";
import SolderingIron from "../../../images/blog/bee/instruments/image10.jpg";
import Wireless from "../../../images/blog/bee/instruments/image4.png";
import Cordless from "../../../images/blog/bee/instruments/image22.png";
import WireSpool from "../../../images/blog/bee/instruments/image18.png";
import Flux from "../../../images/blog/bee/instruments/image7.jpg";
import WithoutFlux from "../../../images/blog/bee/instruments/image16.gif";
import WithFlux from "../../../images/blog/bee/instruments/image2.gif";
import Microscopic from "../../../images/blog/bee/instruments/image12.png";
import Meme from "../../../images/blog/bee/instruments/image13.png";
import BreadBoard from "../../../images/blog/bee/instruments/image19.png";
import BreadBoard1 from "../../../images/blog/bee/instruments/image3.png";
import BreadBoard2 from "../../../images/blog/bee/instruments/image11.png";
import BreadBoard3 from "../../../images/blog/bee/instruments/image17.png";
import StripBoard from "../../../images/blog/bee/instruments/image20.jpg";
import ConnectedStripBoard from "../../../images/blog/bee/instruments/image21.png";
import PCB from "../../../images/blog/bee/instruments/image8.png";
import PCBStructure from "../../../images/blog/bee/instruments/image23.png";
import Multimeter from "../../../images/blog/bee/instruments/image14.jpg";
import WorkingMultimeter from "../../../images/blog/bee/instruments/image6.gif";
import SimpleMultimeter from "../../../images/blog/bee/instruments/image15.png";
import Label from "../../../images/blog/bee/instruments/image1.png";

const Instruments = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleAnswerChange = (question, answer) => {
    setQuizAnswers({ ...quizAnswers, [question]: answer });
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
  };

  const handleCommentChange = (e) => {
    setComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  const questions = [
    {
      question: "What is the primary use of a soldering iron?",
      options: ["Cutting wires", "Heating metal", "Melting solder", "Drilling holes"],
      answer: "Melting solder"
    },
    {
      question: "Which component is used to remove oxide layers during soldering?",
      options: ["Solder", "Flux", "Wire", "Iron"],
      answer: "Flux"
    },
    {
      question: "What is a multimeter primarily used for?",
      options: ["Painting", "Measuring electrical values", "Heating", "Cutting"],
      answer: "Measuring electrical values"
    },
    {
      question: "Which of the following is not a type of circuit board?",
      options: ["Breadboard", "Stripboard", "PCB", "Motherboard"],
      answer: "Motherboard"
    },
    {
      question: "What is the substrate in a PCB?",
      options: ["A conductive material", "An insulating base", "A chemical", "A soldering tool"],
      answer: "An insulating base"
    }
  ];

  const renderQuiz = () => (
    <div className="quiz">
      <h2 className="text-2xl my-8">Quiz on Electric Instruments</h2>
      {questions.map((q, index) => (
        <div key={index} className="my-4">
          <p>{q.question}</p>
          {q.options.map((option) => (
            <div key={option}>
              <input
                type="radio"
                name={q.question}
                value={option}
                onChange={() => handleAnswerChange(q.question, option)}
              />
              <label className="ml-2">{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleSubmitQuiz} className="bg-blue-500 text-white px-4 py-2 my-4">Submit Quiz</button>
      {showResults && (
        <div className="results">
          <h3 className="text-xl my-4">Results:</h3>
          {questions.map((q, index) => (
            <div key={index}>
              <p>{q.question}</p>
              <p className="ml-4">
                Your answer: {quizAnswers[q.question]} {quizAnswers[q.question] === q.answer ? "✔️" : `❌ (Correct: ${q.answer})`}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const renderComments = () => (
    <div className="comments my-8">
      <h2 className="text-2xl">Comments</h2>
      <form onSubmit={handleCommentSubmit} className="my-4">
        <textarea
          value={comment}
          onChange={handleCommentChange}
          className="w-full p-2 border border-gray-400"
          rows="4"
          placeholder="Add your comment here..."
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Submit</button>
      </form>
      <div className="comment-list my-4">
        {comments.map((com, index) => (
          <div key={index} className="my-2 p-2 border border-gray-300">
            {com}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Instruments</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <p className="my-8">Now we are towards the end of our blogs on the heart of robotics. In this blog you are going to learn about various instruments which you are going to use to make your little robots ready for a fight in the arena.</p>

        <div className="text-center my-8">
          <Image src={FirstImage} alt="First Image" />
        </div>

        <p>Let's start with how to make joints.</p>

        <div className="text-center my-8">
          <Image src={DoctorStrange} alt="Doctor Strange" />
        </div>

        <p>In electronics, joints are made with the help of a process called soldering. Let’s dive to make joints, soldering joints 😏.</p>

        <h1 className="text-3xl my-8">Soldering</h1>
        <p>Rome was not built in a day and so weren’t our exciting robots which crushed every competitor in every competition they participated in. The controlling unit of our robots consists of various electronic components and combining them magically requires an elder wand and a magical fuel which is known as “Soldering Iron” and “solder” respectively in the Geek circle.</p>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <p>Various components have to be joined via a conductive link and in our case, the solder does the job, it is a highly conductive material with a low melting point.</p>
            <p>The process in which two or more items are joined together (electronic components and boards) by melting and putting a filler metal also known as solder into the joint, the filler metal having a lower melting point than the adjoining metal i.e terminals of component or Circuit board is called Soldering.</p>
          </div>
          <div className="col-span-1 text-center">
            <Image src={Soldering} alt="Soldering" />
          </div>
        </div>

        <p className="my-8">Ok, moving to what soldering iron is and what it can do?</p>

        <h1 className="text-3xl my-8">Soldering iron</h1>
        <div className="text-center my-8 mx-32">
          <Image src={SolderingIron} alt="Soldering Iron" />
        </div>

        <p>A soldering iron is a hand tool used in soldering. It supplies heat to melt solder so that it can flow into the joint between two workpieces. A soldering iron is composed of a heated metal tip and an insulated handle.</p>

        <div className="grid grid-cols-2">
          <div className="col-span-1 text-center my-8 mx-32">
            <Image src={Wireless} alt="Wireless" />
          </div>
          <div className="col-span-1 text-center my-8 mx-32">
            <Image src={Cordless} alt="Cordless" />
          </div>
        </div>

        <p className="my-8">The soldering iron is heated with the help of an electric supply or some wires are used which are heated with the help of fuel. Let's discuss those different types of soldering irons.</p>

        <h1 className="text-3xl my-8">Types of Soldering Irons</h1>
        <p>There are 4 types of soldering irons:</p>
        <ol className="list-decimal ml-8">
          <li>Electric Soldering Irons: Most commonly used soldering irons, consist of a handle and a metal rod with a pointed tip that is heated by passing electricity through a resistive heating element.</li>
          <li>Gas Soldering Irons: These irons use a small tank of gas as fuel to heat the tip. They are portable and can be used where electricity is not available.</li>
          <li>Butane Soldering Irons: Similar to gas soldering irons, these use butane gas to heat the tip. They are also portable and have a higher heat output than electric soldering irons.</li>
          <li>Battery-Operated Soldering Irons: These are cordless soldering irons that use batteries as their power source. They are very portable and easy to use, but their heat output is generally lower compared to other types of soldering irons.</li>
        </ol>

        <div className="text-center my-8">
          <Image src={WireSpool} alt="Wire Spool" />
        </div>

        <p>Now that we know about soldering irons, let's talk about another important component in the soldering process: flux.</p>

        <h1 className="text-3xl my-8">Flux</h1>
        <p>Flux is a chemical cleaning agent, flowing agent, or purifying agent. Fluxes are used in soldering to remove oxidation from the metals to be joined and to help the molten solder flow more easily.</p>

        <div className="text-center my-8">
          <Image src={Flux} alt="Flux" />
        </div>

        <p>Fluxes are used for:</p>
        <ul className="list-disc ml-8">
          <li>Removing oxidation from the surfaces to be soldered.</li>
          <li>Preventing oxidation during soldering.</li>
          <li>Improving the wetting properties of the molten solder.</li>
        </ul>

        <div className="grid grid-cols-2">
          <div className="col-span-1 text-center my-8">
            <Image src={WithoutFlux} alt="Without Flux" />
          </div>
          <div className="col-span-1 text-center my-8">
            <Image src={WithFlux} alt="With Flux" />
          </div>
        </div>

        <p className="my-8">Now that we know about soldering and flux, let's talk about the different types of boards on which we can solder components.</p>

        <h1 className="text-3xl my-8">Types of Boards</h1>
        <p>There are three main types of boards:</p>
        <ol className="list-decimal ml-8">
          <li>Breadboards</li>
          <li>Stripboards</li>
          <li>Printed Circuit Boards (PCBs)</li>
        </ol>

        <h2 className="text-2xl my-8">Breadboards</h2>
        <p>Breadboards are used for prototyping electronic circuits. They allow for quick and easy assembly and disassembly of circuits. Breadboards do not require soldering, which makes them reusable.</p>

        <div className="text-center my-8">
          <Image src={BreadBoard} alt="Breadboard" />
        </div>

        <h2 className="text-2xl my-8">Stripboards</h2>
        <p>Stripboards are used for constructing electronic circuits. They consist of a grid of holes with strips of conductive material on one side. Components are inserted through the holes and connected by soldering to the strips.</p>

        <div className="text-center my-8">
          <Image src={StripBoard} alt="Stripboard" />
        </div>

        <h2 className="text-2xl my-8">Printed Circuit Boards (PCBs)</h2>
        <p>PCBs are used to mechanically support and electrically connect electronic components. They consist of a non-conductive substrate with layers of conductive traces. Components are soldered onto the PCB to create a complete circuit.</p>

        <div className="text-center my-8">
          <Image src={PCB} alt="PCB" />
        </div>

        <div className="text-center my-8">
          <Image src={PCBStructure} alt="PCB Structure" />
        </div>

        <h1 className="text-3xl my-8">Multimeters</h1>
        <p>A multimeter is an electronic measuring instrument that combines several measurement functions in one unit. A typical multimeter can measure voltage, current, and resistance.</p>

        <div className="text-center my-8">
          <Image src={Multimeter} alt="Multimeter" />
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1 text-center my-8">
            <Image src={WorkingMultimeter} alt="Working Multimeter" />
          </div>
          <div className="col-span-1 text-center my-8">
            <Image src={SimpleMultimeter} alt="Simple Multimeter" />
          </div>
        </div>

        <h2 className="text-2xl my-8">Uses of Multimeters</h2>
        <p>Multimeters are used for:</p>
        <ul className="list-disc ml-8">
          <li>Measuring the voltage in a circuit.</li>
          <li>Measuring the current flowing through a circuit.</li>
          <li>Measuring the resistance of a component.</li>
          <li>Testing for continuity in a circuit.</li>
        </ul>

        <div className="text-center my-8">
          <Image src={Label} alt="Label" />
        </div>

        <div className="text-center my-8">
          <button onClick={handleLike} className="bg-red-500 text-white px-4 py-2">
            Like {likeCount}
          </button>
        </div>

        {renderQuiz()}
        {renderComments()}

        <div className="my-8">
          <p>Hope you enjoyed this journey of learning about electric instruments. Stay tuned for more exciting content!</p>
        </div>
      </div>
    </div>
  );
};

export default Instruments;
