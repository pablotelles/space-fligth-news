import { Home } from "./pages/Home.jsx";
import { DataProvider } from "./contexts/dataContext.jsx";

function App() {
  return (
    <DataProvider>
    <div className="App">
      <Home />
    </div>
    </DataProvider>
  );
}

export default App;
