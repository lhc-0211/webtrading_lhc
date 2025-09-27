import { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Tooltip } from "react-tooltip";
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
      {/* Tooltip from web */}
      <Tooltip
        id="global-tooltip"
        className="!bg-gray-800 !text-white !text-[10px] lg:!text-xs !px-2 !py-1 !rounded"
      />
    </>
  );
};

export default App;
