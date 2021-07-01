const fs = require("fs");
const { stderr } = require("process");

const generateComponent = (componentName) => {
  const JSX = `import React from "react";\n\nimport "./${componentName}.css";\n\nconst ${componentName} = ({}) => {\n  return <div className="${componentName}"></div>\n};\n\nexport default ${componentName};\n`;
  const index = `export {default} from "./${componentName}";`;
  const scss = `@import ("../../styles/theme");\n\n.${componentName} {\n\n}\n`;
  const storybook = (
    `import React from "react"\n\n` +
    `import ${componentName} from "../components/${componentName}";\n\n` +
    `export default {\n` +
    `  title: "Components/${componentName}",\n` +
    `  component: ${componentName},\n` +
    `  argtypes: {},\n` +
    `};\n\n` +
    `const Template = (args) => <${componentName} {...args} />;\n\n` +
    `export const ${componentName.toLowerCase()} = Template.bind({});\n\n` +
    `${componentName.toLowerCase()}.args = {};\n`
  );

  const errHandler = (err) => {
    if (err) {
      console.error(err);
      exit();
    }
  }

  fs.mkdir(`${__dirname}/../src/components/${componentName}`, errHandler);
  fs.writeFile(`${__dirname}/../src/components/${componentName}/${componentName}.scss`, scss, errHandler);
  fs.writeFile(`${__dirname}/../src/components/${componentName}/${componentName}.js`, JSX, errHandler);
  fs.writeFile(`${__dirname}/../src/components/${componentName}/index.js`, index, errHandler);
  fs.writeFile(`${__dirname}/../src/stories/${componentName}.stories.js`, storybook, errHandler);
};

generateComponent(process.argv[2]);
