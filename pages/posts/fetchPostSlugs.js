import fs from "fs"
import path from "path"

export default () => fs.promises.readdir(path.join(process.cwd(), "content/posts"))
