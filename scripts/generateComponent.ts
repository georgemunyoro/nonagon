import fs from "fs";
import { execSync } from "child_process";

const generateComponentTypesFile = (name: string) => {
  const typesFileContent = `
    import { BaseProps } from "../../types/BaseProps";

    export interface ${name}Props extends BaseProps {}`;
  const typesFilePath = `${process.cwd()}/src/components/${name}/${name}.types.ts`;
  fs.writeFileSync(typesFilePath, typesFileContent);
};

const generateComponentFile = (name: string) => {
  const componentFileContent = `
    import { ${name}Props } from "./${name}.types";

    export const ${name} = (props: ${name}Props) => {
        return <div>${name} component</div>;
    };`;

  const componentFilePath = `${process.cwd()}/src/components/${name}/${name}.tsx`;
  fs.writeFileSync(componentFilePath, componentFileContent);
};

const generateComponentDocsFile = (name: string) => {
  const docsFileContent = `
        import { ComponentDocsTable } from "../../ComponentDocsTable";
        import { ${name} } from "./${name}";

        const docs = [
            {
                name: "Default",
                component: <${name} />
            }
        ]
    
        export const ${name}Docs = () => {
            return (
                <div className="p-4">
                    <a href="#${name}" className="text-xl montserrat underline" id="${name}">
                      ${name}
                    </a>
                    <div className="flex gap-8 p-2">
                      <ComponentDocsTable title="Primary" componentDocs={docs} />
                    </div>
                </div>
            );
        };`;

  const docsFilePath = `${process.cwd()}/src/components/${name}/${name}.docs.tsx`;
  fs.writeFileSync(docsFilePath, docsFileContent);
};

const formatGeneratedFiles = (name: string) => {
  const generatedFiles = [
    `${process.cwd()}/src/components/${name}/${name}.tsx`,
    `${process.cwd()}/src/components/${name}/${name}.types.ts`,
    `${process.cwd()}/src/components/${name}/${name}.docs.tsx`,
  ];

  generatedFiles.forEach((file) => {
    execSync(`yarn prettier --write ${file}`);
  });
};

const isComponentNameValid = (name: string) => {
  const startsWithCapitalLetter = /^[A-Z]/.test(name);
  if (!startsWithCapitalLetter) {
    console.error("Component name must start with a capital letter.");
  }

  const hasOnlyLetters = /^[A-Za-z]+$/.test(name);
  if (!hasOnlyLetters) {
    console.error("Component name must contain only letters.");
  }

  return startsWithCapitalLetter && hasOnlyLetters;
};

const generateComponent = (name: string) => {
  const componentDirectory = `${process.cwd()}/src/components/${name}`;

  if (fs.existsSync(componentDirectory)) {
    console.error(`${name} component already exists.`);
    process.exit(1);
  }

  if (!isComponentNameValid(name)) {
    process.exit(1);
  }

  fs.mkdirSync(componentDirectory);

  generateComponentFile(name);
  generateComponentTypesFile(name);
  generateComponentDocsFile(name);
  formatGeneratedFiles(name);

  console.log(`${name} component created. 🎉`);
};

generateComponent(process.argv[2]);
