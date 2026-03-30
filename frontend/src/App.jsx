import Navbar from "./Components/Navbar";
import HomePage from "./Pages/HomePage";

const App = () => {
  return (
    <div data-theme="garden" className="min-h-screen overflow-hidden p-4">
      <Navbar />
      <HomePage />
    </div>
  );
};

export default App;
