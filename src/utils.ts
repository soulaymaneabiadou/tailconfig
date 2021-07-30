import * as fs from "fs-extra";
import * as path from "path";

// @ts-ignore
const source = path.join(process.mainModule.path, "../src/tailwind.config.js");

const destination = path.join(process.cwd(), "/tailwind.config.js");

export const fileExists = () => {
  let exists;
  // if (fs.existsSync(destination)) {
  //   return true;
  // }
  // fs.access(destination, (err) => {
  //   if (err) {
  //     return false;
  //   }

  //   return true;
  // });

  return fs.existsSync(destination);

  // return exists;
};

export const copyConfigFile = () => {
  fs.copy(source, destination);
};
