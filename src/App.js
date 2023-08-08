import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  HomePage,
  FaqPage,
} from "./Routes.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




const App = () => {


  return (
   <>
  
      <div>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />}></Route>
           
            <Route path="/FAQ" element={<FaqPage />} />

          
          </Route>
        </Routes>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </BrowserRouter>
    </div>
   </>
  );
};

export default App;
