import "./App.css";

import { ButtonDocs } from "./components/Button/Button.docs";
import { InputDocs } from "./components/Input/Input.docs";

function App() {
  return (
    <div className="w-full flex flex-col items-center p-10">
      <div>
        <img
          className="max-w-[40rem]"
          src="https://camo.githubusercontent.com/8f91583ca120b94458772b65338e24a01b83c0ed4909f3f00e876eb9b19e0b75/68747470733a2f2f692e6962622e636f2f5a366e564e774a2f6769746875622d6c6f676f2e706e67"
        />
      </div>
      <ButtonDocs />
      <InputDocs />
    </div>
  );
}

export default App;
