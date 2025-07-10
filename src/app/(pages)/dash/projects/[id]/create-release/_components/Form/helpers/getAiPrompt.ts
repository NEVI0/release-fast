export default function getAiPrompt(diff: string) {
  return `Analyze this git diff: ${diff}. After that generate a short change log and a full change log about it for the final user of the projetc analized, and ONLY return it as an array containing the two description as elements to me so I can set my internal variables easily.`;
}
