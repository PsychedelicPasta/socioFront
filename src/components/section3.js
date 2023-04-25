import React from "react";
import tw from "twin.macro";

import Step1 from "../images/anon.png";
import Step2 from "../images/store.png";
import Step3 from "../images/blocks.png";
import Step4 from "../images/share.png";

const Container = tw.div`py-[150px] mx-10`;
const Title = tw.h1`text-primary text-6xl font-bold text-center mb-30`;
const Diagram = tw.div`grid grid-cols-2`;

const Step = tw.div`flex items-center space-x-8 hover:shadow-2xl p-15 rounded-2xl transition-shadow duration-200 `;
const StepIcon = tw.img`w-[200px]`;
const StepTitle = tw.h2`text-primary text-3xl font-bold text-center`;

function Hero() {
  return (
    <Container>
      <Title>How Does Socio Work?</Title>
      <Diagram>
        <Step>
          <StepIcon src={Step1} alt="Step 1" />
          <StepTitle>Report anonymously.</StepTitle>
        </Step>
        <Step>
          <StepIcon src={Step2} alt="Step 2" />
          <StepTitle>Data aggregated at a street block level.</StepTitle>
        </Step>
        <Step>
          <StepIcon src={Step3} alt="Step 3" />
          <StepTitle>Data stored on an immutable, public blockchain.</StepTitle>
        </Step>
        <Step>
          <StepIcon src={Step4} alt="Step 4" />
          <StepTitle>Anyone can access, reporters get paid for quality data.</StepTitle>
        </Step>
      </Diagram>
    </Container>
  );
}

export default Hero;
