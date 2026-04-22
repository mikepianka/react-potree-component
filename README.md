# React Potree Component

A React component for rendering 3D point clouds using [Potree](https://github.com/potree/potree), a WebGL-based point cloud renderer.

## Features

- Easy integration of Potree point cloud viewer into React applications
- Customizable viewer configuration
- Support for loading point cloud data
- Responsive iframe-based rendering

## Installation

**Requirements:**
- Node.js v16 or less (due to compatibility with react-scripts 4.0.3)

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/react-potree-component.git
cd react-potree-component
npm install
```

## Usage

### Basic Usage

Import and use the `PotreePointcloud` component in your React app:

```jsx
import React from 'react';
import PotreePointcloud from './components/PotreePointcloud';

function App() {
  return (
    <div className="App">
      <h1>Point Cloud Viewer</h1>
      <PotreePointcloud />
    </div>
  );
}

export default App;
```

### Customizing the Component

The component currently loads a default point cloud. To customize:

1. **Point Cloud Data**: Place your point cloud data in the `public/pointclouds/` directory. The data should be in Potree format with a `cloud.js` file.

2. **Configuration**: Modify the hooks in `src/hooks/` to customize viewer settings:
   - `useBasicViewerConfig.js`: Configure viewer properties like FOV, point budget, controls
   - `useLoadPointcloud.js`: Load different point clouds or adjust material properties

3. **Styling**: Adjust the `potreePointcloudStyle` and `iframeStyle` in `PotreePointcloud.js` for sizing and layout.

## Component API

### PotreePointcloud

A React component that renders a Potree point cloud viewer.

**Props**: Currently none (hardcoded configuration). Future versions may accept props for customization.

**Styling**: The component uses inline styles. Modify `potreePointcloudStyle` and `iframeStyle` for custom dimensions.

## Hooks

### useBasicViewerConfig

Configures the Potree viewer with basic settings.

```javascript
useBasicViewerConfig(loaded, potreeLibRef, potreeViewerRef);
```

- `loaded`: Boolean indicating if the iframe has loaded
- `potreeLibRef`: Reference to the Potree library
- `potreeViewerRef`: Reference to the Potree viewer instance

### useLoadPointcloud

Loads a point cloud into the viewer.

```javascript
useLoadPointcloud(
  loaded,
  potreeLibRef,
  potreeViewerRef,
  pointcloudURL,
  pointcloudTitle,
  fitToScreen
);
```

- `loaded`: Boolean indicating if the iframe has loaded
- `potreeLibRef`: Reference to the Potree library
- `potreeViewerRef`: Reference to the Potree viewer instance
- `pointcloudURL`: URL to the point cloud data (relative to viewer.html)
- `pointcloudTitle`: Title for the point cloud
- `fitToScreen`: Whether to fit the point cloud to screen after loading

## Project Structure

```
src/
├── components/
│   └── PotreePointcloud.js    # Main component
├── hooks/
│   ├── useBasicViewerConfig.js  # Viewer configuration hook
│   └── useLoadPointcloud.js     # Point cloud loading hook
├── App.js                     # Example usage
└── index.js                   # App entry point

public/
├── potree/                    # Potree library files
│   ├── viewer.html            # Potree viewer page
│   ├── build/                 # Compiled Potree assets
│   └── libs/                  # Third-party libraries
└── pointclouds/               # Point cloud data (not included)
```

## Development

### Running the App

```bash
npm start
```

Opens the app in development mode at [http://localhost:3000](http://localhost:3000).

### Building for Production

```bash
npm run build
```

Builds the app for production to the `build` folder.

### Testing

```bash
npm test
```

Launches the test runner in interactive watch mode.

## Dependencies

- React 17+
- Potree (bundled in `public/potree/`)

## Browser Support

Supports modern browsers with WebGL support.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the MIT License. See the Potree library licenses in `public/potree/libs/` for third-party dependencies.

## Acknowledgments

- [Potree](https://github.com/potree/potree) - WebGL point cloud renderer
- [Create React App](https://github.com/facebook/create-react-app) - React app boilerplate
