import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "How accurate is the AI-powered financial analysis?",
    answer: "Our AI works exclusively with institutional-grade financial data and is designed to be hallucination-free. We use the same data infrastructure as hedge funds and investment banks, ensuring high accuracy and reliability in all analysis.",
    value: "item-1",
  },
  {
    question: "Can I chat with earnings call transcripts using custom prompts?",
    answer:
      "Yes! Our platform allows you to create and save custom prompts for analyzing transcripts, SEC filings, and reports. You can build your own research templates for consistent analysis across different companies and time periods.",
    value: "item-2",
  },
  {
    question:
      "What type of insider activity tracking do you provide?",
    answer:
      "We monitor all insider transactions, executive changes, corporate actions, and significant shareholding changes. You'll receive real-time alerts when key personnel make moves that could impact stock performance.",
    value: "item-3",
  },
  {
    question: "Do you provide real-time analyst ratings and price targets?",
    answer: "Yes, we aggregate analyst coverage from all major firms with real-time rating changes, price target updates, and consensus tracking. You'll see comprehensive analyst sentiment and how it changes over time.",
    value: "item-4",
  },
  {
    question:
      "Is there an API for integrating with my existing investment tools?",
    answer: "Our Institutional plan includes full API access and integrations. You can connect our data and analysis capabilities to your existing portfolio management systems and trading platforms.",
    value: "item-5",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQ
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Frequently Asked Questions
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
