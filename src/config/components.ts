
export interface ComponentConfig {
  href: string;
  title: string;
  description: string;
  total?: number;
}

const getComponentCount = (type: string) => {
  const files = import.meta.glob('../components/html/**/*.html');
  const filteredFiles = Object.keys(files).filter(file => file.includes(`/${type}/`));
  return filteredFiles.length;
}

export const components: ComponentConfig[] = [
  {
    href: '/components/buttons',
    title: 'Buttons',
    description: 'Explore our button collection with various styles and states.',
    total: getComponentCount('buttons'),
  },
  {
    href: '/components/selects',
    title: 'Selects',
    description: 'Select dropdowns with different styles and variations.',
    total: getComponentCount('selects'),
  },
  {
    href: '/components/avatars',
    title: 'Avatars',
    description: 'Display user avatars with different shapes and sizes.',
    total: getComponentCount('avatars'),
  },
  {
    href: '/components/badges',
    title: 'Badges',
    description: 'Small status indicators for users and content.',
    total: getComponentCount('badges'),
  },
  {
    href: '/components/breadcrumbs',
    title: 'Breadcrumbs',
    description: 'Display the current page location within a navigational hierarchy.',
    total: getComponentCount('breadcrumbs'),
  },
  {
    href: '/components/cards',
    title: 'Cards',
    description: 'Display content in a flexible and extensible container.',
    total: getComponentCount('cards'),
  },
  {
    href: '/components/forms',
    title: 'Forms',
    description: 'Form elements for collecting and validating user input.',
    total: getComponentCount('forms'),
  },
  {
    href: '/components/inputs',
    title: 'Inputs',
    description: 'Text fields and text areas for collecting user input.',
    total: getComponentCount('inputs'),
  },
  {
    href: '/components/lists',
    title: 'Lists',
    description: 'Display a list of items with various styles and layouts.',
    total: getComponentCount('lists'),
  },
  {
    href: '/components/modals',
    title: 'Modals',
    description: 'Dialog windows that overlay the main content.',
    total: getComponentCount('modals'),
  },
  {
    href: '/components/paginations',
    title: 'Paginations',
    description: 'Navigate between pages of content.',
    total: getComponentCount('paginations'),
  },
  {
    href: '/components/radios',
    title: 'Radios',
    description: 'Select one option from a list of options.',
    total: getComponentCount('radios'),
  },
  {
    href: '/components/tables',
    title: 'Tables',
    description: 'Display data in a tabular format.',
    total: getComponentCount('tables'),
  },
  {
    href: '/components/tabs',
    title: 'Tabs',
    description: 'Organize content into separate views.',
    total: getComponentCount('tabs'),
  },
  {
    href: '/components/toggles',
    title: 'Toggles',
    description: 'Switch between two states.',
    total: getComponentCount('toggles'),
  },
  {
    href: '/components/icons',
    title: 'Icons',
    description: 'List of icon libraries.',
  },
  {
    href: '/components/progressbars',
    title: 'Progress Bars',
    description: 'Display the progress bar.',
    total: getComponentCount('progressbars'),
  },
  {
    href: '/components/checboxes',
    title: 'Checboxes',
    description: 'Select multiple options from a list.',
    total: getComponentCount('checkboxes'),
  }
].sort((a, b) => a.title.localeCompare(b.title));