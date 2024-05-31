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
    Trainings : [
      {
        imageSrc:
          require("../images/kamm/1.jpg"),
        title: "Veg Mixer",
        content: "Tomato Salad & Carrot",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require("../images/kamm/2.jpg"),
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/3.jpg'),
        title: "Nelli",
        content: "Hamburger & Fries",
        price: "$7.99",
        rating: "4.9",
        reviews: "89",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/4.jpg'),
        title: "Jalapeno Poppers",
        content: "Crispy Soyabeans",
        price: "$8.99",
        rating: "4.6",
        reviews: "12",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/5.jpg'),
        title: "Cajun Chicken",
        content: "Roasted Chicken & Egg",
        price: "$7.99",
        rating: "4.2",
        reviews: "19",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/10.jpg'),
        title: "Chillie Cake",
        content: "Deepfried Chicken",
        price: "$2.99",
        rating: "5.0",
        reviews: "61",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/11.jpg'),
        title: "Guacamole Mex",
        content: "Mexican Chilli",
        price: "$3.99",
        rating: "4.2",
        reviews: "95",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          require('../images/kamm/8.jpg'),
        title: "Carnet Nachos",
        content: "Chilli Crispy Nachos",
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
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "Tomato Salad & Carrot",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "Tomato Salad & Carrot",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "Tomato Salad & Carrot",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Tranings",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Veg Mixer",
        content: "Tomato Salad & Carrot",
        price: "$5.99",
        rating: "5.0",
        reviews: "87",
        url: "#",
        Type:"Awards",
      },
      {
        imageSrc:
          "https://images.unsplash.com/photo-1432139555190-58524dae6a55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80",
        title: "Macaroni",
        content: "Cheese Pizza",
        price: "$2.99",
        rating: "4.8",
        reviews: "32",
        url: "#",
        Type:"Tranings",
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
