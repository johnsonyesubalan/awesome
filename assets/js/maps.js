// Google maps

// -------------

// basic map

new GMaps({
    div: '#map',
    lat: -12.043333,
    lng: -77.028333
});

// panorama street view

panorama = GMaps.createPanorama({
    el: '#panorama',
    lat: 42.3455,
    lng: -71.0983
});

// polygon map

var map;
$(document).ready(function() {
    map = new GMaps({
        div: '#map-polygon',
        lat: 39.743296277167325,
        lng: -105.00517845153809
    });

    var paths = [
        [
            [
                [-105.00432014465332, 39.74732195489861],
                [-105.00715255737305, 39.74620006835170],
                [-105.00921249389647, 39.74468219277038],
                [-105.01067161560059, 39.74362625960105],
                [-105.01195907592773, 39.74290029616054],
                [-105.00989913940431, 39.74078835902781],
                [-105.00758171081543, 39.74059036160317],
                [-105.00346183776855, 39.74059036160317],
                [-105.00097274780272, 39.74059036160317],
                [-105.00062942504881, 39.74072235994946],
                [-105.00020027160645, 39.74191033368865],
                [-105.00071525573731, 39.74276830198601],
                [-105.00097274780272, 39.74369225589818],
                [-105.00097274780272, 39.74461619742136],
                [-105.00123023986816, 39.74534214278395],
                [-105.00183105468751, 39.74613407445653],
                [-105.00432014465332, 39.74732195489861]
            ],
            [
                [-105.00361204147337, 39.74354376414072],
                [-105.00301122665405, 39.74278480127163],
                [-105.00221729278564, 39.74316428375108],
                [-105.00283956527711, 39.74390674342741],
                [-105.00361204147337, 39.74354376414072]
            ]
        ],
        [
            [
                [-105.00942707061768, 39.73989736613708],
                [-105.00942707061768, 39.73910536278566],
                [-105.00685214996338, 39.73923736397631],
                [-105.00384807586671, 39.73910536278566],
                [-105.00174522399902, 39.73903936209552],
                [-105.00041484832764, 39.73910536278566],
                [-105.00041484832764, 39.73979836621592],
                [-105.00535011291504, 39.73986436617916],
                [-105.00942707061768, 39.73989736613708]
            ]
        ]
    ];

    polygon = map.drawPolygon({
        paths: paths,
        useGeoJSON: true,
        strokeColor: '#BBD8E9',
        strokeOpacity: 1,
        strokeWeight: 3,
        fillColor: '#BBD8E9',
        fillOpacity: 0.6
    });
});

// overlay

var map1;
$(document).ready(function() {

    var getTile = function(coord, zoom, ownerDocument) {
        var div = ownerDocument.createElement('div');
        div.innerHTML = coord;
        div.style.width = this.tileSize.width + 'px';
        div.style.height = this.tileSize.height + 'px';
        div.style.background = 'rgba(250, 250, 250, 0.55)';
        div.style.fontFamily = 'Monaco, Andale Mono, Courier New, monospace';
        div.style.fontSize = '10';
        div.style.fontWeight = 'bolder';
        div.style.border = 'dotted 1px #aaa';
        div.style.textAlign = 'center';
        div.style.lineHeight = this.tileSize.height + 'px';
        return div;
    };

    map1 = new GMaps({
        el: '#map-overlay',
        lat: -12.043333,
        lng: -77.028333
    });
    map1.addOverlayMapType({
        index: 0,
        tileSize: new google.maps.Size(256, 256),
        getTile: getTile
    });
});