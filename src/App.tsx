import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRouts from "./routers/AdminRouts";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/*" element={<AdminRouts />} />
        <Route path="/head/*" element={<AdminRouts />} /> */}
        <Route path="/admin/*" element={<AdminRouts />} />

      </Routes>
    </Router>
  );
};

export default App;
