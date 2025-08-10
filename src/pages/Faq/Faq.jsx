import React from "react";

// FAQ.jsx — eye-catching Frequently Asked Questions component
export default function Faq() {
  const faqs = [
    {
      question: "How many books can I borrow at once?",
      answer: "Members can borrow up to 3 books at a time for a standard loan period of 14 days."
    },
    {
      question: "Can I renew my borrowed books?",
      answer: "Yes, renewals can be requested online or at the library desk, as long as no one else has reserved the book."
    },
    {
      question: "What happens if I return a book late?",
      answer: "Late returns incur a daily fine. Please refer to the library's fine policy for details."
    },
    {
      question: "Do you have e-books available?",
      answer: "Yes, our digital library offers a wide range of e-books accessible via your member login."
    },
    {
      question: "How do I contact the library?",
      answer: "You can reach us via email at library@example.com or call +1-XXX-XXX-XXXX."
    }
  ];

  return (
    <section aria-label="faq" className="p-6 mt-20 bg-gradient-to-b from-base-200 to-base-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">❓ Frequently Asked Questions</h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box shadow-md">
              <div className="collapse-title text-lg font-medium">
                {faq.question}
              </div>
              <div className="collapse-content text-sm text-gray-600">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
