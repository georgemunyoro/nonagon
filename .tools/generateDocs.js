const fs = require("fs");
const path = require("path");
const reactDocs = require("react-docgen");

const componentsFolder = "./src/components";
const componentsJSONFilename = "./docs/components.json";

const components = [];

const createComponentFile = () => {
  const componentsJSON = JSON.stringify(components, null, 2);
  if (!fs.existsSync("./docs/")) {
    fs.mkdirSync("./docs/", (err) => {
      if (err) throw err;
    });
  }

  fs.writeFile(componentsJSONFilename, componentsJSON, "utf8", (err, data) => {
    if (err) throw err;
    console.log("Created component file.");
  });
};

/**
 *
 * @param {File} component
 * @param {String} filename
 */
const parseComponent = (component, filename) => {
  console.log(filename);
  try {
    const info = reactDocs.parse(component);
    const splitIndex = filename.indexOf("/src/");
    const shortName = filename.substring(splitIndex + 4);

    info.filename = shortName;
    components.push(info);
  } catch (err) {
    console.error(filename, err.message);
  }
};

/**
 *
 * @param {String} filename
 * @param {Promise} resolve
 */
const loadComponent = (filename, resolve) => {
  console.log(filename);
  fs.readFile(filename, (err, data) => {
    if (err) throw err;

    resolve(parseComponent(data, filename));
  });
};

/**
 * Explores recursively a directory and returns all the filepaths and folderpaths in the callback.
 *
 * @see http://stackoverflow.com/a/5827895/4241030
 * @param {String} dir
 * @param {Function} done
 * @param {Function} callback
 */
const filewalker = (dir, done, callback) => {
  let results = [];
  fs.readdir(dir, async (err, list) => {
    if (err) return done(err);
    let pending = list.length;
    if (!pending) return done(null, results);
    list.forEach((file) => {
      file = path.resolve(dir, file);
      fs.stat(file, async (err, stat) => {
        // If directory, execute a recursive call
        if (stat && stat.isDirectory()) {
          filewalker(file, (err, res) => {
            results = results.concat(res);
            if (!--pending) done(null, results);
          });
        } else {
          // Check if is a Javascript file
          // And not a story or test
          if (
            file.endsWith(".js") &&
            !file.endsWith(".story.js") &&
            !file.endsWith(".test.js") &&
            !file.endsWith("index.js")
          ) {
            await new Promise((resolve) => {
              loadComponent(file, resolve);
            });
            await results.push(file);
          }
          if (!--pending) done(null, results);
        }
      });
    });
  });
};

filewalker(componentsFolder, (err, data) => {
  if (err) throw err;
  createComponentFile();
});
