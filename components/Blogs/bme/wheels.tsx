import React, { useState } from "react";
import Image from "next/image";
import SimpleWheel from "../../../images/blog/bme/wheels/image1.png";
import CastorWheel from "../../../images/blog/bme/wheels/image2.png";
import OmniWheel1 from "../../../images/blog/bme/wheels/image3.png";
import OmniWheel2 from "../../../images/blog/bme/wheels/image4.png";
import MecanumWheel from "../../../images/blog/bme/wheels/image5.jpg";
import RobotTracks from "../../../images/blog/bme/wheels/image6.png";

const quizQuestions = [
    { 
        question: "What is a simple wheel?", 
        options: ["A wheel with one degree of freedom.", "A wheel with two degrees of freedom.", "A wheel with no degrees of freedom."], 
        correctAnswer: "A wheel with one degree of freedom." 
    },
    { 
        question: "What is the disadvantage of castor wheels?", 
        options: ["Low traction and less power requirement.", "High traction and more power requirement.", "No traction and no power requirement."], 
        correctAnswer: "High traction and more power requirement." 
    },
    { 
        question: "What type of movement do Omni wheels allow?", 
        options: ["Uni-directional movement.", "Bi-directional movement.", "Multi-directional movement."], 
        correctAnswer: "Multi-directional movement." 
    },
    { 
        question: "At what angle are the rollers attached in Mecanum wheels?", 
        options: ["30° angle.", "45° angle.", "60° angle."], 
        correctAnswer: "45° angle." 
    },
    { 
        question: "What is the advantage of robot tracks?", 
        options: ["Poor for rough and uneven terrain.", "Excellent for rough and uneven terrain.", "Poor for smooth surfaces."], 
        correctAnswer: "Excellent for rough and uneven terrain." 
    }
];

const Wheels = () => {
    const [likeCount, setLikeCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [commentText, setCommentText] = useState("");
    const [answers, setAnswers] = useState({});
    const [showResults, setShowResults] = useState(false);

    const handleLike = () => setLikeCount(likeCount + 1);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, commentText]);
        setCommentText("");
    };

    const handleAnswerChange = (index, answer) => {
        setAnswers({ ...answers, [index]: answer });
    };

    const handleQuizSubmit = (e) => {
        e.preventDefault();
        setShowResults(true);
    };

    return (
        <div className="text-black bg-white w-screen">
            <div className="bg-ee-bg bg-no-repeat bg-center bg-cover bg-fixed py-80 backdrop-blur-lg">
                <div className="pl-32 backdrop-blur-xl">
                    <h1 className="text-white text-4xl font-bold">Wheels</h1>
                </div>
            </div>

            <div className="mx-16 md:mx-32 lg:mx-48 xl:mx-72 mt-8 text-lg">
                {/* Content about wheels */}

                <div className="text-center my-8">
                    <button onClick={handleLike} className="bg-blue-500 text-white px-4 py-2 rounded">
                        Like {likeCount}
                    </button>
                </div>

                <h2 className="text-2xl my-8">Quiz</h2>
                <form onSubmit={handleQuizSubmit}>
                    {quizQuestions.map((q, index) => (
                        <div key={index} className="mb-4">
                            <p>{q.question}</p>
                            {q.options.map((option, i) => (
                                <div key={i}>
                                    <input
                                        type="radio"
                                        id={`question-${index}-option-${i}`}
                                        name={`question-${index}`}
                                        value={option}
                                        onChange={() => handleAnswerChange(index, option)}
                                    />
                                    <label htmlFor={`question-${index}-option-${i}`}>{option}</label>
                                </div>
                            ))}
                        </div>
                    ))}
                    <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                        Submit Answers
                    </button>
                </form>

                {showResults && (
                    <div className="my-8">
                        <h2 className="text-2xl">Results</h2>
                        {quizQuestions.map((q, index) => (
                            <div key={index} className="mb-4">
                                <p>{q.question}</p>
                                <p>Your answer: {answers[index]}</p>
                                <p>Correct answer: {q.correctAnswer}</p>
                                {answers[index] === q.correctAnswer ? (
                                    <p className="text-green-500">Correct!</p>
                                ) : (
                                    <p className="text-red-500">Incorrect!</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}

                <h2 className="text-2xl my-8">Comments</h2>
                <form onSubmit={handleCommentSubmit} className="mb-8">
                    <textarea
                        className="border p-2 w-full"
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                    />
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
                        Add Comment
                    </button>
                </form>
                <div>
                    {comments.map((comment, index) => (
                        <p key={index} className="border-b p-2">{comment}</p>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Wheels;
