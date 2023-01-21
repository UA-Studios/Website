import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const BrandingMaterial = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.twoDanimation.coverImg}
        grid1Header={services.animation.twoDanimation.grid1Header}
        grid1SubText={services.animation.twoDanimation.grid1SubText}
        grid1Link={services.animation.twoDanimation.grid1Link}
        grid2SubText={services.animation.twoDanimation.grid2SubText}
        grid2Link={services.animation.twoDanimation.grid2Link}
        explainertext={services.animation.twoDanimation.explainertext}
        explainervids={services.animation.twoDanimation.explainervids}
        faqText={services.animation.twoDanimation.faqText}
        faq={services.animation.twoDanimation.faq}
      />
    </div>
  );
};

export default BrandingMaterial;
