import { useState } from 'react';
import './AccordionSection.css';

function AccordionSection({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleSection() {
    setIsOpen(!isOpen);
  }

  return (
    <section className="accordion-section">
      <h2 className="accordion-section__heading">
        <button
          type="button"
          className="accordion-section__button"
          onClick={toggleSection}
          aria-expanded={isOpen ? 'true' : 'false'}
        >
          <span className="accordion-section__icon" aria-hidden="true">
            {isOpen ? '▼' : '▶'}
          </span>
          <span className="accordion-section__title">{title}</span>
        </button>
      </h2>
      {isOpen && (
        <div className="accordion-section__content">
          <p className="accordion-section__text">{children}</p>
        </div>
      )}
    </section>
  );
}

export default AccordionSection;