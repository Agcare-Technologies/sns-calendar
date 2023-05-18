import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePage from "./components/SinglePage";
import NotFoundPage from "./pages/NotFoundPage";
import Nov2023 from "./pages/Nov2023";
import Dec2023 from "./pages/Dec2023";
import Jan2024 from "./pages/Jan2024";
import Feb2024 from "./pages/Feb2024";
import Mar2024 from "./pages/Mar2024";
import Apr2024 from "./pages/Apr2024";
import May2024 from "./pages/May2024";
import Jun2024 from "./pages/Jun2024";
import Jul2024 from "./pages/Jul2024";
import Aug2024 from "./pages/Aug2024";
import Sep2024 from "./pages/Sep2024";
import Oct2024 from "./pages/Oct2024";
import Nov2024 from "./pages/Nov2024";
import Dec2024 from "./pages/Dec2024";

function App() {
  const [count, setCount] = useState(0);
  const Navigate = useNavigate();

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/home' element={<HomePage />} />

      <Route path='/nov2023' element={<Nov2023 />} />
      <Route path='/dec2023' element={<Dec2023 />} />
      <Route path='/jan' element={<Jan2024 />} />
      <Route path='/feb' element={<Feb2024 />} />
      <Route path='/mar' element={<Mar2024 />} />
      <Route path='/apr' element={<Apr2024 />} />
      <Route path='/may' element={<May2024 />} />
      <Route path='/jun' element={<Jun2024 />} />
      <Route path='/jul' element={<Jul2024 />} />
      <Route path='/aug' element={<Aug2024 />} />
      <Route path='/sep' element={<Sep2024 />} />
      <Route path='/oct' element={<Oct2024 />} />
      <Route path='/nov' element={<Nov2024 />} />
      <Route path='/dec' element={<Dec2024 />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
