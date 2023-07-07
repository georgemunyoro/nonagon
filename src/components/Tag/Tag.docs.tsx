import { ComponentDocsTable } from "../../ComponentDocsTable";
import { Tag } from "./Tag";

const docs = [
  {
    name: "Default",
    component: <Tag>This is a tag</Tag>,
  },
  {
    name: "Without close",
    component: <Tag showClose={false}>This is a tag</Tag>,
  },
];

export const TagDocs = () => {
  return (
    <div className="p-4">
      <a href="#Tag" className="text-xl montserrat underline" id="Tag">
        Tag
      </a>
      <div className="flex gap-8 p-2">
        <ComponentDocsTable title="Primary" componentDocs={docs} />
      </div>
    </div>
  );
};
