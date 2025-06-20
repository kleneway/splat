import { Vignette } from "../types/game";

export const vignettes: Vignette[] = [
  {
    id: "fathers-guitar",
    title: "Father's Guitar",
    age: 8,
    setting:
      "Hallway at night, soft guitar music drifting from the living room",
    backgroundImage: "/image/fathers-guitar.png",
    backgroundAudio: "/audio/fathers-guitar.mp3",
    story: [
      {
        speaker: "Roy",
        text: "The floorboards creak under my bare feet as I creep toward the living room.",
      },
      {
        speaker: "Roy",
        text: "Through the crack in the door, I see him—Dad, sitting in his old recliner with the guitar across his lap.",
      },
      {
        speaker: "Roy",
        text: "His fingers move differently than they do when he's fixing the sink or signing insurance papers. They're... gentle. Almost like they're dancing.",
      },
      {
        speaker: "Roy",
        text: "The melody is sad and beautiful, like the sound loneliness would make if it could sing.",
      },
      {
        speaker: "Roy",
        text: "I've never seen his face look like this before. Peaceful, but also... hurt?",
      },
      {
        speaker: "Mom",
        text: "You still play beautifully, Frank.",
      },
      {
        speaker: "Roy",
        text: "Dad's fingers pause on the strings.",
      },
      {
        speaker: "Dad",
        text: "Sometimes I wonder what would've happened if I'd tried to make it with music instead of...",
      },
      {
        speaker: "Roy",
        text: "His voice trails off like smoke.",
      },
      {
        speaker: "Mom",
        text: "Instead of what?",
      },
      {
        speaker: "Roy",
        text: "But he just shakes his head and sets the guitar aside.",
      },
      {
        speaker: "Roy",
        text: "The silence that follows feels heavy, like it's full of all the words he didn't say.",
      },
      {
        speaker: "Roy",
        text: "I want to ask him to teach me. I want to tell him his music made something flutter in my chest like a bird trying to escape.",
      },
      {
        speaker: "Roy",
        text: "But I also want to run back to my room and pretend I never heard the sadness in his voice.",
      },
    ],
    choices: [
      {
        id: "ask-dad-teach",
        text: "Knock softly and ask him to teach me",
        description:
          "Risk interrupting their private moment to share in his music",
        effects: { desire: 1, integrity: 1 },
        memoryItem: "guitar-pick",
        type: "risky",
      },
      {
        id: "retreat-silently",
        text: "Slip back to bed and say nothing",
        description: "Keep their secret safe and preserve the mystery",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "tell-mum-tomorrow",
        text: "Tell Mom tomorrow what I heard",
        description: "Share the moment with someone who might understand",
        effects: { integrity: 1, fear: 1 },
        type: "dishonest",
      },
    ],
  },
  {
    id: "class-presentation",
    title: "Class Presentation",
    age: 12,
    setting:
      "School nurse's office, sounds of presentations echoing from down the hall",
    story: [
      {
        speaker: "Roy",
        text: "My stomach churns as I hear Julia's voice carrying down the hallway, confident and clear.",
      },
      {
        speaker: "Julia",
        text: "The blue whale's heart is so large that a small child could crawl through its arteries...",
      },
      {
        speaker: "Roy",
        text: "Mrs. Henderson bought my story about feeling sick. The nurse's office smells like antiseptic and lies.",
      },
      {
        speaker: "Roy",
        text: "Through the small window in the door, I can see Julia gesturing enthusiastically at her poster of marine life.",
      },
      {
        speaker: "Roy",
        text: "She's not afraid. She never seems afraid of anything—not speaking in front of people, not raising her hand when she doesn't know the answer, not being wrong.",
      },
      {
        speaker: "Roy",
        text: "My report on the solar system sits in my backpack, carefully researched and neatly written. I practiced it in the mirror last night.",
      },
      {
        speaker: "Roy",
        text: "But this morning, when Mrs. Henderson called my name, my throat closed up like someone was squeezing it.",
      },
      {
        speaker: "Nurse",
        text: "Feeling any better, Roy?",
      },
      {
        speaker: "Roy",
        text: "She's seen plenty of kids fake sick to avoid presentations.",
      },
      {
        speaker: "Mrs. Henderson",
        text: "Wonderful job, Julia. Roy, you're up next when you're feeling better.",
      },
      {
        speaker: "Roy",
        text: "My heart pounds. I could go back now. I could still give my presentation. Or I could stay here and let everyone think I'm really sick.",
      },
      {
        speaker: "Roy",
        text: "But Julia... Julia would know. She always knows.",
      },
    ],
    choices: [
      {
        id: "admit-lie",
        text: "Go back and confess I wasn't really sick",
        description: "Face the embarrassment and give my presentation",
        effects: { integrity: 1, desire: 1 },
        type: "risky",
      },
      {
        id: "stay-office",
        text: "Stay here until the presentations are over",
        description: "Maintain the lie and avoid the spotlight",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "return-quietly",
        text: "Sneak back and present without explanation",
        description: "Try to salvage the situation without admitting the lie",
        effects: { desire: 1, fear: 1 },
        memoryItem: "inhaler",
        type: "risky",
      },
    ],
  },
  {
    id: "graffiti",
    title: "The Wall",
    age: 15,
    setting:
      "Behind the school building, spray paint can cold in your trembling hand",
    story: [
      {
        speaker: "Roy",
        text: "The spray paint can feels heavier than it should in my sweaty palm.",
      },
      {
        speaker: "Danny",
        text: "Come on, Roy. Just do it already.",
      },
      {
        speaker: "Roy",
        text: "The brick wall behind the school is already decorated with tags and crude drawings. Adding mine won't make much difference, right?",
      },
      {
        speaker: "Roy",
        text: "But my hand shakes as I raise the can. This isn't me. I don't break rules. I don't vandalize property.",
      },
      {
        speaker: "Roy",
        text: "Except... maybe I want to be the kind of person who does. Maybe I'm tired of being the good kid, the safe kid, the boring kid.",
      },
      {
        speaker: "Roy",
        text: "Through the classroom window above us, I catch a glimpse of Julia at her desk, working on homework during lunch break.",
      },
      {
        speaker: "Roy",
        text: "She looks up at exactly the wrong moment, her eyes meeting mine through the glass.",
      },
      {
        speaker: "Roy",
        text: "Her expression shifts from surprise to disappointment, and something inside my chest crumples.",
      },
      {
        speaker: "Roy",
        text: "But Danny and the others are watching. Waiting. If I back down now, I'll never live it down.",
      },
      {
        speaker: "Roy",
        text: "I press the nozzle. The paint hisses out in an angry red arc, spelling 'ROY WAS HERE' in shaky letters.",
      },
      {
        speaker: "Roy",
        text: "The others cheer and add their own tags. We run before anyone catches us.",
      },
      {
        speaker: "Roy",
        text: "That night, I can't sleep. Julia's disappointed face haunts me.",
      },
      {
        speaker: "Roy",
        text: "At 2 AM, I sneak out of the house with a bottle of paint thinner and a scrub brush.",
      },
    ],
    choices: [
      {
        id: "confess-to-julia",
        text: "Tell Julia what I did and why I cleaned it",
        description:
          "Be honest about both the mistake and the attempt to fix it",
        effects: { integrity: 1, desire: 1 },
        type: "risky",
      },
      {
        id: "never-mention",
        text: "Never mention it to anyone",
        description: "Keep both the vandalism and the cleanup secret",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "blame-others",
        text: "Tell the principal it was Danny's idea",
        description: "Shift blame to avoid consequences",
        effects: { fear: 1, redLine: 1 },
        type: "dishonest",
      },
    ],
  },
  {
    id: "hidden-poems",
    title: "Words on Fire",
    age: 17,
    setting: "Your bedroom, notebook pages scattered around the bathroom sink",
    story: [
      {
        speaker: "Roy",
        text: "The notebook lies open on my desk, filled with three months of secret writing.",
      },
      {
        speaker: "Roy",
        text: "Poems about the way morning light looks different when you're sad. About the sound of my parents arguing through thin walls.",
      },
      {
        speaker: "Roy",
        text: "About Julia's laugh and how it makes me feel like I'm drowning and flying at the same time.",
      },
      {
        speaker: "Roy",
        text: "Yesterday, Julia found a torn page that had fallen from my backpack. She held it carefully, like it was made of butterfly wings.",
      },
      {
        speaker: "Julia",
        text: "Roy, did you write this?",
      },
      {
        speaker: "Roy",
        text: "Her voice was soft with something I couldn't identify. Wonder? Respect?",
      },
      {
        speaker: "Roy",
        text: "I snatched it back so fast I nearly tore it in half.",
      },
      {
        speaker: "Roy",
        text: "It's nothing. Just... stupid stuff.",
      },
      {
        speaker: "Roy",
        text: "But the way she looked at me... like she was seeing someone she'd never met before.",
      },
      {
        speaker: "Roy",
        text: "Now I stand in the bathroom, lighter in one hand, poems in the other.",
      },
      {
        speaker: "Roy",
        text: "These words are too honest. Too raw. Too much of me exposed on paper.",
      },
      {
        speaker: "Roy",
        text: "What if someone else finds them? What if my parents read about how I feel like a stranger in my own house?",
      },
      {
        speaker: "Roy",
        text: "What if Julia sees the poem about her eyes and realizes how pathetic I am?",
      },
      {
        speaker: "Roy",
        text: "The flame wavers in my hand, and I realize I'm crying.",
      },
    ],
    choices: [
      {
        id: "give-julia-poem",
        text: "Give Julia one of the poems tomorrow",
        description:
          "Share your most vulnerable self with someone who might understand",
        effects: { desire: 1, integrity: 1 },
        memoryItem: "poem-fragment",
        type: "risky",
      },
      {
        id: "burn-everything",
        text: "Burn all the poems and never write again",
        description: "Destroy the evidence of your inner life",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "hide-better",
        text: "Keep writing but hide them better",
        description: "Continue expressing yourself but more carefully",
        effects: { desire: 1, fear: 1 },
        type: "safe",
      },
    ],
  },
  {
    id: "the-protest",
    title: "Lines in the Sand",
    age: 20,
    setting:
      "Downtown square, the acrid smell of tear gas beginning to drift through the crowd",
    story: [
      {
        speaker: "Roy",
        text: "Julia's hand is warm in mine as we stand at the edge of the crowd, but I can feel her pulling away, drawn toward the center of the action.",
      },
      {
        speaker: "Roy",
        text: "The protest started peacefully. Students with handmade signs, chanting about environmental protection, about the chemical plant that's been poisoning the river.",
      },
      {
        speaker: "Roy",
        text: "Julia made her sign last night, carefully lettering 'CLEAN WATER = HUMAN RIGHT' in bold blue marker.",
      },
      {
        speaker: "Roy",
        text: "I didn't make a sign. I told myself I was just here to support her, but really, I wasn't sure I believed strongly enough in anything to put it on cardboard.",
      },
      {
        speaker: "Roy",
        text: "Now the police have arrived in riot gear, and the crowd's energy has shifted from hopeful to defiant.",
      },
      {
        speaker: "Julia",
        text: "This is it, Roy. This is how change happens. When people stand up and refuse to be ignored.",
      },
      {
        speaker: "Roy",
        text: "A canister clinks against the pavement twenty feet away, and white smoke begins to billow.",
      },
      {
        speaker: "Roy",
        text: "The crowd surges forward, and Julia moves with it, her hand slipping from mine.",
      },
      {
        speaker: "Roy",
        text: "She looks back at me, expectant. Trusting. Believing I'll follow her into whatever comes next.",
      },
      {
        speaker: "Roy",
        text: "My feet feel rooted to the concrete. Every instinct screams at me to run, to get away before things get worse.",
      },
      {
        speaker: "Roy",
        text: "But Julia... Julia is walking toward the smoke, toward the police line, toward something bigger than herself.",
      },
      {
        speaker: "Roy",
        text: "The tear gas is getting closer. People are coughing, covering their faces, but they're not backing down.",
      },
    ],
    choices: [
      {
        id: "stand-with-julia",
        text: "Follow Julia into the crowd",
        description: "Stand with her regardless of the consequences",
        effects: { desire: 1, integrity: 1 },
        type: "risky",
      },
      {
        id: "pull-julia-back",
        text: "Try to pull Julia away to safety",
        description: "Protect her from potential harm",
        effects: { fear: 1, integrity: 1 },
        type: "safe",
      },
      {
        id: "slip-away",
        text: "Disappear into the crowd behind us",
        description: "Avoid the confrontation entirely",
        effects: { fear: 1 },
        type: "safe",
      },
    ],
  },
  {
    id: "job-interview",
    title: "Two Doors",
    age: 24,
    setting:
      "Corporate office with floor-to-ceiling windows overlooking distant mountains",
    story: [
      {
        speaker: "Roy",
        text: "Two business cards sit on the mahogany table between me and my future.",
      },
      {
        speaker: "Mr. Sullivan",
        text: "Steady work, Roy. Good benefits. You'd start as a claims adjuster, work your way up. Thirty years from now, you could have my job.",
      },
      {
        speaker: "Roy",
        text: "The second card belongs to Sarah Chen from Wanderlust Travel Insurance. Her eyes sparkle with the kind of energy that suggests she's seen the world and wants to show it to everyone else.",
      },
      {
        speaker: "Sarah",
        text: "We're a startup. Risky, sure. But we insure adventure travelers, extreme sports enthusiasts, people who refuse to live small lives.",
      },
      {
        speaker: "Sarah",
        text: "You'd be traveling constantly—assessing claims in Nepal, investigating incidents in Patagonia, learning about cultures most people only see in magazines.",
      },
      {
        speaker: "Roy",
        text: "Through the window, I can see the mountains in the distance, purple and mysterious against the afternoon sky.",
      },
      {
        speaker: "Roy",
        text: "I think about my father, who chose steady work over music. About the guitar that still sits in our living room, gathering dust.",
      },
      {
        speaker: "Sarah",
        text: "The travel position would mean being away from home a lot. It's not for everyone. But for the right person, it's not just a job—it's a life.",
      },
      {
        speaker: "Mr. Sullivan",
        text: "That's the thing about adventure, son. It sounds exciting when you're young, but what happens when you want to settle down? Start a family? You can't build a life on uncertainty.",
      },
      {
        speaker: "Roy",
        text: "Both of them are right, in their own ways.",
      },
      {
        speaker: "Roy",
        text: "I think about Julia, who's been talking about traveling after graduation. About seeing the world before we get too comfortable, too settled, too afraid.",
      },
    ],
    choices: [
      {
        id: "choose-adventure",
        text: "Accept Sarah's offer",
        description: "Choose uncertainty and adventure over security",
        effects: { desire: 1 },
        type: "risky",
      },
      {
        id: "choose-security",
        text: "Accept Mr. Sullivan's offer",
        description: "Choose the safe, predictable path",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "ask-for-time",
        text: "Ask for a week to decide",
        description: "Buy time to think through this life-changing decision",
        effects: { integrity: 1 },
        type: "safe",
      },
    ],
  },
  {
    id: "julias-ultimatum",
    title: "The Kitchen Table Conversation",
    age: 27,
    setting:
      "Kitchen table at dawn, coffee growing cold between trembling hands",
    story: [
      {
        speaker: "Roy",
        text: "Julia's hands shake slightly as she wraps them around her coffee mug, and I realize this conversation has been building for months.",
      },
      {
        speaker: "Roy",
        text: "The job applications are spread across our kitchen table like tarot cards predicting our future. San Francisco. Seattle. Denver.",
      },
      {
        speaker: "Julia",
        text: "Roy, I need us to leave. Not someday. Not when we're ready. Now.",
      },
      {
        speaker: "Roy",
        text: "The morning light streaming through our kitchen window catches the tears she's trying not to shed.",
      },
      {
        speaker: "Julia",
        text: "I got the job offer from Denver. The environmental law firm. It's everything I've worked for, Roy. Real cases, real impact. A chance to actually make a difference instead of just... existing.",
      },
      {
        speaker: "Roy",
        text: "The words hang between you like a challenge. You know this moment has been coming for months - the late-night conversations about feeling trapped, the wistful way she stares at travel magazines, the increasing silences that stretch between you like unbridgeable chasms.",
      },
      {
        speaker: "Julia",
        text: "I wake up every morning and look out at the same view, drive the same route to work, have the same conversations with the same people. I'm disappearing, Roy. I can feel myself getting smaller every day.",
      },
      {
        speaker: "Roy",
        text: "I want to tell her she's not disappearing. I want to say that our life here is good, stable, safe.",
      },
      {
        speaker: "Roy",
        text: "But the truth is, I've been watching her fade too. The Julia who used to talk about changing the world now files reports about water quality and goes to bed at nine.",
      },
      {
        speaker: "Roy",
        text: "What about your job? What about the house? What about—",
      },
      {
        speaker: "Julia",
        text: "What about our dreams? Remember when we used to talk about seeing the Northern Lights? About hiking in the Rockies? About living somewhere we chose instead of somewhere we just... ended up?",
      },
      {
        speaker: "Julia",
        text: "I've already applied to three of these. I have phone interviews next week.",
      },
      {
        speaker: "Roy",
        text: "The betrayal hits me like cold water. She's been planning this without me.",
      },
      {
        speaker: "Roy",
        text: "You applied without talking to me first?",
      },
      {
        speaker: "Julia",
        text: "I'm talking to you now. I'm asking you to come with me. But Roy... I'm going either way.",
      },
    ],
    choices: [
      {
        id: "support-enthusiastically",
        text: "Tell her yes, let's do this together",
        description: "Embrace the change and support her dreams",
        effects: { desire: 1, integrity: 1 },
        requirements: { desire: 2 },
        type: "risky",
      },
      {
        id: "sabotage-quietly",
        text: "Agree but secretly undermine the applications",
        description: "Promise support while working against her plans",
        effects: { fear: 1, redLine: 1 },
        type: "dishonest",
      },
      {
        id: "confess-fear",
        text: "Admit that leaving terrifies me",
        description: "Be honest about your fears and limitations",
        effects: { integrity: 1, fear: 1 },
        type: "risky",
      },
    ],
  },
];
