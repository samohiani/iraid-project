"use client";

import Image from "next/image";
import { useState } from "react";
import { faqItems } from "@/data/site-content";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="home-section faq-section" aria-labelledby="faq-title">
      <div className="faq-child-orbit" aria-hidden="true">
        <Image
          src="/assets/img/normal/faq_1_3.png"
          alt=""
          width={168}
          height={170}
        />
      </div>

      <div className="faq-visual" aria-hidden="true">
        <div className="faq-visual-main">
          <Image
            src="/assets/img/img/water/P44.jpeg"
            alt=""
            fill
            sizes="(max-width: 820px) 92vw, 40vw"
          />
        </div>
        <div className="faq-visual-secondary">
          <Image
            src="/assets/img/img/agric/P13.jpeg"
            alt=""
            fill
            sizes="(max-width: 820px) 70vw, 22vw"
          />
        </div>
        <div className="faq-visual-hand">
          <Image
            src="/assets/img/shape/hand-group-shape1.png"
            alt=""
            width={166}
            height={145}
          />
        </div>
      </div>

      <div className="faq-copy">
        <p className="section-kicker">Frequently Asked Questions</p>
        <h2 id="faq-title">Have Any Questions About IRAID?</h2>
        <div className="faq-list">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `faq-answer-${index + 1}`;

            return (
              <article
                className={`faq-item${isOpen ? " is-open" : ""}`}
                key={item.question}
                style={{ animationDelay: `${index * 55}ms` }}
              >
                <button
                  type="button"
                  className="faq-question"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  <span>{item.question}</span>
                  <span className="faq-question-icon" aria-hidden="true">
                    ⌄
                  </span>
                </button>
                <div className="faq-answer" id={answerId} aria-hidden={!isOpen}>
                  <div>
                    <p>{item.answer}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
