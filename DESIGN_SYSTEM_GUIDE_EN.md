# Taskio Design System - Comprehensive Design Guide

## 📋 Table of Contents
1. [Design Style Name & Philosophy](#design-style-name--philosophy)
2. [Core Design Principles](#core-design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Shadows & Borders](#shadows--borders)
6. [Sparkles Effect - Twinkling Around Titles](#sparkles-effect---twinkling-around-titles)
7. [Interactive Grid Pattern - Hover Effect](#interactive-grid-pattern---hover-effect)
8. [Core Components](#core-components)
9. [Animations & Transitions](#animations--transitions)
10. [Technologies & Dependencies](#technologies--dependencies)
11. [How to Apply to Other Projects](#how-to-apply-to-other-projects)

---

## Design Style Name & Philosophy

### 🎨 **Neobrutalism (Neo-Brutalist Design)**

This design follows the **Neobrutalism** style - a modern UI design trend inspired by 1950s-1970s Brutalist architecture, but modernized with bright colors and a more playful feel.

### Key Identifying Features:
- ✅ **Thick black borders**: `border-2 border-black`
- ✅ **Bold box shadows**: Creating flat 3D effects
- ✅ **Bright, vibrant colors**: No complex gradients
- ✅ **Bold, clear typography**: Large font weights (700-900)
- ✅ **No soft rounded corners**: Sharp or slightly rounded corners
- ✅ **Clear hover effects**: Immediate visual feedback on interaction
- ✅ **Asymmetry**: Some elements are slightly skewed or rotated

---

## Core Design Principles

### 1. **Contrast is King**
- Always use thick black borders for high contrast
- Light background + black border = easy to see and distinguish

### 2. **Flat but Layered**
- No complex gradients or blur effects
- Create depth using simple box-shadows

### 3. **Playful & Bold**
- Dare to use bright colors
- Dare to use large, bold text
- Fun animations but not over the top

### 4. **Clear Hierarchy**
- Use size, weight, and color to distinguish importance levels
- Call-to-action buttons must stand out clearly

---

## Color System

### Color Palette (OKLCH Color Space)

This project uses **OKLCH color space** - a modern color space superior to RGB/HSL, providing more consistent and easily adjustable colors.

#### Light Mode Colors:
```css
--background: oklch(1 0 0);              /* White background */
--foreground: oklch(0.145 0 0);          /* Near black text */
--primary: rgb(147, 197, 253);           /* Blue-300 - primary color */
--border: oklch(0.922 0 0);              /* Light gray borders */
--card: oklch(1 0 0);                    /* White card background */
```

#### Dark Mode Colors:
```css
--background: oklch(0.145 0 0);          /* Dark background */
--foreground: oklch(0.985 0 0);          /* White text */
--primary: oklch(0.922 0 0);             /* Light primary color */
--border: oklch(1 0 0 / 10%);            /* Subtle borders */
```

### Primary Colors Used:
- **Primary Blue**: `bg-blue-300` (#93C5FD) - For buttons, highlights
- **Secondary Blue**: `bg-blue-100` (#DBEAFE) - For cards, backgrounds
- **Accent Blue**: `bg-blue-400` (#60A5FA) - For hover states
- **Black**: `#000000` - For borders, text
- **White**: `#FFFFFF` - For backgrounds, cards

### Category Colors (for Task categories):
```javascript
{
  pink: { bg: "bg-pink-100", text: "text-pink-600" },
  lime: { bg: "bg-lime-100", text: "text-lime-600" },
  amber: { bg: "bg-amber-100", text: "text-amber-600" },
  zinc: { bg: "bg-zinc-100", text: "text-zinc-600" },
  sky: { bg: "bg-sky-100", text: "text-sky-600" }
}
```

---

## Typography

### Font Family
```css
font-family: "Outfit", sans-serif;
```

**Outfit** is a modern sans-serif font with multiple weights (100-900), perfect for Neobrutalism.

### Font Weights Used:
- **Regular (400)**: Body text, descriptions
- **Medium (500-600)**: Subheadings, labels
- **Bold (700)**: Headings, buttons
- **Extra Bold (800)**: Important headings
- **Black (900)**: Hero titles, comic text

### Font Sizes:
```css
/* Headings */
text-6xl (3.75rem)  - Hero title
text-5xl (3rem)     - Page title
text-4xl (2.25rem)  - Section heading
text-3xl (1.875rem) - Card title
text-xl (1.25rem)   - Subheading

/* Body */
text-base (1rem)    - Normal text
text-sm (0.875rem)  - Small text
text-xs (0.75rem)   - Labels, tags
```

### Text Stroke Effect (for Comic Text):
```css
-webkit-text-stroke: ${fontSize * 0.35}px #000000;
```

---

## Shadows & Borders

### Border Style
**All elements use:**
```css
border: 2px solid black;
border-radius: 6px; /* Or rounded-lg depending on component */
```

### Box Shadows

#### Primary Shadow:
```css
--shadow-primary: 5px 6px 0px -1px #000000;
/* Offset X: 5px
   Offset Y: 6px
   Blur: 0px (no blur!)
   Spread: -1px
   Color: Black */
```

**Usage:**
```css
.button {
  box-shadow: 5px 6px 0px -1px #000000;
}

/* On hover, element moves and shadow disappears */
.button:hover {
  transform: translate(5px, 6px);
  box-shadow: none;
}
```

#### Secondary Shadow:
```css
--shadow-secondary: 3px 3px 0px -1px #000000;
```

#### Secondary Shadow Opposite (left side):
```css
--shadow-secondary-opposite: -3px 3px 0px -1px #000000;
```

**Characteristics of Neobrutalist shadows:**
- ❌ **NO** blur
- ✅ Shadows are solid, sharp, and clear
- ✅ Only X and Y offset
- ✅ Pure black color (#000000)

---

## Sparkles Effect - Twinkling Around Titles

### 🌟 Detailed Description

This is the **SparklesText** effect - creates small twinkling stars around text to draw attention.

### How It Works:

#### 1. Component Structure:
```tsx
<SparklesText
  sparklesCount={10}           // Number of stars
  colors={{
    first: "#9E7AFF",          // Purple
    second: "#FE8BBB"          // Pink
  }}
>
  Taskio!
</SparklesText>
```

#### 2. Sparkle Element (Star):
- An SVG star shape
- Size: 21x21px
- 8-pointed star path

#### 3. Animation Properties:
```javascript
animate={{
  opacity: [0, 1, 0],          // Transparent → visible → transparent
  scale: [0, scale, 0],        // Small → large → small
  rotate: [75, 120, 150],      // Continuous rotation
}}
transition={{
  duration: 0.8,               // Each cycle 0.8s
  repeat: Infinity,            // Infinite loop
  delay                        // Each star has different delay (0-2s)
}}
```

#### 4. Random Generation Logic:
```javascript
const generateStar = () => ({
  id: unique_id,
  x: `${Math.random() * 100}%`,      // Random X position (0-100%)
  y: `${Math.random() * 100}%`,      // Random Y position (0-100%)
  color: Math.random() > 0.5 ? colors.first : colors.second,  // Random color
  delay: Math.random() * 2,          // Random delay (0-2s)
  scale: Math.random() * 1 + 0.3,    // Random scale (0.3-1.3)
  lifespan: Math.random() * 10 + 5   // Lifespan (5-15s)
});
```

#### 5. Lifecycle Management:
- Each sparkle has a **lifespan**
- Every 100ms, lifespan decreases by 0.1
- When lifespan <= 0, that sparkle is replaced with a new one at a new position

### Detailed Implementation Code:

**File: `sparkles-text.tsx`**
```tsx
import { motion } from "motion/react";
import { useEffect, useState } from "react";

interface Sparkle {
  id: string;
  x: string;
  y: string;
  color: string;
  delay: number;
  scale: number;
  lifespan: number;
}

const Sparkle = ({ id, x, y, color, delay, scale }) => {
  return (
    <motion.svg
      key={id}
      className="pointer-events-none absolute z-20"
      initial={{ opacity: 0, left: x, top: y }}
      animate={{
        opacity: [0, 1, 0],
        scale: [0, scale, 0],
        rotate: [75, 120, 150],
      }}
      transition={{ duration: 0.8, repeat: Infinity, delay }}
      width="21"
      height="21"
      viewBox="0 0 21 21"
    >
      <path
        d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
        fill={color}
      />
    </motion.svg>
  );
};

export const SparklesText = ({
  children,
  colors = { first: "#9E7AFF", second: "#FE8BBB" },
  className,
  sparklesCount = 10,
}) => {
  const [sparkles, setSparkles] = useState([]);

  useEffect(() => {
    const generateStar = () => {
      const starX = `${Math.random() * 100}%`;
      const starY = `${Math.random() * 100}%`;
      const color = Math.random() > 0.5 ? colors.first : colors.second;
      const delay = Math.random() * 2;
      const scale = Math.random() * 1 + 0.3;
      const lifespan = Math.random() * 10 + 5;
      const id = `${starX}-${starY}-${Date.now()}`;
      return { id, x: starX, y: starY, color, delay, scale, lifespan };
    };

    const initializeStars = () => {
      const newSparkles = Array.from({ length: sparklesCount }, generateStar);
      setSparkles(newSparkles);
    };

    const updateStars = () => {
      setSparkles((currentSparkles) =>
        currentSparkles.map((star) => {
          if (star.lifespan <= 0) {
            return generateStar();
          } else {
            return { ...star, lifespan: star.lifespan - 0.1 };
          }
        })
      );
    };

    initializeStars();
    const interval = setInterval(updateStars, 100);

    return () => clearInterval(interval);
  }, [colors.first, colors.second, sparklesCount]);

  return (
    <div className="text-6xl font-bold">
      <span className="relative inline-block">
        {sparkles.map((sparkle) => (
          <Sparkle key={sparkle.id} {...sparkle} />
        ))}
        <strong className="text-blue-400">{children}</strong>
      </span>
    </div>
  );
};
```

### Customizing Sparkles Effect:

#### Change number of sparkles:
```tsx
<SparklesText sparklesCount={20}>Your Text</SparklesText>
```

#### Change colors:
```tsx
<SparklesText colors={{ first: "#FF0000", second: "#00FF00" }}>
  Your Text
</SparklesText>
```

#### Change animation speed:
```javascript
// In Sparkle component, change duration:
transition={{ duration: 1.5, repeat: Infinity, delay }}  // Slower
transition={{ duration: 0.5, repeat: Infinity, delay }}  // Faster
```

#### Change sparkle size:
```javascript
// Change scale range:
const scale = Math.random() * 2 + 0.5;  // Larger (0.5-2.5)
const scale = Math.random() * 0.5 + 0.2; // Smaller (0.2-0.7)
```

### Best Practices:
- ✅ Use for hero titles, important CTAs
- ✅ Optimal sparkle count: 8-15
- ✅ Sparkle colors should contrast with background
- ❌ Don't use too many on same page (eye strain)
- ❌ Don't use for body text

---

## Interactive Grid Pattern - Hover Effect

### 🎯 Detailed Description

This is the **InteractiveGridPattern** effect - creates a grid background with squares that light up on hover.

### How It Works:

#### 1. Component Structure:
```tsx
<InteractiveGridPattern
  width={60}                          // Width of each square (px)
  height={60}                         // Height of each square (px)
  squares={[25, 25]}                  // [horizontal count, vertical count]
  className="absolute inset-0"        // Positioning
  squaresClassName="hover:fill-blue-200/30"  // Hover effect
/>
```

#### 2. Grid Generation:
```javascript
// Total squares = horizontal * vertical
const totalSquares = 25 * 25 = 625 squares

// Each square is created using SVG <rect>
Array.from({ length: horizontal * vertical }).map((_, index) => {
  const x = (index % horizontal) * width;      // X position
  const y = Math.floor(index / horizontal) * height;  // Y position

  return (
    <rect
      x={x}
      y={y}
      width={width}
      height={height}
      // ... styles and events
    />
  );
});
```

#### 3. Hover Interaction:
```javascript
const [hoveredSquare, setHoveredSquare] = useState(null);

// On hover:
onMouseEnter={() => setHoveredSquare(index)}
onMouseLeave={() => setHoveredSquare(null)}

// Styling based on state:
className={cn(
  "stroke-gray-400/20",
  "transition-all duration-100 ease-in-out",
  "[&:not(:hover)]:duration-1000",  // When NOT hovering, slower transition
  hoveredSquare === index
    ? "fill-gray-300/30"             // Hovering: fill color
    : "fill-transparent"             // Not hovering: transparent
)}
```

#### 4. Transition Timing:
- **On hover in**: `duration-100` (100ms) - fast
- **On hover out**: `duration-1000` (1000ms) - slow, smooth

This creates a beautiful "light up fast, fade out slow" effect.

### Detailed Implementation Code:

**File: `interactive-grid-pattern.tsx`**
```tsx
import { cn } from "@/lib/utils";
import React, { useState } from "react";

interface InteractiveGridPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  squares?: [number, number]; // [horizontal, vertical]
  className?: string;
  squaresClassName?: string;
}

export function InteractiveGridPattern({
  width = 60,
  height = 60,
  squares = [25, 25],
  className,
  squaresClassName,
  ...props
}: InteractiveGridPatternProps) {
  const [horizontal, vertical] = squares;
  const [hoveredSquare, setHoveredSquare] = useState<number | null>(null);

  return (
    <svg
      width={width * horizontal}
      height={height * vertical}
      className={cn(
        "absolute inset-0 h-full w-full border border-gray-400/30",
        className
      )}
      {...props}
    >
      {Array.from({ length: horizontal * vertical }).map((_, index) => {
        const x = (index % horizontal) * width;
        const y = Math.floor(index / horizontal) * height;
        return (
          <rect
            key={index}
            x={x}
            y={y}
            width={width}
            height={height}
            strokeWidth={0.3}
            className={cn(
              "stroke-gray-400/20 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000",
              hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
              squaresClassName
            )}
            onMouseEnter={() => setHoveredSquare(index)}
            onMouseLeave={() => setHoveredSquare(null)}
          />
        );
      })}
    </svg>
  );
}
```

### Usage in Layout:

```tsx
<div className="relative h-full w-full overflow-hidden">
  {/* Grid pattern in background */}
  <InteractiveGridPattern
    squaresClassName="hover:fill-blue-200/30"
  />

  {/* Gradient fade at top for smoother appearance */}
  <div className="absolute inset-x-0 top-0 h-10 bg-gradient-to-b from-white to-transparent pointer-events-none" />

  {/* Your content */}
  <div className="relative z-10">
    Your content here
  </div>
</div>
```

### Customizing Grid Pattern:

#### 1. Change square size:
```tsx
<InteractiveGridPattern
  width={40}       // Smaller squares
  height={40}
  squares={[30, 30]}  // More squares
/>

<InteractiveGridPattern
  width={100}      // Larger squares
  height={100}
  squares={[15, 15]}  // Fewer squares
/>
```

#### 2. Change hover color:
```tsx
{/* Blue */}
<InteractiveGridPattern squaresClassName="hover:fill-blue-300/40" />

{/* Pink */}
<InteractiveGridPattern squaresClassName="hover:fill-pink-200/30" />

{/* Yellow */}
<InteractiveGridPattern squaresClassName="hover:fill-yellow-200/25" />
```

#### 3. Change border color:
```tsx
<InteractiveGridPattern
  className="border border-blue-400/50"  {/* Instead of gray */}
/>
```

#### 4. Change transition speed:
```javascript
// In component, change className:
className={cn(
  "stroke-gray-400/20",
  "transition-all duration-200 ease-in-out",      // Hover in: 200ms
  "[&:not(:hover)]:duration-500",                 // Hover out: 500ms
  hoveredSquare === index ? "fill-gray-300/30" : "fill-transparent",
  squaresClassName
)}
```

### Advanced Techniques:

#### 1. Add blur effect on hover:
```tsx
<rect
  className={cn(
    "stroke-gray-400/20 transition-all duration-100",
    hoveredSquare === index
      ? "fill-blue-200/30 blur-[0.5px]"  // Add slight blur
      : "fill-transparent"
  )}
/>
```

#### 2. Ripple effect (surrounding squares also light up):
```javascript
const getDistanceFromHovered = (index, hoveredIndex) => {
  if (hoveredIndex === null) return Infinity;

  const hoveredX = hoveredIndex % horizontal;
  const hoveredY = Math.floor(hoveredIndex / horizontal);
  const currentX = index % horizontal;
  const currentY = Math.floor(index / horizontal);

  return Math.abs(hoveredX - currentX) + Math.abs(hoveredY - currentY);
};

// In render:
const distance = getDistanceFromHovered(index, hoveredSquare);
const opacity = distance === 0 ? 0.3 : distance === 1 ? 0.15 : 0;

<rect
  className={cn(
    "stroke-gray-400/20 transition-all duration-100"
  )}
  style={{ fill: `rgba(147, 197, 253, ${opacity})` }}
/>
```

### Performance Optimization:

#### Reduce square count for mobile:
```tsx
import { useEffect, useState } from 'react';

const useGridSize = () => {
  const [gridSize, setGridSize] = useState([25, 25]);

  useEffect(() => {
    const updateSize = () => {
      if (window.innerWidth < 768) {
        setGridSize([15, 15]);  // Mobile: fewer squares
      } else {
        setGridSize([25, 25]);  // Desktop: more squares
      }
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return gridSize;
};

// Usage:
const gridSize = useGridSize();
<InteractiveGridPattern squares={gridSize} />
```

### Best Practices:
- ✅ Use for hero sections, landing pages
- ✅ Set `pointer-events-none` on overlay content so hover still works
- ✅ Use low opacity (0.2-0.4) to not overpower content
- ✅ Test on mobile (may need to reduce square count)
- ❌ Don't use too many colors
- ❌ Don't make transitions too fast (causes flickering)

---

## Core Components

### 1. Button Component

**Variants:**

#### Default Button:
```tsx
<Button variant="default">
  Get Started
</Button>
```
**Styles:**
```css
background: bg-blue-300
border: 2px solid black
shadow: 5px 6px 0px -1px #000000
hover: translate(5px, 6px) + shadow-none
```

#### Opposite Default:
```tsx
<Button variant="oppositeDefault">
  Click Me
</Button>
```
**Styles:**
```css
background: bg-white
color: text-black
border: 2px solid black
shadow: 5px 6px 0px -1px #000000
```

#### No Shadow:
```tsx
<Button variant="noShadow">
  Submit
</Button>
```
**Styles:**
```css
background: bg-blue-300
border: 2px solid black
hover: bg-blue-400 (smooth transition)
NO shadow
```

#### Opposite No Shadow:
```tsx
<Button variant="oppositeNoShadow">
  Watch Demo
</Button>
```
**Styles:**
```css
background: bg-white
color: text-blue-400
border: 2px solid blue-400
hover: bg-blue-400 + text-white
transition: 500ms
```

**Button Code:**
```tsx
const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-[6px] whitespace-nowrap text-sm font-base ring-offset-white transition-all gap-2",
  {
    variants: {
      variant: {
        default:
          "text-black bg-blue-300 border-2 border-black shadow-primary hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none",
        oppositeDefault:
          "text-black bg-white border-2 border-black shadow-primary hover:translate-x-[5px] hover:translate-y-[5px] hover:shadow-none",
        oppositeNoShadow:
          "text-blue-400 bg-white border-2 border-blue-400 hover:bg-blue-400 hover:text-white transition-all duration-500",
        noShadow:
          "text-black bg-blue-300 border-2 border-black hover:bg-blue-400 transition-all duration-500",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3",
        lg: "h-11 px-8",
        icon: "size-10",
      },
    },
  }
);
```

### 2. Card Component

```tsx
<Card>
  <CardHeader>
    <CardTitle>Title Here</CardTitle>
    <CardDescription>Description here</CardDescription>
  </CardHeader>
  <CardContent>
    Content here
  </CardContent>
  <CardFooter>
    Footer here
  </CardFooter>
</Card>
```

**Styles:**
```css
background: bg-blue-100
border: 2px solid black
shadow: 3px 3px 0px -1px #000000
border-radius: rounded
padding: py-6 px-6
```

### 3. Comic Text Component

This is a special text component with comic book style effects.

```tsx
<ComicText
  fontSize={5}                    // rem units
  backgroundColor="white"
  dotColor="#93C5FD"
>
  TASKIO
</ComicText>
```

**Key Features:**
- Bold black text stroke
- Multi-layer drop shadow (black + blue)
- Halftone dots background pattern
- Skew transform: `skewX(-10deg)`
- Hover animation: scale + rotate

**Styles:**
```css
font-weight: 900
-webkit-text-stroke: ~1.75px #000000  /* Calculated from fontSize */
transform: skewX(-10deg)
filter: drop-shadow(5px 5px 0px #000000) drop-shadow(3px 3px 0px #2563EB)
background-image: radial-gradient(circle at 1.5px 1.5px, #93C5FD 1.5px, transparent 0)
background-size: 8px 8px
background-clip: text
-webkit-text-fill-color: transparent
```

**Animation:**
```javascript
initial={{ opacity: 1, scale: 0.5, rotate: -10 }}
animate={{ opacity: 1, scale: 1, rotate: -2 }}
whileHover={{ scale: 1.5, rotate: -3 }}
whileTap={{ scale: 0.95 }}
transition={{
  duration: 1.2,
  ease: [0.175, 0.885, 0.32, 1.275],  // Custom easing
  type: "spring"
}
```

### 4. Badge/Tag Component

```tsx
<div className="px-4 py-1 border-2 border-black rounded-[30px] bg-white shadow-secondary">
  <span className="text-sm font-bold">100% free no ads!</span>
</div>
```

### 5. CardIcon Component (Feature Card)

```tsx
<CardIcon
  title="Smart Task Management"
  desc="Organize tasks with priority..."
  icon={<CheckCircle />}
  bgColor="bg-red-600"
/>
```

**Styles:**
```css
/* Card wrapper */
border: 2px solid black
background: bg-white
shadow: -3px 3px 0px -1px #000000  /* Left shadow */
padding: py-10 px-5
border-radius: rounded-lg

/* Icon badge */
position: absolute
top: -24px  /* Protrudes above */
left: 12px
padding: px-4 py-4
border: 2px solid black
background: {bgColor}  /* Passed color */
border-radius: rounded-sm
```

---

## Animations & Transitions

### 1. AOS (Animate On Scroll)

The project uses **AOS library** for scroll animations.

**Import:**
```javascript
import AOS from 'aos';
import 'aos/dist/aos.css';

// Initialize
useEffect(() => {
  AOS.init({
    duration: 800,
    once: true,
    easing: 'ease-out'
  });
}, []);
```

**Animations used:**
```tsx
<div data-aos="zoom-in">Zoom in effect</div>
<div data-aos="fade-up">Fade up effect</div>
<div data-aos="fade-down">Fade down effect</div>
```

### 2. Framer Motion (Motion Library)

The project uses **motion/react** (a fork of Framer Motion).

#### Hover Animations:
```tsx
<motion.div
  whileHover={{ scale: 1.05 }}
  transition={{ duration: 0.2 }}
>
  Hover me
</motion.div>
```

#### Entry Animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Content
</motion.div>
```

### 3. Marquee Animation

**CSS Keyframes:**
```css
@keyframes marquee {
  0% { transform: translateX(0%); }
  100% { transform: translateX(-100%); }
}

@keyframes marquee2 {
  0% { transform: translateX(100%); }
  100% { transform: translateX(0%); }
}

.animate-marquee {
  animation: marquee 10s linear infinite;
}

.animate-marquee2 {
  animation: marquee2 10s linear infinite;
}
```

**Usage:**
```tsx
<div className="flex overflow-x-hidden">
  <div className="animate-marquee whitespace-nowrap">
    {items.map(item => <span>{item}</span>)}
  </div>
  <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
    {items.map(item => <span>{item}</span>)}
  </div>
</div>
```

### 4. Button Hover Effect

```css
/* Default state */
.button {
  box-shadow: 5px 6px 0px -1px #000000;
  transition: all 200ms ease;
}

/* Hover state */
.button:hover {
  transform: translate(5px, 6px);  /* Move exactly by shadow offset */
  box-shadow: none;                /* Shadow disappears */
}
```

This effect creates the feeling of the button being "pressed down".

### 5. Card Hover Effects

```tsx
<div className="transition-all duration-200 hover:shadow-md hover:scale-[1.02]">
  Card content
</div>
```

---

## Technologies & Dependencies

### Core Libraries:

```json
{
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "tailwindcss": "^4.1.13",
  "@tailwindcss/vite": "^4.1.13"
}
```

### Styling:
```json
{
  "tailwindcss": "^4.1.13",
  "class-variance-authority": "^0.7.1",  // Component variants
  "clsx": "^2.1.1",                       // Conditional classes
  "tailwind-merge": "^3.3.1",             // Merge Tailwind classes
  "tw-animate-css": "^1.3.8"              // Animation utilities
}
```

### Animations:
```json
{
  "motion": "^12.23.12",      // Framer Motion fork
  "aos": "^3.0.0-beta.6"      // Animate On Scroll
}
```

### UI Components:
```json
{
  "@radix-ui/react-dialog": "^1.1.15",
  "@radix-ui/react-checkbox": "^1.3.3",
  "@radix-ui/react-label": "^2.1.7",
  "@radix-ui/react-popover": "^1.1.15",
  "@radix-ui/react-select": "^2.2.6",
  "@radix-ui/react-tabs": "^1.1.13",
  "@radix-ui/react-toggle": "^1.1.10"
}
```

### Other:
```json
{
  "lucide-react": "^0.542.0",        // Icons
  "next-themes": "^0.4.6",           // Dark mode support
  "sonner": "^2.0.7"                 // Toast notifications
}
```

---

## How to Apply to Other Projects

### Step 1: Setup Dependencies

```bash
# Core
npm install react react-dom
npm install tailwindcss @tailwindcss/vite
npm install clsx tailwind-merge class-variance-authority

# Animations
npm install motion aos
npm install tw-animate-css

# UI Components (optional, as needed)
npm install @radix-ui/react-dialog @radix-ui/react-checkbox
npm install lucide-react
```

### Step 2: Setup Tailwind Config

For older projects using `tailwind.config.js`, you can keep it, but with Tailwind v4, configuration is in CSS.

**File: `index.css`**
```css
@import url("https://fonts.googleapis.com/css2?family=Outfit:wght@100..900&display=swap");
@import "tailwindcss";
@import "tw-animate-css";

:root {
  font-family: "Outfit", sans-serif;
  --radius: 0.625rem;
  --primary: rgb(147, 197, 253);
}

@theme inline {
  --shadow-primary: 5px 6px 0px -1px #000000;
  --shadow-secondary: 3px 3px 0px -1px #000000;
  --shadow-secondary-opposite: -3px 3px 0px -1px #000000;
}

@layer base {
  * {
    @apply border-border;
  }
  body {
    @apply bg-background text-foreground;
  }
}
```

### Step 3: Copy Components

Copy these components to your new project:

1. **`components/ui/button.tsx`**
2. **`components/ui/card.tsx`**
3. **`components/ui/sparkles-text.tsx`** ⭐
4. **`components/ui/interactive-grid-pattern.tsx`** 🎯
5. **`components/ui/comic-text.tsx`**
6. **`components/ui/marquee.tsx`**

### Step 4: Create Utils File

**File: `lib/utils.ts`**
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

### Step 5: Initialize AOS

**File: `App.tsx` or `main.tsx`**
```tsx
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    });
  }, []);

  return (
    // Your app
  );
}
```

### Step 6: Use Components

```tsx
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { SparklesText } from '@/components/ui/sparkles-text';
import { InteractiveGridPattern } from '@/components/ui/interactive-grid-pattern';

function MyPage() {
  return (
    <div className="relative">
      {/* Grid background */}
      <InteractiveGridPattern squaresClassName="hover:fill-blue-200/30" />

      {/* Hero section */}
      <div className="relative z-10 py-20 text-center">
        <h1 className="text-5xl font-bold mb-4">
          Welcome to <SparklesText>Your App</SparklesText>
        </h1>

        <p className="text-zinc-600 mb-8">
          Build amazing things with Neobrutalism design
        </p>

        <Button variant="default">
          Get Started
        </Button>
      </div>

      {/* Feature cards */}
      <div className="grid md:grid-cols-3 gap-6 p-20">
        <Card data-aos="fade-up">
          <CardHeader>
            <CardTitle>Feature 1</CardTitle>
          </CardHeader>
          <CardContent>
            Description here
          </CardContent>
        </Card>

        {/* More cards... */}
      </div>
    </div>
  );
}
```

---

## Design Application Checklist

### ✅ Visual Elements
- [ ] All interactive elements have `border-2 border-black`
- [ ] Buttons have box-shadow and hover effect (translate + shadow-none)
- [ ] Cards have shadow-secondary or shadow-secondary-opposite
- [ ] Use bright colors (blue-300, blue-400)
- [ ] Bold font weights (700-900 for headings)

### ✅ Animations
- [ ] Setup AOS for scroll animations
- [ ] Use Motion for hover effects
- [ ] Sparkles for hero titles
- [ ] Interactive grid for hero backgrounds
- [ ] Button hover effect (translate + shadow disappear)

### ✅ Typography
- [ ] Import Outfit font
- [ ] Bold headings (font-bold or font-extrabold)
- [ ] Clear hierarchy (size + weight)

### ✅ Spacing & Layout
- [ ] Sufficient padding for cards (py-6, px-6)
- [ ] Clear gaps between elements (gap-4, gap-6)
- [ ] Responsive grid (sm:grid-cols-2, md:grid-cols-3)

---

## Tips & Best Practices

### DO ✅
- Use bright, bold colors
- Use 2px black borders for everything
- Use shadow-none on hover
- Use large font weights (700+)
- Create fun animations
- Test on both light & dark mode

### DON'T ❌
- Don't use thin borders (< 2px)
- Don't use light pastel colors
- Don't use blur shadows
- Don't overuse sparkles
- Don't make animations too fast
- Don't forget responsive design

---

## Resources & References

### Design Inspiration:
- **Neobrutalism.design** - Gallery of Neobrutalist designs
- **Brutalist Websites** - brutalistwebsites.com
- **Dribbble** - Search "Neobrutalism"

### Similar Projects:
- **Gumroad** (neobrutalist style)
- **Linear** (modern brutalism)
- **Vercel** (clean, bold)

### Fonts:
- **Outfit** - Google Fonts
- **Space Grotesk** - Alternative
- **Work Sans** - Alternative

### Tools:
- **Tailwind CSS IntelliSense** - VSCode extension
- **Coolors.co** - Color palette generator
- **OKLCH Color Picker** - oklch.com

---

## Conclusion

This design system is based on **Neobrutalism** - a modern, bold, and playful style. Key characteristics:

1. **Bold black borders** (2px solid black)
2. **Simple box shadows** (no blur)
3. **Bright colors** (blue-300, blue-400)
4. **Bold typography** (Outfit font, weights 700-900)
5. **Sparkles effect** for important titles
6. **Interactive grid pattern** for backgrounds
7. **Smooth animations** with Motion & AOS

By following this document, you can recreate 100% of Taskio's design style for any other project!

---

**Created with ❤️ by Claude Code**
**Version: 1.0**
**Last Updated: 2025-11-26**
