import React from "react";
import PageDraft from "../../components/pageDraft/pageDraft";
import { services } from "../../data";
const GameDevelopment = () => {
  return (
    <div className="home_root">
      <PageDraft
        image={services.gameDevelopment.gameDevelopment.coverImg}
        grid1Header={services.gameDevelopment.gameDevelopment.grid1Header}
        grid1SubText={services.gameDevelopment.gameDevelopment.grid1SubText}
        grid1Img={services.gameDevelopment.gameDevelopment.grid1Img}
        grid2SubText={services.gameDevelopment.gameDevelopment.grid2SubText}
        grid2Img={services.gameDevelopment.gameDevelopment.grid2Img}
        explainertext={services.gameDevelopment.gameDevelopment.explainertext}
        explainervids={services.gameDevelopment.gameDevelopment.explainervids}
        faqText={services.faq.faqText}
        faq={services.faq.faq}
      />
    </div>
  );
};

export default GameDevelopment;
