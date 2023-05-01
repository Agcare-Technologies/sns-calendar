import { useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SinglePage from "./components/SinglePage";
import NotFoundPage from "./pages/NotFoundPage";

function App() {
  const [count, setCount] = useState(0);
  const navigate = useNavigate();

  return (
    <Routes>
      <Route exact path='/' element={<HomePage />} />
      <Route exact path='/home' element={<HomePage />} />
      <Route path='nov2023' element={<SinglePage title='November 2023' />} />
      <Route path='dec2023' element={<SinglePage title='December 2023' />} />
      <Route path='jan' element={<SinglePage title='January 2024' />} />
      <Route path='feb' element={<SinglePage title='Febuary 2024' />} />
      <Route path='mar' element={<SinglePage title='March 2024' />} />
      <Route path='apr' element={<SinglePage title='April 2024' />} />
      <Route path='may' element={<SinglePage title='May 2024' />} />
      <Route path='jun' element={<SinglePage title='June 2024' />} />
      <Route path='jul' element={<SinglePage title='July 2024' />} />
      <Route path='aug' element={<SinglePage title='August 2024' />} />
      <Route path='sep' element={<SinglePage title='September 2024' />} />
      <Route path='oct' element={<SinglePage title='October 2024' />} />
      <Route path='nov' element={<SinglePage title='November 2024' />} />
      <Route path='dec' element={<SinglePage title='December 2024' />} />
      <Route path='*' element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
