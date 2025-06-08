import { getAllPostsByCategory, getCategoryDisplayName } from '../../lib/mdx';
import BlogList from '../../components/BlogList';

export default function MoneyFinancePage() {
  const posts = getAllPostsByCategory('money-finance');
  const categoryName = getCategoryDisplayName('money-finance');

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-12">
          <h1 className="text-4xl font-bold" style={{color: '#002E22'}}>
            {categoryName}
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stay ahead with the latest financial trends, investment insights, and money management strategies.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <BlogList 
            posts={posts}
            title={posts.length > 0 ? "Latest Articles" : undefined}
          />
        </div>
      </div>
    </div>
  );
} 