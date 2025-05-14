// src/pages/blog/index.js

import Layout from "../../../components/Layout";

import Link from "next/link";
import { getPosts } from "../../lib/posts";  // Asegúrate de que getPosts esté correctamente definido

const Blog = ({ posts }) => (
  <Layout>
    <h1>Blog</h1>
    <div className="grid-container">
      {posts.map((post) => (
        <div key={post.slug} className="grid-item">
          <Link href={`/blog/${post.slug}`}>
            <div className="post-card">
              <h2>{post.title}</h2>
              <p>{post.excerpt || "Resumen del post..."}</p>
            </div>
          </Link>
        </div>
      ))}
    </div>
  </Layout>
);

export async function getStaticProps() {
  const posts = getPosts(); // Asegúrate de que esta función devuelve los posts correctamente
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
