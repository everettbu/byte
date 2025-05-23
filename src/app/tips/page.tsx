'use client'

import { useState } from 'react'

interface Tip {
  id: number
  title: string
  description: string
  category: string
}

export default function TipsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const tips: Tip[] = [
    {
      id: 1,
      title: 'Keyboard Shortcuts',
      description: 'Use Ctrl + C for copy and Ctrl + V for paste to speed up your workflow.',
      category: 'productivity'
    },
    {
      id: 2,
      title: 'Stay Hydrated',
      description: 'Remember to drink water regularly throughout the day for better focus.',
      category: 'health'
    },
    {
      id: 3,
      title: 'Regular Breaks',
      description: 'Take a 5-minute break every hour to reduce eye strain and maintain productivity.',
      category: 'health'
    },
    {
      id: 4,
      title: 'Password Manager',
      description: 'Use a password manager to securely store and generate strong passwords.',
      category: 'security'
    }
  ]

  const categories = ['all', 'productivity', 'health', 'security']

  const filteredTips = selectedCategory === 'all' 
    ? tips 
    : tips.filter(tip => tip.category === selectedCategory)

  return (
    <main className="min-h-screen p-8 bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Daily Tips</h1>
      
      <div className="mb-6">
        <div className="flex gap-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTips.map(tip => (
          <div
            key={tip.id}
            className="bg-card p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-border"
          >
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">{tip.title}</h2>
            <p className="text-muted-foreground">{tip.description}</p>
            <span className="inline-block mt-4 px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
              {tip.category}
            </span>
          </div>
        ))}
      </div>
    </main>
  )
}
