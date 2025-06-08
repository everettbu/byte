import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '../lib/mdx';

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <Link href={`/${post.category}/${post.slug}`} className="group block">
      <article className="p-6 border border-border rounded-lg bg-card hover:bg-card/80 transition-all duration-200 hover:border-secondary">
        {post.frontmatter.image && (
          <div className="mb-4 overflow-hidden rounded-lg">
            <Image 
              src={post.frontmatter.image} 
              alt={post.frontmatter.title}
              width={400}
              height={200}
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
            />
          </div>
        )}
        
        <div className="space-y-3">
          <div className="flex items-center gap-3 text-sm text-muted-foreground">
            <span>{formatDate(post.frontmatter.publishedAt)}</span>
            <span>•</span>
            <span>{post.readingTime}</span>
            {post.frontmatter.author && (
              <>
                <span>•</span>
                <span>{post.frontmatter.author}</span>
              </>
            )}
          </div>
          
          <h3 className="text-xl font-bold group-hover:opacity-80 transition-opacity" style={{color: '#002E22'}}>
            {post.frontmatter.title}
          </h3>
          
          <p className="text-muted-foreground leading-relaxed">
            {post.frontmatter.summary}
          </p>
          
          {post.frontmatter.tags && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.frontmatter.tags.split(',').map((tag, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 text-xs rounded-full bg-secondary/20 text-secondary"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
} 