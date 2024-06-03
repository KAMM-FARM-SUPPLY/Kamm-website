import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage'
import tw from "twin.macro";
import {css} from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js"

import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import TabGrid from "components/cards/TabCardGrid.js";


const Column = tw.div`flex flex-col flex-grow min-h-full items-center justify-around`;
const HeaderContent = tw.div`h-48`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;


export default function Activities() {

  const tabs = {
    Visits : [
      {
        imageSrc:
          require("../images/kamm_ambassador/6.jpg"),
        title: "",
        content: "Visit from the Norwegian Ambassador",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },
      {
        imageSrc:
          require("../images/kamm_ambassador/4.jpg"),
        title: "",
        content: "Visit from the Norwegian Ambassador",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },
      {
        imageSrc:
          require("../images/kamm_ambassador/15.jpg"),
        title: "",
        content: "Visit from the Norwegian Ambassador",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },
      {
        imageSrc:
          require("../images/kamm_ambassador/20.jpg"),
        title: "",
        content: "Visit from the Norwegian Ambassador",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },
      {
        imageSrc:
          require("../images/kamm_ambassador/21.jpg"),
        title: "",
        content: "Visit from the Norwegian Ambassador",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },

      {
        imageSrc:
          require("../images/kamm_ambassador/22.jpg"),
        title: "",
        content: "Visit from the Norwegian Ambassador",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },
      {
        imageSrc:
          require("../images/kamm_ambassador/11.jpg"),
        title: "",
        content: "Showcasing of the quality of coffee produce.",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },
      {
        imageSrc:
          require("../images/kamm_ambassador/23.jpg"),
        title: "",
        content: "Visit around the KAMM STORE",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"",
      },

    ],

    Trainings : [
      {
        imageSrc:
          require("../images/kamm/1.jpg"),
        title: "Kalangala demo",
        content: "",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require("../images/kamm/2.jpg"),
        title: "Kalangala demo",
        content: "",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/3.jpg'),
        title: "Kalangala demo",
        content: "",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/4.jpg'),
        title: "Kalangala demo",
        content: "",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/5.jpg'),
        title: "Kalangala demo",
        content: "",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/10.jpg'),
        title: "Kalangala demo",
        content: "",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/11.jpg'),
        title: "Kalangala demo",
        content: "",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/8.jpg'),
        title: "Kalangala demo",
        content: "",
        price: "$3.99",
        rating: "3.9",
        reviews: "26",
        url: "#",
        Type:"Tranings",
      }
    ],
    Awards : [
      {
        imageSrc:
          require('../images/kamm/15.jpg'),
        title: "Mandeen Team",
        content: "Kamm visits mandeen team in Saudi Arabia",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          require('../images/kamm/16.jpg'),
        title: "Mandeen Team",
        content: "Kamm visits mandeen team in Saudi Arabia",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          require('../images/5.jpg'),
        title: "African Food Summit",
        content: "Tanzania",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          require('../images/12.jpg'),
        title: "African Food Summit",
        content: "Tanzania",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          require('../images/9.jpg'),
        title: "HAYA Award",
        content: "AFrican Food Summit(Tanzania)",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          require('../images/11.jpg'),
        title: "HAYA Award",
        content: "African Food Summit(Tanzania)",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          require('../images/1.jpg'),
        title: "African Food Summit",
        content: "Tazania",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          require('../images/2.jpg'),
        title: "African Food Summit",
        content: "Tanzania",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Awards",
      },
    ],

  }


  return (
    <AnimationRevealPage>
        <Header/>
            <Column>
              <HeaderContent>

                <Subheading></Subheading>
                <Heading>ACTIVITIES</Heading>
                <Description>Ask for what we have done for the community ? This is it .</Description>
              </HeaderContent>

              <TabGrid
                heading={
                  <>
                    Checkout our <HighlightedText>Activities.</HighlightedText>
                  </>
                }
                tabs={tabs}
              />
            </Column>
        <Footer/>
    </AnimationRevealPage>
  )
}
