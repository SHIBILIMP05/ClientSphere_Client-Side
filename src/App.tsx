import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRouts from "./routers/AdminRouts";
import HeadRouts from "./routers/HeadRouts";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* <Route path="/*" element={<AdminRouts />} /> */}
        <Route path="/head/*" element={<HeadRouts position={"head"}/>} />
        <Route path="/admin/*" element={<AdminRouts position={"admin"} />} />

      </Routes>
    </Router>
  );
};

export default App;
