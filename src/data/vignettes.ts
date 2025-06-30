import { Vignette } from "../types/game";

export const vignettes: Vignette[] = [
  {
    id: "fathers-guitar",
    title: "Father's Guitar",
    age: 8,
    setting:
      "Hallway at night, soft guitar music drifting from the living room",
    backgroundImage: "/image/bg-0.png",
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
    backgroundImage: "/image/bg-1.png",
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
    backgroundImage: "/image/bg-2.png",
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
    backgroundImage: "/image/bg-3.png",
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
    backgroundImage: "/image/bg-4.png",
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
    backgroundImage: "/image/bg-5.png",
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
    backgroundImage: "/image/bg-6.png",
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
  {
    id: "sons-dreams",
    title: "Rocket Ships and Reality",
    age: 32,
    setting: "Ethan's bedroom, walls covered with space posters and model rockets",
    backgroundImage: "/image/bg-7.png",
    story: [
      {
        speaker: "Roy",
        text: "Ethan's bedroom is a seven-year-old's vision of infinity. Model rockets perched on every surface, glow-in-the-dark stars mapped across the ceiling.",
      },
      {
        speaker: "Ethan",
        text: "Dad, look! I drew our family on Mars!",
      },
      {
        speaker: "Roy",
        text: "He bounces on his bed, pointing to a crayon drawing spread across his desk. Red scribbled landscape, stick figures with bulbous helmet heads.",
      },
      {
        speaker: "Roy",
        text: "There's even a dog wearing a tiny astronaut suit. My heart clenches at the hope radiating from every crooked line.",
      },
      {
        speaker: "Ethan",
        text: "Mrs. Patterson said we're gonna learn about the solar system next week. She said some kids might even get to go to space camp this summer!",
      },
      {
        speaker: "Roy",
        text: "He looks at me with such complete trust, such absolute certainty that the universe will bend to accommodate his dreams.",
      },
      {
        speaker: "Roy",
        text: "Behind him, his bookshelf sags under astronomy books, science fiction novels, and a battered copy of 'The Right Stuff' that he checks out every month.",
      },
      {
        speaker: "Roy",
        text: "I think of my father's guitar gathering dust in the closet. Of all the dreams that wither when they meet the sharp edges of reality.",
      },
      {
        speaker: "Ethan",
        text: "Dad, do you think I could really be an astronaut someday?",
      },
      {
        speaker: "Roy",
        text: "His eyes are so bright, so full of possibility. I remember having dreams like that once.",
      },
      {
        speaker: "Roy",
        text: "I remember believing the world was waiting for me to discover it.",
      },
      {
        speaker: "Roy",
        text: "Space camp costs eight hundred dollars. We don't have eight hundred dollars for dreams.",
      },
      {
        speaker: "Roy",
        text: "But looking at his face... maybe we should find a way.",
      },
    ],
    choices: [
      {
        id: "encourage-boldly",
        text: "Tell him absolutely, and promise to look into space camp",
        description: "Support his dreams despite the financial strain",
        effects: { desire: 1, integrity: 1 },
        type: "risky",
      },
      {
        id: "be-practical",
        text: "Gently suggest he should consider more practical careers",
        description: "Protect him from potential disappointment",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "lie-about-past",
        text: "Tell him Dad almost became an astronaut once",
        description: "Inspire him with a fictional version of your own dreams",
        effects: { redLine: 1, desire: 1 },
        type: "dishonest",
      },
    ],
  },
  {
    id: "promotion-declined",
    title: "The Corner Office",
    age: 38,
    setting: "Mr. Hartley's office overlooking downtown, manila folder on the desk",
    backgroundImage: "/image/bg-8.png",
    story: [
      {
        speaker: "Roy",
        text: "Mr. Hartley's corner office overlooks downtown Topeka like a throne room surveying a modest kingdom.",
      },
      {
        speaker: "Mr. Hartley",
        text: "Roy, in fifteen years, you've never submitted a claim I've had to overturn. You're methodical, trustworthy.",
      },
      {
        speaker: "Roy",
        text: "He slides a manila folder across his mahogany desk. Inside, I glimpse letterhead from the Kansas City regional office.",
      },
      {
        speaker: "Mr. Hartley",
        text: "Regional Manager. Salary increase of forty percent, full relocation package. You'd be overseeing seven branch offices across Missouri and eastern Kansas.",
      },
      {
        speaker: "Roy",
        text: "My fingers trace the edge of the folder. Inside are photos of a suburban house with a three-car garage, information about schools for Ethan.",
      },
      {
        speaker: "Roy",
        text: "But with the offer comes the weight of change—new faces, new challenges, the terrifying possibility of failure.",
      },
      {
        speaker: "Mr. Hartley",
        text: "It's the opportunity I never got at your age, Roy.",
      },
      {
        speaker: "Roy",
        text: "Through the window, I can see the highway that leads everywhere I've never been.",
      },
      {
        speaker: "Roy",
        text: "I think about Ethan, who still talks about space camp. About Julia, who's been mentioning how stagnant everything feels.",
      },
      {
        speaker: "Roy",
        text: "This could change everything. Or it could be the biggest mistake of my life.",
      },
      {
        speaker: "Roy",
        text: "What if I'm not good enough? What if fifteen years of small-town competence isn't enough for the big leagues?",
      },
      {
        speaker: "Mr. Hartley",
        text: "Take your time thinking it over. But Roy... opportunities like this don't come around often.",
      },
    ],
    choices: [
      {
        id: "accept-promotion",
        text: "Accept the promotion and the move to Kansas City",
        description: "Take the leap into a bigger, scarier world",
        effects: { desire: 1 },
        requirements: { desire: 3 },
        type: "risky",
      },
      {
        id: "decline-honestly",
        text: "Politely decline, citing family stability concerns",
        description: "Choose the safety of the known over the unknown",
        effects: { integrity: 1, fear: 1 },
        type: "safe",
      },
      {
        id: "lie-about-hr",
        text: "Later tell Julia that HR blocked the promotion",
        description: "Avoid the decision by creating a false narrative",
        effects: { redLine: 1, fear: 1 },
        type: "dishonest",
      },
    ],
  },
  {
    id: "broken-vase",
    title: "Shattered Things",
    age: 43,
    setting: "Living room, blue and white pottery fragments scattered on hardwood",
    backgroundImage: "/image/bg-9.png",
    story: [
      {
        speaker: "Roy",
        text: "The vase shatters against the hardwood floor with a sound like Julia's heart breaking—sharp, final, irreversible.",
      },
      {
        speaker: "Roy",
        text: "Pieces of her grandmother's pottery scatter across the living room, blue and white fragments that catch the lamplight like tears.",
      },
      {
        speaker: "Roy",
        text: "The argument started over something trivial—my reluctance to attend the Hartwell's anniversary party.",
      },
      {
        speaker: "Roy",
        text: "But somewhere between my muttered complaints and Julia's frustrated sighs, it became about everything else.",
      },
      {
        speaker: "Julia",
        text: "Roy, sometimes I feel like I'm married to a ghost. You're here, but you're not really here.",
      },
      {
        speaker: "Julia",
        text: "When did you stop wanting things?",
      },
      {
        speaker: "Roy",
        text: "My hand had swept toward her in emphasis, catching the vase—the one that survived the Depression, two world wars, and five moves.",
      },
      {
        speaker: "Roy",
        text: "Only to become collateral damage in our living room on a Tuesday night.",
      },
      {
        speaker: "Roy",
        text: "Now Julia kneels among the pieces, not crying, not speaking. Just carefully collecting shards.",
      },
      {
        speaker: "Roy",
        text: "Her wedding ring clicks against the ceramic fragments, a small sound that somehow contains the weight of seventeen years.",
      },
      {
        speaker: "Roy",
        text: "I stand frozen in the doorway, watching my wife gather the remnants of something irreplaceable.",
      },
      {
        speaker: "Roy",
        text: "The silence stretches between us like an accusation.",
      },
    ],
    choices: [
      {
        id: "apologize-instantly",
        text: "Drop to my knees and help her, apologizing profusely",
        description: "Take responsibility and try to help fix what's broken",
        effects: { integrity: 1 },
        type: "safe",
      },
      {
        id: "blame-shelf",
        text: "Defensively blame the cheap shelf for being unstable",
        description: "Deflect responsibility to avoid confronting the real issue",
        effects: { redLine: 1, fear: 1 },
        type: "dishonest",
      },
      {
        id: "stand-mute",
        text: "Stand silently, unable to find words",
        description: "Freeze in the face of emotional crisis",
        effects: { fear: 1 },
        type: "safe",
      },
    ],
  },
  {
    id: "midnight-conversation",
    title: "The Space Between Sleep",
    age: 47,
    setting: "Kitchen at 2 AM, streetlight filtering through gauze curtains",
    backgroundImage: "/image/bg-10.png",
    story: [
      {
        speaker: "Roy",
        text: "The kitchen exists in that liminal space between night and morning, illuminated only by the microwave clock and streetlight.",
      },
      {
        speaker: "Roy",
        text: "Julia sits at the small table in her faded flannel robe, hands wrapped around a mug of tea that's long since gone cold.",
      },
      {
        speaker: "Roy",
        text: "I've found her here more and more lately—sleepless, staring out the window at the neighbor's house where the Thompsons used to live.",
      },
      {
        speaker: "Roy",
        text: "Before they retired to Florida. Before they decided to finally live instead of merely existing.",
      },
      {
        speaker: "Julia",
        text: "I had that dream again. The one where I'm driving west on Highway 70, just driving until the road runs out.",
      },
      {
        speaker: "Roy",
        text: "Her voice is soft, almost conversational, as if she's discussing the weather rather than the slow dissolution of our shared life.",
      },
      {
        speaker: "Roy",
        text: "I pour myself a glass of water, the ice cubes cracking in the silence.",
      },
      {
        speaker: "Julia",
        text: "Sometimes I wake up and for just a moment, I can't remember why we stayed.",
      },
      {
        speaker: "Julia",
        text: "Why we're still here in this house, in this town, living the same day over and over.",
      },
      {
        speaker: "Roy",
        text: "She finally turns to look at me, and in the dim light, I can see the girl who once talked about changing the world.",
      },
      {
        speaker: "Roy",
        text: "But her eyes now hold the particular sadness of someone who has learned to make peace with disappointment.",
      },
      {
        speaker: "Julia",
        text: "Are you happy, Roy? Really happy?",
      },
    ],
    choices: [
      {
        id: "admit-dissatisfaction",
        text: "Admit that I feel trapped and unsatisfied too",
        description: "Share the truth about your own unhappiness",
        effects: { desire: 1, integrity: 1 },
        type: "risky",
      },
      {
        id: "change-topic",
        text: "Suggest we should get some sleep instead",
        description: "Avoid the difficult conversation",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "lie-happy",
        text: "Tell her I'm perfectly happy with our life",
        description: "Maintain the illusion that everything is fine",
        effects: { redLine: 1, fear: 1 },
        type: "dishonest",
      },
    ],
  },
  {
    id: "friends-funeral",
    title: "The Life Unlived",
    age: 50,
    setting: "Funeral home, burgundy carpet and the smell of lilies and regret",
    backgroundImage: "/image/bg-11.png",
    story: [
      {
        speaker: "Roy",
        text: "The funeral home smells of lilies and regret, its burgundy carpet and mahogany fixtures designed to muffle both sound and sorrow.",
      },
      {
        speaker: "Roy",
        text: "I sit in the third row, close enough to see the casket but far enough to avoid the raw grief of Mike's family.",
      },
      {
        speaker: "Roy",
        text: "The eulogies paint a picture of a life I barely recognize, though I've known Mike Garrett since high school.",
      },
      {
        speaker: "Mike's Brother",
        text: "Mike used to say that most people die at twenty-five and aren't buried until seventy. He refused to be one of them.",
      },
      {
        speaker: "Roy",
        text: "I shift uncomfortably, thinking of my own carefully curated existence—the same route to work for fifteen years.",
      },
      {
        speaker: "Roy",
        text: "Mike always invited me to join his excursions, and I always found perfectly reasonable excuses to decline.",
      },
      {
        speaker: "Roy",
        text: "The service concludes with a slide show of Mike's adventures: scuba diving in Belize, hiking the Appalachian Trail.",
      },
      {
        speaker: "Roy",
        text: "Each image is a reminder of paths not taken, of the word 'someday' that has become my most spoken lie.",
      },
      {
        speaker: "Roy",
        text: "As the crowd files past the casket, I notice a small display table with Mike's personal effects.",
      },
      {
        speaker: "Roy",
        text: "Including a worn airline ticket stub from his last trip to Alaska, just three months ago.",
      },
      {
        speaker: "Roy",
        text: "Fifty years old and still collecting adventures while I collected insurance premiums.",
      },
      {
        speaker: "Roy",
        text: "The ticket stub sits there like an accusation. Like a challenge.",
      },
    ],
    choices: [
      {
        id: "share-memory",
        text: "Stand up and share a memory of Mike's adventurous spirit",
        description: "Honor his memory by speaking publicly about his courage",
        effects: { integrity: 1 },
        type: "risky",
      },
      {
        id: "leave-early",
        text: "Quietly slip out before the reception",
        description: "Avoid the social interaction and emotional weight",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "pocket-ticket",
        text: "Discreetly pocket Mike's plane ticket stub",
        description: "Take a piece of his adventurous spirit with you",
        effects: { desire: 1 },
        memoryItem: "plane-ticket",
        type: "risky",
      },
    ],
  },
  {
    id: "insurance-claim",
    title: "The Hendricks File",
    age: 53,
    setting: "Your office desk, manila file open with devastating photographs",
    backgroundImage: "/image/bg-12.png",
    story: [
      {
        speaker: "Roy",
        text: "The Hendricks file sits open on my desk like an accusation, its contents feeling heavier today than usual.",
      },
      {
        speaker: "Roy",
        text: "Maria Hendricks, thirty-four, single mother of two. House fire caused by faulty wiring that the landlord refused to fix.",
      },
      {
        speaker: "Roy",
        text: "The photographs are devastating—melted toys in what used to be a child's bedroom, a kitchen reduced to charcoal and ash.",
      },
      {
        speaker: "Roy",
        text: "But it's the handwritten letter paperclipped to the front that makes my stomach clench.",
      },
      {
        speaker: "Maria (letter)",
        text: "Mr. Thompson, I know the policy language is complicated, but please understand—we have nothing left.",
      },
      {
        speaker: "Maria (letter)",
        text: "The kids are staying with my sister, sleeping on the floor. I've been working two jobs to keep up with premiums.",
      },
      {
        speaker: "Roy",
        text: "My computer screen shows the claim analysis: DENY - Policy Section 4.3.2, inadequate documentation of electrical issues.",
      },
      {
        speaker: "Roy",
        text: "It's technically correct—she can't prove she complained about the wiring beforehand.",
      },
      {
        speaker: "Roy",
        text: "But I've driven past her burned-out duplex. I've seen how those landlords operate in the lower-income neighborhoods.",
      },
      {
        speaker: "Roy",
        text: "The denial letter template is already loaded. One click sends it to the printer.",
      },
      {
        speaker: "Roy",
        text: "Through my office window, I can see my own comfortable neighborhood, where electrical problems get fixed promptly.",
      },
      {
        speaker: "Roy",
        text: "Where insurance is just another bill, not a prayer.",
      },
    ],
    choices: [
      {
        id: "reverse-decision",
        text: "Reverse the denial and approve the claim",
        description: "Do what's right despite the policy technicalities",
        effects: { integrity: 1, desire: 1 },
        type: "risky",
      },
      {
        id: "uphold-denial",
        text: "Let the denial stand—policy is policy",
        description: "Follow the rules regardless of human cost",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "forge-date",
        text: "Forge a date on her complaint to justify approval",
        description: "Bend the rules through dishonest means",
        effects: { redLine: 1, integrity: 1 },
        type: "dishonest",
      },
    ],
  },
  {
    id: "julias-letter",
    title: "Words on Cream Paper",
    age: 54,
    setting: "Kitchen table, divorce papers finalized, envelope with careful handwriting",
    backgroundImage: "/image/bg-13.png",
    story: [
      {
        speaker: "Roy",
        text: "The envelope sits on my kitchen table like unexploded ordinance, Julia's careful handwriting spelling out my name and address.",
      },
      {
        speaker: "Roy",
        text: "It arrived three months after the divorce papers were finalized, long enough for the wounds to scab over but not heal.",
      },
      {
        speaker: "Roy",
        text: "The letter is four pages long, written on the cream-colored stationary she always used for important correspondence.",
      },
      {
        speaker: "Julia (letter)",
        text: "Roy, I'm not writing to blame you, or to relitigate our marriage in ink and regret.",
      },
      {
        speaker: "Julia (letter)",
        text: "I'm writing because I finally understand something that took me twenty-seven years to see clearly.",
      },
      {
        speaker: "Roy",
        text: "My hands shake as I continue reading. She writes about the dreams she buried, one compromise at a time.",
      },
      {
        speaker: "Julia (letter)",
        text: "The photography studio I never opened. The trip to Ireland I postponed until 'someday.'",
      },
      {
        speaker: "Julia (letter)",
        text: "I watched you shrink a little more each year, and I let you, because your fear made my own cowardice feel normal.",
      },
      {
        speaker: "Roy",
        text: "The final paragraph blurs as tears I didn't know I was capable of streak down my cheeks.",
      },
      {
        speaker: "Julia (letter)",
        text: "I hope someday you find the courage to disappoint the person you think you're supposed to be.",
      },
      {
        speaker: "Julia (letter)",
        text: "I hope you discover that the scariest thing isn't falling—it's realizing you never really tried to fly.",
      },
      {
        speaker: "Roy",
        text: "I sit in the silence of my empty house, holding the weight of twenty-seven years in four pages.",
      },
    ],
    choices: [
      {
        id: "write-reply",
        text: "Write a heartfelt reply but never send it",
        description: "Process your feelings through words you'll never share",
        effects: { fear: 1, desire: 1 },
        type: "safe",
      },
      {
        id: "record-apology",
        text: "Record a voice message apologizing for everything",
        description: "Reach out with genuine vulnerability",
        effects: { integrity: 1, desire: 1 },
        type: "risky",
      },
      {
        id: "delete-draft",
        text: "Delete the voicemail before sending",
        description: "Retreat from the vulnerability at the last moment",
        effects: { fear: 1 },
        type: "safe",
      },
    ],
  },
  {
    id: "the-jump-decision",
    title: "Learning to Fall",
    age: 55,
    setting: "Skydiving center hangar, prairie grass and endless Kansas sky",
    backgroundImage: "/image/bg-14.png",
    story: [
      {
        speaker: "Roy",
        text: "The skydiving center looks nothing like the glossy brochures—it's a converted airplane hangar on the outskirts of Topeka.",
      },
      {
        speaker: "Roy",
        text: "Surrounded by prairie grass and the kind of endless Kansas sky that makes you feel both infinite and insignificant.",
      },
      {
        speaker: "Roy",
        text: "I've driven past this place a thousand times, always wondering about the people brave enough to throw themselves out of airplanes.",
      },
      {
        speaker: "Roy",
        text: "Today, I'm one of them.",
      },
      {
        speaker: "Jake",
        text: "Roy, most folks come here for birthdays, divorces, or because someone dared them. What brings you out today?",
      },
      {
        speaker: "Roy",
        text: "I think about Julia's letter, still folded in my wallet. About Ethan, who calls less and less frequently.",
      },
      {
        speaker: "Roy",
        text: "About Mike Garrett's funeral and all the adventures that died with him.",
      },
      {
        speaker: "Roy",
        text: "It's my birthday. I figured it was time to stop being afraid of my own shadow.",
      },
      {
        speaker: "Jake",
        text: "Well then, happy birthday, Roy. Let's go see what you're made of.",
      },
      {
        speaker: "Roy",
        text: "As I suit up, I catch my reflection in the hangar's dirty window—an insurance salesman about to do something terrifying.",
      },
      {
        speaker: "Roy",
        text: "Maybe it's not too late to surprise myself.",
      },
      {
        speaker: "Roy",
        text: "Maybe it's never too late to finally learn how to fall.",
      },
    ],
    choices: [
      {
        id: "embrace-moment",
        text: "Embrace this moment of pure vulnerability",
        description: "Accept the fear and jump anyway",
        effects: { desire: 1, integrity: 1 },
        type: "risky",
      },
      {
        id: "second-thoughts",
        text: "Have second thoughts but go through with it anyway",
        description: "Jump despite your reservations",
        effects: { fear: 1 },
        type: "safe",
      },
      {
        id: "desperate-courage",
        text: "Jump not from courage but from desperate exhaustion with fear",
        description: "Take the leap as an escape from a life unlived",
        effects: { desire: 1, redLine: 1 },
        type: "risky",
      },
    ],
  },
];