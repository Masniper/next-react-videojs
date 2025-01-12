# Next-React-VideoJS

A reusable React library for integrating Video.js with full feature support. This library simplifies the integration of Video.js in React and Next.js projects, providing a modular and user-friendly interface for embedding video players.

## Features

- Full support for Video.js features, including playback controls, custom skins, and plugins.
- React 18 and Next.js compatibility.
- Support for multiple video formats (e.g., MP4, OGG, HLS, DASH).
- Customizable options for autoplay, controls, playback rates, and more.
- Lightweight and easy to integrate.

## Installation

Install the package via npm:

```bash
npm install next-react-videojs
```

Or using Yarn:

```bash
yarn add next-react-videojs
```

## Usage

Here’s an example of how to use the `next-react-videojs` component:

### In a React Project

```tsx
import React from "react";
import VideoPlayer from "next-react-videojs";

const App = () => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/Video_poster.jpg",
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        type: "video/mp4",
      },
      {
        src: "https://media.w3.org/2010/05/sintel/trailer.ogv",
        type: "video/ogg",
      },
    ],
    tracks: [
      {
        kind: "captions",
        src: "https://media.w3.org/2010/05/sintel/captions.vtt",
        srclang: "en",
        label: "English",
        default: true,
      },
    ],
  };

  const handlePlayerReady = (player) => {
    console.log("Player is ready!", player);
  };

  return <VideoPlayer options={videoJsOptions} onReady={handlePlayerReady} />;
};

export default App;
```

### In a Next.js Project

```tsx
import dynamic from "next/dynamic";

const VideoPlayer = dynamic(() => import("next-react-videojs"), { ssr: false });

const Home = () => {
  const videoJsOptions = {
    autoplay: false,
    controls: true,
    responsive: true,
    fluid: true,
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/51/Video_poster.jpg",
    playbackRates: [0.5, 1, 1.5, 2],
    sources: [
      {
        src: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
        type: "video/mp4",
      },
      {
        src: "https://media.w3.org/2010/05/sintel/trailer.ogv",
        type: "video/ogg",
      },
    ],
    tracks: [
      {
        kind: "captions",
        src: "https://media.w3.org/2010/05/sintel/captions.vtt",
        srclang: "en",
        label: "English",
        default: true,
      },
    ],
  };

  return <VideoPlayer options={videoJsOptions} />;
};

export default Home;
```

## Props

### `options` (required)
- **Type:** `videojs.PlayerOptions`
- **Description:** Options to configure the Video.js player, including video sources, playback settings, and plugins.

### `onReady` (optional)
- **Type:** `(player: videojs.Player) => void`
- **Description:** Callback function that is called when the player is ready.

## Example Configuration

```json
{
  "autoplay": false,
  "controls": true,
  "responsive": true,
  "fluid": true,
  "poster": "https://upload.wikimedia.org/wikipedia/commons/5/51/Video_poster.jpg",
  "playbackRates": [0.5, 1, 1.5, 2],
  "sources": [
    {
      "src": "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
      "type": "video/mp4"
    },
    {
      "src": "https://media.w3.org/2010/05/sintel/trailer.ogv",
      "type": "video/ogg"
    }
  ],
  "tracks": [
    {
      "kind": "captions",
      "src": "https://media.w3.org/2010/05/sintel/captions.vtt",
      "srclang": "en",
      "label": "English",
      "default": true
    }
  ]
}
```

## Development

### Build

To build the project, run:

```bash
npm run build
```

### Linting

To lint the project, run:

```bash
npm run lint
```

## License

This project is licensed under the [MIT License](LICENSE).

## Repository

- **GitHub:** [next-react-videojs](https://github.com/masniper/next-react-videojs)
- **NPM:** [next-react-videojs](https://www.npmjs.com/package/next-react-videojs)

## Issues

If you encounter any issues or have suggestions, please create an issue in the [GitHub repository](https://github.com/masniper/next-react-videojs/issues).

## Contributions

Contributions are welcome! Feel free to fork the repository, make changes, and submit a pull request.