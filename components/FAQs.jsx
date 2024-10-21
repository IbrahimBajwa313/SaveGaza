import { useState, useEffect } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  const faqs = [
    {
      question: "How can I get involved with the Save Gaza Campaign?",
      answer: "There are various ways to participate, including attending protests and events organized by the campaign, spreading awareness on social media, volunteering your time and skills, and donating to support the cause.",
    },
    {
      question: "What has the Save Gaza Campaign achieved so far?",
      answer: "The campaign has achieved significant milestones, including raising awareness through protests and media outreach and building partnerships with other organizations to amplify its impact.",
    },
    {
      question: "Is the Save Gaza Campaign affiliated with any political/religious group?",
      answer: "No, the Save Gaza Campaign is a non-partisan and non-denominational movement. It welcomes participation from individuals of all backgrounds who share a commitment to justice and solidarity with the Palestinian people.",
    },
    {
      question: "How can I stay updated on the latest developments and activities of the Save Gaza Campaign?",
      answer: "You can follow the campaign on social media platforms such as Twitter, Facebook, and Instagram, visit our website for news and updates, and subscribe to our newsletter for regular information and announcements.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  useEffect(() => {
    if (activeIndex !== null) {
      setAnimationClass("transition-all duration-300 ease-in-out transform scale-100 opacity-100");
    }
  }, [activeIndex]);

  return (
    <section className="py-16 w-full">
      <div className="container w-full">
        <div className="bg-white rounded-3xl shadow-2xl p-8 w-full">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 text-black text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col md:flex-row gap-8">
            {/* FAQ Section */}
            <div className="md:w-1/2 w-full">
              <div className="space-y-4 h-auto md:h-[60vh] overflow-y-auto scrollbar-hide">
                {faqs.map((faq, index) => (
                  <div key={index}>
                    <button
                      className={`w-full text-left py-4 flex justify-between items-center ${activeIndex === index ? 'bg-[#D0312D]' : 'bg-[#22C55E]'} hover:bg-[#D0312D] focus:outline-none focus:ring-2 focus:ring-white transition duration-300 rounded-2xl px-4 shadow-md`}
                      onClick={() => toggleFAQ(index)}
                    >
                      <span className="text-lg font-semibold text-white">{faq.question}</span>
                      <span className="text-xl text-white">{activeIndex === index ? "-" : "+"}</span>
                    </button>
                    {activeIndex === index && (
                      <div className={`py-2 px-2 mt-2 rounded-lg transition-all duration-300 ease-in-out ${animationClass}`}>
                        <p className="text-gray-700 text-sm">{faq.answer}</p>
                      </div>
                    )}
                    {index < faqs.length - 1 && <hr className="border-gray-300 mt-6" />}
                  </div>
                ))}
              </div>
            </div>

            {/* Image Section */}
            <div
              className="flex justify-center items-center rounded-2xl h-64 md:h-80 w-full md:w-1/2 mt-6 md:my-auto overflow-hidden shadow-lg bg-cover bg-center bg-no-repeat transition-transform transform hover:scale-105 duration-300"
              style={{
                backgroundImage: "url('/Picture1.png')",
              }}
            >
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;