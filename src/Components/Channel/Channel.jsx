import React from "react";

const Channel = ({ fullname, username, avatar, subscriberCount, subscribedToCount, isSubscribed, coverImage }) => {
  return (
    <div className="overflow-x-hidden">
      <div className="flex flex-col w-full h-full">
        <div
          className="relative h-[15.4rem] "
          style={{
            background: `url(${coverImage ? coverImage : ""})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-800 to-transparent ">
            <div className="flex items-center w-full my-4 mx-8">
              <img src={avatar ? avatar : ""} alt="" className="rounded-full w-[6.5rem] h-[6.5rem] border-2 border-white" />
              <div className="ml-4 text-white">
                <h1 className="text-2xl font-bold">{fullname}</h1>
                <p className="text-xl">{username}</p>
                <p className="text-sm">{`${subscriberCount} Subscribers • ${subscribedToCount} Subscribed`}</p>
              </div>
              {isSubscribed ? <button className="right-0 mr-8 absolute border-2 px-6 py-3 bg-red-600 rounded-3xl text-white">Subscribed</button> : <button className="right-0 mr-8 absolute border-2 px-6 py-3 rounded-3xl text-white">Subscribe</button>}
            </div>
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default Channel;

