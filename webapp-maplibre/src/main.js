import { Map } from 'maplibre-gl';
import naturalEarthData from './data/ne.geojson?url';
import areaData from './data/area.geojson?url';
import spongebobImage from './data/spongebob.png?url';

const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
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
    map.addSource('kota', {
        type: 'geojson',
        data: naturalEarthData
    });

    map.addLayer({
        id: "titik-kota",
        type: "circle",
        source: "kota",
        paint: {
            "circle-radius": 8,
            "circle-color": "#ff0000",
            "circle-stroke-width": 2,
            "circle-stroke-color": "#000000"
        }
    })

    map.addSource('pulau', {
        type: "geojson",
        data: areaData,
    })

    map.addLayer({
        id: "area-pulau",
        type: "fill",
        source: "pulau",
        paint: {
            "fill-color": "#00ff00",
            "fill-outline-color": "#000000"
        }
    })
    
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