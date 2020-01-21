var $ = function (selector) {

    
    // var elements = [...document.getElementsByTagName('div')];
 
    // var elements = [...document.getElementsByTagName('img')];

    // var elements = [document.getElementById('some_id')];

    // var elements = [...document.getElementsByClassName('some_class')];

    // $("input#some_id") - Should return an empty array 
    var elements = [document.getElementById('someinput some_id')];

    // $("div#some_id.some_class") - Should return 1 DIV 

    // $("div.some_class#some_id") - Should return 1 DIV


    return elements;
}