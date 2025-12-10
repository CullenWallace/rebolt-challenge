# Middle-earth Explorer

Welcome! Your quest is to build an interactive character explorer for the Lord of the Rings universe using [The One API](https://the-one-api.dev/).

## Getting Started

```bash
npm install
npm run dev
```

The app will be running at `http://localhost:5173`

## API Info

You'll be working with **The One API** - a Lord of the Rings database.

**Config:** The API base URL and key are in `src/lib/api.js`

```jsx
import { API_BASE, API_KEY } from './lib/api'

// example: fetching characters
const response = await fetch(`${API_BASE}/character`, {
  headers: { Authorization: `Bearer ${API_KEY}` }
})
const data = await response.json()
// data.docs contains the array of characters
```

**Useful endpoints:**
- `GET /character` - List all characters
- `GET /character/:id` - Get a single character
- `GET /character/:id/quote` - Get quotes for a character

> 💡 **Tip:** Mock data is available in `src/data/` if you want to start building components before wiring up API calls.

---

## The Challenge

Work through these stages in order. Don't worry if you don't finish everything - we want to see how you think and code, not race to the finish line.

---

### Stage 1: Character Card Component

**Goal:** Create a reusable `CharacterCard` component.

Create a component that displays a character's information in a visually appealing card. The card should show:
- Character name
- Race (Hobbit, Elf, Dwarf, Human, Maiar, etc.)
- Realm (where they're from)

Feel free to add any other details you think would be interesting!

**To get started:**
```jsx
import { mockCharacters } from './data/mock-characters'

// grab a character to test with
const frodo = mockCharacters[0]
```

**Things to consider:**
- How will you handle missing data? (not all characters have all fields)
- What makes a good visual hierarchy for the information?

---

### Stage 2: Character List

**Goal:** Display a grid/list of all characters.

Fetch characters from the API and display them using your `CharacterCard` component.

```
GET https://the-one-api.dev/v2/character
```

**Things to consider:**
- What should the user see while data is loading?
- What happens if the API request fails?
- The API returns 900+ characters - you might want to limit results (hint: `?limit=20`)

---

### Stage 3: Character Details

**Goal:** Let users click a character to see more details + their quotes.

When a user clicks on a character card, show an expanded view with:
- All available character info
- Their famous quotes from the movies

```
GET https://the-one-api.dev/v2/character/:id/quote
```

**Things to consider:**
- How do you track which character is selected?
- Where does the detail view appear? (modal, side panel, new section, etc.)
- Some characters have lots of quotes, some have none

---

### Stage 4: Search & Filter

**Goal:** Help users find characters quickly.

Add the ability to search/filter the character list. Ideas:
- Search by name
- Filter by race
- Or both!

**Things to consider:**
- Should filtering happen client-side or make a new API request?
- How do you keep the UI responsive while typing?

---

### Stage 5: Stretch Goals (if time permits)

Pick one or more if you're moving quickly:

- **Favorites:** Let users "favorite" characters and persist across page refreshes
- **Sort:** Add sorting options (alphabetical, by race, etc.)
- **Pagination:** Handle the full character list with pagination
- **Polish:** Animations, transitions, loading skeletons, empty states

---

## Resources

- **API config:** `src/lib/api.js` - base URL and API key
- **Tailwind CSS:** Already configured! Check `tailwind.config.js` for custom LOTR-themed colors
- **Class merging:** Use `cn()` from `src/lib/utils.js` to combine Tailwind classes cleanly
- **Mock data:** `src/data/mock-characters.js` and `src/data/mock-quotes.js`
- **API docs:** https://the-one-api.dev/documentation

## Tips

- Commit early and often - we love seeing your thought process
- It's okay to Google things!
- Ask questions if something is unclear
- Have fun with it 🧙‍♂️

---

*"Even the smallest person can change the course of the future." - Galadriel*

