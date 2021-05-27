"use strict"

window.addEventListener('DOMContentLoaded', function () {
    @@include('_header.js')
    @@include('_calc.js')
    new WOW().init();
});

@@include('_validate.js')
@@include('_mining-power.js')
@@include('_faq.js')