import { ComponentDocsTable } from "../../ComponentDocsTable";
import { Checkbox } from "./Checkbox";

const docs = [
  {
    name: "Default",
    component: <Checkbox />,
  },
  {
    name: "Disabled",
    component: <Checkbox disabled />,
  },
  {
    name: "Error",
    component: <Checkbox error />,
  },
  {
    name: "Selected",
    component: <Checkbox checked />,
  },
  {
    name: "Selected - Disabled",
    component: <Checkbox checked disabled />,
  },
  {
    name: "Indeterminate",
    component: <Checkbox checked indeterminate />,
  },
];

export const CheckboxDocs = () => {
  return (
    <div className="p-4">
      <a
        href="#Checkbox"
        className="text-xl montserrat underline"
        id="Checkbox"
      >
        Checkbox
      </a>
      <div className="flex gap-8 p-2">
        <ComponentDocsTable
          componentDocs={docs}
          withProps={{
            label: "Text",
          }}
        />
      </div>
    </div>
  );
};
