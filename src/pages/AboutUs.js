import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About KAMM FARM SERVICES</Subheading>}
        heading="Supplying farmers with the best products."
        description="Kamm Farm Services is an agricultural institution aimed at improving livelihoods through access to quality fertilisers , good agronomic trainings , financial literacy and access to crop advances which will enhance productivity and eventually more revenue for the farmer"
        buttonRounded={false}
        primaryButtonUrl = "/Activities"
        primaryButtonText="See Activities"
        imageSrc= {require("../images/kamm/9.jpg")}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to improve the agricultural subsytem in the central region."
        buttonRounded={false}
        primaryButtonText="Contact Us"
        imageSrc= {require("../images/4.jpg")}
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Values</Subheading>}
        heading="We follow these."
        description=""
        cards={[
          {
            imageSrc: SupportIconImage,
            title: "24/7 Service",
            description: "Have any queries, Please reach out to our hotlines or use the contact page."
          },
          {
            imageSrc: ShieldIconImage,
            title: "Quality",
            description: "Providing quality products to our clients."
          },
          {
            imageSrc: CustomerLoveIconImage,
            title: "Customer Satisfaction",
            description: "We value your presence as our customer ."
          },
        ]}
        linkText=""
      />
      <TeamCardGrid 
        subheading={<Subheading></Subheading>}
        heading = {"Meet our Team"}
        description=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
