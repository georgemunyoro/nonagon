import React from "react";
import { renderWithProps } from "./docs/renderWithProps";

type ComponentDocs = {
  name: string;
  component: React.ReactElement;
}[];

export const ComponentDocsTable = ({
  title,
  componentDocs,
  withProps,
}: {
  title?: string;
  componentDocs: ComponentDocs;
  withProps?: any;
}) => {
  return (
    <div>
      {title && <h1 className="text-xl font-bold montserrat">{title}</h1>}
      {componentDocs.map((doc) => {
        if (!React.isValidElement(doc.component)) return null;

        return (
          <div className="p-2 flex flex-col">
            <p className="text-gray-600">{doc.name}</p>
            <div>{renderWithProps(doc.component, withProps)}</div>
          </div>
        );
      })}
    </div>
  );
};
