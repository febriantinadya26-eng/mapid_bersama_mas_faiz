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
            "circle-radius": 8,
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