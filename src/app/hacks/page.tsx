'use client'

import { useState } from 'react'

interface Hack {
  id: number
  title: string
  description: string
  difficulty: 'easy' | 'medium' | 'advanced'
  category: string
}

export default function HacksPage() {
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all')
  const [selectedCategory, setSelectedCategory] = useState<string>('all')

  const hacks: Hack[] = [
    {
      id: 1,
      title: 'Quick Phone Charging',
      description: 'Enable airplane mode while charging your phone to charge it significantly faster.',
      difficulty: 'easy',
      category: 'tech'
    },
    {
      id: 2,
      title: 'Gmail Dot Trick',
      description: 'Gmail ignores dots in email addresses. example.email@gmail.com is the same as exampleemail@gmail.com.',
      difficulty: 'medium',
      category: 'tech'
    },
    {
      id: 3,
      title: 'Windows Screenshot',
      description: 'Press Windows + Shift + S to take a quick screenshot of any area on your screen.',
      difficulty: 'easy',
      category: 'productivity'
    },
    {
      id: 4,
      title: 'Browser Task Manager',
      description: 'Use Shift + Esc in Chrome to open browser task manager and find memory-heavy tabs.',
      difficulty: 'advanced',
      category: 'tech'
    }
  ]

  const difficulties = ['all', 'easy', 'medium', 'advanced']
  const categories = ['all', 'tech', 'productivity']

  const filteredHacks = hacks.filter(hack => {
    const matchesDifficulty = selectedDifficulty === 'all' || hack.difficulty === selectedDifficulty
    const matchesCategory = selectedCategory === 'all' || hack.category === selectedCategory
    return matchesDifficulty && matchesCategory
  })

  return (
    <main className="min-h-screen p-8 bg-background">
      <h1 className="text-4xl font-bold mb-8 text-foreground">Life Hacks</h1>
      
      <div className="mb-6 space-y-4">
        <div>
          <h3 className="text-lg font-medium mb-2 text-foreground">Difficulty</h3>
          <div className="flex gap-4">
            {difficulties.map(difficulty => (
              <button
                key={difficulty}
                onClick={() => setSelectedDifficulty(difficulty)}
                className={`px-4 py-2 rounded-lg ${
                  selectedDifficulty === difficulty
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                }`}
              >
                {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium mb-2 text-foreground">Category</h3>
          <div className="flex gap-4">
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-lg ${
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
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredHacks.map(hack => (
          <div
            key={hack.id}
            className="bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border border-border"
          >
            <h2 className="text-xl font-semibold mb-2 text-card-foreground">{hack.title}</h2>
            <p className="text-muted-foreground mb-4">{hack.description}</p>
            <div className="flex gap-2">
              <span className={`inline-block px-3 py-1 rounded-full text-sm ${
                hack.difficulty === 'easy' ? 'bg-green-900/50 text-green-200' :
                hack.difficulty === 'medium' ? 'bg-yellow-900/50 text-yellow-200' :
                'bg-red-900/50 text-red-200'
              }`}>
                {hack.difficulty}
              </span>
              <span className="inline-block px-3 py-1 bg-secondary rounded-full text-sm text-secondary-foreground">
                {hack.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
