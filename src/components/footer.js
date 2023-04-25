import React from "react";
import tw from "twin.macro";
import Image from "../images/whiteLogo.png";

const Container = tw.div ` h-50 mx-auto rounded-lg `;
// const Content = tw.div `bg-secondary mx-75 rounded-lg `;
const Title = tw.h1 `text-secondary text-4xl text-center text-primary font-bold`;
const Logo = tw.img `w-[225px] h-[225px] `;

function Footer() {
  return (
    <Container>
      <Title>Footer</Title>
      
    </Container>
  );
}

export default Footer;