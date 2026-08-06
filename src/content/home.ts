export const problemOutcomes = [
  {
    problem: "Everything feels urgent",
    problemText:
      "Assignments, exams, and unfinished topics all compete for your attention.",
    outcome: "One clear next step",
    outcomeText:
      "Dayova prioritizes what matters now, so you can start without second-guessing.",
  },
  {
    problem: "Your plan ignores real life",
    problemText:
      "Rigid schedules fall apart as soon as a busy school week changes.",
    outcome: "A plan that fits your week",
    outcomeText:
      "Available time, tasks, and exam dates shape every realistic learning block.",
  },
  {
    problem: "Answers do not show the whole picture",
    problemText:
      "Solving one question does not tell you what you understand or what still needs work.",
    outcome: "Progress you can act on",
    outcomeText:
      "See strengths, knowledge gaps, and the topic that deserves your attention next.",
  },
] as const;

export const comparisonRows = [
  {
    need: "Next step",
    generic: "Waits for your next prompt",
    dayova: "Keeps your next priority visible",
  },
  {
    need: "Planning",
    generic: "Creates a generic schedule",
    dayova: "Plans around your tasks, deadlines, and time",
  },
  {
    need: "Feedback",
    generic: "Explains a single answer",
    dayova: "Finds patterns and gaps across your learning",
  },
  {
    need: "Adaptation",
    generic: "Starts over with every session",
    dayova: "Adapts to your strengths and weaknesses",
  },
] as const;

export const processSteps = [
  {
    number: "01",
    icon: "/images/step-download.svg",
    title: "Add what is coming up",
    text: "Enter exams, assignments, and the times you can realistically study.",
  },
  {
    number: "02",
    icon: "/images/step-plan.svg",
    title: "Get a realistic learning plan",
    text: "Dayova turns your workload into manageable blocks with clear priorities.",
  },
  {
    number: "03",
    icon: "/images/step-learn.svg",
    title: "Learn, adjust, keep moving",
    text: "Your plan reacts to your progress and keeps the next useful step in view.",
  },
] as const;

export const faqs = [
  {
    question: "What exactly does Dayova do?",
    answer:
      "Dayova organizes your exams, assignments, available time, and learning progress into one personal plan. It helps you understand what to work on next instead of leaving you with another long list.",
  },
  {
    question: "How does Dayova build my learning plan?",
    answer:
      "You add what is coming up and when you can study. Dayova divides the work into realistic learning blocks, prioritizes important topics, and adjusts the plan as you make progress.",
  },
  {
    question: "How is Dayova different from a typical AI learning tool?",
    answer:
      "A typical tool answers an individual question. Dayova supports the full learning process: planning around your real schedule, identifying gaps, and keeping your next step clear.",
  },
  {
    question: "When can I use Dayova?",
    answer:
      "The first Dayova launch is planned for August 17, 2026. Join the waitlist to receive the launch details and early-access information first.",
  },
  {
    question: "What happens after I join the waitlist?",
    answer:
      "We will contact you with essential launch updates and instructions for accessing Dayova. You will also receive 14 days of free access when the app goes live.",
  },
] as const;
