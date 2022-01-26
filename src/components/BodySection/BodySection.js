import React from "react";
import Trick from "../Trick/Trick";
import { Fragment } from "react";
import ChooseLang from "./ChooseLang/ChooseLang";

function BodySection() {
  return (
    <>
      <ChooseLang />
      <div className="body">
        <Trick
          trick_heading="1. Declare multiple variables in Single Line"
          trick_desc="Declaring multiple variables is often done by separating them in new
          lines. But do you know that there is a more straight forward way to
          declare variables in a single line in python. It also makes the code
          more readable and short."
          code="a,b,c,d = 1,2,3,4"
        />
        <Trick
          trick_heading="2. Compare numbers just like in Math"
          trick_desc={
            <>
              If you want to check whether a number is in a given range, For
              example If you want check whether the variable x lies in the range
              1 to 100 then in other programming languages you do it by
              using&nbsp;
              <b>
                <em>if(x &gt; 1 && x &lt; 100).</em>
                <br />
              </b>
              But in Python you simple need to use the following:
              <br />
              <b>
                <em>if(1 &lt; x &lt; 100)</em>
              </b>
            </>
          }
          code={`x = 56
if 1 < x < 100 :
    print('x is in the range.')
else :
    print('x does not lie in the range.')    
`}
        />
        <Trick
          trick_heading="3. Else condition with a 'for' loop"
          trick_desc={
            <>
              If you are new to python and come from a diffrent language
              background then you might be surprised that how can we use an else
              condition with a 'for' loop and what is the need for using it.
              <br />
              Well it has many uses. Let us see through an example:
              <br />
              <br />
              In the below example we have a list of numbers, While iterating
              the list we have two cases
              <br /> <i>Case 1:</i> Whenever we find out an even number we print
              the number, break out of the loop and the else block is not
              executed.
              <br />
              <i>Case 2:</i> If the list does not contain an even number then it
              is obvious that the if condition never gets safisfied and we do
              not break from the loop. In these case the statement &#34;No Even
              numbers.&#34; is printed.
              <br />
              <br />
              Hence it is sure that the else block after the &#34;for&#34; loop
              gets executed only if the break statement never gets encountered.
            </>
          }
          code={`numbers = [1,7,21,4,5]
for number in numbers:
    if number % 2 == 0:
        print(number)
        break
else:
    print('No Even numbers.)`}
        />
        <Trick
          trick_heading="4. Pass values from list as arguments"
          trick_desc="There is a handy operator in python which is &#34;*&#34;.&nbsp;Using these operator
          we can pass the elements inside the list directly as the arguments to the function. Another use 
          of these operator is to print all the elements of the list separated by space directly without
          using the for loop."
          code={`def get_greater_element(a,b):
    if a > b :
        return a
    else :
        return b
    result = get_greater_element(*[4,9])
    print('The greater element in the list is',result)

    # Printing the elements without for loop.
      lst = [1,4,6,9]
      print(*lst)    # Output: 1 4 6 9
    `}
        />
        <Trick
          trick_heading="5. Creating a list with n elements"
          trick_desc="If you want to create a list with a fixed size filled with a specific value then you
          can use these trick. Remember that you can place whatever symbol you like in the list which is 
          filled in the entire list."
          code={`nums= [0] * 100
print(nums)
#Can fill with any value
#boolean
bools = [False] * 10
print(bools)
#string
chars = ['#'] * 10
print(chars)

          `}
        />
        <Trick
          trick_heading="6. Single-line if else"
          trick_desc="These allows testing a condition in a single line replacing the multiline if-else making
          the code compact."
          code={`a,b = 5,5
print('Both are equal.') if a==b else print('Not Equal.')
# Output: Both are equal.

#Another example
c,d = 2,0
value = c/d if d != 0 else 'Divide by zero not possible.'
print(value) # Output: Divide by zero not possible.
`}
        />
        <Trick
          trick_heading="7. Repeat strings without looping"
          trick_desc="You can repeat the characters in a string by directly multiplying the string with a 
         constant.These is pretty useful and can be done in a single line."
          code={`fruit='apple '
three_fruits = fruit * 3
print(three_fruits) #Output: apple apple apple
         `}
        />
        <Trick
          trick_heading="8. Print multiple values in a same line"
          trick_desc="We can print multiple values in a single print statement. Another use of these is that
        all these values are separated by space. So, there is no need to append the space manually between
        the values. "
          code={`name,type,color = 'apple','fruit','red'
print(name,type,color) #Output: apple fruit red

#You can also separate the values using a specified character
print(name,type,color,sep="&&") #Output: apple&&fruit&&red
        `}
        />
        <Trick
          trick_heading="9. Using underscore in variable names and values"
          trick_desc="Underscores can be used in variable names.Underscores can also be used to separate the values in
        large numbers. These is useful as we can read easily and also count digits in the number easily. "
          code={`_w_x_y_z = "wxyz"
#Remember that we can use any no of underscores.
x_____y = "xy"
print(_w_x_y_z,x_____y) #Output: wxyz xy

#Using underscores to separate large numbers
number = 1_000_000
print(number) #Output: 1000000
        `}
        />
      </div>
    </>
  );
}

export default BodySection;
