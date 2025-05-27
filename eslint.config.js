import { FlatCompat } from '@eslint/eslintrc';
import pluginNext from '@next/eslint-plugin-next';

const compat = new FlatCompat({
  plugins: {
    '@next/next': pluginNext,
  },
});

export default [
  ...compat.extends('next/core-web-vitals'),
  ...compat.extends('next/typescript'),
];
