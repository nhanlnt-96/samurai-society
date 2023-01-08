import React from "react";
import { Route, Routes } from "react-router-dom";
import { mainRoutes } from "../../configs/routes";

const LayoutComp = () => {
  return (
    <Routes>
      {mainRoutes.map((val, index) => (
        <Route key={index} path={val.path} element={val.module} />
      ))}
    </Routes>
  );
};

export default LayoutComp;
