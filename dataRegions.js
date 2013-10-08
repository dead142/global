/**
 * Created with JetBrains PhpStorm.
 * User: user
 * Date: 08.10.13
 * Time: 15:37
 * To change this template use File | Settings | File Templates.
 */
ymaps.ready(function () {
    geoMap = new ymaps.Map('container', {
        center: [55.76, 37.64],
        type: "yandex#map",
        zoom: 3
    });
    geoMap.controls
        .add('zoomControl')
        .add('mapTools')
        .add('typeSelector');

    var regions = 0; //array of regions
    var link='';//type of data
    var MaxData=0;// for color

    $("#remove").click(function () {
        geoMap.geoObjects.remove(regions);
        regions = 0;
    });
    $("#data").click(function () {
        link=$("#data").val();
    });
//if chosen some data
    $("#data").change(function () {
        var lng = 'ru',
            contr = 'RU',
            level = '3';
        if (regions) {
            geoMap.geoObjects.remove(regions);
        }
        //add regions
        ymaps.regions.load(contr, {
            lang: lng,
            quality: level
        }).then(function (result) {
                regions = result.geoObjects;
                var color= Array;//for every part of map different color

                $.getJSON("http://hackathon.berezhkov.info/Ajax/"+link+".php?year=2010", function(data){
                    for(var i=0; i<data.length; i++) {
                        //try to make different color on map
                        if (parseFloat(MaxData)<parseFloat(data[i].data)){
                            MaxData=data[i].data;//maximum value of data
                        }
                        color[i]=100+((100*((data[i].data)/MaxData).toFixed()));//
//for each region, if indetified name
                        regions.each(function (reg) {
                            if (reg.properties.get('name') == data[i].name) {
                          //kostili , nado dumat'
                                if (link=='med'){
                                    reg.properties.set('hintContent','довольствие медициной %:'+ data[i].data+'</br>'+reg.properties.get('name'));
                                }
                                else {
                                reg.properties.set('hintContent','Смерность в дтп:'+ data[i].data+'</br>'+reg.properties.get('name'));
                                }
                                //set color for region
                                    reg.options.set('fillColor', 'rgba('+(color[i])+',0,26,0.5)')
                            }
                        });
                    }
                });
geoMap.geoObjects.add(regions);
            }, function () {
                alert('no response');
            });
    });
});