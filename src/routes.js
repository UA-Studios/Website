import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import ContactUS from "./pages/contactUS/contactUS";
import TwoDanimation from "./pages/animation/2Danimation/2Danimation";
import WhiteboardAnimation from "./pages/animation/whiteboardAnimation/whiteboardAnimation";
import ThreeDanimation from "./pages/animation/3Danimation/3Danimation";
import Home from "./pages/home/home";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      {/* <Menu /> */}
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={ContactUS} />
        <Route path="/2D-Animation" exact component={TwoDanimation} />
        <Route path="/3D-Animation" exact component={ThreeDanimation} />
        <Route
          path="/Whiteboard-Animation"
          exact
          component={WhiteboardAnimation}
        />
      </Switch>
    </BrowserRouter>
  );
};
export default Routes;
