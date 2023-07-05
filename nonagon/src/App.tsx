import { ReactElement, useState } from "react";
import "./App.css";

import { ButtonDocs } from "./components/Button/Button.docs";
import { InputDocs } from "./components/Input/Input.docs";
import clsx from "clsx";
import { BadgeDocs } from "./components/Badge/Badge.docs";

const sections = {
  Inputs: {
    Input: InputDocs,
    Button: ButtonDocs,
  },
  "Data Display": {
    Badge: BadgeDocs,
  },
} as const;

function App() {
  const [selectedComponent, setSelectedComponent] = useState<{
    name: string;
    component: () => ReactElement;
  }>({
    name: "Input",
    component: InputDocs,
  });

  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <div className="border-r-2 border-browk-disabled w-[500px] h-[100vh] flex flex-col items-start py-14 gap-8 pl-16">
        <img
          className="h-[40px] object-contain"
          src="https://camo.githubusercontent.com/8f91583ca120b94458772b65338e24a01b83c0ed4909f3f00e876eb9b19e0b75/68747470733a2f2f692e6962622e636f2f5a366e564e774a2f6769746875622d6c6f676f2e706e67"
        />
        <hr className="bg-browk-disabled h-[3px] w-full" />
        <ul className="text-base w-full flex flex-col gap-1">
          {Object.entries(sections).map(([key, components]) => {
            return (
              <>
                <li
                  key={key}
                  className="text-browk-primary montserrat font-bold pl-2 cursor-pointer p-2 duration-75"
                >
                  {key}
                </li>

                {Object.entries(components).map(([key, component]) => {
                  return (
                    <li
                      key={key}
                      className={clsx(
                        "hover:text-browk-hover pl-4 cursor-pointer p-2 duration-150",
                        selectedComponent?.name === key &&
                          "text-browk-primary bg-browk-disabled rounded-l-md"
                      )}
                      onClick={() =>
                        setSelectedComponent({
                          name: key,
                          component,
                        })
                      }
                    >
                      {key}
                    </li>
                  );
                })}
              </>
            );
          })}
        </ul>
      </div>
      <div className="w-full flex flex-col p-10 overflow-auto">
        {selectedComponent?.component()}
      </div>
    </div>
  );
}

export default App;
