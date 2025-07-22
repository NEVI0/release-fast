import { ChevronRight } from 'lucide-react';

interface MarkdownProps {
  text: string;
}

export default function Markdown({ text }: MarkdownProps) {
  return text.split('\n').map((line, index) => {
    // **
    // *   **
    //     *
    //     *   **
    //         *   `

    if (line.startsWith('**')) {
      return (
        <h4 key={index} className="w-full font-medium text-lg">
          {line.replaceAll('**', '')}
        </h4>
      );
    }

    if (line.startsWith('*   **')) {
      return (
        <p key={index} className="w-full font-medium">
          {line.replaceAll('*', '')}
        </p>
      );
    }

    if (
      line.startsWith('    *   ') ||
      line.startsWith('        *   ') ||
      line.startsWith('        *   `')
    ) {
      return (
        <div key={index} className="flex items-center gap-2 w-full">
          <div>
            <ChevronRight className="size-5 text-primary" />
          </div>

          <p className="w-full text-text-secondary">
            {line.replaceAll('*', '').replaceAll('`', '')}
          </p>
        </div>
      );
    }

    return (
      <p key={index} className="w-full text-text-secondary">
        {line}
      </p>
    );
  });
}
