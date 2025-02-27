import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
  // useParams,
} from "react-router-dom";
import UserView from "./pages/userView";
import ProtectedRoute from "./pages/ProtectedRoute";
import Home from "./pages/Home";
import Navigation from "./components/Navigation";
import { Container } from "react-bootstrap";
import Footer from "./components/Footer";

const App = () => {
  return (
    <Container
      fluid
      style={{
        background: "#FFFFFF",
        padding: "0",
        width: "100%",
        margin: "0",
      }}
    >
      <Router>
        <Navigation />
        <Container style={{ padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/login" element={<LoginForm />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/view" element={<UserView />} />
            </Route>
          </Routes>
        </Container>
      </Router>
      <Footer />
    </Container>
  );
};
export default App;
