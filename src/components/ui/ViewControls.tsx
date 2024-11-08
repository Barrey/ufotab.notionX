import { Monitor, Tablet, Smartphone } from 'lucide-react';

interface ViewControlsProps {
  currentView: 'desktop' | 'tablet' | 'mobile';
  onViewChange: (view: 'desktop' | 'tablet' | 'mobile') => void;
}

export function ViewControls({ currentView, onViewChange }: ViewControlsProps) {
  return (
    <div className="flex gap-2">
      <button
        onClick={() => onViewChange('mobile')}
        className={`p-2 rounded transition-colors ${
          currentView === 'mobile'
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Smartphone size={16} />
      </button>
      <button
        onClick={() => onViewChange('tablet')}
        className={`p-2 rounded transition-colors ${
          currentView === 'tablet'
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Tablet size={16} />
      </button>
      <button
        onClick={() => onViewChange('desktop')}
        className={`p-2 rounded transition-colors ${
          currentView === 'desktop'
            ? 'bg-blue-100 text-blue-600'
            : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        <Monitor size={16} />
      </button>
    </div>
  );
}
