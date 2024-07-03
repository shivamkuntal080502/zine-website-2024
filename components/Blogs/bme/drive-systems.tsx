import React, { useState } from "react";
import Image from "next/image";
import DifferentialDrive from "../../../images/blog/bme/drive-systems/image1.gif";
import ICR from "../../../images/blog/bme/drive-systems/image2.png";
import WheelDirection from "../../../images/blog/bme/drive-systems/image3.jpg";
import SkidSteering from "../../../images/blog/bme/drive-systems/image4.png";
import SynchronousDrive1 from "../../../images/blog/bme/drive-systems/image5.png";
import SynchronousDrive2 from "../../../images/blog/bme/drive-systems/image6.png";
import HolonomicDrive1 from "../../../images/blog/bme/drive-systems/image7.png";
import HolonomicDrive2 from "../../../images/blog/bme/drive-systems/image8.png";
import MecanumDrive from "../../../images/blog/bme/drive-systems/image9.gif";
import MecanumDriveAxis from "../../../images/blog/bme/drive-systems/image10.png";

const DriveSystems = () => {
  const [likes, setLikes] = useState(0);
  const [quizAnswers, setQuizAnswers] = useState({});
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleQuizChange = (question, answer) => {
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
          <h1 className="text-white text-4xl font-bold">Drive Systems</h1>
        </div>
      </div>

      <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
        <h1 className="text-3xl my-8">DIFFERENTIAL DRIVE</h1>
        <div className="mt-8 text-center">
          <Image src={DifferentialDrive} />
        </div>
        <p>The velocity difference between the two wheels drives the robot in any required path and direction. In this figure: </p>
        <ul>
          <li>- N = no. of rotations per minute.</li>
          <li>- The angular velocity of the left wheel is greater due to which it covers more path as compared to the right wheel resulting in the curved motion of the center of mass of the system.</li>
          <li>- ICR (instantaneous center of rotation) - It is the point such that the velocity vectors are perpendicular to the line joining the point to the wheel.</li>
        </ul>
        <div className="mt-8 text-center">
          <Image src={ICR} />
        </div>
        <div className="mt-8 text-center">
          <Image src={WheelDirection} />
        </div>
        <p>The direction of wheels(blue arrow) is directly proportional to the velocity vector and the red arrow vector shows the resultant direction of the bot.</p>

        <h1 className="text-3xl my-8">SKID STEERING</h1>
        <ul>
          <li>- Unlike differential drive, the castor is replaced with two driving wheels.</li>
          <li>- The wheels on the same side of the chassis have the same velocity.</li>
          <li>- Some of the wheels skid during the course of motion, so given the name skid steering(the reason has been described below).</li>
        </ul>
        <div className="mt-8 text-center">
          <Image src={SkidSteering} />
        </div>

        <h1 className="text-3xl my-8">SYNCHRONOUS DRIVE</h1>
        <div className="mt-8 text-center">
          <Image src={SynchronousDrive1} />
        </div>
        <p>The synchro drive system is a two motor, three/four wheeled drive.</p>
        <p>The working of synchronous drive is explained below :</p>
        <ul>
          <li>- One motor rotates all wheels to produce motion.</li>
          <li>- The other motor turns all wheels to change direction.</li>
          <li>- The wheels are connected with a belt to provide the same motion</li>
        </ul>
        <div className="mt-8 text-center">
          <Image src={SynchronousDrive2} />
        </div>

        <h1 className="text-3xl my-8">HOLONOMIC DRIVE</h1>
        <p>The controllable degrees of freedom is equal to total degrees of freedom. In simple terms, it is not bound to go in any one specified direction and <b>can traverse anywhere in the x-y plane/</b></p>
        <p>An Omni wheel is generally suggested for the holonomic drives but mecanum wheels can also fit the desired conditions of holonomic systems.</p>
        <div className="mt-8 text-center grid grid-cols-2">
          <Image src={HolonomicDrive1} />
          <Image src={HolonomicDrive2} />
        </div>

        <h1 className="text-3xl my-8">MECANUM DRIVE</h1>
        <div className="mt-8 text-center">
          <Image src={MecanumDrive} />
        </div>
        <p>Mecanum drive is also a type of holonomic drive i.e., the robot can move in any direction by keeping the x,y axis of the robot constant. Try to notice the constant (only shifts parallel) x-y axis in the gif above. </p>
        <p>You should visit this <a className="text-blue-600 underline" href="https://www.youtube.com/watch?v=VYl4cleQwfk">video</a> and know the importance of friction in the movement of wheels.</p>
        <div className="mt-8 text-center">
          <Image src={MecanumDriveAxis} />
        </div>
        <p>All the wheels are rotated towards the front direction and the resultant vector force direction occurs due to the design of the mecanum wheel. If we add all the frictional force vectors, we will get a net forward force resulting in the forward movement of the chassis.</p>
        <p className="mt-8">How will we harness the different energy from different power sources to make our robot do the work we want? Surely the wheels won’t power themselves up. The answer to this lies in actuators!</p>

        <h1 className="text-3xl my-8">QUIZ</h1>
        <div className="mb-8">
          <div>
            <p>1. What is the main difference between differential drive and skid steering?</p>
            <select onChange={(e) => handleQuizChange(1, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. Differential drive uses one motor, skid steering uses two.</option>
              <option value="b">b. Skid steering replaces the castor with two driving wheels.</option>
              <option value="c">c. Differential drive is more efficient than skid steering.</option>
            </select>
          </div>

          <div>
            <p>2. What does ICR stand for?</p>
            <select onChange={(e) => handleQuizChange(2, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. Internal Control Rotation</option>
              <option value="b">b. Instantaneous Center of Rotation</option>
              <option value="c">c. Independent Circular Rotation</option>
            </select>
          </div>

          <div>
            <p>3. How many motors are typically used in a synchronous drive system?</p>
            <select onChange={(e) => handleQuizChange(3, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. One motor</option>
              <option value="b">b. Two motors</option>
              <option value="c">c. Three motors</option>
            </select>
          </div>

          <div>
            <p>4. Which type of wheel is generally suggested for holonomic drives?</p>
            <select onChange={(e) => handleQuizChange(4, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. Mecanum wheel</option>
              <option value="b">b. Omni wheel</option>
              <option value="c">c. Castor wheel</option>
            </select>
          </div>

          <div>
            <p>5. Mecanum drive is a type of which drive system?</p>
            <select onChange={(e) => handleQuizChange(5, e.target.value)}>
              <option value="">Select an answer</option>
              <option value="a">a. Differential drive</option>
              <option value="b">b. Skid steering</option>
              <option value="c">c. Holonomic drive</option>
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

export default DriveSystems;
