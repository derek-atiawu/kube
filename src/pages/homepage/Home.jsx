import React from "react";
import "./Home.css";
import Vendor from "../../component/Vendor";
import { Vendors } from "../../component/Vendors";

function Home() {
  return (
    <>
      <div className="container indcont1">
        <div className="row">
          <div className="col-md-4">
            <p style={{ fontSize: "300%" }}>
              <b>
                Enjoy Ghana's <span style={{ color: "green" }}>Kube</span>{" "}
                <br />{" "}
                <span style={{ color: "blue" }}>Healthy and Refreshing </span>
              </b>
            </p>
            <p>
              cocoanut or kube provides water, electrolyte for the body. it is
              healthy and refreshing.
            </p>
            {/* <button className="free" style={{ fontSize: "x-small" }}>
              Sign Up for free
            </button> */}
          </div>
          <div className="col-md-8 kube8">
            <img
              src="..//images/kube8.jpg"
              className="img-responsive"
              alt="kube8"
            />
          </div>
        </div>
      </div>

      {/* <Row>
        <Col className="welcome">
          <h1>Enjoy Your Kube</h1>
          <h1>Healthy and Refreshing...</h1>
          <h2>Anytime, AnyWhere, Good for your all Events</h2>
        </Col>
        <Col></Col>
        <img style={{ img }} src="..//images/kube8.jpg" alt="logo" />
      </Row> */}

      <div className="order">
        <h3>Order Now</h3>
        <section>
          <form>
            <label>Location:</label>
            <input type="text" name="example" style={{ margin: "1rem 0" }} />

            <label>Quantity:</label>
            <input type="number" name="example" style={{ margin: "1rem 0" }} />
          </form>
        </section>
      </div>
      <div className="vendor-grid">
        {Vendors.map((vendor, list) => {
          return <Vendor {...vendor} key={vendor.id} number={list} />;
        })}
      </div>
    </>
  );
}

export default Home;
