// ==UserScript==
// @name        costumer-cs-id
// @namespace   https://github.com/ditdot
// @description Redirect kumpulbagi.com to kumpulbagi.id to avoid Internet Positif
// @author      Dit Dot <ditdotx@gmail.com>
// @include     *://kumpulbagi.com/*
// @version     0.1
// @grant       none
// @run-at      document-start
// @license     WTFPL
// ==/UserScript==

'use strict';

(function (location) {
  location.hostname = 'index.html';
}) (window.location);
