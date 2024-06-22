import React from "react";

const Video = ({ src, poster }) => {
    return (
        <>
            <video
                src={src}
                poster={poster}
                autoPlay
                controls
                playsInline
                className="sm:h-[68vh] sm:max-w-4xl h-full w-full "
            ></video>
        </>
    );
}

export default Video;
