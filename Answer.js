function findMatches(input, regex) {

    const items = new Set() // creating new set 
    while (input.length > 0) { // when the argument is not empty
        if (regex.test(input)) { // check input if the regex exists, if true 
            const [item] = input.match(regex); // using destructuring to store the result in the variable item  // const item = input.match(regex)[0]
            items.add(item); // add item to the set 
            input = input.replace(item, ''); // remove item 
            continue // break flow of the loop to next loop interation
        }
        input = input.substring(1); // else of the if statement - removes the first letter of input if regex doesn't exist in input
    }
    return [...items]
}

function intersection(sets) {

    if (sets.length === 1)
        return sets[0]

    let _intersection = new Set()

    for (let iSets = 0; iSets < sets.length; iSets++) {
        for (let elem of sets[iSets]) {
            for (let setI = 0; setI < sets.length; setI++) {
                if (sets[iSets] === sets[setI]) {
                    continue;
                }

                if (!sets[setI].has(elem)) {
                    continue;
                }

                if (setI === sets.length - 1) {
                    _intersection.add(elem)
                }
            }
        }
    }

    return _intersection
}

// Regexes
const CLASS_REGEX = /\.[a-zA-Z-_]+/
const ID_REGEX = /\#[a-zA-Z-_]+/
const TAG_REGEX = /div|input|img/

// main entry function 
var $ = function (selector) {

    const idSet = new Set(findMatches(selector, ID_REGEX).flatMap($id))
    const classSet = new Set(findMatches(selector, CLASS_REGEX).flatMap($class))
    const tagSet = new Set(findMatches(selector, TAG_REGEX).flatMap($tag))

    const elements = intersection(
        [idSet, classSet, tagSet].filter(set => set.size > 0)
    )

    return [...elements]
}

const $id = (selector) => {
    const element = document.getElementById(String(selector).substring(1))

    return element ? [element] : []
}

const $class = (selector) => {
    return [
        ...document.getElementsByClassName(
            String(selector).substring(1)
        )
    ]
}

const $tag = (selector) => {
    return [
        ...document.getElementsByTagName(
            String(selector)
        )
    ]
}


// var $ = function (selector) {
//   var elements = [];

//   if (selector){
    

//     // cut down the selector to extract class / id and tag
//     let selector_tag = selector.match(/^(\w+)\W/)[1];
//     let selector_tag = selector.match(/^(\w+)\W/)[1];
//     console.log("res:::",  )
//     let res = [...document.getElementsByTagName(selector_tag)];
//     console.log(res)
//     // console.log("tags: " , selector_tag)
//     // let selector_ids = selector.match(/\#(\w+)/)[1];
//     // console.log("ids:" , selector_ids)
//     // let selector_class = selector.match(/\.(\w+)/)[1];
//     // console.log("class:" , selector_class)


//   } else {
//     console.log("enter selectors")
//   }


  





// // $("div") - Should return 2 DIVs
//   // elements = [...document.getElementsByTagName(selector)];
//   // console.log(elements);


// // $("img.some_class") - Should return 1 IMG 
// // $("#some_id") - Should return 1 DIV 
// // $(".some_class") - Should return 1 DIV and 1 IMG 
// // $("input#some_id") - Should return an empty array 
// // $("div#some_id.some_class") - Should return 1 DIV 
// // $("div.some_class#some_id") - Should return 1 DIV

  

//   return elements;
// }

// $("div#some_id.some_class");

// // pseudo code

// // pull all nodes in the document 
// // recursively go throu all the nodes in a loop lloking for selector 