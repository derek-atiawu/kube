import React from "react";
import { CDBBtn, CDBIcon, CDBBox } from "cdbreact";

function footer() {
  return (
    <div className="shadow">
      <CDBBox
        display="flex"
        justifyContent="between"
        alignItems="center"
        className="mx-auto py-4 flex-wrap"
        style={{ width: "80%" }}
      >
        <CDBBox display="flex" alignItems="center">
          <a href="/" className="d-flex align-items-center p-0 text-dark">
            <img
              style={{ borderRadius: "20px" }}
              alt=""
              src="..//images/kubelogo1.jpg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            Kube<span style={{ color: "gold" }}>Online</span>
          </a>
          <small className="ms-2">
            &copy; Worlasi, 2023. All rights reserved.
          </small>
        </CDBBox>
        <CDBBox display="flex">
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="facebook-f" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="mx-3 p-2">
            <CDBIcon fab icon="twitter" />
          </CDBBtn>
          <CDBBtn flat color="dark" className="p-2">
            <CDBIcon fab icon="instagram" />
          </CDBBtn>
        </CDBBox>
      </CDBBox>
    </div>
  );
}

export default footer;
