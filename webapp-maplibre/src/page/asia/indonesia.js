

import { Map } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {addKotaLayer, addPulauLayer} from '../../layers/vector.js';
import {addAttribution} from '../../controls/basicControls.js';
import {LogoHondaControl} from './controls/CustomLogoControl.js';


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: "https://demotiles.maplibre.org/style.json",
    center: [106.89, -6.19],
    zoom: 3,
    attributionControl: false,
});


map.on('load', () => {
   addKotaLayer(map); 
   addPulauLayer(map);
});

addAttribution(map, "Natural Earth Data");
map.addControl(new LogoHondaControl(), 'bottom-right');