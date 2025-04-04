import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const blogsDir = path.join(process.cwd(), 'src/contents', 'blogs');

export function getAllBlogs() {
    const paths = fs.readdirSync(blogsDir);
    const posts = paths.map((p) => {
        const file = fs.readFileSync(path.join(blogsDir, p));
        const parsed = matter(file);
        return {
            ...parsed.data,
        };
    });
    return posts;
}

export function getBlogBySlug(slug) {
    const filepath = path.join(blogsDir, `${slug}.md`);
    const fileContents = fs.readFileSync(filepath);
    const { metadata, content } = matter(fileContents);
    return {
        metadata,
        content
    };
}
