import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import AlgoAlgo from "../../../images/blog/algo/algo/image1.jpg";

const Algorithms = () => {
  const [likeCount, setLikeCount] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");

  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, comment]);
    setComment("");
  };

  const quizQuestions = [
    {
      question: "What is an algorithm?",
      options: [
        "A step-by-step procedure to solve a problem",
        "A programming language",
        "A computer system",
        "A type of hardware"
      ],
      correctAnswer: "A step-by-step procedure to solve a problem"
    },
    {
      question: "Which of the following is not a characteristic of an algorithm?",
      options: [
        "Finite number of steps",
        "Well-defined instructions",
        "Infinite loops",
        "Clear and unambiguous"
      ],
      correctAnswer: "Infinite loops"
    },
    {
      question: "What does GCD stand for?",
      options: [
        "Greatest Common Divisor",
        "Greatest Common Dividend",
        "Greatest Common Division",
        "Greatest Common Difference"
      ],
      correctAnswer: "Greatest Common Divisor"
    },
    {
      question: "What is the purpose of a flowchart in algorithms?",
      options: [
        "To compile the code",
        "To visually represent the algorithm",
        "To execute the algorithm",
        "To debug the algorithm"
      ],
      correctAnswer: "To visually represent the algorithm"
    },
    {
      question: "Which algorithm is more time-efficient for finding the GCD of two numbers?",
      options: [
        "Method 1: Divide both numbers by all possible divisors",
        "Method 2: Use the Euclidean algorithm",
        "Both are equally efficient",
        "Neither is efficient"
      ],
      correctAnswer: "Method 2: Use the Euclidean algorithm"
    }
  ];

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Algorithms</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <p className="my-8">Now that we have understood the basics of how information is actually stored in a computer; let's get right into the crux of this blog. ALGORITHMS !</p>

        <div className="text-center my-8">
          <Image src={AlgoAlgo} />
        </div>

        <p>Algorithms are everywhere! They are so incorporated and embedded in our daily lives that they completely escape our notice. How does your mom prepare her mouth-wateringly delicious dishes? She has a secret recipe. This recipe is an algorithm. Remember the mechanics problems you used to solve. In most of the questions, you first drew the free body diagrams, then resolved the components in the desired axis, and only then proceeded further. This was an algorithm.</p>

        <h1 className="text-3xl my-8">What is an Algorithm?</h1>
        <p>So what exactly is the algorithm then? An algorithm put simply, is a sequence of steps that we follow to solve a problem.</p>
        <p>Let us further try to understand the use and implementation of algorithms through an example that you all must have come across in your school days.</p>
        <p className="">Algorithm to find the G.C.D of two numbers (Let’s take 6 and 8 for our example) (G.C.D stands for Greatest Common Divisor)</p>

        <p className="my-8">Method 1</p>
        <p>- Divide 6 and 8 by 1.</p>
        <p>- Divide both the numbers by 2 this time.</p>
        <p>- As the remainder comes out to be 0, write 2 on a page.</p>
        <p>- Divide both the numbers by 3.</p>
        <p>- As the remainder is not 0 for both, discard 3.</p>
        <p>- Repeat the same process for all numbers till the smallest of the given numbers (6 in this case).</p>
        <p>- Now the largest number amongst the numbers written on our page is our G.C.D.(2 in our case as after 2 we will not find any number which is totally divisible by 6 and 8).</p>

        <p className="mt-16 mb-8">Method 2</p>
        <p>- Divide the larger number by the smaller one and find out the remainder(8/6=2 in this case)</p>
        <p>- Now, forget about the bigger number and consider the remainder and the smaller number. So, divide the larger one of the two by the smaller one and find the remainder (6/2=0 in this case)</p>
        <p>- Repeat until we get remainder as 0 (6/2 is the last step).</p>
        <p>- The smaller number at the time when the remainder is 0 is the G.C.D.(2 in this case)</p>

        <p className="mt-16 mb-8">If you closely observe both the algorithms by taking a few more examples, you will find that the second algorithm takes less number of steps and hence less time in general. This is a core concept. The search for “efficient” algorithms is evergoing in the world of computers. It is the driving force behind so many new inventions. So before writing any code we always try to think of an algorithm that both takes less time and is memory efficient.</p>

        <p>In this search, algorithms often get complex and difficult to understand. So, after writing an algorithm, we usually make a flowchart to make it simpler and understandable. Flowcharts are going to be our next topic. But before that, try a question.</p>

        <p className="my-8 font-bold">Try finding out a time-efficient algorithm for calculating the LCM of two numbers.</p>

        <p className="border-2 border-solid border-black px-4 my-8">Mail your assignment answers to zine.nitj@gmail.com and contact us in communication channel with doubts.</p>

        <h1 className="text-3xl my-8">Quiz on Algorithms</h1>
        <div className="my-8">
          {quizQuestions.map((q, index) => (
            <div key={index} className="mb-4">
              <p>{index + 1}. {q.question}</p>
              {q.options.map((option, i) => (
                <label key={i} className="block">
                  <input type="radio" name={`question-${index}`} value={option} />
                  {option}
                </label>
              ))}
            </div>
          ))}
        </div>

        <div className="my-8">
          <button onClick={handleLike} className="px-4 py-2 bg-blue-500 text-white rounded">Like</button>
          <p className="mt-2">{likeCount} Likes</p>
        </div>

        <div className="my-8">
          <h2 className="text-2xl mb-4">Comments</h2>
          <form onSubmit={handleCommentSubmit}>
            <textarea
              className="w-full p-2 border border-gray-400 rounded"
              rows="4"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <button type="submit" className="mt-2 px-4 py-2 bg-green-500 text-white rounded">Submit</button>
          </form>
          <div className="mt-4">
            {comments.map((c, index) => (
              <p key={index} className="border-b border-gray-300 py-2">{c}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Algorithms;
