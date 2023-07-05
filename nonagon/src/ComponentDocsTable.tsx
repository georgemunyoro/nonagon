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
  title: string;
  componentDocs: ComponentDocs;
  withProps?: any;
}) => {
  return (
    <div>
      <h1 className="text-xl font-bold montserrat">{title}</h1>
      {componentDocs.map((doc) => (
        <div className="p-2 flex flex-col">
          <p>{doc.name}</p>
          <div>{renderWithProps(doc.component, withProps)}</div>
        </div>
      ))}
    </div>
  );
};
