"use client";
import Link from "next/link";
import PageBanner from "@/components/PageBanner";
import AkpagerLayout from "@/layouts/AkpagerLayout";
import { useState } from "react";
import { Card, ProgressBar, Row, Col } from "react-bootstrap";

const Page = () => {
  const [active, setActive] = useState("collapse1");
  const cardsData = [
    {
      id: 1,
      title: "Ensure Education For Every Poor Children",
      raised: 20000,
      goal: 35000,
      progress: 70,
      image: "assets/images/charity2/indian-1717192_1280.jpg",
    },
    {
      id: 2,
      title: "Providing Healthy Food For The Children",
      raised: 20000,
      goal: 35000,
      progress: 25,
      image: "assets/images/charity2/slums-2507372_1280.jpg",
    },
    {
      id: 3,
      title: "Supply Drinking Water For The People",
      raised: 20000,
      goal: 35000,
      progress: 50,
      image: "assets/images/charity2/old-man-3548098_1280.jpg",
    },
    {
      id: 4,
      title: "Disaster Relief for Families effected by nature",
      raised: 30000,
      goal: 55000,
      progress: 60,
      image: "assets/images/Charity-Images/2.jpg",
    },
    {
      id: 5,
      title: "Women and Children Empowerment",
      raised: 25000,
      goal: 35000,
      progress: 45,
      image: "assets/images/Charity-Images/1.jpg",
    },
    {
      id: 6,
      title: "Animal Welfare",
      raised: 20000,
      goal: 35000,
      progress: 50,
      image: "assets/images/charity2/stray-8933778_1280.png",
    },
    {
      id: 6,
      title: "Healthcare and Medical Assistance",
      raised: 10000,
      goal: 25000,
      progress: 70,
      image: "assets/images/charity2/man-1550501_1280.jpg",
    },
  ];
  return (
    <AkpagerLayout>
      <PageBanner
        pageName="Causes"
        pageTitle="Causes we support"
        titleTag="h2"
      />

      <section className="service-mamagement-area pt-60 rpt-30 pb-90 rpb-60">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div
                className="service-mamagement-content mt-40 rmb-20"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Causes We Support</h2>
                </div>
                <p>
                  At AIDFLOW, we are deeply committed to addressing the most
                  pressing challenges faced by vulnerable communities. Our work
                  spans across various critical causes, including disaster and
                  flood relief, where we provide immediate aid such as food,
                  water, shelter, and medical assistance to those affected by
                  natural calamities.
                  <br />
                  Beyond immediate relief, we focus on long-term rehabilitation
                  efforts, such as rebuilding homes, schools, and infrastructure
                  to help communities recover and thrive.
                </p>
              </div>
            </div>
            <div className="col-lg-6">
              <div
                className="management-images float-lg-end my-40"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  src="assets/images/charity2/uganda-4288793_1280.jpg"
                  alt="Management"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Solutions Area */}
      <section className="marketing-solutions-area pb-80 rpb-50">
        <div className="container">
          <div className="row gap-90 align-items-center">
            <div className="col-lg-6">
              <div
                className="marketing-solutions-images mb-50"
                data-aos="fade-right"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <img
                  className="br-20"
                  src="assets/images/charity2/poor-2382641_1280.jpg"
                  alt="About"
                />
              </div>
            </div>
            <div
              className="col-lg-6 "
              data-aos="fade-right"
              data-aos-duration={1500}
              data-aos-offset={50}
            >
              <div
                className="marketing-solutions-content"
                data-aos="fade-left"
                data-aos-duration={1500}
                data-aos-offset={50}
              >
                <div className="section-title mb-30">
                  <h2>Our Vision</h2>
                </div>
                <p>
                  Access to clean water and sanitation is vital, and we work to
                  install water filtration systems, improve hygiene practices,
                  and prevent waterborne diseases.
                  <br />
                  Our commitment extends to climate action, reforestation
                  projects, renewable energy, and awareness about the impact of
                  climate change. Together, we can build a better future for
                  all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container mt-5">
          <div className="container">
            <div className="row gap-90 align-items-center">
              <div className="col-lg-12">
                <div
                  className="marketing-solutions-content"
                  data-aos="fade-left"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <div
                    className="section-title mb-30"
                    data-aos="fade-right"
                    data-aos-duration={1500}
                    data-aos-offset={50}
                  >
                    <h2>Explore our latest causes</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Row>
            {cardsData.map((card) => (
              <Col key={card.id} md={4} className="mb-4">
                <Card
                  data-aos="fade-right"
                  data-aos-duration={1500}
                  data-aos-offset={50}
                >
                  <Card.Img variant="top" src={card.image} alt="Card image" />
                  <Card.Body>
                    <Card.Title className="fw-bold">{card.title}</Card.Title>
                    <ProgressBar
                      now={card.progress}
                      variant="success"
                      label={`${card.progress}%`}
                      className="my-3"
                    />
                    <div>
                      <span className="fw-bold">Raised: </span>
                      <span className="text-primary ">
                        ${card.raised.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      <span className="fw-bold">Goal: </span>
                      <span className="text-muted">
                        ${card.goal.toLocaleString()}
                      </span>
                    </div>
                    <div>
                      {" "}
                      <Link href="donate" className="theme-btn mt-30">
                        Donate <i className="far fa-arrow-right" />
                      </Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
      <section>
        <div className="btns pt-35 pb-35 text-center">
          <Link href="donate" className="theme-btn mt-10 me-4">
            Donate <i className="far fa-arrow-right" />
          </Link>
        </div>
      </section>
    </AkpagerLayout>
  );
};

export default Page;
