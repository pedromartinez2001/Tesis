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

const App = () => {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route element={<ProtectedRoute />}>
          <Route path="/view" element={<UserView />} />
        </Route>
      </Routes>
    </Router>
  );
};
export default App;
