"use client";

import dynamic from "next/dynamic";

const TermsAndConditions = dynamic(() => import('./_components/TermsAndCondition'), {
  ssr: false, // 👈 disables SSR for this component
});

const TermsAndConditionPage = () => {
  return (
    <div>
      <TermsAndConditions />
    </div>
  );
};

export default TermsAndConditionPage;
