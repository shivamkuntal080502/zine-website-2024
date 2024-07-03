import React, { useState } from "react";
import Link from "next/link";
import { Chrono } from "react-chrono";
import Image from "next/image";
import BasicFunction from "../../../images/blog/algo/array/image26.gif";
import CopyPasteMeme from "../../../images/blog/algo/array/image26.gif";
import FunctionMachineMeme from "../../../images/blog/algo/array/image24.gif";
import SimpleFunctionCode from "../../../images/blog/algo/array/image2.png";
import Sum1015 from "../../../images/blog/algo/array/image17.png";
import Output25 from "../../../images/blog/algo/array/image19.png";
import CalcFunction from "../../../images/blog/algo/array/image20.png";
import FunctionWithArguments from "../../../images/blog/algo/array/image7.png";
import ArrayFirst from "../../../images/blog/algo/array/image25.png";
import ArraySecond from "../../../images/blog/algo/array/image18.gif";
import Indexing from "../../../images/blog/algo/array/image19.png";
import TooManyPrintf from "../../../images/blog/algo/array/image11.png";
import ArrayWithLoop from "../../../images/blog/algo/array/image8.png";
import LinearSearch from "../../../images/blog/algo/array/image23.gif";
import GeeksForGeeks from "../../../images/blog/algo/array/image21.jpg";
import Bubble1 from "../../../images/blog/algo/array/image10.jpg";
import Bubble2 from "../../../images/blog/algo/array/image5.jpg";
import Bubble3 from "../../../images/blog/algo/array/image14.jpg";
import Bubble4 from "../../../images/blog/algo/array/image16.jpg";
import Bubble5 from "../../../images/blog/algo/array/image15.jpg";
import Bubble6 from "../../../images/blog/algo/array/image6.jpg";
import Bubble7 from "../../../images/blog/algo/array/image13.jpg";
import Bubble8 from "../../../images/blog/algo/array/image1.jpg";
import Bubble9 from "../../../images/blog/algo/array/image22.jpg";
import Bubble10 from "../../../images/blog/algo/array/image12.jpg";
import Bubble11 from "../../../images/blog/algo/array/image4.jpg";
import Bubble12 from "../../../images/blog/algo/array/image3.jpg";

const Arrays = () => {
  const [likes, setLikes] = useState(0);
  const [comments, setComments] = useState([]);
  const [comment, setComment] = useState("");
  const [answers, setAnswers] = useState({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  const handleInputChange = (index, value) => {
    setAnswers({ ...answers, [index]: value });
  };

  const handleQuizSubmit = () => {
    setQuizSubmitted(true);
  };

  const quizQuestions = [
    {
      question: "What is an array?",
      options: [
        "A data structure that can hold multiple values of different types.",
        "A data structure that can hold multiple values of the same type.",
        "A function in C programming.",
        "A pointer to an integer."
      ],
      correctAnswer: 1
    },
    {
      question: "How do you declare an array in C?",
      options: [
        "int arrayName[10];",
        "array int[10];",
        "int arrayName;",
        "array[10] int;"
      ],
      correctAnswer: 0
    },
    {
      question: "Which of the following is the correct way to access the third element in an array?",
      options: [
        "array[2]",
        "array(3)",
        "array[3]",
        "array{2}"
      ],
      correctAnswer: 0
    },
    {
      question: "What is the index of the last element in a 10-element array?",
      options: [
        "10",
        "9",
        "11",
        "8"
      ],
      correctAnswer: 1
    },
    {
      question: "Which of the following sorting algorithms has the best average case time complexity?",
      options: [
        "Bubble Sort",
        "Selection Sort",
        "Insertion Sort",
        "Merge Sort"
      ],
      correctAnswer: 3
    }
  ];

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-algo-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Functions and Arrays</h1>
        </div>
      </div>

      <div className="mx-32 mt-8 text-lg">
        <h1 className="my-8 text-3xl">Functions</h1>

        <p>Remember scanf and printf discussed in the input and output section of this blog? We gave a hint that these were functions and briefly discussed what functions are. Let’s elaborate on that in this section. So, we know that when we write printf(“zine”), the computer gets a command to print “zine” on the screen. Behind the scenes, a separate code was written while designing the C language according to which the special task of printing is assigned whenever we write or call a print function in our code i.e. to display something on the screen. “Calling” a function is the technical term to use a function.</p>

        <div className="text-center my-8">
          <Image src={BasicFunction} />
        </div>

        <p>Similar to printf() we can also define our own functions that do some specific tasks and can be used simply by calling them as we call print. This is an integral part of programming. Let us start with a definition.</p>

        <p className="my-8">A function is a block of statements that performs a specific task. Let’s say you are writing a program and you need to perform the same task in that program more than once. In such a case you have two options:</p>

        <p>a) Use the same set of statements every time you want to perform the task.A lot of Ctrl + C - Ctrl + V !</p>

        <div className="text-center my-8">
          <Image src={CopyPasteMeme} />
        </div>

        <p>b) Or, create a function to perform that task and just call it every time you need to perform that task.</p>

        <p className="my-8">Using option (b) is easier and concise, and a good programmer always uses functions while writing code. In other words,</p>

        <p>Functions are used because of the following reasons –</p>
        <p>a) To improve the readability of code.</p>
        <p>b) Improves the reusability of the code, the same function can be used in any program rather than writing the same code from scratch.</p>
        <p>Now let us try to understand how they actually work. In essence, functions accept some input (called arguments), do some processing on this input, through the block of statements present, and give an output.</p>

        <div className="text-center my-8">
          <Image src={FunctionMachineMeme} />
        </div>

        <p>Let's see an example of a simple function that takes two numbers and prints their sum.</p>

        <div className="text-center my-8">
          <Image src={SimpleFunctionCode} />
        </div>
        
        <p>We know a,b are the arguments to the function. But what is this “void”? This denotes the return type of the function. We can return values in a function. Essentially, it means that if we try to assign the function value to a variable as</p>

        <p className="my-8">variable = sum(a,b);</p>

        <p>This is the type of variable required. “Void” in this case denotes no value is returned and hence the function cannot be assigned to a variable. The return type can be int, char, float, or any other data type.</p>

        <p className="mt-8">So when we call or sum function as</p>
        <div className="text-center my-8">
          <Image src={Sum1015} />
          <Image src={Output25} />
        </div>

        <p>We totally understand that the concepts of functions can be confusing sometimes, so we suggest you visit this video.(complete the link)</p>
        <p>Try to find out the output of the following codes.</p>

        <div className="text-center my-8">
          <Image src={CalcFunction} />
        </div>

        <p>A function calc() is made outside the main function. The value returned from the function calc() is printed again in the main.</p>

        <p className="my-8">Try doing a similar problem using the concept of arguments.</p>

        <div className="text-center my-8">
          <Image src={FunctionWithArguments} />
        </div>

        <p>Try sketching the flow(not flowchart) of this program showing the function calls.</p>

        <h1 className="my-8 text-3xl">Concept of Arrays</h1>

        <p>Ever been annoyed of declaring multiple variables, even if they are closely related? Like declaring the marks of all students in a class using a separate variable. This is where arrays come in! Let us see how they work.</p>

        <div className="text-center my-8">
          <Image src={ArrayFirst} />
          <Image src={ArraySecond} />
        </div>

        <p>Instead of declaring a separate variable for every student, arrays help us to declare a single variable such as marks[100], which denotes all the 100 students in a single variable.</p>

        <p className="my-8">If we need to access the marks of the second student, we can simply call marks[1] (remember indexing starts from 0), thus marks[1] denotes the marks of the second student.</p>

        <div className="text-center my-8">
          <Image src={Indexing} />
        </div>

        <p className="my-8">Remember how we used printf every time we needed to print something on the screen? Similarly, the print function does the same thing every time it is called, thus improving code reusability and efficiency. Also, it helps to avoid typing the same thing again and again.</p>

        <h1 className="my-8 text-3xl">Examples</h1>

        <p>Let’s now see an example where we find the maximum marks scored by the students using an array.</p>

        <p className="my-8">So, the concept of arrays in simple terms is a data structure where we can store multiple values of the same type. Let us see a few examples to better understand how arrays can be used in C programming.</p>

        <div className="text-center my-8">
          <Image src={TooManyPrintf} />
        </div>

        <p>Instead of printing the marks of all students individually using multiple printf statements, we can use a loop to print the marks of all students using an array.</p>

        <div className="text-center my-8">
          <Image src={ArrayWithLoop} />
        </div>

        <p>Another common use of arrays is for searching algorithms. Let’s say we need to find the marks of a student whose roll number is given. We can use the linear search algorithm to find the marks of that student.</p>

        <div className="text-center my-8">
          <Image src={LinearSearch} />
        </div>

        <p>Arrays can also be used for sorting algorithms. Here’s an example of bubble sort, a simple sorting algorithm that repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order.</p>

        <div className="text-center my-8">
          <Image src={GeeksForGeeks} />
          <Image src={Bubble1} />
          <Image src={Bubble2} />
          <Image src={Bubble3} />
          <Image src={Bubble4} />
          <Image src={Bubble5} />
          <Image src={Bubble6} />
          <Image src={Bubble7} />
          <Image src={Bubble8} />
          <Image src={Bubble9} />
          <Image src={Bubble10} />
          <Image src={Bubble11} />
          <Image src={Bubble12} />
        </div>
      </div>

      <div className="mx-32 my-8 text-lg">
        <h2 className="text-2xl">Quiz: Test Your Knowledge on Arrays</h2>
        <form onSubmit={(e) => { e.preventDefault(); handleQuizSubmit(); }}>
          {quizQuestions.map((q, index) => (
            <div key={index} className="my-4">
              <p>{q.question}</p>
              {q.options.map((option, i) => (
                <div key={i}>
                  <input
                    type="radio"
                    name={`question${index}`}
                    value={i}
                    onChange={(e) => handleInputChange(index, e.target.value)}
                    disabled={quizSubmitted}
                  />
                  <label>{option}</label>
                </div>
              ))}
              {quizSubmitted && answers[index] != null && (
                <p className={`mt-2 ${answers[index] == q.correctAnswer ? 'text-green-600' : 'text-red-600'}`}>
                  {answers[index] == q.correctAnswer ? 'Correct!' : `Incorrect! The correct answer is ${q.options[q.correctAnswer]}`}
                </p>
              )}
            </div>
          ))}
          {!quizSubmitted && <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2">Submit Quiz</button>}
        </form>
      </div>

      <div className="mx-32 my-8">
        <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2">Like ({likes})</button>
      </div>

      <div className="mx-32 my-8">
        <h2 className="text-2xl">Comments</h2>
        <div className="my-4">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="border border-gray-300 p-2 w-full"
            placeholder="Add a comment..."
          />
          <button onClick={handleCommentSubmit} className="mt-2 bg-blue-500 text-white px-4 py-2">Submit</button>
        </div>
        <div className="my-4">
          {comments.map((c, index) => (
            <p key={index} className="border-b border-gray-300 py-2">{c}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Array;
