'use strict';

const d3Selection = require('d3-selection');
const PubSub = require('pubsub-js');
const debounceDelay = 200;
let cachedWidth = window.innerWidth;

function debounce(fn, delay) {
    let timer;

    return function() {
        const context = this;
        const args = arguments;

        clearTimeout(timer);
        timer = setTimeout(function() {
            fn.apply(context, args);
        }, delay);
    };
}

d3Selection.select(window)
    .on('resize', debounce(function(){
            var newWidth = window.innerWidth;

            if (cachedWidth !== newWidth) {
                cachedWidth = newWidth;
                PubSub.publish('resize');
            }

        }, debounceDelay));
