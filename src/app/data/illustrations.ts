/**
 * Illustration archive for the Graphic Design & Illustration page.
 *
 * Source art lives outside the repo; the files in public/assets/illustrations
 * are 1500px WebP derivatives. Vercel's image optimizer serves resized
 * AVIF/WebP variants of these at request time.
 *
 * To add a piece: drop the WebP in public/assets/illustrations and add an
 * entry below. Order within a category is the order it appears on the page.
 */

export type IllustrationCategory =
  | 'nola'
  | 'ink'
  | 'character'
  | 'creature'
  | 'surreal'
  | 'spot'

export type Illustration = {
  slug: string
  title: string
  alt: string
  category: IllustrationCategory
  /** Optional override for a piece that ships elsewhere in public/assets. */
  src?: string
  /** Intrinsic size of the image, used to reserve layout space. */
  w: number
  h: number
}

export const categories: { id: IllustrationCategory; label: string }[] = [
  { id: 'nola', label: 'Nola' },
  { id: 'ink', label: 'Ink & Line' },
  { id: 'character', label: 'Character' },
  { id: 'creature', label: 'Creature' },
  { id: 'surreal', label: 'Surreal' },
  { id: 'spot', label: 'Spot' },
]

export const illustrations: Illustration[] = [
  { slug: 'nola-cheek-to-cheek', title: 'Cheek to Cheek', alt: 'Cartoon illustration of Nola the black rabbit dancing with another rabbit', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-ember', title: 'Ember', alt: 'Cartoon illustration of Nola the black rabbit holding a glowing ember by moonlight', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-best-bow', title: 'Best Bow', alt: 'Cartoon illustration of Nola the black rabbit sitting with a bow', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-all-ears', title: 'All Ears', alt: 'Cartoon illustration of Nola the black rabbit standing with her ears up', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-crowned', title: 'Crowned', alt: 'Cartoon illustration of Nola the black rabbit lying down wearing a crown', category: 'nola', w: 1080, h: 1350 },
  { slug: 'nola-mistaken-identity', title: 'Mistaken Identity', alt: 'Cartoon illustration of Nola the black rabbit wearing antlers beside a fawn', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-introductions', title: 'Introductions', alt: 'Cartoon illustration of Nola the black rabbit meeting a hedgehog', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-toadstool', title: 'Toadstool', alt: 'Cartoon illustration of Nola the black rabbit wearing a mushroom cap', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-blessed-are-the-forgetful', title: 'Blessed Are the Forgetful', alt: 'Cartoon illustration of two rabbits with the caption Blessed are the forgetful, for they get the better even of their blunders', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-the-whole-patch', title: 'The Whole Patch', alt: 'Cartoon illustration of Nola the black rabbit full of carrots', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-kickflip', title: 'Kickflip', alt: 'Cartoon illustration of Nola the black rabbit on a skateboard', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-bloomrest', title: 'Bloomrest', alt: 'Cartoon illustration of Nola the black rabbit resting on a flower', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-little-elephant', title: 'Little Elephant', alt: 'Cartoon illustration of a small elephant in the Nola series style', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-at-the-loom', title: 'At the Loom', alt: 'Cartoon illustration of Nola the black rabbit weaving at a loom', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-music-box', title: 'Music Box', alt: 'Cartoon illustration of Nola the black rabbit dancing in a music box', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-on-the-run', title: 'On the Run', alt: 'Cartoon illustration of Nola the black rabbit running at speed', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-pond', title: 'Pond', alt: 'Cartoon illustration of Nola the black rabbit wading in a pond among cattails', category: 'nola', w: 1080, h: 1380 },
  { slug: 'nola-first-snow', title: 'First Snow', alt: 'Cartoon illustration of Nola the black rabbit catching the first snowflake', category: 'nola', w: 1080, h: 1380 },
  { slug: 'ink-leap', title: 'Leap', alt: 'Black ink illustration of a wolf mid-leap', category: 'ink', w: 1500, h: 985 },
  { slug: 'ink-nightcap', title: 'Nightcap', alt: 'Ink drawing of a wolf holding a martini glass', category: 'ink', w: 985, h: 1500 },
  { slug: 'ink-last-call', title: 'Last Call', alt: 'Ink drawing of a wolf raising a beer stein', category: 'ink', w: 985, h: 1500 },
  { slug: 'ink-slow-simmer', title: 'Slow Simmer', alt: 'Ink drawing of a wolf stirring a stockpot', category: 'ink', w: 985, h: 1500 },
  { slug: 'ink-table-manners', title: 'Table Manners', alt: 'Ink drawing of a wolf eating from a bowl', category: 'ink', w: 985, h: 1500 },
  { slug: 'ink-harvest', title: 'Harvest', alt: 'Ink drawing of a fox in overalls holding a pitchfork', category: 'ink', w: 985, h: 1500 },
  { slug: 'ink-tangle', title: 'Tangle', alt: 'Ink drawing of two black cats curled around each other', category: 'ink', w: 985, h: 1500 },
  { slug: 'whatever-you-want-i', title: 'Whatever You Want I', alt: 'Pop-art illustration of a man reclining on a beach towel', category: 'character', w: 1500, h: 1500 },
  { slug: 'bloom-heart', title: 'Bloom Heart', alt: 'Illustration of a girl holding a flowering heart', category: 'character', w: 1200, h: 1500 },
  { slug: 'headphones', title: 'Headphones', alt: 'Illustration of a girl listening to music with her eyes closed', category: 'character', w: 1200, h: 1500 },
  { slug: 'martini-hour', title: 'Martini Hour', alt: 'Illustration of a woman in a white robe holding a cocktail', category: 'character', w: 1200, h: 1500 },
  { slug: 'goldfinger', title: 'Goldfinger', alt: 'Illustration of a figure with golden light pouring from his hand', category: 'character', w: 1200, h: 1500 },
  { slug: 'shoulder-ride', title: 'Shoulder Ride', alt: 'Illustration of two friends in sunglasses at the shore', category: 'character', w: 1500, h: 1499 },
  { slug: 'bedtime', title: 'Bedtime', alt: 'Illustration of two babies in pajamas', category: 'character', w: 1500, h: 1496 },
  { slug: 'automaton', title: 'Automaton', alt: 'Retro illustration of a robot woman with a mouse', category: 'character', w: 1500, h: 1500 },
  { slug: 'devil-and-bunny', title: 'Devil & Bunny', alt: 'Ink and colour illustration of a pin-up devil with a plush rabbit', category: 'character', w: 1000, h: 1500 },
  { slug: 'duet', title: 'Duet', alt: 'Black and white illustration of a musician couple', category: 'character', w: 1080, h: 1380 },
  { slug: 'cornsilk', title: 'Cornsilk', alt: 'Illustration of a red-haired woman in a corn field', category: 'character', w: 1500, h: 1500 },
  { slug: 'sick-day', title: 'Sick Day', alt: 'Illustration of a woman in bed with a dachshund', category: 'character', w: 1500, h: 1500 },
  { slug: 'meteor', title: 'Meteor', alt: 'Illustration of a couple watching a meteor from the moon', category: 'character', w: 1200, h: 1500 },
  { slug: 'heart-in-hand', title: 'Heart in Hand', alt: 'Illustration of a woman holding a glowing anatomical heart', category: 'character', w: 1500, h: 1500 },
  { slug: 'disco-ball', title: 'Disco Ball', alt: 'Illustration of a singer holding a mirrorball microphone', category: 'character', w: 1159, h: 1500 },
  { slug: 'widow', title: 'Widow', alt: 'Illustration of a pin-up in a black gown with spiders', category: 'character', w: 1500, h: 1500 },
  { slug: 'jungle-leopard', title: 'Jungle Leopard', alt: 'Illustration of a leopard-print figure among tropical plants', category: 'character', w: 1080, h: 1380 },
  { slug: 'pair', title: 'Pair', alt: 'Illustration of a couple in vintage dress', category: 'character', w: 1200, h: 1500 },
  { slug: 'tree-sitter', title: 'Tree Sitter', alt: 'Illustration of a woman sitting in a tree with an owl', category: 'character', w: 1000, h: 1500 },
  { slug: 'sweethearts', title: 'Sweethearts', alt: 'Illustration of a couple dancing', category: 'character', w: 1159, h: 1500 },
  { slug: 'foxtail', title: 'Foxtail', alt: 'Illustration of a pin-up with a fox stole', category: 'character', w: 1500, h: 1500 },
  { slug: 'rosebed', title: 'Rosebed', alt: 'Illustration of a woman sleeping among roses', category: 'character', w: 1500, h: 1500 },
  { slug: 'boo', title: 'Boo!', alt: 'Pop-art illustration of a woman mid-gasp', category: 'character', w: 1500, h: 1500 },
  { slug: 'comfort-dog', title: 'Comfort Dog', alt: 'Illustration of a crying woman holding a small dog', category: 'character', w: 1500, h: 1500 },
  { slug: 'undressed', title: 'Undressed', alt: 'Illustration of legs and a corset on an unmade bed', category: 'character', w: 1500, h: 1500 },
  { slug: 'bloom', title: 'Bloom', alt: 'Illustration of a figure emerging from a flower', category: 'character', w: 1500, h: 1500 },
  { slug: 'calavera', title: 'Calavera', alt: 'Illustration of a sugar-skull woman with roses', category: 'character', w: 1500, h: 1500 },
  { slug: 'green-hair', title: 'Green Hair', alt: 'Illustration of a reclining woman with green hair and a rose', category: 'character', w: 985, h: 1500 },
  { slug: 'whatever-you-want-ii', title: 'Whatever You Want II', alt: 'Pop-art illustration of a pin-up on a beach towel', category: 'character', w: 1500, h: 1500 },
  { slug: 'campsite', title: 'Campsite', alt: 'Illustration of tents and a rabbit at a lantern-lit campsite', category: 'creature', w: 1500, h: 1500 },
  { slug: 'couch-dogs', title: 'Couch Dogs', alt: 'Illustration of two dogs sharing a sofa', category: 'creature', w: 1159, h: 1500 },
  { slug: 'lap-dog', title: 'Lap Dog', alt: 'Illustration of a white dog on a blue cushion', category: 'creature', w: 1371, h: 1500 },
  { slug: 'lantern-cricket', title: 'Lantern Cricket', alt: 'Illustration of a grasshopper with a lantern inside a rose', category: 'creature', w: 1500, h: 1500 },
  { slug: 'moonhound', title: 'Moonhound', alt: 'Illustration of a violet wolf head above a small rabbit', category: 'creature', w: 1500, h: 1500 },
  { slug: 'reflection', title: 'Reflection', alt: 'Illustration of a rhino seeing a pink version of itself in a mirror', category: 'creature', w: 1500, h: 1500 },
  { slug: 'pink-leopard', title: 'Pink Leopard', alt: 'Illustration of a spotted pink cat in the undergrowth', category: 'creature', w: 1500, h: 1500 },
  { slug: 'wildcat', title: 'Wildcat', alt: 'Illustration of a leopard face wearing headphones', category: 'creature', w: 1322, h: 1500 },
  { slug: 'fox-and-ice-cream', title: 'Fox & Ice Cream', alt: 'Illustration of a fox holding an ice cream cone', category: 'creature', w: 1500, h: 1500 },
  { slug: 'inner-landscape', title: 'Inner Landscape', alt: 'Illustration of a running fox with a forest inside its body', category: 'creature', w: 1500, h: 1500 },
  { slug: 'falcon', title: 'Falcon', alt: 'Illustration of a perched bird of prey', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-eggs', title: 'Frog Cycle — Eggs', alt: 'Illustration of frog spawn', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-tadpole', title: 'Frog Cycle — Tadpole', alt: 'Illustration of a tadpole', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-catch', title: 'Frog Cycle — Catch', alt: 'Illustration of a frog catching a fly', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-backflip', title: 'Frog Cycle — Backflip', alt: 'Illustration of a green frog mid-tumble', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-reach', title: 'Frog Cycle — Reach', alt: 'Illustration of a frog reaching upward', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-stretch', title: 'Frog Cycle — Stretch', alt: 'Illustration of a frog stretching out', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-sit', title: 'Frog Cycle — Sit', alt: 'Illustration of a frog sitting upright', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-portrait', title: 'Frog Cycle — Portrait', alt: 'Front-facing illustration of a green frog', category: 'creature', w: 1500, h: 1500 },
  { slug: 'frog-cycle-full-grown', title: 'Frog Cycle — Full Grown', alt: 'Illustration of a large adult frog', category: 'creature', w: 1500, h: 1500 },
  { slug: 'bonewalker', title: 'Bonewalker', alt: 'Illustration of a skeletal wolf under a violet sky', category: 'surreal', w: 1080, h: 1380 },
  { slug: 'snifter', title: 'Snifter', alt: 'Illustration of a goldfish and octopus inside a brandy glass', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'squid-and-wine', title: 'Squid & Wine', alt: 'Illustration of a pink squid coiled around a wine glass', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'rust-robot', title: 'Rust Robot', alt: 'Illustration of a jointed robot on a yellow ground', category: 'surreal', w: 1308, h: 1500 },
  { slug: 'ghost-walk', title: 'Ghost Walk', alt: 'Illustration of a sheeted ghost hiking a mountain trail', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'rusty-spoons', title: 'Rusty Spoons', alt: 'Illustration of a green figure holding a spoon', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'firefly-fairy', title: 'Firefly Fairy', alt: 'Illustration of a fairy under a full moon', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'fairy-and-fawn', title: 'Fairy & Fawn', alt: 'Illustration of a fairy lighting the way for a deer', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'sunset-ghost', title: 'Sunset Ghost', alt: 'Illustration of a woman walking beside a ghost', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'deep-space-octopus', title: 'Deep Space Octopus', alt: 'Illustration of an octopus in an astronaut helmet', category: 'surreal', w: 1080, h: 1380 },
  { slug: 'diver', title: 'Diver', alt: 'Illustration of a deep-sea diver riding a fish', category: 'surreal', w: 1080, h: 1380 },
  { slug: 'bathtub-mermaid', title: 'Bathtub Mermaid', alt: 'Illustration of a mermaid in a clawfoot tub', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'serpentine', title: 'Serpentine', alt: 'Illustration of a coiled sea creature', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'red-thread', title: 'Red Thread', alt: 'Illustration of a bat and a goth figure joined by a red thread', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'tentacle-veil', title: 'Tentacle Veil', alt: 'Illustration of a woman with an octopus across her face', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'shell-garden', title: 'Shell Garden', alt: 'Illustration of a miniature reef inside an oyster shell', category: 'surreal', w: 1500, h: 985 },
  { slug: 'teacup-mermaid', title: 'Teacup Mermaid', alt: 'Illustration of a mermaid bathing in a teacup', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'shrimp-bed', title: 'Shrimp Bed', alt: 'Illustration of a mermaid curled inside a shrimp', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'sardine-tin', title: 'Sardine Tin', alt: 'Illustration of mermaids packed into a sardine tin', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'winged', title: 'Winged', alt: 'Illustration of a figure wrapped in a great wing', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'coupe-mermaid', title: 'Coupe Mermaid', alt: 'Illustration of a mermaid in a cocktail glass', category: 'surreal', w: 1000, h: 1500 },
  { slug: 'peach', title: 'Peach', alt: 'Illustration of a peach wearing high heels', category: 'surreal', w: 480, h: 780 },
  { slug: 'trick-or-treat', title: 'Trick or Treat', alt: 'Illustration of a ghost with a balloon and bats', category: 'surreal', w: 1500, h: 1500 },
  { slug: 'bee-and-fairy', title: 'Bee & Fairy', alt: 'Illustration of a firefly fairy meeting a bee', category: 'surreal', w: 1024, h: 1024 },
  { slug: 'hamfaced', title: 'Hamfaced', alt: 'Spot illustration of a ham hock with hand lettering', category: 'spot', w: 1500, h: 1500 },
  { slug: 'lets-drive-far-away', title: 'Let\'s Drive Far Away', alt: 'Illustration of a vintage red car with hand lettering', category: 'spot', w: 1500, h: 1500 },
  { slug: 'trombone-bouquet', title: 'Trombone Bouquet', alt: 'Illustration of a trombone spilling flowers', category: 'spot', w: 985, h: 1500 },
  { slug: 'leaf-flourish-i', title: 'Leaf Flourish I', alt: 'Black ink botanical flourish', category: 'spot', w: 1500, h: 985 },
  { slug: 'ribbon-bloom', title: 'Ribbon Bloom', alt: 'Black ink flourish with a red bloom', category: 'spot', w: 1500, h: 985 },
  { slug: 'leaf-flourish-ii', title: 'Leaf Flourish II', alt: 'Black ink botanical flourish', category: 'spot', w: 1500, h: 985 },
  { slug: 'leaf-flourish-iii', title: 'Leaf Flourish III', alt: 'Black ink botanical flourish', category: 'spot', w: 1500, h: 985 },
  { slug: 'strawberry', title: 'Strawberry', alt: 'Spot illustration of a halved strawberry', category: 'spot', w: 1500, h: 985 },
  { slug: 'cherries', title: 'Cherries', alt: 'Spot illustration of a pair of cherries', category: 'spot', w: 1500, h: 985 },
  { slug: 'grapefruit', title: 'Grapefruit', alt: 'Spot illustration of cut grapefruit', category: 'spot', w: 1500, h: 985 },
  { slug: 'banana', title: 'Banana', alt: 'Spot illustration of a banana', category: 'spot', w: 1500, h: 985 },
  { slug: 'lily-flourish', title: 'Lily Flourish', alt: 'Botanical flourish with a yellow lily', category: 'spot', w: 1500, h: 985 },
  { slug: 'orchids', title: 'Orchids', alt: 'Spot illustration of pink and yellow orchids', category: 'spot', w: 1500, h: 1500 },
  { slug: 'chilies', title: 'Chilies', alt: 'Spot illustration of red chili peppers', category: 'spot', w: 1500, h: 1500 },
  { slug: 'chilies-flamed-ii', title: 'Chilies, Flamed', alt: 'Spot illustration of chili peppers with flames', category: 'spot', w: 1500, h: 1500 },
  { slug: 'secret-squirrel', title: 'Secret Squirrel', alt: 'Poster illustration of a rabbit for Secret Squirrel', category: 'character', w: 1500, h: 1500 },
]

export const illustrationCount = illustrations.length
