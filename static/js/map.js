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
            center: ol.proj.fromLonLat([-1.0689204, 53.961606]),
            zoom: 10
        }),
    });

    var enhance = new ol.filter.Colorize({ operation:'grayscale', value: 1 });
    layer.addFilter(enhance);

    var centerLongitudeLatitude = ol.proj.fromLonLat([-1.0689204, 53.961606]);
    var layer = new ol.layer.Vector({
    source: new ol.source.Vector({
        projection: 'EPSG:4326',
        features: [new ol.Feature(new ol.geom.Circle(centerLongitudeLatitude, 35000))]
    }),
    style: [
        new ol.style.Style({
        stroke: new ol.style.Stroke({
            color: 'RGBA(61, 142, 7, 0.4)',
            width: 2
        }),
        fill: new ol.style.Fill({
            color: 'RGBA(61, 142, 7, 0.1)'
            })
        })
    ]
    });
    map.addLayer(layer);