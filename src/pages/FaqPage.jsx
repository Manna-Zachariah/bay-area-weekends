import './FaqPage.css';
import faqEntries from '../data/faqEntries';
import AccordionSection from '../components/AccordionSection';

function FaqPage() {
  const faqSections = faqEntries.map((entry) => (
    <li className="faq-page__item" key={entry.id}>
      <AccordionSection title={entry.title}>
        {entry.content}
      </AccordionSection>
    </li>
  ));

  return (
    <div className="faq-page">
      <section className="faq-page__hero" aria-labelledby="faq-page-title">
        <h1 className="faq-page__title" id="faq-page-title">
          Weekend Travel FAQ
        </h1>
        <p className="faq-page__intro">
          Find practical answers about drive times, coastal weather, wine country planning, and short-trip
          expectations from San Jose.
        </p>
        <p className="faq-page__intro">
          These quick answers are meant to help you narrow options before you commit to a route or a full
          weekend plan.
        </p>
      </section>

      <section className="faq-page__questions" aria-labelledby="faq-page-questions-title">
        <h2 className="faq-page__section-title" id="faq-page-questions-title">
          Common planning questions
        </h2>
        <ul className="faq-page__list">
          {faqSections}
        </ul>
      </section>
    </div>
  );
}

export default FaqPage;