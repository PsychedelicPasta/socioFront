import React from 'react';
import tw from 'twin.macro';

import Header from '../components/header.js';
import Section1 from '../components/section1.js';
import Section2 from '../components/section2.js';
import Section3 from '../components/section3.js';

import Footer from '../components/footer.js';

const Container = tw.div `h-full bg-primary mx-auto `;
const Content = tw.div `bg-secondary mx-75 rounded-2xl hover:shadow-2xl p-50`;

function Home() {
  return (
    <Container>
        <Header />
            <Section1 />
        <Content>
            <Section2 />
            <Section3 />
        </Content>
    </Container>
  );
}

export default Home;