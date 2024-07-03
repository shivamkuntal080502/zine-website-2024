import React, { useState } from "react";
import Image from "next/image";
import OnOff from "../../../images/blog/bee/switch-relays/1.gif";
import SimpleSwitch from "../../../images/blog/bee/switch-relays/2.png";
import Button from "../../../images/blog/bee/switch-relays/3.png";
import Blue from "../../../images/blog/bee/switch-relays/4.png";
import ManySwitches from "../../../images/blog/bee/switch-relays/image1.jpg";
import SmallSwitch from "../../../images/blog/bee/switch-relays/image3.jpg";
import Pt from "../../../images/blog/bee/switch-relays/image14.png";
import Pt2 from "../../../images/blog/bee/switch-relays/image16.jpg";
import LightSwitchCircuit from "../../../images/blog/bee/switch-relays/image24.png";
import SPDT from "../../../images/blog/bee/switch-relays/image27.jpg";
import SPDT1 from "../../../images/blog/bee/switch-relays/image10.gif";
import SPDT2 from "../../../images/blog/bee/switch-relays/image9.png";
import SPDT3 from "../../../images/blog/bee/switch-relays/image15.jpg";
import DPST from "../../../images/blog/bee/switch-relays/image6.png";
import DPSTBlack from "../../../images/blog/bee/switch-relays/image26.png";
import DPSTDiagram from "../../../images/blog/bee/switch-relays/image23.jpg";
import PavneshBoss from "../../../images/blog/bee/switch-relays/image22.jpg";
import Staircase from "../../../images/blog/bee/switch-relays/image7.gif";
import Disk from "../../../images/blog/bee/switch-relays/image12.png";
import RelayRace from "../../../images/blog/bee/switch-relays/image4.png";
import RelaySwitches from "../../../images/blog/bee/switch-relays/image13.png";
import ElectromagneticRelay from "../../../images/blog/bee/switch-relays/image21.png";
import WorkingRelay from "../../../images/blog/bee/switch-relays/image11.gif";

const quizQuestions = [
  {
    question: "What does SPDT stand for?",
    options: [
      "Single Pole Double Throw",
      "Single Pole Double Test",
      "Single Pole Direct Throw",
      "Single Pole Direct Test"
    ],
    answer: "Single Pole Double Throw"
  },
  {
    question: "Which component is essential for a relay's operation?",
    options: [
      "Resistor",
      "Capacitor",
      "Inductor",
      "Electromagnet"
    ],
    answer: "Electromagnet"
  },
  {
    question: "What does the 'Pole' in a switch refer to?",
    options: [
      "The number of circuits it controls",
      "The number of output connections",
      "The number of switches",
      "The type of switch"
    ],
    answer: "The number of circuits it controls"
  },
  {
    question: "What type of switch is commonly found in household light switches?",
    options: [
      "SPDT",
      "DPDT",
      "SPST",
      "DPST"
    ],
    answer: "SPST"
  },
  {
    question: "What is the primary use of a relay?",
    options: [
      "To increase voltage",
      "To decrease current",
      "To control a high current circuit with a low current signal",
      "To amplify signals"
    ],
    answer: "To control a high current circuit with a low current signal"
  }
];

const Switches = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [quizResult, setQuizResult] = useState(null);
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleQuizChange = (questionIndex, answer) => {
    setQuizAnswers({
      ...quizAnswers,
      [questionIndex]: answer
    });
  };

  const handleQuizSubmit = () => {
    const score = quizQuestions.reduce((acc, question, index) => {
      return acc + (quizAnswers[index] === question.answer ? 1 : 0);
    }, 0);
    setQuizResult(score);
  };

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, newComment]);
    setNewComment("");
  };

  const renderQuiz = () => (
    <div className="my-8">
      <h2 className="text-2xl font-bold">Quiz on Switches</h2>
      {quizQuestions.map((question, index) => (
        <div key={index} className="my-4">
          <p>{question.question}</p>
          {question.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="radio"
                name={`question-${index}`}
                value={option}
                onChange={() => handleQuizChange(index, option)}
              />
              <label>{option}</label>
            </div>
          ))}
        </div>
      ))}
      <button onClick={handleQuizSubmit} className="bg-blue-500 text-white px-4 py-2 mt-4">Submit Quiz</button>
      {quizResult !== null && (
        <div className="mt-4">
          <p>You scored {quizResult} out of {quizQuestions.length}</p>
        </div>
      )}
    </div>
  );

  const renderComments = () => (
    <div className="my-8">
      <h2 className="text-2xl font-bold">Comments</h2>
      <form onSubmit={handleCommentSubmit}>
        <textarea
          value={newComment}
          onChange={handleCommentChange}
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Leave a comment"
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 mt-2">Submit</button>
      </form>
      <div className="mt-4">
        {comments.map((comment, index) => (
          <p key={index} className="border-b border-gray-200 py-2">{comment}</p>
        ))}
      </div>
    </div>
  );

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Switch and Relays</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        {/* Your existing content */}
        <div className="text-center my-8">
          <Image src={OnOff} />
        </div>

        <p>Yes! Switches! It seems such a normal thing. We use a switch to turn on or off any electrical device. Look at that power board in front of you.</p>

        <div className="text-center my-8">
          <Image src={SimpleSwitch} height={300} width={300} />
        </div>

        <p>Yes, It is a switch. But is this it?🙄Pffff….No, obviously.</p>

        <div className="text-center my-8">
          <Image src={Button} />
          <br />
          <Image src={Blue} />
        </div>

        <p>But, these are switches too.😕</p>

        <div className="text-center my-8">
          <Image src={ManySwitches} />
        </div>

        <p>And these are too.</p>

        <p className="my-8">There’s much more to it. Let’s start scratching this simple topic and see what all magic it can do.</p>

        <p className="border-2 border-solid border-black px-4 mb-8">Fun Fact: There used to be no switches back when the bulb was invented...what people used to do then?🤔 People used to take the bulb out from the bulb holder every time to switch it off John Henry Holmes came up with the idea of switches to break circuits.</p>

        <h1 className="text-2xl my-8">What is a Switch?</h1>

        <p>A Switch is a device that breaks(sometimes diverts🙄) the flow of current in a circuit. Simple enough?</p>

        <div className="text-center my-8">
          <Image src={Pt} />
        </div>

        <p>This is how we typically represent a switch. But wait. What are these 1P and 1T representing here?🤔 Told you already that switch is an interesting topic too.😀 P represents Pole and T represents Throw. What are these? Let’s see.</p>

        <p className="my-8">Pole- The number of poles on a switch tells how many circuits it controls. For Example- A single-Pole switch controls only one circuit. Double Pole controls two circuits simultaneously. (It is just like having two separate single-pole switches being operated by the same button)</p>

        <p>Throw- The number of throws indicates how many different output connections each switch pole can connect its input. (😶Faaat gya dimaag… Let’s understand through images)</p>

        <div className="text-center my-8">
          <Image src={Pt2} />
        </div>

        <h1 className="text-2xl my-8">SPST Switch (Single Pole Single Throw)</h1>

        <p className="my-8">This is the most common type of switch. It has a simple on-off mechanism which can connect or disconnect the circuit to/from a single output. You must have seen this on the power strips you use for your computer. The switches on those strips are SPST switches.</p>

        <div className="text-center my-8">
          <Image src={SmallSwitch} />
        </div>

        <p>It has a simple ON/OFF switch which we have been using all our lives.</p>

        <h1 className="text-2xl my-8">SPDT Switch (Single Pole Double Throw)</h1>

        <p className="my-8">It has a three-terminal switch, one common terminal and two output terminals. The common terminal connects to either of the two terminals. Hence, we get two types of SPDT switches. One which you have to turn to choose output (like the rotary knob of the old-style telephones, you have to rotate and release to select the output) and the second which works with a single flip. It allows current through the common terminal to flow to either of the two terminals.</p>

        <div className="text-center my-8">
          <Image src={LightSwitchCircuit} />
        </div>

        <p>Ok! So what exactly is this SPDT switch used for?🤔 You must have heard about 2-way light switching. This mechanism is usually used for the staircase light where you can turn ON the light from the ground floor and turn it off after reaching the first floor. This is possible by using a combination of two SPDT switches.</p>

        <div className="text-center my-8">
          <Image src={SPDT} />
        </div>

        <p>It is represented like this.</p>

        <div className="text-center my-8">
          <Image src={SPDT1} />
          <br />
          <Image src={SPDT2} />
          <br />
          <Image src={SPDT3} />
        </div>

        <h1 className="text-2xl my-8">DPST Switch (Double Pole, Single Throw)</h1>

        <p className="my-8">It is a four-terminal switch consisting of two terminals input and two terminals output. It is equivalent to two SPST switches operating together. A very common example of a DPST switch is the switch used to control the AC mains. It isolates both the live and neutral of the circuit, but as a single circuit.</p>

        <div className="text-center my-8">
          <Image src={DPST} />
        </div>

        <p>It looks like this.</p>

        <div className="text-center my-8">
          <Image src={DPSTBlack} />
        </div>

        <div className="text-center my-8">
          <Image src={DPSTDiagram} />
        </div>

        <p>It can be used to turn two devices on and off at the same time or control a single phase of a high power device.</p>

        <div className="text-center my-8">
          <Image src={PavneshBoss} />
        </div>

        <h1 className="text-2xl my-8">DPDT Switch (Double Pole Double Throw)</h1>

        <p className="my-8">A Double Pole Double Throw switch is equivalent to two SPDT switches. It routes two separate circuits connecting each of the two inputs to one of the two outputs. Usually, these switches are used in complex control circuits.</p>

        <div className="text-center my-8">
          <Image src={Staircase} />
        </div>

        <h1 className="text-2xl my-8">Relay</h1>

        <p className="my-8">A relay is a switch. But it is a special kind of switch, operated electrically and not manually like a normal switch. The purpose of a relay is to automate this switching to be controlled by a small signal. It is just like a switch which your small brother can operate with his tiny finger.</p>

        <div className="text-center my-8">
          <Image src={Disk} />
        </div>

        <p>It is a type of switch that operates electrically but can control a mechanical switch.</p>

        <div className="text-center my-8">
          <Image src={RelayRace} />
        </div>

        <p className="my-8">Let’s take a 5V relay as an example. A 5V relay means it has a small electromagnet (coil) inside it which needs 5V to energize and make the switch move mechanically. When a small current flows through the coil, the magnetic field produced by it attracts the switch towards it. The switch can move only if the current is flowing through the coil. When the current flow is stopped, the switch returns to its normal position. This small 5V relay can operate up to 240V load in real-time. So a relay can be used to control a higher voltage circuit with a smaller voltage.</p>

        <div className="text-center my-8">
          <Image src={RelaySwitches} />
        </div>

        <div className="text-center my-8">
          <Image src={ElectromagneticRelay} />
        </div>

        <p className="my-8">This is a simple diagram of a relay switch. There are various types of relay switches available based on their application.</p>

        <div className="text-center my-8">
          <Image src={WorkingRelay} />
        </div>

        <p>Hope you got a good understanding of switches and their different types. These simple components have numerous applications in the real world.</p>

        {/* Like button and count */}
        <div className="my-8">
          <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2">Like</button>
          <p>{likeCount} likes</p>
        </div>

        {/* Quiz section */}
        {renderQuiz()}

        {/* Comments section */}
        {renderComments()}
      </div>
    </div>
  );
};

export default Switches;
