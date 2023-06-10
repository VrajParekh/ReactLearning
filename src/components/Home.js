import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  const handlerAdd = () => {
    //to access action.type
    dispatch({
      type: "increment",
    });
  };
  const handlerMinus = () => {
    //to access action.type
    dispatch({
      type: "decrement",
    });
  };

  const { count } = useSelector((state) => state.first);

  return (
    <div className="home">
      <button onClick={handlerMinus}>-</button>
      <p>{count}</p>
      <button onClick={handlerAdd}>+</button>
    </div>
  );
};

export default Home;
