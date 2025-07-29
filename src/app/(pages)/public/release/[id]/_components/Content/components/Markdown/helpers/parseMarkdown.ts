function cleanLine(line: string) {
  return line.replaceAll('*', '');
}

export default function parseMarkdown(line: string) {
  // Bold: **text**
  line = line.replace(
    /\*\*(.*?)\*\*/g,
    '<strong className="text-text-secondary">$1</strong>'
  );
  // Inline code: `code`
  line = line.replace(
    /`([^`]+)`/g,
    '<code style="background-color: #f3f4f6; padding: 0.2em 0.4em; border-radius: 4px;">$1</code>'
  );
  // Italic: *text*
  // (avoid matching bold, so only single *)
  line = line.replace(
    /(^|[^\*])\*([^\*]+)\*([^\*]|$)/g,
    '$1<em className="text-text-secondary">$2</em>$3'
  );
  // Headings: ###, ##
  line = line.replace(/^### (.*)/, '<h3>$1</h3>');
  line = line.replace(/^## (.*)/, '<h2>$1</h2>');
  // Emoji headings: ### 🚀 Title
  line = line.replace(
    /^### (:[^ ]+:|[\u{1F300}-\u{1FAFF}]) (.*)$/u,
    '<h3>$1 $2</h3>'
  );

  return cleanLine(line);
}
