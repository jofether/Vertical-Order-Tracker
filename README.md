# Vertical Order Tracker

A React-based timeline component showcasing package delivery tracking with vertical continuity and alignment design.

## Features

- **Vertical Timeline**: Visual representation of order status with vertically connected dots
- **Status Indicators**: Color-coded dots (indigo for active, gray for inactive)
- **Responsive Design**: Clean, centered layout that works on all screen sizes
- **Tailwind CSS**: Modern styling with utility-first CSS framework

## Project Structure

```
src/
  ├── main.jsx          # React entry point
  ├── App.jsx           # Timeline tracker component
  ├── index.css         # Tailwind imports and base styles
vite.config.js         # Vite configuration
tailwind.config.js     # Tailwind CSS configuration
postcss.config.js      # PostCSS configuration
```

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will open at `http://localhost:3000`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Design Notes

**Rationale**: This layout relies on Vertical Continuity and Alignment. The vertical line must visually connect the dots, creating a path. It tests the model's ability to see the relationship between a time stamp (left), a status indicator (center), and the detail text (right).

### Future Testing Bugs (commented in code):
1. Remove `left-2.5` from the vertical line to break continuity
2. Remove `pl-8` from content div to test text overlap with dots
