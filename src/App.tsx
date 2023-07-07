import { ReactElement, useEffect, useState } from "react";
import "./App.css";

import { DocsSidebar } from "./docs/DocsSidebar";
import { Installation } from "./docs/GettingStarted";

function App() {
  const [selectedComponent, setSelectedComponent] = useState<{
    name: string;
    component: () => ReactElement;
  }>({
    name: "Installation",
    component: Installation,
  });

  useEffect(() => {
    document.title = `${selectedComponent.name} | Nonagon Docs`;
  }, [selectedComponent.name]);

  return (
    <div className="w-screen h-screen overflow-hidden flex">
      <DocsSidebar
        selectedComponent={selectedComponent}
        setSelectedComponent={setSelectedComponent}
      />
      <div className="w-full flex flex-col p-10 overflow-auto">
        <selectedComponent.component />
      </div>
    </div>
  );
}

export default App;
