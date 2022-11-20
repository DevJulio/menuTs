import React from "react";
import Header from "../../components/header";
import Footer from "../../components/footer";
import Vantage from "./vantage";
import Wellcome from "./wellcome";

//import * as Styled from "./styles";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Wellcome />
      <Vantage />
      <Footer />
    </>
  );
};

export default Home;
