import { ChevronRight } from 'lucide-react';

interface MarkdownProps {
  text: string;
}

export default function Markdown({ text }: MarkdownProps) {
  function handleCleanLine(line: string) {
    return line.replaceAll('*', '').replaceAll('`', '');
  }

  return text.split('\n').map((line, index) => {
    // **
    // *   **
    //     *
    //     *   **
    //         *   `

    if (line.startsWith('**')) {
      return (
        <h4 key={index} className="w-full font-medium text-lg">
          {handleCleanLine(line)}
        </h4>
      );
    }

    if (line.startsWith('*   **')) {
      return (
        <p key={index} className="w-full font-medium mt-2">
          {handleCleanLine(line)}
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
            <ChevronRight className="size-4 text-primary" />
          </div>

          <p className="w-full text-text-secondary">{handleCleanLine(line)}</p>
        </div>
      );
    }

    return (
      <p key={index} className="w-full text-text-secondary">
        {handleCleanLine(line)}
      </p>
    );
  });
}
