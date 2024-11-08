export interface ComponentConfig {
  href: string;
  title: string;
  description: string;
}

export const components: ComponentConfig[] = [
  {
    href: '/components/buttons',
    title: 'Buttons',
    description: 'Explore our button collection with various styles and states.',
  },
  {
    href: '/components/selects',
    title: 'Selects',
    description: 'Select dropdowns with different styles and variations.',
  },
  {
    href: '/components/avatars',
    title: 'Avatars',
    description: 'Display user avatars with different shapes and sizes.',
  },
  {
    href: '/components/badges',
    title: 'Badges',
    description: 'Small status indicators for users and content.',
  },
  {
    href: '/components/breadcrumbs',
    title: 'Breadcrumbs',
    description: 'Display the current page location within a navigational hierarchy.',
  },
  {
    href: '/components/cards',
    title: 'Cards',
    description: 'Display content in a flexible and extensible container.',
  },
  {
    href: '/components/forms',
    title: 'Forms',
    description: 'Form elements for collecting and validating user input.',
  },
  {
    href: '/components/inputs',
    title: 'Inputs',
    description: 'Text fields and text areas for collecting user input.',
  },
  {
    href: '/components/lists',
    title: 'Lists',
    description: 'Display a list of items with various styles and layouts.',
  }
].sort((a, b) => a.title.localeCompare(b.title));