import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const PromoVideos = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.promoVids.coverImg}
        grid1Header={services.animation.promoVids.grid1Header}
        grid1SubText={services.animation.promoVids.grid1SubText}
        grid1Link={services.animation.promoVids.grid1Link}
        grid2SubText={services.animation.promoVids.grid2SubText}
        grid2Link={services.animation.promoVids.grid2Link}
        explainertext={services.animation.promoVids.explainertext}
        explainervids={services.animation.promoVids.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default PromoVideos;
