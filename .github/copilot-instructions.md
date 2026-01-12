# Vertical Order Tracker - Project Setup

A React + Vite project showcasing a vertical timeline order tracking component with Tailwind CSS styling.

## Project Setup Completed

- [x] Project scaffolded with Vite + React
- [x] Tailwind CSS configured
- [x] App.jsx with timeline tracker component
- [x] Supporting files (main.jsx, index.css, index.html)
- [x] Configuration files (vite.config.js, tailwind.config.js, postcss.config.js)

## Next Steps

1. **Install Dependencies**

   ```bash
   npm install
   ```

2. **Run Development Server**

   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

## Project Structure

```
vertical-order-tracker/
├── src/
│   ├── App.jsx          # Timeline tracker component
│   ├── main.jsx         # React entry point
│   └── index.css        # Tailwind CSS imports
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS config
├── postcss.config.js    # PostCSS config
├── package.json         # Dependencies
└── README.md            # Project documentation
```

## Design Features

- **Vertical Continuity**: Vertical line connects all timeline dots
- **Active/Inactive States**: Color-coded indicators (indigo for active, gray for inactive)
- **Responsive Layout**: Centered card design with proper spacing
- **Tailwind Styling**: No separate CSS files needed

## Testing Notes

The component includes comments for potential future bugs:

- Removing `left-2.5` class breaks vertical line continuity
- Removing `pl-8` padding causes text overlap with dots
