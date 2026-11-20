interface Section {
  heading: string;
  paragraphs: string[];
}

export default function ArticleSections({ sections }: { sections: Section[] }) {
  return (
    <div className="mt-8 space-y-9">
      {sections.map((section) => (
        <section key={section.heading}>
          <h2 className="text-lg font-extrabold text-ink-900 sm:text-xl">{section.heading}</h2>
          {section.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 50)} className="mt-3 text-sm leading-7 text-ink-700">
              {paragraph}
            </p>
          ))}
        </section>
      ))}
    </div>
  );
}
