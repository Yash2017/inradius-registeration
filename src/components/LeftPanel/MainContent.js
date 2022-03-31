import React, { useContext, useState, useEffect } from "react";
import QualificationEntry from "../../pages/QualificationEntry/QualificationEntry";
import Industry from "../../pages/Industry/Industry";
import { UserContext } from "../../context/UserContext";
import EmployerPreference from "../../pages/EmployerPreference/EmployerPreference";
import Skillsets from "../../pages/Skillsets/Skillsets";
function MainContent({ setRad }) {
  const { userInfo, setUpdateInfo } = useContext(UserContext);
  const progress = parseInt(userInfo.progress);
  setRad(progress);
  return (
    <>
      {progress === 3 && <QualificationEntry />}
      {progress === 4 && <Industry />}
      {progress === 5 && <EmployerPreference />}
      {progress === 6 && <Skillsets />}
    </>
  );
}

export default MainContent;
