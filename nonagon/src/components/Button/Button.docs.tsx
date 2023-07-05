import { Add } from "styled-icons/fluentui-system-regular";
import { Button } from "./Button";
import { ComponentDocsTable } from "../../ComponentDocsTable";

const docs = [
  {
    name: "Label",
    component: <Button>Click Me</Button>,
  },
  {
    name: "Label with icon",
    component: <Button icon={<Add size={20} />}>Click Me</Button>,
  },
  {
    name: "Icon",
    component: <Button icon={<Add size={20} />} />,
  },
  {
    name: "Disabled",
    component: <Button disabled>Click Me</Button>,
  },
  {
    name: "Loading",
    component: <Button loading>Click Me</Button>,
  },
  {
    name: "Icon circle",
    component: <Button icon={<Add size={20} />} circle />,
  },
  {
    name: "Loading icon circle",
    component: <Button icon={<Add size={20} />} circle loading />,
  },
];

export const ButtonDocs = () => {
  return (
    <div className="p-4">
      <a href="#Button" className="text-xl montserrat underline" id="Button">
        Button
      </a>
      <div className="flex gap-8 p-2">
        <ComponentDocsTable title="Primary" componentDocs={docs} />
        <ComponentDocsTable
          title="Secondary"
          componentDocs={docs}
          withProps={{
            variant: "secondary",
          }}
        />
      </div>
    </div>
  );
};
