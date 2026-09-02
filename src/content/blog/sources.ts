import type { BlogSource } from "./types";

const sources = {
  aiInEducation: {
    title: "Guidance for generative AI in education and research",
    publisher: "UNESCO",
    url: "https://www.unesco.org/en/articles/guidance-generative-ai-education-and-research",
  },
  deliberatePracticeReview: {
    title: "The role of deliberate practice in expert performance: revisiting Ericsson, Krampe & Tesch-Römer",
    publisher: "Royal Society Open Science",
    url: "https://royalsocietypublishing.org/doi/10.1098/rsos.190327",
  },
  dunningKruger: {
    title: "Unskilled and unaware of it",
    publisher: "Journal of Personality and Social Psychology",
    url: "https://doi.org/10.1037/0022-3514.77.6.1121",
  },
  effectiveLearning: {
    title: "Improving Students’ Learning With Effective Learning Techniques",
    publisher: "Association for Psychological Science",
    url: "https://www.psychologicalscience.org/publications/journals/pspi/learning-techniques.html",
  },
  feedback: {
    title: "The Power of Feedback",
    publisher: "Review of Educational Research",
    url: "https://doi.org/10.3102/003465430298487",
  },
  growthMindset: {
    title: "A national experiment reveals where a growth mindset improves achievement",
    publisher: "Nature",
    url: "https://www.nature.com/articles/s41586-019-1466-y",
  },
  implementationIntentions: {
    title: "Implementation Intentions and Goal Achievement: A Meta-analysis",
    publisher: "Advances in Experimental Social Psychology",
    url: "https://doi.org/10.1016/S0065-2601(06)38002-1",
  },
  interleaving: {
    title: "An Efficacy Study of Interleaved Mathematics Practice",
    publisher: "Institute of Education Sciences",
    url: "https://ies.ed.gov/use-work/awards/efficacy-study-interleaved-mathematics-practice",
  },
  metacognition: {
    title: "Metacognition and Self-Regulated Learning",
    publisher: "Education Endowment Foundation",
    url: "https://educationendowmentfoundation.org.uk/education-evidence/guidance-reports/metacognition",
  },
  multimediaLearning: {
    title: "Using multimedia for e-learning",
    publisher: "Journal of Computer Assisted Learning",
    url: "https://doi.org/10.1111/jcal.12197",
  },
  parentAutonomy: {
    title: "Parent Autonomy Support, Academic Achievement, and Psychosocial Functioning: a Meta-analysis",
    publisher: "Educational Psychology Review",
    url: "https://doi.org/10.1007/s10648-015-9329-z",
  },
  physicalActivity: {
    title: "Exercise Interventions and Intelligence in Children and Adolescents: A Meta-Analysis",
    publisher: "Pediatrics",
    url: "https://publications.aap.org/pediatrics/article/154/6/e2023064771/199838/",
  },
  procrastination: {
    title: "Procrastination and the Priority of Short-Term Mood Regulation",
    publisher: "Social and Personality Psychology Compass",
    url: "https://doi.org/10.1111/spc3.12011",
  },
  retrievalPractice: {
    title: "Test-Enhanced Learning: Taking Memory Tests Improves Long-Term Retention",
    publisher: "Psychological Science",
    url: "https://journals.sagepub.com/doi/10.1111/j.1467-9280.2006.01693.x",
  },
  sleep: {
    title: "Sleep and Health",
    publisher: "Centers for Disease Control and Prevention",
    url: "https://www.cdc.gov/physical-activity-education/staying-healthy/sleep.html",
  },
  spacing: {
    title: "Distributed practice in verbal recall tasks: A review and quantitative synthesis",
    publisher: "Psychological Bulletin / PubMed",
    url: "https://pubmed.ncbi.nlm.nih.gov/16719566/",
  },
  studentAssessment: {
    title: "Student assessment",
    publisher: "OECD",
    url: "https://www.oecd.org/en/topics/student-assessment.html",
  },
  taskSwitching: {
    title: "Executive Control of Cognitive Processes in Task Switching",
    publisher: "American Psychological Association",
    url: "https://www.apa.org/pubs/journals/releases/xhp274763.pdf",
  },
  testAnxiety: {
    title: "Anxiety, learning, and memory: A reconceptualization",
    publisher: "Journal of Research in Personality",
    url: "https://doi.org/10.1016/0092-6566(79)90001-1",
  },
} satisfies Record<string, BlogSource>;

const {
  aiInEducation,
  deliberatePracticeReview,
  dunningKruger,
  effectiveLearning,
  feedback,
  growthMindset,
  implementationIntentions,
  interleaving,
  metacognition,
  multimediaLearning,
  parentAutonomy,
  physicalActivity,
  procrastination,
  retrievalPractice,
  sleep,
  spacing,
  studentAssessment,
  taskSwitching,
  testAnxiety,
} = sources;

export const articleSources: Readonly<Record<string, readonly BlogSource[]>> = {
  "was-soll-ich-heute-fuer-die-pruefung-lernen": [
    metacognition,
    effectiveLearning,
    retrievalPractice,
  ],
  "wenn-ki-unterricht-vorbereitet-aber-nicht-entscheidet": [
    aiInEducation,
    feedback,
  ],
  "wenn-der-lernstand-den-unterricht-mitplant": [metacognition, feedback],
  "die-richtige-schwierigkeit-beim-lernen": [
    metacognition,
    effectiveLearning,
  ],
  "vom-lernstand-zum-naechsten-schritt": [metacognition, feedback],
  "eine-lern-app-sollte-dir-arbeit-abnehmen": [
    metacognition,
    implementationIntentions,
  ],
  "feedback-das-dich-weiterbringt": [feedback, retrievalPractice],
  "ein-lernplan-der-in-deinen-alltag-passt": [
    metacognition,
    implementationIntentions,
  ],
  "vertraut-ist-noch-nicht-verstanden": [
    effectiveLearning,
    retrievalPractice,
  ],
  "warum-fortschritt-unsichtbar-bleibt": [
    metacognition,
    implementationIntentions,
  ],
  "lernen-ohne-plan-erzeugt-stress": [metacognition, taskSwitching],
  "wiederholen-allein-reicht-nicht": [retrievalPractice, spacing],
  "ich-kann-das-nicht": [growthMindset, feedback],
  "was-hinter-dem-aufschieben-steckt": [
    procrastination,
    implementationIntentions,
  ],
  "wenn-stress-das-lernen-blockiert": [testAnxiety, metacognition],
  "wie-dein-lernplatz-mitentscheidet": [
    taskSwitching,
    implementationIntentions,
  ],
  "raus-aus-der-vergleichsfalle": [studentAssessment, growthMindset],
  "bewegung-bringt-denken-in-gang": [physicalActivity],
  "warum-schlaf-beim-lernen-gewinnt": [sleep],
  "gewohnheiten-tragen-weiter-als-motivation": [
    implementationIntentions,
    metacognition,
  ],
  "wie-dein-selbstbild-lernen-praegt": [growthMindset],
  "fehler-als-werkzeuge-nutzen": [feedback, metacognition],
  "was-noten-zeigen-und-verschweigen": [studentAssessment, feedback],
  "kleine-erfolge-halten-dich-im-lernen": [
    metacognition,
    implementationIntentions,
  ],
  "multitasking-kostet-fokus": [taskSwitching],
  "eltern-begleiten-ohne-druck": [parentAutonomy, metacognition],
  "fehlende-lust-als-schutz": [procrastination, parentAutonomy],
  "abstrakten-lernstoff-greifbar-machen": [
    multimediaLearning,
    effectiveLearning,
  ],
  "bilder-und-woerter-gemeinsam-nutzen": [multimediaLearning],
  "mit-lernplanung-pruefungsdruck-senken": [
    metacognition,
    implementationIntentions,
  ],
  "abrufen-statt-passiv-lesen": [retrievalPractice, effectiveLearning],
  "feynman-technik-komplexes-erklaeren": [
    retrievalPractice,
    metacognition,
  ],
  "pomodoro-25-minuten-passen-nicht-immer": [
    metacognition,
    effectiveLearning,
  ],
  "was-fruehere-generationen-anders-machten": [taskSwitching, metacognition],
  "wenn-selbstvertrauen-wissen-vortaeuscht": [
    dunningKruger,
    metacognition,
  ],
  "gemischtes-ueben-statt-blocklernen": [interleaving],
  "selbsttests-staerken-das-lernen": [retrievalPractice],
  "lernpause-macht-wissen-haltbarer": [spacing, retrievalPractice],
  "gute-noten-und-verstaendnis": [studentAssessment, retrievalPractice],
  "uebungszeit-allein-genuegt-nicht": [
    deliberatePracticeReview,
    feedback,
  ],
  "warum-gute-vorsaetze-scheitern": [implementationIntentions],
  "warum-lernen-erst-spaet-beginnt": [
    procrastination,
    implementationIntentions,
  ],
  "wenn-lernen-nicht-zur-note-passt": [
    studentAssessment,
    retrievalPractice,
    feedback,
  ],
};
