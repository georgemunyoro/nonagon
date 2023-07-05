import { Add } from "styled-icons/fluentui-system-regular";
import { ComponentDocsTable } from "../../ComponentDocsTable";
import { Input } from "./Input";

const docs = [
  {
    name: "Default - Empty",
    component: <Input label="Your name" />,
  },
  {
    name: "Filled",
    component: <Input label="Your name" value="Max Park" />,
  },
  {
    name: "Disabled",
    component: <Input label="Your name" disabled />,
  },
  {
    name: "Disabled - Filled",
    component: <Input disabled value="Max Park" />,
  },
  {
    name: "Readonly",
    component: <Input readOnly label="Your name" value="Max Park" />,
  },
  {
    name: "Error - Empty",
    component: <Input error="Something bad happened" label="Your name" />,
  },
  {
    name: "Error - Filled",
    component: (
      <Input
        error="Something bad happened"
        label="Your name"
        value="Max Park"
      />
    ),
  },
  {
    name: "Success",
    component: (
      <Input
        label="Your name"
        value="Max Park"
        success="Something good happened!"
      />
    ),
  },
  {
    name: "Description",
    component: (
      <Input
        label="Your name"
        value="Max Park"
        description="This is a description."
      />
    ),
  },
  {
    name: "Left icon",
    component: (
      <Input label="Your name" value="Max Park" leftIcon={<Add size={20} />} />
    ),
  },
  {
    name: "Right icon",
    component: (
      <Input label="Your name" value="Max Park" rightIcon={<Add size={20} />} />
    ),
  },
];

export const InputDocs = () => {
  return (
    <div className="p-4">
      <a href="#Input" className="text-xl montserrat underline" id="Input">
        Input
      </a>
      <div className="flex gap-8 p-2">
        <ComponentDocsTable
          componentDocs={docs}
          withProps={{
            className: "w-[300px]",
          }}
        />
      </div>
    </div>
  );
};
