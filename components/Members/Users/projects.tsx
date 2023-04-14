import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import SideNav from "../sidenav";
import styles from "../styles";
import { useForm } from "react-hook-form";
import { db, storage } from '../../../firebase';
import { collection, addDoc, getDocs, query, where, doc, DocumentReference, updateDoc, arrayUnion, Timestamp, getDoc } from "firebase/firestore";
import ProtectedRoute from "./ProtectedRoute";
import ToastMessage from "../toastMessage";
import { useAuth } from "../../../context/authContext";


interface IProjectData {
    createdDate: {seconds: number, nanoseconds: number};
    description: string;
    dueDate: {seconds: number, nanoseconds: number};
    link: string;
    title: string;
    type: string;
    submissionLink: string;
    tags: string[];
    id: string; // added for reference
}

interface ICheckPoint {
    message: string;
    timeDate: Timestamp;
    user: string;
}

interface IUserProject {
    checkpoints: ICheckPoint[]
    status: string;
    users: DocumentReference[];
    task: DocumentReference;
    id: string; // added for reference
}

const Projects = () => {
    const { authUser } = useAuth();
    const [state, setState] = useState("")
    const [projects, setProjects] = useState<IProjectData[]>([])
    const [selectedProject, setSelectedProject] = useState<IUserProject>()
    const [confirmProject, setConfirmProject] = useState<IProjectData>()
    const [checkpointMessage, setCheckpointMessage] = useState("")

    const userTasksCollection = collection(db, "userTasks")
    const tasksCollection = collection(db, "tasks")

    useEffect(() => {
        console.log(authUser)
        const userRef = doc(db, "users", authUser.uid)

        getDocs(query(userTasksCollection, where("users", "array-contains", userRef))).then(snapshots => {
            snapshots.forEach(d => {
                const taskData = { ...d.data(), id: d.id } as IUserProject
                getDoc(taskData.task).then(res => {
                    const projectData = { ...res.data(), id: res.id } as IProjectData
                    setConfirmProject(projectData)
                    setSelectedProject(taskData)
                    setState("inprogress")
                })
            })
            return !snapshots.empty
        }).then((isAssigned) => {
            if (isAssigned) return
            getDocs(query(tasksCollection, where("type", "==", "Project"))).then(snapshots => {
                snapshots.forEach(d => {
                    const taskData = { ...d.data(), id: d.id } as IProjectData
                    setProjects(state => [...state, taskData ])
                })
                setState("selection")
            })
        })
    }, [])

    const onChoose = (index: number) => {
        setState("confirmation")
        setConfirmProject(projects[index])
    }

    const closeConfirmation = () => {
        setState("selection")
        setConfirmProject(undefined)
    }

    const selectProject = () => {
        if (!confirmProject) return

        const userProject = {
            checkpoints: [],
            status: "Assigned",
            users: [doc(db, "users", authUser.uid)],
            task: doc(db, "tasks", confirmProject.id)
        }

        addDoc(userTasksCollection, userProject).then(res => {
            const projectData = {...userProject, id: res.id}
            setSelectedProject(projectData)
            setState("inprogress")
        })
    }

    const addCheckpoint = () => {
        if (!selectedProject) return
        if (!checkpointMessage) return

        setCheckpointMessage("")
        const checkpointData = {
            message: checkpointMessage,
            timeDate: Timestamp.fromDate(new Date()),
            user: authUser.name as string
        }

        updateDoc(doc(db, "userTasks", selectedProject.id), {
            checkpoints: arrayUnion(checkpointData)
        }).then(() => {
            const newCheckpoints = [...selectedProject.checkpoints, checkpointData]
            setSelectedProject({ ...selectedProject, checkpoints: newCheckpoints })
        })
    }

    return (
        <ProtectedRoute>
            {/* // <ToastMessage message={message} setMessage={setMessage} /> */}
            <div className="grid grid-cols-12 h-screen" style={{background: "#EFEFEF"}}>
                <div className="col-span-12 px-6 flex flex-col relative overflow-y-scroll md:px-12 md:col-span-9">

                    <h1 className="text-4xl font-bold mt-8" style={{color: "#AAAAAA"}}>Stage 3: Choose your major project</h1>
                    {
                        state !== "inprogress" &&
                        <p className="mt-2 text-lg font-bold" style={{color: "#AAAAAA"}}>You can choose any one project that you feel you can complete in a week. You will be assigned mentors for each project</p>
                    }

                    <div className="my-8">
                    {
                        state === "selection" && 
                        projects.map((project, index) => (
                            <div key={project.title} className="row-span-5 bg-white rounded-xl mb-8 w-full grid grid-cols-7 md:grid-cols-8">
                                <div className="col-span-7 p-4 md:p-8">
                                    <h3 className="md:text-3xl font-extrabold text-2xl" style={styles.textPrimary}>{project.title}</h3>
                                    <div className="flex gap-2 mt-2 flex-col text-center md:flex-row text-sm md:text-normal">
                                        {
                                            project.tags.map(tag => (
                                                <div key={tag} className="py-1 px-4 rounded-xl" style={{background: "#C2FFF4"}}><p>{tag}</p></div>
                                            ))
                                        }
                                    </div>
                                    <p className="mt-4">{project.description}</p>
                                </div>
                                <div className="flex md:flex-col text-white font-bold text-lg col-span-7 md:col-span-1">
                                    <a className="flex flex-1 items-center justify-center rounded-bl-xl md:rounded-bl-none md:rounded-tr-xl cursor-pointer" style={{background: "#95C5E2"}} href={project.link}>VIEW PS</a>
                                    <a className="text-center flex-1 md:flex-none py-4 px-2 rounded-br-xl cursor-pointer" style={{background: "#0C72B0"}} onClick={() => onChoose(index)}>CHOOSE</a>
                                </div>
                            </div>
                        ))             
                    }
                    </div>

                    {
                        state === "confirmation" && 
                        <div className="bg-white rounded-xl my-4 md:my-20 shadow-xl md:mx-12">
                            <div className="p-8">
                                <h3 className="md:text-3xl font-extrabold text-2xl" style={styles.textPrimary}>{confirmProject?.title}</h3>
                                <p className="mt-4 text-lg font-semibold" style={{color: "#AAAAAA"}}>Are you sure you want to choose the project ?</p>
                            </div>
                            <div className="flex text-center text-white font-bold text-lg">
                                <a className="flex-1 p-2 rounded-bl-xl cursor-pointer" style={{background: "#0C72B0"}} onClick={() => selectProject()}>proceed</a>
                                <a className="flex-1 p-2 rounded-br-xl cursor-pointer" style={{background: "#8D989F"}} onClick={() => closeConfirmation()}>close</a>
                            </div>
                        </div>
                    }

                    {
                        state === "inprogress" &&
                        <div className="mt-2">
                            <div className="flex justify-between">
                                <h2 className="text-3xl font-bold" style={styles.textPrimary}>{confirmProject?.title}</h2>
                                <a className="text-white rounded-xl px-3 py-2 font-bold cursor-pointer" style={{background: "#0C72B0"}} href={confirmProject?.link}>Problem Statement</a>
                            </div>

                            <div className="flex flex-col bg-white rounded-xl my-4 px-4 pt-8 pb-4 gap-6">
                                {
                                    !selectedProject?.checkpoints.length && 
                                    <p className="text-center font-bold text-lg">No checkpoints added</p>
                                }
                                {
                                    selectedProject?.checkpoints.map(checkpoint => (
                                        <div className="flex">
                                            <div className="text-sm" style={{color: "#8D989F"}}>
                                                <p className="font-bold">{checkpoint.timeDate.toDate().toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
                                                <p className="font-bold">{checkpoint.timeDate.toDate().toLocaleTimeString('en-US', { hour: "numeric", minute: "numeric" })}</p>
                                                <p className="mt-2">{checkpoint.user}</p>
                                            </div>
                                            <div className="ml-6">
                                                <p>{checkpoint.message}</p>
                                            </div>
                                        </div>
                                    ))
                                }

                                <div className="flex mt-4">
                                    <textarea rows={3} className="w-full rounded-xl p-2" value={checkpointMessage} onChange={(e) => setCheckpointMessage(e.target.value)} style={{background: "#EFEFEF"}}/>
                                    <button className="ml-4 font-bold p-2 rounded-xl cursor-pointer" style={{...styles.textPrimary, background: "#C2FFF4"}} onClick={() => addCheckpoint()}>Add Checkpoint</button>
                                </div>
                            </div>
                        </div>
                    }
                </div>
                <SideNav />
            </div>
        </ProtectedRoute>
      )
}

export default Projects;