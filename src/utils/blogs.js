import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const MarkDownDir = path.join(process.cwd(), 'src', 'contents', 'blogs');

export function getAllBlogs() {
    const fileNames = fs.readdirSync(MarkDownDir);

    return fileNames.map((fileName) => {
        const filePath = path.join(MarkDownDir, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data } = matter(fileContents);

        return {
            slug: fileName.replace('.md', ''),
            frontmatter: data
        };
    }).sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date));
}

export function getBlogBySlug(slug) {
    const filePath = path.join(MarkDownDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        frontmatter: data,
        content
    };
}
