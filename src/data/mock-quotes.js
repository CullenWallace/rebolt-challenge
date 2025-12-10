/**
 * mock quotes data from the one api
 * keyed by character id for easy lookup
 * 
 * data shape matches: https://the-one-api.dev/documentation#6
 */
export const mockQuotesByCharacter = {
  // frodo
  '5cd99d4bde30eff6ebccfbbe': [
    {
      _id: '5cd96e05de30eff6ebcce7e9',
      dialog: 'I will take the Ring, though I do not know the way.',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfbbe',
    },
    {
      _id: '5cd96e05de30eff6ebcce84c',
      dialog: "I wish the Ring had never come to me. I wish none of this had happened.",
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfbbe',
    },
    {
      _id: '5cd96e05de30eff6ebcce9a2',
      dialog: "It's a pity Bilbo didn't kill him when he had the chance.",
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfbbe',
    },
  ],
  // gandalf
  '5cd99d4bde30eff6ebccfc15': [
    {
      _id: '5cd96e05de30eff6ebcce7ec',
      dialog: 'A wizard is never late, Frodo Baggins. Nor is he early. He arrives precisely when he means to.',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc15',
    },
    {
      _id: '5cd96e05de30eff6ebcce88d',
      dialog: 'You shall not pass!',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc15',
    },
    {
      _id: '5cd96e05de30eff6ebcce8a1',
      dialog: 'All we have to decide is what to do with the time that is given us.',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc15',
    },
    {
      _id: '5cd96e05de30eff6ebcce8b2',
      dialog: 'Fly, you fools!',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc15',
    },
  ],
  // aragorn
  '5cd99d4bde30eff6ebccfbe6': [
    {
      _id: '5cd96e05de30eff6ebcce9f1',
      dialog: 'I am Aragorn son of Arathorn, and am called Elessar, the Elfstone, Dunadan, the heir of Isildur Elendil\'s son of Gondor.',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfbe6',
    },
    {
      _id: '5cd96e05de30eff6ebcceb71',
      dialog: 'For Frodo.',
      movie: '5cd95395de30eff6ebccde5b',
      character: '5cd99d4bde30eff6ebccfbe6',
    },
    {
      _id: '5cd96e05de30eff6ebccea12',
      dialog: "My friends, you bow to no one.",
      movie: '5cd95395de30eff6ebccde5b',
      character: '5cd99d4bde30eff6ebccfbe6',
    },
  ],
  // legolas
  '5cd99d4bde30eff6ebccfc57': [
    {
      _id: '5cd96e05de30eff6ebcce9c1',
      dialog: 'They\'re taking the Hobbits to Isengard!',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc57',
    },
    {
      _id: '5cd96e05de30eff6ebcceb33',
      dialog: 'A red sun rises. Blood has been spilled this night.',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc57',
    },
  ],
  // gimli
  '5cd99d4bde30eff6ebccfc38': [
    {
      _id: '5cd96e05de30eff6ebcce8f2',
      dialog: 'And my axe!',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc38',
    },
    {
      _id: '5cd96e05de30eff6ebccea88',
      dialog: 'Nobody tosses a Dwarf!',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc38',
    },
    {
      _id: '5cd96e05de30eff6ebcceab1',
      dialog: 'Certainty of death. Small chance of success. What are we waiting for?',
      movie: '5cd95395de30eff6ebccde5b',
      character: '5cd99d4bde30eff6ebccfc38',
    },
  ],
  // samwise
  '5cd99d4bde30eff6ebccfc07': [
    {
      _id: '5cd96e05de30eff6ebcceba2',
      dialog: "I can't carry it for you, but I can carry you!",
      movie: '5cd95395de30eff6ebccde5b',
      character: '5cd99d4bde30eff6ebccfc07',
    },
    {
      _id: '5cd96e05de30eff6ebccebb1',
      dialog: "There's some good in this world, Mr. Frodo, and it's worth fighting for.",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc07',
    },
    {
      _id: '5cd96e05de30eff6ebccebc2',
      dialog: "Po-ta-toes! Boil 'em, mash 'em, stick 'em in a stew.",
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc07',
    },
  ],
  // gollum
  '5cd99d4bde30eff6ebccfc3d': [
    {
      _id: '5cd96e05de30eff6ebccec11',
      dialog: 'My precious...',
      movie: '5cd95395de30eff6ebccde5d',
      character: '5cd99d4bde30eff6ebccfc3d',
    },
    {
      _id: '5cd96e05de30eff6ebccec22',
      dialog: 'What has it got in its pocketses?',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfc3d',
    },
  ],
  // boromir
  '5cd99d4bde30eff6ebccfcc8': [
    {
      _id: '5cd96e05de30eff6ebcce8d1',
      dialog: 'One does not simply walk into Mordor.',
      movie: '5cd95395de30eff6ebccde5c',
      character: '5cd99d4bde30eff6ebccfcc8',
    },
  ],
}

