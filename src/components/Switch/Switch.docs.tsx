import { ComponentDocsTable } from "../../ComponentDocsTable";
import { Switch } from "./Switch";

const docs = [
  {
    name: "Default",
    component: <Switch />,
  },
  {
    name: "Off - Disabled",
    component: <Switch disabled />,
  },
  {
    name: "On - Disabled",
    component: <Switch checked disabled />,
  },
];

export const SwitchDocs = () => {
  return (
    <div className="p-4">
      <a href="#Switch" className="text-xl montserrat underline" id="Switch">
        Switch
      </a>
      <div className="flex gap-8 p-2">
        <ComponentDocsTable componentDocs={docs} />
      </div>
    </div>
  );
};
