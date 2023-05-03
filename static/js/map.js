var layers = [ new ol.layer.Tile({ source: new ol.source.OSM() }) ];
    var layer = layers[0];

    var map = new ol.Map({
        target: 'map',
        interactions: [
        ],
        controls: [
        ],                 
        layers:layers,
        view: new ol.View({
            center: ol.proj.fromLonLat([-2.9821127, 56.4508631]),
            zoom: 12
        }),
    });

    var enhance = new ol.filter.Colorize({ operation:'grayscale', value: 1 });
    // layer.addFilter(enhance);

    var centerLongitudeLatitude = ol.proj.fromLonLat([-2.9821127,56.4508631]);
    var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        projection: 'EPSG:4326',
        features: [new ol.Feature(new ol.geom.Circle(centerLongitudeLatitude, 14000))]
    }),
    style: [
        new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'rgb(11, 97, 122)',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'rgba(11, 97, 122, 0.3)'
            })
        })
    ]
    });
    map.addLayer(layer);



                
// var layers = [ new ol.layer.Tile({ source: new ol.source.OSM() }) ];
// var layer = layers[0];

// var map = new ol.Map({
//     target: 'map',
//     interactions: [
//     ],
//     controls: [
//     ],                 
//     layers:layers,
//     view: new ol.View({
//         center: ol.proj.fromLonLat([-2.511200, 53.495350]),
//         zoom: 10
//     }),
// });

// var enhance = new ol.filter.Colorize({ operation:'grayscale', value: 1 });
// layer.addFilter(enhance);

// var centerLongitudeLatitude = ol.proj.fromLonLat([-2.511200, 53.495350]);
// var layer = new ol.layer.Vector({
// source: new ol.source.Vector({
//     projection: 'EPSG:4326',
//     features: [new ol.Feature(new ol.geom.Circle(centerLongitudeLatitude, 35000))]
// }),
// style: [
//     new ol.style.Style({
//     stroke: new ol.style.Stroke({
//         color: 'rgba(174, 134, 92, 1.0)',
//         width: 2
//     }),
//     fill: new ol.style.Fill({
//         color: 'rgba(174, 134, 92, 0.2)'
//         })
//     })
// ]
// });
// map.addLayer(layer);


