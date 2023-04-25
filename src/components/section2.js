import React from "react";
import tw, { styled } from "twin.macro";
import MapBackground from "../images/map.png";

const Container = tw.div`h-screen px-20 py-40 mb-50`;

const TextBox = tw.div`mx-25 flex flex-col justify-center h-full`;

const Ping = styled.div`
  ${tw`absolute rounded-full`}
  width: 10px;
  height: 10px;
  background-color: #dd3333;
  animation: ping 1s ease-in-out infinite;

  @keyframes ping {
    0% {
      transform: scale(0);
      opacity: 1;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.5;
    }
    100% {
      transform: scale(0);
      opacity: 0;
    }
  }

  animation-delay: ${(props) => `${Math.random() * 2}s`};
`;

const PingBackground = styled.div`
  ${tw`h-full bg-cover bg-center`}
  background-image: url(${MapBackground});
  position: relative;
`;

const Title = tw.h1`text-primary xl:text-6xl lg:text-6xl text-[60px] font-bold text-center mb-30`;

function Hero() {
  return (
    <PingBackground>
      {[...Array(25)].map((_, i) => (
        <Ping key={i} style={{ top: `${Math.random() * 100}%`, left: `${Math.random() * 100}%` }} />
      ))}
      <Container>
        <TextBox>
          <Title>View Crime Reports in Real Time</Title>
        </TextBox>
      </Container>
    </PingBackground>
  );
}

export default Hero;
