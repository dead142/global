<?php header('Access-Control-Allow-Origin: *'); ?><!DOCTYPE html>

<html>

<head>
    <title>Примеры. Регионы</title>
    <meta http-equiv="content-type" content="text/html; charset=utf-8" />
    <script src="//api-maps.yandex.ru/2.0.31/?load=package.standard,package.geoObjects,package.regions&lang=ru-RU" type="text/javascript"></script>
    <script src="http://yandex.st/jquery/1.9.1/jquery.min.js"></script>
    <script src="http://code.jquery.com/jquery-2.0.3.js"></script>
    <script src="js/dataRegions.js"></script>
    <style type="text/css">
        html, body, #container {
            width: 100%;
            height: 100%;
        }
    </style>

</head>

<body>
<p>
    Для отображения нужного региона выберите страну, язык и уровень детализации соответственно.
</p>

<input id=remove type=button value='remove'>
<select id=data><option value="">---</option>
    <option value="dtp">дтп</option>
    <option value="med">Мед</option>
</select>


<div id="container"></div>
</body>

</html>
