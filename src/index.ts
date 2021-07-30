import { Command, flags } from "@oclif/command";
import cli from "cli-ux";
import { copyConfigFile, fileExists } from "./utils";

class Tailconfig extends Command {
  static description = "describe the command here";

  static flags = {
    // add --version flag to show CLI version
    version: flags.version({ char: "v" }),
    help: flags.help({ char: "h" }),
    // flag with no value (-f, --force)
    force: flags.boolean({ char: "f" }),
  };

  static args = [];

  async run() {
    let confirm;
    const { flags } = this.parse(Tailconfig);

    if (fileExists() && !flags.force) {
      confirm = await cli.confirm("Exists, overwrite ");
    }

    if (!fileExists() || confirm) {
      copyConfigFile();
      this.log("File has been copied");
    }

    if (fileExists() && !confirm) {
      this.log("Canceled");
    }
  }
}

export = Tailconfig;
