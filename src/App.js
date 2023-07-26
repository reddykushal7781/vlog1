// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { useState } from "react";
import Home from "./ListOfPages/HomePage"
import About from "./ListOfPages/AboutPage"
import Article from "./ListOfPages/Article"
import Error from "./ListOfPages/ErrorPage"
import List from "./ListOfPages/ArticleList"
import NavBar from "./NavBar"
// function MyButton() {
//   const [count,setCount] = useState(0);
//     const clickIt=() =>{
//     setCount(count + 1);
//   }
//   return (
//     <button onClick={clickIt}>
//     clicked {count} times
//     </button>
//   );
// }
const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/articles" element={<List />} />
        <Route path="/articles/:articlesId" element={<Article />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
