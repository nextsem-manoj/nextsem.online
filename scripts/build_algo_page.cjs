const fs = require('fs');
const path = require('path');

const mdPath = path.join(__dirname, '..', 'docs', 'algorithms_and_flowcharts_10_master_problems.md');
if (!fs.existsSync(mdPath)) {
  console.error("Master guide not found at:", mdPath);
  process.exit(1);
}

const mdContent = fs.readFileSync(mdPath, 'utf8');

// Parse markdown sections
const problemsData = [
  {
    id: 1,
    title: "Find the Largest of Three Numbers",
    category: "Branching",
    tag: "Conditional Branching",
    desc: "Given three distinct numbers A, B, and C, formulate a step-by-step algorithm and draw a flowchart to determine and print the largest number among them.",
    variables: [
      { name: "A", type: "Numeric", role: "First input number" },
      { name: "B", type: "Numeric", role: "Second input number" },
      { name: "C", type: "Numeric", role: "Third input number" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read values of A, B, and C.",
      "Step 3: Compare A and B:",
      "         If A > B:",
      "             Check if A > C: If True, Print 'A is Largest'; Else Print 'C is Largest'.",
      "         Else (B >= A):",
      "             Check if B > C: If True, Print 'B is Largest'; Else Print 'C is Largest'.",
      "Step 4: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> Input[/Read A, B, C/]
    Input --> Dec1{Is A > B?}
    Dec1 -- Yes --> Dec2{Is A > C?}
    Dec1 -- No --> Dec3{Is B > C?}
    Dec2 -- Yes --> OutA[/Print 'A is Largest'/]
    Dec2 -- No --> OutC1[/Print 'C is Largest'/]
    Dec3 -- Yes --> OutB[/Print 'B is Largest'/]
    Dec3 -- No --> OutC2[/Print 'C is Largest'/]
    OutA --> Stop([Stop])
    OutC1 --> Stop
    OutB --> Stop
    OutC2 --> Stop`,
    ascii: `       +------------------+
       |     [ START ]    |
       +------------------+
                 |
                 v
       +------------------+
       |  Read A, B, C    |
       +------------------+
                 |
                 v
              /      \\
            /  A > B?  \\
           /            \\
        YES               NO
        /                   \\
       v                     v
    /      \\              /      \\
  /  A > C?  \\          /  B > C?  \\
 /            \\        /            \\
YES          NO       YES          NO
 |            |        |            |
 v            v        v            v
[Print A]  [Print C] [Print B]  [Print C]
 \\            |        |            /
  \\-----------+--------+-----------/
                 |
                 v
       +------------------+
       |     [ STOP ]     |
       +------------------+`,
    trace: [
      { step: "Run 1", a: "45", b: "12", c: "89", c1: "45 > 12 (True)", c2: "45 > 89 (False)", out: "Print 'C is Largest' (89)" },
      { step: "Run 2", a: "10", b: "95", c: "32", c1: "10 > 95 (False)", c2: "95 > 32 (True)", out: "Print 'B is Largest' (95)" }
    ],
    takeaway: "Always use nested decision trees rather than multiple independent if-statements to minimize redundant comparisons from 3 comparisons to at most 2 comparisons."
  },
  {
    id: 2,
    title: "Check Whether an Integer is Prime or Composite",
    category: "Loops",
    tag: "Square-Root Loop",
    desc: "Given a positive integer N, design an algorithm and flowchart to determine whether N is a Prime number (divisible only by 1 and itself) or a Composite number.",
    variables: [
      { name: "N", type: "Integer", role: "The input number to test" },
      { name: "i", type: "Integer", role: "Loop divisor counter starting from 2 up to sqrt(N)" },
      { name: "isPrime", type: "Boolean Flag", role: "1 if prime, 0 if composite" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read positive integer N.",
      "Step 3: If N <= 1, Print 'Neither Prime nor Composite' and go to Step 8.",
      "Step 4: If N == 2, Print '2 is a Prime Number' and go to Step 8.",
      "Step 5: Initialize divisor counter i = 2.",
      "Step 6: While (i * i <= N):",
      "         If (N % i == 0):",
      "             Print 'N is Composite (Divisible by i)'.",
      "             Go to Step 8 (Early Exit).",
      "         Else:",
      "             Increment i = i + 1.",
      "Step 7: If loop finishes without finding divisor, Print 'N is a Prime Number'.",
      "Step 8: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> In[/Read integer N/]
    In --> Chk1{N <= 1 ?}
    Chk1 -- Yes --> Out1[/Print 'Neither'/] --> Stop([Stop])
    Chk1 -- No --> Chk2{N == 2 ?}
    Chk2 -- Yes --> Out2[/Print '2 is Prime'/] --> Stop
    Chk2 -- No --> Init[Set i = 2]
    Init --> LoopCond{i * i <= N ?}
    LoopCond -- Yes --> DivTest{N % i == 0 ?}
    DivTest -- Yes --> OutComp[/Print 'Composite'/] --> Stop
    DivTest -- No --> Inc[i = i + 1] --> LoopCond
    LoopCond -- No --> OutPrime[/Print 'Prime'/] --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |     Read N      |
         +-----------------+
                  |
                  v
               /     \\
             / N <= 1? \\ ---YES--> [Print Neither] --> [STOP]
             \\         /
                  | NO
                  v
               /     \\
             / N == 2? \\ ---YES--> [Print Prime]   --> [STOP]
             \\         /
                  | NO
                  v
         +-----------------+
         |     i = 2       |
         +-----------------+
                  |
         +------->|
         |        v
         |     /     \\
         |   / i*i<=N? \\ ---NO---> [Print Prime]   --> [STOP]
         |   \\         /
         |        | YES
         |        v
         |     /     \\
         |   / N%i==0? \\ ---YES--> [Print Composite]-> [STOP]
         |   \\         /
         |        | NO
         |        v
         |   +---------+
         +---| i = i+1 |
             +---------+`,
    trace: [
      { step: "N = 29", a: "i=2", b: "29%2 != 0", c: "i=3, 29%3!=0", c1: "i=4, 29%4!=0", c2: "i=5, 29%5!=0", out: "Loop exits at i=6 (6*6=36>29) -> '29 is Prime'" },
      { step: "N = 49", a: "i=2..6", b: "No divisor", c: "i=7", c1: "49%7 == 0 (True)", c2: "Early exit!", out: "Print '49 is Composite'" }
    ],
    takeaway: "Checking up to sqrt(N) reduces loop operations from O(N) to O(sqrt(N)), turning millions of operations into a few hundred."
  },
  {
    id: 3,
    title: "Calculate Factorial of an Integer (N!)",
    category: "Math",
    tag: "Accumulator Product",
    desc: "Formulate an algorithm and flowchart to calculate the factorial of a given non-negative integer N, defined as N! = 1 * 2 * 3 * ... * N, with 0! = 1.",
    variables: [
      { name: "N", type: "Integer", role: "Non-negative input number" },
      { name: "Fact", type: "Integer", role: "Accumulator product, initialized to 1" },
      { name: "i", type: "Integer", role: "Loop multiplier counter, initialized to 1" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read integer N.",
      "Step 3: If N < 0, Print 'Factorial undefined for negative numbers' and go to Step 8.",
      "Step 4: Initialize Fact = 1 and loop counter i = 1.",
      "Step 5: While (i <= N):",
      "         Fact = Fact * i.",
      "         i = i + 1.",
      "Step 6: Print 'Factorial of N is Fact'.",
      "Step 7: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> In[/Read N/]
    In --> Valid{N < 0 ?}
    Valid -- Yes --> Err[/Print 'Invalid'/] --> Stop([Stop])
    Valid -- No --> Init[Fact = 1, i = 1]
    Init --> Cond{i <= N ?}
    Cond -- Yes --> Calc[Fact = Fact * i<br/>i = i + 1] --> Cond
    Cond -- No --> Out[/Print Fact/] --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |     Read N      |
         +-----------------+
                  |
                  v
               /     \\
             /  N < 0? \\ ---YES--> [Print Error] --> [STOP]
             \\         /
                  | NO
                  v
         +-----------------+
         | Fact=1, i=1     |
         +-----------------+
                  |
         +------->|
         |        v
         |     /     \\
         |   / i <= N? \\ ---NO---> [Print Fact]  --> [STOP]
         |   \\         /
         |        | YES
         |        v
         |   +---------------+
         |   | Fact=Fact * i |
         |   | i = i + 1     |
         |   +---------------+
         +--------+`,
    trace: [
      { step: "Init", a: "N = 5", b: "Fact = 1", c: "i = 1", c1: "1 <= 5 (True)", c2: "Fact = 1 * 1 = 1", out: "i becomes 2" },
      { step: "Loop 2", a: "N = 5", b: "Fact = 1", c: "i = 2", c1: "2 <= 5 (True)", c2: "Fact = 1 * 2 = 2", out: "i becomes 3" },
      { step: "Loop 3", a: "N = 5", b: "Fact = 2", c: "i = 3", c1: "3 <= 5 (True)", c2: "Fact = 2 * 3 = 6", out: "i becomes 4" },
      { step: "Loop 4", a: "N = 5", b: "Fact = 6", c: "i = 4", c1: "4 <= 5 (True)", c2: "Fact = 6 * 4 = 24", out: "i becomes 5" },
      { step: "Loop 5", a: "N = 5", b: "Fact = 24", c: "i = 5", c1: "5 <= 5 (True)", c2: "Fact = 24 * 5 = 120", out: "i becomes 6 -> Exits -> Fact=120" }
    ],
    takeaway: "Factorials grow at an astronomical rate O(N^N). In practical engineering, use 64-bit BigInt for N > 20 to prevent numeric overflow."
  },
  {
    id: 4,
    title: "Generate the First N Terms of the Fibonacci Series",
    category: "Loops",
    tag: "Sliding Window",
    desc: "Design an algorithm and flowchart to generate and print the first N terms of the Fibonacci sequence: 0, 1, 1, 2, 3, 5, 8, 13, 21, ...",
    variables: [
      { name: "N", type: "Integer", role: "Total count of terms to print" },
      { name: "T1", type: "Integer", role: "First term, initialized to 0" },
      { name: "T2", type: "Integer", role: "Second term, initialized to 1" },
      { name: "Next", type: "Integer", role: "Sum of prior two terms (T1 + T2)" },
      { name: "count", type: "Integer", role: "Iteration counter from 3 to N" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read the number of terms N.",
      "Step 3: If N <= 0, Print 'N must be positive' and go to Step 10.",
      "Step 4: If N == 1, Print '0' and go to Step 10.",
      "Step 5: Initialize T1 = 0, T2 = 1.",
      "Step 6: Print T1, T2 (first two terms).",
      "Step 7: Initialize loop counter count = 3.",
      "Step 8: While (count <= N):",
      "         Next = T1 + T2.",
      "         Print Next.",
      "         T1 = T2.",
      "         T2 = Next.",
      "         count = count + 1.",
      "Step 9: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> In[/Read N/]
    In --> Ck1{N <= 0 ?}
    Ck1 -- Yes --> Err[/Print 'Invalid'/] --> Stop([Stop])
    Ck1 -- No --> Ck2{N == 1 ?}
    Ck2 -- Yes --> Out0[/Print '0'/] --> Stop
    Ck2 -- No --> Init[T1=0, T2=1<br/>Print T1, T2<br/>count = 3]
    Init --> Loop{count <= N ?}
    Loop -- Yes --> Calc[Next = T1 + T2<br/>Print Next<br/>T1 = T2<br/>T2 = Next<br/>count = count + 1] --> Loop
    Loop -- No --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |     Read N      |
         +-----------------+
                  |
                  v
         +-----------------+
         | T1=0, T2=1      |
         | Print T1, T2    |
         | count = 3       |
         +-----------------+
                  |
         +------->|
         |        v
         |     /     \\
         |   /count<=N?\\ ---NO---> [ STOP ]
         |   \\         /
         |        | YES
         |        v
         |   +-------------------+
         |   | Next = T1 + T2    |
         |   | Print Next        |
         |   | T1 = T2           |
         |   | T2 = Next         |
         |   | count = count + 1 |
         |   +-------------------+
         +--------+`,
    trace: [
      { step: "Init", a: "N = 6", b: "T1 = 0, T2 = 1", c: "Output: 0, 1", c1: "count = 3", c2: "Next = 0+1 = 1", out: "Output: 0, 1, 1 | T1=1, T2=1" },
      { step: "Count 4", a: "count = 4", b: "Next = 1+1 = 2", c: "Output: 0, 1, 1, 2", c1: "T1=1, T2=2", c2: "count=5", out: "Valid" },
      { step: "Count 5", a: "count = 5", b: "Next = 1+2 = 3", c: "Output: 0, 1, 1, 2, 3", c1: "T1=2, T2=3", c2: "count=6", out: "Valid" },
      { step: "Count 6", a: "count = 6", b: "Next = 2+3 = 5", c: "Output: 0, 1, 1, 2, 3, 5", c1: "T1=3, T2=5", c2: "count=7 -> Exit", out: "Final: 0, 1, 1, 2, 3, 5" }
    ],
    takeaway: "The sliding window technique T1=T2, T2=Next maintains state with O(1) auxiliary memory space, avoiding unnecessary arrays."
  },
  {
    id: 5,
    title: "Reverse an Integer and Check for Palindrome",
    category: "Math",
    tag: "Modulo Arithmetic",
    desc: "Design an algorithm and flowchart that reverses the digits of an integer N and checks whether N is a Palindrome (reads the same backward as forward, like 12321).",
    variables: [
      { name: "N", type: "Integer", role: "Original input number" },
      { name: "Orig", type: "Integer", role: "Copy of original number for comparison" },
      { name: "Rev", type: "Integer", role: "Reversed integer, initialized to 0" },
      { name: "Rem", type: "Integer", role: "Extracted rightmost remainder digit (N % 10)" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read positive integer N.",
      "Step 3: Orig = N, Rev = 0.",
      "Step 4: While (N > 0):",
      "         Rem = N % 10.",
      "         Rev = (Rev * 10) + Rem.",
      "         N = floor(N / 10).",
      "Step 5: Print 'Reversed Number is Rev'.",
      "Step 6: If (Rev == Orig):",
      "         Print 'Orig is a Palindrome Number'.",
      "       Else:",
      "         Print 'Orig is NOT a Palindrome Number'.",
      "Step 7: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> In[/Read N/]
    In --> Set[Orig = N<br/>Rev = 0]
    Set --> Cond{N > 0 ?}
    Cond -- Yes --> Calc[Rem = N % 10<br/>Rev = Rev * 10 + Rem<br/>N = N // 10] --> Cond
    Cond -- No --> PrintRev[/Print Rev/]
    PrintRev --> Chk{Rev == Orig ?}
    Chk -- Yes --> OutP[/Print 'Palindrome'/] --> Stop([Stop])
    Chk -- No --> OutNP[/Print 'Not Palindrome'/] --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |     Read N      |
         | Orig = N, Rev =0|
         +-----------------+
                  |
         +------->|
         |        v
         |     /     \\
         |   /  N > 0? \\ ---NO---> [Print Rev]
         |   \\         /               |
         |        | YES                v
         |        v                 /     \\
         |   +-------------------+/Rev==Orig?\\
         |   | Rem = N % 10      |\\         /
         |   | Rev = Rev*10 + Rem|  |YES   |NO
         |   | N = N // 10       |  v      v
         |   +-------------------+ [Palin][Not]
         +--------+                 \\      /
                                     v    v
                                    [ STOP ]`,
    trace: [
      { step: "Init", a: "N = 121", b: "Orig = 121", c: "Rev = 0", c1: "N > 0 (True)", c2: "Rem = 121 % 10 = 1", out: "Rev = 0*10+1 = 1 | N = 12" },
      { step: "Iter 2", a: "N = 12", b: "Orig = 121", c: "Rev = 1", c1: "N > 0 (True)", c2: "Rem = 12 % 10 = 2", out: "Rev = 1*10+2 = 12 | N = 1" },
      { step: "Iter 3", a: "N = 1", b: "Orig = 121", c: "Rev = 12", c1: "N > 0 (True)", c2: "Rem = 1 % 10 = 1", out: "Rev = 12*10+1 = 121 | N = 0" },
      { step: "Exit", a: "N = 0", b: "Orig = 121", c: "Rev = 121", c1: "Rev == Orig (121 == 121)", c2: "Match True", out: "Print '121 is a Palindrome'" }
    ],
    takeaway: "The place-value shifting formula Rev = Rev * 10 + Rem eliminates the overhead of string conversions."
  },
  {
    id: 6,
    title: "Simple & Compound Interest with Tiered Bonus Rate",
    category: "Math",
    tag: "Financial Computations",
    desc: "Calculate Simple Interest (SI) and Compound Interest (CI) for Principal P, Rate R, and Time T years, applying a +2% bonus interest rate if the investment period T > 5 years.",
    variables: [
      { name: "P", type: "Float", role: "Principal investment amount" },
      { name: "R", type: "Float", role: "Base annual interest rate (e.g., 7.5)" },
      { name: "T", type: "Float", role: "Investment duration in years" },
      { name: "SI", type: "Float", role: "Calculated simple interest" },
      { name: "CI", type: "Float", role: "Calculated compound interest" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read Principal P, Rate R, and Time T.",
      "Step 3: If P <= 0 or R <= 0 or T <= 0, Print 'Inputs must be positive' and Stop.",
      "Step 4: Check if T > 5:",
      "         If True: EffectiveRate = R + 2.0 (Bonus Tier).",
      "         Else: EffectiveRate = R.",
      "Step 5: Compute SI = (P * EffectiveRate * T) / 100.",
      "Step 6: Compute CI = P * ((1 + EffectiveRate / 100) ^ T) - P.",
      "Step 7: Print EffectiveRate, SI, CI.",
      "Step 8: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> In[/Read P, R, T/]
    In --> Valid{P>0 & R>0 & T>0 ?}
    Valid -- No --> Err[/Print 'Invalid Inputs'/] --> Stop([Stop])
    Valid -- Yes --> Bonus{T > 5 ?}
    Bonus -- Yes --> Add[EffectiveRate = R + 2]
    Bonus -- No --> Base[EffectiveRate = R]
    Add --> Calc[SI = P * EffectiveRate * T / 100<br/>CI = P * (1 + EffectiveRate/100)^T - P]
    Base --> Calc
    Calc --> Out[/Print SI, CI, Rate/] --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |   Read P, R, T  |
         +-----------------+
                  |
                  v
               /     \\
             /  T > 5? \\
             \\         /
            YES /   \\ NO
               v     v
         +-------+ +-------+
         |Eff=R+2| |Eff=R  |
         +-------+ +-------+
             \\      /
              v    v
         +-----------------------------+
         | SI = P * Eff * T / 100      |
         | CI = P * (1+Eff/100)^T - P  |
         +-----------------------------+
                  |
                  v
         +-----------------+
         |  Print SI & CI  |
         +-----------------+
                  |
                  v
         +-----------------+
         |     [ STOP ]    |
         +-----------------+`,
    trace: [
      { step: "Case 1", a: "P = 10,000", b: "R = 8%", c: "T = 3 yrs", c1: "T > 5 (False) -> Rate = 8%", c2: "SI = (10000*8*3)/100 = 2,400", out: "CI = 10000*(1.08)^3 - 10000 = 2,597.12" },
      { step: "Case 2", a: "P = 10,000", b: "R = 8%", c: "T = 6 yrs", c1: "T > 5 (True) -> Rate = 10%", c2: "SI = (10000*10*6)/100 = 6,000", out: "CI = 10000*(1.10)^6 - 10000 = 7,715.61" }
    ],
    takeaway: "Applying conditional modifiers prior to calculation pipelines centralizes business rules and prevents code duplication."
  },
  {
    id: 7,
    title: "Find Real & Complex Roots of a Quadratic Equation",
    category: "Math",
    tag: "Discriminant Analysis",
    desc: "Given coefficients a, b, and c of ax^2 + bx + c = 0, find both roots by evaluating the discriminant D = b^2 - 4ac across all three cases: D > 0, D = 0, and D < 0.",
    variables: [
      { name: "a, b, c", type: "Float", role: "Quadratic coefficients (a != 0)" },
      { name: "D", type: "Float", role: "Discriminant value (b^2 - 4ac)" },
      { name: "root1, root2", type: "Float/Complex", role: "The two roots of the equation" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read coefficients a, b, c.",
      "Step 3: If a == 0, Print 'Not quadratic (Linear equation)' and Stop.",
      "Step 4: Compute Discriminant D = (b * b) - (4 * a * c).",
      "Step 5: If D > 0 (Two distinct real roots):",
      "         root1 = (-b + sqrt(D)) / (2 * a).",
      "         root2 = (-b - sqrt(D)) / (2 * a).",
      "         Print root1, root2.",
      "Step 6: Else if D == 0 (Two equal real roots):",
      "         root1 = -b / (2 * a).",
      "         Print 'Real and Equal Roots:', root1.",
      "Step 7: Else (D < 0, Complex conjugate roots):",
      "         realPart = -b / (2 * a).",
      "         imagPart = sqrt(-D) / (2 * a).",
      "         Print 'Complex Roots: realPart +/- imagPart * i'.",
      "Step 8: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> In[/Read a, b, c/]
    In --> ChkA{a == 0 ?}
    ChkA -- Yes --> Err[/Print 'Not Quadratic'/] --> Stop([Stop])
    ChkA -- No --> CalcD[D = b*b - 4*a*c]
    CalcD --> ChkD{D > 0 ?}
    ChkD -- Yes --> OutReal[/Print 2 Distinct Real Roots/] --> Stop
    ChkD -- No --> ChkZero{D == 0 ?}
    ChkZero -- Yes --> OutEq[/Print Real & Equal Root/] --> Stop
    ChkZero -- No --> OutComp[/Print Complex Roots with i/] --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |  Read a, b, c   |
         +-----------------+
                  |
                  v
               /     \\
             /  a == 0?\\ ---YES--> [Print Not Quadratic] --> [STOP]
             \\         /
                  | NO
                  v
         +-----------------+
         | D = b*b - 4*a*c |
         +-----------------+
                  |
                  v
               /     \\
             /  D > 0? \\ ---YES--> [Distinct Real Roots] --> [STOP]
             \\         /
                  | NO
                  v
               /     \\
             /  D == 0?\\ ---YES--> [Equal Real Roots]   --> [STOP]
             \\         /
                  | NO
                  v
         +-----------------------+
         | Complex Roots (with i)| --> [STOP]
         +-----------------------+`,
    trace: [
      { step: "Case D > 0", a: "1, -5, 6", b: "D = 25 - 24 = 1", c: "sqrt(D) = 1", c1: "r1 = (5+1)/2 = 3", c2: "r2 = (5-1)/2 = 2", out: "Roots: 3.0 and 2.0" },
      { step: "Case D = 0", a: "1, -4, 4", b: "D = 16 - 16 = 0", c: "sqrt(D) = 0", c1: "r1 = 4/2 = 2", c2: "r2 = 2", out: "Roots: Real & Equal = 2.0" },
      { step: "Case D < 0", a: "1, 2, 5", b: "D = 4 - 20 = -16", c: "sqrt(16) = 4", c1: "real = -2/2 = -1", c2: "imag = 4/2 = 2", out: "Roots: -1 + 2i and -1 - 2i" }
    ],
    takeaway: "Handling D < 0 prevents invalid mathematical domains like Math.sqrt(-16) from crashing production software with NaN errors."
  },
  {
    id: 8,
    title: "Linear Search in an Array of N Elements with Early Exit",
    category: "Arrays",
    tag: "Sequential Search",
    desc: "Given an array Arr of N elements and a search Key, formulate an algorithm and flowchart to find the index of Key, terminating early as soon as the first match is found.",
    variables: [
      { name: "Arr[]", type: "Array", role: "Collection of N elements" },
      { name: "N", type: "Integer", role: "Total number of elements in array" },
      { name: "Key", type: "Numeric", role: "Target value to locate" },
      { name: "i", type: "Integer", role: "Array index pointer from 0 to N-1" },
      { name: "Found", type: "Boolean Flag", role: "0 if not found, 1 if found" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read array size N and array elements Arr[0...N-1].",
      "Step 3: Read search target Key.",
      "Step 4: Initialize index i = 0 and flag Found = 0.",
      "Step 5: While (i < N):",
      "         If (Arr[i] == Key):",
      "             Print 'Key found at position i'.",
      "             Found = 1.",
      "             Break loop (Go to Step 7).",
      "         Else:",
      "             i = i + 1.",
      "Step 6: If (Found == 0):",
      "         Print 'Key not present in array'.",
      "Step 7: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> InArr[/Read N and Arr[0..N-1]/]
    InArr --> InKey[/Read Key/]
    InKey --> Init[i = 0, Found = 0]
    Init --> Cond{i < N ?}
    Cond -- Yes --> Match{Arr[i] == Key ?}
    Match -- Yes --> OutFound[/Print 'Found at index i'/] --> Stop([Stop])
    Match -- No --> Inc[i = i + 1] --> Cond
    Cond -- No --> OutNotFound[/Print 'Key Not Found'/] --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |  Read Arr[], Key|
         |  i = 0          |
         +-----------------+
                  |
         +------->|
         |        v
         |     /     \\
         |   /  i < N? \\ ---NO---> [Print 'Not Found'] --> [STOP]
         |   \\         /
         |        | YES
         |        v
         |     /     \\
         |   /Arr[i]==Key?\\--YES-->[Print 'Found at i']--> [STOP]
         |   \\           /
         |        | NO
         |        v
         |   +---------+
         +---| i = i+1 |
             +---------+`,
    trace: [
      { step: "Init", a: "Arr = [14, 52, 98, 33]", b: "Key = 98", c: "i = 0", c1: "Arr[0] = 14 != 98", c2: "i becomes 1", out: "Continue" },
      { step: "Step 2", a: "Arr = [14, 52, 98, 33]", b: "Key = 98", c: "i = 1", c1: "Arr[1] = 52 != 98", c2: "i becomes 2", out: "Continue" },
      { step: "Step 3", a: "Arr = [14, 52, 98, 33]", b: "Key = 98", c: "i = 2", c1: "Arr[2] = 98 == 98", c2: "Match True!", out: "Print 'Found at index 2' -> Immediate Exit!" }
    ],
    takeaway: "An early exit break avoids unnecessary comparisons on remaining array elements, saving significant CPU cycles in large datasets."
  },
  {
    id: 9,
    title: "Sum of Digits & Armstrong (Narcissistic) Number Check",
    category: "Math",
    tag: "Digit Extraction",
    desc: "Calculate the sum of digits of an integer N, and check if N is an Armstrong number (where the sum of the cubes of its digits equals the number itself, e.g. 153 = 1^3 + 5^3 + 3^3).",
    variables: [
      { name: "N", type: "Integer", role: "Positive integer input" },
      { name: "Orig", type: "Integer", role: "Backup of original number" },
      { name: "SumDigits", type: "Integer", role: "Linear sum of digits, initialized to 0" },
      { name: "ArmstrongSum", type: "Integer", role: "Sum of cubes of digits, initialized to 0" },
      { name: "Rem", type: "Integer", role: "Extracted digit (N % 10)" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Read positive integer N.",
      "Step 3: Orig = N, SumDigits = 0, ArmstrongSum = 0.",
      "Step 4: While (N > 0):",
      "         Rem = N % 10.",
      "         SumDigits = SumDigits + Rem.",
      "         ArmstrongSum = ArmstrongSum + (Rem * Rem * Rem).",
      "         N = floor(N / 10).",
      "Step 5: Print 'Sum of Digits = SumDigits'.",
      "Step 6: If (ArmstrongSum == Orig):",
      "         Print 'Orig is an Armstrong Number'.",
      "       Else:",
      "         Print 'Orig is NOT an Armstrong Number'.",
      "Step 7: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> In[/Read N/]
    In --> Init[Orig = N<br/>SumDigits = 0<br/>ArmstrongSum = 0]
    Init --> Cond{N > 0 ?}
    Cond -- Yes --> Calc[Rem = N % 10<br/>SumDigits += Rem<br/>ArmstrongSum += Rem^3<br/>N = N // 10] --> Cond
    Cond -- No --> OutSum[/Print SumDigits/]
    OutSum --> ChkArm{ArmstrongSum == Orig ?}
    ChkArm -- Yes --> OutYes[/Print 'Armstrong Number'/] --> Stop([Stop])
    ChkArm -- No --> OutNo[/Print 'Not Armstrong'/] --> Stop`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
                  v
         +-----------------+
         |     Read N      |
         | Orig = N        |
         | Sum=0, ArmSum=0 |
         +-----------------+
                  |
         +------->|
         |        v
         |     /     \\
         |   /  N > 0? \\ ---NO---> [Print SumDigits]
         |   \\         /                  |
         |        | YES                   v
         |        v                    /     \\
         |   +-----------------------+/Arm==Orig?\\
         |   | Rem = N % 10          |\\         /
         |   | Sum = Sum + Rem       |  |YES   |NO
         |   | Arm = Arm + (Rem^3)   |  v      v
         |   | N = N // 10           | [Yes]  [No]
         |   +-----------------------+  \\      /
         +--------+                      v    v
                                        [ STOP ]`,
    trace: [
      { step: "Init", a: "N = 153", b: "Orig = 153", c: "Sum = 0", c1: "Arm = 0", c2: "N > 0 (True)", out: "Rem = 3 | Sum=3, Arm=27, N=15" },
      { step: "Iter 2", a: "N = 15", b: "Orig = 153", c: "Sum = 3", c1: "Arm = 27", c2: "N > 0 (True)", out: "Rem = 5 | Sum=8, Arm=27+125=152, N=1" },
      { step: "Iter 3", a: "N = 1", b: "Orig = 153", c: "Sum = 8", c1: "Arm = 152", c2: "N > 0 (True)", out: "Rem = 1 | Sum=9, Arm=152+1=153, N=0" },
      { step: "Exit", a: "N = 0", b: "Orig = 153", c: "Sum = 9", c1: "Arm = 153", c2: "153 == 153 (True)", out: "Print 'Sum = 9' and '153 is an Armstrong Number'" }
    ],
    takeaway: "Single-pass extraction allows calculating multiple statistical metrics (sum of digits, Armstrong sum, digit count) in a single O(log10 N) loop."
  },
  {
    id: 10,
    title: "Menu-Driven Temperature Conversion (Celsius ⇋ Fahrenheit)",
    category: "Branching",
    tag: "Switch / Case Menu",
    desc: "Design an interactive menu-driven program algorithm and flowchart where the user chooses whether to convert from Celsius to Fahrenheit, Fahrenheit to Celsius, or Exit.",
    variables: [
      { name: "Choice", type: "Integer", role: "User menu selection (1, 2, or 3)" },
      { name: "C", type: "Float", role: "Temperature in Celsius" },
      { name: "F", type: "Float", role: "Temperature in Fahrenheit" }
    ],
    algorithm: [
      "Step 1: Start.",
      "Step 2: Display Menu:",
      "         1: Celsius to Fahrenheit",
      "         2: Fahrenheit to Celsius",
      "         3: Exit Program.",
      "Step 3: Read user Choice.",
      "Step 4: If Choice == 1:",
      "         Read temperature in Celsius (C).",
      "         Compute F = (C * 9 / 5) + 32.",
      "         Print 'Temperature in Fahrenheit is F'.",
      "         Go to Step 8.",
      "Step 5: Else if Choice == 2:",
      "         Read temperature in Fahrenheit (F).",
      "         Compute C = (F - 32) * 5 / 9.",
      "         Print 'Temperature in Celsius is C'.",
      "         Go to Step 8.",
      "Step 6: Else if Choice == 3:",
      "         Print 'Exiting program. Goodbye!'.",
      "         Go to Step 8.",
      "Step 7: Else:",
      "         Print 'Invalid Choice! Please enter 1, 2, or 3'.",
      "         Go to Step 2 (Loop back to Menu).",
      "Step 8: Stop."
    ],
    mermaid: `flowchart TD
    Start([Start]) --> Menu[/Display Menu & Read Choice/]
    Menu --> Chk1{Choice == 1 ?}
    Chk1 -- Yes --> InC[/Read C/] --> CalcF[F = C * 9/5 + 32] --> OutF[/Print F/] --> Stop([Stop])
    Chk1 -- No --> Chk2{Choice == 2 ?}
    Chk2 -- Yes --> InF[/Read F/] --> CalcC[C = F - 32 * 5/9] --> OutC[/Print C/] --> Stop
    Chk2 -- No --> Chk3{Choice == 3 ?}
    Chk3 -- Yes --> OutExit[/Print 'Goodbye'/] --> Stop
    Chk3 -- No --> OutErr[/Print 'Invalid Selection'/] --> Menu`,
    ascii: `         +-----------------+
         |     [ START ]   |
         +-----------------+
                  |
         +------->v
         |  +---------------------+
         |  | Display Menu:       |
         |  | 1. C -> F           |
         |  | 2. F -> C           |
         |  | 3. Exit             |
         |  | Read Choice         |
         |  +---------------------+
         |            |
         |            v
         |         /     \\
         |       / Ch==1?  \\ ---YES--> [Read C] -> [F = C*9/5+32] -> [Print F] -> [STOP]
         |       \\         /
         |            | NO
         |            v
         |         /     \\
         |       / Ch==2?  \\ ---YES--> [Read F] -> [C = (F-32)*5/9]->[Print C] -> [STOP]
         |       \\         /
         |            | NO
         |            v
         |         /     \\
         |       / Ch==3?  \\ ---YES--> [Print 'Goodbye!'] ----------------------> [STOP]
         |       \\         /
         |            | NO
         |            v
         |    [Print 'Invalid!']
         +------------+`,
    trace: [
      { step: "Selection 1", a: "Choice = 1", b: "Input C = 100", c: "F = (100 * 9/5) + 32", c1: "F = 180 + 32 = 212", c2: "Output: 212°F", out: "Stop" },
      { step: "Selection 2", a: "Choice = 2", b: "Input F = 98.6", c: "C = (98.6 - 32) * 5/9", c1: "C = 66.6 * 5/9 = 37", c2: "Output: 37°C", out: "Stop" },
      { step: "Selection 3", a: "Choice = 9", b: "Invalid", c: "Condition 1, 2, 3 all False", c1: "Print 'Invalid Choice'", c2: "Loop back to menu", out: "Valid retry loop" }
    ],
    takeaway: "Menu-driven designs structure software into modular execution paths with defensive default error fallbacks."
  }
];

// Generate HTML
function generateHtml() {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Overview of the 10 Computer Science Problems: Algorithms & Flowcharts | NextSem Academy</title>
  <meta name="description" content="Master 10 fundamental computer science algorithms and flowcharts with ANSI symbols, step-by-step logic, ASCII charts, Mermaid diagrams, and dry-run trace tables. By Er. Manoj Kumar.">
  <script src="https://cdn.tailwindcss.com"></script>
  <script src="https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.min.js"></script>
  <script>
    mermaid.initialize({
      startOnLoad: true,
      theme: 'dark',
      themeVariables: {
        darkMode: true,
        background: '#17181c',
        primaryColor: '#04AA6D',
        primaryTextColor: '#ffffff',
        primaryBorderColor: '#04AA6D',
        lineColor: '#04AA6D',
        secondaryColor: '#1e293b',
        tertiaryColor: '#0f172a'
      }
    });
  </script>
  <style>
    body { background-color: #17181c; color: #f8fafc; font-family: system-ui, -apple-system, sans-serif; }
    .emerald-glow { box-shadow: 0 0 25px rgba(4, 170, 109, 0.2); }
    .glass-card { background: rgba(30, 41, 59, 0.7); backdrop-filter: blur(8px); border: 1px solid rgba(255,255,255,0.08); }
    pre { font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; }
  </style>
</head>
<body class="min-h-screen flex flex-col items-center selection:bg-[#04AA6D] selection:text-black">

  <!-- Top Navigation / Breadcrumb -->
  <nav class="w-full bg-[#0e1015] border-b border-slate-800 sticky top-0 z-50 px-4 py-3">
    <div class="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-3">
      <div class="flex items-center gap-3">
        <a href="/" class="flex items-center gap-2 text-white font-black text-lg tracking-tight hover:text-[#04AA6D] transition-colors">
          <span class="text-[#04AA6D]">⊞</span> NextSem Academy
        </a>
        <span class="text-slate-600">/</span>
        <span class="text-xs font-semibold px-2.5 py-1 rounded bg-[#04AA6D]/15 text-[#04AA6D] border border-[#04AA6D]/30">CS-Guide</span>
        <span class="text-slate-600 hidden sm:inline">/</span>
        <span class="text-slate-300 text-xs font-medium hidden sm:inline">10 Master Problems</span>
      </div>
      <div class="flex items-center gap-2">
        <button onclick="window.print()" class="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-bold border border-slate-700 transition flex items-center gap-1.5 cursor-pointer">
          🖨️ <span>Print / Save PDF</span>
        </button>
        <a href="/" class="px-3 py-1.5 rounded-lg bg-[#04AA6D] hover:bg-[#039861] text-black font-extrabold text-xs transition flex items-center gap-1">
          🏠 <span>Home</span>
        </a>
      </div>
    </div>
  </nav>

  <main class="w-full max-w-6xl mx-auto px-4 py-8 space-y-8">

    <!-- Hero Header -->
    <header class="glass-card rounded-2xl p-6 sm:p-8 emerald-glow border border-slate-800">
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#04AA6D]/15 border border-[#04AA6D]/40 text-[#04AA6D] text-xs font-black uppercase tracking-wider mb-3">
        <span>Er. Manoj Kumar • Computer Science Fundamentals</span>
      </div>
      <h1 class="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
        Overview of the 10 Computer Science Problems
      </h1>
      <p class="text-slate-300 text-sm sm:text-base mt-2 max-w-3xl leading-relaxed">
        Algorithm formulation, ANSI standard flowchart design, ASCII diagrams, variable tables, and step-by-step trace dry runs for the 10 core computer science problem-solving archetypes.
      </p>

      <!-- Category Filter Pills -->
      <div class="flex flex-wrap items-center gap-2 mt-6 pt-6 border-t border-slate-800/80">
        <span class="text-xs font-bold text-slate-400 mr-1">Filter by Logic:</span>
        <button onclick="filterCategory('all')" class="cat-btn px-3 py-1 rounded-lg bg-[#04AA6D] text-black font-extrabold text-xs cursor-pointer" data-cat="all">All (10)</button>
        <button onclick="filterCategory('Branching')" class="cat-btn px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 cursor-pointer" data-cat="Branching">Conditionals & Branching (2)</button>
        <button onclick="filterCategory('Loops')" class="cat-btn px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 cursor-pointer" data-cat="Loops">Loops & Series (2)</button>
        <button onclick="filterCategory('Math')" class="cat-btn px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 cursor-pointer" data-cat="Math">Math & Accumulators (4)</button>
        <button onclick="filterCategory('Arrays')" class="cat-btn px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 cursor-pointer" data-cat="Arrays">Arrays & Search (1)</button>
        <button onclick="filterCategory('Menu')" class="cat-btn px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 cursor-pointer" data-cat="Menu">Menu-Driven (1)</button>
      </div>
    </header>

    <!-- SECTION 1: MASTER OVERVIEW TABLE -->
    <section class="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
      <div class="flex items-center justify-between flex-wrap gap-2">
        <div>
          <h2 class="text-xl sm:text-2xl font-black text-white flex items-center gap-2">
            <span class="text-[#04AA6D]">📋</span> Overview Table: 10 Fundamental Problems
          </h2>
          <p class="text-xs sm:text-sm text-slate-400 mt-1">Click any problem below to jump directly to its complete algorithm and flowchart.</p>
        </div>
        <span class="text-xs font-mono text-[#04AA6D] bg-[#04AA6D]/10 px-2.5 py-1 rounded-md border border-[#04AA6D]/30">10 / 10 Master Problems</span>
      </div>

      <div class="overflow-x-auto">
        <table class="w-full text-left border-collapse text-xs sm:text-sm">
          <thead>
            <tr class="bg-slate-900/80 border-b border-slate-700 text-slate-300">
              <th class="p-3 font-bold w-12 text-center">#</th>
              <th class="p-3 font-bold">Problem Title</th>
              <th class="p-3 font-bold hidden md:table-cell">Core Concept</th>
              <th class="p-3 font-bold hidden sm:table-cell">Primary Variables</th>
              <th class="p-3 font-bold text-center">Action</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-800 text-slate-200">
            ${problemsData.map(p => `
              <tr class="hover:bg-slate-800/50 transition-colors">
                <td class="p-3 font-bold text-[#04AA6D] text-center">${p.id}</td>
                <td class="p-3 font-bold text-white">
                  <a href="#problem-${p.id}" class="hover:text-[#04AA6D] transition-colors underline decoration-slate-600 hover:decoration-[#04AA6D]">
                    ${p.title}
                  </a>
                  <div class="sm:hidden text-xs text-slate-400 mt-0.5">${p.tag}</div>
                </td>
                <td class="p-3 text-slate-300 hidden md:table-cell">${p.tag}</td>
                <td class="p-3 font-mono text-xs text-slate-300 hidden sm:table-cell">
                  ${p.variables.map(v => `<span class="bg-slate-800 px-1.5 py-0.5 rounded text-slate-200">${v.name}</span>`).join(' ')}
                </td>
                <td class="p-3 text-center">
                  <a href="#problem-${p.id}" class="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-800 hover:bg-[#04AA6D] hover:text-black text-slate-300 font-bold text-xs transition-colors border border-slate-700">
                    View ➔
                  </a>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </section>

    <!-- SECTION 2: ANSI FLOWCHART SYMBOLS REFERENCE -->
    <section class="glass-card rounded-2xl p-6 border border-slate-800 space-y-4">
      <h2 class="text-lg sm:text-xl font-black text-white flex items-center gap-2">
        <span class="text-[#04AA6D]">📐</span> Standard ANSI Flowchart Conventions & Symbols
      </h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 text-xs sm:text-sm">
        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div class="font-bold text-[#04AA6D]">([ Oval / Stadium ])</div>
          <div class="text-white font-semibold">Terminal (Start / Stop)</div>
          <p class="text-slate-400 text-xs">Defines entry and exit points for program logic.</p>
        </div>
        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div class="font-bold text-[#04AA6D]">[/ Parallelogram /]</div>
          <div class="text-white font-semibold">Data Input / Output</div>
          <p class="text-slate-400 text-xs">Reading user inputs or displaying calculated results.</p>
        </div>
        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div class="font-bold text-[#04AA6D]">[ Rectangle ]</div>
          <div class="text-white font-semibold">Process / Action</div>
          <p class="text-slate-400 text-xs">Arithmetic calculations, variable assignments, transformations.</p>
        </div>
        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div class="font-bold text-[#04AA6D]">{" Diamond / Rhombus "}</div>
          <div class="text-white font-semibold">Decision / Branching</div>
          <p class="text-slate-400 text-xs">Evaluates boolean conditions (Yes/No or True/False).</p>
        </div>
        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div class="font-bold text-[#04AA6D]">(( Circle ))</div>
          <div class="text-white font-semibold">On-Page Connector</div>
          <p class="text-slate-400 text-xs">Merges distant flow lines to prevent visual clutter.</p>
        </div>
        <div class="bg-slate-900/60 p-3.5 rounded-xl border border-slate-800 space-y-1">
          <div class="font-bold text-[#04AA6D]">---> Flowlines</div>
          <div class="text-white font-semibold">Sequence of Execution</div>
          <p class="text-slate-400 text-xs">Directional arrows showing step progression.</p>
        </div>
      </div>
    </section>

    <!-- SECTION 3: THE 10 DETAILED PROBLEMS -->
    <div class="space-y-10" id="problemsContainer">
      ${problemsData.map(p => `
        <article id="problem-${p.id}" class="problem-card glass-card rounded-2xl p-6 sm:p-8 border border-slate-800 space-y-6" data-category="${p.category}">
          
          <!-- Problem Title Bar -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-slate-800">
            <div>
              <div class="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#04AA6D]/15 text-[#04AA6D] text-xs font-black uppercase">
                Problem ${p.id} • ${p.category}
              </div>
              <h3 class="text-2xl font-black text-white mt-1.5">
                ${p.title}
              </h3>
            </div>
            <a href="#problemsContainer" class="text-xs text-slate-400 hover:text-[#04AA6D] font-bold transition-colors">
              ↑ Back to Top
            </a>
          </div>

          <!-- Problem Statement -->
          <div class="bg-slate-900/70 p-4 rounded-xl border border-slate-800/80">
            <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-1">Problem Statement</h4>
            <p class="text-sm text-slate-200 leading-relaxed">${p.desc}</p>
          </div>

          <!-- Variable Table -->
          <div>
            <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Variable Table</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="bg-slate-900/80 border-b border-slate-700 text-slate-300">
                    <th class="p-2.5 font-bold">Variable</th>
                    <th class="p-2.5 font-bold">Data Type</th>
                    <th class="p-2.5 font-bold">Purpose / Role</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800 text-slate-300 font-mono text-xs">
                  ${p.variables.map(v => `
                    <tr>
                      <td class="p-2.5 font-bold text-[#04AA6D]">${v.name}</td>
                      <td class="p-2.5 text-slate-400 font-sans">${v.type}</td>
                      <td class="p-2.5 font-sans">${v.role}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Step-by-Step Algorithm -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider">Step-by-Step Algorithm</h4>
              <button onclick="copyText('algo-${p.id}', this)" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer">
                📋 Copy
              </button>
            </div>
            <pre id="algo-${p.id}" class="bg-[#090b10] border border-slate-800 rounded-xl p-4 text-xs sm:text-sm text-slate-200 overflow-x-auto leading-relaxed whitespace-pre-wrap">${p.algorithm.join('\n')}</pre>
          </div>

          <!-- Flowchart: Mermaid Graphical Diagram -->
          <div>
            <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Flowchart (Interactive Graphical Diagram)</h4>
            <div class="bg-[#0b0d13] border border-slate-800 rounded-xl p-4 sm:p-6 overflow-x-auto flex justify-center">
              <div class="mermaid">
${p.mermaid}
              </div>
            </div>
          </div>

          <!-- Flowchart: Clean Visual ASCII Diagram -->
          <div>
            <div class="flex items-center justify-between mb-2">
              <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider">Flowchart (Visual ASCII Diagram)</h4>
              <button onclick="copyText('ascii-${p.id}', this)" class="px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-bold border border-slate-700 transition cursor-pointer">
                📋 Copy
              </button>
            </div>
            <pre id="ascii-${p.id}" class="bg-[#090b10] border border-slate-800 rounded-xl p-4 text-xs font-mono text-[#04AA6D] overflow-x-auto leading-tight">${p.ascii}</pre>
          </div>

          <!-- Dry Run Trace Table -->
          <div>
            <h4 class="text-xs font-black uppercase text-slate-400 tracking-wider mb-2">Dry-Run Trace Table</h4>
            <div class="overflow-x-auto">
              <table class="w-full text-left text-xs sm:text-sm border-collapse">
                <thead>
                  <tr class="bg-slate-900/80 border-b border-slate-700 text-slate-300">
                    <th class="p-2.5 font-bold">Execution Step</th>
                    <th class="p-2.5 font-bold">Var State 1</th>
                    <th class="p-2.5 font-bold">Var State 2</th>
                    <th class="p-2.5 font-bold">Evaluation</th>
                    <th class="p-2.5 font-bold">Output / Result</th>
                  </tr>
                </thead>
                <tbody class="divide-y divide-slate-800 text-slate-300 text-xs">
                  ${p.trace.map(t => `
                    <tr>
                      <td class="p-2.5 font-bold text-white">${t.step}</td>
                      <td class="p-2.5 font-mono text-slate-300">${t.a}</td>
                      <td class="p-2.5 font-mono text-slate-300">${t.b}</td>
                      <td class="p-2.5 text-slate-400">${t.c1}</td>
                      <td class="p-2.5 font-bold text-[#04AA6D]">${t.out}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>
          </div>

          <!-- Key Takeaway Callout -->
          <div class="bg-[#04AA6D]/10 border border-[#04AA6D]/30 rounded-xl p-4 flex items-start gap-3">
            <span class="text-xl">💡</span>
            <div>
              <div class="text-xs font-bold text-[#04AA6D] uppercase tracking-wide">Developer Key Takeaway</div>
              <p class="text-xs sm:text-sm text-slate-200 mt-0.5 leading-relaxed">${p.takeaway}</p>
            </div>
          </div>

        </article>
      `).join('')}
    </div>

  </main>

  <!-- Footer -->
  <footer class="w-full bg-[#0e1015] border-t border-slate-800 py-8 px-4 mt-12 text-center text-xs text-slate-400 space-y-2">
    <div class="flex items-center justify-center gap-2 text-white font-bold">
      <span>NextSem Academy • CS-Guide</span>
    </div>
    <p>Author: <strong>Er. Manoj Kumar</strong> | Complete Free Developer & Computer Science Curriculum</p>
    <div class="flex items-center justify-center gap-4 text-xs text-slate-400 pt-2">
      <a href="/" class="hover:text-[#04AA6D] transition">Home</a>
      <span>•</span>
      <a href="/course" class="hover:text-[#04AA6D] transition">Courses</a>
      <span>•</span>
      <a href="/cli" class="hover:text-[#04AA6D] transition">🪟 Windows CLI Track</a>
      <span>•</span>
      <a href="/about" class="hover:text-[#04AA6D] transition">About Us</a>
    </div>
  </footer>

  <script>
    function copyText(elemId, btn) {
      const text = document.getElementById(elemId).innerText;
      navigator.clipboard.writeText(text).then(() => {
        const orig = btn.innerText;
        btn.innerText = '✅ Copied!';
        btn.classList.add('bg-[#04AA6D]', 'text-black');
        setTimeout(() => {
          btn.innerText = orig;
          btn.classList.remove('bg-[#04AA6D]', 'text-black');
        }, 1800);
      });
    }

    function filterCategory(cat) {
      document.querySelectorAll('.cat-btn').forEach(b => {
        if (b.dataset.cat === cat) {
          b.className = 'cat-btn px-3 py-1 rounded-lg bg-[#04AA6D] text-black font-extrabold text-xs cursor-pointer';
        } else {
          b.className = 'cat-btn px-3 py-1 rounded-lg bg-slate-800 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 cursor-pointer';
        }
      });

      document.querySelectorAll('.problem-card').forEach(card => {
        if (cat === 'all' || card.dataset.category === cat) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    }
  </script>
</body>
</html>`;
}

const html = generateHtml();
const outNextsem = path.join(__dirname, '..', 'public', 'algorithms-and-flowcharts-10-master-problems.html');
fs.writeFileSync(outNextsem, html, 'utf8');
console.log(`Generated HTML at: ${outNextsem}`);

// Also copy to ncert.nextsem.online public if it exists
const ncertPublic = path.join(__dirname, '..', '..', 'ncert.nextsem.online', 'public', 'algorithms-and-flowcharts-10-master-problems.html');
if (fs.existsSync(path.dirname(ncertPublic))) {
  fs.writeFileSync(ncertPublic, html, 'utf8');
  console.log(`Synchronized HTML to: ${ncertPublic}`);
}
