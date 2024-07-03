import React, { useState } from "react";
import Image from "next/image";
import SpurGear from "../../../images/blog/bme/gears/image1.gif";
import WormGear from "../../../images/blog/bme/gears/image2.gif";
import HelicalGear from "../../../images/blog/bme/gears/image3.gif";
import DoubleHelicalGear from "../../../images/blog/bme/gears/image4.jpg";
import BevelGear from "../../../images/blog/bme/gears/image5.jpg";
import CompoundGear from "../../../images/blog/bme/gears/image6.gif";
import RackAndPinionGear from "../../../images/blog/bme/gears/image7.gif";
import GearRatio from "../../../images/blog/bme/gears/image8.png";
import SimpleGearTrain from "../../../images/blog/bme/gears/image9.gif";
import CompoundGearTrain from "../../../images/blog/bme/gears/image10.gif";
import EpicyclicGearTrain from "../../../images/blog/bme/gears/image11.gif";

const Quiz = () => {
  const questions = [
    {
      question: "What type of gear is used to transmit power between parallel shafts?",
      options: ["Spur Gear", "Worm Gear", "Bevel Gear", "Rack and Pinion Gear"],
      answer: "Spur Gear"
    },
    {
      question: "Which gear is used for high torque and low-speed requirements?",
      options: ["Helical Gear", "Worm Gear", "Bevel Gear", "Compound Gear"],
      answer: "Worm Gear"
    },
    {
      question: "Which gear has teeth set at an angle and takes the shape of a helix?",
      options: ["Spur Gear", "Helical Gear", "Bevel Gear", "Epicyclic Gear"],
      answer: "Helical Gear"
    },
    {
      question: "What type of gear is used to convert rotation into linear motion?",
      options: ["Rack and Pinion Gear", "Double Helical Gear", "Compound Gear", "Simple Gear Train"],
      answer: "Rack and Pinion Gear"
    },
    {
      question: "What is a compound gear?",
      options: ["A single gear with multiple teeth", "A number of gears fixed together axially", "A gear with helical teeth", "A gear that changes direction of motion"],
      answer: "A number of gears fixed together axially"
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      {showScore ? (
        <div className="score-section">You scored {score} out of {questions.length}</div>
      ) : (
        <div className="question-section">
          <div className="question-count">
            <span>Question {currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="question-text">{questions[currentQuestion].question}</div>
          <div className="answer-section">
            {questions[currentQuestion].options.map((option, index) => (
              <button onClick={() => handleAnswerOptionClick(option === questions[currentQuestion].answer)} key={index}>
                {option}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      Like ({likes})
    </button>
  );
};

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleCommentSubmit = () => {
    if (comment) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <h2>Comments</h2>
      <input
        type="text"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        placeholder="Add a comment"
      />
      <button onClick={handleCommentSubmit}>Submit</button>
      <div>
        {comments.map((c, index) => (
          <div key={index}>{c}</div>
        ))}
      </div>
    </div>
  );
};

const Gears = () => {
  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Gears</h1>
        </div>
      </div>

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
        <p>Gears are toothed, mechanical transmission elements used to transfer motion and power between machine components.</p>
        <br />
        <p>Gears are generally used for four different purposes:</p>
        <ul>
          <li>- Changing speed of motion</li>
          <li>- Changing direction of motion</li>
          <li>- Changing rotation motion axis</li>
          <li>- To keep rotation synchronized</li>
        </ul>

        <h1 className="text-3xl my-8">Types Of Gears</h1>
        <h1 className="text-xl my-8">1. SPUR GEAR</h1>
        <p>Spur gears transmit power through shafts that are parallel. </p>

        <div className="mt-8 text-center">
          <Image src={SpurGear} alt="Spur Gear" />
        </div>

        <h1 className="text-xl my-8">2. WORM GEAR</h1>
        <p>The worm is analogous to a screw with a V-type thread, and the gear is analogous to a spur gear. Mainly worm gears are used when there is high torque and low-speed requirement.</p>

        <div className="mt-8 text-center">
          <Image src={WormGear} alt="Worm Gear" />
        </div>

        <h1 className="text-xl my-8">3. HELICAL GEAR</h1>
        <p>The teeth of a helical gear are set at an angle (relative to the axis of the gear) and take the shape of a helix. This allows the teeth to mesh gradually, starting as point contact and developing into line contact as the engagement progresses.</p>
        <p>Helical gear produces less noise as well as reduces load on each tooth as multiple teeth are always in mesh at a time.</p>

        <div className="mt-8 text-center">
          <Image src={HelicalGear} alt="Helical Gear" />
        </div>

        <h1 className="text-xl my-8">4. DOUBLE HELICAL GEAR</h1>
        <p>The axial thrusts are opposite one another, and the forces are contained in the gear and not transmitted to the bearing. Therefore, high loading capability and steady transmission are advantaged.</p>
        <p>Helical gear produces less noise as well as reduces load on each tooth as multiple teeth are always in mesh at a time.</p>

        <div className="mt-8 text-center">
          <Image src={DoubleHelicalGear} alt="Double Helical Gear" />
        </div>

        <h1 className="text-xl my-8">5. BEVEL GEAR</h1>
        <p>Bevel gears are used to change the direction of motion between two shafts that intersect at an angle, typically 90 degrees.</p>

        <div className="mt-8 text-center">
          <Image src={BevelGear} alt="Bevel Gear" />
        </div>

        <h1 className="text-xl my-8">6. COMPOUND GEAR</h1>
        <p>A compound gear is a number of gears fixed together axially. The gears that make up a compound gear usually differ in size and have a different number of teeth. This is useful if there is a need to speed up or slow down the final output.</p>

        <div className="mt-8 text-center">
          <Image src={CompoundGear} alt="Compound Gear" />
        </div>

        <h1 className="text-xl my-8">7. RACK AND PINION GEAR</h1>
        <p>Rack and pinion gears are used to convert rotation into linear motion. The flat, toothed part is the rack and the gear is the pinion.</p>

        <div className="mt-8 text-center">
          <Image src={RackAndPinionGear} alt="Rack and Pinion Gear" />
        </div>

        <h1 className="text-3xl my-8">GEAR RATIO</h1>
        <p>Gear ratios are a core science behind almost every machine in the modern era. They can maximize power and efficiency and are based on simple mathematics. So, how do they work? In order to calculate the gear ratio of the two meshed gears we need to know either:</p>
        <ul>
          <li>- The <b>number of teeth</b> of both input and output gears</li>
          <li>- The <b>base diameter or radius</b> of both input and output gears</li>
        </ul>

        <p className="my-8"><b>GEAR RATIO = teeth in output gear / teeth in input gear</b></p>
        <div className="mt-8 text-center">
          <Image src={GearRatio} alt="Gear Ratio" />
        </div>

        <h1 className="text-3xl my-8">GEAR TRAINS</h1>
        <p>Gear train is a system of gears which transmits motion from one shaft to another.</p>

        <h1 className="text-xl my-8">Simple Gear Trains</h1>
        <p>Here gear A is driving gear and gear B is driven gear.</p>
        <div className="mt-8 text-center">
          <Image src={SimpleGearTrain} alt="Simple Gear Train" />
        </div>

        <h1 className="text-xl my-8">Compound Gear Trains</h1>
        <p>Simply put when there are more than 2 gears in a gear train it's referred to as a compound gear train.</p>
        <div className="mt-8 text-center">
          <Image src={CompoundGearTrain} alt="Compound Gear Train" />
        </div>

        <h1 className="text-xl my-8">Epicyclic Gear Trains</h1>
        <p>Components of Epicyclic Gear -</p>
        <ul>
          <li><b>Sun Gear</b> - Yellow Color</li>
          <li><b>Planet Gears</b> - Blue Color</li>
          <li><b>Ring Gear</b> - Red Color</li>
          <li><b>Planet Carrier</b> - Green Color</li>
        </ul>

        <p className="mt-8">The Sun gear is where the input shaft power is given and the ring gear output shaft power is produced. The epicyclic gear train is useful for transmitting high-velocity ratio with a gear of moderate size and in less space. It is used in Automatic Gear Transmission Cars, and wind turbines.</p>
        <div className="mt-8 text-center">
          <Image src={EpicyclicGearTrain} alt="Epicyclic Gear Train" />
        </div>

        {/* Like Button */}
        <div className="my-8">
          <LikeButton />
        </div>

        {/* Quiz Section */}
        <div className="my-8">
          <h2 className="text-3xl">Quiz on Gears</h2>
          <Quiz />
        </div>

        {/* Comment Section */}
        <div className="my-8">
          <CommentSection />
        </div>
      </div>
    </div>
  );
};

export default Gears;
