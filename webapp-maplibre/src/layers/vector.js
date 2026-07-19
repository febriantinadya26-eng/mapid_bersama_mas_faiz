import naturalEarthData from '../data/ne.geojson?url';    
import areaData from '../data/area.geojson?url';

export function addKotaLayer(map){
    map.addSource('kota', {
        type: 'geojson',
        data: naturalEarthData
    });

    map.addLayer({
        id: "titik-kota",
        type: "circle",
        source: "kota",
        paint: {
            "circle-radius": 3,
            "circle-color": "#ff0000",
            "circle-stroke-width": 2,
            "circle-stroke-color": "#000000"
        }
    })
}

export function addPulauLayer(map){
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
    }



    export function addBufferLayer(map, data){
        const fid = getRandomInt(1, 1000);
        map.addSource(String(fid), {
            type: "geojson",
            data: data,
        })
    
        map.addLayer({
            id: `area-${getRandomInt(1, 1000)}`,
            type: "fill",
            source: String(fid),
            paint: {
                "fill-color": "#0008ff",
                "fill-outline-color": "#000000"
            }
        })
    }

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}