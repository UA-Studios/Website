import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const ThreeDanimation = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.threeDanimation.coverImg}
        grid1Header={services.animation.threeDanimation.grid1Header}
        grid1SubText={services.animation.threeDanimation.grid1SubText}
        grid1Link={services.animation.threeDanimation.grid1Link}
        grid2SubText={services.animation.threeDanimation.grid2SubText}
        grid2Link={services.animation.threeDanimation.grid2Link}
        explainertext={services.animation.threeDanimation.explainertext}
        explainervids={services.animation.threeDanimation.explainervids}
        faqText={services.animation.threeDanimation.faqText}
        faq={services.animation.threeDanimation.faq}
      />
    </div>
  );
};

export default ThreeDanimation;
