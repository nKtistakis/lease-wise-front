import { useState } from "react";

function Faq() {
  const [activeQ, setActiveQ] = useState("q1");

  const openQ = (id) => {
    setActiveQ(activeQ === id ? "" : id);
  };

  const getClassAnswer = (id) => {
    return activeQ === id ? "active-answer" : "";
  };

  const getClassQuestion = (id) => {
    return activeQ === id ? "active-question" : "";
  };

  return (
    <>
      <section className="faq-section">
        <div className="container">
          <div className="faq-content">
            <div className="faq-content__title">
              <h5>FAQ</h5>
              <h2>Frequently Asked Questions</h2>
              <p>
                Frequently Asked Questions About Car Leasing on Our Website:
                <br />
                Answers to Common Concerns and Inquiries.
              </p>
            </div>

            <div className="all-questions">
              <div className="faq-box">
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__question  ${getClassQuestion("q1")}`}
                >
                  <p>
                    1. Why use LeaseWise to compare car lease contracts or
                    deals?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q1"
                  onClick={() => openQ("q1")}
                  className={`faq-box__answer ${getClassAnswer("q1")}`}
                >
                  Comparing the lease car deals is important, as it helps you
                  find the best deal that fits your budget and requirements,
                  ensuring you get the most value for your money. By comparing
                  various options, you can find deals that offer lower prices,
                  additional services, or better car models. Instead of
                  researching online and comparing prices from different leasing
                  companies, you can find eveything on LeaseWise.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__question ${getClassQuestion("q2")}`}
                >
                  <p>2. How do I find the best car lease deals?</p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q2"
                  onClick={() => openQ("q2")}
                  className={`faq-box__answer ${getClassAnswer("q2")}`}
                >
                  Start your search on LeaseWise by specifying your desired car
                  and leasing preferences. Our platform sorts through numerous
                  offers, allowing you to compare them based on key factors like
                  payment terms and overall costs. Highlights include special
                  offers and expert insights to aid in your decision. Ensure the
                  chosen deal matches your leasing needs, leveraging LeaseWise's
                  alerts for updates. For any queries, our support team is
                  readily available to assist.
                </div>
              </div>
              <div className="faq-box">
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__question ${getClassQuestion("q3")}`}
                >
                  <p>
                    3. Why do I find such low lease prices on{" "}
                    <span>LeaseWise</span>?
                  </p>
                  <i className="fa-solid fa-angle-down"></i>
                </div>
                <div
                  id="q3"
                  onClick={() => openQ("q3")}
                  className={`faq-box__answer ${getClassAnswer("q3")}`}
                >
                  LeaseWise aggregates deals from a wide network of providers,
                  leveraging bulk comparison capabilities to secure exclusive,
                  low-priced offers not commonly found elsewhere. Our efficient
                  comparison tools and direct negotiations allow us to present
                  these competitive prices directly to you. Additionally, our
                  platform is designed to highlight the most cost-effective
                  leasing options, ensuring you access the best deals available.
                  Trust LeaseWise for transparent, unbeatable lease pricing that
                  meets your budget and preferences.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Faq;
