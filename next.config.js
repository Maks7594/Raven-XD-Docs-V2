const path = require('node:path'); // Import the path module
const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  standalone: true,
});

module.exports = withNextra();