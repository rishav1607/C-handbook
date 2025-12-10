import { Chapter } from './types';

export const COLORS = {
  pink: '#FF6B6B',
  yellow: '#FFD93D',
  blue: '#6BCB77',
  cyan: '#4D96FF',
  purple: '#A66CFF',
  orange: '#FF9F1C',
  white: '#FFFFFF',
  black: '#1a1a1a'
};

export const HANDBOOK_CONTENT: Chapter[] = [
  {
    id: "intro",
    title: "Introduction to C",
    color: COLORS.yellow,
    sections: [
      {
        id: "about-c",
        title: "About C Language",
        content: [
          { type: 'paragraph', content: "C is a general-purpose, high-level language that was originally developed by Dennis Ritchie at Bell Labs. It provides low-level access to memory, a clean set of keywords, and a clean style, which makes it suitable for system programming like operating system or compiler development." },
          { type: 'header', content: "Why learn C?" },
          { type: 'paragraph', content: "C is the mother of all programming languages. It is the base for C++, Java, JavaScript, etc. C is fast, efficient, and widely used in embedded systems, OS kernels (Linux, Windows), and high-performance libraries." }
        ]
      },
      {
        id: "compilation",
        title: "The Compilation Process",
        content: [
          { type: 'paragraph', content: "A computer only understands binary (0s and 1s). A C compiler translates human-readable C code into machine-readable code." },
          { type: 'list', content: [
            "Preprocessing: Lines starting with # are processed (e.g., #include).",
            "Compilation: Code is converted to Assembly language.",
            "Assembly: Assembly code is converted to Object code (.o or .obj).",
            "Linking: Library files are linked to create the final Executable (.exe)."
          ]}
        ]
      },
      {
        id: "prog-structure",
        title: "Structure of a C Program",
        content: [
          { type: 'code', content: `#include <stdio.h> // Preprocessor directive

int main() { // Entry point of the program
    printf("Hello World"); // Instruction
    return 0; // Return value to OS
}` },
          { type: 'paragraph', content: "1. #include <stdio.h>: Tells the compiler to include the Standard Input Output library." },
          { type: 'paragraph', content: "2. int main(): The execution of every C program starts from the main function." },
          { type: 'paragraph', content: "3. return 0;: Indicates that the program executed successfully." }
        ]
      }
    ]
  },
  {
    id: "ch1",
    title: "Ch 1: Variables, Constants & Keywords",
    color: COLORS.pink,
    sections: [
      {
        id: "vars-consts",
        title: "Variables & Constants",
        content: [
          { type: 'paragraph', content: "A Variable is a name given to a memory location where we can store data. This data can change during program execution." },
          { type: 'paragraph', content: "A Constant is an entity whose value does not change." },
          { type: 'subheader', content: "Types of Constants" },
          { type: 'list', content: [
            "Integer Constants: -1, 6, 7, 9",
            "Real Constants: -322.1, 2.5, 7.0",
            "Character Constants: 'a', '$', '9' (Must be in single quotes)"
          ]}
        ]
      },
      {
        id: "keywords",
        title: "Keywords in C",
        content: [
          { type: 'paragraph', content: "Keywords are reserved words whose meaning is already known to the compiler. There are 32 keywords in C." },
          { type: 'code', content: `auto     break    case     char
const    continue default  do
double   else     enum     extern
float    for      goto     if
int      long     register return
short    signed   sizeof   static
struct   switch   typedef  union
unsigned void     volatile while` },
          { type: 'note', content: "You cannot use keywords as variable names." }
        ]
      },
      {
        id: "data-types",
        title: "Data Types",
        content: [
          { type: 'list', content: [
            "int: Integers (2 or 4 bytes)",
            "float: Floating point numbers (4 bytes, 6 decimal precision)",
            "char: Characters (1 byte)",
            "double: Double precision floating point (8 bytes, 15 decimal precision)"
          ]},
          { type: 'code', content: `int a = 4;
float b = 8.5;
char c = 'u';
double d = 3.1415926535;` }
        ]
      },
      {
        id: "input-output",
        title: "Input and Output",
        content: [
          { type: 'subheader', content: "printf()" },
          { type: 'paragraph', content: "Used to output data to the console. Format specifiers are used to print values." },
          { type: 'subheader', content: "scanf()" },
          { type: 'paragraph', content: "Used to take input from the user." },
          { type: 'code', content: `int age;
printf("Enter your age: ");
scanf("%d", &age); // &age is the address of variable age` },
          { type: 'note', content: "Important Specifiers: %d (int), %f (float), %c (char), %lf (double)." }
        ]
      },
      {
        id: "ch1-practice",
        title: "Practice Set - Chapter 1",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to calculate the area of a rectangle using user inputs.",
              answer: `#include <stdio.h>

int main() {
    int length, breadth;
    printf("Enter length: ");
    scanf("%d", &length);
    
    printf("Enter breadth: ");
    scanf("%d", &breadth);
    
    int area = length * breadth;
    printf("The area of the rectangle is %d", area);
    
    return 0;
}`
            } 
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Calculate the area of a circle and calculate volume of a cylinder given radius and height.",
              answer: `#include <stdio.h>

int main() {
    float radius, height;
    float pi = 3.14159;
    
    printf("Enter radius: ");
    scanf("%f", &radius);
    
    printf("Area of circle is %f\\n", pi * radius * radius);
    
    printf("Enter height: ");
    scanf("%f", &height);
    
    printf("Volume of cylinder is %f", pi * radius * radius * height);
    
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to convert Celsius to Fahrenheit.",
              answer: `#include <stdio.h>

int main() {
    float c, f;
    printf("Enter temp in Celsius: ");
    scanf("%f", &c);
    
    f = (c * 9/5) + 32;
    
    printf("Value in Fahrenheit is %f", f);
    return 0;
}`
            }
          },
          {
            type: 'practice-question',
            content: {
              question: "Write a program to calculate simple interest.",
              answer: `#include <stdio.h>

int main() {
    float principal = 1000, rate = 5, years = 2;
    float interest = (principal * rate * years) / 100;
    
    printf("Simple Interest is %f", interest);
    return 0;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch2",
    title: "Ch 2: Instructions & Operators",
    color: COLORS.blue,
    sections: [
      {
        id: "instructions",
        title: "Types of Instructions",
        content: [
          { type: 'paragraph', content: "There are three main types of instructions in C:" },
          { type: 'list', content: [
            "Type Declaration Instruction: Declaring variables (e.g., int a;)",
            "Arithmetic Instruction: Performing math (e.g., a = b + c;)",
            "Control Instruction: Controlling flow (e.g., if, while)"
          ]}
        ]
      },
      {
        id: "arithmetic-ops",
        title: "Arithmetic Instructions",
        content: [
          { type: 'paragraph', content: "Operands can be int or float. Operators are + - * / %." },
          { type: 'paragraph', content: "Modular Division Operator (%): Returns the remainder. It works ONLY with integers." },
          { type: 'code', content: `5 % 2; // Returns 1
-5 % 2; // Returns -1
5 % -2; // Returns 1 (Sign depends on numerator)` },
          { type: 'note', content: "There is no operator for exponentiation in C. You must use pow(x, y) from <math.h>. Note that pow returns a double." }
        ]
      },
      {
        id: "type-conversion",
        title: "Type Conversion",
        content: [
          { type: 'paragraph', content: "When an operation is performed between two variables of different types, the result is converted:" },
          { type: 'list', content: [
            "int op int -> int",
            "int op float -> float",
            "float op float -> float"
          ]},
          { type: 'code', content: `5 / 2; // Becomes 2 (int)
5.0 / 2; // Becomes 2.5 (float)
2 / 5; // Becomes 0` }
        ]
      },
      {
        id: "precedence",
        title: "Operator Precedence",
        content: [
          { type: 'paragraph', content: "In C, expressions are evaluated based on precedence and associativity, not strictly BODMAS." },
          { type: 'list', content: [
            "Priority 1: * / %",
            "Priority 2: + -",
            "Priority 3: = (Assignment)"
          ]},
          { type: 'paragraph', content: "Tie-breaking: If operators have the same priority, we use Associativity (Left to Right for *, /, %, +, -)." },
          { type: 'code', content: `int x = 3 * 2 / 6;
// Step 1: 3 * 2 = 6 (Left to Right)
// Step 2: 6 / 6 = 1
// Result: 1` }
        ]
      },
      {
        id: "ch2-practice",
        title: "Practice Set - Chapter 2",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: { 
              question: "What will be the data type of the result of: 3.0 / 8 - 2?", 
              answer: "Float. \nExplanation: 3.0 is a float, so 3.0/8 becomes float. Then float - int becomes float." 
            } 
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to check if a number is divisible by 97.",
              answer: `#include <stdio.h>

int main() {
    int num;
    printf("Enter number: ");
    scanf("%d", &num);
    
    if (num % 97 == 0) {
        printf("Divisible");
    } else {
        printf("Not Divisible");
    }
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Explain step by step evaluation of: 3 * x / y - z + k, where x=2, y=3, z=3, k=1.",
              answer: `// 3 * 2 = 6
// 6 / 3 = 2
// 2 - 3 = -1
// -1 + 1 = 0
// Result is 0`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch3",
    title: "Ch 3: Conditional Instructions",
    color: COLORS.orange,
    sections: [
      {
        id: "if-else",
        title: "Decision Making",
        content: [
          { type: 'paragraph', content: "Sometimes we want to execute code only if a certain condition is true." },
          { type: 'code', content: `if (condition) {
    // block of code
} else {
    // block of code
}` },
          { type: 'paragraph', content: "C assumes any non-zero value as TRUE and zero as FALSE." }
        ]
      },
      {
        id: "relational-logical",
        title: "Relational & Logical Operators",
        content: [
          { type: 'subheader', content: "Relational Operators" },
          { type: 'paragraph', content: "==, >=, <=, >, <, !=" },
          { type: 'note', content: "Do not confuse = (assignment) with == (equality)." },
          
          { type: 'subheader', content: "Logical Operators" },
          { type: 'paragraph', content: "Used to combine multiple conditions." },
          { type: 'list', content: [
            "&& (AND): True if both are true.",
            "|| (OR): True if at least one is true.",
            "! (NOT): Reverses the state."
          ]}
        ]
      },
      {
        id: "else-if",
        title: "Else If Ladder & Ternary",
        content: [
          { type: 'code', content: `if (age > 60) {
    printf("Senior");
} else if (age > 18) {
    printf("Adult");
} else {
    printf("Child");
}` },
          { type: 'subheader', content: "Ternary Operator" },
          { type: 'paragraph', content: "Short hand for if-else." },
          { type: 'code', content: `// condition ? true-expression : false-expression
(c > 5) ? printf("Greater") : printf("Smaller");` }
        ]
      },
      {
        id: "switch",
        title: "Switch Case",
        content: [
          { type: 'paragraph', content: "Used when checking a single variable against many values." },
          { type: 'code', content: `switch (rating) {
    case 1: 
        printf("Poor"); 
        break;
    case 2: 
        printf("Average"); 
        break;
    default: 
        printf("Invalid");
}` },
          { type: 'note', content: "The 'break' keyword is crucial. Without it, execution 'falls through' to the next case automatically." }
        ]
      },
      {
        id: "ch3-practice",
        title: "Practice Set - Chapter 3",
        isPracticeSet: true,
        content: [
          { 
             type: 'practice-question', 
             content: {
               question: "What will be the output of `int a=10; if(a=11) printf(\"11\"); else printf(\"10\");`?",
               answer: "It prints '11'.\nReason: 'a=11' is an assignment operation which returns 11. In C, any non-zero number is considered true, so the if condition matches."
             }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to find out whether a student is pass or fail; if it requires a total of 40% and at least 33% in each subject to pass. Assume 3 subjects.",
              answer: `#include <stdio.h>

int main() {
    int s1, s2, s3;
    printf("Enter marks for 3 subjects: ");
    scanf("%d %d %d", &s1, &s2, &s3);
    
    float total = (s1 + s2 + s3) / 3.0;
    
    if (total >= 40 && s1 >= 33 && s2 >= 33 && s3 >= 33) {
        printf("PASS. Percentage: %f", total);
    } else {
        printf("FAIL. Percentage: %f", total);
    }
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to find whether a year entered by user is a leap year or not.",
              answer: `#include <stdio.h>

int main() {
    int year;
    scanf("%d", &year);
    
    if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
        printf("Leap Year");
    } else {
        printf("Not Leap Year");
    }
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to determine if a character is lowercase or not.",
              answer: `#include <stdio.h>

int main() {
    char ch;
    scanf("%c", &ch);
    
    // ASCII check
    if (ch >= 'a' && ch <= 'z') {
        printf("Lowercase");
    } else {
        printf("Not lowercase");
    }
    return 0;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch4",
    title: "Ch 4: Loop Control Instructions",
    color: COLORS.purple,
    sections: [
      {
        id: "loops-intro",
        title: "Why Loops?",
        content: [
          { type: 'paragraph', content: "Loops are used to repeat a block of code similar instructions." },
          { type: 'list', content: [
            "While Loop",
            "Do-While Loop",
            "For Loop"
          ]}
        ]
      },
      {
        id: "while-loop",
        title: "While Loop",
        content: [
          { type: 'paragraph', content: "Checks the condition first, then executes code." },
          { type: 'code', content: `int i = 0;
while (i < 10) {
    printf("%d", i);
    i++;
}` },
          { type: 'note', content: "If the condition never becomes false, you get an Infinite Loop." }
        ]
      },
      {
        id: "increment-op",
        title: "Increment & Decrement",
        content: [
          { type: 'paragraph', content: "i++ (Post-increment): Uses value then increments." },
          { type: 'paragraph', content: "++i (Pre-increment): Increments value then uses it." },
          { type: 'code', content: `int i = 5;
printf("%d", i++); // Prints 5, then i becomes 6
printf("%d", ++i); // i becomes 7, then prints 7` }
        ]
      },
      {
        id: "do-while",
        title: "Do-While Loop",
        content: [
          { type: 'paragraph', content: "Executes the code AT LEAST ONCE, then checks the condition." },
          { type: 'code', content: `int i = 0;
do {
    printf("%d", i);
    i++;
} while (i < 5);` }
        ]
      },
      {
        id: "for-loop",
        title: "For Loop",
        content: [
          { type: 'paragraph', content: "Combines initialization, condition, and increment in one line." },
          { type: 'code', content: `for (int i = 0; i < n; i++) {
    printf("%d", i);
}` },
          { type: 'paragraph', content: "The loop can also run in reverse:" },
          { type: 'code', content: `for (int i = 5; i ; i--) // Stops when i is 0 (False)` }
        ]
      },
      {
        id: "break-continue",
        title: "Break & Continue",
        content: [
          { type: 'paragraph', content: "Break: Immediately exits the loop." },
          { type: 'paragraph', content: "Continue: Skips the current iteration and starts the next one." },
          { type: 'code', content: `for(int i=0; i<5; i++) {
    if(i==2) continue; // Skips printing 2
    if(i==4) break;    // Stops loop at 4
    printf("%d ", i);
}
// Output: 0 1 3` }
        ]
      },
      {
        id: "ch4-practice",
        title: "Practice Set - Chapter 4",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to print multiplication table of a given number n.",
              answer: `#include <stdio.h>

int main() {
    int n = 5;
    for(int i=1; i<=10; i++) {
        printf("%d x %d = %d\\n", n, i, n*i);
    }
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to print multiplication table of 10 in reversed order.",
              answer: `#include <stdio.h>

int main() {
    for(int i=10; i>=1; i--) {
        printf("10 x %d = %d\\n", i, 10*i);
    }
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to sum first ten natural numbers using while loop.",
              answer: `#include <stdio.h>

int main() {
    int i = 1, sum = 0;
    while(i <= 10) {
        sum += i;
        i++;
    }
    printf("Sum is %d", sum);
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to calculate the factorial of a given number using a for loop.",
              answer: `#include <stdio.h>

int main() {
    int n = 5, fact = 1;
    for(int i=1; i<=n; i++) {
        fact *= i;
    }
    printf("Factorial of %d is %d", n, fact);
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to check whether a given number is prime or not.",
              answer: `#include <stdio.h>

int main() {
    int n = 7, isPrime = 1;
    for(int i=2; i*i <= n; i++) {
        if(n%i == 0) {
            isPrime = 0;
            break;
        }
    }
    if(isPrime) printf("Prime");
    else printf("Not Prime");
    return 0;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch5",
    title: "Ch 5: Functions & Recursion",
    color: COLORS.pink,
    sections: [
      {
        id: "functions",
        title: "Functions Basics",
        content: [
          { type: 'paragraph', content: "A function is a block of code which performs a particular task. It allows us to reuse code (DRY - Don't Repeat Yourself)." },
          { type: 'subheader', content: "Parts of a Function" },
          { type: 'list', content: [
            "Prototype: Tells compiler about function existence (declared before main).",
            "Definition: The actual logic.",
            "Call: Executing the function."
          ]},
          { type: 'code', content: `#include <stdio.h>
void goodMorning(); // Prototype

int main() {
    goodMorning(); // Function Call
    return 0;
}

void goodMorning() { // Definition
    printf("Good Morning!");
}` }
        ]
      },
      {
        id: "params",
        title: "Parameters & Return Values",
        content: [
          { type: 'paragraph', content: "Functions can take input (parameters) and return a value." },
          { type: 'code', content: `int sum(int a, int b) {
    return a + b;
}` },
          { type: 'paragraph', content: "When a function is called, the values passed are called 'Actual Parameters'. The variables defined in the function header are 'Formal Parameters'." },
          { type: 'note', content: "Local variables live only inside the function. They are destroyed when function exits." }
        ]
      },
      {
        id: "recursion",
        title: "Recursion",
        content: [
          { type: 'paragraph', content: "Recursion is when a function calls itself." },
          { type: 'paragraph', content: "It must have a 'Base Case' to stop the recursion, otherwise it crashes (Stack Overflow)." },
          { type: 'code', content: `int factorial(int x) {
    if (x == 1 || x == 0) return 1; // Base case
    return x * factorial(x - 1); // Recursive case
}` }
        ]
      },
      {
        id: "ch5-practice",
        title: "Practice Set - Chapter 5",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Write a function to find average of three numbers.",
              answer: `float average(int a, int b, int c) {
    return (a + b + c) / 3.0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a function to convert Celsius temperature into Fahrenheit.",
              answer: `float toFahrenheit(float celsius) {
    return (celsius * 9/5) + 32;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a function to calculate force of attraction on a body of mass m exerted by earth (g=9.8).",
              answer: `float force(float mass) {
    return mass * 9.8;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program using recursion to calculate the nth element of Fibonacci series.",
              answer: `int fib(int n) {
    if (n <= 1) return n;
    return fib(n-1) + fib(n-2);
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a recursive function to print the first n natural numbers.",
              answer: `void printNatural(int n) {
    if (n > 0) {
        printNatural(n - 1);
        printf("%d ", n);
    }
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch6",
    title: "Ch 6: Pointers",
    color: COLORS.yellow,
    sections: [
      {
        id: "pointer-basics",
        title: "What is a Pointer?",
        content: [
          { type: 'paragraph', content: "A pointer is a variable that stores the memory address of another variable." },
          { type: 'subheader', content: "Operators" },
          { type: 'list', content: [
            "& (Address of): Returns the address of a variable.",
            "* (Value at Address / Dereference): Returns the value stored at that address."
          ]},
          { type: 'code', content: `int i = 72;
int *j = &i; // j contains address of i
printf("%d", *j); // Prints 72 (Value at address in j)` }
        ]
      },
      {
        id: "pointer-to-pointer",
        title: "Pointer to Pointer",
        content: [
          { type: 'paragraph', content: "A variable that stores the address of another pointer." },
          { type: 'code', content: `int i = 5;
int *ptr = &i;
int **pptr = &ptr; // Stores address of ptr` }
        ]
      },
      {
        id: "call-by-ref",
        title: "Call by Value vs Reference",
        content: [
          { type: 'paragraph', content: "Call by Value: Sends a copy of data. Changing formal parameter doesn't affect actual parameter." },
          { type: 'paragraph', content: "Call by Reference: Sends the address. Changing value at address DOES change the original variable." },
          { type: 'code', content: `void swap(int *a, int *b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}
// Called as: swap(&x, &y);` }
        ]
      },
      {
        id: "ch6-practice",
        title: "Practice Set - Chapter 6",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to print the address of a variable. Use this address to get the value of the variable.",
              answer: `#include <stdio.h>
int main() {
    int i = 10;
    int *ptr = &i;
    printf("Address: %u\\n", ptr);
    printf("Value: %d", *ptr);
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program having a variable i. Print the address of i. Pass this variable to a function and print its address. Are these addresses same?",
              answer: `#include <stdio.h>
void printAddr(int i) {
    printf("Address in function: %u\\n", &i);
}
int main() {
    int i = 5;
    printf("Address in main: %u\\n", &i);
    printAddr(i);
    return 0;
}
// Answer: No, they are different because 'i' is passed by value (copied).`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to change the value of a variable to ten times of its current value using a function and pass by reference.",
              answer: `void tenTimes(int *val) {
    *val = (*val) * 10;
}
// Call: tenTimes(&i);`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a function using pointers to sum and average of two numbers. Use pointers to return 2 values.",
              answer: `void sumAndAvg(int a, int b, int *sum, float *avg) {
    *sum = a + b;
    *avg = (float)(*sum) / 2;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch7",
    title: "Ch 7: Arrays",
    color: COLORS.blue,
    sections: [
      {
        id: "array-basics",
        title: "Array Basics",
        content: [
          { type: 'paragraph', content: "An array is a collection of similar types of data elements stored in contiguous memory locations." },
          { type: 'code', content: `int marks[5]; // Stores 5 integers
marks[0] = 33;
marks[1] = 45;` },
          { type: 'paragraph', content: "Initialization can be done in one line:" },
          { type: 'code', content: `int marks[] = {33, 45, 67};` }
        ]
      },
      {
        id: "pointer-arithmetic",
        title: "Pointer Arithmetic",
        content: [
          { type: 'paragraph', content: "Since array elements are contiguous in memory, we can use pointers to traverse them." },
          { type: 'paragraph', content: "ptr++ increments the address by sizeof(type). For int (4 bytes), it jumps 4 bytes." },
          { type: 'code', content: `int arr[] = {1, 2, 3};
int *ptr = arr; // Points to arr[0]
ptr++; // Now points to arr[1]` }
        ]
      },
      {
        id: "arrays-functions",
        title: "Arrays to Functions",
        content: [
          { type: 'paragraph', content: "Arrays are passed to functions by reference (address of first element)." },
          { type: 'code', content: `void printArray(int *ptr, int n) {
    for(int i=0; i<n; i++) {
        printf("%d ", *(ptr+i));
    }
}` }
        ]
      },
      {
        id: "multidimensional",
        title: "Multidimensional Arrays",
        content: [
          { type: 'paragraph', content: "Arrays of arrays. Used for matrices." },
          { type: 'code', content: `int arr[2][3] = { {1,2,3}, {4,5,6} };
// Accessing 5: arr[1][1]` }
        ]
      },
      {
        id: "ch7-practice",
        title: "Practice Set - Chapter 7",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Create an array of 10 numbers. Verify using pointer arithmetic that (ptr+2) points to the 3rd element.",
              answer: `#include <stdio.h>
int main() {
    int arr[10] = {1,2,3,4,5,6,7,8,9,10};
    int *ptr = arr;
    
    if (ptr+2 == &arr[2]) {
        printf("Verified: ptr+2 points to arr[2] (value: %d)", *(ptr+2));
    }
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to create an array of 10 integers and store multiplication table of 5 in it.",
              answer: `#include <stdio.h>
int main() {
    int mul[10];
    for(int i=0; i<10; i++) {
        mul[i] = 5 * (i+1);
    }
    // Print to verify
    for(int i=0; i<10; i++) printf("%d ", mul[i]);
    return 0;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program containing a function which reverses the array passed to it.",
              answer: `void reverse(int *arr, int n) {
    for(int i=0; i<n/2; i++) {
        int temp = arr[i];
        arr[i] = arr[n-i-1];
        arr[n-i-1] = temp;
    }
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Create a 3D array and print the address of its elements in increasing order.",
              answer: `#include <stdio.h>
int main() {
    int arr[2][2][2];
    for(int i=0; i<2; i++) {
        for(int j=0; j<2; j++) {
            for(int k=0; k<2; k++) {
                printf("%u\\n", &arr[i][j][k]);
            }
        }
    }
    return 0;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch8",
    title: "Ch 8: Strings",
    color: COLORS.orange,
    sections: [
      {
        id: "string-intro",
        title: "Introduction to Strings",
        content: [
          { type: 'paragraph', content: "A string is a 1-D character array terminated by a null character ('\\0')." },
          { type: 'code', content: `char s[] = {'H', 'a', 'r', 'r', 'y', '\\0'};
// Or shorthand
char s[] = "Harry"; // Compiler adds \\0 automatically` }
        ]
      },
      {
        id: "string-input",
        title: "Printing & Input",
        content: [
          { type: 'paragraph', content: "Use %s format specifier." },
          { type: 'code', content: `char s[50];
scanf("%s", s); // Reads until space` },
          { type: 'note', content: "scanf cannot read multi-word strings with spaces. Use gets() (unsafe) or fgets(). puts() prints output." },
          { type: 'code', content: `char str[100];
fgets(str, 100, stdin); // Safe input` }
        ]
      },
      {
        id: "pointers-strings",
        title: "Strings & Pointers",
        content: [
          { type: 'code', content: `char *ptr = "Harry";` },
          { type: 'paragraph', content: "This creates a string in read-only memory and ptr points to it. We can change ptr to point elsewhere." },
          { type: 'paragraph', content: "char ptr[] = \"Harry\"; creates an array. Content can change, but ptr cannot be reassigned." }
        ]
      },
      {
        id: "lib-functions",
        title: "Standard Library Functions",
        content: [
          { type: 'paragraph', content: "Include <string.h>" },
          { type: 'list', content: [
            "strlen(str): Returns length excluding null char.",
            "strcpy(target, source): Copies source to target.",
            "strcat(s1, s2): Concatenates s2 to end of s1.",
            "strcmp(s1, s2): Compares strings. Returns 0 if equal, positive if s1 > s2 (ASCII), negative if s1 < s2."
          ]}
        ]
      },
      {
        id: "ch8-practice",
        title: "Practice Set - Chapter 8",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to take string as an input using %c and %s loop. Confirm that the strings are equal.",
              answer: `char str1[50], str2[50];
char c;
int i = 0;

printf("Enter chars: ");
while(c != '\\n') {
    scanf("%c", &c);
    str1[i] = c;
    i++;
}
str1[i-1] = '\\0'; // Replace newline

printf("Enter string: ");
scanf("%s", str2);

printf("Compare: %d", strcmp(str1, str2));`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write your own version of strlen function.",
              answer: `int my_strlen(char *st) {
    int len = 0;
    char *ptr = st;
    while(*ptr != '\\0') {
        len++;
        ptr++;
    }
    return len;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a function slice() to slice a string. It should not print, just slice.",
              answer: `void slice(char *st, int m, int n) {
    int i = 0;
    while((m+i) < n) {
        st[i] = st[m+i];
        i++;
    }
    st[i] = '\\0';
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to encrypt a string by adding 1 to the ASCII value of its characters.",
              answer: `void encrypt(char *c) {
    char *ptr = c;
    while(*ptr != '\\0') {
        *ptr = *ptr + 1;
        ptr++;
    }
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to count the occurrence of a given character in a string.",
              answer: `int count(char *st, char c) {
    int count = 0;
    while(*st != '\\0') {
        if (*st == c) count++;
        st++;
    }
    return count;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch9",
    title: "Ch 9: Structures",
    color: COLORS.purple,
    sections: [
      {
        id: "struct-basics",
        title: "Basic Structures",
        content: [
          { type: 'paragraph', content: "Arrays hold similar data. Structures hold dissimilar data." },
          { type: 'code', content: `struct Employee {
    int id;
    char name[20];
    float salary;
};

struct Employee e1;
e1.id = 101;
strcpy(e1.name, "Harry");` }
        ]
      },
      {
        id: "init-pointers",
        title: "Initialization & Pointers",
        content: [
          { type: 'paragraph', content: "Can be initialized in one line:" },
          { type: 'code', content: `struct Employee e1 = {100, "Harry", 1000.50};` },
          { type: 'subheader', content: "Pointer to Structure" },
          { type: 'code', content: `struct Employee *ptr = &e1;
printf("%d", (*ptr).id); 
// OR use Arrow Operator
printf("%d", ptr->id);` }
        ]
      },
      {
        id: "typedef",
        title: "Typedef Keyword",
        content: [
          { type: 'paragraph', content: "Used to create an alias for a data type." },
          { type: 'code', content: `typedef struct Employee {
    int code;
    // ...
} Emp;

Emp e1; // Instead of 'struct Employee e1'` }
        ]
      },
      {
        id: "ch9-practice",
        title: "Practice Set - Chapter 9",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Create a 2D vector structure having two coordinates x and y. Write a function to sum two vectors.",
              answer: `struct vector { int x; int y; };

struct vector sumVector(struct vector v1, struct vector v2) {
    struct vector result;
    result.x = v1.x + v2.x;
    result.y = v1.y + v2.y;
    return result;
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to store details of 3 students using structures.",
              answer: `struct student { int roll; float cgpa; };
int main() {
    struct student s[3];
    s[0].roll = 1; s[0].cgpa = 9.0;
    // ...
}`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a structure capable of storing Date. Write a function to compare those dates.",
              answer: `struct date { int d, m, y; };

int compare(struct date d1, struct date d2) {
    if(d1.y != d2.y) return d1.y - d2.y;
    if(d1.m != d2.m) return d1.m - d2.m;
    return d1.d - d2.d;
}`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch10",
    title: "Ch 10: File I/O",
    color: COLORS.cyan,
    sections: [
      {
        id: "file-basics",
        title: "File Pointer & Opening",
        content: [
          { type: 'paragraph', content: "A file pointer points to a structure of type FILE." },
          { type: 'code', content: `FILE *ptr;
ptr = fopen("sample.txt", "r"); // Open for reading` },
          { type: 'list', content: [
            "r: Read (NULL if missing)",
            "w: Write (Creates new/Overwrites)",
            "a: Append (Adds to end)",
            "r+: Read + Write (Start)",
            "w+: Read + Write (Truncates)",
            "a+: Read + Write (End)"
          ]},
          { type: 'note', content: "Always check if ptr == NULL to handle file open errors." }
        ]
      },
      {
        id: "reading-writing",
        title: "Reading & Writing",
        content: [
          { type: 'subheader', content: "Formatted I/O" },
          { type: 'code', content: `int num;
fscanf(ptr, "%d", &num); // Read int from file
fprintf(ptr, "The number is %d", num); // Write to file` },
          { type: 'subheader', content: "Character I/O" },
          { type: 'code', content: `char c = fgetc(ptr); // Get char
fputc('c', ptr); // Put char` }
        ]
      },
      {
        id: "eof",
        title: "EOF (End of File)",
        content: [
          { type: 'paragraph', content: "fgetc returns EOF when end of file is reached." },
          { type: 'code', content: `char c;
c = fgetc(ptr);
while(c != EOF) {
    printf("%c", c);
    c = fgetc(ptr);
}` },
          { type: 'paragraph', content: "Always close the file!" },
          { type: 'code', content: `fclose(ptr);` }
        ]
      },
      {
        id: "ch10-practice",
        title: "Practice Set - Chapter 10",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to read three integers from a file.",
              answer: `FILE *ptr = fopen("nums.txt", "r");
int a, b, c;
fscanf(ptr, "%d %d %d", &a, &b, &c);
fclose(ptr);`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to generate multiplication table of a given number in text format.",
              answer: `int n = 5;
FILE *ptr = fopen("table.txt", "w");
for(int i=0; i<10; i++) {
    fprintf(ptr, "%d x %d = %d\\n", n, i+1, n*(i+1));
}
fclose(ptr);`
            }
          }
        ]
      }
    ]
  },
  {
    id: "ch11",
    title: "Ch 11: Dynamic Memory",
    color: COLORS.pink,
    sections: [
      {
        id: "dma-intro",
        title: "Static vs Dynamic Memory",
        content: [
          { type: 'paragraph', content: "Static Memory: Size determined at compile time (e.g., int arr[10])." },
          { type: 'paragraph', content: "Dynamic Memory: Size determined at runtime. Memory comes from the Heap." },
          { type: 'note', content: "Requires <stdlib.h>" }
        ]
      },
      {
        id: "malloc-calloc",
        title: "malloc & calloc",
        content: [
          { type: 'subheader', content: "malloc (Memory Allocation)" },
          { type: 'paragraph', content: "Allocates block of bytes. Returns void pointer. Contains garbage values." },
          { type: 'code', content: `int *ptr;
ptr = (int*) malloc(5 * sizeof(int));` },
          { type: 'subheader', content: "calloc (Contiguous Allocation)" },
          { type: 'paragraph', content: "Like malloc, but initializes all bytes to 0." },
          { type: 'code', content: `ptr = (int*) calloc(5, sizeof(int));` }
        ]
      },
      {
        id: "free-realloc",
        title: "free & realloc",
        content: [
          { type: 'subheader', content: "free()" },
          { type: 'paragraph', content: "Deallocates memory. Important to prevent memory leaks." },
          { type: 'code', content: `free(ptr);` },
          { type: 'subheader', content: "realloc()" },
          { type: 'paragraph', content: "Changes size of previously allocated memory." },
          { type: 'code', content: `ptr = realloc(ptr, 10 * sizeof(int));` }
        ]
      },
      {
        id: "ch11-practice",
        title: "Practice Set - Chapter 11",
        isPracticeSet: true,
        content: [
          { 
            type: 'practice-question', 
            content: {
              question: "Write a program to dynamically create an array of size 6 capable of storing 6 integers.",
              answer: `int *ptr = (int*) malloc(6 * sizeof(int));`
            }
          },
          { 
            type: 'practice-question', 
            content: {
              question: "Solve problem 1 using calloc().",
              answer: `int *ptr = (int*) calloc(6, sizeof(int));`
            }
          }
        ]
      }
    ]
  },
  {
    id: "proj1",
    title: "Project 1: Number Guessing",
    color: COLORS.blue,
    sections: [
      {
        id: "proj1-details",
        title: "Project Details",
        content: [
            { type: 'paragraph', content: "This is a fun project to verify your basic C skills (Variables, Loops, Conditions)." },
            { type: 'subheader', content: "The Problem" },
            { type: 'paragraph', content: "Write a program that generates a random number and asks the player to guess it. If the player's guess is higher than the actual number, the program displays 'Lower number please'. Similarly if the user's guess is too low, the program prints 'Higher number please'." },
            { type: 'paragraph', content: "When the user guesses the correct number, the program displays the number of guesses obtained." },
            { type: 'subheader', content: "Hints" },
            { type: 'list', content: [
                "Use rand() function to generate random number.",
                "Use srand(time(0)) to seed the random number generator so it generates different numbers each time.",
                "Include <stdlib.h> and <time.h>."
            ]},
            { type: 'code', content: `// Random Number Logic
#include <stdlib.h>
#include <time.h>

int number;
srand(time(0));
number = rand() % 100 + 1; // Generates random number between 1 and 100` }
        ]
      }
    ]
  }
];