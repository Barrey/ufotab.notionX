import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { Check } from 'lucide-react';
interface CodeBlockProps {
  code: string;
  onCopy: () => void;
}

export function CodeBlock({ code, onCopy }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code]);

  const handleCopy = () => {
    onCopy();
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
  };

  return (
    <pre className="!m-0 relative language-html" tabIndex={0}>
      <code ref={codeRef} className="block overflow-x-auto p-4 language-html">
        {code}
      </code>
      <button
        onClick={handleCopy}
        className="absolute right-2 top-2 bg-gray-800 hover:bg-gray-700 text-white px-4 py-1 rounded text-sm transition-colors"
      >
        {copied ? (
          <span className="flex items-center">
            <Check size={16} className="mr-1 text-orange-300" />
            Copied
          </span>
        ) : (
          'Copy'
        )}
      </button>
    </pre>
  );
}
