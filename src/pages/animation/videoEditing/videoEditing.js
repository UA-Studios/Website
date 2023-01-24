import React from "react";
import PageDraft from "../../../components/pageDraft/pageDraft";
import { services } from "../../../data";
const VideoEditing = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.animation.videoEditing.coverImg}
        grid1Header={services.animation.videoEditing.grid1Header}
        grid1SubText={services.animation.videoEditing.grid1SubText}
        grid1Link={services.animation.videoEditing.grid1Link}
        grid2SubText={services.animation.videoEditing.grid2SubText}
        grid2Link={services.animation.videoEditing.grid2Link}
        explainertext={services.animation.videoEditing.explainertext}
        explainervids={services.animation.videoEditing.explainervids}
        faqText={services.animation.videoEditing.faqText}
        faq={services.animation.videoEditing.faq}
      />
    </div>
  );
};

export default VideoEditing;
