import React from "react";
import tw, { styled } from "twin.macro";

const Container = tw.div `mb-75 lg:mx-75 xl:mx-75 px-20 py-40`;

const TextBox = tw.div ` sm:mx-0 lg:mx-50 xl:mx-50 flex flex-col justify-center `;
// const Title = tw.h1`text-secondary text-[75px] text-center text-primary font-bold mb-25 `;
const Title = tw.h1`text-secondary xl:text-6xl lg:text-6xl text-[50px] font-bold text-center mb-30`;
const SubTitle = tw.h2`text-secondary xl:text-[35px] lg:text-[35px] text-[20px] text-center text-primary font-bold`;

function Hero() {
  return (
    <Container>
      <TextBox>
        <Title>Community-Led Crime Reporting</Title>
        <SubTitle>For locals, tourists, businesses, & governments.</SubTitle>
      </TextBox>
    </Container>
  );
}

export default Hero;
