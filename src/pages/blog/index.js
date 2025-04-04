import '@/styles/globals.css';
import './index.css';
import { getAllBlogs } from '@/utils/blogs';
import Link from 'next/link';
import Image from 'next/image';

export async function getStaticProps() {
  const blogs = getAllBlogs();
  return {
    props: {
      blogs,
    },
  };
}

export default function Blog ({ blogs }) {
  return (
    <div className='blog-top'>
      <ul className='blog-container'>
        {blogs.map((blog) => (
          <li key={blog.slug} className='blog-content'>
            <div className='blog-box'>
              <Link href={`/blog/${blog.slug}`}>
                <Image
                  src={`/images/${blog.thumbnail}`}
                  alt={blog.title}
                  width={100}
                  height={60}
                  layout='responsive'
                  className='blog-image'
                />
                <div className='blog-details'>
                  <p className='blog-date'>{blog.date}</p>
                  <p className='blog-title'>{blog.title}</p>
                  <p className='blog-description'>{blog.description}</p>
                </div>
              </Link>
              <ul className='blog-tags-container'>
                {blog.tags.length > 0 && (
                  <li className='blog-tags-box'>
                    {blog.tags.map((tag, index) => (
                      <Link href='' key={index} className='blog-tag'>{tag}</Link>
                    ))}
                  </li>
                )}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
