import { useState } from "react";
import { ComponentDocsTable } from "../../ComponentDocsTable";
import { Menu } from "./Menu";
import { CursorClick } from "styled-icons/fluentui-system-regular";

const docs = [
  {
    name: "Default",
    component: (
      <Menu
        isOpen
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
  {
    name: "Sectioned",
    component: (
      <Menu
        isOpen
        options={[
          {
            section: "Countries",
            options: [
              {
                label: "Germany",
                value: 1,
              },
              {
                label: "South Africa",
                value: 2,
              },
              {
                label: "United States",
                value: 3,
              },
            ],
          },
          {
            section: "Cities",
            options: [
              {
                label: "Berlin",
                value: 4,
              },
              {
                label: "Cape Town",
                value: 5,
              },
              {
                label: "New York",
                value: 6,
              },
            ],
          },
        ]}
      />
    ),
  },
];

export const MenuDocs = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  return (
    <div className="p-4">
      <a href="#Menu" className="text-xl montserrat underline" id="Menu">
        Menu
      </a>
      <div className="flex max-[1280px]:flex-col gap-8">
        <div className="flex max-[950px]:flex-col min-[1280px]:flex-col  p-2">
          <ComponentDocsTable componentDocs={[docs[0]]} />
          <ComponentDocsTable componentDocs={[docs[1]]} />
        </div>
        <div
          className="bg-browk-disabled rounded-lg w-full border-dashed border-browk-primary border-2 max-[1280px]:h-[400px]"
          onContextMenu={(e) => {
            e.preventDefault();
            setShowMenu(true);
            setMenuPosition({ x: e.clientX, y: e.clientY });
          }}
        >
          <div className="p-2 text-browk-primary flex items-center gap-1">
            <CursorClick size={18} />
            Right click anywhere in this box to open the menu.
          </div>
          <Menu
            position={menuPosition}
            isOpen={showMenu}
            onClickMenuOption={() => {
              setShowMenu(false);
            }}
            onClose={() => setShowMenu(false)}
            options={[
              {
                label: "Click to close",
                value: 1,
              },
              {
                label: "Klicken Sie, um zu schließen",
                value: 2,
              },
              {
                label: "Kliek om te sluit",
                value: 3,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};
