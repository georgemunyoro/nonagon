import { useState } from "react";
import { ComponentDocsTable } from "../../ComponentDocsTable";
import { Button } from "../Button/Button";
import { Menu } from "./Menu";

const docs = [
  {
    name: "Default",
    component: (
      <Menu
        options={[
          {
            label: "Option 1",
            value: 1,
          },
          {
            label: "Option 2",
            value: 2,
          },
          {
            label: "Option 3",
            value: 3,
          },
        ]}
      />
    ),
  },
  // {
  //   name: "Multi select",
  //   component: (
  //     <Menu
  //       options={[
  //         {
  //           label: "Option 1",
  //           value: 1,
  //         },
  //         {
  //           label: "Option 2",
  //           value: 2,
  //         },
  //         {
  //           label: "Option 3",
  //           value: 3,
  //         },
  //       ]}
  //     />
  //   ),
  // },
  // {
  //   name: "Sectioned",
  //   component: (
  //     <Menu
  //       enableMultiSelect
  //       options={[
  //         {
  //           section: "Countries",
  //           options: [
  //             {
  //               label: "Germany",
  //               value: 1,
  //             },
  //             {
  //               label: "South Africa",
  //               value: 2,
  //             },
  //             {
  //               label: "United States",
  //               value: 3,
  //             },
  //           ],
  //         },
  //         {
  //           section: "Cities",
  //           options: [
  //             {
  //               label: "Berlin",
  //               value: 4,
  //             },
  //             {
  //               label: "Cape Town",
  //               value: 5,
  //             },
  //             {
  //               label: "New York",
  //               value: 6,
  //             },
  //           ],
  //         },
  //       ]}
  //     />
  //   ),
  // },
];

export const MenuDocs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  return (
    <div
      className="p-4"
      onContextMenu={(e) => {
        console.log(e);
        // setShowMenu(true);
        // setMenuPosition({ x: e.clientX, y: e.clientY });
      }}
    >
      <a href="#Menu" className="text-xl montserrat underline" id="Menu">
        Menu
      </a>
      <div className="flex gap-8 p-2">
        <ComponentDocsTable componentDocs={docs} />
      </div>
      {/* <Button variant="primary">Click here to open a menu</Button>
      <Menu
        position={menuPosition}
        isOpen={showMenu}
        options={docs[0].component.props.options}
      /> */}
    </div>
  );
};
