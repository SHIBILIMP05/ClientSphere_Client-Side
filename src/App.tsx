import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRouts from "./routers/AdminRouts";
import HeadRouts from "./routers/HeadRouts";
import EmployeeRouts from "./routers/EmployeeRouts";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/*" element={<AdminRouts />} /> */}
        
        <Route path="/admin/*" element={<AdminRouts position={"admin"} />} />
        <Route path="/head/*" element={<HeadRouts position={"head"}/>} />
        <Route path="/employee/*" element={<EmployeeRouts position={"employee"}/>} />

      </Routes>
    </Router>
  );
};

export default App;


