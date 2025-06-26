import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import git from "./github.png";
import linkedin from "./linkedin.png";
function About() {
  return (
    <>
      <div>
        <Navbar />
      </div>
    
      <h3 className="text-center mt-5 text-[35px]">Our Team</h3>
      <div className="row flex justify-center gap-x-7 mt-5">
        <div className="card shadow-xl" style={{ width: "18rem" }}>
          <div className="card-body">
            <div className="mt-3">
              <img
                src="https://avatars.githubusercontent.com/u/124052924?v=4"
                alt=""
                className="block mx-auto rounded-full h-36 shadow-xl border-1 border-red-500 p-2"
              />
            </div>
            <p className="text-center my-3 text-xl fw-medium text-red-600">
              Yogita Shete
            </p>
            <p className="text-center">Mern Stack Developer</p>
            <div className="socile-media-container flex justify-center gap-x-5 mt-3">
              <a href="https://github.com/yogita-s-24" target="_blank">
                <img src={git} alt="" className="h-10 hover:shadow-red-400" />{" "}
              </a>
              <a
                href="https://www.linkedin.com/in/yogita-shete/"
                target="_blank"
              >
                <img
                  src={linkedin}
                  alt=""
                  className="h-10 hover:shadow-red-400"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="card shadow-xl" style={{ width: "18rem" }}>
          <div className="card-body ">
            <div className="mt-3">
              <img
                src="https://avatars.githubusercontent.com/u/124028591?v=4"
                alt=""
                className="block  mx-auto rounded-full h-36 shadow-xl border-1 border-red-500 p-2  "
              />
              <p className="text-center my-3 text-xl fw-medium text-red-600">
                Saurabh Jaykar
              </p>
              <p className="text-center">Mern Stack Developer</p>
              <div className="socile-media-container flex justify-center gap-x-5 mt-3">
                <a href="https://github.com/saurabhjaykar1603" target="_blank">
                  <img src={git} alt="" className="h-10 hover:shadow-red-400" />
                </a>
                <a
                  href="https://www.linkedin.com/in/saurabh-jaykar/"
                  target="_blank"
                >
                  <img
                    src={linkedin}
                    alt=""
                    className="h-10 hover:shadow-red-400"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
