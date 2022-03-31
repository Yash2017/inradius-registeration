import { useState, useEffect } from "react";
import FirstPage from "./pages/FirstRegisterationPage/FirstPage";
import LocationSelector from "./pages/LocationSelector/LocationSelector";
import QualificationEntry from "./pages/QualificationEntry/QualificationEntry";
import LeftPanel from "./components/LeftPanel/LeftPanel";
import Industry from "./pages/Industry/Industry";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import { UserContext } from "./context/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  useEffect(() => {
    const getItems = JSON.parse(localStorage.getItem("Inradius"));
    if (getItems) {
      setUserInfo(getItems);
    }
  }, []);
  const [userInfo, setUserInfo] = useState({ progress: 1 });
  const setUpdateInfo = (val) => {
    const getItem = JSON.parse(localStorage.getItem("Inradius"));
    console.log(getItem);
    if (getItem !== null) {
      const newInfo = { ...getItem, ...val };
      localStorage.setItem("Inradius", JSON.stringify(newInfo));
      setUserInfo(newInfo);
    } else {
      localStorage.setItem("Inradius", JSON.stringify(val));
      setUserInfo(val);
    }
  };
  return (
    <div className="App">
      <BrowserRouter>
        <UserContext.Provider value={{ userInfo, setUpdateInfo }}>
          <Routes>
            <Route path="/location" element={<FirstPage />} />
            <Route path="/map-location" element={<LocationSelector />} />
            <Route path="/register" element={<LeftPanel />}>
              <Route path="qualification" element={<QualificationEntry />} />
              <Route path="industry" element={<Industry />} />
            </Route>
            <Route path="/email" element={<RegisterPage />} />
          </Routes>
        </UserContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
