import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import MainLayout from "./layouts/mainLayout";
import PriceBoardPage from "./pages/priceBoardPage";
import { setAppHeight } from "./utils";

const App = () => {
  useEffect(() => {
    setAppHeight();

    window.addEventListener("resize", setAppHeight);

    return () => window.removeEventListener("resize", setAppHeight);
  }, []);

  return (
    <>
      <Header /> {/* Header global */}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<PriceBoardPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      <Footer /> {/* Footer global */}
    </>
  );
};

export default App;
