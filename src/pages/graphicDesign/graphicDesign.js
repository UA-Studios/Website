import React from "react";
import PageDraft from "../../components/pageDraft/pageDraft";
import { services } from "../../data";
const GraphicDesign = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.graphicDesigning.graphicDesign.coverImg}
        grid1Header={services.graphicDesigning.graphicDesign.grid1Header}
        grid1SubText={services.graphicDesigning.graphicDesign.grid1SubText}
        grid1Img={services.graphicDesigning.graphicDesign.grid1Img}
        grid2SubText={services.graphicDesigning.graphicDesign.grid2SubText}
        grid2Img={services.graphicDesigning.graphicDesign.grid2Img}
        explainertext={services.graphicDesigning.graphicDesign.explainertext}
        explainervids={services.graphicDesigning.graphicDesign.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default GraphicDesign;
