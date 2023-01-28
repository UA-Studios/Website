import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const LogoAnimation = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.logoAnimation.coverImg}
        grid1Header={services.animation.logoAnimation.grid1Header}
        grid1SubText={services.animation.logoAnimation.grid1SubText}
        grid1Link={services.animation.logoAnimation.grid1Link}
        grid2SubText={services.animation.logoAnimation.grid2SubText}
        grid2Link={services.animation.logoAnimation.grid2Link}
        explainertext={services.animation.logoAnimation.explainertext}
        explainervids={services.animation.logoAnimation.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default LogoAnimation;
