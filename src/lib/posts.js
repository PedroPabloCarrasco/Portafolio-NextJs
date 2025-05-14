import fs from "fs";
import path from "path";

const postsDirectory = path.join(process.cwd(), "posts"); // Asegúrate de que la ruta sea correcta

export function getPosts() {
  const fileNames = fs.readdirSync(postsDirectory); // Obtén todos los nombres de los archivos en el directorio 'posts'
  const posts = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName); // Obtén la ruta completa del archivo
    const fileContents = fs.readFileSync(fullPath, "utf8"); // Lee el contenido del archivo

    // Aquí puedes extraer el 'title' de alguna manera. Suponiendo que sea el nombre del archivo:
    return {
      slug: fileName.replace(/\.md$/, ""), // Quita la extensión del archivo para obtener el slug
      title: fileContents.split("\n")[0], // Suponiendo que la primera línea es el título
    };
  });
  return posts;
}
