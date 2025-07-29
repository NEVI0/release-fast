import { ChevronRight } from 'lucide-react';
import { parseMarkdown } from './helpers';

interface MarkdownProps {
  text: string;
}

export default function Markdown({ text }: MarkdownProps) {
  // Render lines with custom rules
  return text.split('\n').map((line, index) => {
    const trimmed = line.trim();

    // Heading level 3 (###)
    if (/^### /.test(trimmed)) {
      return (
        <h3
          key={index}
          className="w-full font-semibold text-xl mt-4 mb-2"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(trimmed) }}
        />
      );
    }

    // Heading level 2 (##)
    if (/^## /.test(trimmed)) {
      return (
        <h2
          key={index}
          className="w-full font-bold text-2xl mt-6 mb-3"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(trimmed) }}
        />
      );
    }

    // Top-level bold (e.g. "**changelog completo:**")
    if (/^\*\*.*\*\*$/.test(trimmed) || /^\*\*.*\*\*:/.test(trimmed)) {
      return (
        <h4
          key={index}
          className="w-full font-medium text-lg mt-4"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(trimmed) }}
        />
      );
    }

    // List item: "*   **" or "*   text"
    if (/^\*   /.test(line)) {
      return (
        <p
          key={index}
          className="w-full font-medium mt-1 text-text-secondary"
          dangerouslySetInnerHTML={{ __html: parseMarkdown(trimmed) }}
        />
      );
    }

    // Nested list: "    *   " or "        *   " or "        *   `"
    if (/^ {4,}(\*   )/.test(line)) {
      return (
        <div key={index} className="flex items-center gap-2 w-full">
          <div>
            <ChevronRight className="size-4 text-primary" />
          </div>

          <p
            className="w-full text-text-secondary"
            dangerouslySetInnerHTML={{ __html: parseMarkdown(trimmed) }}
          />
        </div>
      );
    }

    // Default: paragraph
    return (
      <p
        key={index}
        className="w-full text-text-secondary"
        dangerouslySetInnerHTML={{ __html: parseMarkdown(trimmed) }}
      />
    );
  });
}
