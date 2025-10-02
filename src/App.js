import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./Components/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import UserPage from "./pages/UserPage";

function App() {
  return (
    <Router>
      <DashboardLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/users" element={<UserPage />} />        {/* list + add + search */}
          <Route path="/user/:id" element={<UserPage isDetails />} />  {/* details page */}
        </Routes>
      </DashboardLayout>
    </Router>
  );
}

export default App;
