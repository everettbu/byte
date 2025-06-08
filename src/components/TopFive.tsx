import React from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const topPosts = [
  {
    id: 1,
    title: "AI Revenue Streams: 7 Ways Creators Are Making $10K+ Monthly",
    category: "Money & Finance",
    excerpt: "Discover how content creators are leveraging AI tools to build sustainable income streams and scale their businesses beyond traditional methods.",
    readTime: "5 min read",
    trend: "🔥 Trending",
    link: "/money-finance",
    featured: true
  },
  {
    id: 2,
    title: "The Growth Marketing Stack That Scaled 3 Startups to $1M ARR",
    category: "Marketing & Growth",
    excerpt: "Inside look at the exact tools, processes, and strategies used by successful founders to achieve rapid, sustainable growth.",
    readTime: "7 min read",
    trend: "📈 Growth",
    link: "/marketing-growth"
  },
  {
    id: 3,
    title: "Claude 3.5 vs GPT-4: The Ultimate Productivity Comparison",
    category: "Tools & Tech",
    excerpt: "We tested both AI models across 50 real-world tasks. Here&apos;s which one actually saves you more time and money.",
    readTime: "6 min read",
    trend: "⚡ Hot Take",
    link: "/tools-tech"
  },
  {
    id: 4,
    title: "Why Remote Work is Dead (And What&apos;s Replacing It)",
    category: "Trends & News",
    excerpt: "The surprising shift happening in 2024 that&apos;s changing how companies think about flexibility, productivity, and culture.",
    readTime: "4 min read",
    trend: "🚨 Breaking",
    link: "/trends-news"
  },
  {
    id: 5,
    title: "The $100B Mistake: Why Most SaaS Startups Fail at Pricing",
    category: "Money & Finance",
    excerpt: "Analysis of 200+ failed startups reveals the pricing psychology that separates winners from losers in the SaaS game.",
    readTime: "8 min read",
    trend: "💡 Insight",
    link: "/money-finance"
  }
];

const featuredPost = topPosts.find(post => post.featured);
const otherPosts = topPosts.filter(post => !post.featured);

export default function TopFive() {
  return (
    <section className="pt-12 pb-20 px-4">
      <div className="container mx-auto">
        {/* Subtle separator */}
        <div className="w-24 h-px bg-border mx-auto mb-12"></div>
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">This Week&apos;s Top 5</h2>
          <p className="text-lg text-muted-foreground">
            The most impactful insights our community is talking about
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <Link href={featuredPost.link} className="group block mb-12">
              <Card className="p-8 hover:bg-card/80 transition-all duration-200 hover:border-secondary">
                <CardHeader className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/20 flex items-center justify-center">
                      <span className="text-3xl font-bold" style={{color: '#002E22'}}>
                        1
                      </span>
                    </div>
                    <div className="flex items-center gap-3 text-sm">
                      <Badge variant="secondary" className="font-medium">
                        {featuredPost.category}
                      </Badge>
                      <Badge variant="outline" className="text-foreground font-medium">
                        {featuredPost.trend}
                      </Badge>
                      <span className="text-muted-foreground">
                        {featuredPost.readTime}
                      </span>
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-4 group-hover:opacity-80 transition-opacity" style={{color: '#002E22'}}>
                    {featuredPost.title}
                  </h3>
                </CardHeader>
                
                <CardContent className="p-0">
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {featuredPost.excerpt}
                  </p>
                </CardContent>
              </Card>
            </Link>
          )}

          {/* Other Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {otherPosts.map((post, index) => (
              <Link key={post.id} href={post.link} className="group block">
                <Card className="hover:bg-card/80 transition-all duration-200 hover:border-secondary">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center">
                          <span className="text-lg font-bold" style={{color: '#002E22'}}>
                            {index + 2}
                          </span>
                        </div>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        <div className="flex items-center gap-2 text-xs flex-wrap">
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                          <Badge variant="outline" className="text-xs text-foreground font-medium">
                            {post.trend}
                          </Badge>
                          <span className="text-muted-foreground">
                            {post.readTime}
                          </span>
                        </div>
                        
                        <h3 className="text-lg font-semibold group-hover:opacity-80 transition-opacity" style={{color: '#002E22'}}>
                          {post.title}
                        </h3>
                        
                        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                          {post.excerpt}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 