function telephoneCheck(str) {

    var x = /([\d-()]){10,11}/g;
    var filtLength = /([\d]){11}/g;
    var filtSpaces = /([\s-])/g;
    var filtParenth = /\(/;
    var filtParenth2 = /\)/;

    var parenthLength = str.match(/(\(.*\))/g);

    var countryCode = str.split(/([\s()])/g, 1);

    //filter unclosed parenthesis
    if (filtParenth.test(str)) {
        if (filtParenth2.test(str) === false) {
            str = "";
        }
        if (filtParenth2.test(str)) {
            var finalParenth = /[()]/g;
            str = str.replace(finalParenth, "");
        }
    } else if (filtParenth2.test(str)) {
        str = "";
    }


    str = str.replace(filtSpaces, "");

    //check for country code(if contains 11 digits first must be 1)
    if (filtLength.test(str)) {
        if (countryCode[0] !== "1") {
            str = 0;
        }
    }

    //check for area code length between parenthesis
    if (parenthLength !== null) {
        if (parenthLength[0].length > 5) {
            str = 0;
        }
    }


    return x.test(str);

}



telephoneCheck("(555-555-5555");
