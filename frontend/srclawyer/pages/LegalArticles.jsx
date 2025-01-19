import React from "react";

const LegalArticles = () => {
  const articles = [
    { id: 1, title: "Understanding Criminal Law", content: "..." },
    { id: 2, title: "Steps in Civil Litigation", content: "..." },
  ];

  return (
    <div className="legal-articles">
      <h1>Legal Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id}>
            <h3>{article.title}</h3>
            <p>{article.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LegalArticles;
