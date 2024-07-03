import React, { useState } from "react";
import Image from "next/image";
import BmeIntro from "../../../images/blog/bme/intro/image1.gif";

interface BlogPost {
  title: string; // date
  cardTitle: string; // heading
}

const Intro = () => {
  const [likes, setLikes] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleQuizChange = (question: number, answer: string) => {
    setQuizAnswers({ ...quizAnswers, [question]: answer });
  };

  const handleCommentSubmit = () => {
    if (commentInput.trim()) {
      setComments([...comments, commentInput]);
      setCommentInput("");
    }
  };

  return (
    <div className="text-black bg-white w-screen">
      <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
        <div className="pl-32 backdrop-blur-xl">
          <h1 className="text-white text-4xl font-bold">Introduction</h1>
        </div>
      </div>

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
        <div className="mt-8 text-center">
          <Image src={BmeIntro} width={500} height={400} />
        </div>

        <p className="mt-8">
          Engineers get to take the credit for designing the robots to do what they are programmed for. As all types of engineers work together, they build a complete robot. Mechanical engineers are responsible for designing the robot’s structure, joint mechanisms, bearings, heat transfer characteristics, etc.{" "}
        </p>
        <p className="mt-8">
          Mechanical Engg. is an integral part of robotics. It ranges from knowing why triangles are used in cardboard layers to finding a Planet’s surface gravity and terrain characteristics; to designing a Space rover’s drive system. Because the whole world isn’t a simulation, we need a device which can interact with the environment and are called bots.
        </p>
        <p>
          Here we give you a basic introduction to Mechanical Engg. for robotics to jumpstart your curiosity.
        </p>

        <p className="my-8">
          <b>So how does one design a robot? We begin with a blueprint.</b>
        </p>

        <p>
          Before getting the tools ready we have to plan on how to solve the problem at hand.
        </p>
        <p>
          Analyzing the problem helps generate insights into what possible solutions there can exist. Once the plan is ready, we design the bot, choose parts & materials that we may need for the bot and run simulations to test our theoretical design. Tested results are then validated using a physical prototype.
        </p>

        <p className="mt-8">
          There are many different parts and materials available for building bots or anything in general. We will be discussing a few to help you be familiar with the world of robotics.
        </p>

        <h1 className="text-3xl my-8">Quiz</h1>
        <div className="mb-8">
          <div>
            <p>1. What are mechanical engineers responsible for in robotics?</p>
            <select onChange={(e) => handleQuizChange(1, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. Only designing software</option>
              <option value="b">b. Designing robot structures and mechanisms</option>
              <option value="c">c. Electrical wiring of robots</option>
            </select>
          </div>

          <div>
            <p>2. Why is mechanical engineering important in robotics?</p>
            <select onChange={(e) => handleQuizChange(2, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. To design aesthetics of robots</option>
              <option value="b">b. To interact with the physical world</option>
              <option value="c">c. To write code for robots</option>
            </select>
          </div>

          <div>
            <p>3. What is the initial step in designing a robot?</p>
            <select onChange={(e) => handleQuizChange(3, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. Building the prototype</option>
              <option value="b">b. Creating a blueprint</option>
              <option value="c">c. Testing the robot</option>
            </select>
          </div>

          <div>
            <p>4. Why do robots need to interact with the environment?</p>
            <select onChange={(e) => handleQuizChange(4, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. To show off their abilities</option>
              <option value="b">b. To perform tasks</option>
              <option value="c">c. To entertain people</option>
            </select>
          </div>

          <div>
            <p>5. What is validated after testing a robot’s theoretical design?</p>
            <select onChange={(e) => handleQuizChange(5, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. The physical prototype</option>
              <option value="b">b. The simulation software</option>
              <option value="c">c. The project manager's approval</option>
            </select>
          </div>
        </div>

        <h1 className="text-3xl my-8">Like this article?</h1>
        <button onClick={handleLike} className="px-4 py-2 bg-blue-600 text-white rounded">
          Like {likes}
        </button>

        <h1 className="text-3xl my-8">Comments</h1>
        <div className="mb-4">
          <input
            type="text"
            value={commentInput}
            onChange={(e) => setCommentInput(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded"
          />
          <button onClick={handleCommentSubmit} className="mt-2 px-4 py-2 bg-blue-600 text-white rounded">
            Submit
          </button>
        </div>
        <div>
          {comments.map((comment, index) => (
            <div key={index} className="p-2 my-2 border rounded">
              {comment}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Intro;
