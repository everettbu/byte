import React from 'react';
import { BlogPost } from '../lib/mdx';
import BlogCard from './BlogCard';

interface BlogListProps {
  posts: BlogPost[];
  title?: string;
  subtitle?: string;
}

export default function BlogList({ posts, title, subtitle }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-semibold mb-2" style={{color: '#002E22'}}>
          No posts yet
        </h3>
        <p className="text-muted-foreground">
          Check back soon for new content in this category.
        </p>
      </div>
    );
  }

  return (
    <section className="py-12">
      {(title || subtitle) && (
        <div className="text-center mb-12">
          {title && (
            <h2 className="text-4xl font-bold mb-4" style={{color: '#002E22'}}>
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>
      )}
      
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <BlogCard key={`${post.category}-${post.slug}`} post={post} />
        ))}
      </div>
    </section>
  );
} 