"use strict"

var words = "Wonderful Happiness Joyful Time Task Apple";

var re = /\b[^aA]{6,}\b/g;

var withoutA = words.match(re);

console.log(withoutA); 
