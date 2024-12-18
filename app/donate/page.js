"use client";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { Accordion } from "react-bootstrap";
import { useState } from "react";

const page = () => {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const categories = [
    { value: "animals", label: "Animals" },
    { value: "business", label: "Business" },
    { value: "community", label: "Community" },
    { value: "competitions", label: "Competitions" },
    { value: "creative", label: "Creative" },
    { value: "education", label: "Education" },
    { value: "emergencies", label: "Emergencies" },
    { value: "environment", label: "Environment" },
    { value: "events", label: "Events" },
    { value: "faith", label: "Faith" },
    { value: "family", label: "Family" },
    { value: "funerals", label: "Funerals & Memorials" },
    { value: "medical", label: "Medical" },
    { value: "monthly-bills", label: "Monthly Bills" },
    { value: "newlyweds", label: "Newlyweds" },
    { value: "other", label: "Other" },
    { value: "sports", label: "Sports" },
    { value: "travel", label: "Travel" },
    { value: "ukraine", label: "Ukraine Relief" },
    { value: "wishes", label: "Wishes" },
  ];

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  return (
    <AkpagerLayout>
      <PageBanner pageName={"Donate"} />
      <div className="checkout-form-area py-130 rpy-100">
        <div className="container">
          <div className="checkout-faqs" id="checkout-faqs">
            <div
              className="alert bgc-lighter"
              data-aos="fade-up"
              data-aos-delay={100}
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Accordion defaultActiveKey="collapse4">
                <h6>
                  Your Info{" "}
                  <Accordion.Toggle
                    as={"a"}
                    className="card-header"
                    eventKey="collapse4"
                  >
                    {" "}
                    Enter here
                  </Accordion.Toggle>
                </h6>
                <Accordion.Collapse eventKey="collapse4" className="content">
                  <form
                    id="checkout-form"
                    className="checkout-form"
                    name="checkout-form"
                    action="#"
                    method="post"
                  >
                    <div className="row">
                      <div className="col-lg-12 pt-15">
                        <h5>Personal Information</h5>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="first-name"
                            name="first-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="First Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="last-name"
                            name="last-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Last Name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="number"
                            name="number"
                            className="form-control"
                            defaultValue=""
                            placeholder="Phone Number"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            defaultValue=""
                            placeholder="Email Address"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="company-name"
                            name="company-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Company name (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="company-address"
                            name="company-address"
                            className="form-control"
                            defaultValue=""
                            placeholder="Company Address (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="city"
                            name="city"
                            className="form-control"
                            defaultValue=""
                            placeholder="City"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="state"
                            name="state"
                            className="form-control"
                            defaultValue=""
                            placeholder="State"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="zip"
                            name="zip"
                            className="form-control"
                            defaultValue=""
                            placeholder="Zip"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="street-name"
                            name="street-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="House, street name"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="apartment-name"
                            name="apartment-name"
                            className="form-control"
                            defaultValue=""
                            placeholder="Apartment, suite, unit etc. (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-80">
                          <h5 className="mb-4">
                            What best describes why you're fundraising?
                          </h5>
                          <div className="flex flex-wrap gap-5">
                            {categories.map((category) => (
                              <button
                                key={category.value}
                                type="button"
                                onClick={() => toggleCategory(category.value)}
                                className={`px-4 py-2 rounded-full border-2 transition-colors duration-200 mb-2 gap-5
                                  ${
                                    selectedCategories.includes(category.value)
                                      ? "border-blue-500 bg-blue-500 text-white "
                                      : "border-gray-300 bg-white text-gray-700 hover:border-gray-400"
                                  }`}
                                style={{
                                  marginRight: "21px",
                                  borderRadius: "50px",
                                  marginTop: "12px",
                                }}
                              >
                                {category.label}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h5>Order Notes (optional)</h5>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <textarea
                            name="order-note"
                            id="order-note"
                            className="form-control"
                            rows={5}
                            placeholder="Any message you want to convey"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </Accordion.Collapse>
              </Accordion>
            </div>
            <div
              className="alert bgc-lighter"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <Accordion>
                <h6>
                  Select Your{" "}
                  <Accordion.Toggle
                    as={"a"}
                    className="card-header"
                    eventKey="collapse5"
                  >
                    {" "}
                    Payment Method
                  </Accordion.Toggle>
                </h6>
                <Accordion.Collapse eventKey="collapse5" className="content">
                  <div className="payment-cart-total pt-25">
                    <div className="row justify-content-between">
                      <div className="col-lg-6">
                        <div className="payment-method rmb-30">
                          <h5 className="mb-20">Payment Method</h5>
                          <Accordion
                            defaultActiveKey="collapseOne"
                            as="ul"
                            id="paymentMethod"
                            className="mb-30"
                          >
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodone"
                                name="defaultExampleRadios"
                                defaultChecked
                              />{" "}
                              <Accordion.Toggle
                                as="label"
                                className="custom-control-label"
                                htmlFor="methodone"
                                data-toggle="collapse"
                                data-target="#collapseOne"
                                eventKey="collapseOne"
                              >
                                {" "}
                                Direct Bank Transfer{" "}
                                <i className="fas fa-money-check" />
                              </Accordion.Toggle>
                              <Accordion.Collapse
                                eventKey="collapseOne"
                                data-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>
                                  Make your payment directly into our bank
                                  account. Please enter your name and account
                                  number for record purpose.
                                  <br />
                                  <b> Bank Number: </b>1234567890
                                </p>
                              </Accordion.Collapse>
                            </li>
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodtwo"
                                name="defaultExampleRadios"
                              />{" "}
                              <Accordion.Toggle
                                as="label"
                                className="custom-control-label collapsed"
                                htmlFor="methodtwo"
                                data-toggle="collapse"
                                data-target="#collapseTwo"
                                eventKey="collapseTwo"
                              >
                                {" "}
                                Volunteer Work
                              </Accordion.Toggle>
                              <Accordion.Collapse
                                eventKey="collapseTwo"
                                data-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>We will get in touch through email</p>
                              </Accordion.Collapse>
                            </li>
                            <li className="custom-control custom-radio">
                              <input
                                type="radio"
                                className="custom-control-input"
                                id="methodthree"
                                name="defaultExampleRadios"
                              />{" "}
                              <Accordion.Toggle
                                as="label"
                                className="custom-control-label collapsed"
                                htmlFor="methodthree"
                                data-toggle="collapse"
                                data-target="#collapsethree"
                                eventKey="collapsethree"
                              >
                                Paypal <i className="fab fa-cc-paypal" />
                              </Accordion.Toggle>
                              <Accordion.Collapse
                                eventKey="collapsethree"
                                data-parent="#paymentMethod"
                                style={{}}
                              >
                                <p>
                                  Pay via PayPal; you can pay with your credit
                                  card if you don't have a PayPal account.
                                  <br />
                                  <b> Paypal Number: </b>123456789
                                </p>
                              </Accordion.Collapse>
                            </li>
                          </Accordion>
                          <p>
                            Your personal data will be used to process your
                            Donation and we will send an final confirmation
                            email once we recieve the cash.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Accordion.Collapse>
              </Accordion>
            </div>
            <div
              className="checkout-btn"
              data-aos="fade-up"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <button type="button" className="theme-btn w-100">
                Request <i className="far fa-arrow-right" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </AkpagerLayout>
  );
};

export default page;
