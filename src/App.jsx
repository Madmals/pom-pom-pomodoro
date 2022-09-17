import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TodoProvider from "./hook/Context";
import Home from "./components/Home";
import About from "./components/About";


function App() {
  return (
    <div className="App">
      <TodoProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" component={<Home />}>
              <Route index element={<Home />}></Route>
            </Route>
            <Route path="/about" component={<About />} />
          </Routes>
        </BrowserRouter>
      </TodoProvider>
    </div>
  );
}

export default App;
