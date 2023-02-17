import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Navbar from "./components/navbar/navbar";
import ContactUS from "./pages/contactUS/contactUS";
import TwoDanimation from "./pages/animation/2Danimation/2Danimation";
import WhiteboardAnimation from "./pages/animation/whiteboardAnimation/whiteboardAnimation";
import PromoVideos from "./pages/animation/promoVideos/promoVideos";
import ThreeDanimation from "./pages/animation/3Danimation/3Danimation";
import PremiumVideos from "./pages/animation/premiumVideos/premiumVideos";
import LiveActionExplainer from "./pages/animation/liveActionExplainer/liveActionExplainer";
import LogoAnimation from "./pages/animation/logoAnimation/logoAnimation";
import InteractiveVideos from "./pages/animation/interactiveVideos/interactiveVideos";
import VideoEditing from "./pages/animation/videoEditing/videoEditing";
import Home from "./pages/home/home";
import Footer from "./components/footer/footer";
import Privacy from "./pages/privacy/privacy";
import GraphicDesign from "./pages/graphicDesign/graphicDesign";
import GameDevelopment from "./pages/gameDevelopment/gameDevelopment";
import AboutUS from "./pages/aboutUS/aboutUS";
import Products from "./pages/products/products";
import WebDevelopment from "./pages/webDevelopment/webDevelopment";

const Routes = () => {
  return (
    <React.Fragment>
      <Header />
      <Navbar />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contact" exact component={ContactUS} />
          <Route path="/2d-animation" exact component={TwoDanimation} />
          <Route path="/3d-animation" exact component={ThreeDanimation} />
          <Route path="/promo-videos" exact component={PromoVideos} />
          <Route
            path="/interactive-videos"
            exact
            component={InteractiveVideos}
          />
          <Route path="/premium-videos" exact component={PremiumVideos} />
          <Route path="/logo-animation" exact component={LogoAnimation} />
          <Route
            path="/live-action-explainer"
            exact
            component={LiveActionExplainer}
          />
          <Route
            path="/whiteboard-animation"
            exact
            component={WhiteboardAnimation}
          />
          <Route path="/video-editing" exact component={VideoEditing} />
          <Route path="/graphic-designing" exact component={GraphicDesign} />
          <Route path="/privacy" exact component={Privacy} />
          <Route path="/game-development" exact component={GameDevelopment} />
          <Route path="/about-us" exact component={AboutUS} />
          <Route path="/products" exact component={Products} />
          <Route path="/web-development" exact component={WebDevelopment} />
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
};
export default Routes;
