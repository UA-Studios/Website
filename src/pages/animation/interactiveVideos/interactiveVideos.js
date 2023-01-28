import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const InteractiveVideos = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.interactiveVids.coverImg}
        grid1Header={services.animation.interactiveVids.grid1Header}
        grid1SubText={services.animation.interactiveVids.grid1SubText}
        grid1Link={services.animation.interactiveVids.grid1Link}
        grid2SubText={services.animation.interactiveVids.grid2SubText}
        grid2Link={services.animation.interactiveVids.grid2Link}
        explainertext={services.animation.interactiveVids.explainertext}
        explainervids={services.animation.interactiveVids.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default InteractiveVideos;
