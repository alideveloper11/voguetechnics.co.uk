import FAQSection from "@/components/common/FAQSection";

type AreasFaqSectionProps = {
  items: { question: string; answer: string }[];
};

export default function AreasFaqSection({ items }: AreasFaqSectionProps) {
  return (
    <FAQSection
      items={items}
      title={
        <>
          Areas &amp; <span className="text-primary">Coverage</span> FAQs
        </>
      }
      subtitle="Answers about collection, delivery, quoting and how our area coverage works."
    />
  );
}
