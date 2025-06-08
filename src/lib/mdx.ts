import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import readingTime from 'reading-time';

export interface BlogPost {
  slug: string;
  category: string;
  frontmatter: {
    title: string;
    publishedAt: string;
    author: string;
    image: string;
    summary: string;
    keywords: string;
    tags: string;
    metaTitle: string;
    metaDescription: string;
    canonicalUrl: string;
  };
  content: string;
  readingTime: string;
}

const CONTENT_DIR = path.join(process.cwd(), 'content');

export function getAllPostsByCategory(category: string): BlogPost[] {
  const categoryDir = path.join(CONTENT_DIR, category);
  
  if (!fs.existsSync(categoryDir)) {
    return [];
  }

  const files = fs.readdirSync(categoryDir).filter(file => file.endsWith('.mdx'));
  
  const posts = files.map(file => {
    const slug = file.replace('.mdx', '');
    const filePath = path.join(categoryDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    const readingTimeResult = readingTime(content);

    return {
      slug,
      category,
      frontmatter: frontmatter as BlogPost['frontmatter'],
      content,
      readingTime: readingTimeResult.text,
    };
  });

  // Sort by publishedAt date (newest first)
  return posts.sort((a, b) => 
    new Date(b.frontmatter.publishedAt).getTime() - 
    new Date(a.frontmatter.publishedAt).getTime()
  );
}

export function getPostBySlug(category: string, slug: string): BlogPost | null {
  try {
    const filePath = path.join(CONTENT_DIR, category, `${slug}.mdx`);
    
    if (!fs.existsSync(filePath)) {
      return null;
    }

    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data: frontmatter, content } = matter(fileContent);
    const readingTimeResult = readingTime(content);

    return {
      slug,
      category,
      frontmatter: frontmatter as BlogPost['frontmatter'],
      content,
      readingTime: readingTimeResult.text,
    };
  } catch (error) {
    console.error(`Error reading post ${slug} in category ${category}:`, error);
    return null;
  }
}

export function getAllPosts(): BlogPost[] {
  const categories = ['money-finance', 'marketing-growth', 'tools-tech', 'trends-news'];
  const allPosts: BlogPost[] = [];

  categories.forEach(category => {
    const posts = getAllPostsByCategory(category);
    allPosts.push(...posts);
  });

  // Sort all posts by publishedAt date (newest first)
  return allPosts.sort((a, b) => 
    new Date(b.frontmatter.publishedAt).getTime() - 
    new Date(a.frontmatter.publishedAt).getTime()
  );
}

export function getCategoryDisplayName(category: string): string {
  const categoryMap: Record<string, string> = {
    'money-finance': 'Money & Finance',
    'marketing-growth': 'Marketing & Growth',
    'tools-tech': 'Tools & Tech',
    'trends-news': 'Trends & News',
  };
  
  return categoryMap[category] || category;
} 