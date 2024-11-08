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
  }
];