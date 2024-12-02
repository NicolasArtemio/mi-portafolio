import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home/HomePage";
import NotFound from "./pages/notFound/NotFound";
import NavBar from "./components/navbar/NavBar";

const App = () => {

  return (
    <>
    <NavBar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    {/* <Footer /> */}
  </>
  )
};
export default App;
