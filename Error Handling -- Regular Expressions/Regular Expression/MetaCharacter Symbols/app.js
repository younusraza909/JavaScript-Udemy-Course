let re;
//Literal Character
re = /hello/;
re = /hello/i;

//MetaCharacter Symbols
re = /^h/i; //Must Start With
re = /world$/i; //Must ends With
re = /^hello$/i; //Must  begin and end with
re = /h.llo/i; //matches any one character
re = /h*llo/i; //matches any number character
re = /gre?a?y/i; //optional character in this case we can also put nothing
re = /gre?a?y\?/; //escaping character

//Brackets [] - character Sets
re = /gr[ae]y/i; //Must Be an a or e in this case we cannot leave it empty
re = /[GF]ray/i; //Must be start G Or F
re = /[^GF]ray/i; //match anything except G or F
re = /^[GF]ray/i; //Must begin  with G or F
re = /[A-Z]ray/; //Any uppercase letter
re = /[a-z]ray/; //any lowercse letter
re = /[A-za-z]ray/; //any upper or lower case
re = /[0-9]ray/; //match any digit

//Braces {} -Quantifier
re = /Hel{2}o/i; //Will look for 2 l
re = /Hel{2,4}o/i; //Msut occur exactly range m
re = /Hel{2,}o/i;

//Parenthisis ()-grouping
re = /^([0-9]){3}$/;

//Shorthand Character Classes

re = /\w/; //Word Character -alphanumeric  or _
re = /\w+/; //+ =  one or more
re = /\W/; //Non-Word Character
re = /\d/; //Match any digit
re = /\d+/; //Match any digit - or more times
re = /\D/; //Match any  non digit
re = /\s/; //match white space character
re = /\S/; //match non-white space character
re = /Hell\b/i; //Word Boundary

//Assertion
re = /x(?=y)/; //Match x only followed by y
re = /x(?!y)/; //Match x only not followed by y

//String To Match
const str = "Hello, Welcome to Hell";

//Log Results
const result = re.exec(str);
console.log(result);

function reTest(re, str) {
  if (re.test(str)) {
    console.log(`${str} matches ${re.source}`);
  } else {
    console.log(`${str} does NOT match ${re.source}`);
  }
}

reTest(re, str);
