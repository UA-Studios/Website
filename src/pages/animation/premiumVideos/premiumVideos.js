import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const PremiumVideos = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.premiumVids.coverImg}
        grid1Header={services.animation.premiumVids.grid1Header}
        grid1SubText={services.animation.premiumVids.grid1SubText}
        grid1Link={services.animation.premiumVids.grid1Link}
        grid2SubText={services.animation.premiumVids.grid2SubText}
        grid2Link={services.animation.premiumVids.grid2Link}
        explainertext={services.animation.premiumVids.explainertext}
        explainervids={services.animation.premiumVids.explainervids}
        faqText={services.animation.premiumVids.faqText}
        faq={services.animation.premiumVids.faq}
      />
    </div>
  );
};

export default PremiumVideos;
