import { useState, useEffect } from 'react';
import { ViewControls } from './ViewControls';
import { CodeBlock } from './CodeBlock';
import { DarkModeToggle } from './DarkModeToggle';
import components from '../figma/components';

interface PreviewProps {
  code: string;
  title: string;
  hideCode?: boolean;
  path?: string;
}

const viewportClasses = {
  desktop: 'w-full',
  tablet: 'w-[768px]',
  mobile: 'w-[375px]',
};

export function Preview({
  code,
  title,
  hideCode = false,
  path = '',
}: PreviewProps) {
  const [view, setView] = useState<'desktop' | 'tablet' | 'mobile'>('desktop');
  const [copied, setCopied] = useState(false);
  const [isCodeVisible, setIsCodeVisible] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleCopyToFigma = async () => {
    const [pathComponent, fileComponent] = path.split('/').slice(-2);
    const component = components.find((c) => c.path === pathComponent);

    if (!component) {
      alert('Component not found');
      return;
    }

    const figmaComponent = component.figma_components.find(
      (c) => c.path === fileComponent
    );

    if (!figmaComponent) {
      console.error('Figma component not found');
      return;
    }

    try {
      const blob = new Blob([figmaComponent.code], { type: 'text/html' });
      const item = new ClipboardItem({ 'text/html': blob });
      await navigator.clipboard.write([item]);
    } catch (err) {
      console.error('Failed to copy:', err);
      alert('Failed to copy Figma component.');
    }
  };

  const darkModeClass = isDark ? 'dark' : '';

  return (
    <div className={`${darkModeClass}`}>
      <div className="border dark:border-gray-700 rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-lg dark:shadow-gray-900/50 mb-8">
        <div className="border-b dark:border-gray-700 p-4 flex justify-between items-center">
          <h3 className="font-medium text-gray-700 dark:text-gray-200">{title}</h3>
          <div className="flex items-center gap-4">
            <DarkModeToggle isDark={isDark} onToggle={setIsDark} />
            <ViewControls currentView={view} onViewChange={setView} />
          </div>
        </div>

        <div className="flex justify-center h-full w-full bg-white dark:bg-gray-800 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#374151_1px,transparent_1px)] [background-size:16px_16px]">
          <div
            className={`${viewportClasses[view]} transition-all duration-300 border border-gray-200 dark:border-gray-700`}
          >
            <div
              className="rounded"
              dangerouslySetInnerHTML={{ __html: code }}
            />
          </div>
        </div>

        <div className="border-t dark:border-gray-700">
          {!hideCode && (
            <>
              <button
                onClick={() => setIsCodeVisible(!isCodeVisible)}
                className="w-full px-4 py-2 text-sm text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 flex items-center justify-between transition-colors"
              >
                <span>View Code</span>
                <svg
                  className={`w-4 h-4 transform transition-transform ${
                    isCodeVisible ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isCodeVisible && code !== '' && (
                <CodeBlock
                  code={code}
                  onCopy={handleCopy}
                  onCopyToFigma={handleCopyToFigma}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
