export const Installation = () => {
  return (
    <div className="p-4">
      <a
        href="#InstallingNonagon"
        className="text-xl montserrat underline"
        id="InstallingNonagon"
      >
        Installing Nonagon
      </a>
      <div className="flex flex-col gap-4 py-4">
        To use Nonagon in your project, run one of the following commands in
        your terminal:
        <pre className="roboto-mono text-sm bg-browk-black text-browk-disabled shadow-inner p-4 px-6 rounded-lg w-full">
          {[
            "# Using npm",
            "npm install nonagon",
            "",
            "# Using yarn",
            "yarn add nonagon",
            "",
            "# Using pnpm",
            "pnpm add nonagon",
          ].join("\n")}
        </pre>
        After installing Nonagon, you can import the components you need from
        the package:
        <pre className="roboto-mono text-sm bg-browk-black text-browk-disabled shadow-inner p-4 px-6 rounded-lg w-full">
          {[
            "import { Button } from 'nonagon';",
            "",
            "const App = () => {",
            "  return <Button>Click Me</Button>",
            "}",
          ].join("\n")}
        </pre>
      </div>
    </div>
  );
};
