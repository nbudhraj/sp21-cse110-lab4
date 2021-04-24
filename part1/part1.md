
Part 1a. 

var declaration:
1. values added: 10 
2. final result: 10 

let declaration: 
1. values added: 10 
2. Error because result can only be accessed within the block it is defined in, which would be the in the if block that ends at line 10.

const declaration
1. Error because a constant cannot be reassigned 
2. Error because constant is being accessed outside of the block that it was defined in. 

Part 1b.

1. Print out the prices.length -1 because that is the last value i is updated to before the loop terminates. Since i was declared as a var, its scope lives within the function it was defined in, which is why we are able to print it.


2. Prints out 150 because that was the last value discountedPrice was initialized to before the loop terminated. Since discountedPrice was declared as a var, its scope lives within the function it was defined in, which is why we are able to print it.


3. Prints out 150 because that was the last value finalPrice was updated to before the loop terminated. Since finalPrice was declared as a var, its scope lives within the function it was defined in, which is why we are able to print it.


4. Returns an array with all of the final prices after discount is applied because in the loop we update the discounted array with each of the finalPrice values we calculate. Since discounted is a var, its scope lives within the function it as defined it, which is why we are able to return it.


5. Error because i was initialized using let, which means it cannot be accessed outside of the block that it was defined in. Since i was defined in the for loop, it cannot be accesed at line 12. 


6. Error because discountedPrice is being accessed outside of the block that it was defined in, as it was defined in the for loop. 


7. Prints out 150 because that was the last value finalPrice was updated to before the loop terminated. Since finalPrice was declared in the function block, its scope lives within the function, which is why we are able to access it and print it at line 14.


8. Returns an array with all of the final prices after discount is applied because in the loop we update the discounted array with each of the finalPrice values we calculate. Since discounted was declared in the function block, its scope lives within the function, which is why we are able to access it and return it at line 16.


9.  Error because i was initialized using let, which means it cannot be accessed outside of the block that it was defined in. Since i was defined in the for loop, it cannot be accesed at line 11.


10. Prints out prices.length because the const was declared inside the function block, so its scope lives within the function, which means we can access it a line 12. The const length does not get reassigned after its declaration, which is also why we do not see an error.


11. The function will return the discounted array containing prices after the discount is applied. The variable discounted is declared as a const, which means that it can be updated and changed, but cannot be reassigned. Since we never reassign discount and we have declared the const within the function block, we do not have any errors.


12.   
    A. student.name  
    B. student['Grad Year']
    C. student.greeting()
    D. student['Favorite Teacher'].name
    E. student.courseLoad[0]
13. 
    A. '32' because integers map to their exact string representation, so we're doing concatenation here

    B. 1 because '3' gets converted to its integer representation, so '3' - 2 = 1

    C. 3 because null gets converted to 0, so 3+null = 3.

    D. '3null' because we are doing string concatenation and null is interpreted as 'null' 

    E. 4 because true is converted to 1. 

    F. 0 because false is converted to 0 and null is converted to 0.

    G. '3undefined' because we're doing string concatenation and undefined is interpreted as "undefined" 

    H. NaN because "3" is converted to 3 and undefined is converted to NaN when we attempt to subtract.

14.    
    A. true because '2' gets converted to its integer representation, so 2 > 1   

    B. false because we have to compare the first characters of each string, so since '2' gets converted to its integer reprsentation and the first character of '12', which is '1' gets converted to its integer reprsentation, then 2 < 1 is false. 

    C. True because '2' gets converted to its integer representation 

    D. false because === checks equality without type conversion and since true is a different type than 2, true === 2 automatically returns false

    E. false because true gets converted to 1 and 1 != 2

    F. true because Boolean(2) gets converted to true because 2 > 0, which means that true == true is indeed true. 
    
15. The difference between == and === is that === is a strict equality operator that checks equality without type conversion, while == will check equality with type converison.  
    
    
17.  The result will be  newArr = [2, 4, 6]. This is because for each element in the array passed in ([1, 2, 3]) push the result of the callback function, which we have defined as doSomething, into newArr. Since doSomething takes in a number and returns its double, then for each element in the array [1, 2, 3], we push the result of doSomething into newArr, which means that newArr holds [2, 4, 6]. 
    
18.  Prints 1, and 4 immediately, and then it delays with 3 and waits one second to print 2. So the output would be: 
    1 
    4
    2
    2