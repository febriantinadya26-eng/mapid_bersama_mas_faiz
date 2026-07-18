import {  
    Map, 
    FullscreenControl, 
    GlobeControl,
    LogoControl,
} from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {addKotaLayer, addPulauLayer} from './layers/vector.js';
import {addSpongebobImage} from './layers/raster.js';
import {addAttribution} from './controls/basicControls.js';
import {LogoHondaControl} from './controls/CustomLogoControl.js';
import {addKotaPopup} from './popup/layerPopup.js';


const mapElement = document.createElement('div');
mapElement.id = 'map';
mapElement.style.height = '300px';
document.body.appendChild(mapElement);

const map = new Map({
    container: 'map',
    style: "https://demotiles.maplibre.org/style.json",
    center: [106.89, -6.19],
    zoom: 1,
    attributionControl: false,
});



map.on('load', () => {
   addKotaLayer(map); 
   addPulauLayer(map);
   addSpongebobImage(map);

});

map.on('click', 'titik-kota', function(event) {
    addKotaPopup(map, event);
})

addAttribution(map, "Natural Earth Data &copy; <a href='https://www.naturalearthdata.com/'>Natural Earth</a> | Area Data &copy; <a href='https://www.naturalearthdata.com/'>Natural Earth</a>, nickelodeon, and <a href='https://www.mapbox.com/'>Mapbox</a>");
map.addControl(new FullscreenControl());
map.addControl(new GlobeControl());
map.addControl(new LogoControl({compact:true}));
map.addControl(new LogoHondaControl(), 'bottom-right');