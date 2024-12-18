"use client";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { Accordion } from "react-bootstrap";
const page = () => {
  return (
    <AkpagerLayout>
      <PageBanner pageName={"Need Donation"} />
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
                <h4>You need to Fill this form in order to become a cause </h4>
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

                      <div className="col-lg-12 pt-15">
                        <h5>How much needed:</h5>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            type="text"
                            id="money"
                            name="money"
                            className="form-control"
                            defaultValue=""
                            placeholder="How much do you need"
                            required=""
                          />
                        </div>
                      </div>

                      <div className="col-lg-12">
                        <h5>Cause Name:</h5>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            id="cause"
                            name="cause"
                            className="form-control"
                            defaultValue=""
                            placeholder="What is the Cause?"
                            required=""
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <h5>Order Notes</h5>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group mb-0">
                          <textarea
                            name="order-note"
                            id="order-note"
                            className="form-control"
                            rows={5}
                            placeholder="Enter Brief Detail of Your Cause"
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
