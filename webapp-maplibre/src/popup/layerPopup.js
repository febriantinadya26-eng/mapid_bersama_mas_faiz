import {Popup} from 'maplibre-gl';
import {storeAreaGeometry} from '../engine/areaTool.js';

const popup = new Popup();

export function addKotaPopup(map, event){
    const coordinates = event.lngLat
    const latitude = coordinates.lat.toFixed(2);
    const longitude = coordinates.lng.toFixed(2);

    const properties = event.features[0].properties;
    const cityName = properties.NAME;

    console.log(properties);

    return new Popup()
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
                <h3>${cityName}</h3>
                <div>Latitude: ${latitude}</div>
                <div>Longitude: ${longitude}</div>
            </div>`)
        .addTo(map);
}

export function addPulauPopup(map, event){
    const result = storeAreaGeometry(event);

    
    return new Popup()
        .setLngLat(event.lngLat)
        .setHTML(`
            <div>
                <div id="luas"></div>
            </div>`)
        .addTo(map);
}