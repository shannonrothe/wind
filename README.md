# Wind

**Wind** is an open-source component library built on top of [React](https://reactjs.org) and [TailwindCSS](https://tailwindcss.com).

Wind provides a number of default components for use in your projects. The following components are currently available:

- Button

## Usage and Installation

To install Wind, you must have Tailwind running in your project. Run the following to install the package:

**NPM**

```bash
npm install wind
```

**Yarn**

```bash
yarn add wind
```

Installing Wind will expose all available components for your use. Below are some snippets to get started.

### Button

```tsx
import React from "react";
import { Button } from "wind";

export const App = () => {
  return <Button>Button</Button>;
};
```

## Bugs

If you find any bugs or issues, please create an issue on the [repository](https://github.com/shannonrothe/wind).
