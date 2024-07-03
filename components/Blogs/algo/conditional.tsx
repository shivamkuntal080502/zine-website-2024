import React, { useState } from "react";
import Image from "next/image";
import FirstImage from "../../../images/blog/algo/conditional/image15.jpg";
import FlowchartCondition from "../../../images/blog/algo/conditional/image9.jpg";
import Code1 from "../../../images/blog/algo/conditional/image2-1.png";
import Code2 from "../../../images/blog/algo/conditional/image2-2.png";
import IfelseCode1 from "../../../images/blog/algo/conditional/image4-1.png";
import IfelseCode2 from "../../../images/blog/algo/conditional/image4-12.png";
import IfelseCode3 from "../../../images/blog/algo/conditional/image4-12.png";
import Hello1 from "../../../images/blog/algo/conditional/image8-1.png";
import Hello2 from "../../../images/blog/algo/conditional/image8-12.png";
import Hello3 from "../../../images/blog/algo/conditional/image8-2.png";
import IfElse1 from "../../../images/blog/algo/conditional/image17-1.png";
import IfElse2 from "../../../images/blog/algo/conditional/image17-2.png";
import QuizTime from "../../../images/blog/algo/conditional/image10.gif";
import QuizCode from "../../../images/blog/algo/conditional/image7.png";
import Printf10 from "../../../images/blog/algo/conditional/image16.png";
import BikeLoop from "../../../images/blog/algo/conditional/image5.gif";
import LoopFlowchart from "../../../images/blog/algo/conditional/image3.png";
import LoopCode from "../../../images/blog/algo/conditional/image14.png";
import NaturalNumbers10 from "../../../images/blog/algo/conditional/image11.png";
import Gif from "../../../images/blog/algo/conditional/image18.gif";
import Candies from "../../../images/blog/algo/conditional/image13.png";

const Conditional = () => {
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
      question: "What does the if statement do?",
      options: ["Executes code if a condition is true", "Executes code if a condition is false", "Always executes code", "None of the above"],
      correctAnswer: 0
    },
    {
      question: "Which of the following is a nested if statement?",
      options: ["if(condition1) { if(condition2) { } }", "if(condition1) { } else { }", "if(condition1) { } else if(condition2) { }", "All of the above"],
      correctAnswer: 0
    },
    {
      question: "What is the correct syntax for an if-else statement?",
      options: ["if(condition) { } else { }", "if(condition) else { }", "if(condition) { else { } }", "None of the above"],
      correctAnswer: 0
    },
    {
      question: "How do you initialize a for loop in C?",
      options: ["for(initialization; condition; update)", "for(condition; initialization; update)", "for(update; condition; initialization)", "None of the above"],
      correctAnswer: 0
    },
    {
      question: "Which loop will run indefinitely?",
      options: ["for(;;)", "while(true)", "do { } while(true)", "All of the above"],
      correctAnswer: 3
    },
  ];

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Conditional Statements</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <p className="my-8">As we discussed in the flowchart (the diamond box), conditional statements are used to define the flow of the program. It is very well explained by this image.</p>

        <div className="text-center my-8">
          <Image src={FirstImage} />
        </div>

        <p>Conditional statements are used for decision making. The process is similar to what we do in real life. If a specified condition is true then a particular block of statements is executed and if not then the other one. Notice how we used ‘if’ and ‘if not’ in the previous lines? That’s what actually ‘if-else’ statements are in the world of programming.</p>

        <p className="my-8 font-bold">Now that we are approaching the first real programming construct of this blog, one thing you must understand that even though our general syntaxes will be following the C language, these constructs are common to all programming languages in different forms.</p>

        <div className="text-center my-8">
          <Image src={FlowchartCondition} />
        </div>

        <h1 className="my-8 text-3xl">If statement:</h1>

        <p>An “if statement” is a well known conditional statement in programming. In an, if statement a condition is given inside the parentheses (), and the code tests and evaluates the condition, and if the condition is true then the if block is executed otherwise not.</p>

        <p className="my-8">Syntax:</p>

        <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
          <p>if(condition)</p>
          <p>{`{`}</p>
          <p className="ml-12">"Code to be executed if the condition is true."</p>
          <p>{`}`}</p>
        </div>

        <p>Let's take an example:</p>

        <div className="text-center my-8">
          <Image src={Code1} />
        </div>
        <div className="text-center my-8">
          <Image src={Code2} />
        </div>

        <p>If the condition is true the code inside the ‘if block’ will be executed and “Hello World” will be printed. (printf is used to print something to the user in C).</p>

        <p className="my-8">The if statements are usually used in 4 forms if, if-else, if-else ladder, and nested if.</p>

        <p>We have understood the If statement above,</p>

        <h1 className="my-8 text-3xl">If-else statement:</h1>

        <p>In if-else statements, the condition is tested and evaluated and if it is true then the block inside the if statement is executed and if it is false then instead of doing nothing, the block inside the else statement is executed.</p>

        <p className="my-8">Let’s take an example. Say we have to check whether a given person is above 18 or not and print “Person is above 18” if he/she is and “Person is not above 18” if not.</p>

        <p className="italic">Remember: ‘scanf’ is used to take input from users in the C programming language.</p>

        <div className="text-center my-8">
          <Image src={IfelseCode1} />
        </div>
        <div className="text-center my-8">
          <Image src={IfelseCode2} />
        </div>

        <p>In the above example, the age input given by the user is 12 which is less than 18. So the condition (age{">"}=18) is false and its block of code is not executed. So the else condition is true and its block of code is executed.</p>

        <div className="text-center my-8">
          <Image src={IfelseCode1} />
        </div>
        <div className="text-center my-8">
          <Image src={IfelseCode3} />
        </div>

        <p>When age 20{">"}18, if condition is true and its corresponding block of code is executed.</p>

        <h1 className="my-8 text-3xl">Nested if:</h1>

        <p>A “nested if” is an if statement that is the target of another if statement. In other words, it is an if statement inside another if statement.</p>

        <p className="my-8">Syntax:</p>

        <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
          <p>if(condition1)</p>
          <p>{`{`}</p>
          <p className="ml-12">if(condition2)</p>
          <p className="ml-12">{`{`}</p>
          <p className="ml-24">"Code to be executed if the condition is true."</p>
          <p className="ml-12">{`}`}</p>
          <p>{`}`}</p>
        </div>

        <p>Let us understand nested if with an example:</p>

        <div className="text-center my-8">
          <Image src={Hello1} />
        </div>
        <div className="text-center my-8">
          <Image src={Hello2} />
        </div>
        <div className="text-center my-8">
          <Image src={Hello3} />
        </div>

        <p>In this case, if the first if condition is true, the block is executed and inside that block, another if condition is present and if this condition is also true then the block is executed.</p>

        <h1 className="my-8 text-3xl">If-else ladder:</h1>

        <p>The if-else ladder is used to test multiple conditions. It is a ladder because it consists of multiple if-else conditions. When a condition is tested and found false then the next if-else condition is executed and so on. The last else is executed when all the other conditions are false.</p>

        <div className="text-center my-8">
          <Image src={IfElse1} />
        </div>
        <div className="text-center my-8">
          <Image src={IfElse2} />
        </div>

        <h1 className="my-8 text-3xl">Quiz Time:</h1>

        <div className="text-center my-8">
          <Image src={QuizTime} />
        </div>

        <p className="font-bold">Try out this code by yourself and answer the question: "Which number is the largest?"</p>

        <div className="text-center my-8">
          <Image src={QuizCode} />
        </div>

        <div className="bg-gray-200 rounded-lg text-gray-700 px-16 my-4 py-4 border-2 border-solid border-black">
          <p>if(num1 &gt;= num2 && num1 &gt;= num3)</p>
          <p>{`{`}</p>
          <p className="ml-12">largest = num1;</p>
          <p>{`}`}</p>
          <p>else if (num2 &gt;= num1 && num2 &gt;= num3)</p>
          <p>{`{`}</p>
          <p className="ml-12">largest = num2;</p>
          <p>{`}`}</p>
          <p>else</p>
          <p>{`{`}</p>
          <p className="ml-12">largest = num3;</p>
          <p>{`}`}</p>
        </div>

        <h1 className="my-8 text-3xl">Like Button:</h1>

        <div className="text-center my-8">
          <button onClick={handleLike} className="px-4 py-2 bg-blue-500 text-white rounded">Like</button>
          <p>{likes} {likes === 1 ? "Like" : "Likes"}</p>
        </div>

        <h1 className="my-8 text-3xl">Quiz:</h1>

        <form onSubmit={handleQuizSubmit} className="space-y-4">
          {quizQuestions.map((question, index) => (
            <div key={index}>
              <p>{question.question}</p>
              {question.options.map((option, i) => (
                <label key={i} className="block">
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={i}
                    onChange={() => handleQuizChange(index, i)}
                    disabled={quizSubmitted}
                  />
                  {option}
                </label>
              ))}
            </div>
          ))}
          {!quizSubmitted && <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit Quiz</button>}
        </form>

        {quizSubmitted && (
          <div className="my-8">
            {quizQuestions.map((question, index) => (
              <div key={index}>
                <p>{question.question}</p>
                <p>Your Answer: {question.options[quizAnswers[index]]}</p>
                <p>Correct Answer: {question.options[question.correctAnswer]}</p>
              </div>
            ))}
          </div>
        )}

        <h1 className="my-8 text-3xl">Comments:</h1>

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
          <button onClick={handleCommentSubmit} className="px-4 py-2 bg-blue-500 text-white rounded mt-2">Submit Comment</button>
        </div>
      </div>
    </div>
  );
};

export default Conditional;
