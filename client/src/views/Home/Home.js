import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import farImg from "./products.png";
import { Link } from "react-router-dom";
import Services from "../Services/Services";
import ProductCard from "../../components/ProductCard/ProductCard";
import data from "./../../utils/data.js"

function Home() {
 

  return (
    <>
      <Navbar />
      <div className="flex flex-wrap justify-evenly mt-4">
        <div>
          {" "}
          <img
            src={farImg}
            className="h-96"
            style={{ filter: "drop-shadow(1px 1px 2px #000)" }}
          />
        </div>
        <div className="mt-3 w-full sm:w-full, p-3 lg:w-1/2">
          <h1>
            Welcome to the <span className="text-red-600">Agro-Express!</span>
          </h1>
          <div className="mt-4">
            <p>
              We are a group of passionate individuals who believe in supporting
              local agriculture and providing fresh produce to our community.
            </p>

            <p>
              Our vision is to provide the best quality of fresh produce to our
              community.
            </p>

            <p>
              We are a small, local market that offers you the opportunity to
              purchase fresh fruits and vegetables directly from our growers.
            </p>

            <Link to="/addproduct" className="no-underline">
              <button className="d-block  mt-5 bg-red-600 py-2 px-10 text-white rounded-lg">
                Buy your Products
              </button>
            </Link>
          </div>
        </div>
      </div>

    

      <h1 className="text-center mb-4 mt-4">Our Products</h1>
      <div>
        <div className="product-card-container px-5 flex justify-center gap-x-5 flex-wrap">
          {data.map((item) => (
            <ProductCard data={item} />
          ))}
        </div>
      </div>

      <hr
        className="mx-auto border-black-900 dark:border-black-900 max-w-screen-
      md:max-w-screen-md lg:max-w-screen-lg:mb-10"
      />
      <Services />
    </>
  );
}

export default Home;
