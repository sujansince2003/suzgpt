import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import LoginPage from "./routes/LoginPage/LoginPage";
import SignupPage from "./routes/SignUpPage/signupPage";
import DashboardPage from "./routes/dashboardPage/dashboardPage";
// import ChatPage from "./routes/chatPage/chatPage";
import Layout from "./layout/Layout";
import DashboardLayout from "./layout/DashboardLayout";
import { HomePage } from "./routes/HomePage/Homepage";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/login/*" element={<LoginPage />} />
            <Route path="/register/*" element={<SignupPage />} />

            <Route element={<DashboardLayout />}>
              <Route path="/dashboard" element={<DashboardPage />} />
              <Route path="/dashboard/chats/:id" element={<DashboardPage />} />
            </Route>
          </Route>
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
