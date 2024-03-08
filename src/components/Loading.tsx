import React from "react";

type LoadingType = {
  children: React.ReactNode;
  isLoading: boolean;
  render?: boolean;
};

const Loading: React.FC<LoadingType> = ({
  children,
  isLoading,
  render = true,
}) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!render) {
    return null;
  }

  return children;
};

export default Loading;
