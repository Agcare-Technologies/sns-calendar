import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePage from "./components/SinglePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [count, setCount] = useState(0);
  const Navigate = useNavigate();

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/home' element={<HomePage />} />

      <Route path='/:month' element={<SinglePage />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
/*
<Route exact path='/' element={<HomePage />} />
      <Route exact path='/home' element={<HomePage />} />*/
