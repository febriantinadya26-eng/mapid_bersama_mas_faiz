import { Map } from 'maplibre-gl';
import {addKotaLayer, addPulauLayer} from './layers/vector.js';

import spongebobImage from './data/spongebob.png?url';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: "https://demotiles.maplibre.org/style.json",
    center: [106.89, -6.19],
    zoom: 3
})

// const data = {
//   "type": "FeatureCollection",
//   "features": [
//     {
//       "type": "Feature",
//       "properties": {
//         "nama": "jakarta"
//       },
//       "geometry": {
//         "type": "Point",
//         "coordinates": [
//           106.8253822,
//           -6.1650064
//         ]
//       }
//     }
//   ]
// }

map.on('load', () => {
   addKotaLayer(map); 
   addPulauLayer(map);


    
    map.addSource("spongebob", {
        type: "image",
        url: spongebobImage,
        coordinates: [
            [79.16, -0.40],
            [94.18, -1.66],
            [94.65, -14.73],
            [72.97, -13.74]
        ]
    })

    map.addLayer({
        id: "spongebob-image",
        type: "raster",
        source: "spongebob",
    })
})