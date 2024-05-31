import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Masaka",
            description: (
              <>
                <Address>
                  <AddressLine>Buddu Street</AddressLine>
                  <AddressLine>Plot 46</AddressLine>
                </Address>
                <Email>KAMMFARM@gmail.com</Email>
                <Phone>0754066646</Phone>
              </>
            )
          },
          {
            title: "Kampala Busega",
            description: (
              <>
                <Address>
                  <AddressLine>Busega Near Bukoola</AddressLine>
                  <AddressLine>Plot 46</AddressLine>
                </Address>
                <Email>KAMMFARM@gmail.com</Email>
                <Phone>07537392920</Phone>
              </>
            )
          },
          
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};
