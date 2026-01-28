import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gpa-5 min-h-screen justify-center items-center items-stretch text-center">
      <div className="relative">
        <h2 className="text-4xl font-bold">Next jS Fetching & Rendering</h2>
        <h2 className="text-4xl absolute inset-0 -top-20 opacity-10 font-medium ">
          {" "}
          Fetching Rendering & Styling
        </h2>
      </div>
      <div>
        <button className="btn mt-5">Lets Explore</button>
      </div>

      <h2 className="text-4xl opacity-30 text-sky-500 font-bold mt-10">I Love Next.js</h2>
    </div>
  );
};

export default page;
