import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro"; //eslint-disable-line

import Header, { NavLink, NavLinks, PrimaryLink, LogoLink, NavToggle, DesktopNavLinks } from "../headers/light.js";
import ResponsiveVideoEmbed from "../../helpers/ResponsiveVideoEmbed.js";

const StyledHeader = styled(Header)`
  ${tw`pt-8 max-w-none`}
  ${DesktopNavLinks} ${NavLink}, ${LogoLink} {
    ${tw`text-gray-100 hover:border-gray-300 hover:text-gray-300`}
  }
  ${NavToggle}.closed {
    ${tw`text-gray-100 hover:text-primary-500`}
  }
`;
const Container = styled.div`
  ${tw`relative -mx-8 -mt-8 bg-center bg-cover`}
  background-image: url("https://lh3.googleusercontent.com/pw/AP1GczNvDmWInYaUb-UNq0fZcvb8p0ejTQiH2Cn_OovIQ-FCenASGj3oyuysMQeMcYDasBGeuKzaBibrdZ7zjS-tlbpNCipV1sxD60iYVgOCvbjsBIxLJnuDwqD-3sKIA-VvJJWWjaMGZ6Y3Oq23YoSK80rcbpwPI7xLEGEATeURu9bLQWjCxcSf8pPVXq5XnvcM-wWaZ68jm8g6hckHQ2D7IOKDFdfZ6HCgmyMkQdeF6T-A_6eQVtjUSw6CnViKK4_I-4bR2Fm4AvNWzyK1zq8Z3zJIr3OLmP1VByi69YMvc7lNT7fVZO66U7sia40VXiV-Oy1a8209rqaL07Cn93A0Z7WPuOyR4_zBtrhV6510ryQW6VM5_N30jrtbkNDdYZU9znIfGJt0tfSeNjSOTj_847tz3aGBGAsyhezZoKh1uyH30FJPoIxUOQP75P0xYARtgpDk5Uoi4KWcI_6DHOYh85iKo3c-F1u02oGcuqSF8bNXWfx1WbOT4hpFAmIag1MG4EiF5GT1cP2zShZu1uuPJAn2Lgo2bMRtgiu-D6FUmQ4Rj8ZHq60GExTiMuuNdsH-p_K4txeRh__QJmA-w2P1wRzCPUe1x0cO7GHetazDFx94O3Kf96Ag4bik6lqngz5Qxnld6XK88rOyrEL608JcJcwL_KFR6_HlO11TWxfGJAFOOuejRtyvLBlOrPHqo2F2D7bawqTC1r8b0W7eZgeyIbiduvZW_ZpmT7qlgSxl6qFMKOXyWNLgAymlUshMc-C_QLdD3EciLu1cR2ecb2qCQuMRJwjFh5chhWuxaUvlsGz7gRsB8WgNdtc3D72aI74XLGlYSnM0gOSnzUuIfvCbYQva5gqiKe2kBt6IpXcTxb2lkKsAWzDHaAsWYccyxpH3CHBGdWF97nOteJYsEfJigCA=w774-h516-no?authuser=0");
  `
  ;

const OpacityOverlay = tw.div`z-10 absolute inset-0 bg-primary-500 opacity-25`;

const HeroContainer = tw.div`z-20 relative px-4 sm:px-8 max-w-screen-xl mx-auto`;
const TwoColumn = tw.div`pt-24 pb-32 px-4 flex justify-between items-center flex-col lg:flex-row`;
const LeftColumn = tw.div`flex flex-col items-center lg:block`;
const RightColumn = tw.div`w-full sm:w-5/6 lg:w-1/2 mt-16 lg:mt-0 lg:pl-8`;

const Heading = styled.h1`
  ${tw`text-3xl text-center lg:text-left sm:text-4xl lg:text-5xl xl:text-6xl font-black text-gray-100 leading-none`}
  span {
    ${tw`inline-block mt-2`}
  }
`;

const SlantedBackground = styled.span`
  ${tw`relative text-primary-500 px-4 -mx-4 py-2`}
  &::before {
    content: "";
    ${tw`absolute inset-0 bg-gray-100 transform -skew-x-12 -z-10`}
  }
`;

const Notification = tw.span`inline-block my-4 pl-3 py-1 text-gray-100 border-l-4 border-blue-500 font-medium text-sm`;

const PrimaryAction = tw.button`px-8 py-3 mt-10 text-sm sm:text-base sm:mt-16 sm:px-8 sm:py-4 bg-gray-100 text-primary-500 font-bold rounded shadow transition duration-300 hocus:bg-primary-500 hocus:text-gray-100 focus:shadow-outline`;

const StyledResponsiveVideoEmbed = styled(ResponsiveVideoEmbed)`
  padding-bottom: 56.25% !important;
  padding-top: 0px !important;
  ${tw`rounded`}
  iframe {
    ${tw`rounded bg-black shadow-xl`}
  }
`;

export default () => {
  const navLinks = [
    <NavLinks key={1}>
      <NavLink href="#">
        About
      </NavLink>
      <NavLink href="#">
        Blog
      </NavLink>
      <NavLink href="#">
        Locations
      </NavLink>
      <NavLink href="#">
        Pricing
      </NavLink>
    </NavLinks>,
    <NavLinks key={2}>
      <PrimaryLink href="/#">
        Hire Us
      </PrimaryLink>
    </NavLinks>
  ];

  return (
    <Container>
      <OpacityOverlay/>
      <HeroContainer>
        <StyledHeader/>
        <TwoColumn>
          <LeftColumn>
            <Notification>We have now launched operations in entire East Africa.</Notification>
            <Heading>
              <span>KAMM</span>
              <br />
              <SlantedBackground>FARM SERVICES</SlantedBackground>
            </Heading>
            <PrimaryAction>Read Customer Stories</PrimaryAction>
          </LeftColumn>
          <RightColumn>
            
          </RightColumn>
        </TwoColumn>
      </HeroContainer>
    </Container>
  );
};
