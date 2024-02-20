import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.min.css';
import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import NavBar from "./components/navbar/NavBar";
import ArticlePage from './pages/ArticlePage';
import SearchPage from './pages/SearchPage';



function App() {

  return (
    <BrowserRouter>
      <NavBar />
      {/* <HeaderComp /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/articolo/:indexID" element={<ArticlePage />} />
        <Route path="/search-result/:searchTerm" element={<SearchPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      {/* <PlayerComp /> */}
    </BrowserRouter>
  );
}

export default App;
