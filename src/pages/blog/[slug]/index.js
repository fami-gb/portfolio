import '@/styles/globals.css';
import { getAllBlogs, getBlogBySlug } from '@/utils/blogs';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

export async function getStaticPaths() {
    const blogs = getAllBlogs();
    const paths = blogs.map((blog) => ({
        params: { slug: blog.slug }
    }));

    return {
        paths,
        fallback: false, // 必要に応じて true または 'blocking' に変更
    };
}

export async function getStaticProps({ params }) {
    const { content } = getBlogBySlug(params.slug);

    const processedContent = await remark()
        .use(gfm)
        .use(html)
        .process(content);

    return {
        props: {
            content: processedContent.toString(),
        },
    };
}

export default function BlogPage({ content }) {
    return (
        <div className='blog-content' style={{ margin: '5%' }}>
            <div dangerouslySetInnerHTML={{ __html: content }} />
        </div>
    );
}
