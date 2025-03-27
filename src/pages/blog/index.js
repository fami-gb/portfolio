import '@/styles/globals.css';
import './index.css';
import { getAllBlogs } from '@/utils/blogs';
import Link from 'next/link';

export async function getStaticProps() {
  const blogs = getAllBlogs();

  return {
    props: {
      blogs
    }
  };
}

export default function Blog ({ blogs }) {
  return (
    <div className='blog-top'>
      <h1>ブログページへようこそ</h1>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.slug}>
            <Link href={`/blog/${blog.slug}`}>
              {blog.frontmatter.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
