import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminRouts from "./routers/AdminRouts";
import HeadRouts from "./routers/HeadRouts";
import EmployeeRouts from "./routers/EmployeeRouts";
import { Provider } from "react-redux";
import { persistor, store } from "./store/store";
import { PersistGate } from "redux-persist/integration/react";
import HomePage from "./pages/HomePage";
import UserForm from "./features/user/UserForm";
import './assets/Styles/buttonStyles.css'
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Router>
      <Routes>
        <Route path="/*" element={<HomePage/>} />
        <Route path="/user/form/*" element={<UserForm/>} />
        <Route path="/admin/*" element={<AdminRouts position={"admin"} />} />
        <Route path="/head/*" element={<HeadRouts position={"head"}/>} />
        <Route path="/employee/*" element={<EmployeeRouts position={"employee"}/>} />

      </Routes>
    </Router>
    </PersistGate>
    </Provider>
  );
};

export default App;


