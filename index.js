import { engine } from "unified-engine";
import { remark } from "remark";

// Ensure the completer runs once per file-set.
completer.pluginId = "some-plugin-id";

engine(
  {
    processor: remark(),
    plugins: [plugin],
    files: ["readme.md"],
  },
  done
);

function done(error) {
  if (error) throw error;
}

function plugin(processor, options, set) {
  set.use(completer);
  set.add("history.md");
}

function completer(set) {
  console.log("done:", set.valueOf().map(path));
}

function path(file) {
  return file.path;
}
