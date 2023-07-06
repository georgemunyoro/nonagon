import React from "react";

export const renderWithProps = (component: React.ReactElement, props: any) => {
  return React.cloneElement(component, props);
};
