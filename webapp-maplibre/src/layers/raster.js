    
import spongebobImage from '../data/Spongebob.png?url';    
    
export function addSpongebobImage(map){
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
    }
   