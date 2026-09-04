import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Movies from "./pages/Movies";
import "./components/style.css";
// import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layout/MainLayout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/favorites" element={<Favorites />} />
            <Route path="/movies/:id" element={<MovieDetails />} />
          </Route>

          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
      {/* <Movies /> */}
    </>
  );
}

export default App;
