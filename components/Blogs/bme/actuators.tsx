import React, { useState } from "react";
import Image from "next/image";
import HydraulicActuator from "../../../images/blog/bme/actuators/image1.png";
import Excavator from "../../../images/blog/bme/actuators/image2.png";
import PneumaticActuator from "../../../images/blog/bme/actuators/image3.png";
import BrushedDCMotor from "../../../images/blog/bme/actuators/image4.png";
import BLDCMotor from "../../../images/blog/bme/actuators/image5.png";
import InRunnerBLDCMotor from "../../../images/blog/bme/actuators/image6.gif";
import ServoMotor1 from "../../../images/blog/bme/actuators/image7.png";
import ServoMotor2 from "../../../images/blog/bme/actuators/image8.jpg";
import StepperMotor1 from "../../../images/blog/bme/actuators/image9.png";
import StepperMotor2 from "../../../images/blog/bme/actuators/image10.png";
import AdvancedActuator from "../../../images/blog/bme/actuators/image11.gif";

const quizQuestions = [
    {
        question: "What principle do hydraulic actuators operate on?",
        options: ["Pascal's Law", "Newton's Third Law", "Ohm's Law", "Boyle's Law"],
        answer: "Pascal's Law"
    },
    {
        question: "What is the main drawback of pneumatic actuators?",
        options: ["Limited acceleration", "High cost", "Need for compressed air network", "High heat dissipation"],
        answer: "Need for compressed air network"
    },
    {
        question: "What type of motors are known for having no brushes?",
        options: ["Brushed DC Motors", "Servo Motors", "Brushless DC Motors", "Stepper Motors"],
        answer: "Brushless DC Motors"
    },
    {
        question: "What is a common use for stepper motors?",
        options: ["In multirotors", "Driving coordinate axes in 3D printers", "RC plane aileron control", "Excavators"],
        answer: "Driving coordinate axes in 3D printers"
    },
    {
        question: "What is a characteristic feature of servo motors?",
        options: ["High torque and high speed", "Precision actuation with feedback", "Electrically commutated", "Operates without feedback"],
        answer: "Precision actuation with feedback"
    }
];

const Actuators = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [quizAnswers, setQuizAnswers] = useState({});
    const [quizSubmitted, setQuizSubmitted] = useState(false);
    const [comments, setComments] = useState([]);
    const [commentInput, setCommentInput] = useState("");

    const handleLike = () => {
        setLikeCount(likeCount + 1);
    };

    const handleQuizChange = (index, answer) => {
        setQuizAnswers({ ...quizAnswers, [index]: answer });
    };

    const handleQuizSubmit = () => {
        setQuizSubmitted(true);
    };

    const handleCommentChange = (e) => {
        setCommentInput(e.target.value);
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (commentInput.trim()) {
            setComments([...comments, commentInput.trim()]);
            setCommentInput("");
        }
    };

    const renderQuizResult = () => {
        let score = 0;
        quizQuestions.forEach((q, index) => {
            if (quizAnswers[index] === q.answer) {
                score++;
            }
        });
        return (
            <div className="my-8">
                <h3 className="text-xl">Quiz Results</h3>
                <p>Your Score: {score} out of {quizQuestions.length}</p>
            </div>
        );
    };

    return (
        <div className="text-black bg-white w-screen">
            <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
                <div className="pl-32 backdrop-blur-xl">
                    <h1 className="text-white text-4xl font-bold">Actuators</h1>
                </div>
            </div>

            <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
                <p>Actuators are used for moving the robot’s joints (such as picking up a block and placing it somewhere else). To be more specific, they require a control signal and a source of energy to provide a mechanical output.</p>

                <h1 className="text-3xl my-8">TYPES OF ACTUATORS</h1>

                <h2 className="text-2xl my-8">- MOTION BASED</h2>
                <h3 className="text-xl my-8">* ROTARY</h3>
                <p>Actuators (like Motors) that convert energy into mechanical work in the form of rotational motion (along the axis of the motor) to produce torque are called Rotary Actuators.</p>
                <h3 className="text-xl my-8">* LINEAR</h3>
                <p>A linear actuator is an actuator that creates motion in a straight line, in contrast to the circular motion of a conventional Rotary actuator. These are generally modified rotary actuators with a Gearbox, designed to provide Translation motion from the rotational motion. </p>

                <h2 className="text-2xl my-8">- ACTUATION BASED</h2>
                <h3 className="text-xl my-8">* HYDRAULIC ACTUATOR</h3>
                <p>Basic principle of hydraulic actuators is Pascal’s Law and the main drawback of this kind of actuator is limited acceleration.</p>
                <div className="mt-8 text-center">
                    <Image src={HydraulicActuator} />
                </div>
                <div className="mt-8 text-center">
                    <Image src={Excavator} />
                </div>
                <h3 className="text-xl my-8">* PNEUMATIC ACTUATOR</h3>
                <p>They have air as the working fluid. Therefore, they need a compressed air network system for its working. These enable considerable forces to be produced from relatively small pressure changes. It can quickly respond as the power source does not need to be stored in reserve for operation. Moreover, pneumatic actuators are cheaper.</p>
                <div className="mt-8 text-center">
                    <Image src={PneumaticActuator} />
                </div>
                <h3 className="text-xl my-8">* ELECTRIC ACTUATOR</h3>
                <p>An electric actuator is a mechanical device used to convert electricity into kinetic energy. </p>

                <h2 className="text-2xl my-8">DC MOTORS</h2>
                <p>They are used often because of the <b>ease of controlling speed and direction.</b> They quickly respond to changes in the controlling signal.</p>

                <h3 className="text-xl my-8">BRUSHED</h3>
                <p>These motors generally have low torque and high speed. They, however, offer high resistance (due to the presence of brushes), causing a <b>lot of heat dissipation and jerky motion.</b></p>
                <div className="mt-8 text-center">
                    <Image src={BrushedDCMotor} />
                </div>

                <h3 className="text-xl my-8">BRUSHLESS (BLDC) MOTOR</h3>
                <p>Brushless DC electric motors are also known as electronically commutated motors (ECMs, EC motors). </p>
                <p>Primarily efficiency is the most important feature for BLDC motors. Because the rotor is the sole bearer of the magnets and it doesn’t require any power. i.e. no connections, <b>no commutator and no brushes.</b></p>

                <p className="my-8"><b>Construction of Brushless DC motor</b></p>

                <p>In this motor, the permanent magnets are attached to the rotor. The current-carrying conductors or armature windings are located on the stator. They use <b>electrical commutation</b> to convert electrical energy into mechanical energy. </p>
                <div className="my-8 text-center">
                    <Image src={BLDCMotor} />
                    <p>(Diagram for Inrunner Motor)</p>
                </div>

                <ul>
                    <li><b>* Outrunner</b> – The field magnet is a drum rotor which rotates around the stator. This style is preferred for applications that require high torque and where high rpm isn’t a requirement.</li>
                    <li><b>* Inrunner</b> – The stator is a fixed drum in which the field magnet rotates. This motor is known for producing less torque than the outrunner style but is capable of spinning at very high rpm.</li>
                </ul>

                <div className="my-8 text-center">
                    <Image src={InRunnerBLDCMotor} />
                    <p>(Diagram for Inrunner Motor)</p>
                </div>

                <p>A trapezoidal AC waveform is used to electro-magnetize the stator coils. When one pair of stator coils is at high voltage, the other two are at low voltage. This forms a moving electromagnet. The rotor rotates, when attracted to this moving electromagnet. These motors are less jerky and more power-efficient. They are more efficient at high speeds. </p>
                <p className="mt-8">Uses: In multirotor, CD Drives, & Electric Vehicles</p>

                <h3 className="text-xl my-8">SERVO MOTOR</h3>
                <p>Servo motors are used in closed-loop systems with a digital controller. The controller sends velocity commands to a driver amplifier, which in turn feeds the servo motor. Some form of feedback device, such as a resolver or encoder, provides information on the servo motor’s position and speed. These motors thus are capable of <b>actuating motion with precision and have a holding torque</b> which makes them useful in cases like aileron control in RC planes.</p>
                <div className="my-8 text-center">
                    <Image src={ServoMotor1} />
                </div>
                <div className="my-8 text-center">
                    <Image src={ServoMotor2} />
                </div>

                <p>This is how it looks from the inside. Did I read it right? A potentiometer in a motor? Yup, that’s right, the <b>potentiometer is connected to the final output shaft</b> of the servo motor, this produces a  variable voltage across the potentiometer which changes relative to the angle of the shaft. This reading is then compared (in the control circuit) to the angle input by the user. When the difference comes to zero, the motor stops rotation indicating it has reached the position it was supposed to. Since the potentiometer has a limited range, the standard (not modified ones) <b>have a range of 180 degrees only.</b></p>
                <h3 className="text-xl my-8">STEPPER MOTOR</h3>
                <p>Stepper motors can operate with or without feedback, with the rotation of the motor broken up into small angular steps. This helps to control the rotation with <b>steps precisely</b>, but unlike servo motors, this allows complete rotational freedom for the stator. It is controlled by pulsed command signals and can stop precisely at a commanded point without the need for brakes or clutch assemblies. When power is removed, a permanent-magnet stepper motor generally remains in its last position. </p>
                <div className="my-8 text-center">
                    <Image src={StepperMotor1} />
                </div>
                <div className="my-8 text-center">
                    <Image src={StepperMotor2} />
                </div>
                <p>Multiple stepper motors can be maintained in synchronization by driving them from a common source.</p>
                <p className="mt-8">Uses: To Drive Coordinate Axes in 3d Printers</p>

                <h2 className="text-2xl my-8">ADVANCED ACTUATOR</h2>
                <p>Actuators can also be actuated by applying thermal or magnetic energy to a solid-state material. Thermal actuators use shape-memory materials such as <b>shape memory alloy (SMAs).</b></p>
                <p>Here is how the training is done for the Thermal Actuators:</p>
                <ol>
                    <li>Fix the SMA into the desired shape (using clamps)</li>
                    <li>Heat it to 400°C for 8-10 mins</li>
                    <li>Drench  it in cold water</li>
                    <li>Take out the SMA from the clamps</li>
                    <li>Test it in hot water</li>
                    <li>Redo steps 1 to 4 in case the SMA doesn’t retain its shape</li>
                </ol>
                <div className="my-8 text-center">
                    <Image src={AdvancedActuator} />
                </div>

                <p>Similarly, magnetic actuators use <b>Magnetic shape memory alloys (MSMAs)</b>. Objects made up of these materials are <b>trained</b> (by applying strong magnetic fields for the MSMAs) to take up a certain shape when introduced to some specific conditions. </p>

                <div className="my-8">
                    <h2 className="text-2xl">Quiz</h2>
                    {quizQuestions.map((q, index) => (
                        <div key={index} className="my-4">
                            <p>{q.question}</p>
                            {q.options.map(option => (
                                <div key={option}>
                                    <input
                                        type="radio"
                                        id={`q${index}-${option}`}
                                        name={`q${index}`}
                                        value={option}
                                        onChange={() => handleQuizChange(index, option)}
                                        disabled={quizSubmitted}
                                    />
                                    <label htmlFor={`q${index}-${option}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    {!quizSubmitted && <button onClick={handleQuizSubmit} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded">Submit</button>}
                    {quizSubmitted && renderQuizResult()}
                </div>

                <div className="my-8">
                    <button onClick={handleLike} className="bg-red-500 text-white px-4 py-2 rounded">
                        Like ({likeCount})
                    </button>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl">Comments</h2>
                    <form onSubmit={handleCommentSubmit}>
                        <input
                            type="text"
                            value={commentInput}
                            onChange={handleCommentChange}
                            className="border border-gray-300 p-2 w-full"
                            placeholder="Add a comment..."
                        />
                        <button type="submit" className="mt-2 bg-green-500 text-white px-4 py-2 rounded">Submit</button>
                    </form>
                    <div className="mt-4">
                        {comments.map((comment, index) => (
                            <p key={index} className="border-b border-gray-200 py-2">{comment}</p>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Actuators;
