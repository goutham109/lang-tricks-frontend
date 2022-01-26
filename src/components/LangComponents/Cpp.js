import React from "react";
import Trick from "../Trick/Trick";

function Cpp() {
  return (
    <>
      <Trick
        trick_heading="1. Use typedef and #define"
        trick_desc="You can use typedef for giving shorter names to different data types, these saves a lot of time in declaring the variables in your program.
        You can directly use these shorter names for declaring the variables."
        code={`#include<iostream>
using namespace std;

int main()
{
cout << " hello world" <<endl;
  
  return 0;
}`}
      />
    </>
  );
}

export default Cpp;
