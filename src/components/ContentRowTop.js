import React from "react";
import ContentRowCenter from "./ContentRowCenter";
import ContentRowData from "./ContentRowData";
import Chart from "./Chart";
import Products from "./Products";
import { Routes, Route } from "react-router-dom";

function ContentRowTop() {
  return (
    <React.Fragment>
      {/*<!-- Content Row Top -->*/}
      <div className="container-fluid">
        <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
          <h1 className="h3 mb-0 text-gray-800">Velvet Dashboard</h1>
        </div>

        {/*<!-- Content Row Movies-->*/}
        <Routes>
          <Route path="/" element={<>
            <ContentRowData />
            <ContentRowCenter />
          </>} />
          <Route path="/productList" element={<Chart />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </div>
      {/*<!--End Content Row Top-->*/}
    </React.Fragment>
  );
}
export default ContentRowTop;
