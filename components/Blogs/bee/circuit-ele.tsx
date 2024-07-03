import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import Requirements from "../../../images/blog/bee/circuit-ele/image12.png";
import Bulb from "../../../images/blog/bee/circuit-ele/image16.png";
import BulbConnected from "../../../images/blog/bee/circuit-ele/image11.png";
import BulbBattery from "../../../images/blog/bee/circuit-ele/image3.png";
import TwoBulbs from "../../../images/blog/bee/circuit-ele/image25.png";
import ActivePassive from "../../../images/blog/bee/circuit-ele/image21.jpg";
import Symbols from "../../../images/blog/bee/circuit-ele/image9.png";
import JoinTheResistance from "../../../images/blog/bee/circuit-ele/image26.jpg";
import R1R2 from "../../../images/blog/bee/circuit-ele/image10.png";
import Different from "../../../images/blog/bee/circuit-ele/image17.jpg";
import FunFact from "../../../images/blog/bee/circuit-ele/image24.png";
import CarbonFilm from "../../../images/blog/bee/circuit-ele/image19.jpg";
import MetalFilm from "../../../images/blog/bee/circuit-ele/image6.png";
import WireWound from "../../../images/blog/bee/circuit-ele/image2.png";
import SurfaceMount from "../../../images/blog/bee/circuit-ele/image22.jpg";
import Structure from "../../../images/blog/bee/circuit-ele/image5.png";
import FunFactResistor from "../../../images/blog/bee/circuit-ele/image28.gif";
import CapacitorBlast from "../../../images/blog/bee/circuit-ele/image14.gif";
import CapacitorStructure from "../../../images/blog/bee/circuit-ele/image7.png";
import FilmCapacitor from "../../../images/blog/bee/circuit-ele/image1.png";
import YellowFilmCapacitor from "../../../images/blog/bee/circuit-ele/image13.png";
import AxialCapacitor from "../../../images/blog/bee/circuit-ele/image15.gif";
import BigYellowCapacitor from "../../../images/blog/bee/circuit-ele/image4.jpg";
import CeramicCapacitor from "../../../images/blog/bee/circuit-ele/image27.png";
import Mlcc from "../../../images/blog/bee/circuit-ele/image20.png";
import ElectrolyticCapacitor from "../../../images/blog/bee/circuit-ele/image18.jpg";

const CircuitEle = () => {
  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Circuit Elements</h1>
        </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
        <p>
          And the journey starts😀. Let’s start with some conceptual things. So
          in this blog, we will study circuit elements. What are these and where
          do we see them in daily life and robotics?🤔 (Remove all the
          breaklines and use some margin or padding instead.)
        </p>
        <p className="my-8">
          But before starting with circuit elements, do you know what a circuit
          is? A circuit is an arrangement of individual electronic components,
          such as resistors, transistors, capacitors, inductors, and diodes,
          connected by conductive wires or traces through which electric current
          can flow. Now let’s understand this with a hypothetical activity.
        </p>

        <p>1. Required elements:</p>
        <div className="text-center">
          <Image src={Requirements} />
        </div>

        <p>
          In case you have your real-world LED, switch, battery, and wires, they
          will work better, but if you don’t have them, you can take these
          hypothetical ones. Assume them to be similar to the real-world ones.
        </p>
        <div className="grid grid-cols-12 mt-8">
          <div className="col-span-10">
            <p>
              2. Now, you need to connect a piece of wire to each terminal of
              LED and analyze whether it is a circuit according to the
              definition. Is it a circuit? No, it’s not because it does not make
              a closed path. (The one in red is the positive terminal and the
              one in black is negative)
            </p>
          </div>
          <div className="col-span-2">
            <Image src={Bulb} />
          </div>
        </div>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-3">
            <Image src={BulbConnected} />
          </div>
          <div className="col-span-7">
            <p>
              Now, connect the end terminals of wire extending from the
              terminals of LED and connect them. Is it a circuit now? Even
              though you have closed the loop, it cannot be called an electric
              circuit because of the absence of the flow of electric current
              since the power source is absent. So, you need to add a power
              source.
            </p>
            <br />
            <p>
              4. Disconnect the wire ends from each other and connect them to
              the battery in a way that the wire from the longer terminal of the
              LED connects to the positive terminal of the battery and that from
              the shorter terminal of the LED must connect to the negative
              terminal of the battery.
            </p>
            <br />
            <p>
              You’ll notice that your LED will start to glow, and voila! You’ve
              created your very first circuit. Now you must be wondering why we
              needed the switch to demonstrate about circuits, we don’t really.
              Our elementary electric circuit is now complete. But we need a
              switch to illustrate some more concepts.
            </p>
          </div>
          <div className="col-span-2 mt-24">
            <Image src={BulbBattery} />
          </div>
        </div>
        <div className="grid grid-cols-12">
          <div className="col-span-10">
            <p className="mb-8">
              Suppose you connect a switch in series with your circuit, but the
              simple on/off switch can only have two states, on or off, and
              takes only one of them at once.
            </p>
            <div className="text-center">
              <Image src={TwoBulbs} />
            </div>
          </div>
        </div>
        <p className="border-2 border-solid border-black px-4 mt-8">
          A quick question - would the arrangement still be called a circuit if
          I set the switch in the OFF state? There is no flow of electric
          current, so it defies the definition of a circuit. Try and think by
          yourself! If it is, why? Consider this as an assignment to yourself.
          Contact us with your doubts.
        </p>

        <p className="my-8">
          Now that you know what exactly is a circuit, let’s study the types of
          circuit elements.
        </p>
        <div className="grid grid-cols-2 gap-8 mt-12">
          <div className="col-span-1">
            <Image src={ActivePassive} />
          </div>
          <div className="col-span-1">
            <h1 className="text-3xl">Active Circuit Elements</h1>
            <p>The elements that supply energy to the circuit are called active elements.</p>
            <h1 className="text-3xl mt-8">Passive Circuit Elements</h1>
            <p>
              A passive component is an electronic component that cannot
              introduce net energy to the circuit. The definition is really
              simple. In the above circuit, Battery is an Active element and
              Bulbs are Passive. What are some other passive circuit elements
              that we use? Yeah! Resistors, Capacitors, Inductors, Transformers,
              Diodes🙄 all are passive components.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 mt-12 gap-16">
          <div className="col-span-1">
            <p>
              Now try to think of some active components.🤔 Battery…uh...um...battery.🤫 I’m not playing this. Wait, you're here to learn, so, let us tell you. Other than batteries we have...ah… it’s hard really...😒...yes...generators? Yes, they supply energy to the circuit...or we say generally, all voltage and current sources are active circuit elements.
            </p>
            <p className="mt-16">Let’s now study these elements one by one</p>
          </div>
          <div className="col-span-1">
            <Image src={Symbols} />
          </div>
        </div>

        <div className="my-16">
          <h1 className="text-4xl font-bold text-center mb-8">Resistor</h1>
          <p className="mb-8">
            The resistor is the most common and well-known passive element in
            any circuit. Just like the name suggests, the job of a resistor is
            to resist. A resistor restricts the flow of current to a certain
            level. In real life, the electric equipment that we use contains a
            high resistance because, at a lower resistance, it would burn out.
            This behavior of resisting the current is the main function of a
            resistor.
          </p>
          <Image src={JoinTheResistance} />
        </div>

        <p className="mt-8">
          A resistor works on the principle of Ohm’s Law. Ohm’s Law states that
          the current through a conductor between two points is directly
          proportional to the voltage across the two points. Introducing the
          constant of proportionality, the resistance, one arrives at the usual
          mathematical equation that describes this relationship:
        </p>

        <div className="border-2 border-solid border-black p-4 text-center my-8">
          <p className="text-3xl">V = I.R</p>
          <p>
            where I is the current through the conductor in units of amperes, V
            is the voltage measured across the conductor in units of volts, and
            R is the resistance of the conductor in units of ohms.
          </p>
        </div>

        <div className="text-center">
          <Image src={R1R2} />
        </div>

        <p className="my-8">
          If we apply a high enough voltage to a conductor, current will flow
          through it. The higher the voltage, the more current will flow. The
          more current flows, the more the conductor will heat up. If we
          continue to apply high enough voltage, the conductor will heat up to
          the point where it burns. This is what happens in a light bulb. The
          filament inside the bulb is a thin conductor. When we apply a high
          enough voltage to it, the filament heats up to the point where it
          glows, producing light. This is the principle behind all incandescent
          light bulbs.
        </p>

        <div className="text-center">
          <Image src={Different} />
        </div>

        <p className="mt-8">
          This behavior of heating up and burning out is what limits the amount
          of current that can flow through a conductor. The higher the
          resistance of the conductor, the more it will resist the flow of
          current. The lower the resistance, the more current will flow. This is
          why resistors are used in circuits to limit the amount of current that
          can flow. By choosing a resistor with the appropriate resistance, we
          can control the amount of current that flows through a circuit.
        </p>
        <p>
          The resistance of a resistor is measured in ohms. The symbol for ohms
          is Ω. The resistance of a resistor is determined by the material it is
          made of and its physical dimensions. The resistance of a resistor is
          constant over a wide range of voltages and currents. This makes
          resistors very useful for controlling the amount of current that flows
          through a circuit.
        </p>

        <div className="text-center mt-8">
          <Image src={FunFact} />
        </div>

        <h1 className="text-4xl text-center mt-12">Types of Resistors</h1>

        <div className="mt-8">
          <h1 className="text-2xl mt-8">Carbon Film Resistor</h1>
          <div className="grid grid-cols-2 gap-16 mt-8">
            <div className="col-span-1">
              <Image src={CarbonFilm} />
            </div>
            <div className="col-span-1">
              <p>
                The carbon film resistor is made by depositing a thin layer of
                carbon on an insulating substrate. The resistance of the
                resistor is determined by the thickness and length of the carbon
                film. The carbon film resistor has a higher resistance than the
                wire wound resistor and is less expensive to manufacture.
              </p>
            </div>
          </div>
          <h1 className="text-2xl mt-16">Metal Film Resistor</h1>
          <div className="grid grid-cols-2 gap-16 mt-8">
            <div className="col-span-1">
              <Image src={MetalFilm} />
            </div>
            <div className="col-span-1">
              <p>
                The metal film resistor is made by depositing a thin layer of
                metal on an insulating substrate. The resistance of the resistor
                is determined by the thickness and length of the metal film. The
                metal film resistor has a lower resistance than the carbon film
                resistor and is more expensive to manufacture.
              </p>
            </div>
          </div>
          <h1 className="text-2xl mt-16">Wire Wound Resistor</h1>
          <div className="grid grid-cols-2 gap-16 mt-8">
            <div className="col-span-1">
              <Image src={WireWound} />
            </div>
            <div className="col-span-1">
              <p>
                The wire wound resistor is made by winding a thin wire around an
                insulating substrate. The resistance of the resistor is
                determined by the length and diameter of the wire. The wire
                wound resistor has a lower resistance than the metal film
                resistor and is more expensive to manufacture.
              </p>
            </div>
          </div>
          <h1 className="text-2xl mt-16">Surface Mount Resistor</h1>
          <div className="grid grid-cols-2 gap-16 mt-8">
            <div className="col-span-1">
              <Image src={SurfaceMount} />
            </div>
            <div className="col-span-1">
              <p>
                The surface mount resistor is made by depositing a thin layer of
                metal on an insulating substrate. The resistance of the resistor
                is determined by the thickness and length of the metal film. The
                surface mount resistor has a lower resistance than the wire
                wound resistor and is more expensive to manufacture.
              </p>
            </div>
          </div>
          <h1 className="text-2xl mt-16">Structure of Resistor</h1>
          <div className="text-center mt-8">
            <Image src={Structure} />
          </div>
        </div>

        <div className="text-center mt-16">
          <Image src={FunFactResistor} />
        </div>

        <div className="my-16">
          <h1 className="text-4xl text-center">Capacitors</h1>
          <p className="mt-8">
            A capacitor is a device that stores electrical energy in an electric
            field. It is a passive electronic component with two terminals. The
            effect of a capacitor is known as capacitance. While some
            capacitance exists between any two electrical conductors in
            proximity in a circuit, a capacitor is a component designed to add
            capacitance to a circuit. The capacitor was originally known as a
            condenser or condensator.
          </p>
          <Image src={CapacitorBlast} className="my-16" />
        </div>

        <div className="grid grid-cols-2 mt-16 gap-8">
          <div className="col-span-1">
            <h1 className="text-2xl">Structure of Capacitor</h1>
            <Image src={CapacitorStructure} />
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl">Film Capacitors</h1>
            <Image src={FilmCapacitor} />
          </div>
        </div>

        <div className="grid grid-cols-2 mt-16 gap-8">
          <div className="col-span-1">
            <h1 className="text-2xl">Ceramic Capacitors</h1>
            <Image src={CeramicCapacitor} />
          </div>
          <div className="col-span-1">
            <h1 className="text-2xl">Electrolytic Capacitors</h1>
            <Image src={ElectrolyticCapacitor} />
          </div>
        </div>

        <div className="text-center mt-16">
          <Image src={Mlcc} />
        </div>

        <div className="text-center mt-16">
          <Image src={BigYellowCapacitor} />
        </div>

        <div className="text-center mt-16">
          <Image src={AxialCapacitor} />
        </div>

        <div className="text-center mt-16">
          <Image src={YellowFilmCapacitor} />
        </div>
      </div>

      <Quiz />
      <LikeButton />
      <CommentSection />
    </div>
  );
};

const Quiz = () => {
  const questions = [
    {
      questionText: "What is the primary function of a resistor?",
      answerOptions: [
        { answerText: "To store electrical energy", isCorrect: false },
        { answerText: "To allow current to flow", isCorrect: false },
        { answerText: "To resist the flow of current", isCorrect: true },
        { answerText: "To amplify signals", isCorrect: false },
      ],
    },
    {
      questionText: "What principle does a resistor work on?",
      answerOptions: [
        { answerText: "Faraday's Law", isCorrect: false },
        { answerText: "Ohm's Law", isCorrect: true },
        { answerText: "Kirchhoff's Law", isCorrect: false },
        { answerText: "Lenz's Law", isCorrect: false },
      ],
    },
    {
      questionText: "Which type of resistor is made by winding a thin wire around an insulating substrate?",
      answerOptions: [
        { answerText: "Carbon Film Resistor", isCorrect: false },
        { answerText: "Metal Film Resistor", isCorrect: false },
        { answerText: "Wire Wound Resistor", isCorrect: true },
        { answerText: "Surface Mount Resistor", isCorrect: false },
      ],
    },
    {
      questionText: "What is the unit of measurement for resistance?",
      answerOptions: [
        { answerText: "Volts", isCorrect: false },
        { answerText: "Amperes", isCorrect: false },
        { answerText: "Ohms", isCorrect: true },
        { answerText: "Farads", isCorrect: false },
      ],
    },
    {
      questionText: "What is the primary function of a capacitor?",
      answerOptions: [
        { answerText: "To resist the flow of current", isCorrect: false },
        { answerText: "To store electrical energy", isCorrect: true },
        { answerText: "To amplify signals", isCorrect: false },
        { answerText: "To convert AC to DC", isCorrect: false },
      ],
    },
  ];

  const [currentQuestion, setCurrentQuestion] = React.useState(0);
  const [showScore, setShowScore] = React.useState(false);
  const [score, setScore] = React.useState(0);

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
    <div className="text-center mt-16">
      {showScore ? (
        <div className="text-2xl">You scored {score} out of {questions.length}</div>
      ) : (
        <>
          <div className="text-2xl mb-8">
            <span>{currentQuestion + 1}</span>/{questions.length}
          </div>
          <div className="text-2xl mb-8">{questions[currentQuestion].questionText}</div>
          <div className="grid grid-cols-2 gap-8">
            {questions[currentQuestion].answerOptions.map((answerOption, index) => (
              <button
                key={index}
                onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}
                className="py-4 px-8 bg-blue-500 text-white rounded"
              >
                {answerOption.answerText}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const LikeButton = () => {
  const [likes, setLikes] = React.useState(0);

  return (
    <div className="text-center mt-16">
      <button
        onClick={() => setLikes(likes + 1)}
        className="py-4 px-8 bg-blue-500 text-white rounded"
      >
        Like ({likes})
      </button>
    </div>
  );
};

const CommentSection = () => {
  const [comments, setComments] = React.useState([]);
  const [commentText, setCommentText] = React.useState("");

  const handleCommentSubmit = () => {
    if (commentText.trim() !== "") {
      setComments([...comments, commentText]);
      setCommentText("");
    }
  };

  return (
    <div className="text-center mt-16">
      <div className="mb-8">
        <input
          type="text"
          value={commentText}
          onChange={(e) => setCommentText(e.target.value)}
          className="py-2 px-4 border border-gray-300 rounded w-1/2"
          placeholder="Add a comment"
        />
        <button
          onClick={handleCommentSubmit}
          className="py-2 px-4 bg-blue-500 text-white rounded ml-4"
        >
          Submit
        </button>
      </div>
      <div>
        {comments.map((comment, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            {comment}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
