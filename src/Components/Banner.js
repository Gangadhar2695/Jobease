import { useState } from "react";

const Banner = () => {
  const arr = [
    "./images/ban1.jpg",
    "./images/ban2.jpg",
    "./images/ban3.jpg",
    "./images/ban4.jpg",
    "./images/ban5.jpg",
    "./images/ban6.jpg",
  ];

  const [count, setCount] = useState(0);

  function prev() {
    !count ? setCount(arr.length - 1) : setCount(count - 1);
  }

  function next() {
    if (count === arr.length - 1) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  }

  return (
    <>
      <div className="slider border border-3 position-relative ">
        <button onClick={() => prev()} className="btn  slide-btn left">
          <i className="fa-solid fa-chevron-left left-arrow"></i>
        </button>

        <img src={arr[count]} className="image" />

        <button onClick={() => next()} className="btn slide-btn right ">
          <i className="fa-solid fa-chevron-right right-arrow"></i>
        </button>
      </div>
    </>
  );
};

export default Banner;
