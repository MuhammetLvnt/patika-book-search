import React from "react";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { DataContextProvider } from "../context/DataContext";

function Home() {
  return (
    <div className="pb-28">
      <DataContextProvider>
        <Header />
        <Content />
        <Footer />
      </DataContextProvider>
    </div>
  );
}

export default Home;
