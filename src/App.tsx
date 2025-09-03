import { Intro } from "./components/Intro";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <MainLayout>
      <Intro />
      <button>View Detail</button>
    </MainLayout>
  );
}

export default App;
