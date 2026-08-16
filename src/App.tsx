import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { LoadingProvider } from "./context/LoadingProvider";
import ScrollToTop from "./components/ScrollToTop";
import WorkDetail from "./pages/WorkDetail";

const CharacterModel = lazy(() => import("./components/Character"));
const MainContainer = lazy(() => import("./components/MainContainer"));

const Home = () => (
  <LoadingProvider>
    <Suspense>
      <MainContainer>
        <Suspense>
          <CharacterModel />
        </Suspense>
      </MainContainer>
    </Suspense>
  </LoadingProvider>
);

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/work/:slug" element={<WorkDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
