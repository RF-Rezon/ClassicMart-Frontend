import React from "react";
import { Watch } from "react-loader-spinner";

const Spninner = () => {
  return (
    <div>
      <div className="flex items-center justify-center p-40 min-h-screen">
        <Watch
          visible={true}
          height="80"
          width="80"
          radius="48"
          color="#cca471"
          ariaLabel="watch-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    </div>
  );
};

export default Spninner;
