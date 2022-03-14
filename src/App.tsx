import 'react-calendar-heatmap/dist/styles.css'

import { BrowserRouter, Routes, Route } from "react-router-dom";
import GlobalStyles from './styles/GlobalStyles'
import Header from "./components/Header";
import Footer from "./components/Footer";
import Profile from "./pages/Profile";
import Repo from "./pages/Repo";

export function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/:username" element={<Profile />} />
        <Route path="/:username/:reponame" element={<Repo />} />
      </Routes>

      <GlobalStyles />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
