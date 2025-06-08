import { notFound } from 'next/navigation';
import Image from 'next/image';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getPostBySlug, getAllPostsByCategory } from '../../../lib/mdx';

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPostsByCategory('trends-news');
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function TrendsNewsPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug('trends-news', slug);

  if (!post) {
    notFound();
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <article className="max-w-4xl mx-auto">
          {/* Header */}
          <header className="mb-8">
            {post.frontmatter.image && (
              <div className="mb-8 rounded-lg overflow-hidden">
                <Image 
                  src={post.frontmatter.image} 
                  alt={post.frontmatter.title}
                  width={800}
                  height={400}
                  className="w-full h-64 md:h-96 object-cover"
                />
              </div>
            )}
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight" style={{color: '#002E22'}}>
                {post.frontmatter.title}
              </h1>
              
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
              
              {post.frontmatter.tags && (
                <div className="flex flex-wrap gap-2 pt-4">
                  {post.frontmatter.tags.split(',').map((tag, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-secondary/20 text-secondary"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </header>
          
          {/* Content */}
          <div className="prose prose-lg max-w-none">
            <ReactMarkdown 
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({children}) => <h1 style={{color: '#002E22'}} className="text-3xl font-bold mb-4">{children}</h1>,
                h2: ({children}) => <h2 style={{color: '#002E22'}} className="text-2xl font-bold mb-3 mt-8">{children}</h2>,
                h3: ({children}) => <h3 style={{color: '#002E22'}} className="text-xl font-bold mb-2 mt-6">{children}</h3>,
                strong: ({children}) => <strong style={{color: '#002E22'}}>{children}</strong>,
                a: ({href, children}) => <a href={href} style={{color: '#6B8F7F'}} className="hover:text-[#002E22] transition-colors">{children}</a>,
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </article>
      </div>
    </div>
  );
} 