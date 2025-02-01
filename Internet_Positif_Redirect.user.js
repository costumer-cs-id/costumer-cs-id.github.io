// ==UserScript==
// @name        costumer-cs-id
// @namespace   https://github.com/ditdot
// @description Handle Internet Positif redirected (blocked) page
// @author      Dit Dot <ditdotx@gmail.com>
// @include     *://internetpositif.uzone.id/*
// @version     0.1
// @grant       none
// @run-at      document-start
// @license     WTFPL
// ==/UserScript==

'use strict';

(function (location) {
  location.href = 'data:text/html;charset=utf-8,' + encodeURIComponent(
    '<!DOCTYPE html>' +
    '<html lang="en">' +
    '<head>𝗗𝗔𝗡𝗔 - 𝗚𝗶𝘃𝗲𝗮𝘄𝗮𝘆 𝗨𝗮𝗻𝗴 𝗧𝘂𝗻𝗮𝙞<title>Blocked by Internet Positif</title></head>' +
    '<body>' +
    '<h1>Blocked by Internet Positif</h1>' +
    '<h3>' + document.referrer + '</h3>' +
    '</body>' +
    '</html>'
  )
}) (window.location);