import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "posts");

/*  fs, dosya sisteminden dosyaları okumanıza izin veren Node.js bir modüldür.

    path, dosya yollarını değiştirmenize izin veren Node.js bir modüldür.

    matter, her Markdown dosyasındaki meta verileri ayrıştırmanıza izin veren bir kitaplıktır.

    Next.js'te, lib klasörünün pages klasörü gibi atanmış bir adı yoktur, bu nedenle 
    ona herhangi bir ad verebilirsiniz. lib veya utils.*/

export function getSortedPostsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}
