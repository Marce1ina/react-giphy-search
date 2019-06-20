import React from "react";
import Loader from "react-loader-spinner";

const Giph = ({ loading, src }) => (
    <div className="giphContainer">
        {loading ? (
            <Loader type="Bars" color="#ffb8b8" height="100" width="100" />
        ) : (
            <div className="giph">{src && <img src={src} alt="giph" />}</div>
        )}
    </div>
);

export default Giph;
