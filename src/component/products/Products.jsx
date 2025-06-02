import React from "react";
import "../products/Products.css";
import ProductImg1 from "../products/product-image3.png";
import ProductImg2 from "../products/product-image2.jpg";
import ProductImg3 from "../products/product-image1.png";
const Products = () => {
  return (
    <div className="product-container">
      <div className="product-main">
        <div className="product-text">Our EV Charging Products</div>
        <div className="products-card">
          <div className="product-align-div">
            <div className="products-inner-card">
              <div className="products-image-div">
                <img
                  className="products-img"
                  src={ProductImg1}
                  alt="productsimage1"
                />
              </div>
              <div className="card-mid-info">
                <span className="card-mid-span1">$9.95</span>
                <span className="card-mid-span2">
                  JuiceNet Subscriptions (Digital)
                </span>
                <span className="card-mid-span3">
                  Enjoy a monthly or yearly subscription to our juicenet EV
                  network.
                </span>
              </div>
              <button className="products-btn">Subscribe</button>
            </div>
          </div>
          <div className="product-align-div">
            <div className="products-inner-card">
              <div className="products-image-div">
                <img
                  className="products-img"
                  src={ProductImg2}
                  alt="productsimage1"
                />
              </div>
              <div className="card-mid-info">
                <span className="card-mid-span-diff">
                  <span className="card-mid-span-diff1">$549.00</span>
                  <span className="card-mid-span-diff2">
                    <span className="card-mid-span-diff3">$599.00</span>
                    <span className="card-mid-span-diff4">8% off</span>
                  </span>
                </span>
                <span className="card-mid-span2">ChargePoint Home Flex</span>
                <span style={{ color: "White" }} className="card-mid-span3">
                  Enjoy a monthly or yearly subscription to our juicenet EV
                  network.
                </span>
              </div>
              <button className="products-btn">Subscribe</button>
            </div>
          </div>
          <div className="product-align-div">
            <div className="products-inner-card">
              <div className="products-image-div">
                <img
                  className="products-img"
                  src={ProductImg3}
                  alt="productsimage1"
                />
              </div>
              <div className="card-mid-info">
                <span className="card-mid-span1">$299.99</span>
                <span className="card-mid-span2">Lenz Level 2 Plugin 40</span>
                <span className="card-mid-span3">
                  Lenz level 2 plugin 40A home charger weather-proof corrosion
                  resistant
                </span>
              </div>
              <button className="products-btn">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
