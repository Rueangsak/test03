import "./CSS/App.css"
import Main from "./pages/Main";
import { Routes,Route,BrowserRouter,Link, Navigate ,Redirect  } from "react-router-dom";
import Work from "./pages/Work";
import './CSS/style.css'
import Open from "./pages/Open";

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
          <Routes>
            <Route path="/" element={< Main />} />
            <Route path="/Work" element={<Work />} />
            <Route path="/Open/:docId" element={<Open />} />
          </Routes>
      </BrowserRouter>
      

    </div>
  );
};

export default App;
