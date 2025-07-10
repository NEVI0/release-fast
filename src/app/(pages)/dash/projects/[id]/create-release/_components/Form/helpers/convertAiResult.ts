import { unified } from 'unified';
import remarkParse from 'remark-parse';

export default async function convertAiResult(
  result: string
): Promise<string[]> {
  try {
    const ast = await unified()
      .use(remarkParse) // Parses Markdown into an AST
      .parse(result); // The input Markdown string

    // The 'ast' variable now holds the Markdown's Abstract Syntax Tree
    // This AST is a JavaScript object representing the Markdown structure.
    const converted = JSON.parse(JSON.stringify(ast, null, 2)); // Convert the AST object to a JSON string
    return JSON.parse(converted.children[0].value) as string[];
  } catch (error) {
    return [
      'Could not analize branches... try it again please!',
      'Could not analize branches... try it again please!',
    ];
  }
}
