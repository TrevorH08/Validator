Describe: validator()

Test: "Form takes user input"
Code:
const text = "111";
validator(text);
Expected Output: 111


make sure we have enough numbers inputted
make sure that the numbers are not negative

we can actually count the sum of the numbers 


Test: form will add up the sum of the inputted card and determine if its valid
Code:
const text = 4102080860435620
validator(text);
expected output: "NOT VALID"



Test: "double every other number to determine validity"
Code: 
const text = 4102080860435620
validator(text);
Expected Output: "4204070760465320"


Test: should show sum of new value and if its valid or not
Code:
const text = 4102080860435620
validator(text);
Expected Output: 0, valid

const text = 4102080880435620
validator(text);
Expected Output: some number, not valid


test: the form will only output if the card has 16 digits and isn't negative

code:
const text = lskjf
validator(text);
Expected Output: Error, credit cards are 16 positive integers

const text = -1234567890123456
Expected Output: Error, credit cards are 16 positive integers