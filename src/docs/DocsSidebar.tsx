import clsx from "clsx";
import { BadgeDocs } from "../components/Badge/Badge.docs";
import { ButtonDocs } from "../components/Button/Button.docs";
import { InputDocs } from "../components/Input/Input.docs";
import { MenuDocs } from "../components/Menu/Menu.docs";
import { CheckboxDocs } from "../components/Checkbox/Checkbox.docs";
import { Installation } from "./GettingStarted";

export const sections = {
  "Getting Started": {
    Installation: Installation,
  },
  Inputs: {
    Input: InputDocs,
    Button: ButtonDocs,
    Menu: MenuDocs,
    Checkbox: CheckboxDocs,
  },
  "Data Display": {
    Badge: BadgeDocs,
  },
};

export const DocsSidebar = ({
  selectedComponent,
  setSelectedComponent,
}: {
  selectedComponent: any;
  setSelectedComponent: any;
}) => {
  return (
    <div className="border-r-2 border-browk-disabled w-[400px] lg:w-[500px] h-[100vh] flex flex-col items-start py-14 gap-8 lg:pl-16">
      <img className="h-[40px] object-contain" src="/logo-full.png" />
      <hr className="bg-browk-disabled h-[3px] w-full" />
      <ul className="text-base w-full flex flex-col gap-1">
        {Object.entries(sections).map(([key, components]) => {
          return (
            <SidebarSection
              key={key}
              label={key}
              components={components}
              selectedComponent={selectedComponent}
              setSelectedComponent={setSelectedComponent}
            />
          );
        })}
      </ul>
    </div>
  );
};

const SidebarSection = ({
  label,
  components,
  selectedComponent,
  setSelectedComponent,
}: {
  label: string;
  components: any;
  selectedComponent: any;
  setSelectedComponent: any;
}) => {
  return (
    <>
      <li className="text-browk-primary montserrat font-bold pl-2 cursor-pointer p-2 duration-75">
        {label}
      </li>

      {Object.entries(components).map(([componentKey, component]) => {
        return (
          <SidebarItem
            key={componentKey}
            label={componentKey}
            selectedComponent={selectedComponent}
            setSelectedComponent={setSelectedComponent}
            component={component}
          />
        );
      })}
    </>
  );
};

function SidebarItem({
  label,
  selectedComponent,
  setSelectedComponent,
  component,
}: {
  label: string;
  selectedComponent: any;
  setSelectedComponent: any;
  component: unknown;
}) {
  return (
    <li
      key={label}
      className={clsx(
        "hover:text-browk-hover pl-4 cursor-pointer p-2 duration-150",
        selectedComponent?.name === label &&
          "text-browk-primary bg-browk-disabled lg:rounded-l-md"
      )}
      onClick={() =>
        setSelectedComponent({
          name: label,
          component,
        })
      }
    >
      {label}
    </li>
  );
}
