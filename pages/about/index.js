import Footer from '@/components/Footer';
import Header from '@/components/Header'
import React from 'react'
const About = () => {
  return (
    <>
    <Header/>
    <div className='h-screen'>About</div>
    <Footer/>
    </>
  )
}

export async function getServerSideProps() {
  const title = "About Page - Krishi helper ";
  const description = "Learn more about our team and mission on this page.";
  const keywords = "Next.js, About, Company, Team";

  return {
    props: {
      title,
      description,
      keywords,
    },
  };
}

export default About