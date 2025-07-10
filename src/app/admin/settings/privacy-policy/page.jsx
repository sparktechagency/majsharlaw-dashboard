"use client";

import dynamic from "next/dynamic";

const PrivacyPolicy = dynamic(() => import("./_components/PrivacyPolicy"), {
  ssr: false,  // 👈 disables SSR for this component
});

const PrivacyPolicyPage = () => {
  return (
    <div>
      <PrivacyPolicy />
    </div>
  );
};

export default PrivacyPolicyPage;
