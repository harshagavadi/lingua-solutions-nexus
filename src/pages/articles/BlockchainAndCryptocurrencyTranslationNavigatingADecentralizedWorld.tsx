import ArticlePage from "./ArticlePage";
import { articles } from "../../data/articles";

const BlockchainAndCryptocurrencyTranslationNavigatingADecentralizedWorld = () => {
  const article = articles.find(
    (article) => article.slug === "blockchain-and-cryptocurrency-translation"
  );

  if (!article) {
    return <div>Article not found</div>;
  }

  return <ArticlePage article={article} />;
};

export default BlockchainAndCryptocurrencyTranslationNavigatingADecentralizedWorld;