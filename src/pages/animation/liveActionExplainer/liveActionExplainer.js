import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const LiveActionExplainer = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.liveActionExplainer.coverImg}
        grid1Header={services.animation.liveActionExplainer.grid1Header}
        grid1SubText={services.animation.liveActionExplainer.grid1SubText}
        grid1Link={services.animation.liveActionExplainer.grid1Link}
        grid2SubText={services.animation.liveActionExplainer.grid2SubText}
        grid2Link={services.animation.liveActionExplainer.grid2Link}
        explainertext={services.animation.liveActionExplainer.explainertext}
        explainervids={services.animation.liveActionExplainer.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default LiveActionExplainer;
