import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import OnOff from "../../../images/blog/algo/memory-binary/image3.gif";
import OneBit from "../../../images/blog/algo/memory-binary/image6.png";
import OneByte from "../../../images/blog/algo/memory-binary/image8.png";
import Combination from "../../../images/blog/algo/memory-binary/image2.png";
import Table from "../../../images/blog/algo/memory-binary/image1.png";
import Example from "../../../images/blog/algo/memory-binary/image7.png";
import Assignment from "../../../images/blog/algo/memory-binary/image4.gif";
import ColorfulImage from "../../../images/blog/algo/memory-binary/image5.png";

const MemoryBinary = () => {
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
      question: "What is the smallest unit of memory in a computer?",
      options: ["Byte", "Bit", "Nibble", "Word"],
      correctAnswer: 1,
    },
    {
      question: "How many bits are in a byte?",
      options: ["4", "8", "16", "32"],
      correctAnswer: 1,
    },
    {
      question: "What does the binary number 01000001 represent in ASCII?",
      options: ["A", "a", "65", "97"],
      correctAnswer: 0,
    },
    {
      question: "How many possible values can be represented by 8 bits?",
      options: ["128", "256", "512", "1024"],
      correctAnswer: 1,
    },
    {
      question: "What is the binary representation of the decimal number 10?",
      options: ["1010", "1001", "1100", "1110"],
      correctAnswer: 0,
    },
  ];

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Concept of Memory and Binary</h1>
        </div>
      </div>

      <div className="mx-8 md:mx-16 lg:mx-32 mt-8 text-lg">
        <p className="my-8">
          Imagine yourself in a dark room having only one light bulb off. You will just
          have two options then, either to remain in the dark or turn on the lights. These
          “on” and “off” conditions can be treated as a signal for a person outside the
          window of the room. Now if you have two lights in the room, four such signals
          can be made. “Off and off”, “off and on”, “on and off”, “on and on”.
        </p>

        <div className="text-center my-8">
          <Image src={OnOff} />
        </div>

        <p>
          Computers use the same concept to use store data. The smallest unit of its
          memory is bit which can be related with the single light bulb in the room. We
          store “1” in it relating to the “on” condition of the light and “0” for ”off”
          condition. As explained earlier, four signals can be made then with two bits of
          memory.
        </p>

        <p className="my-8">
          With one light bulb, we can store 1 bit of information. With 8 light bulbs, we
          could do 8 bits. 8 bits means we could have 2⁸ possible options (Simple P & C
          right?)
        </p>

        <div className="text-center my-8">
          <Image src={OneBit} />
        </div>

        <p>
          So, if we had enough light bulbs, we could store any amount of data we wanted in
          a digital form.
        </p>

        <div className="text-center my-8">
          <Image src={OneBit} />
        </div>

        <p>Here, one cell represents one bit.</p>
        <p>
          Now, not many light bulbs would fit inside our computer! So computers store bits
          of data by holding electrons in capacitors, for example. This technology is used
          in the RAM memory. However, we shall continue using this metaphor of light bulbs
          as it is simpler to visualize.
        </p>
        <p>So, how many such light bulbs fit into your RAM exactly?</p>
        <p>
          Let’s assume your computer has 4GB RAM, for example. If you convert 4 GB
          according to the above chart, it will be approximately equal to 32000000000
          bits.
        </p>
        <p>That means your 4GB of RAM holds 32 billion bits. That’s 32 billion light bulbs!</p>

        <p className="mt-8 italic">
          But, what does it actually mean to have 32 billion bits to store and represent
          information?
        </p>
        <p className="font-bold">
          To understand what these bits can do for us, let’s take a closer look at the
          binary number system. It only uses 0’s and 1’s to represent any further numeral
          values – and other types of data, too.
        </p>
        <p>Have a look at how the number 216 is stored in the memory.</p>

        <div className="text-center my-8">
          <Image src={Combination} />
        </div>

        <p>
          The blue boxes represent a single bit of memory in the RAM. Computers store 216
          input by the user in its memory in the following way. This decoded form is
          obtained by a decimal to binary conversion. To learn about more conversions
          click here.(complete the link)
        </p>

        <p className="my-8">
          We have learned about how numbers are stored in memory, but what about
          characters?
        </p>

        <p>
          At this point of time,we are capable of representing any number in binary form.
          We will use this to store alphabets. We will assign every character with a
          number. Let us understand this by looking at how “A” is stored in memory.
        </p>

        <div className="text-center my-8">
          <Image src={Table} />
        </div>

        <p>This image gives a clear view of how different alphabets are stored in the binary form.</p>
        <p>
          Take a look at “A”. Its ASCII code is 65 and when we convert 65 to binary form,
          we get “01000001”. So, the computer stores “A” as “01000001” in its memory. But
          how does it differentiate between integer 65 and “A” then? This is done with the
          int and char data types. We will discuss them in-depth later. Click on the link
          to view the ASCII codes of other characters.
        </p>

        <p className="my-8">Now, let us look at how computers store images in memory. We will understand this with an example.</p>

        <div className="text-center my-8">
          <Image src={Example} />
        </div>

        <p>
          Assume the rows and columns of this excel sheet to be the pixels of the image.
          Now the computer will give every pixel a special bit in its ram and then specify
          their value as 0 or 1 according to the black or white color we want in our
          image. 0 for white and 1 for black. This is how simple it is to store a black
          and white image in memory.
        </p>

        <p className="my-8">Now,</p>

        <div className="text-center my-8">
          <Image src={Assignment} />
        </div>
        <p className="text-center">Don't worry, it isn't your typical boring one!</p>

        <div className="border-2 border-solid border-black px-4 mt-8">
          <p>
            You want to save the below image on your computer. Suggest a suitable way for
            the computer to store such an image in its memory.
          </p>

          <p className="mt-8">Hint: Try applying the concepts of storing a black and white image discussed above.</p>
          <div className="text-center my-8">
            <Image src={ColorfulImage} />
          </div>
        </div>

        <p className="border-2 border-solid border-black px-4 my-8">
          Mail your assignment answers to zine.nitj@gmail.com and contact us in
          communication channel with doubts.
        </p>

        {/* Quiz Section */}
        <div className="my-8">
          <h2 className="text-2xl font-bold">Quiz: Binary Memory in Programming</h2>
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

export default MemoryBinary;
