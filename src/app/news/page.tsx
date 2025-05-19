'use client'

import { useState } from 'react'

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  category: string
  source: string
  image: string
}

export default function NewsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const news: NewsItem[] = [
    {
      id: 1,
      title: 'New AI Model Breaks Performance Records',
      content: 'A revolutionary AI model has achieved unprecedented performance in natural language processing tasks, marking a significant breakthrough in the field.',
      date: '2024-03-20',
      category: 'technology',
      source: 'Tech Daily',
      image: 'https://source.unsplash.com/800x600/?artificial-intelligence'
    },
    {
      id: 2,
      title: 'Sustainable Energy Milestone Reached',
      content: 'Renewable energy sources now account for over 40% of global power generation, marking a historic milestone in the fight against climate change.',
      date: '2024-03-19',
      category: 'environment',
      source: 'Green Report',
      image: 'https://source.unsplash.com/800x600/?renewable-energy'
    },
    {
      id: 3,
      title: 'Major Cybersecurity Framework Update',
      content: 'Industry leaders announce a comprehensive update to cybersecurity standards, introducing new protocols for enhanced digital protection.',
      date: '2024-03-18',
      category: 'security',
      source: 'Security Weekly',
      image: 'https://source.unsplash.com/800x600/?cybersecurity'
    },
    {
      id: 4,
      title: 'Breakthrough in Quantum Computing',
      content: 'Scientists achieve quantum supremacy in a new experiment, solving complex calculations in record time.',
      date: '2024-03-17',
      category: 'technology',
      source: 'Science Today',
      image: 'https://source.unsplash.com/800x600/?quantum-computing'
    }
  ]

  const categories = ['all', 'technology', 'environment', 'security']

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen p-8 bg-background">
      <div className="container mx-auto">
        <h1 className="text-center text-5xl font-bold mb-12">Tech News</h1>

        <div className="mb-10 flex flex-wrap justify-center gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/70'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredNews.map(item => (
            <article
              key={item.id}
              className="bg-card border border-border rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow"
            >
              <img
                src={item.image}
                alt=""
                className="h-40 w-full object-cover"
              />
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start">
                  <h2 className="text-xl font-semibold">{item.title}</h2>
                  <span className="text-sm text-muted-foreground">{item.source}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.content}</p>
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>
                    {new Date(item.date).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </span>
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      item.category === 'technology'
                        ? 'bg-blue-100 text-blue-700'
                        : item.category === 'environment'
                        ? 'bg-green-100 text-green-700'
                        : 'bg-orange-100 text-orange-700'
                    }`}
                  >
                    {item.category}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  )
}
