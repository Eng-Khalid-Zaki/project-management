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
    tasks: [],
  });
  function handleAddTask(text) {
    setProjectState((prevState) => {
      const taskId = Math.random();
      const newTask = {
        text: text,
        projectId: projectState.selectedProjectId,
        id: taskId,
      };
      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask],
      };
    });
  }

  function handleDeleteTask(id) {
    setProjectState((prevState) => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter((task) => task.id !== id),
      };
    });
  }
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
  function handleDeleteProject() {
    setProjectState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== projectState.selectedProjectId
        ),
      };
    });
  }

  let selectedProject = projectState.projects.find(
    (project) => project.id === projectState.selectedProjectId
  );
  let content = (
    <SelectedProject
      project={selectedProject}
      onDelete={handleDeleteProject}
      onAddTask={handleAddTask}
      onDeleteTask={handleDeleteTask}
      tasks={projectState.tasks}
    />
  );
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
