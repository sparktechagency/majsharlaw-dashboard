"use client";

import dynamic from "next/dynamic";

const AboutUs = dynamic(() => import("./_components/AboutUs"), {
  ssr: false,  // disables server-side rendering for this component
});

const AboutUsPage = () => {
  return (
    <div>
      <AboutUs />
    </div>
  );
};

export default AboutUsPage;
