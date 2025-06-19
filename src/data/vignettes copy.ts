import { Vignette } from '../types/game';

// Deeply detailed vignettes for Roy's life flashbacks
export const vignettes: Vignette[] = [
  {
    id: 'fathers-guitar',
    title: "Father's Guitar",
    age: 8,
    defaultMemory: "The hallway feels endless in the dim evening light. You press yourself against the cool wall, bare feet silent on hardwood as you peer through the crack in the door. \n\nDad sits alone in his chair, the one Mom always says is falling apart. His calloused fingers move across guitar strings like they're speaking a language you don't understand yet. The melody is haunting, lonely - Delta blues that seems to carry the weight of unspoken dreams.\n\nYou've never seen Dad like this. At dinner, he talks about insurance claims and weekend yard work. But now... now he's someone else entirely. Someone who once had fire in his chest.\n\nThe music stops abruptly. You hear him sigh, then whisper to Mom in the kitchen: 'I should've tried Nashville... but I had responsibilities.' Mom's voice is soft, sad: 'You still could, you know.' Dad just shakes his head. 'Not anymore, Mary. Not anymore.'\n\nYour eight-year-old heart pounds. This feels important, like a secret that could change everything.",
    backgroundImage: 'photo-1500673922987-e212871fec22',
    choices: [
      {
        id: 'ask-teach',
        text: "Burst in and ask Dad to teach me guitar",
        type: 'risk',
        effects: { desire: 1, integrity: 1 },
        unlockItem: 'guitar-pick'
      },
      {
        id: 'retreat',
        text: "Retreat silently to my room, heart racing",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'tell-mom',
        text: "Tell Mom what I heard Dad say",
        type: 'lie',
        effects: { integrity: 1, fear: 1, redLine: 1 }
      }
    ]
  },
  {
    id: 'class-presentation',
    title: "Class Presentation",
    age: 12,
    defaultMemory: "The classroom stretches before you like an ocean of expectant faces. Twenty-three pairs of eyes, all waiting. Your stomach churns with the kind of sickness that isn't really sickness at all.\n\n'Roy Thompson, you're up next,' Mrs. Henderson calls from her desk. Your project on the Solar System sits in your lap - construction paper planets you spent weeks perfecting, each one carefully colored and labeled.\n\nBut your throat closes up. The words won't come. Instead, you clutch your stomach and moan softly. 'I... I think I'm going to be sick.'\n\nMrs. Henderson's face softens with concern as she escorts you to the nurse's office. Through the small window, you watch Julia Martinez confidently stride to the front of the class. Her project is about butterflies - she's even brought a chrysalis that hatched last week.\n\nShe speaks clearly, gesturing with excitement as she describes metamorphosis. 'Sometimes,' she says, 'the most beautiful things come from completely changing who you used to be.' Her eyes briefly find yours through the window, and you feel a stab of shame mixed with admiration.\n\nThe nurse checks your temperature. Normal, of course.",
    backgroundImage: 'photo-1519389950473-47ba0277781c',
    choices: [
      {
        id: 'admit-lie',
        text: "Return to class and admit I wasn't really sick",
        type: 'risk',
        effects: { integrity: 1, redLine: 1 }
      },
      {
        id: 'stay-safe',
        text: "Stay in the nurse's office until it's over",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'present-anyway',
        text: "Go back and present, even though I'm terrified",
        type: 'risk',
        effects: { desire: 1, integrity: 1 },
        unlockItem: 'inhaler'
      }
    ]
  },
  {
    id: 'graffiti',
    title: "The Graffiti",
    age: 15,
    defaultMemory: "The spray can feels impossibly heavy in your trembling hand, its metallic surface cold against your palm. The brick wall of Miller's Hardware looms before you, and your friends are watching from the shadows, waiting.\n\n'Come on, Roy!' Marcus whispers harshly. 'Just do it already!'\n\nThe red paint hisses as it hits the wall. 'SYSTEM SUCKS' drips down the weathered brick in angry, uneven letters. Your heart pounds so hard you're sure the whole town can hear it. This isn't you. You don't break rules. You don't vandalize property. But something about tonight feels different, electric.\n\nThen you hear footsteps. \n\nJulia rounds the corner, probably heading home from her job at the diner. She stops dead when she sees you, spray can still in hand, paint fumes sharp in the evening air. For a moment, time freezes. Her face cycles through surprise, then disappointment, then something that looks almost like pity.\n\nShe doesn't say a word. Just shakes her head slowly and walks away, her sneakers echoing off the empty street. You watch her go, the spray can suddenly feeling like it weighs a thousand pounds.",
    backgroundImage: 'photo-1470813740244-df37b8c1edcb',
    choices: [
      {
        id: 'own-up',
        text: "Own up to everyone - friends and authorities",
        type: 'risk',
        effects: { integrity: 1, desire: 1 }
      },
      {
        id: 'erase-alone',
        text: "Return alone tomorrow night to scrub it clean",
        type: 'safe',
        effects: { integrity: 1, fear: 1 },
        activateItem: 'guitar-pick'
      },
      {
        id: 'frame-kid',
        text: "Suggest it was Tommy Mitchell from the next block",
        type: 'lie',
        effects: { fear: 1, redLine: 1 }
      }
    ]
  },
  {
    id: 'hidden-poems',
    title: "Hidden Poems",
    age: 17,
    defaultMemory: "Smoke curls up from the kitchen sink as your notebook burns, pages curling black at the edges. Three months of secret writing turning to ash - verses about starlight and longing, about Julia's laugh, about the way Kansas sunsets make you feel like you could fly.\n\nThis morning, Julia found a fragment that had fallen from your locker. One corner of a poem, just a few lines: 'Her voice cuts through the static of my fear / Like radio waves from some distant star...'\n\nShe'd held it delicately, like it might shatter. 'Roy, did you write this?' Her eyes were wide with something you couldn't quite read. Surprise? Interest? You'd panicked, snatched it back so fast you'd torn it further.\n\n'It's nothing. Just... stupid stuff.'\n\nNow the evidence burns. You watch months of honest feeling disappear into grey smoke. The poem about her smile. The one comparing her determination to a river cutting through stone. The embarrassingly earnest verse about wanting to be brave enough to hold her hand.\n\nAll of it, gone. Safer this way. Isn't it?",
    backgroundImage: 'photo-1501854140801-50d01698950b',
    choices: [
      {
        id: 'let-julia-keep',
        text: "Let Julia keep the poem fragment I dropped",
        type: 'risk',
        effects: { desire: 1 }
      },
      {
        id: 'snatch-back',
        text: "Frantically snatch back every scrap of paper",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'read-aloud',
        text: "Read the whole poem aloud to her before burning it",
        type: 'risk',
        effects: { desire: 1, integrity: 1 },
        unlockItem: 'poem-fragment'
      }
    ]
  },
  {
    id: 'the-protest',
    title: "The Protest",
    age: 20,
    defaultMemory: "The crowd surges around you like a living thing, hundreds of voices raised in unified anger. 'NO MORE WAR! NO MORE WAR!' The chant pounds in your chest, in your bones. You came here with Julia, swept up in her passionate conviction about the conflict overseas.\n\nShe stands three people ahead of you, her dark hair catching the late afternoon sun as she links arms with strangers. There's something magnificent about her in this moment - fearless, electric with purpose. You've never loved her more, and you've never been more terrified.\n\nThen you hear them: helicopters. The metallic thunder grows louder, and suddenly there are shouts from the front lines. 'TEAR GAS! THEY'RE USING TEAR GAS!'\n\nCanisters bounce across the asphalt like deadly metal thunderstorms, white smoke billowing in their wake. People scatter, coughing, eyes streaming. But Julia doesn't move. She stands firm, covering her mouth with her shirt, her eyes blazing with defiance.\n\nYour feet are moving backward before your brain catches up. The crowd pushes and you let it carry you, further from the smoke, further from the danger. Further from Julia.\n\nWhen you look back, she's still there, still standing, getting smaller in the chaos.",
    backgroundImage: 'photo-1488590528505-98d2b5aba04b',
    choices: [
      {
        id: 'stand-ground',
        text: "Force my way back to Julia and link arms",
        type: 'risk',
        effects: { desire: 1, integrity: 1 }
      },
      {
        id: 'slip-away',
        text: "Keep moving with the crowd to safety",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'drag-julia',
        text: "Try to pull Julia away from the danger",
        type: 'safe',
        effects: { integrity: 1, fear: 1, desire: -1 }
      }
    ]
  },
  {
    id: 'job-interview',
    title: "The Job Interview",
    age: 24,
    defaultMemory: "The mahogany conference table stretches between you and opportunity like an ocean. Mr. Davidson leans forward, his eyes bright with the kind of enthusiasm you've only seen in people who've lived their dreams.\n\n'Roy, I'll be frank - this position isn't for everyone.' He slides a glossy brochure across the polished wood. 'Global Risk Assessment means six months in Bangkok, three in São Paulo, maybe a year in Cairo. You'd be evaluating insurance needs for international businesses, seeing how the other half of the world lives.'\n\nYour hands shake slightly as you flip through images of bustling markets, ancient temples, people whose faces tell stories you've never heard. The salary figure at the bottom makes your throat dry - nearly double what Midwest Mutual is offering.\n\n'Of course,' Mr. Davidson continues, 'if you prefer something more... stable, I understand Hartley Insurance downtown has a nice desk job available. Same work every day, same four walls.' His tone isn't judgmental, but you catch the slight emphasis on 'same.'\n\nThrough the floor-to-ceiling windows, you can see the airport in the distance. Planes taking off and landing like mechanical birds, carrying people to places you've only read about in National Geographic.\n\nYour mouth opens to speak, but the words lodge in your throat like stones.",
    backgroundImage: 'photo-1560472355-536de3962603',
    choices: [
      {
        id: 'accept-adventure',
        text: "Accept the international position immediately",
        type: 'risk',
        effects: { desire: 1 }
      },
      {
        id: 'choose-safe',
        text: "Politely decline and mention the local opportunity",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'ask-time',
        text: "Ask for a weekend to discuss it with Julia",
        type: 'safe',
        effects: { integrity: 1 }
      }
    ]
  },
  {
    id: 'julias-ultimatum',
    title: "Julia's Ultimatum",
    age: 27,
    defaultMemory: "The kitchen feels smaller than usual as Julia stands by the sink, her back to you, shoulders rigid with the weight of unspoken words. Steam rises from her coffee mug, curling into the morning light that filters through gingham curtains - curtains she picked out when you first moved in together, back when everything felt possible.\n\n'Roy, we need to talk.' Her voice is steady, but you can hear the tremor underneath. She turns, and you see that familiar fire in her dark eyes - the same fire that made you fall in love with her during senior year debate club.\n\n'I got the job offer from Denver.' She sets down her mug with deliberate care. 'The environmental law firm. It's everything I've worked for, Roy. Real cases, real impact. A chance to actually make a difference instead of just... existing.'\n\nThe words hang between you like a challenge. You know this moment has been coming for months - the late-night conversations about feeling trapped, the wistful way she stares at travel magazines, the increasing silences that stretch between you like unbridgeable chasms.\n\n'I love you,' she continues, stepping closer, 'but I can't keep waiting for our life to start. I need to know if you're coming with me, or if this is where we say goodbye.'\n\nBehind her, the calendar on the refrigerator shows the same job, the same routine, the same safe little life you've built like a fortress against the unpredictable world.",
    backgroundImage: 'photo-1513475382585-d06e58bcb0e0',
    choices: [
      {
        id: 'say-yes',
        text: "Tell Julia yes, we'll go to Denver together",
        type: 'risk',
        effects: { desire: 1 },
        requiredStats: { desire: 2 }
      },
      {
        id: 'promise-sabotage',
        text: "Promise to consider it, but secretly sabotage the opportunity",
        type: 'lie',
        effects: { fear: 1, redLine: 1 }
      },
      {
        id: 'confess-fear',
        text: "Honestly admit my fear of leaving Kansas",
        type: 'safe',
        effects: { integrity: 1, fear: 1 },
        activateItem: 'guitar-pick'
      }
    ]
  },
  {
    id: 'sons-dreams',
    title: "Son's Dreams",
    age: 32,
    defaultMemory: "Ethan's bedroom is a seven-year-old's vision of infinity - model rockets perched on every surface, glow-in-the-dark stars mapped across the ceiling in careful constellations, and a massive poster of the space shuttle Discovery taped to the wall with the kind of reverence usually reserved for religious artifacts.\n\n'Dad, look!' Ethan bounces on his bed, pointing to a crayon drawing spread across his desk. 'I drew our family on Mars! See, that's you and Mom in the space suits, and that's me driving the rover!'\n\nThe drawing is wonderfully chaotic - red scribbled landscape, stick figures with bulbous helmet heads, and what appears to be a dog wearing a tiny astronaut suit. Your heart clenches as you recognize the hope radiating from every crooked line.\n\n'Mrs. Patterson said we're gonna learn about the solar system next week,' Ethan continues, his eyes bright with the kind of unfiltered enthusiasm that makes adults both nostalgic and terrified. 'She said some kids might even get to go to space camp this summer if their parents sign them up!'\n\nHe looks at you with such complete trust, such absolute certainty that the universe will bend to accommodate his dreams. Behind him, his bookshelf sags under the weight of astronomy books, science fiction novels, and a battered copy of 'The Right Stuff' that he checks out from the library every month.\n\nYou think of your father's guitar gathering dust in the closet, of all the dreams that wither when they meet the sharp edges of reality.",
    backgroundImage: 'photo-1446776653964-20c1d3a81b06',
    choices: [
      {
        id: 'encourage-dreams',
        text: "Encourage him boldly and promise to look into space camp",
        type: 'risk',
        effects: { desire: 1, integrity: 1 }
      },
      {
        id: 'be-practical',
        text: "Gently suggest he should 'be more practical' about career choices",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'lie-about-past',
        text: "Tell him Dad almost became an astronaut once",
        type: 'lie',
        effects: { redLine: 1, fear: 1 }
      }
    ]
  },
  {
    id: 'promotion-declined',
    title: "Promotion Declined",
    age: 38,
    defaultMemory: "Mr. Hartley's corner office overlooks downtown Topeka like a throne room surveying a modest kingdom. Through the floor-to-ceiling windows, you can see the Capitol dome gleaming in the afternoon sun, and beyond that, the highway that leads everywhere you've never been.\n\n'Roy, in fifteen years, you've never submitted a claim I've had to overturn.' Hartley adjusts his wire-rimmed glasses, a gesture you've seen him make a thousand times during staff meetings. 'You're methodical, trustworthy, and frankly, you know this business better than men twice your age.'\n\nHe slides a manila folder across his mahogany desk. Inside, you glimpse letterhead from the Kansas City regional office - corporate towers, metropolitan energy, the kind of place where careers are made instead of merely maintained.\n\n'Regional Manager,' he continues. 'Salary increase of forty percent, full relocation package, and you'd be overseeing seven branch offices across Missouri and eastern Kansas. It's the opportunity I never got at your age, Roy.'\n\nYour fingers trace the edge of the folder. Inside, there are photos of a suburban house with a three-car garage, information about schools for Ethan, and a detailed breakdown of urban amenities that make Topeka look like a postcard from a simpler time.\n\nBut with the offer comes the weight of change - new faces, new challenges, the terrifying possibility of failure in an arena where your fifteen years of small-town competence might not be enough.\n\nHartley leans back in his chair, waiting.",
    backgroundImage: 'photo-1664382953518-48fdc4c8149c',
    choices: [
      {
        id: 'accept-promotion',
        text: "Accept the promotion and the move to Kansas City",
        type: 'risk',
        effects: { desire: 1 },
        requiredStats: { desire: 3 }
      },
      {
        id: 'decline-honestly',
        text: "Politely decline, citing family stability concerns",
        type: 'safe',
        effects: { integrity: 1, fear: 1 }
      },
      {
        id: 'lie-about-hr',
        text: "Later tell Julia that HR blocked the promotion",
        type: 'lie',
        effects: { redLine: 1, fear: 1 }
      }
    ]
  },
  {
    id: 'broken-vase',
    title: "The Broken Vase",
    age: 43,
    defaultMemory: "The vase shatters against the hardwood floor with a sound like Julia's heart breaking - sharp, final, irreversible. Pieces of her grandmother's pottery scatter across the living room, blue and white fragments that catch the lamplight like tears.\n\nThe argument started over something trivial - your reluctance to attend the Hartwell's anniversary party, another social obligation that felt like swimming upstream. But somewhere between your muttered complaints and Julia's frustrated sighs, the conversation became about everything else: the trip to Colorado you cancelled, the photography class she wanted to take, the way you say 'maybe next year' to dreams like they're bills to be postponed.\n\n'Roy, sometimes I feel like I'm married to a ghost,' she had said, her voice breaking. 'You're here, but you're not really here. When did you stop wanting things?'\n\nYour hand had swept toward her in emphasis, catching the vase - the one her grandmother brought from Poland, the one that survived the Depression, two world wars, and five moves, only to become collateral damage in your living room on a Tuesday night.\n\nNow Julia kneels among the pieces, not crying, not speaking. Just carefully collecting shards with the same methodical patience she uses for everything broken in your marriage. Her wedding ring clicks against the ceramic fragments, a small sound that somehow contains the weight of seventeen years.\n\nYou stand frozen in the doorway, watching your wife gather the remnants of something irreplaceable while the silence stretches between you like an accusation.",
    backgroundImage: 'photo-1578662996442-48f60103fc96',
    choices: [
      {
        id: 'apologize-instantly',
        text: "Drop to my knees and help her, apologizing profusely",
        type: 'safe',
        effects: { integrity: 1 }
      },
      {
        id: 'blame-shelf',
        text: "Defensively blame the cheap shelf for being unstable",
        type: 'lie',
        effects: { redLine: 1, fear: 1 }
      },
      {
        id: 'stand-mute',
        text: "Stand silently, unable to find words",
        type: 'safe',
        effects: { fear: 1 }
      }
    ]
  },
  {
    id: 'midnight-conversation',
    title: "Midnight Conversation",
    age: 47,
    defaultMemory: "The kitchen exists in that liminal space between night and morning, illuminated only by the green glow of the microwave clock and the streetlight filtering through gauze curtains. Julia sits at the small table in her faded flannel robe, hands wrapped around a mug of tea that's long since gone cold.\n\nYou've found her here more and more lately - sleepless, staring out the window at the neighbor's house where the Thompsons used to live before they retired to Florida. Before they decided to finally live instead of merely existing.\n\n'I had that dream again,' she says without turning around. Her voice is soft, almost conversational, as if she's discussing the weather rather than the slow dissolution of your shared life. 'The one where I'm driving west on Highway 70, just driving until the road runs out.'\n\nYou pour yourself a glass of water from the sink, the ice cubes cracking in the silence. Through the window, you can see Mrs. Henderson's house - dark now because she moved to Arizona last spring to be closer to her grandchildren. Another empty nest, another life that chose flight over safety.\n\n'Sometimes I wake up and for just a moment, I can't remember why we stayed,' Julia continues. 'Why we're still here in this house, in this town, living the same day over and over like we're afraid something terrible will happen if we change the pattern.'\n\nShe finally turns to look at you, and in the dim light, you can see the girl who once talked about changing the world, who believed in grand gestures and impossible dreams. But her eyes now hold the particular sadness of someone who has learned to make peace with disappointment.",
    backgroundImage: 'photo-1501594907352-04cda38ebc29',
    choices: [
      {
        id: 'admit-dissatisfaction',
        text: "Admit that I feel trapped and unsatisfied too",
        type: 'risk',
        effects: { desire: 1, integrity: 1 }
      },
      {
        id: 'change-topic',
        text: "Suggest we should get some sleep instead",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'lie-happy',
        text: "Tell her I'm perfectly happy with our life",
        type: 'lie',
        effects: { redLine: 1, fear: 1 }
      }
    ]
  },
  {
    id: 'friends-funeral',
    title: "Friend's Funeral",
    age: 50,
    defaultMemory: "The funeral home smells of lilies and regret, its burgundy carpet and mahogany fixtures designed to muffle both sound and sorrow. You sit in the third row, close enough to see the casket but far enough to avoid the raw grief of Mike's family, watching them say goodbye to a man who lived more in fifty years than most people manage in eighty.\n\nThe eulogies paint a picture of a life you barely recognize, though you've known Mike Garrett since high school. His brother talks about the motorcycle trip across South America at twenty-five. His daughter shares stories of spontaneous camping trips and midnight fishing expeditions. His ex-wife - they remained friends after their amicable divorce - speaks about his decision to quit his law practice at forty to become a wilderness guide.\n\n'Mike used to say that most people die at twenty-five and aren't buried until seventy,' she continues, her voice steady despite the tears. 'He refused to be one of them. He collected experiences instead of possessions, adventures instead of achievements.'\n\nYou shift uncomfortably in the pew, thinking of your own carefully curated existence - the same route to work for fifteen years, the same vacation spot every summer, the same Friday night routine of pizza and television. Mike always invited you to join his excursions, and you always found perfectly reasonable excuses to decline.\n\nThe service concludes with a slide show of Mike's adventures: scuba diving in Belize, hiking the Appalachian Trail, teaching his grandchildren to fish from a canoe on some pristine mountain lake. Each image is a reminder of paths not taken, of the word 'someday' that has become your most spoken lie.\n\nAs the crowd files past the casket, you notice a small display table with Mike's personal effects - including a worn airline ticket stub from his last trip to Alaska, just three months ago.",
    backgroundImage: 'photo-1513475382585-d06e58bcb0e0',
    choices: [
      {
        id: 'share-memory',
        text: "Stand up and share a memory of Mike's adventurous spirit",
        type: 'risk',
        effects: { integrity: 1 }
      },
      {
        id: 'leave-early',
        text: "Quietly slip out before the reception",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'pocket-ticket',
        text: "Discreetly pocket Mike's plane ticket stub",
        type: 'risk',
        effects: { desire: 1 },
        unlockItem: 'plane-ticket'
      }
    ]
  },
  {
    id: 'insurance-claim',
    title: "The Insurance Claim",
    age: 53,
    defaultMemory: "The Hendricks file sits open on your desk like an accusation, its manila tabs and paperwork neat as always, but the contents feel heavier today. Maria Hendricks, thirty-four, single mother of two, house fire caused by faulty wiring that the landlord refused to fix. Total loss: $47,000 in personal belongings, plus temporary housing costs while she searches for a new place.\n\nThe photographs are devastating in their clinical clarity - melted toys in what used to be a child's bedroom, a kitchen reduced to charcoal and ash, family photos curled and blackened beyond recognition. But it's the handwritten letter paperclipped to the front that makes your stomach clench.\n\n'Mr. Thompson, I know the policy language is complicated, but please understand - we have nothing left. The kids are staying with my sister, sleeping on the floor because there's no room. I've been working two jobs to keep up with premiums, and I always paid on time. This is exactly why I bought insurance - for moments like this when everything falls apart.'\n\nYour computer screen shows the claim analysis: DENY - Policy Section 4.3.2, inadequate documentation of electrical issues. It's technically correct - she can't prove she complained about the wiring beforehand. But you've driven past her burned-out duplex. You've seen how those landlords operate in the lower-income neighborhoods, cutting corners on maintenance while collecting rent from families who have nowhere else to go.\n\nThe denial letter template is already loaded. One click sends it to the printer. One signature makes it official. One more family learns that the safety net they thought they'd purchased is full of holes when they need it most.\n\nThrough your office window, you can see your own comfortable neighborhood, where electrical problems get fixed promptly and insurance is just another bill, not a prayer.",
    backgroundImage: 'photo-1507003211169-0a1dd7228f2d',
    choices: [
      {
        id: 'reverse-decision',
        text: "Reverse the denial and approve the claim",
        type: 'risk',
        effects: { integrity: 1, desire: 1 }
      },
      {
        id: 'uphold-denial',
        text: "Let the denial stand - policy is policy",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'forge-date',
        text: "Forge a date on her complaint to justify approval",
        type: 'lie',
        effects: { redLine: 1, fear: 1 }
      }
    ]
  },
  {
    id: 'julias-letter',
    title: "Julia's Letter",
    age: 54,
    defaultMemory: "The envelope sits on your kitchen table like unexploded ordinance, Julia's careful handwriting spelling out your name and address with the same precision she once used to plan the future you never quite managed to live. It arrived three months after the divorce papers were finalized, long enough for the wounds to scab over but not long enough to heal.\n\nThe letter is four pages long, written on the cream-colored stationary she always used for important correspondence. Her words are measured, careful, but they cut through your defenses like a surgeon's blade:\n\n'Roy, I'm not writing to blame you, or to relitigate our marriage in ink and regret. I'm writing because I finally understand something that took me twenty-seven years to see clearly. We were both afraid - not of each other, but of ourselves. Of the people we might become if we stopped hiding behind the illusion of safety.'\n\nYour hands shake as you continue reading. She writes about the dreams she buried, one compromise at a time. The photography studio she never opened. The trip to Ireland she postponed until 'someday.' The children's book she wrote in secret, hidden in a drawer because pursuing publication felt too much like reaching for something she might not deserve.\n\n'I watched you shrink a little more each year,' she continues, 'and I let you, because your fear made my own cowardice feel normal. We became curators of our own small museum, preserving a life we never quite lived.'\n\nThe final paragraph blurs as tears you didn't know you were capable of still shedding streak down your cheeks:\n\n'I hope someday you find the courage to disappoint the person you think you're supposed to be. I hope you discover that the scariest thing isn't falling - it's realizing you never really tried to fly.'",
    backgroundImage: 'photo-1455504490126-80ed4d83b3b9',
    choices: [
      {
        id: 'write-reply',
        text: "Write a heartfelt reply but never send it",
        type: 'safe',
        effects: { fear: 1, desire: 1 }
      },
      {
        id: 'record-apology',
        text: "Record a voice message apologizing for everything",
        type: 'risk',
        effects: { integrity: 1, desire: 1 },
        activateItem: 'plane-ticket'
      },
      {
        id: 'delete-draft',
        text: "Delete the voicemail before sending",
        type: 'safe',
        effects: { fear: 1 }
      }
    ]
  },
  {
    id: 'the-jump-decision',
    title: "The Jump Decision",
    age: 55,
    defaultMemory: "The skydiving center looks nothing like the glossy brochures - it's a converted airplane hangar on the outskirts of Topeka, surrounded by prairie grass and the kind of endless Kansas sky that makes you feel both infinite and insignificant. You've driven past this place a thousand times over the years, always wondering about the people brave enough or foolish enough to throw themselves out of perfectly good airplanes.\n\nToday, you're one of them.\n\nThe instructor, Jake Morrison, has the weathered face of someone who's made peace with gravity. He's probably done this briefing ten thousand times, but he speaks to you like you're the only person who's ever mattered.\n\n'Roy, most folks come here for birthdays, divorces, or because someone dared them. What brings you out today?'\n\nYou think about Julia's letter, still folded in your wallet. About Ethan, who calls less and less frequently. About Mike Garrett's funeral and all the adventures that died with him. About fifty-five years of choosing safety over everything else that might have made you feel alive.\n\n'It's my birthday,' you tell him, surprised by how steady your voice sounds. 'I figured it was time to stop being afraid of my own shadow.'\n\nJake grins and hands you a jumpsuit that smells like courage and jet fuel. 'Well then, happy birthday, Roy. Let's go see what you're made of.'\n\nAs you suit up, you catch your reflection in the hangar's dirty window - an insurance salesman from Topeka about to do something that would have terrified the young man who once watched his father play guitar in secret. Maybe it's not too late to surprise yourself.\n\nMaybe it's never too late to finally learn how to fall.",
    backgroundImage: 'photo-1540979388789-6cee28a1cdc9',
    choices: [
      {
        id: 'embrace-moment',
        text: "Embrace this moment of pure vulnerability",
        type: 'risk',
        effects: { desire: 1, integrity: 1 }
      },
      {
        id: 'second-thoughts',
        text: "Have second thoughts but go through with it anyway",
        type: 'safe',
        effects: { fear: 1 }
      },
      {
        id: 'desperate-courage',
        text: "Jump not from courage but from desperate exhaustion with fear",
        type: 'risk',
        effects: { desire: 1, redLine: 1 }
      }
    ]
  }
];