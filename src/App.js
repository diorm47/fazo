import React from "react";
import { Route, Routes } from "react-router-dom";
import { Suspense } from "react";
import Navbar from "./components/nav-bar/nav-bar";
import AnimatedCursor from "react-animated-cursor";

const MainPage = React.lazy(() => import("./pages/main/main"));

function App() {
  return (
    <>
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        innerScale={1}
        outerScale={0}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "#fff",
        }}
        outerStyle={{
          border: "3px solid #fff",
        }}
      />
      <Navbar />

      <div className="app_content">
        <Suspense fallback={"......."}>
          <Routes>
            <Route path="/" element={<MainPage />} />

            {/* <Route path="/about-item/:name" element={<AboutItem />} /> */}

            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
        </Suspense>
      </div>
    </>
  );
}

export default App;
