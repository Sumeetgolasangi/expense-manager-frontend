import React from "react";
import Home from "../../pages/home";
import About from "../../pages/about";
import Header from "./header";

interface LayoutProps {
  type: string;
}

const Layout: React.FC<LayoutProps> = ({ type }) => {
  console.log("Layout type:", type); // Log the type prop
  let children = null;

  switch (type) {
    case "home":
      children = <Home />;
      break;
    case "about":
      children = <About />;
      break;
    default:
      children = <Home />;
  }
  return (
    <div>
      <Header>{children}</Header>
    </div>
  );
};

export default Layout;
