"use client";

import { useMemo, useState } from "react";

import {
  ArticleCard,
  type ArticleCardArticle,
} from "@/components/blog/article-card";

type ArticleFilterProps = {
  articles: readonly ArticleCardArticle[];
};

const allTopics = "Alle Themen";

export function ArticleFilter({ articles }: ArticleFilterProps) {
  const [activeTopic, setActiveTopic] = useState(allTopics);
  const topics = useMemo(
    () => [allTopics, ...new Set(articles.map((article) => article.category))],
    [articles],
  );
  const filteredArticles =
    activeTopic === allTopics
      ? articles
      : articles.filter((article) => article.category === activeTopic);

  return (
    <>
      <div
        className="blog-topic-filter"
        role="group"
        aria-label="Blogbeiträge nach Thema filtern"
      >
        {topics.map((topic) => {
          const isActive = topic === activeTopic;

          return (
            <button
              aria-pressed={isActive}
              className={`blog-topic-filter__button${isActive ? " blog-topic-filter__button--active" : ""}`}
              key={topic}
              onClick={() => setActiveTopic(topic)}
              type="button"
            >
              {topic}
            </button>
          );
        })}
      </div>

      <p className="sr-only" aria-live="polite">
        {filteredArticles.length} Beiträge zum Thema {activeTopic}
      </p>

      <div className="card-grid blog-overview__grid">
        {filteredArticles.map((article) => (
          <ArticleCard article={article} key={article.slug} />
        ))}
      </div>
    </>
  );
}
