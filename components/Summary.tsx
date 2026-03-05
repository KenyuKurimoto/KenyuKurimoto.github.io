interface SummaryProps {
  paragraphs: string[];
}

export default function Summary({ paragraphs }: SummaryProps) {
  return (
    <div className="bg-card border border-border rounded-md p-6 md:p-7 shadow-sm">
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className={`text-text leading-relaxed ${index < paragraphs.length - 1 ? "mb-4" : ""}`}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
}
