type SectionHeadingProps = {
  title: string;
  description?: string;
  align?: "left" | "center";
  id?: string;
  inverse?: boolean;
};

export function SectionHeading({
  title,
  description,
  align = "left",
  id,
  inverse = false,
}: SectionHeadingProps) {
  const centered = align === "center";

  return (
    <div
      className={[
        "flex max-w-2xl flex-col gap-4",
        centered ? "mx-auto items-center text-center" : "",
      ].join(" ")}
    >
      <h2
        className={`dayova-section-title ${
          inverse ? "text-white" : "text-ink"
        }`}
        id={id}
      >
        {title}
      </h2>
      {description ? (
        <p
          className={`text-dayova-body leading-relaxed ${
            inverse ? "text-white/70" : "text-muted"
          }`}
        >
          {description}
        </p>
      ) : null}
    </div>
  );
}
