import React from "react";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

function Error404() {
  return (
    <>
      <NavBar />
      <div id="main">
        <div className="fof">
          <h1>Error 404</h1>
          <br />
          <h2>Page Not Found</h2>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Error404;
