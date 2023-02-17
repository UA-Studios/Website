import React from "react";
import PageDraft from "../../components/pageDraft/pageDraft";
import { services } from "../../data";
const WebDevelopment = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.web.web.coverImg}
        grid1Header={services.web.web.grid1Header}
        grid1SubText={services.web.web.grid1SubText}
        grid1Img={services.web.web.grid1Img}
        grid2SubText={services.web.web.grid2SubText}
        grid2Img={services.web.web.grid2Img}
        explainertext={services.web.web.explainertext}
        explainervids={services.web.web.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default WebDevelopment;
