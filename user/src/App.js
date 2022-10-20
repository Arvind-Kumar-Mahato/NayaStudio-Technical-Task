
import './App.css';

import Login from "./Components/Login";
import { Routes, Route } from "react-router-dom";
import { Col, Row} from "react-bootstrap";
import Signup from "./Components/Signup";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import ProtectedRoute from "./Components/ProtectedRoutes";
import Home from "./Components/Home";

function App() {
  return (
   
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route
                path="/home"
                element={
                  <ProtectedRoute>
                    <Home />
                  </ProtectedRoute>
                }
              />
              <Route path="/" element={<Login />} />
              <Route path="/Signup" element={<Signup />} />
            </Routes>
         
          </UserAuthContextProvider>
        </Col>
      </Row>
    
  );
}

export default App;
