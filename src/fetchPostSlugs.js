import fs from "fs";
import path from "path";

export const fetchPostSlugs = () =>
  fs.promises.readdir(path.join(process.cwd(), "content/posts"));
