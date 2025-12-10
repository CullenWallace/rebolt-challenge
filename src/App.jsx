/**
 * middle-earth explorer
 *
 * your task is to build an interactive character explorer for lord of the rings!
 * see README.md for the full challenge instructions.
 *
 * you have access to:
 * - mock data in src/data/ (for offline development)
 * - a cn() utility in src/lib/utils.js for composing tailwind classes
 * - tailwind css with a lotr-inspired color palette (see tailwind.config.js)
 *
 * good luck, and may your code be as steadfast as samwise gamgee!
 */

function App() {
  return (
    <div className="min-h-screen bg-gondor-900 text-gondor-50">
      <header className="border-b border-gondor-800 bg-gondor-900/80 backdrop-blur-sm">
        <div className="mx-auto max-w-6xl px-4 py-6">
          <h1 className="text-3xl font-bold text-gold-400">
            Middle-earth Explorer
          </h1>
          <p className="mt-1 text-gondor-200">
            A journey through the characters of Tolkien's world
          </p>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-8">
        {/* 
          stage 1: start here!
          
          create a CharacterCard component and render it below.
          check out the mock data in src/data/mock-characters.js for the data shape.
          
          hint: you can import a single character to start:
          import { mockCharacters } from './data/mock-characters'
          const frodo = mockCharacters[0]
        */}
        
        <div className="rounded-lg border border-dashed border-gondor-600 p-12 text-center">
          <p className="text-gondor-400">
            Your adventure begins here...
          </p>
          <p className="mt-2 text-sm text-gondor-600">
            Check the README.md for your first task!
          </p>
        </div>
      </main>
    </div>
  )
}

export default App

