import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const InteractiveVideos = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.whiteboardAnimation.coverImg}
        grid1Header={services.animation.whiteboardAnimation.grid1Header}
        grid1SubText={services.animation.whiteboardAnimation.grid1SubText}
        grid1Link={services.animation.whiteboardAnimation.grid1Link}
        grid2SubText={services.animation.whiteboardAnimation.grid2SubText}
        grid2Link={services.animation.whiteboardAnimation.grid2Link}
        explainertext={services.animation.whiteboardAnimation.explainertext}
        explainervids={services.animation.whiteboardAnimation.explainervids}
        faqText={services.animation.whiteboardAnimation.faqText}
        faq={services.animation.whiteboardAnimation.faq}
      />
    </div>
  );
};

export default InteractiveVideos;
