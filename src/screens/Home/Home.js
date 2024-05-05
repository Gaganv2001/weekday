import React from "react";
import "./style.css";
import Header from "../../components/Header/Header";
import Info from "../../components/Info/Info";
import Jobs from "../../components/Jobs/Jobs";


const Home = () => {
  return (
    <div>
      <Header />
      <Info />
      <Jobs />
    </div>
  );
};

export default Home;
