var $ = function (selector) {
  var elements = [];

  if (selector){
    

    // cut down the selector to extract class / id and tag
    let selector_tag = selector.match(/^(\w+)\W/)[1];

    let res = [...document.getElementsByTagName(selector_tag)];
    console.log(res)
    // console.log("tags: " , selector_tag)
    // let selector_ids = selector.match(/\#(\w+)/)[1];
    // console.log("ids:" , selector_ids)
    // let selector_class = selector.match(/\.(\w+)/)[1];
    // console.log("class:" , selector_class)


  } else {
    console.log("enter selectors")
  }


  





// $("div") - Should return 2 DIVs
  // elements = [...document.getElementsByTagName(selector)];
  // console.log(elements);


// $("img.some_class") - Should return 1 IMG 
// $("#some_id") - Should return 1 DIV 
// $(".some_class") - Should return 1 DIV and 1 IMG 
// $("input#some_id") - Should return an empty array 
// $("div#some_id.some_class") - Should return 1 DIV 
// $("div.some_class#some_id") - Should return 1 DIV

  

  return elements;
}

$("div#some_id.some_class");

// pseudo code

// pull all nodes in the document 
// recursively go throu all the nodes in a loop lloking for selector 