import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import FirstImage from "../../../images/blog/bee/wires/image18.gif";
import Toden from "../../../images/blog/bee/wires/image20.png";
import SolidStranded from "../../../images/blog/bee/wires/image14.jpg";
import MemeBreadBoard from "../../../images/blog/bee/wires/image9.jpg";
import MultiCoreWires from "../../../images/blog/bee/wires/image3.png";
import VideoGames from "../../../images/blog/bee/wires/image8.gif";
import CoAxialCable from "../../../images/blog/bee/wires/image13.jpg";
import Makeup from "../../../images/blog/bee/wires/image17.gif";
import NonMetallic from "../../../images/blog/bee/wires/image4.jpg";
import FourWires from "../../../images/blog/bee/wires/image19.jpg";
import TwistedMeme from "../../../images/blog/bee/wires/image1.gif";
import TwistedCable from "../../../images/blog/bee/wires/image12.jpg";
import RibbonCable from "../../../images/blog/bee/wires/image11.jpg";
import Ofc from "../../../images/blog/bee/wires/image6.jpg";
import GlassOfc from "../../../images/blog/bee/wires/image2.gif";
import Drumroll from "../../../images/blog/bee/wires/image21.gif";
import JumperWires from "../../../images/blog/bee/wires/image16.jpg";
import Connection from "../../../images/blog/bee/wires/image15.png";
import FtoF from "../../../images/blog/bee/wires/image5.png";
import MtoM from "../../../images/blog/bee/wires/image10.png";
import MtoF from "../../../images/blog/bee/wires/image22.png";

const Quiz = () => {
  const questions = [
    {
      question: "What is the primary use of single-core wires?",
      options: [
        "Connecting large machines",
        "Household appliances",
        "Ethernet systems",
        "Optical fibre communication",
      ],
      answer: "Household appliances",
    },
    {
      question: "Which type of wire is used for Ethernet and telephone systems?",
      options: [
        "Single-core wires",
        "Multi-core wires",
        "Coaxial cable",
        "Twisted pair cable",
      ],
      answer: "Twisted pair cable",
    },
    {
      question: "What phenomenon does Optical Fibre Cable utilize?",
      options: [
        "Electromagnetic shielding",
        "Total Internal Reflection",
        "Parallel wiring",
        "Magnetic field cancellation",
      ],
      answer: "Total Internal Reflection",
    },
    {
      question: "Which type of wire is commonly known as Romex?",
      options: [
        "Coaxial cable",
        "Twisted pair cable",
        "Non-metallic sheathed cable",
        "Ribbon cable",
      ],
      answer: "Non-metallic sheathed cable",
    },
    {
      question: "Which wire type is preferred for breadboard circuits?",
      options: [
        "Single-core wires",
        "Multi-core wires",
        "Ribbon cables",
        "Jumper wires",
      ],
      answer: "Single-core wires",
    },
  ];

  const [userAnswers, setUserAnswers] = useState(Array(questions.length).fill(""));
  const [showResults, setShowResults] = useState(false);

  const handleAnswerChange = (index, answer) => {
    const newUserAnswers = [...userAnswers];
    newUserAnswers[index] = answer;
    setUserAnswers(newUserAnswers);
  };

  const handleSubmit = () => {
    setShowResults(true);
  };

  return (
    <div className="quiz-section my-8">
      <h2 className="text-2xl mb-4">Quiz on Wires</h2>
      {questions.map((question, index) => (
        <div key={index} className="my-4">
          <p>{question.question}</p>
          {question.options.map((option) => (
            <label key={option} className="block">
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleAnswerChange(index, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}
      <button onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4">
        Submit
      </button>
      {showResults && (
        <div className="results mt-4">
          <h3 className="text-xl">Results</h3>
          {questions.map((question, index) => (
            <div key={index} className="my-2">
              <p>{question.question}</p>
              <p>Your answer: {userAnswers[index]}</p>
              <p>Correct answer: {question.answer}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <div className="like-button my-8">
      <button onClick={() => setLikes(likes + 1)} className="bg-red-500 text-white px-4 py-2">
        Like ({likes})
      </button>
    </div>
  );
};

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");

  const handleCommentSubmit = () => {
    setComments([...comments, commentText]);
    setCommentText("");
  };

  return (
    <div className="comments-section my-8">
      <h2 className="text-2xl mb-4">Comments</h2>
      <textarea
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
        className="w-full p-2 border border-gray-300"
        rows="4"
        placeholder="Add a comment..."
      />
      <button onClick={handleCommentSubmit} className="bg-green-500 text-white px-4 py-2 mt-2">
        Submit
      </button>
      <div className="comments-list mt-4">
        {comments.map((comment, index) => (
          <div key={index} className="my-2 p-2 border border-gray-300">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

const Wires = () => {
  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Wires</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <div className="grid grid-cols-4">
          <div className="col-span-3">
            <p>The very first thing you would notice if you were to enter the zine lab for the first time is that there are several reels of different types of wires all around. Wires and wiring are at the very centre of BEE and robotics. They can very well be the difference between winning and losing in competitions. Proper wiring is one of the most crucial conditions for your bot to work as intended. Remember our analogy with BEE being like the heart of the human body. Well, wires are like the arteries and veins, and maybe even the nerves. Hence, as much as a small hiccup in the wiring can lead to significant consequences. On the other hand, when your wiring works perfectly it’s a feel of its own!</p>
          </div>
          <div className="col-span-1 text-center">
            <Image src={FirstImage} />
          </div>
        </div>

        <p>To ensure that we don’t get “tangled” up in wires, we must at least know some common types of wires and their uses. The very first type of wires we are going to take a look at are - Single-core wires.</p>

        <h1 className="text-3xl my-8">Single Core Wires</h1>

        <div className="grid grid-cols-5">
          <div className="col-span-3 text-center">
            <Image src={Toden} />
          </div>
          <div className="col-span-2">
            <p className="my-8">As their name suggests, single-core wires have a single conductor (usually copper or aluminium) at their core with insulation covering. They can be both solid and stranded. Solid ones have more strength, whereas stranded ones provide better flexibility.</p>
            <p>Uses of single-core wires include household appliances, computer panels and small gadgets such as power banks and USB cables. Some disadvantages of these types of wires are that they are usually sensitive to external force damage and susceptible to magnetic interference. We’ll look at how other types of wires overcome these drawbacks.</p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <Image src={SolidStranded} />
          </div>
          <div className="col-span-1 text-center">
            <Image src={MemeBreadBoard} />
          </div>
        </div>

        <p>The next type of wire is multi-core wires. They are a group of insulated wires twisted or grouped together within a single cable. They usually come in even numbers. The different colours of the insulation around the wire help identify the different wires. These wires are more reliable and have larger capacity when compared to single-core wires. However, they are more expensive.</p>

        <h1 className="text-3xl my-8">Multi-core Wires</h1>

        <div className="grid grid-cols-5">
          <div className="col-span-3 text-center">
            <Image src={MultiCoreWires} />
          </div>
          <div className="col-span-2">
            <p className="my-8">Some of the uses of multi-core wires include electronic equipment, Ethernet systems, fire alarms and data transmission.</p>
            <p>When it comes to dealing with interference, we should consider Coaxial Cable. A coaxial cable, or simply a coax cable, is a type of electrical cable consisting of a round conducting wire surrounded by an insulating spacer, a cylindrical conducting sheath and an insulating outer sheath. The term coaxial comes from the inner conductor and the outer shield sharing a geometric axis. Coaxial cable differs from other shielded cables because the dimensions of the cable are controlled to give a precise, constant conductor spacing, which is needed for it to function efficiently as a transmission line.</p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <Image src={VideoGames} />
          </div>
          <div className="col-span-1 text-center">
            <Image src={CoAxialCable} />
          </div>
        </div>

        <p>There are many uses of coaxial cables. The most common ones include connecting radio transmitters and receivers with their antennas, computer network (Internet) connections, digital audio and cable television signals. For those of us who have a cable TV connection at home, the black wire which carries the TV signal is a coaxial cable.</p>
        <p>When your signal lines are close to other signal lines, they can pick up each other’s noise. This phenomenon is called crosstalk. Here’s an interesting example from makeup to illustrate crosstalk.</p>

        <h1 className="text-3xl my-8">Twisted Pair Cable</h1>

        <div className="grid grid-cols-5">
          <div className="col-span-3 text-center">
            <Image src={Makeup} />
          </div>
          <div className="col-span-2">
            <p className="my-8">One way to eliminate crosstalk is by twisting the wires together. This type of wire is known as a twisted pair cable. Here, a pair of wires are twisted together so that any interference they encounter is common to both wires and can be canceled out at the receiver. The most common use of twisted pair cables is for Ethernet and telephone systems. They are cheap and flexible, but the twisting increases the length of the cable required, which increases the cost. The performance of these cables reduces with increase in length.</p>
            <p>In comparison, the next type of wire we will discuss is non-metallic sheathed cable, commonly known as Romex (a brand name). Romex is the trade name for a type of electrical wire used in residential construction. It consists of two or more insulated conductors, usually with a bare ground wire, all encased in a plastic sheath. Romex is typically used for lighting and power circuits in houses and buildings.</p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <Image src={NonMetallic} />
          </div>
          <div className="col-span-1 text-center">
            <Image src={FourWires} />
          </div>
        </div>

        <p>Non-metallic sheathed cable (NM cable) is a type of electrical cable that consists of multiple insulated conductors encased in a plastic sheath. The most common type of NM cable is commonly known as Romex, which is a brand name. NM cable is typically used in residential wiring for lighting and power circuits. It is designed for dry, indoor use and is easy to install because of its flexibility and simplicity. NM cable is available in various sizes to accommodate different electrical loads, and it includes a bare or insulated ground wire for safety.</p>
        <p>So far, we have talked about electrical wires, but there are also cables used for data transmission. One such type is the ribbon cable.</p>

        <h1 className="text-3xl my-8">Ribbon Cable</h1>

        <div className="grid grid-cols-5">
          <div className="col-span-3 text-center">
            <Image src={RibbonCable} />
          </div>
          <div className="col-span-2">
            <p className="my-8">A ribbon cable is a cable with many conducting wires running parallel to each other on the same flat plane. As a result, the cable is wide and flat. Ribbon cables are used to connect internal peripherals in computers, such as hard drives, CD drives, and floppy drives. They are also used in some printers and other devices where multiple data lines need to be connected.</p>
            <p>Finally, we come to the optical fibre cable. An optical fibre cable is a cable containing one or more optical fibres that are used to carry light. The optical fibre elements are typically individually coated with plastic layers and contained in a protective tube suitable for the environment where the cable will be deployed.</p>
          </div>
        </div>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <Image src={Ofc} />
          </div>
          <div className="col-span-1 text-center">
            <Image src={GlassOfc} />
          </div>
        </div>

        <p>Optical fibre cables are used for telecommunications and networking because they are flexible and can be bundled as cables. They are especially advantageous for long-distance communications because light propagates through the fibre with much lower attenuation compared to electrical cables. Optical fibres are also unaffected by electromagnetic interference, which makes them very reliable for data transmission.</p>
        <p>Now that we have covered various types of wires and cables, it is essential to know how to connect them properly. The most common way to connect wires is using jumper wires. Jumper wires are used in electrical wiring to connect components in a circuit. They are typically used with breadboards and other prototyping tools to allow for quick and easy connections without the need for soldering. Jumper wires come in various lengths and can have different types of connectors on each end, such as male-to-male, male-to-female, and female-to-female.</p>

        <h1 className="text-3xl my-8">Jumper Wires</h1>

        <div className="grid grid-cols-5">
          <div className="col-span-3 text-center">
            <Image src={JumperWires} />
          </div>
          <div className="col-span-2">
            <p className="my-8">Jumper wires are essential for prototyping and testing circuits because they allow for quick and easy connections without soldering. They come in various lengths and types, including male-to-male, male-to-female, and female-to-female connectors, making them versatile for different types of connections.</p>
            <p>In conclusion, understanding the different types of wires and their uses is crucial for any electronics or robotics project. Proper wiring can make the difference between a successful project and a frustrating one. So, the next time you work on a project, choose the right type of wire and ensure your connections are secure and well-organized.</p>
          </div>
        </div>

        <LikeButton />
        <Comments />
        <Quiz />
      </div>
    </div>
  );
};

export default Wires;
