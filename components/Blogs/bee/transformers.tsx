import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import Titanic from "../../../images/blog/bee/transformers/image2.gif";
import Transformer from "../../../images/blog/bee/transformers/image5.gif";
import Robot from "../../../images/blog/bee/transformers/image13.gif";
import ParkTransformer from "../../../images/blog/bee/transformers/image15.jpg";
import Pole from "../../../images/blog/bee/transformers/image9.jpg";
import Boring from "../../../images/blog/bee/transformers/image7.gif";
import SeveralQuestions from "../../../images/blog/bee/transformers/image11.gif";
import VeryBigImage from "../../../images/blog/bee/transformers/image10.png";
import CoilTransformer from "../../../images/blog/bee/transformers/image6.jpg";
import OuterDiagram from "../../../images/blog/bee/transformers/image16.png";
import PowerSupply from "../../../images/blog/bee/transformers/image12.gif";
import TransformerWorking from "../../../images/blog/bee/transformers/image3.gif";
import TurnRatio from "../../../images/blog/bee/transformers/image1.png";
import AutoTransformer from "../../../images/blog/bee/transformers/image8.jpg";

const quizQuestions = [
  {
    question: "What is the primary function of a transformer?",
    options: [
      "Convert AC to DC",
      "Transfer electrical energy between two or more coils",
      "Store electrical energy",
      "Generate electricity",
    ],
    answer: 1,
  },
  {
    question: "What type of transformer is generally used for high voltage applications?",
    options: [
      "Core type",
      "Shell type",
      "Auto transformer",
      "All of the above",
    ],
    answer: 0,
  },
  {
    question: "Which law forms the basis of the transformer's operation?",
    options: [
      "Ohm's Law",
      "Faraday's Law of Electromagnetic Induction",
      "Newton's Law",
      "Kirchhoff's Law",
    ],
    answer: 1,
  },
  {
    question: "What type of loss occurs due to the cyclic reversal of magnetic fields in a transformer?",
    options: [
      "Eddy current loss",
      "Hysteresis loss",
      "Copper loss",
      "Core loss",
    ],
    answer: 1,
  },
  {
    question: "In a step-down transformer, the primary coil has:",
    options: [
      "More turns than the secondary coil",
      "Fewer turns than the secondary coil",
      "Equal turns as the secondary coil",
      "No turns",
    ],
    answer: 0,
  },
];

const Transformers = () => {
  const [quizAnswers, setQuizAnswers] = useState(Array(quizQuestions.length).fill(null));
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleQuizAnswer = (questionIndex, optionIndex) => {
    const updatedAnswers = [...quizAnswers];
    updatedAnswers[questionIndex] = optionIndex;
    setQuizAnswers(updatedAnswers);
  };

  const handleSubmitQuiz = () => {
    setQuizSubmitted(true);
  };

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleAddComment = () => {
    if (newComment.trim() !== "") {
      setComments([...comments, newComment]);
      setNewComment("");
    }
  };

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Transformers</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <div className="text-center my-8">
          <Image src={Titanic} />
        </div>

        <p>Before starting off with our topic, congratulations on reaching so far and successfully completing basic electrical and electronic components. We know it’s been a long road so far, but this is just the beginning. We have tried our best to make this flow of knowledge as fluid and as interesting as possible. So stay with us! Now for the topic at hand,</p>

        <div className="grid grid-cols-2">
          <div className="col-span-1">
            <div className="text-center my-8">
              <Image src={Transformer} />
            </div>
          </div>
          <div className="col-span-1">
            <p>Transformers were a group of extraterrestrial autonomous robotic organisms living on the faraway planet of Cybertron. Cybertron’s peaceful existence was rocked by the betrayal of Megatron, the leader of the faction Decepticons. The faction opposite is the Autobots led by the epitome of righteousness, Optimus Prime who…. Hey!! Wait a minute these weren’t the transformers we had to discuss.</p>
          </div>
        </div>

        <div className="text-center my-8">
          <Image src={Robot} />
        </div>

        <div className="grid grid-cols-7">
          <div className="col-span-2 text-center my-8">
            <Image src={ParkTransformer} />
          </div>
          <div className="col-span-5 my-8">
            <p>Instead, we are going to have a look at an electrical device equally captivating. Remember those huge brown boxes with lots of wiring, that you were always warned not to go near. That was a transformer! These transformers form a crucial part of most circuits from the smallest ones to even power grids. They range in size from transformers used in mobiles being less than a cubic centimetre in volume, to units weighing hundreds of tons. They are even found in mobile chargers!</p>
          </div>
        </div>

        <div className="text-center my-8">
          <Image src={Pole} />
        </div>

        <h1 className="text-3xl my-8">Introduction</h1>

        <p>Transformers are devices used to transfer electrical energy in the form of magnetic energy, between two or more coils of wire. During this transfer, we can regulate the levels of current and voltage, according to our needs. Put more formally,</p>

        <p className="my-8 italic">A transformer is a very simple static electro-magnetic passive electrical device that works on the principle of Faraday’s Law of Electromagnetic Induction by converting electrical energy from one form to another.</p>

        <p>Whoa! Too many terms at once. Let us try to understand this definition step by step. It is “static” i.e stationary or immovable. The principle is based on the conversion of electrical to magnetic energy, hence “electromagnetic”. Recall, we talked about what is a “passive” element earlier.</p>

        <div className="grid grid-cols-4 gap-8">
          <div className="col-span-3 my-8">
            <p>Lastly, Faraday’s Law of Electromagnetic Induction. It is not something new and you must have gone through the law during your preparation. Don’t worry we won’t go into the long theory again. Visit link for a quick refresher. The law forms the basis of the transformer. We’ll see how soon. But first, let’s try and understand the construction of a transformer.</p>
          </div>
          <div className="col-span-1 text-center my-8">
            <Image src={Boring} />
          </div>
        </div>

        <h1 className="text-2xl my-8">Construction</h1>

        <div className="text-center my-8">
          <Image src={Transformer} />
        </div>

        <p>The construction of transformers is done in two different ways. There is the shell-type transformer and the core-type transformer.</p>

        <p className="my-8">We’ll discuss them one by one. But before that let’s go through some points common to both. A basic transformer has three parts - a primary coil, a secondary coil, and a laminated steel core. The core is formed by stacking multiple sheets of steel on top of one another. All parts are electrically insulated from each other.</p>

        <div className="text-center my-8">
          <Image src={SeveralQuestions} />
        </div>
        <p>Why is steel used, can’t we use other materials? What is the need for stacking the sheets of steel, wouldn’t making a solid core be much easier?</p>

        <p>A lot of questions may have popped up in your mind. Let’s find some answers. The reason behind all of these has something to do with losses. In a transformer, there are mainly two kinds of losses - hysteresis loss and eddy current loss. Hysteresis loss is caused by the cyclic reversal of magnetic fields that occurs in our circuit. And eddy current loss is due to currents produced in our iron core itself.</p>

        <div className="text-center my-8">
          <Image src={VeryBigImage} />
        </div>

        <p>Hence the use of materials with low hysteresis loss and laminated sheets (laminated sheets have low eddy current loss). The materials generally used in the making of a transformer are silicon steel or cast iron.</p>

        <h2 className="text-xl my-8">Shell-type transformer</h2>

        <p>In shell-type transformers, the coils are placed on the central limb and are surrounded by the core. The core is generally made up of low reluctance magnetic material and provides a continuous path for the flux. These types of transformers are used where the voltage levels are high.</p>

        <div className="text-center my-8">
          <Image src={CoilTransformer} />
        </div>

        <h2 className="text-xl my-8">Core-type transformer</h2>

        <p>Here, the primary and secondary windings are wound outside and surround the laminated core. These transformers are generally used for low-voltage applications.</p>

        <h2 className="text-xl my-8">How does a transformer work?</h2>

        <div className="text-center my-8">
          <Image src={OuterDiagram} />
        </div>

        <p>In an ideal condition, the transformer works on the principle of mutual inductance. When an alternating current is supplied to the primary coil, an alternating magnetic flux is generated. This flux, passing through the core, gets linked to the secondary coil, generating an emf (electromotive force) in it. According to Faraday’s Law, the induced emf is equal to the rate of change of flux linkage. This voltage causes current to flow if a load is connected to the secondary coil. The primary coil is connected to the AC power source and the secondary coil is connected to the load.</p>

        <h1 className="text-2xl my-8">Let’s summarize:</h1>

        <div className="text-center my-8">
          <Image src={PowerSupply} />
        </div>

        <p>A transformer essentially transfers electrical energy between two or more circuits through electromagnetic induction. They are crucial in the efficient transmission of electrical power over long distances. The three basic components of a transformer are:</p>

        <ul className="list-disc ml-8">
          <li>Primary coil</li>
          <li>Secondary coil</li>
          <li>Laminated core</li>
        </ul>

        <h1 className="text-2xl my-8">Applications of Transformers</h1>

        <p>Transformers are vital components in electrical systems and have a variety of applications, including:</p>

        <ul className="list-disc ml-8">
          <li>Power transformers used in transmission networks to step up (increase) or step down (decrease) voltage levels.</li>
          <li>Distribution transformers that provide the final voltage transformation in the electric power distribution system.</li>
          <li>Isolation transformers used to isolate different parts of the circuit.</li>
          <li>Instrument transformers used for measuring and protective relay purposes in electrical power systems.</li>
          <li>Autotransformers which have a single winding acting as both the primary and secondary winding.</li>
        </ul>

        <div className="text-center my-8">
          <Image src={TransformerWorking} />
        </div>

        <h1 className="text-2xl my-8">Quiz</h1>

        {quizQuestions.map((quiz, index) => (
          <div key={index} className="my-4">
            <p className="font-bold">{quiz.question}</p>
            {quiz.options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center my-2">
                <input
                  type="radio"
                  name={`question-${index}`}
                  value={optionIndex}
                  checked={quizAnswers[index] === optionIndex}
                  onChange={() => handleQuizAnswer(index, optionIndex)}
                  className="mr-2"
                />
                <label>{option}</label>
              </div>
            ))}
          </div>
        ))}

        <button
          onClick={handleSubmitQuiz}
          className="bg-blue-500 text-white px-4 py-2 rounded my-4"
        >
          Submit Quiz
        </button>

        {quizSubmitted && (
          <div className="mt-4">
            <h2 className="text-xl font-bold">Quiz Results</h2>
            {quizQuestions.map((quiz, index) => (
              <div key={index} className="my-4">
                <p className="font-bold">{quiz.question}</p>
                <p>
                  Your answer: {quiz.options[quizAnswers[index]]} -{" "}
                  {quizAnswers[index] === quiz.answer ? (
                    <span className="text-green-500">Correct</span>
                  ) : (
                    <span className="text-red-500">Incorrect</span>
                  )}
                </p>
              </div>
            ))}
          </div>
        )}

        <h1 className="text-2xl my-8">Like & Comment</h1>

        <button
          onClick={handleLike}
          className="bg-blue-500 text-white px-4 py-2 rounded my-4"
        >
          Like ({likeCount})
        </button>

        <div className="mt-4">
          <h2 className="text-xl font-bold">Comments</h2>
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded my-4"
            placeholder="Add a comment"
          ></textarea>
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded my-4"
          >
            Add Comment
          </button>
          <div className="mt-4">
            {comments.map((comment, index) => (
              <div key={index} className="border-b border-gray-300 py-2">
                <p>{comment}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transformers;
