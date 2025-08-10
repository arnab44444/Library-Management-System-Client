import React from "react";

// RulesAndRegulations.jsx
// Eye-catching UI with Tailwind CSS + DaisyUI enhancements

export default function RulesAndRegulations() {
  return (
    <section aria-label="library-rules" className="p-6 mt-16 bg-gradient-to-b from-base-200 to-base-100 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <div className="card bg-primary text-primary-content shadow-xl mb-8">
          <div className="card-body">
            <h1 className="card-title text-3xl font-bold">📚 Library Rules & Regulations</h1>
            <p className="text-sm opacity-90">The following rules apply to all members — please use library materials responsibly.</p>
          </div>
        </div>

        <div className="grid gap-6">
          {[
            {
              title: "1. Borrowing",
              rules: [
                "Each member may borrow up to 3 books at a time.",
                "The standard loan period is 14 days (subject to library policy).",
                "To extend the loan period, request a renewal online or at the circulation desk."
              ],
              icon: "📖"
            },
            {
              title: "2. Returns & Fines",
              rules: [
                "Books must be returned by the due date.",
                "Late returns incur a daily fine (e.g., $0.05 per day).",
                "For severe damage or loss, replacement or full compensation may be required."
              ],
              icon: "💰"
            },
            {
              title: "3. Reservations & Holds",
              rules: [
                "If a book is currently borrowed, you may place a reservation online.",
                "You will be notified when the reserved item is available for pickup.",
                "Reservations expire if not claimed within the allotted pickup window."
              ],
              icon: "📅"
            },
            {
              title: "4. Care of Books",
              rules: [
                "Do not write, tear, or mark library books.",
                "Food and drinks are not allowed near library materials.",
                "If a book is damaged or lost, compensation will be handled per library policy."
              ],
              icon: "🛡️"
            },
            {
              title: "5. Conduct",
              rules: [
                "Maintain silence and avoid disruptive behavior in the library.",
                "Keep phone calls brief and at low volume; step outside for long conversations.",
                "Misuse of library property may result in disciplinary action."
              ],
              icon: "🤝"
            },
            {
              title: "6. Privacy & Membership",
              rules: [
                "Member information is kept confidential and used only for library operations.",
                "To update or cancel membership, contact library staff."
              ],
              icon: "🔒"
            },
            {
              title: "7. Contact",
              rules: [
                "Email: library@example.com",
                "Phone: +1-XXX-XXX-XXXX"
              ],
              icon: "📞"
            }
          ].map((section, idx) => (
            <div
              key={idx}
              className="card bg-base-100 shadow-md hover:shadow-xl transition-shadow border border-base-300"
            >
              <div className="card-body">
                <h2 className="font-semibold text-lg flex items-center gap-2">
                  <span className="text-xl">{section.icon}</span> {section.title}
                </h2>
                <ul className="list-disc list-inside mt-2 space-y-1 text-sm">
                  {section.rules.map((rule, i) => (
                    <li key={i}>{rule}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-6 text-sm text-gray-500 italic">
          Note: These are sample rules — update numbers, fines, or loan periods to match your project's requirements.
        </div>
      </div>
    </section>
  );
}
