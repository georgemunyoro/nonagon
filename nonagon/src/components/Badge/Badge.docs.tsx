import { Badge } from "./Badge";
import { ComponentDocsTable } from "../../ComponentDocsTable";

const docs = [
  {
    name: "White",
    component: <Badge variant="white">Click Me</Badge>,
  },
  {
    name: "Primary",
    component: <Badge variant="primary">Click Me</Badge>,
  },
  {
    name: "Secondary",
    component: <Badge variant="secondary">Click Me</Badge>,
  },
];

export const BadgeDocs = () => {
  return (
    <div className="p-4">
      <a href="#Button" className="text-xl montserrat underline" id="Badge">
        Badge
      </a>
      <div className="flex gap-8 p-2">
        <ComponentDocsTable componentDocs={docs} />
      </div>
    </div>
  );
};
