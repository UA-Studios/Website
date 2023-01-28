import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const VideoEditing = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.videoEditing.coverImg}
        grid1SubText={services.animation.videoEditing.grid1SubText}
        grid1Link={services.animation.videoEditing.grid1Link}
        explainertext={services.animation.videoEditing.explainertext}
        explainervids={services.animation.videoEditing.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default VideoEditing;
