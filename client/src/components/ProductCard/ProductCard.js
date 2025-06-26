import React from "react";

function ProductCard({ data }) {
  return (
    <>
      <div
        className="card mb-5"
        style={{ width: "15rem", boxShadow: "2px 2px 5px rgb(0,0,0,0.3)" }}
      >
        <div className="card-body">
          <div className="h-48 w-48">
            <img
              src={data.img}
              alt=""
              className="container-fluid  block mx-auto"
            />
          </div>
          <p className="text-center text-red-500 text-2xl fw-semibold">
            {data.title}
          </p>
          <p className="text-center fw-normal">Rate : {data.TodaysRate}</p>
          <hr />
          <p className="">{data.description}</p>
        </div>
      </div>
    </>
  );
}

export default ProductCard;
