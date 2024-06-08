import NoProjectSelected from "./assets/components/No-project-selected.jsx";
import Aside from "./assets/components/Aside.jsx";
import AddNewProject from "./assets/components/AddNewProject.jsx";
import "./App.css";
import { useState } from "react";

function App() {
  const [projectState, setProjectState] = useState({
    selectedProjectId: undefined,
    projects: [],
  });
  function handleStatrtAddingProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleFinishAddingProject(projectData) {
    const newProject = {
      ...projectData,
      id: Math.random(),
    };
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  console.log(projectState);
  let content;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleStatrtAddingProject} />;
  } else {
    content = <AddNewProject onFinish={handleFinishAddingProject} />;
  }
  return (
    <main className="my-8 flex gap-8 h-screen">
      <Aside
        onAddNewProject={handleStatrtAddingProject}
        projects={projectState.projects}
      />
      {content}
    </main>
  );
}

export default App;
