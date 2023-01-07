import React from "react";
import Egge from "../assets/desktop/image-transform.jpg";
import Glass from "../assets/desktop/image-stand-out.jpg";
import Cherry from "../assets/desktop/image-graphic-design.jpg";
import Orange from "../assets/desktop/image-photography.jpg";

const Middle = () => {
  return (
    <div>
      <div className="grid grid-cols-2 ">
        <div className="justify-center">
          <h2 className=" text-4xl font-bold font-loader2 w-80 h-50 text-slate-900 mx-40 mt-40">
            Transform your brand
          </h2>
          <div className="text-slate-500 font-medium  text-start text-sm mt-5  h-50 w-50 mx-40">
            <p>
              We are a full-service creative agency specializing in helping
              brands grow fast. Engage your clients through compelling visuals
              that do most of the marketing for you.
            </p>
          </div>
          <p className=" mx-40 mb-40 font-bold text-slate-800	mt-5">
            LEARN MORE
          </p>
        </div>

        <div className="   text-base text-left justify-items-center   ">
          <img src={Egge} />
        </div>
      </div>
      <div className="grid grid-cols-2 ">
        <div className="   text-base text-left justify-items-center   ">
          <img src={Glass} />
        </div>
        <div className="justify-center">
          <h2 className=" text-4xl font-bold font-loader2 w-80 h-50 text-slate-900 mx-40 mt-40">
          Stand out to the right audience
          </h2>
          <div className="text-slate-500 font-medium text-start text-sm mt-5  h-50 w-50 mx-40">
            <p>
            Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
            </p>
          </div>
          <p className=" mx-40 mb-40 font-bold text-slate-800	mt-5">
            LEARN MORE
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 ">
        <div className=" relative">
          <img src={Cherry} className="" />
          <div classname=''>
            <h1 className="absolute ml-72 top-96"> Graphic design </h1>
            <p className="absolute mt-16 ml-36 top-96 text-center w-96 h-20 ">
              Great design makes you memorable. We deliver artwork that
              underscores your brand message and captures potential clients
              attention.
            </p>
          </div>
        </div>

        <div className=" relative">
          <img src={Orange} className="" />
          <div classname=''>
            <h1 className="absolute ml-72 top-96"> Photography </h1>
            <p className="absolute mt-16 ml-36 top-96 text-center w-96 h-20 ">
            Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Middle;
