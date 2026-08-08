"use client";

import {
  ArrowDown01Icon,
  FilterHorizontalIcon,
  Tick02Icon,
} from "@hugeicons/core-free-icons";
import { useEffect, useMemo, useRef, useState } from "react";

import {
  ArticleCard,
  type ArticleCardArticle,
} from "@/components/blog/article-card";
import { DayovaIcon } from "@/components/ui/huge-icon";

type ArticleFilterProps = {
  articles: readonly ArticleCardArticle[];
};

const allTopics = "Alle Themen";

export function ArticleFilter({ articles }: ArticleFilterProps) {
  const [activeTopic, setActiveTopic] = useState(allTopics);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const filterRef = useRef<HTMLDetailsElement>(null);
  const topics = useMemo(
    () => [allTopics, ...new Set(articles.map((article) => article.category))],
    [articles],
  );
  const filteredArticles =
    activeTopic === allTopics
      ? articles
      : articles.filter((article) => article.category === activeTopic);

  const closeFilter = () => {
    filterRef.current?.removeAttribute("open");
    setIsFilterOpen(false);
  };

  const selectTopic = (topic: string) => {
    setActiveTopic(topic);
    closeFilter();
  };

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        closeFilter();
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeFilter();
      }
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div className="blog-topic-filter-row">
        <details
          className="blog-topic-filter"
          ref={filterRef}
          onToggle={(event) => setIsFilterOpen(event.currentTarget.open)}
        >
          <summary
            className="blog-topic-filter__trigger"
            aria-expanded={isFilterOpen}
            aria-label={`Blogbeiträge filtern. Ausgewählt: ${activeTopic}`}
          >
            <DayovaIcon
              className="blog-topic-filter__icon"
              icon={FilterHorizontalIcon}
              size={20}
              aria-hidden="true"
            />
            <span>{activeTopic}</span>
            <DayovaIcon
              className="blog-topic-filter__arrow"
              icon={ArrowDown01Icon}
              size={18}
              aria-hidden="true"
            />
          </summary>

          <div className="blog-topic-filter__menu" aria-label="Blogthemen">
            <span className="blog-topic-filter__menu-label">
              Nach Thema filtern
            </span>
            {topics.map((topic) => {
              const isActive = activeTopic === topic;

              return (
                <button
                  className="blog-topic-filter__option"
                  type="button"
                  aria-pressed={isActive}
                  data-active={isActive ? "true" : undefined}
                  key={topic}
                  onClick={() => selectTopic(topic)}
                >
                  <span>{topic}</span>
                  {isActive ? (
                    <DayovaIcon
                      icon={Tick02Icon}
                      size={18}
                      strokeWidth={2}
                      aria-hidden="true"
                    />
                  ) : null}
                </button>
              );
            })}
          </div>
        </details>
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
