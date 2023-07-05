import React, { useState } from "react";

interface ComponentPlaygroundProps {
  component: (props: object) => React.ReactElement;
  props: object;
}

export const ComponentPlayground = ({
  component,
  props,
}: ComponentPlaygroundProps) => {
  const [state, setState] = useState(props);

  return (
    <div>
      {React.createElement(component, state)}
      <ComponentPlaygroundPropsEditor props={state} updateProps={setState} />
      <pre className="bg-gray-200 rounded-md p-3 px-4">
        {`<${component.name} ${Object.entries(state)
          .map(([key, value]) => `\n  ${key}="${value}"`)
          .join(" ")} \n/>`}
      </pre>
    </div>
  );
};

const ComponentPlaygroundPropsEditor = ({
  props,
  updateProps,
}: {
  props: object;
  updateProps: (props: object) => void;
}) => {
  return (
    <table className="table-auto">
      <thead>
        <tr>
          <th>Prop name</th>
          <th>Value</th>
        </tr>
      </thead>
      <tbody>
        {Object.entries(props).map(([key, value]) => (
          <tr>
            <td className="italic">{key}</td>
            <td>
              <input
                value={value}
                onChange={(e) => {
                  updateProps({ ...props, [key]: e.target.value });
                }}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
