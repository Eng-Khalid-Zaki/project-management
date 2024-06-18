import NoProjectSelected from "./assets/components/NoProjectSelected.jsx";
import ProjectsSidebar from "./assets/components/ProjectsSidebar.jsx";
import NewProject from "./assets/components/NewProject.jsx";
import SelectedProject from "./assets/components/SelectedProject.jsx";
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

  function handleSaveAddingProject(projectData) {
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

  function handleCancelAddingProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleSelectProject(projectID) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: projectID,
      };
    });
  }
  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = <SelectedProject project={selectedProject} />;
  if (projectState.selectedProjectId === undefined) {
    content = <NoProjectSelected onAddNewProject={handleStatrtAddingProject} />;
  } else if (projectState.selectedProjectId === null) {
    content = (
      <NewProject
        onFinish={handleSaveAddingProject}
        onCancel={handleCancelAddingProject}
      />
    );
  }
  return (
    <main className="my-8 flex gap-8 h-screen">
      <ProjectsSidebar
        onAddNewProject={handleStatrtAddingProject}
        projects={projectState.projects}
        onSelectProject={handleSelectProject}
      />
      {content}
    </main>
  );
}

export default App;
