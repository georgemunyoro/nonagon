import React from "react";

export const renderWithProps = (Component: React.ReactElement, props: any) => {
  return React.cloneElement(Component, props);
};
