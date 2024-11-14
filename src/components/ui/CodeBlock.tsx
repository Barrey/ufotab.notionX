import { useEffect, useRef, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import { Check } from 'lucide-react';

interface CodeBlockProps {
  code: string;
  onCopy: () => void;
  onCopyToFigma: () => void;
}

export function CodeBlock({ code, onCopy, onCopyToFigma }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);
  const [copiedToFigma, setCopiedToFigma] = useState(false);

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

  const handleCopyToFigma = () => {
    onCopyToFigma();
    setCopiedToFigma(true);
    setTimeout(() => setCopiedToFigma(false), 2000);
  };

  return (
    <pre className="!m-0 relative language-html" tabIndex={0}>
      <code ref={codeRef} className="block overflow-x-auto p-4 language-html">
        {code}
      </code>
      <div className="absolute right-2 top-2 flex gap-4">
        <button
          onClick={handleCopy}
          className="bg-gray-800 border border-white hover:bg-gray-700 text-white px-4 py-1 rounded text-sm transition-colors"
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
        <div className="relative">
          <div className="absolute -inset-2">
            <div
              className="w-full h-full mx-auto rounded-3xl opacity-30 blur-lg filter"
              style={{
                background:
                  'linear-gradient(90deg, #44ff9a -0.55%, #44b0ff 22.86%, #8b44ff 48.36%, #ff6644 73.33%, #ebff70 99.34%)',
              }}
            ></div>
          </div>
          <div className="relative overflow-hidden bg-white shadow-xl rounded">
            <button
              onClick={handleCopyToFigma}
              className="border border-white inline-flex items-center justify-center w-full text-sm px-4 py-1 font-semibold text-white transition-all duration-200 rounded bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
            >
              {copiedToFigma ? (
                <span className="flex items-center">
                  <Check size={16} className="mr-1 text-orange-300" />
                  Copied
                </span>
              ) : (
                'Copy to Figma'
              )}
            </button>
          </div>
        </div>
      </div>
    </pre>
  );
}
