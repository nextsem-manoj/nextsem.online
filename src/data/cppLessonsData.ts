export interface CppExerciseBlock {
  question: string;
  options: string[];
  correctAnswer: string;
  hint: string;
}

export interface CppScreenshot {
  src: string;
  caption: string;
  alt?: string;
  stepNumber?: number;
  commandSnippet?: string;
}

export interface CppLesson {
  id: number;
  slug: string;
  title: string;
  unit: string;
  bookRef: string;
  icon: string;
  exercise: CppExerciseBlock;
  contentBody: string;
  screenshots?: CppScreenshot[];
}

export const cppLessons: CppLesson[] = [
  {
    id: 1,
    slug: "learn-cpp-introduction-and-windows-setup",
    title: "Lesson 1: C++ Introduction & ⊞ Windows 11 GCC Compiler Setup",
    unit: "Unit 1: C++ Foundations & Windows 11 Setup",
    bookRef: "C++ Fundamentals & Compiler Setup (p. 1-15)",
    icon: "⚡",
    exercise: {
      question: "Which C++ header file is required to use std::cout and std::cin for console I/O?",
      options: [
        "#include <stdio.h>",
        "#include <iostream>",
        "#include <stdlib.h>",
        "#include <vector>"
      ],
      correctAnswer: "#include <iostream>",
      hint: "iostream stands for Input/Output Stream in the standard C++ library!"
    },
    contentBody: `### Welcome to High-Performance C++ Systems Programming

C++ is a compiled, general-purpose programming language created by Bjarne Stroustrup in 1979 at Bell Labs as an extension of the C programming language. Often called "C with Classes", C++ gives software engineers complete control over CPU hardware, memory addresses, and system execution speed.

---

### Where is C++ Used in Software Engineering?

C++ powers the most demanding software systems on Earth:

* Operating Systems: The core kernel of Windows 11, macOS, and Linux system services.
* Game Engines: Unreal Engine 5, Unity core runtime, and 3D graphics pipelines (DirectX 12 / Vulkan).
* High-Frequency Trading: Financial engines executing stock trades in nanoseconds.
* Artificial Intelligence & ML: Core C++ backends of PyTorch, TensorFlow, and CUDA GPU kernels.
* Web Browsers: The V8 JavaScript engine in Google Chrome and Microsoft Edge.

---

### Language Architecture Comparison

| Feature | C++ | Python | JavaScript |
| :--- | :--- | :--- | :--- |
| Execution Model | Native Compiled Machine Code | Interpreted Bytecode | JIT Compiled Engine |
| Execution Speed | Ultra-Fast Hardware Level | Slower Dynamic Typing | Fast Virtual Machine |
| Memory Control | Manual Stack Heap & RAII | Garbage Collector | Garbage Collector |
| Hardware Access | Direct Pointer & Memory Access | High Abstraction | Sandboxed Web Browser |

---

### Step-by-Step: Setting Up GCC / g++ Compiler on Windows 11

To write, compile, and run C++ programs on Windows 11 using Command Prompt or Windows Terminal:

#### Step 1: Install MinGW-w64 (GCC for Windows 11)
Open Windows Terminal or Command Prompt (cmd.exe) and run the package manager command:

\`\`\`cmd
winget install MSYS2.MSYS2
\`\`\`

#### Step 2: Install g++ Toolchain
In the MSYS2 terminal, execute:

\`\`\`bash
pacman -S --needed base-devel mingw-w64-ucrt-x86_64-toolchain
\`\`\`

#### Step 3: Add g++ Compiler to Windows PATH
1. Press Win + R, type sysdm.cpl, and press Enter.
2. Go to Advanced tab and click Environment Variables.
3. Under System variables, select Path and click Edit.
4. Click New and paste your compiler binary folder path:  
   C:\\msys64\\ucrt64\\bin
5. Click OK on all dialog boxes.

#### Step 4: Verify Compiler Installation in Windows Command Prompt
Open a new Windows 11 Command Prompt (cmd.exe) and run:

\`\`\`cmd
g++ --version
\`\`\`

If configured correctly, you will see output like:  
g++ (Rev2, Built by MSYS2 project) 13.2.0

---

### Understanding the C++ Compilation Pipeline

When you compile a C++ file on Windows 11, the compiler transforms human-readable C++ code into machine instructions through 4 stages:

1. Preprocessor: Processes #include directives and expands macros.
2. Compiler: Translates C++ code into Assembly language code.
3. Assembler: Converts Assembly code into machine relocatable object files.
4. Linker: Combines object files with C++ Standard Library binaries into a final Windows 11 executable.

---

### Your First C++ Program: Hello World

Create a file named main.cpp on your computer and type the following code:

\`\`\`cpp
#include <iostream> // Include Standard Input/Output Stream Library

// Main entry point function executed by Windows 11 OS
int main() {
    // std::cout prints text to the Windows 11 terminal console
    std::cout << "Hello World from C++ on Windows 11!" << std::endl;
    
    return 0; // Return 0 signals successful program termination to the OS
}
\`\`\`

#### Code Line-by-Line Breakdown:
* **#include <iostream>**: Tells the compiler to include the Standard I/O header file containing std::cout and std::cin.
* **int main()**: The primary entry point function required in every executable C++ program.
* **std::cout**: Standard Character Output stream.
* **<<**: The Insertion Operator, sending text into the output stream.
* **std::endl**: Inserts a new line character and flushes the output buffer.
* **return 0;**: Returns exit status code 0 to Windows 11 OS signaling clean execution.

---

### Compiling and Running on Windows 11 Command Prompt

Open your terminal in the directory where main.cpp is saved and run:

\`\`\`cmd
g++ -o main.exe main.cpp
main.exe
\`\`\`

### Compiler Optimization Flags (C++20 Release Build):

\`\`\`cmd
g++ -O3 -std=c++20 main.cpp -o main_optimized.exe
\`\`\`

* **-O3**: Tells GCC compiler to apply maximum release loop unrolling and SIMD CPU vectorization.
* **-std=c++20**: Enables modern ISO C++20 standard features.

---

> Windows Tip: In Windows 11 Terminal, press Ctrl + Shift + P to open the Command Palette and customize terminal settings while running your C++ builds!`
  },
  {
    id: 2,
    slug: "cpp-variables-data-types-and-cin",
    title: "Lesson 2: Primitive Data Types, Variables & User Input with std::cin",
    unit: "Unit 1: C++ Foundations & Windows 11 Setup",
    bookRef: "C++ Data Types & Input Operations (p. 16-32)",
    icon: "🔢",
    exercise: {
      question: "Which input stream operator is used with std::cin to read user input into a variable?",
      options: [
        "<< (Insertion operator)",
        ">> (Extraction operator)",
        "-> (Arrow operator)",
        ":: (Scope resolution operator)"
      ],
      correctAnswer: ">> (Extraction operator)",
      hint: "std::cout uses insertion (<<) pointing out, while std::cin uses extraction (>>) pointing into the variable!"
    },
    contentBody: `### 🔢 Master C++ Data Types & Memory Storage

In C++, every variable is strongly typed. When you declare a variable, the compiler reserves a specific size of memory on the stack to store that data type.

---

### 📊 Primitive Data Types Cheat Sheet

* 🔢 **\`int\`** (4 Bytes): Stores whole integers e.g. \`int age = 25;\` (-2,147,483,648 to 2,147,483,647).
* 🎯 **\`double\`** (8 Bytes): High-precision double floating-point number e.g. \`double salary = 75430.50;\`.
* 🔤 **\`char\`** (1 Byte): Single character enclosed in single quotes e.g. \`char grade = 'A';\`.
* 🛡️ **\`bool\`** (1 Byte): Boolean true or false value e.g. \`bool isPassed = true;\`.
* 📜 **\`std::string\`** (Included via \`<string>\`): Text sequence e.g. \`std::string name = "NextSem Developer";\`.

---

### 💻 Code Example: Reading Input with std::cin

\`\`\`cpp
#include <iostream>
#include <string>

int main() {
    std::string studentName;
    int rollNumber;
    double gpa;

    std::cout << "Enter Student Name: ";
    std::getline(std::cin, studentName); // Read full line including spaces

    std::cout << "Enter Roll Number: ";
    std::cin >> rollNumber;

    std::cout << "Enter GPA: ";
    std::cin >> gpa;

    std::cout << "\n--- Student Report Card ---" << std::endl;
    std::cout << "Name: " << studentName << std::endl;
    std::cout << "Roll No: " << rollNumber << std::endl;
    std::cout << "GPA: " << gpa << " / 4.0" << std::endl;

    return 0;
}
\`\`\`

### 🛠️ Execution Output in ⊞ Windows 11 Command Prompt:

\`\`\`cmd
Enter Student Name: Manoj Kumar
Enter Roll Number: 101
Enter GPA: 3.92

--- Student Report Card ---
Name: Manoj Kumar
Roll No: 101
GPA: 3.92 / 4.0
\`\`\`

> 💡 **Developer Joke:** Why was the \`const double\` variable so confident?  
> Because it knew its value would never change! 😂`
  },
  {
    id: 3,
    slug: "cpp-operators-and-expressions",
    title: "Lesson 3: C++ Arithmetic, Relational, Logical & Bitwise Operators",
    unit: "Unit 1: C++ Foundations & Windows 11 Setup",
    bookRef: "C++ Operators & Expressions (p. 33-50)",
    icon: "🧮",
    exercise: {
      question: "What is the result of 17 % 5 in C++?",
      options: [
        "3",
        "2",
        "3.4",
        "0"
      ],
      correctAnswer: "2",
      hint: "The modulus operator (%) returns the remainder of integer division: 17 divided by 5 is 3 with remainder 2!"
    },
    contentBody: `### 🧮 C++ Operators & Mathematical Precision

Operators are symbols that perform operations on variables and values. C++ provides rich arithmetic, assignment, relational, logical, and bitwise operators.

---

### 🛠️ Operator Categories Summary

1. ➕ **Arithmetic Operators**: \`+\`, \`-\`, \`*\`, \`/\`, \`%\` (Modulus remainder).
2. 🔄 **Increment & Decrement**: Pre-increment \`++x\` (increments first) vs Post-increment \`x++\` (uses current value first then increments).
3. ⚖️ **Relational Operators**: \`==\` (equal), \`!=\` (not equal), \`>\`, \`<\`, \`>=\`, \`<=\`.
4. 🧠 **Logical Operators**: \`&&\` (AND), \`||\` (OR), \`!\` (NOT).
5. ⚡ **Bitwise Operators**: \`&\` (AND), \`|\` (OR), \`^\` (XOR), \`~\` (NOT), \`<<\` (Left Shift), \`>>\` (Right Shift).

---

### 💻 Code Example: Bitwise & Logical Operator Lab

\`\`\`cpp
#include <iostream>

int main() {
    int a = 12; // Binary: 0000 1100
    int b = 25; // Binary: 0001 1001

    std::cout << "a & b  = " << (a & b)  << " (Binary: 0000 1000)" << std::endl;
    std::cout << "a | b  = " << (a | b)  << " (Binary: 0001 1101)" << std::endl;
    std::cout << "a ^ b  = " << (a ^ b)  << " (Binary: 0001 0101)" << std::endl;
    std::cout << "a << 2 = " << (a << 2) << " (Shift Left by 2 = Multiply by 4)" << std::endl;

    return 0;
}
\`\`\`

### 🛠️ Windows 11 Execution Output:

\`\`\`cmd
a & b  = 8 (Binary: 0000 1000)
a | b  = 29 (Binary: 0001 1101)
a ^ b  = 21 (Binary: 0001 0101)
a << 2 = 48 (Shift Left by 2 = Multiply by 4)
\`\`\`

> ⊞ **Windows Tip:** Bitwise operations like \`a << 2\` execute directly in a single CPU cycle on modern 64-bit ⊞ Windows x86_64 processors!`
  },
  {
    id: 4,
    slug: "cpp-control-flow-if-else-switch",
    title: "Lesson 4: Conditional Logic: if, else if, else & switch-case",
    unit: "Unit 1: C++ Foundations & Windows 11 Setup",
    bookRef: "C++ Decision Making & Control Flow (p. 51-70)",
    icon: "🔀",
    exercise: {
      question: "What happens if a switch case statement does not end with a 'break;' statement?",
      options: [
        "Compiler throws a syntax error",
        "Execution falls through to the next case statements automatically",
        "Program terminates immediately",
        "Switch statement executes backwards"
      ],
      correctAnswer: "Execution falls through to the next case statements automatically",
      hint: "Without break, C++ continues executing subsequent case blocks (called fall-through behavior)!"
    },
    contentBody: `### 🔀 Decision Making in C++

Control flow statements allow your program to branch dynamically based on variable values or conditional evaluation.

---

### 💡 Syntax Structure: if-else vs switch-case

* 🎯 **\`if / else if / else\`**: Best for evaluating complex range conditions or boolean expressions (\`gpa >= 3.5 && credits > 60\`).
* ⚡ **\`switch (expression)\`**: Optimized jump table generated by the compiler for testing discrete integer or enum values (\`case 1:\`, \`case 2:\`).

---

### 💻 Code Example: Grading & Calculator Engine

\`\`\`cpp
#include <iostream>

int main() {
    char option;
    std::cout << "Choose Operation [A: Addition, S: Subtraction, M: Multiplication]: ";
    std::cin >> option;

    double num1 = 50.0, num2 = 10.0;

    switch (toupper(option)) {
        case 'A':
            std::cout << "Result: " << (num1 + num2) << std::endl;
            break;
        case 'S':
            std::cout << "Result: " << (num1 - num2) << std::endl;
            break;
        case 'M':
            std::cout << "Result: " << (num1 * num2) << std::endl;
            break;
        default:
            std::cout << "Invalid Option Selected!" << std::endl;
            break;
    }

    return 0;
}
\`\`\`

> 💡 **Developer Joke:** Why did the C++ developer get lost in the city?  
> Because they couldn't find the \`default:\` case! 😂`
  },
  {
    id: 5,
    slug: "cpp-loops-for-while-do-while",
    title: "Lesson 5: Iteration Mastery: for, while, do-while & Range-Based Loops",
    unit: "Unit 2: Loops, Functions & Scope",
    bookRef: "C++ Iteration & Loop Mechanics (p. 71-90)",
    icon: "🔁",
    exercise: {
      question: "Which C++ loop guarantees that the body of the loop will execute AT LEAST ONCE?",
      options: [
        "for loop",
        "while loop",
        "do-while loop",
        "range-based for loop"
      ],
      correctAnswer: "do-while loop",
      hint: "do-while checks its boolean condition at the end of the loop block after executing the body first!"
    },
    contentBody: `### 🔁 Loop Constructs in C++

Loops execute a block of code repeatedly as long as a specified condition remains true. Modern C++ (C++11 and higher) also introduces **range-based for loops** for effortless container traversal.

---

### 🔄 Loop Types Comparison

1. 🎯 **\`for (init; condition; update)\`**: Used when the exact number of iterations is known beforehand.
2. ⏳ **\`while (condition)\`**: Evaluates condition before executing the loop body.
3. 🔁 **\`do { ... } while (condition);\`**: Executes body first, then checks condition (guarantees at least 1 run).
4. ⚡ **\`for (const auto& item : collection)\`**: Clean C++11 range-based loop for arrays and STL vectors.

---

### 💻 Code Example: Iteration & Range Traversal

\`\`\`cpp
#include <iostream>
#include <vector>

int main() {
    // 1. Traditional for loop
    std::cout << "--- Counting 1 to 5 ---" << std::endl;
    for (int i = 1; i <= 5; ++i) {
        std::cout << "Count: " << i << std::endl;
    }

    // 2. Range-based for loop (C++11)
    std::vector<std::string> frameworks = {"Qt", "Unreal Engine", "Boost", "CUDA"};
    std::cout << "\n--- C++ High Performance Frameworks ---" << std::endl;
    for (const auto& fw : frameworks) {
        std::cout << "⚡ " << fw << std::endl;
    }

    return 0;
}
\`\`\`

### 🛠️ Execution Output on ⊞ Windows 11 CMD:

\`\`\`cmd
--- Counting 1 to 5 ---
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5

--- C++ High Performance Frameworks ---
⚡ Qt
⚡ Unreal Engine
⚡ Boost
⚡ CUDA
\`\`\``
  },
  {
    id: 6,
    slug: "cpp-functions-parameters-and-include",
    title: "Lesson 6: C++ Functions: Pass-by-Value vs Pass-by-Reference (&)",
    unit: "Unit 2: Loops, Functions & Scope",
    bookRef: "C++ Modular Functions & Reference Passing (p. 91-115)",
    icon: "⚙️",
    exercise: {
      question: "How do you pass a variable by reference in C++ to allow a function to modify the caller's original variable?",
      options: [
        "void swap(int x, int y)",
        "void swap(int &x, int &y)",
        "void swap(int *x, int *y)",
        "void swap(val int x, val int y)"
      ],
      correctAnswer: "void swap(int &x, int &y)",
      hint: "The ampersand (&) in parameter declarations signifies pass-by-reference!"
    },
    contentBody: `### ⚙️ Modular Programming with C++ Functions

Functions break complex code into reusable, testable components. C++ gives you complete control over how parameters are passed to functions: **Pass-by-Value** vs **Pass-by-Reference**.

---

### ⚔️ Pass-by-Value vs Pass-by-Reference

* 📋 **Pass-by-Value (\`void func(int x)\`)**: Makes a complete copy of the variable on the stack. Changes made inside the function do NOT affect the original caller's variable.
* 🔗 **Pass-by-Reference (\`void func(int &x)\`)**: Passes the actual memory reference alias. Modifying \`x\` inside the function directly updates the caller's variable in place (zero copying cost!).
* 🛡️ **Pass-by-Const-Reference (\`void func(const std::string &str)\`)**: Avoids expensive object copying while preventing the function from modifying the original argument.

---

### 💻 Code Example: Swap Function Demonstrating Reference Passing

\`\`\`cpp
#include <iostream>

// Pass-by-Reference allows direct modification of original variables
void swapValues(int &a, int &b) {
    int temp = a;
    a = b;
    b = temp;
}

int main() {
    int x = 10, y = 99;
    std::cout << "Before Swap: x = " << x << ", y = " << y << std::endl;

    swapValues(x, y);

    std::cout << "After Swap:  x = " << x << ", y = " << y << std::endl;
    return 0;
}
\`\`\`

### 🛠️ Execution Output:

\`\`\`cmd
Before Swap: x = 10, y = 99
After Swap:  x = 99, y = 10
\`\`\`

> 💡 **Developer Joke:** Why don't functions like pass-by-value?  
> Because they hate living with copies and prefer direct references! 😂`
  },
  {
    id: 7,
    slug: "cpp-function-overloading-and-recursion",
    title: "Lesson 7: Function Overloading & Recursion Call Stack Architecture",
    unit: "Unit 2: Loops, Functions & Scope",
    bookRef: "C++ Overloading & Recursive Function Architecture (p. 116-135)",
    icon: "🔄",
    exercise: {
      question: "What is required for C++ compiler to successfully distinguish between overloaded functions?",
      options: [
        "Different return types only",
        "Different function names",
        "Different parameter list signature (type, number, or order of parameters)",
        "Different header files"
      ],
      correctAnswer: "Different parameter list signature (type, number, or order of parameters)",
      hint: "Function signature consists of parameter types and count; return type alone is insufficient for overloading!"
    },
    contentBody: `### 🔄 Overloading & Recursive Call Stacks

C++ supports **Function Overloading**, allowing multiple functions to share the exact same name as long as their parameter lists (signatures) differ.

---

### 🌀 Understanding Recursion & Stack Frames

A **Recursive Function** is a function that calls itself to solve smaller subproblems until it reaches a **Base Case**.

Every recursive call creates a new **Stack Frame** on the CPU call stack storing local variables and return addresses.

---

### 💻 Code Example: Overloading & Factorial Recursion

\`\`\`cpp
#include <iostream>

// Overloaded Function 1: Integers
int add(int a, int b) { return a + b; }

// Overloaded Function 2: Doubles
double add(double a, double b) { return a + b; }

// Recursive Function: Factorial (n!)
long long factorial(int n) {
    if (n <= 1) return 1; // Base Case to prevent Stack Overflow!
    return n * factorial(n - 1); // Recursive Call
}

int main() {
    std::cout << "Int Add: " << add(5, 10) << std::endl;
    std::cout << "Double Add: " << add(4.5, 3.2) << std::endl;
    std::cout << "Factorial of 6: " << factorial(6) << std::endl;

    return 0;
}
\`\`\`

### 🛠️ Execution Output on ⊞ Windows 11 CMD:

\`\`\`cmd
Int Add: 15
Double Add: 7.7
Factorial of 6: 720
\`\`\``
  },
  {
    id: 8,
    slug: "cpp-arrays-and-std-vector",
    title: "Lesson 8: C-Style Arrays vs Dynamic std::vector in Modern C++",
    unit: "Unit 3: Memory Management, Pointers & References",
    bookRef: "C++ Array Storage & Vector Dynamic Allocation (p. 136-160)",
    icon: "📦",
    exercise: {
      question: "Which std::vector member function safely accesses elements with automatic out-of-bounds index boundary checking?",
      options: [
        "vec[index]",
        "vec.at(index)",
        "vec.get(index)",
        "vec.value(index)"
      ],
      correctAnswer: "vec.at(index)",
      hint: "vec.at(index) throws an std::out_of_range exception if the index exceeds vector bounds!"
    },
    contentBody: `### 📦 Array Storage & Dynamic Containers

In C++, contiguous memory storage is fundamental. You can use fixed-size C-style arrays or flexible dynamic \`std::vector\` containers from the Standard Template Library (STL).

---

### ⚖️ Fixed C-Style Array vs Dynamic \`std::vector\`

* 📌 **C-Style Array (\`int arr[5];\`)**: Fixed size set at compile-time. Resides on Stack. Danger of buffer overflow if bounds are exceeded.
* 🚀 **\`std::vector<T>\`**: Dynamically resizes on the Heap as elements are added via \`push_back()\`. Provides bounds checking (\`vec.at(i)\`), size tracking (\`vec.size()\`), and auto memory management.

---

### 💻 Code Example: Dynamic Vector Operations

\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> scores = {88, 95, 72, 99, 84};

    // Add new dynamic elements
    scores.push_back(100);
    scores.push_back(91);

    // Sort vector using STL algorithm
    std::sort(scores.begin(), scores.end());

    std::cout << "--- Sorted Student Scores (Total: " << scores.size() << ") ---" << std::endl;
    for (size_t i = 0; i < scores.size(); ++i) {
        std::cout << "Rank #" << (i + 1) << ": " << scores.at(i) << std::endl;
    }

    return 0;
}
\`\`\`

### 🛠️ Execution Output:

\`\`\`cmd
--- Sorted Student Scores (Total: 7) ---
Rank #1: 72
Rank #2: 84
Rank #3: 88
Rank #4: 91
Rank #5: 95
Rank #6: 99
Rank #7: 100
\`\`\``
  },
  {
    id: 9,
    slug: "cpp-pointers-and-memory-addresses",
    title: "Lesson 9: Master C++ Pointers, Memory Addresses (&) and Dereferencing (*)",
    unit: "Unit 3: Memory Management, Pointers & References",
    bookRef: "C++ Memory Addressing & Pointer Architecture (p. 161-185)",
    icon: "🎯",
    exercise: {
      question: "If int x = 42; int *ptr = &x;, what does *ptr evaluate to?",
      options: [
        "The hex memory address of x",
        "42 (The value stored at memory address x)",
        "A null pointer exception",
        "The size of variable x in bytes"
      ],
      correctAnswer: "42 (The value stored at memory address x)",
      hint: "Dereferencing a pointer using *ptr fetches the value stored at the memory location pointed to!"
    },
    contentBody: `### 🎯 Pointers & Memory Allocation in C++

A **Pointer** is a variable whose value is the **memory address** of another variable. Understanding pointers gives you direct access to RAM and raw memory control!

---

### 🔑 Essential Pointer Operators

1. 📍 **Address-of Operator (\`&\`)**: Returns the physical memory address of a variable (e.g. \`&x\` yields \`0x7ffeefbff59c\`).
2. 🔓 **Dereference Operator (\`*\`)**: Used in pointer variable declaration (\`int *ptr\`) AND to access/modify the value stored at the target address (\`*ptr = 100;\`).
3. 🚫 **\`nullptr\`**: Modern C++11 keyword representing a null pointer (always initialize unassigned pointers to \`nullptr\` to prevent garbage memory bugs).

---

### 💻 Code Example: Pointers in Action

\`\`\`cpp
#include <iostream>

int main() {
    int val = 250;
    int *ptr = &val; // ptr stores the memory address of val

    std::cout << "Value of val:         " << val << std::endl;
    std::cout << "Memory Address (&val): " << &val << std::endl;
    std::cout << "Pointer value (ptr):   " << ptr << std::endl;
    std::cout << "Dereferenced (*ptr):   " << *ptr << std::endl;

    // Mutate original value via pointer dereferencing
    *ptr = 500;
    std::cout << "\nAfter mutating *ptr = 500:" << std::endl;
    std::cout << "New value of val: " << val << std::endl;

    return 0;
}
\`\`\`

> 💡 **Developer Joke:** Why are pointers like secrets?  
> Because if you dereference a null pointer, your whole world crashes! 😂`
  },
  {
    id: 10,
    slug: "cpp-references-vs-pointers",
    title: "Lesson 10: References vs Pointers: Aliasing, Const References & Safety",
    unit: "Unit 3: Memory Management, Pointers & References",
    bookRef: "C++ Reference Aliasing & Memory Safety (p. 186-205)",
    icon: "🔗",
    exercise: {
      question: "Which of the following statements about C++ References (int &ref = x) is TRUE?",
      options: [
        "A reference can be re-bound to point to a different variable later",
        "A reference can be initialized as unassigned (null reference)",
        "A reference is an alias for an existing variable and cannot be null or re-assigned to another variable",
        "A reference requires the * dereference operator to read its value"
      ],
      correctAnswer: "A reference is an alias for an existing variable and cannot be null or re-assigned to another variable",
      hint: "References are safer aliases: they must be initialized at declaration and cannot be reassigned to target another variable!"
    },
    contentBody: `### 🔗 References vs Pointers: Head-to-Head Comparison

Both pointers and references allow you to manipulate memory across function scopes, but they differ significantly in safety and syntax.

---

### 📊 Comparative Breakdown

| Feature | Pointer (\`int *ptr\`) | Reference (\`int &ref\`) |
| :--- | :--- | :--- |
| **Initialization** | Optional at declaration (\`int *p = nullptr;\`) | **Mandatory** at declaration (\`int &r = x;\`) |
| **Null Ability** | Can be \`nullptr\` | **Cannot be null** |
| **Re-assignment** | Can point to different variables over time | **Permanent alias** (cannot be rebound) |
| **Syntax** | Requires \`*\` to dereference | Uses standard variable syntax directly |

---

### 💻 Code Example: Const Reference Efficiency

\`\`\`cpp
#include <iostream>
#include <string>

// const std::string & avoids copying a 10,000 character string!
void printLogMessage(const std::string &msg) {
    std::cout << "[LOG]: " << msg << std::endl;
}

int main() {
    std::string systemEvent = "Windows 11 Kernel Process Initialized Successfully";
    printLogMessage(systemEvent);

    return 0;
}
\`\`\``
  },
  {
    id: 11,
    slug: "cpp-dynamic-memory-new-delete",
    title: "Lesson 11: Dynamic Memory Management with new, delete & Heap Allocation",
    unit: "Unit 3: Memory Management, Pointers & References",
    bookRef: "C++ Heap Memory Allocation & Deallocation (p. 206-230)",
    icon: "🧠",
    exercise: {
      question: "What happens if memory allocated with 'new int[100]' is freed using 'delete ptr;' instead of 'delete[] ptr;'?",
      options: [
        "Only the first element is destructed/freed, causing undefined behavior and memory leaks for the remaining elements",
        "The compiler automatically corrects it to delete[]",
        "Program crashes with a syntax error at compile time",
        "Nothing happens, both operators are 100% identical"
      ],
      correctAnswer: "Only the first element is destructed/freed, causing undefined behavior and memory leaks for the remaining elements",
      hint: "Always pair new[] with delete[] when allocating arrays on the Heap!"
    },
    contentBody: `### 🧠 Heap Memory Allocation & Destructors

Memory in C++ is divided into two primary regions:
* 📦 **Stack**: Automatic memory managed by the OS compiler for local function variables.
* 🌐 **Heap**: Dynamic memory managed manually by the programmer during runtime using \`new\` and \`delete\`.

---

### ⚠️ Dynamic Allocation Operators

1. 🟢 **\`new\`**: Allocates memory for a single object on Heap and returns pointer.
2. 🟢 **\`new[]\`**: Allocates a contiguous array on Heap.
3. 🔴 **\`delete ptr;\`**: Frees single object Heap memory.
4. 🔴 **\`delete[] ptr;\`**: Frees dynamic array Heap memory.

---

### 💻 Code Example: Dynamic Heap Array

\`\`\`cpp
#include <iostream>

int main() {
    int size;
    std::cout << "Enter dynamic array capacity: ";
    std::cin >> size;

    // Allocate array on Heap at runtime
    int *heapArr = new int[size];

    for (int i = 0; i < size; ++i) {
        heapArr[i] = (i + 1) * 10;
    }

    std::cout << "Heap Array Elements: ";
    for (int i = 0; i < size; ++i) {
        std::cout << heapArr[i] << " ";
    }
    std::cout << std::endl;

    // FREED HEAP MEMORY TO PREVENT MEMORY LEAKS!
    delete[] heapArr;
    heapArr = nullptr; // Dangling pointer safety

    return 0;
}
\`\`\`

> ⊞ **Windows Tip:** Tools like **Diagnostic Tools** in VS 2026 monitor ⊞ Windows heap allocation graphs in real-time to catch memory leaks!`
  },
  {
    id: 12,
    slug: "cpp-classes-objects-and-access-specifiers",
    title: "Lesson 12: Object-Oriented C++: Classes, Objects & Access Modifiers",
    unit: "Unit 4: Object-Oriented Programming (OOP) in C++",
    bookRef: "C++ Class Encapsulation & Access Modifiers (p. 231-255)",
    icon: "🏛️",
    exercise: {
      question: "Which access specifier makes class members accessible ONLY within the class itself and friend functions?",
      options: [
        "public",
        "protected",
        "private",
        "internal"
      ],
      correctAnswer: "private",
      hint: "private members are encapsulated and hidden from outside functions and derived classes!"
    },
    contentBody: `### 🏛️ Object-Oriented Programming (OOP) Foundations

Object-Oriented Programming models software as real-world objects containing **attributes** (data members) and **behaviors** (member functions).

---

### 🛡️ Access Specifiers

* 🌐 **\`public\`**: Accessible from anywhere outside the class.
* 🔒 **\`private\`**: Accessible **only** within member functions of the class (Encapsulation).
* 🛡️ **\`protected\`**: Accessible within the class and child derived classes (Inheritance).

---

### 💻 Code Example: Encapsulated BankAccount Class

\`\`\`cpp
#include <iostream>
#include <string>

class BankAccount {
private:
    std::string accountNumber;
    double balance; // Private data protected from unauthorized external modification

public:
    // Setter method with validation
    void setDetails(std::string accNum, double initialDeposit) {
        accountNumber = accNum;
        balance = (initialDeposit >= 0) ? initialDeposit : 0.0;
    }

    void deposit(double amount) {
        if (amount > 0) balance += amount;
    }

    void displayInfo() const {
        std::cout << "Acc: " << accountNumber << " | Balance: $" << balance << std::endl;
    }
};

int main() {
    BankAccount account1;
    account1.setDetails("NS-88401", 1500.00);
    account1.deposit(500.00);
    account1.displayInfo();

    return 0;
}
\`\`\``
  },
  {
    id: 13,
    slug: "cpp-constructors-destructors-and-this-pointer",
    title: "Lesson 13: Constructors, Destructors (~), Initializer Lists & 'this' Pointer",
    unit: "Unit 4: Object-Oriented Programming (OOP) in C++",
    bookRef: "C++ Object Lifecycle & Constructors (p. 256-280)",
    icon: "🏗️",
    exercise: {
      question: "When is a class Destructor (~ClassName()) automatically executed?",
      options: [
        "When an object is instantiated",
        "When an object goes out of scope or is deleted with the delete operator",
        "When a main() function begins execution",
        "When a class member function is called"
      ],
      correctAnswer: "When an object goes out of scope or is deleted with the delete operator",
      hint: "Destructors clean up object resources automatically when object lifetime ends!"
    },
    contentBody: `### 🏗️ Object Lifecycle Management

Constructors initialize objects when created, while Destructors clean up resources (closing files, releasing Heap memory) when objects are destroyed.

---

### 🛠️ Key Concepts

* ⚙️ **Parameterized Constructor**: Initializes object fields at instantiation.
* 🚀 **Member Initializer List (\`ClassName() : field1(val) {}\`)**: Fastest way to initialize class data members directly.
* 🧹 **Destructor (\`~ClassName()\`)**: Has no return type and takes no arguments. Executed when object goes out of scope.
* 👈 **\`this\` Pointer**: Implicit pointer available inside member functions holding the address of the current object.

---

### 💻 Code Example: RAII Buffer Allocation Class

\`\`\`cpp
#include <iostream>

class DynamicBuffer {
private:
    int *data;
    int size;

public:
    // Constructor with Member Initializer List
    DynamicBuffer(int s) : size(s), data(new int[s]) {
        std::cout << "🏗️ Allocated buffer of size " << size << " on Heap." << std::endl;
    }

    // Destructor (RAII Resource Cleanup)
    ~DynamicBuffer() {
        delete[] data;
        std::cout << "🧹 Destructor freed Heap memory buffer." << std::endl;
    }
};

int main() {
    {
        DynamicBuffer buf(1024); // Object scope begins
    } // Object goes out of scope here -> Destructor fires automatically!

    return 0;
}
\`\`\``
  },
  {
    id: 14,
    slug: "cpp-inheritance-and-polymorphism",
    title: "Lesson 14: Inheritance, Virtual Functions & Dynamic Polymorphism",
    unit: "Unit 4: Object-Oriented Programming (OOP) in C++",
    bookRef: "C++ Class Inheritance & Polymorphism (p. 281-310)",
    icon: "🧬",
    exercise: {
      question: "What keyword is required in a Base Class function declaration to enable runtime dynamic polymorphism & overriding?",
      options: [
        "override",
        "virtual",
        "abstract",
        "dynamic"
      ],
      correctAnswer: "virtual",
      hint: "The virtual keyword tells the compiler to use vtable runtime dispatch instead of early compile-time binding!"
    },
    contentBody: `### 🧬 Inheritance & Runtime Polymorphism

Inheritance allows child classes to derive properties from a base class. **Polymorphism** allows treating derived objects through base class pointers using **Virtual Functions** (\`virtual\`).

---

### 🛠️ Virtual Tables (vtable) & Dynamic Binding

When a function is declared \`virtual\`, C++ creates a hidden **VTable** (Virtual Table) holding function pointers. Calling \`ptr->speak()\` resolves dynamically at runtime based on the actual object instance!

---

### 💻 Code Example: Polymorphic Game Entity Architecture

\`\`\`cpp
#include <iostream>
#include <vector>

class Enemy {
public:
    virtual void attack() const {
        std::cout << "Enemy performs generic attack!" << std::endl;
    }
    virtual ~Enemy() {} // Always make base class destructors virtual!
};

class Dragon : public Enemy {
public:
    void attack() const override {
        std::cout << "🔥 Dragon breathes FIRE damage!" << std::endl;
    }
};

class Robot : public Enemy {
public:
    void attack() const override {
        std::cout << "🤖 Robot fires LASER beam!" << std::endl;
    }
};

int main() {
    std::vector<Enemy*> battlefield;
    battlefield.push_back(new Dragon());
    battlefield.push_back(new Robot());

    for (Enemy* unit : battlefield) {
        unit->attack(); // Dynamic Polymorphic Call!
        delete unit;
    }

    return 0;
}
\`\`\``
  },
  {
    id: 15,
    slug: "cpp-operator-overloading-and-friend-functions",
    title: "Lesson 15: Operator Overloading & Friend Classes / Functions",
    unit: "Unit 4: Object-Oriented Programming (OOP) in C++",
    bookRef: "C++ Operator Overloading & Friend Specifiers (p. 311-335)",
    icon: "➕",
    exercise: {
      question: "Which keyword allows an external function to access private and protected members of a class?",
      options: [
        "friend",
        "public",
        "extern",
        "inline"
      ],
      correctAnswer: "friend",
      hint: "Declaring a function or class as friend grants it explicit access to private internal state!"
    },
    contentBody: `### ➕ Customizing Operators & Friend Access

Operator Overloading allows standard C++ operators (\`+\`, \`-\`, \`<<\`, \`==\`) to work directly with custom objects e.g. \`Complex c3 = c1 + c2;\`.

---

### 🤝 Friend Functions

A **\`.friend\`** function declared inside a class is not a member function, but is granted full authority to inspect and mutate private class members.

---

### 💻 Code Example: Complex Number Addition Operator

\`\`\`cpp
#include <iostream>

class Complex {
private:
    double real, imag;

public:
    Complex(double r = 0, double i = 0) : real(r), imag(i) {}

    // Overloading + Operator
    Complex operator+(const Complex &other) const {
        return Complex(real + other.real, imag + other.imag);
    }

    // Friend stream insertion operator << for direct std::cout printing
    friend std::ostream& operator<<(std::ostream &out, const Complex &c) {
        out << c.real << " + " << c.imag << "i";
        return out;
    }
};

int main() {
    Complex c1(3.5, 2.5);
    Complex c2(1.5, 4.5);

    Complex c3 = c1 + c2; // Calls operator+

    std::cout << "c1 = " << c1 << std::endl;
    std::cout << "c2 = " << c2 << std::endl;
    std::cout << "c1 + c2 = " << c3 << std::endl;

    return 0;
}
\`\`\``
  },
  {
    id: 16,
    slug: "cpp-stl-containers-vector-list-map-set",
    title: "Lesson 16: Master C++ STL Containers: vector, list, map & unordered_map",
    unit: "Unit 5: Standard Template Library (STL) & Advanced Concepts",
    bookRef: "C++ Standard Template Library Containers (p. 336-365)",
    icon: "🗺️",
    exercise: {
      question: "Which STL container stores key-value pairs in O(1) average hash lookup time?",
      options: [
        "std::map (Red-Black Tree O(log N))",
        "std::unordered_map (Hash Table O(1))",
        "std::vector",
        "std::list"
      ],
      correctAnswer: "std::unordered_map (Hash Table O(1))",
      hint: "std::unordered_map uses a hash table implementation for O(1) expected average lookup!"
    },
    contentBody: `### 🗺️ The Standard Template Library (STL)

The C++ STL provides powerful, production-grade template data structures and algorithms.

---

### 📦 Key STL Containers Overview

1. ⚡ **\`std::vector<T>\`**: Contiguous dynamic array with fast random access (\`O(1)\`).
2. 🔗 **\`std::list<T>\`**: Doubly linked list with fast insertion/deletion anywhere (\`O(1)\`).
3. 🌲 **\`std::map<Key, Value>\`**: Self-balancing Red-Black Tree keeping keys sorted (\`O(log N)\`).
4. ⚡ **\`std::unordered_map<K, V>\`**: Hash table providing constant time lookup (\`O(1)\`).
5. 🛡️ **\`std::set<T>\`**: Collection of unique sorted elements.

---

### 💻 Code Example: Key-Value Hash Map & Vector Operations

\`\`\`cpp
#include <iostream>
#include <unordered_map>
#include <string>

int main() {
    std::unordered_map<std::string, double> productPrices;

    productPrices["Intel Core i9"] = 589.99;
    productPrices["NVIDIA RTX 4090"] = 1599.99;
    productPrices["DDR5 32GB RAM"] = 129.99;

    std::cout << "--- PC Component Prices (Hash Table Lookup) ---" << std::endl;
    for (const auto &[item, price] : productPrices) {
        std::cout << "📦 " << item << " => $" << price << std::endl;
    }

    return 0;
}
\`\`\``
  },
  {
    id: 17,
    slug: "cpp-stl-iterators-and-algorithms",
    title: "Lesson 17: STL Algorithms (std::sort, std::find) & Lambda Expressions",
    unit: "Unit 5: Standard Template Library (STL) & Advanced Concepts",
    bookRef: "C++ STL Algorithms & Lambda Closures (p. 366-390)",
    icon: "⚡",
    exercise: {
      question: "What is the correct syntax for a C++11 Lambda expression capturing variable x by value?",
      options: [
        "[x](int a) { return a + x; }",
        "[&x](int a) { return a + x; }",
        "lambda(int a) { return a + x; }",
        "def(int a) { return a + x; }"
      ],
      correctAnswer: "[x](int a) { return a + x; }",
      hint: "Square brackets [] form the lambda capture clause: [x] captures by value, [&x] captures by reference!"
    },
    contentBody: `### ⚡ STL Algorithms & Functional Lambdas

C++ \`<algorithm>\` header provides over 80 high-performance algorithms for sorting, searching, transforming, and filtering data.

---

### 🎯 Lambda Expression Anatomy

\`\`\`cpp
[capture_clause](parameters) -> return_type {
    // Lambda body
}
\`\`\`

---

### 💻 Code Example: STL Algorithms with Custom Lambda

\`\`\`cpp
#include <iostream>
#include <vector>
#include <algorithm>

int main() {
    std::vector<int> nums = {45, 12, 89, 3, 67, 24};

    // Sort in descending order using custom lambda
    std::sort(nums.begin(), nums.end(), [](int a, int b) {
        return a > b;
    });

    std::cout << "Sorted Descending: ";
    for (int n : nums) std::cout << n << " ";
    std::cout << std::endl;

    // Count even numbers using std::count_if
    int evenCount = std::count_if(nums.begin(), nums.end(), [](int n) {
        return n % 2 == 0;
    });

    std::cout << "Even number count: " << evenCount << std::endl;

    return 0;
}
\`\`\``
  },
  {
    id: 18,
    slug: "cpp-file-handling-fstream",
    title: "Lesson 18: File I/O Handling in C++: std::ifstream & std::ofstream",
    unit: "Unit 5: Standard Template Library (STL) & Advanced Concepts",
    bookRef: "C++ File Stream I/O Operations (p. 391-415)",
    icon: "📁",
    exercise: {
      question: "Which C++ file stream class is used specifically for READING data from a disk file?",
      options: [
        "std::ofstream",
        "std::ifstream",
        "std::fstream",
        "std::stringstream"
      ],
      correctAnswer: "std::ifstream",
      hint: "std::ifstream (Input File Stream) reads data into C++ variables from disk files!"
    },
    contentBody: `### 📁 File Streams & Disk I/O on ⊞ Windows 11

File operations in C++ are handled via the \`<fstream>\` header:
* 📥 **\`std::ifstream\`**: Read input from files.
* 📤 **\`std::ofstream\`**: Write output to files.
* 🔄 **\`std::fstream\`**: Read and write bidirectional file streams.

---

### 💻 Code Example: Writing and Reading Config Files

\`\`\`cpp
#include <iostream>
#include <fstream>
#include <string>

int main() {
    // 1. Write to file
    std::ofstream outFile("config.txt");
    if (outFile.is_open()) {
        outFile << "AppName=NextSem_CPP_Engine\n";
        outFile << "Version=2026.1.0\n";
        outFile << "TargetOS=Windows_11\n";
        outFile.close();
        std::cout << "✅ Configuration written to config.txt" << std::endl;
    }

    // 2. Read back from file
    std::ifstream inFile("config.txt");
    std::string line;
    std::cout << "\n--- Reading config.txt ---" << std::endl;
    while (std::getline(inFile, line)) {
        std::cout << line << std::endl;
    }
    inFile.close();

    return 0;
}
\`\`\``
  },
  {
    id: 19,
    slug: "cpp-exception-handling-try-catch-throw",
    title: "Lesson 19: Robust Exception Handling: try, catch & throw in C++",
    unit: "Unit 5: Standard Template Library (STL) & Advanced Concepts",
    bookRef: "C++ Exception Safety & Error Handling (p. 416-435)",
    icon: "🛡️",
    exercise: {
      question: "Which standard exception class is thrown when std::vector::at() accesses an invalid index?",
      options: [
        "std::bad_alloc",
        "std::out_of_range",
        "std::invalid_argument",
        "std::runtime_error"
      ],
      correctAnswer: "std::out_of_range",
      hint: "std::out_of_range (derived from std::logic_error) is thrown on out-of-bounds indexing!"
    },
    contentBody: `### 🛡️ Error Safety & Exception Handling

C++ exception handling decouples error detection from error recovery using three keywords: \`try\`, \`throw\`, and \`catch\`.

---

### 🧱 Robust Exception Architecture

\`\`\`cpp
try {
    // Code that might fail (e.g. divide by zero, file not found)
    if (denominator == 0) throw std::runtime_error("Division by zero!");
} catch (const std::exception &e) {
    // Handle error gracefully without crashing app
    std::cerr << "Caught Exception: " << e.what() << std::endl;
}
\`\`\`

---

### 💻 Code Example: Safe Math Division Function

\`\`\`cpp
#include <iostream>
#include <stdexcept>

double safeDivide(double num, double den) {
    if (den == 0.0) {
        throw std::invalid_argument("Division by zero error!");
    }
    return num / den;
}

int main() {
    try {
        std::cout << "Result: " << safeDivide(100.0, 4.0) << std::endl;
        std::cout << "Result: " << safeDivide(50.0, 0.0) << std::endl; // Throws exception!
    } catch (const std::exception &e) {
        std::cout << "🛡️ Handled Error: " << e.what() << std::endl;
    }

    return 0;
}
\`\`\``
  },
  {
    id: 20,
    slug: "cpp-smart-pointers-unique-shared-weak",
    title: "Lesson 20: Modern C++ Smart Pointers: unique_ptr, shared_ptr & RAII",
    unit: "Unit 5: Standard Template Library (STL) & Advanced Concepts",
    bookRef: "Modern C++ Smart Pointer Memory Safety (p. 436-460)",
    icon: "💎",
    exercise: {
      question: "Which smart pointer represents EXCLUSIVE ownership of a Heap object and cannot be copied?",
      options: [
        "std::shared_ptr",
        "std::unique_ptr",
        "std::weak_ptr",
        "std::auto_ptr"
      ],
      correctAnswer: "std::unique_ptr",
      hint: "std::unique_ptr enforces strict sole ownership; it can only be MOVED (std::move), never copied!"
    },
    contentBody: `### 💎 Modern C++ (C++11/14/17/20) Smart Pointers

Raw pointers (\`new\` / \`delete\`) are prone to memory leaks and double-free bugs. Modern C++ solves memory safety using **Smart Pointers** declared in \`<memory>\`.

---

### 🛡️ Smart Pointer Types

1. 🔒 **\`std::unique_ptr<T>\`**: Sole, exclusive ownership. Zero overhead. Automatically deletes resource when going out of scope. Cannot be copied, only moved via \`std::move()\`.
2. 👥 **\`std::shared_ptr<T>\`**: Shared ownership using reference counting. Resource is freed when the last \`shared_ptr\` owner is destroyed.
3. 🔗 **\`std::weak_ptr<T>\`**: Non-owning observer reference to a \`shared_ptr\` to break circular dependency memory leaks.

---

### 💻 Code Example: std::make_unique & std::make_shared

\`\`\`cpp
#include <iostream>
#include <memory>

class Widget {
public:
    Widget() { std::cout << "💎 Widget Allocated on Heap" << std::endl; }
    ~Widget() { std::cout << "🧹 Widget Automatically Destructed (Zero Memory Leaks)" << std::endl; }
    void execute() { std::cout << "⚡ Widget executing task..." << std::endl; }
};

int main() {
    // Modern C++ Memory Allocation (No explicit delete required!)
    std::unique_ptr<Widget> w1 = std::make_unique<Widget>();
    w1->execute();

    // Transfer ownership using std::move
    std::unique_ptr<Widget> w2 = std::move(w1);
    if (!w1) std::cout << "w1 is now null after std::move ownership transfer." << std::endl;

    return 0;
} // w2 goes out of scope here -> Widget destructor fires automatically!
\`\`\`

> ⊞ **Windows Tip:** Modern C++ smart pointers make memory safety in Windows 11 enterprise C++ codebases automatic, clean, and bug-free!`
  }
];
