# Geovisto Dotlayer Tool
Tool which provides the map layer functionality for [Geovisto core library](https://github.com/geovisto/geovisto).

This repository is a snapshot of Geoviosto `tools/layers/dot` derived from the development repository: [geovisto/geovisto-map](https://github.com/geovisto/geovisto-map).

## Usage
![image](https://user-images.githubusercontent.com/44326793/212474132-75526229-584d-4317-b9a5-39c12c776272.png)

```js 
import { GeovistoDotLayerTool } from 'geovisto-layer-dot';
import 'geovisto-layer-dot/dist/index.css';


// create instance of map with given props
const map = Geovisto.createMap({
  // ...
  tools?: Geovisto.createMapToolsManager([
    // instances of Geovisto tools (extensions) which will be directly used in the map
    // ...
    GeovistoDotLayerTool.createTool({
      id: "geovisto-tool-layer-dot"
    }),
  ])
});

// rendering of the map
map.draw(Geovisto.getMapConfigManagerFactory().default({
  // initial settings of the map can be overriden by the map config - JSON structure providing user settings 
  // ...
  tools?: [
    // config of Geovisto tools (extensions) used in the map
    // ...
    {
      "type": "geovisto-tool-layer-dot",
      "id": "geovisto-tool-layer-dot",
      "enabled": true,
      "layerName": "Dot layer",
      // mapping of data domains to data dimensions
      "data": {
        "latitude": "-37.8210922667", // latitude in degrees
        "longitude": "175.2209316333", // longitude in degrees
        "category": "data.category", // category dimension
        "color": "#e32400" // color of dots
      }
    },
    // ...
  ]
}));
```
## Instalation
`npm install --save geovisto-layer-dot`

Peer dependencies:

`npm install --save geovisto leaflet geovisto-filters`

## Authors and Contributors
Author: [Petr Kašpar](https://github.com/xkaspa40), [Vladimír Korenčik](https://github.com/froztt)

Contributors: [Jiři Hynek](https://github.com/jirka)

## License
[MIT](https://github.com/geovisto/geovisto-layer-dot/blob/master/LICENSE)

### Keywords
[gis](https://www.npmjs.com/search?q=keywords:gis) [map](https://www.npmjs.com/search?q=keywords:map) [geovisto](https://www.npmjs.com/search?q=keywords:geovisto) [leaflet](https://www.npmjs.com/search?q=keywords:leaflet) [spatial-data](https://www.npmjs.com/search?q=keywords:spatial-data) [visualization](https://www.npmjs.com/search?q=keywords:visualization) [dot](https://www.npmjs.com/search?q=keywords:dot) [dotmap](https://www.npmjs.com/search?q=keywords:dotmap)

