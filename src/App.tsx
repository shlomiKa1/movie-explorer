import { BrowserRouter, Route, Routes } from "react-router-dom";
import Movies from "./pages/Movies";
import Favorites from "./pages/Favorites";
import NotFoundPage from "./pages/NotFoundPage";
import MovieDetails from "./pages/MovieDetails";
import MainLayout from "./layout/MainLayout";
import "./components/styles/style.css";
import "./App.css";

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
    </>
  );
}

export default App;
