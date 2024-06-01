import React from 'react';
import AnimationRevealPage from 'helpers/AnimationRevealPage';
import tw from 'twin.macro';
import { css } from 'styled-components/macro';
import Header from 'components/headers/light.js';
import Footer from 'components/footers/MiniCenteredFooter.js';
import { SectionHeading, Subheading as SubheadingBase } from 'components/misc/Headings.js';
import { SectionDescription } from 'components/misc/Typography.js';

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
  min-w-full min-h-24 flex flex-grow flex-col items-center
`;

const EventDiv = tw.div`
  min-w-full min-h-80 flex flex-grow flex-col items-center
`;

const ExtraEventInfo = tw.div`
  h-20 px-8 w-full bg-blue-100 flex flex-row justify-start items-center font-bold
`;

const Column = tw.div`flex flex-col flex-grow min-h-full items-center justify-around`;

const steps_1 = [
  {
    label: 'Arrival of participants (8:00 Am - 9:00 Am)',
    description: `This includes all introductions of the various specialists and other different members who have come to join in.`,
  },
  {
    label: 'Creating groups (9:00 Am - 2:00 PM)',
    description: 'This involves creating the various groups amongst the participants for easy demostrations.',
  },
  {
    label: 'Demonstration from Mr.Kiseka Junior (Sr. Agronomist) (2:00 PM - 6:00 PM)',
    description: `This includes all the all the best demostrations from our agronomist when it comes to planting maize . This is to equip farmers with the knowledge involved in planting maize to maximise yields.`,
  },
];

const steps_2 = [
  
  {
    label: 'INTRODUCTION (9:00 Am - 12:00 AM)',
    description: 'This includes all the introductions to the Norweign Ambassador.',
  },
  {
    label: 'Walk Around KAMM FARM STORES (2:00 PM - 6:00 PM)',
    description: `This is a walk around showing the standards of KAMM farm stores to ensure reliable and secure storage of the various products.`,
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
      <Header />
      <Column>
        <HeaderContent>
          <Subheading></Subheading>
          <Heading>EVENTS</Heading>
          <Description>This details all events to take place.</Description>
        </HeaderContent>

        <EventsDiv>
          <Tabs
            value={value}
            onChange={handleChange}
            variant="scrollable"
            scrollButtons="auto"
            aria-label=""
            sx={{ width: '100%', maxWidth: 600 }} // Adjust the width for responsiveness
          >
            <Tab value={1} label="Sat (02 March, 2024)" />
            <Tab value={2} label="Sat (01 June, 2024)" />
          </Tabs>
        </EventsDiv>
        <EventDiv>
          <CustomTabPanel value={value} index={1}>
            <ExtraEventInfo>DEMO ESTABLISHMENT IN KALANGALA</ExtraEventInfo>
            <Box
              sx={{
                maxWidth: 800,
                minHeight: 450,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                p: 2,
              }}
            >
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps_1.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={<Typography>{step.description}</Typography>}
                    >
                      <Typography variant="h6">{step.label}</Typography>
                    </StepLabel>
                    <StepContent></StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </CustomTabPanel>

          <CustomTabPanel value={value} index={2}>
            <ExtraEventInfo>
              NORWEGIAN AMBASSADOR (Anne Kristin Hermansen) VISITS KAMM FARM STORES
            </ExtraEventInfo>
            <Box
              sx={{
                maxWidth: 800,
                minHeight: 450,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-around',
                alignItems: 'center',
                p: 2,
              }}
            >
              <Stepper activeStep={activeStep} orientation="vertical">
                {steps_2.map((step, index) => (
                  <Step key={step.label}>
                    <StepLabel
                      optional={<Typography>{step.description}</Typography>}
                    >
                      <Typography variant="h6">{step.label}</Typography>
                    </StepLabel>
                    <StepContent></StepContent>
                  </Step>
                ))}
              </Stepper>
            </Box>
          </CustomTabPanel>
        </EventDiv>
      </Column>

      <Footer />
    </AnimationRevealPage>
  );
}
