import React from "react";

import SEO from "../../components/seo";
import MultiplayerTeachingPage from "../../sections/muliplayer-teaching-tool";

const MultiplayerTeaching = () => {
  return (
    <>
      <MultiplayerTeachingPage />

    </>
  );
};
export default MultiplayerTeaching;
export const Head = () => {
  return <SEO title="Docker Extension for Meshery"
    description="The Docker Extension for Meshery extends Docker Desktop’s position as the cloud native developer’s go-to Kubernetes environment with collaborative and visual management of their world of multi-cluster Kubernetes."
    image="/images/meshery-logo-dark-text.webp" />;
};