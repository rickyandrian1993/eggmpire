# Divider Component Documentation

## Overview

The `Divider` component is a flexible, customizable horizontal line with centered text. It's perfect for separating sections, creating visual hierarchy, and adding design flair to your pages.

## Location

```
app/components/common/Divider.tsx
```

## Usage

### Basic Usage

```jsx
import Divider from "@/app/components/common/Divider";

export default function MyComponent() {
  return (
    <div>
      <Divider>Section Title</Divider>
    </div>
  );
}
```

### Examples

#### 1. Simple Line (No Text)

```jsx
<Divider />
```

Renders a plain horizontal divider line.

#### 2. With Text

```jsx
<Divider>What Is EggMpire Token</Divider>
```

Renders a divider with centered text.

#### 3. Different Spacing

```jsx
{
  /* Small */
}
<Divider spacing="sm">or</Divider>;

{
  /* Medium (default) */
}
<Divider spacing="md">Features</Divider>;

{
  /* Large */
}
<Divider spacing="lg">TOKENOMICS</Divider>;
```

#### 4. Custom Colors

```jsx
<Divider
  lineColor="border-blue-400 dark:border-blue-600"
  textColor="text-blue-600 dark:text-blue-400"
>
  Custom Styled
</Divider>
```

#### 5. Custom Class Names

```jsx
<Divider className="my-12">Large Margin</Divider>
```

## Props

### `children?` (ReactNode)

- **Type**: `ReactNode`
- **Default**: `undefined`
- **Description**: Text or content to display in the center of the divider

### `className?` (string)

- **Type**: `string`
- **Default**: `undefined`
- **Description**: Additional CSS classes to apply to the container

### `lineColor?` (string)

- **Type**: `string`
- **Default**: `"border-gray-300 dark:border-gray-700"`
- **Description**: Tailwind classes for the divider line color
- **Examples**:
  - `"border-blue-400 dark:border-blue-600"`
  - `"border-red-300 dark:border-red-700"`
  - `"border-primary dark:border-blue-400"`

### `textColor?` (string)

- **Type**: `string`
- **Default**: `"text-gray-700 dark:text-gray-300"`
- **Description**: Tailwind classes for the text color
- **Examples**:
  - `"text-blue-600 dark:text-blue-400"`
  - `"text-red-600 dark:text-red-400"`
  - `"text-primary dark:text-blue-400"`

### `spacing?` (enum)

- **Type**: `"sm" | "md" | "lg"`
- **Default**: `"md"`
- **Description**: Padding and text size for the center content
- **Values**:
  - `"sm"`: `px-4 py-2 text-sm`
  - `"md"`: `px-6 py-3 text-base`
  - `"lg"`: `px-8 py-4 text-lg`

## Styling

The component uses Tailwind CSS for styling and supports dark mode automatically. The default colors are:

- **Light Mode**: Gray 300 border, Gray 700 text
- **Dark Mode**: Gray 700 border, Gray 300 text

## Real-World Examples

### Example 1: Section Separator

```jsx
<section>
  <h2>Introduction</h2>
  <p>Some content here...</p>

  <Divider>Key Features</Divider>

  <h2>Features</h2>
  <p>Feature list here...</p>
</section>
```

### Example 2: Authentication Page

```jsx
<div className="space-y-6">
  <button>Sign in with Google</button>
  <button>Sign in with Twitter</button>

  <Divider spacing="sm">or</Divider>

  <input type="email" placeholder="Email" />
  <button>Sign in</button>
</div>
```

### Example 3: Product Features

```jsx
<div className="space-y-8">
  <p>Introduction paragraph</p>

  <Divider spacing="lg">Why Choose EggMpire</Divider>

  <div className="grid md:grid-cols-3 gap-6">{/* Feature cards */}</div>
</div>
```

### Example 4: Compare Sections

```jsx
<div>
  <h3>Before</h3>
  <p>Traditional finance is complex...</p>

  <Divider>vs</Divider>

  <h3>After</h3>
  <p>With EggMpire, everything is simple...</p>
</div>
```

### Example 5: Timeline or Process

```jsx
<div className="space-y-4">
  <div>Step 1: Sign up</div>
  <Divider />
  <div>Step 2: Verify email</div>
  <Divider />
  <div>Step 3: Start trading</div>
</div>
```

## Customization Guide

### Changing Default Colors

To change the default colors globally, edit the component:

```jsx
// Before
const lineColor = "border-gray-300 dark:border-gray-700";
const textColor = "text-gray-700 dark:text-gray-300";

// After
const lineColor = "border-blue-300 dark:border-blue-700";
const textColor = "text-blue-700 dark:text-blue-300";
```

### Adding Custom Spacing

Add new spacing options by extending the `spacing` type:

```jsx
const spacingClasses = {
  xs: "px-2 py-1 text-xs", // New
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
  xl: "px-12 py-5 text-xl", // New
};
```

## Accessibility

The component:

- Uses semantic HTML
- Supports dark mode automatically
- Has good color contrast by default
- Is keyboard accessible
- Works with screen readers

## Browser Support

The component works in all modern browsers:

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## Performance

The component is lightweight and:

- Uses no external dependencies
- Has minimal re-renders
- Supports memoization if needed:

```jsx
import { memo } from "react";

export default memo(Divider);
```

## Tips & Tricks

### Combining with Other Components

```jsx
<Divider>
  <span className="font-bold text-primary">Premium Features</span>
</Divider>
```

### Using Icons

```jsx
<Divider>
  <span className="flex items-center gap-2">
    <span>⭐</span>
    Top Rated
    <span>⭐</span>
  </span>
</Divider>
```

### Animated Version (Future Enhancement)

```jsx
// Could add animation prop
<Divider animated>Animated Divider</Divider>
```

## Troubleshooting

### Text Not Centered?

Make sure the container has enough width or use `w-full`:

```jsx
<div className="w-full">
  <Divider>Centered</Divider>
</div>
```

### Colors Not Showing in Dark Mode?

Ensure dark mode is properly configured in `tailwind.config.ts` and you're using `dark:` prefixed colors.

### Line Too Thin?

The default is `border-t-2`. To make it thicker, edit the component:

```jsx
<div className={cn("flex-1 border-t-4", lineColor)} /> // Changed from border-t-2
```

## Related Components

- `Button.tsx` - Action buttons
- `Header.tsx` - Navigation header
- `Footer.tsx` - Footer section

## Changelog

### v1.0.0

- Initial release
- Basic divider with text
- Support for size variants
- Dark mode support
- Custom color props

---

For more examples, check `DividerDemo.tsx` or visit the component showcase page.

