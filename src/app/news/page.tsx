'use client'

import { useState } from 'react'

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  category: string
  source: string
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
      source: 'Tech Daily'
    },
    {
      id: 2,
      title: 'Sustainable Energy Milestone Reached',
      content: 'Renewable energy sources now account for over 40% of global power generation, marking a historic milestone in the fight against climate change.',
      date: '2024-03-19',
      category: 'environment',
      source: 'Green Report'
    },
    {
      id: 3,
      title: 'Major Cybersecurity Framework Update',
      content: 'Industry leaders announce a comprehensive update to cybersecurity standards, introducing new protocols for enhanced digital protection.',
      date: '2024-03-18',
      category: 'security',
      source: 'Security Weekly'
    },
    {
      id: 4,
      title: 'Breakthrough in Quantum Computing',
      content: 'Scientists achieve quantum supremacy in a new experiment, solving complex calculations in record time.',
      date: '2024-03-17',
      category: 'technology',
      source: 'Science Today'
    }
  ]

  const categories = ['all', 'technology', 'environment', 'security']

  const filteredNews = selectedCategory === 'all'
    ? news
    : news.filter(item => item.category === selectedCategory)

  return (
    <main className="min-h-screen p-8 bg-slate-50">
      <h1 className="text-4xl font-bold mb-8">Latest News</h1>

      <div className="mb-8">
        <div className="flex gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-lg transition-colors ${
                selectedCategory === category
                  ? 'bg-indigo-600 text-white'
                  : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        {filteredNews.map(item => (
          <article
            key={item.id}
            className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow border border-gray-100"
          >
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-semibold text-gray-900">{item.title}</h2>
              <div className="flex items-center gap-2">
                <span className="text-sm text-gray-500">{item.source}</span>
                <span className={`px-3 py-1 rounded-full text-sm ${
                  item.category === 'technology' ? 'bg-blue-100 text-blue-700' :
                  item.category === 'environment' ? 'bg-green-100 text-green-700' :
                  'bg-orange-100 text-orange-700'
                }`}>
                  {item.category}
                </span>
              </div>
            </div>
            <p className="text-gray-600 mb-4">{item.content}</p>
            <div className="text-sm text-gray-500">
              Published: {new Date(item.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
