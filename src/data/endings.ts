import { EndingCondition } from '../types/game';

export const endings: EndingCondition[] = [
  {
    id: 'let-it-breathe',
    name: 'Let It Breathe',
    description: 'Reserve chute blooms; Roy limps but phones Julia, first honest laugh in years.',
    condition: (stats, redLine) => stats.desire > stats.fear && redLine <= 2,
    tone: 'hopeful',
    finalImage: 'Roy walking away from a landed parachute, phone to his ear, smiling'
  },
  {
    id: 'held-breath',
    name: 'Held Breath', 
    description: 'Impact off-screen; wind fades to silence; Polaroid develops blank white.',
    condition: (stats, redLine) => stats.fear >= stats.desire,
    tone: 'melancholy',
    finalImage: 'A blank white Polaroid slowly developing'
  },
  {
    id: 'paper-sky',
    name: 'Paper Sky',
    description: 'Roy survives; mails Julia the stub with poem fragment; credits over Kansas sky streaked with contrails.',
    condition: (stats, redLine) => stats.integrity >= 8 && redLine <= 1,
    tone: 'redemptive',
    finalImage: 'Contrails crossing a vast Kansas sky'
  },
  {
    id: 'red-line',
    name: 'Red Line',
    description: 'Mid-fall memory buffer corrupts; scenes glitch red. Roy never reaches QTE—he "lies" to himself and screen cuts.',
    condition: (stats, redLine) => redLine >= 3,
    tone: 'corruption',
    finalImage: 'Static and glitched red interference'
  },
  {
    id: 'weightless-promise',
    name: 'Weightless Promise',
    description: 'Free-fall pauses; ghostly guitar chord plays; game loops to title with pick silhouette replacing "A" in SPLAT.',
    condition: (stats, redLine) => stats.desire >= 4,
    tone: 'transcendent',
    finalImage: 'Frozen moment of freefall with guitar music'
  },
  {
    id: 'clock-out',
    name: 'Clock Out',
    description: 'Roy\'s body hits like a rubber stamp; "PAID IN FULL" pixelates over field—dark satire ending.',
    condition: (stats, redLine) => stats.desire <= 4 && stats.fear <= 4 && stats.integrity <= 4,
    tone: 'satirical',
    finalImage: 'Insurance stamp reading "PAID IN FULL" over a Kansas field'
  }
];