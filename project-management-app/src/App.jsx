import NoProjectSelected from "./assets/components/No-project-selected";
import Aside from "./assets/components/Aside";
import "./App.css";

function App() {
  return (
    <main className="my-8 flex gap-8 h-screen">
      <Aside />
      <NoProjectSelected />
    </main>
  );
}

export default App;
