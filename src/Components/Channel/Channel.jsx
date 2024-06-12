import React from "react";

const Channel = () => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col w-full h-full">
        <div
          className="relative h-[15.4rem] "
          style={{
            background: `url()`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent ">
            <div className="flex items-center w-full my-4 mx-8">
              <img src={""} alt="" className="rounded-full w-[6.5rem] h-[6.5rem] border-2 border-white" />
              <div className="ml-4 text-white">
                <h1 className="text-2xl font-bold">Kushal Lalwani</h1>
                <p className="text-sm">@kushal</p>
                <p className="text-sm">3 Subscribers • 220 Subscribed</p>
              </div>
              <button className="right-0 mr-8 absolute border-2 px-6 py-3 rounded-3xl text-white">Subscribe</button>
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Channel;

