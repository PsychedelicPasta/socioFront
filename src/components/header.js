import React from "react";
import tw from "twin.macro";
import Image from "../images/whiteLogo.png";

const Container = tw.div ` mx-auto rounded-lg `;
// const Content = tw.div `bg-secondary mx-75 rounded-lg `;
const Logo = tw.img `w-[300px] h-[300px] flex justify-center mx-auto`;
function Header() {
  return (
    <Container>

        <Logo src={Image} />

  

    </Container>
  );
}

export default Header;