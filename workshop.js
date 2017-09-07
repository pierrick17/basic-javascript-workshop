function firstLetter(inputString) {

    if(typeof inputString !=="letter"){
        return undefined;
    }
    return (firstLetter(inputString);
}

function lastLetter(inputString) {

    if(typeof inputString !=="letter"){
        return undefined;
    }
    return (lastLetter(inputString);
}

function letterAtPosition(inputString, position) {


    return letterAtPosition(inputString,position);

}

function addTwoNumbers(num1, num2) {

    if(typeof num1 !== "number" || typeof num2 !== "number"){
        return undefined;
    }
    return num1+num2;
}

function multiplyTwoNumbers(num1, num2) {

    if(num1 === "Infinity" || num2 === "Infinity"){
        return Infinity;
    }
    return num1*num2;
}

function calculator(operation, num1, num2) {

    if(operation === "add"){
        return num1+num2;
    }
    if(operation === "sub"){
        return num1-num2;
    }
    if(operation === "mult"){
        return num1*num2;
    }
    if(operation === "div"){
        return num1/num2;
    }

    return undefined;
}

function repeatString(inputString, numRepetitions) {


}

function reverseString(inputString) {

}

function longestWord(inputString) {

}

function capitalize(inputString) {

}

function sumOfNumbers(arrayOfNumbers) {

}

function uniqueElements(array1, array2) {

}

function isPalindrome(inputString) {

}

function wrapCharacter(inputString) {

}

function wrapWord(inputString) {

}

function bubbleSort(arrayOfNumbers) {

}

/***** DO NOT EDIT AFTER THIS LINE *****/
module.exports = {
    firstLetter: firstLetter,
    lastLetter: lastLetter,
    letterAtPosition: letterAtPosition,
    addTwoNumbers: addTwoNumbers,
    multiplyTwoNumbers: multiplyTwoNumbers,
    calculator: calculator,
    repeatString: repeatString,
    reverseString: reverseString,
    longestWord: longestWord,
    capitalize: capitalize,
    sumOfNumbers: sumOfNumbers,
    uniqueElements: uniqueElements,
    isPalindrome: isPalindrome,
    wrapCharacter: wrapCharacter,
    wrapWord: wrapWord,
    bubbleSort: bubbleSort
};