import React from 'react'
import AnimationRevealPage from 'helpers/AnimationRevealPage'
import tw from "twin.macro";
import {css} from "styled-components/macro";
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js"
import { SectionHeading, Subheading as SubheadingBase } from "components/misc/Headings.js";
import { SectionDescription } from "components/misc/Typography.js";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';


const HeaderContent = tw.div`h-48`;
const Subheading = tw(SubheadingBase)`mb-4 text-center`;
const Heading = tw(SectionHeading)`w-full`;
const Description = tw(SectionDescription)`w-full text-center`;

const EventsDiv = tw.div`
  min-w-full min-h-24 flex flex-grow flex flex-col items-center
`;


const EventDiv = tw.div`
  min-w-full min-h-80 flex flex-grow flex flex-col items-center 
`;

const ExtraEventInfo = tw.div
`
  h-20 px-8 w-160 bg-blue-100 flex flex-row justify-start items-center font-bold
`
;



const Column = tw.div`flex flex-col flex-grow min-h-full items-center justify-around`;



const steps = [
  {
    label: 'Arrival of participants (8:00 Am - 9:00 Am)',
    description: `For each ad campaign that you create, you can control how much
              you're willing to spend on clicks and conversions, which networks
              and geographical locations you want your ads to show on, and more.`,
  },
  {
    label: 'Creating groups (9:00 Am - 2:00 PM)',
    description:
      'An ad group contains one or more ads which target a shared set of keywords.',
  },
  {
    label: 'Demonstration from Mr.Peter (2:00 PM - 6:00 PM)',
    description: `Try out different ad text to see what brings in the most customers,
              and learn how to enhance your ads using features like ad extensions.
              If you run into any problems with your ads, find out how to tell if
              they're running and how to resolve approval issues.`,
  },
];

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;


  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}



export default function Events() {

  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const [activeStep, setActiveStep] = React.useState(3);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <AnimationRevealPage>
        <Header/>
        <Column>

        <HeaderContent>
            <Subheading></Subheading>
            <Heading>EVENTS</Heading>
            <Description>This details all events to take place .</Description>
        </HeaderContent>

        <EventsDiv>
            <Tabs
              value={value}
              onChange={handleChange}
              variant="scrollable"
              scrollButtons="auto"
              aria-label=""
            >
              <Tab
                value={1}
                label="Tue (05 Sept , 2024)"
              />
              <Tab value={2} label="Fri (07 Nov , 2024)" />
              <Tab value={3} label="Thur (03 Nov , 2024)" />
              <Tab value={4} label="Fri (07 Nov , 2024)" />

              <Tab value={5} label="Fri (07 Nov , 2024)" />
              <Tab value={6} label="Fri (07 Nov , 2024)" />
              <Tab value={7} label="Fri (07 Nov , 2024)" />

            </Tabs>
        </EventsDiv>
        <EventDiv>
          <CustomTabPanel value={value} index={1}>


            <ExtraEventInfo>
              DEMO ESTABLISHMENT IN KALANGALA
            </ExtraEventInfo>

            <Box sx={{ maxWidth: 800 , minHeight : 450,display : 'flex' , flexDirection : 'column', justifyContent : 'space-around' , alignItems : 'center' }}>
                <Stepper activeStep={activeStep} orientation="vertical">
                  {steps.map((step, index) => (
                    <Step key={step.label}>
                      <StepLabel
                        optional={
                          <Typography>{step.description}</Typography>
                        }
                      >
                        <Typography variant = 'h6'>
                          {step.label}
                        </Typography>
                      </StepLabel>
                      <StepContent>
                        
                      </StepContent>
                    </Step>
                  ))}
                </Stepper>
                
            </Box>

          </CustomTabPanel>
        </EventDiv>
        
        </Column>
        
        <Footer/>
    </AnimationRevealPage>
  )
}
