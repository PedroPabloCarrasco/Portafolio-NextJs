import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts");

export function getPosts() {
  if (!fs.existsSync(postsDirectory)) {
    return []; // o podrías lanzar un error personalizado si prefieres
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    return {
      fileName,
      content: fileContents,
    };
  });

  return posts;
}
