export default function getAiPrompt(diff: string) {
  return `
  Analyze this git diff: ${diff}.
  
  After that generate a short change log and a full change log about it for the final user of the projetc analized,
  and ONLY return it as an array containing the two description as elements to me so I can set my internal variables easily.

  Rules:
  - The first array element (the short description) must be a simple string;
  - The second array element (the full description) can be generated as a string with markdown characters;
  - Generate the two description in English;
  `;
}
