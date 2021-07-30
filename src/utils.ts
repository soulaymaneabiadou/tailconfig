import * as fs from "fs";
import * as path from "path";

// @ts-ignore
const source = path.join(process.mainModule.path, "../src/tailwind.config.js");

const destination = path.join(process.cwd(), "/tailwind.config.js");

export const fileExists = () => {
  return fs.existsSync(destination);
};

export const copyConfigFile = () => {
  fs.copyFileSync(source, destination);
};
