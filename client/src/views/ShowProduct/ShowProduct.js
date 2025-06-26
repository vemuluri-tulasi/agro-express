import React, { useEffect, useState } from "react";
import "./ShowProduct.css";
import Navbar from "../../components/Navbar/Navbar";
import axios from "axios";
import editImg from "./edit.png";
import swal from "sweetalert";

function ShowProduct() {
  const [user, setUser] = useState({});
  const [myProduct, setmyProduct] = useState([]);
  const [userProducts, setUserProducts] = useState([]);
  const [adminUser, setAdminUser] = useState({});
  const adminRoll = adminUser?.role === "admin";

  const userName = user.name;

  const loadmyProduct = async () => {
    const userId = user._id;
    if (!userId) {
      return;
    }
    const response = await axios.get(`/api/v1/products/user/${userId}`);
    const productData = response?.data?.data;
    console.log(productData);
    setmyProduct(productData);
  };

  // Define the editProduct function
  const editProduct = (_id) => {
    // Add logic to handle editing the product
    console.log(`Editing product with id: ${_id}`);
  };

  useEffect(() => {
    loadmyProduct();
  }, [user]);

  useEffect(() => {
    const storageUser = JSON.parse(localStorage.getItem("user" || "{}"));
    if (storageUser) {
      setUser(storageUser);
    } else {
      alert("login first");
      window.location.href = "/login";
    }
  }, []);

  useEffect(() => {
    const userObj = JSON.parse(localStorage.getItem("user" || "{}"));
    setAdminUser(userObj);
  }, []);

  const loadAllUsersProducts = async () => {
    const response = await axios.get("/api/v1/products");
    const allproductData = response?.data?.data;
    console.log(allproductData);
    setUserProducts(allproductData);
  };

  useEffect(() => {
    if (adminRoll) {
      loadAllUsersProducts();
    } else {
      loadmyProduct();
    }
  });

  return (
    <>
      <Navbar />
      <div></div>
      <div>
        {console.log(adminRoll)}
        {adminRoll ? (
          <>
            <h1 className="text-2xl font-semibold text-center my-3 text-red-500">
              All Farmers Product
            </h1>

            {userProducts.map((product, i) => {
              const {
                _id,
                user: userName,
                productName,
                price,
                quantity,
                description,
                createdAt,
              } = product;

              const date = new Date(createdAt).toLocaleDateString();
              const time = new Date(createdAt).toLocaleTimeString();
              return (
                <div className="p-3" key={i}>
                  <div
                    className="border lg:w-4/6 sm:w-96 mx-auto p-3 px-5 bg-white rounded-md relative"
                    style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}
                  >
                    <p>
                      <b>Farmer ID : </b>
                      {userName}
                    </p>
                    <p>
                      <b>Product Name :</b> {productName}{" "}
                      <span className="ms-5">
                        <b>Price : ₹ </b>
                        {price}
                      </span>
                      <span className="ms-5 ">
                        {" "}
                        <b>Product quantity :</b> {quantity}{" "}
                        <span className="font-normal ms-4 text-neutral-600">
                          product added on {date} at {time}
                        </span>
                      </span>
                    </p>
                    <hr />
                    <div className="flex justify-between">
                      <p className="m-0 p-0">
                        <b>Product description :</b> {description}
                      </p>

                      <button
                        type="button"
                        className="ms-4 bg-red-600 py-1 px-3 text-white rounded-lg"
                        onClick={() => {
                          return swal({
                            icon: "info",
                            title: "Are you sure, You want to sale products?",
                            buttons: ["Cancel", "Yes"],
                          }).then((userConfirmed) => {
                            if (userConfirmed) {
                              window.location.href = `/saleproduct/product/${_id}`;
                              editProduct(_id);
                            } else {
                              swal("Ok No Problem ");
                            }
                          });
                        }}
                      >
                        Sale Now
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        ) : (
          <h1 className="text-2xl font-semibold text-center my-3 text-red-500">
            {" "}
            My Products
          </h1>
        )}
      </div>
      {myProduct.map((product, i) => {
        const { _id, productName, price, quantity, description } = product;
        return (
          <div className="p-3" key={i}>
            <div
              className="border lg:w-4/6 sm:w-96 mx-auto p-3 px-5 bg-white rounded-md relative"
              style={{ boxShadow: "2px 2px 5px rgba(0,0,0,0.2)" }}
            >
              <p>
                <b>Product Name :</b> {productName}{" "}
                <span className="ms-5">
                  <b>Price : ₹ </b>
                  {price}
                </span>
                <span className="ms-5 ">
                  {" "}
                  <b>Product quantity :</b> {quantity}
                </span>
              </p>
              <hr />
              <div className="flex justify-between">
                <p className="m-0 p-0">
                  <b>Product description :</b> {description}
                </p>

                <img
                  src={editImg}
                  alt="editImg"
                  className="absolute bottom-3 right-16 h-7 cursor-pointer "
                  onClick={() => {
                    return swal({
                      icon: "info",
                      title: "Are you sure you want to edit product?",
                      buttons: ["Cancel", "Yes"],
                    }).then((userConfirmed) => {
                      if (userConfirmed) {
                        window.location.href = `/updateproduct/${_id}`;
                        editProduct(_id);
                      } else {
                        swal("Ok No Problem ");
                      }
                    });
                  }}
                />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ShowProduct;
