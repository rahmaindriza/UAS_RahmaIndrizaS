var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_KaflingPerumahan_1 = new ol.format.GeoJSON();
var features_KaflingPerumahan_1 = format_KaflingPerumahan_1.readFeatures(json_KaflingPerumahan_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KaflingPerumahan_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KaflingPerumahan_1.addFeatures(features_KaflingPerumahan_1);
var lyr_KaflingPerumahan_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KaflingPerumahan_1, 
                style: style_KaflingPerumahan_1,
                popuplayertitle: "KaflingPerumahan",
                interactive: true,
                title: '<img src="styles/legend/KaflingPerumahan_1.png" /> KaflingPerumahan'
            });
var format_fasilitas_2 = new ol.format.GeoJSON();
var features_fasilitas_2 = format_fasilitas_2.readFeatures(json_fasilitas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_fasilitas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_fasilitas_2.addFeatures(features_fasilitas_2);
var lyr_fasilitas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_fasilitas_2, 
                style: style_fasilitas_2,
                popuplayertitle: "fasilitas",
                interactive: true,
    title: 'fasilitas<br />\
    <img src="styles/legend/fasilitas_2_0.png" /> 1<br />\
    <img src="styles/legend/fasilitas_2_1.png" /> 2<br />\
    <img src="styles/legend/fasilitas_2_2.png" /> 3<br />\
    <img src="styles/legend/fasilitas_2_3.png" /> 4<br />'
        });
var format_jalan_3 = new ol.format.GeoJSON();
var features_jalan_3 = format_jalan_3.readFeatures(json_jalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_jalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_jalan_3.addFeatures(features_jalan_3);
var lyr_jalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_jalan_3, 
                style: style_jalan_3,
                popuplayertitle: "jalan",
                interactive: true,
                title: '<img src="styles/legend/jalan_3.png" /> jalan'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_KaflingPerumahan_1.setVisible(true);lyr_fasilitas_2.setVisible(true);lyr_jalan_3.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_KaflingPerumahan_1,lyr_fasilitas_2,lyr_jalan_3];
lyr_KaflingPerumahan_1.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'luas': 'luas', 'status': 'status', });
lyr_fasilitas_2.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'luas': 'luas', });
lyr_jalan_3.set('fieldAliases', {'id': 'id', 'Nama': 'Nama', 'panjang': 'panjang', });
lyr_KaflingPerumahan_1.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', 'luas': '', 'status': '', });
lyr_fasilitas_2.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'luas': '', });
lyr_jalan_3.set('fieldImages', {'id': 'TextEdit', 'Nama': 'TextEdit', 'panjang': '', });
lyr_KaflingPerumahan_1.set('fieldLabels', {'id': 'hidden field', 'NAMA': 'inline label - always visible', 'luas': 'inline label - always visible', 'status': 'inline label - always visible', });
lyr_fasilitas_2.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'luas': 'inline label - always visible', });
lyr_jalan_3.set('fieldLabels', {'id': 'hidden field', 'Nama': 'inline label - always visible', 'panjang': 'inline label - always visible', });
lyr_jalan_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});