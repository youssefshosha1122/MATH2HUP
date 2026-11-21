
import { useState } from "react";
import nerdamer from "nerdamer";
import "./App.css";

const sections = [
  {
    id: "calculus",
    icon: "∫",
    title: "Calculus",
    description: "Explore the foundations of calculus and its applications.",
    topics: [
      "Introduction to Calculus",
      "Functions & Properties",
      "Limits & Continuity",
      "Applications of Calculus",
    ],
  },
  {
    id: "differentiation",
    icon: "ƒ′",
    title: "Differentiation",
    description: "Master derivatives, differentiation rules and applications.",
    topics: [
      "Basic Differentiation Rules",
      "Product & Quotient Rules",
      "Chain Rule",
      "Implicit Differentiation",
      "Higher-Order Derivatives",
      "Applications of Differentiation",
    ],
  },
  {
    id: "integration",
    icon: "∫",
    title: "Integration",
    description: "Learn integration techniques from basic to advanced.",
    topics: [
      "Basic Integration Rules",
      "U-Substitution",
      "Integration by Parts",
      "Partial Fractions",
      "Trigonometric Integrals",
      "Definite Integrals",
      "Improper Integrals",
      "Numerical Integration",
    ],
  },
  {
    id: "formulas",
    icon: "π",
    title: "Formula Library",
    description: "Find essential mathematical formulas with solved examples.",
    topics: [
      "Differentiation Formulas",
      "Integration Formulas",
      "Trigonometric Identities",
      "Limits Formulas",
      "Algebraic Formulas",
      "Matrices Formulas",
    ],
  },
  {
    id: "calculator",
    icon: "⌘",
    title: "Smart Calculator",
    description: "Solve mathematical problems with detailed step-by-step solutions.",
    topics: [
      "Integration Solver",
      "Differentiation Solver",
      "Limits Solver",
      "Algebra Solver",
      "Matrices Solver",
      "Differential Equations",
      "Numerical Methods",
    ],
  },
];

const calculusIntroduction = {
  introduction: [
    "Calculus is a branch of mathematics that studies how quantities change and how they accumulate.",
    "It is widely used in physics, engineering, economics, computer science, and many other fields.",
    "For example, calculus helps us calculate the speed of a moving car, the area under a curve, and the rate of change of a function.",
  ],

  theory: [
    {
      title: "1. Differential Calculus",
      text: "Differential Calculus studies the rate at which a quantity changes. Its main tool is the derivative.",
      formula: "f'(x) = lim [f(x+h) - f(x)] / h",
      note: "The limit is evaluated as h approaches 0.",
    },
    {
      title: "2. Integral Calculus",
      text: "Integral Calculus studies accumulation and the area under a curve. Its main tool is the integral.",
      formula: "∫ f(x) dx",
      note: "Integration is closely related to differentiation.",
    },
    {
      title: "3. Limits",
      text: "A limit describes the value that a function approaches as its input approaches a particular number.",
      formula: "lim f(x) = L",
      note: "This means f(x) approaches L as x approaches a.",
    },
  ],

  formulas: [
    {
      name: "Power Rule",
      formula: "d/dx (xⁿ) = nxⁿ⁻¹",
      description: "Used to differentiate powers of x.",
    },
    {
      name: "Constant Rule",
      formula: "d/dx (c) = 0",
      description: "The derivative of any constant is zero.",
    },
    {
      name: "Power Integration Rule",
      formula: "∫ xⁿ dx = xⁿ⁺¹ / (n+1) + C",
      description: "Valid when n ≠ -1.",
    },
    {
      name: "Constant Multiple Rule",
      formula: "∫ c f(x) dx = c ∫ f(x) dx",
      description: "A constant can be taken outside the integral.",
    },
  ],

  examples: [
    {
      title: "Example 1: Basic Differentiation",
      question: "Find the derivative of f(x) = x³.",
      steps: [
        "Identify the power: n = 3.",
        "Apply the Power Rule: d/dx (xⁿ) = nxⁿ⁻¹.",
        "Multiply the power by the coefficient: 3 × x².",
      ],
      answer: "f'(x) = 3x²",
    },
    {
      title: "Example 2: Basic Integration",
      question: "Evaluate ∫ x² dx.",
      steps: [
        "Identify the power: n = 2.",
        "Add 1 to the power: 2 + 1 = 3.",
        "Divide by the new power.",
        "Add the constant of integration C.",
      ],
      answer: "∫ x² dx = x³/3 + C",
    },
    {
      title: "Example 3: Understanding Limits",
      question: "Evaluate lim (x + 2) as x approaches 3.",
      steps: [
        "Start with the function f(x) = x + 2.",
        "Substitute x = 3 because the function is continuous.",
        "Calculate: 3 + 2 = 5.",
      ],
      answer: "The limit = 5",
    },
  ],

  mistakes: [
    "Forgetting the constant of integration C in indefinite integrals.",
    "Confusing differentiation with integration.",
    "Applying the Power Rule incorrectly.",
    "Assuming every limit can be evaluated by direct substitution.",
  ],
};

const functionsLesson = {
  introduction: [
    "A function is a mathematical relationship that assigns exactly one output to each input.",
    "Functions are used to describe relationships between variables and model real-world situations.",
    "We usually represent a function using the notation f(x), where x is the input and f(x) is the output.",
  ],

  theory: [
    {
      title: "1. Function Notation",
      text: "The notation f(x) represents the output of a function when the input is x.",
      formula: "y = f(x)",
      note: "Each input must have exactly one output.",
    },
    {
      title: "2. Domain",
      text: "The domain is the set of all possible input values (x-values) for which the function is defined.",
      formula: "Domain = All allowed x-values",
      note: "A denominator cannot equal zero. For real-valued even roots, the expression inside the root must be non-negative.",
    },
    {
      title: "3. Range",
      text: "The range is the set of all possible output values (y-values) produced by the function.",
      formula: "Range = { f(x) : x belongs to the domain }",
      note: "The range depends on the behavior of the function.",
    },
    {
      title: "4. Types of Functions",
      text: "Functions can be classified according to their mathematical form and behavior.",
      formula: "Linear: f(x) = mx + b\nQuadratic: f(x) = ax² + bx + c\nPolynomial: f(x) = aₙxⁿ + ... + a₁x + a₀",
      note: "Other common types include exponential, logarithmic, rational, and trigonometric functions.",
    },
    {
      title: "5. Even and Odd Functions",
      text: "An even function is symmetric about the y-axis. An odd function is symmetric about the origin.",
      formula: "Even: f(-x) = f(x)\nOdd: f(-x) = -f(x)",
      note: "These tests apply when the domain allows both x and -x.",
    },
    {
      title: "6. Increasing and Decreasing Functions",
      text: "A function is increasing when its output increases as its input increases. It is decreasing when its output decreases as its input increases.",
      formula: "Increasing: x₁ < x₂ ⇒ f(x₁) < f(x₂)\nDecreasing: x₁ < x₂ ⇒ f(x₁) > f(x₂)",
      note: "Derivatives can help determine where a function increases or decreases.",
    },
  ],

  formulas: [
    {
      name: "Function Notation",
      formula: "y = f(x)",
      description: "Represents the output y corresponding to input x.",
    },
    {
      name: "Even Function",
      formula: "f(-x) = f(x)",
      description: "An even function is symmetric about the y-axis.",
    },
    {
      name: "Odd Function",
      formula: "f(-x) = -f(x)",
      description: "An odd function is symmetric about the origin.",
    },
    {
      name: "Linear Function",
      formula: "f(x) = mx + b",
      description: "A linear function has a constant rate of change.",
    },
    {
      name: "Quadratic Function",
      formula: "f(x) = ax² + bx + c",
      description: "A quadratic function has a parabolic graph, where a ≠ 0.",
    },
    {
      name: "Difference of Squares",
      formula: "a² - b² = (a - b)(a + b)",
      description: "Useful for simplifying expressions and finding domain restrictions.",
    },
  ],

  examples: [
    {
      title: "Example 1: Evaluating a Function",
      question: "If f(x) = 2x + 3, find f(4).",
      steps: [
        "Start with f(x) = 2x + 3.",
        "Substitute x = 4.",
        "Calculate: f(4) = 2(4) + 3.",
        "Simplify: 8 + 3 = 11.",
      ],
      answer: "f(4) = 11",
    },
    {
      title: "Example 2: Finding the Domain",
      question: "Find the domain of f(x) = 1 / (x - 5).",
      steps: [
        "The denominator cannot equal zero.",
        "Set x - 5 ≠ 0.",
        "Solve the restriction: x ≠ 5.",
      ],
      answer: "Domain: All real numbers except x = 5.",
    },
    {
      title: "Example 3: Identifying an Even Function",
      question: "Determine whether f(x) = x² + 4 is even or odd.",
      steps: [
        "Replace x with -x.",
        "f(-x) = (-x)² + 4.",
        "Simplify: f(-x) = x² + 4.",
        "Since f(-x) = f(x), the function is even.",
      ],
      answer: "The function is EVEN.",
    },
    {
      title: "Example 4: Finding the Range",
      question: "Find the range of f(x) = x² for all real x.",
      steps: [
        "The square of every real number is non-negative.",
        "Therefore, f(x) ≥ 0.",
        "The minimum value is 0, which occurs at x = 0.",
      ],
      answer: "Range: [0, ∞).",
    },
  ],

  mistakes: [
    "Confusing the domain with the range.",
    "Assuming every relation is a function.",
    "Forgetting that a denominator cannot equal zero.",
    "Confusing the conditions for even and odd functions.",
    "Assuming the range of every quadratic function is all real numbers.",
  ],

  summary:
    "A function assigns exactly one output to every allowed input. The domain describes its inputs, while the range describes its outputs. Understanding function types, symmetry, and behavior provides an important foundation for limits, differentiation, and integration.",
};
const limitsLesson = {
  introduction: [
    "A limit describes the value that a function approaches as its input approaches a particular value.",
    "Limits are one of the most important foundations of Calculus because they are used to define derivatives and integrals.",
    "A limit can exist even when the function is not defined at the point being approached.",
  ],

  theory: [
    {
      title: "1. Understanding Limits",
      text: "The limit of f(x) as x approaches a is the value L that f(x) approaches when x gets closer to a.",
      formula: "lim (x → a) f(x) = L",
      note: "The value of the function at x = a does not necessarily determine its limit.",
    },
    {
      title: "2. Left-Hand and Right-Hand Limits",
      text: "A left-hand limit examines values approaching a from the left, while a right-hand limit examines values approaching a from the right.",
      formula: "Left: lim (x → a⁻) f(x)\nRight: lim (x → a⁺) f(x)",
      note: "The two-sided limit exists only when both one-sided limits exist and are equal.",
    },
    {
      title: "3. Limit Laws",
      text: "Limit laws allow us to evaluate complicated expressions by separating them into simpler parts, provided the required limits exist.",
      formula: "lim(f + g) = L + M\nlim(fg) = LM\nlim(f/g) = L/M, M ≠ 0",
      note: "These laws are applied when the individual limits exist.",
    },
    {
      title: "4. Direct Substitution",
      text: "For functions that are continuous at a point, we can often evaluate the limit by directly substituting the approaching value.",
      formula: "lim (x → a) f(x) = f(a)",
      note: "If substitution gives an indeterminate form such as 0/0, further simplification may be required.",
    },
    {
      title: "5. Indeterminate Forms",
      text: "Some substitutions produce forms that do not immediately determine the limit.",
      formula: "0/0, ∞/∞, 0 × ∞, ∞ - ∞",
      note: "Common techniques include factorization, rationalization, and algebraic simplification.",
    },
    {
      title: "6. Continuity",
      text: "A function is continuous at x = a if its value exists, its limit exists, and the limit equals the function value.",
      formula: "1. f(a) is defined\n2. lim (x → a) f(x) exists\n3. lim (x → a) f(x) = f(a)",
      note: "All three conditions must be satisfied.",
    },
    {
      title: "7. Types of Discontinuity",
      text: "A discontinuity occurs when a function fails to be continuous at a point.",
      formula: "Removable: A hole in the graph\nJump: Different one-sided limits\nInfinite: Unbounded behavior",
      note: "Identifying the type helps us understand the behavior of the function near that point.",
    },
  ],

  formulas: [
    {
      name: "Constant Law",
      formula: "lim (x → a) c = c",
      description: "The limit of a constant is the constant itself.",
    },
    {
      name: "Sum Law",
      formula: "lim(f + g) = lim f + lim g",
      description: "The limit of a sum equals the sum of the limits.",
    },
    {
      name: "Product Law",
      formula: "lim(fg) = (lim f)(lim g)",
      description: "The limit of a product equals the product of the limits.",
    },
    {
      name: "Quotient Law",
      formula: "lim(f/g) = (lim f)/(lim g)",
      description: "Valid when the denominator limit is not zero.",
    },
    {
      name: "Power Law",
      formula: "lim [f(x)]ⁿ = [lim f(x)]ⁿ",
      description: "The limit of a function raised to a power.",
    },
    {
      name: "Special Trigonometric Limit",
      formula: "lim (x → 0) sin(x)/x = 1",
      description: "A fundamental trigonometric limit, with angles in radians.",
    },
    {
      name: "Continuity Condition",
      formula: "lim (x → a) f(x) = f(a)",
      description: "A function is continuous at a when its limit equals its value.",
    },
  ],

  examples: [
    {
      title: "Example 1: Direct Substitution",
      question: "Evaluate lim (x → 2) (3x + 4).",
      steps: [
        "Start with the expression: 3x + 4.",
        "Substitute x = 2.",
        "Calculate: 3(2) + 4.",
        "Simplify: 6 + 4 = 10.",
      ],
      answer: "The limit = 10",
    },
    {
      title: "Example 2: Factorization",
      question: "Evaluate lim (x → 2) (x² - 4)/(x - 2).",
      steps: [
        "Direct substitution gives 0/0, an indeterminate form.",
        "Factor the numerator: x² - 4 = (x - 2)(x + 2).",
        "Cancel the common factor (x - 2), for x ≠ 2.",
        "Evaluate the simplified expression x + 2 at x = 2.",
      ],
      answer: "The limit = 4",
    },
    {
      title: "Example 3: Continuity",
      question: "Is f(x) = x² + 1 continuous at x = 2?",
      steps: [
        "Calculate the function value: f(2) = 2² + 1 = 5.",
        "Calculate the limit: lim (x → 2) (x² + 1) = 5.",
        "Compare the limit with the function value.",
        "Both values are equal, and the function is defined at x = 2.",
      ],
      answer: "The function is continuous at x = 2.",
    },
    {
      title: "Example 4: One-Sided Limits",
      question: "A function has a left-hand limit of 3 and a right-hand limit of 5 at x = 1. Does the two-sided limit exist?",
      steps: [
        "Identify the left-hand limit: 3.",
        "Identify the right-hand limit: 5.",
        "Compare the two values.",
        "Since 3 ≠ 5, the two-sided limit does not exist.",
      ],
      answer: "The two-sided limit does not exist.",
    },
  ],

  mistakes: [
    "Assuming that the limit always equals the function value.",
    "Treating 0/0 as an answer instead of an indeterminate form.",
    "Forgetting to compare left-hand and right-hand limits.",
    "Canceling terms that are not common factors.",
    "Checking only the limit when testing continuity and forgetting f(a).",
    "Using the special trigonometric limit with angles measured in degrees instead of radians.",
  ],

  summary:
    "Limits describe the behavior of functions near a particular input. One-sided limits determine whether a two-sided limit exists. Continuity requires the function value and the limit to exist and be equal. These concepts form the foundation for differentiation and integration.",
};

const applicationsLesson = {
  introduction: [
    "Calculus is not only a theoretical subject; it is a powerful tool for solving real-world problems.",
    "Differentiation helps us study rates of change, motion, and optimization problems.",
    "Integration helps us calculate accumulated quantities, areas, and total changes.",
  ],

  theory: [
    {
      title: "1. Rates of Change",
      text: "The derivative measures how quickly one quantity changes with respect to another. It represents the instantaneous rate of change.",
      formula: "Rate of Change = f'(x)",
      note: "The derivative is the slope of the tangent line to the function at a given point.",
    },
    {
      title: "2. Motion: Position, Velocity, and Acceleration",
      text: "In motion problems, differentiation connects position, velocity, and acceleration.",
      formula: "Velocity: v(t) = s'(t)\nAcceleration: a(t) = v'(t) = s''(t)",
      note: "Position is usually measured in meters, velocity in meters per second, and acceleration in meters per second squared.",
    },
    {
      title: "3. Optimization",
      text: "Optimization is the process of finding the maximum or minimum value of a function, such as maximum area or minimum cost.",
      formula: "Critical Points: f'(x) = 0\nor f'(x) is undefined",
      note: "Check critical points and relevant endpoints to determine the absolute maximum or minimum on a closed interval.",
    },
    {
      title: "4. Increasing and Decreasing Behavior",
      text: "The first derivative helps determine where a function is increasing or decreasing.",
      formula: "f'(x) > 0: Increasing\nf'(x) < 0: Decreasing",
      note: "Study the sign of the derivative over the intervals in the domain.",
    },
    {
      title: "5. Concavity and the Second Derivative",
      text: "The second derivative describes how the graph bends and helps identify local maxima and minima.",
      formula: "f''(x) > 0: Concave Up\nf''(x) < 0: Concave Down",
      note: "A point of inflection occurs when concavity changes, not simply whenever f''(x) = 0.",
    },
    {
      title: "6. Area Under a Curve",
      text: "Integration can calculate the area between a curve and the x-axis over an interval.",
      formula: "Area = ∫ₐᵇ f(x) dx",
      note: "This gives signed area. For geometric area when the function crosses the x-axis, split the interval or integrate |f(x)|.",
    },
    {
      title: "7. Accumulation",
      text: "Integration can calculate a total quantity from a known rate of change.",
      formula: "Total Change = ∫ₐᵇ Rate(t) dt",
      note: "For example, integrating velocity over time gives displacement.",
    },
  ],

  formulas: [
    {
      name: "Instantaneous Rate of Change",
      formula: "f'(x) = dy/dx",
      description: "Measures how quickly the output changes with respect to the input.",
    },
    {
      name: "Velocity",
      formula: "v(t) = ds/dt",
      description: "The derivative of position with respect to time.",
    },
    {
      name: "Acceleration",
      formula: "a(t) = dv/dt = d²s/dt²",
      description: "The derivative of velocity with respect to time.",
    },
    {
      name: "Critical Points",
      formula: "f'(x) = 0 or f'(x) is undefined",
      description: "Possible locations of local maximum or minimum values, when they are in the domain.",
    },
    {
      name: "Second Derivative Test",
      formula: "f''(c) > 0: Local Minimum\nf''(c) < 0: Local Maximum",
      description: "Classifies a stationary point when the second derivative is positive or negative.",
    },
    {
      name: "Definite Integral",
      formula: "∫ₐᵇ f(x) dx = F(b) - F(a)",
      description: "Calculates the signed accumulation over an interval.",
    },
    {
      name: "Displacement",
      formula: "Displacement = ∫ₐᵇ v(t) dt",
      description: "The net change in position over a time interval.",
    },
  ],

  examples: [
    {
      title: "Example 1: Rate of Change",
      question: "If f(x) = x² + 3x, find the instantaneous rate of change at x = 2.",
      steps: [
        "Differentiate the function: f'(x) = 2x + 3.",
        "Substitute x = 2.",
        "Calculate: f'(2) = 2(2) + 3.",
        "Simplify: 4 + 3 = 7.",
      ],
      answer: "The instantaneous rate of change = 7.",
    },
    {
      title: "Example 2: Motion",
      question: "The position of an object is s(t) = t² + 3t. Find its velocity at t = 2 seconds.",
      steps: [
        "Position: s(t) = t² + 3t.",
        "Differentiate position to find velocity: v(t) = 2t + 3.",
        "Substitute t = 2.",
        "Calculate: v(2) = 2(2) + 3 = 7.",
      ],
      answer: "Velocity = 7 m/s.",
    },
    {
      title: "Example 3: Optimization",
      question: "A rectangle has a fixed perimeter of 20 units. Find its maximum possible area.",
      steps: [
        "Let the length be x and the width be y.",
        "From the perimeter: 2x + 2y = 20, so y = 10 - x.",
        "Area: A(x) = x(10 - x) = 10x - x².",
        "Differentiate: A'(x) = 10 - 2x.",
        "Set A'(x) = 0: 10 - 2x = 0, so x = 5.",
        "Then y = 10 - 5 = 5.",
        "Since A''(x) = -2 < 0, the area is maximum.",
      ],
      answer: "Maximum Area = 25 square units.",
    },
    {
      title: "Example 4: Area Under a Curve",
      question: "Find the area under f(x) = x from x = 0 to x = 4.",
      steps: [
        "Write the definite integral: A = ∫₀⁴ x dx.",
        "Integrate: ∫ x dx = x²/2.",
        "Apply the limits: A = [x²/2]₀⁴.",
        "Substitute the upper and lower limits: A = 16/2 - 0.",
        "Simplify: A = 8.",
      ],
      answer: "Area = 8 square units.",
    },
  ],

  mistakes: [
    "Confusing average rate of change with instantaneous rate of change.",
    "Forgetting that velocity is the derivative of position.",
    "Forgetting that acceleration is the derivative of velocity.",
    "Assuming every critical point is automatically a maximum or minimum.",
    "Forgetting to check endpoints in absolute optimization problems on closed intervals.",
    "Confusing signed area with total geometric area.",
    "Forgetting the units in motion and area problems.",
  ],

  summary:
    "Applications of Calculus connect mathematical theory to real-world problems. Derivatives help analyze rates of change, motion, and optimization, while integrals help calculate areas, displacement, and accumulated quantities.",
};

const basicDifferentiationLesson = {
  introduction: [
    "Differentiation is the process of finding the derivative of a function.",
    "The derivative measures the instantaneous rate of change of a function with respect to its variable.",
    "Geometrically, the derivative represents the slope of the tangent line to a curve at a specific point.",
  ],

  theory: [
    {
      title: "1. Derivative Definition",
      text: "The derivative is defined using the limit of the average rate of change as the interval approaches zero.",
      formula: "f'(x) = lim (h → 0) [f(x+h) - f(x)] / h",
      note: "This is called the First Principles definition of the derivative.",
    },
    {
      title: "2. Power Rule",
      text: "To differentiate a power of x, multiply by the exponent and subtract one from the exponent.",
      formula: "d/dx (xⁿ) = nxⁿ⁻¹",
      note: "This rule is valid for real exponents where the function is differentiable.",
    },
    {
      title: "3. Constant Rule",
      text: "The derivative of any constant is zero because a constant does not change.",
      formula: "d/dx (c) = 0",
      note: "For example, the derivative of 7 is zero.",
    },
    {
      title: "4. Constant Multiple Rule",
      text: "A constant coefficient remains outside the derivative.",
      formula: "d/dx [cf(x)] = cf'(x)",
      note: "Differentiate the function and keep its constant coefficient.",
    },
    {
      title: "5. Sum and Difference Rules",
      text: "The derivative of a sum or difference is the sum or difference of the individual derivatives.",
      formula: "(f + g)' = f' + g'\n(f - g)' = f' - g'",
      note: "Differentiate each term separately.",
    },
    {
      title: "6. Exponential Derivatives",
      text: "The exponential function eˣ is equal to its own derivative. For a general exponential function, a logarithmic factor appears.",
      formula: "d/dx (eˣ) = eˣ\nd/dx (aˣ) = aˣ ln(a)",
      note: "For a > 0, the second formula applies.",
    },
    {
      title: "7. Logarithmic Derivatives",
      text: "The derivative of the natural logarithm is the reciprocal of its input.",
      formula: "d/dx (ln x) = 1/x\nd/dx (logₐ x) = 1/(x ln a)",
      note: "For the natural logarithm, x must be positive. For log base a, a > 0 and a ≠ 1.",
    },
    {
      title: "8. Trigonometric Derivatives",
      text: "Trigonometric functions have standard derivative rules. The input angle is measured in radians.",
      formula: "d/dx (sin x) = cos x\nd/dx (cos x) = -sin x\nd/dx (tan x) = sec² x",
      note: "Remember the negative sign in the derivative of cosine.",
    },
  ],

  formulas: [
    {
      name: "Power Rule",
      formula: "d/dx (xⁿ) = nxⁿ⁻¹",
      description: "Multiply by the exponent and reduce the exponent by one.",
    },
    {
      name: "Constant Rule",
      formula: "d/dx (c) = 0",
      description: "The derivative of a constant is zero.",
    },
    {
      name: "Constant Multiple Rule",
      formula: "(cf)' = cf'",
      description: "Keep the constant coefficient and differentiate the function.",
    },
    {
      name: "Sum Rule",
      formula: "(f + g)' = f' + g'",
      description: "Differentiate each term in a sum.",
    },
    {
      name: "Difference Rule",
      formula: "(f - g)' = f' - g'",
      description: "Differentiate each term in a difference.",
    },
    {
      name: "Exponential Rule",
      formula: "d/dx (eˣ) = eˣ",
      description: "The derivative of eˣ is itself.",
    },
    {
      name: "General Exponential Rule",
      formula: "d/dx (aˣ) = aˣ ln(a)",
      description: "Used for exponential functions with base a > 0.",
    },
    {
      name: "Natural Logarithm Rule",
      formula: "d/dx (ln x) = 1/x",
      description: "The derivative of the natural logarithm.",
    },
    {
      name: "Sine Rule",
      formula: "d/dx (sin x) = cos x",
      description: "The derivative of sine.",
    },
    {
      name: "Cosine Rule",
      formula: "d/dx (cos x) = -sin x",
      description: "The derivative of cosine.",
    },
    {
      name: "Tangent Rule",
      formula: "d/dx (tan x) = sec² x",
      description: "The derivative of tangent.",
    },
  ],

  examples: [
    {
      title: "Example 1: Power Rule",
      question: "Differentiate f(x) = x⁵.",
      steps: [
        "Identify the exponent: n = 5.",
        "Apply the Power Rule: d/dx (xⁿ) = nxⁿ⁻¹.",
        "Multiply by 5 and reduce the exponent by one.",
      ],
      answer: "f'(x) = 5x⁴",
    },
    {
      title: "Example 2: Constant and Power Rules",
      question: "Differentiate f(x) = 4x³ + 7x² - 9.",
      steps: [
        "Differentiate the first term: 4 × 3x² = 12x².",
        "Differentiate the second term: 7 × 2x = 14x.",
        "The derivative of the constant -9 is zero.",
        "Combine the results.",
      ],
      answer: "f'(x) = 12x² + 14x",
    },
    {
      title: "Example 3: Exponential Function",
      question: "Differentiate f(x) = 3eˣ + 2x.",
      steps: [
        "Use the exponential rule: d/dx (eˣ) = eˣ.",
        "The derivative of 3eˣ is 3eˣ.",
        "The derivative of 2x is 2.",
        "Combine both derivatives.",
      ],
      answer: "f'(x) = 3eˣ + 2",
    },
    {
      title: "Example 4: Logarithmic Function",
      question: "Differentiate f(x) = ln(x) + 5x.",
      steps: [
        "Use the logarithmic rule: d/dx (ln x) = 1/x.",
        "Differentiate 5x to get 5.",
        "Combine the results.",
      ],
      answer: "f'(x) = 1/x + 5",
    },
    {
      title: "Example 5: Trigonometric Function",
      question: "Differentiate f(x) = 2sin(x) + 3cos(x).",
      steps: [
        "The derivative of sin(x) is cos(x).",
        "The derivative of cos(x) is -sin(x).",
        "Keep the constant coefficients.",
        "Combine the results.",
      ],
      answer: "f'(x) = 2cos(x) - 3sin(x)",
    },
  ],

  mistakes: [
    "Forgetting to reduce the exponent by one when applying the Power Rule.",
    "Thinking that the derivative of a constant is the constant itself.",
    "Forgetting to keep constant coefficients.",
    "Changing the sign incorrectly when differentiating cosine.",
    "Confusing the derivative of eˣ with the derivative of aˣ.",
    "Forgetting the domain restrictions of logarithmic functions.",
    "Using trigonometric derivative rules with angles in degrees instead of radians.",
  ],

  summary:
    "Basic differentiation rules provide the foundation for finding derivatives. The Power Rule, Constant Rule, Sum Rule, Exponential Rule, Logarithmic Rule, and Trigonometric Rules allow us to differentiate many common functions.",
};

const productQuotientLesson = {
  introduction: [
    "Product and Quotient Rules are essential differentiation techniques used when a function is formed by multiplying or dividing two functions.",
    "Instead of expanding or simplifying complicated expressions, these rules allow us to differentiate them directly."
  ],

  theory: [
    {
      title: "1. Product Rule",
      text: "Use the Product Rule when two functions are multiplied together.",
      formula: "(fg)' = f'g + fg'",
      note: "Differentiate the first function and multiply by the second, then add the first function multiplied by the derivative of the second."
    },
    {
      title: "2. Quotient Rule",
      text: "Use the Quotient Rule when one function is divided by another function.",
      formula: "(f/g)' = (f'g - fg') / g²",
      note: "Derivative of the numerator times the denominator, minus the numerator times the derivative of the denominator, all divided by the denominator squared. The denominator must not equal zero."
    },
    {
      title: "3. Choosing the Correct Rule",
      text: "Identify the main operation connecting the functions.",
      formula: "Multiplication → Product Rule\nDivision → Quotient Rule",
      note: "Always identify f(x) and g(x) before applying the formula."
    }
  ],

  formulas: [
    {
      name: "Product Rule",
      formula: "d/dx [f(x)g(x)] = f'(x)g(x) + f(x)g'(x)",
      description: "Used when two functions are multiplied."
    },
    {
      name: "Quotient Rule",
      formula: "d/dx [f(x)/g(x)] = [f'(x)g(x) - f(x)g'(x)] / [g(x)]²",
      description: "Used when one function is divided by another."
    }
  ],

  examples: [
    {
      title: "Example 1: Product Rule",
      question: "Find the derivative of y = x² sin(x).",
      steps: [
        "Let f(x) = x² and g(x) = sin(x).",
        "Differentiate: f'(x) = 2x and g'(x) = cos(x).",
        "Apply the Product Rule: y' = f'g + fg'.",
        "Substitute the derivatives."
      ],
      answer: "2x sin(x) + x² cos(x)"
    },
    {
      title: "Example 2: Quotient Rule",
      question: "Find the derivative of y = (x² + 1)/(x + 1).",
      steps: [
        "Let f(x) = x² + 1 and g(x) = x + 1.",
        "Differentiate: f'(x) = 2x and g'(x) = 1.",
        "Apply the Quotient Rule.",
        "y' = [2x(x + 1) - (x² + 1)] / (x + 1)².",
        "Simplify the numerator."
      ],
      answer: "(x² + 2x - 1) / (x + 1)², x ≠ -1"
    },
    {
      title: "Example 3: Product Rule with Exponential Functions",
      question: "Find the derivative of y = x³ eˣ.",
      steps: [
        "Let f(x) = x³ and g(x) = eˣ.",
        "Differentiate: f'(x) = 3x² and g'(x) = eˣ.",
        "Apply the Product Rule.",
        "y' = 3x²eˣ + x³eˣ.",
        "Factor out eˣ."
      ],
      answer: "eˣ(x³ + 3x²)"
    }
  ],

  mistakes: [
    "Forgetting one of the two terms in the Product Rule.",
    "Using the Quotient Rule with the wrong subtraction order.",
    "Forgetting to square the denominator.",
    "Differentiating only the numerator or only the denominator.",
    "Confusing Product Rule with Chain Rule."
  ],

  summary: "The Product Rule is used for multiplication: f'g + fg'. The Quotient Rule is used for division: (f'g - fg') / g². Identify both functions and their derivatives before substituting into the formulas."
};


const chainRuleLesson = {
  introduction: [
    "The Chain Rule is used to differentiate composite functions, where one function is inside another function.",
    "It allows us to differentiate complicated expressions by working from the outside function to the inside function."
  ],

  theory: [
    {
      title: "1. Understanding Composite Functions",
      text: "A composite function is formed when one function is applied to another function.",
      formula: "y = f(g(x))",
      note: "The inner function is g(x), while the outer function is f(u)."
    },
    {
      title: "2. The Chain Rule",
      text: "Differentiate the outer function first, keeping the inner function unchanged, then multiply by the derivative of the inner function.",
      formula: "dy/dx = f'(g(x)) × g'(x)",
      note: "Think: derivative of the outside × derivative of the inside."
    },
    {
      title: "3. Power Chain Rule",
      text: "When a function inside parentheses is raised to a power, apply the Power Rule and multiply by the derivative of the inside.",
      formula: "d/dx [u(x)]ⁿ = n[u(x)]ⁿ⁻¹ × u'(x)",
      note: "Reduce the exponent by one, then multiply by the derivative of the inner function."
    },
    {
      title: "4. Chain Rule with Exponential Functions",
      text: "For an exponential function with an inner function in its exponent, multiply by the derivative of that exponent.",
      formula: "d/dx [eᵘ] = eᵘ × u'",
      note: "The exponential function remains unchanged before multiplying by the inner derivative."
    },
    {
      title: "5. Chain Rule with Trigonometric Functions",
      text: "Trigonometric functions containing an inner function also require the Chain Rule.",
      formula: "d/dx [sin(u)] = cos(u) × u'\nd/dx [cos(u)] = -sin(u) × u'",
      note: "The angle is measured in radians."
    }
  ],

  formulas: [
    {
      name: "General Chain Rule",
      formula: "d/dx [f(g(x))] = f'(g(x)) × g'(x)",
      description: "Used for any differentiable composite function."
    },
    {
      name: "Power Chain Rule",
      formula: "d/dx [uⁿ] = n uⁿ⁻¹ × u'",
      description: "Used when an inner function is raised to a power."
    },
    {
      name: "Exponential Chain Rule",
      formula: "d/dx [eᵘ] = eᵘ × u'",
      description: "Used for exponential functions."
    },
    {
      name: "Sine Chain Rule",
      formula: "d/dx [sin(u)] = cos(u) × u'",
      description: "Used for sine functions."
    },
    {
      name: "Cosine Chain Rule",
      formula: "d/dx [cos(u)] = -sin(u) × u'",
      description: "Used for cosine functions."
    },
    {
      name: "Logarithmic Chain Rule",
      formula: "d/dx [ln(u)] = u' / u",
      description: "Used for natural logarithms, where u > 0."
    }
  ],

  examples: [
    {
      title: "Example 1: Power Chain Rule",
      question: "Find the derivative of y = (3x + 2)⁴.",
      steps: [
        "Identify the outer function: u⁴, and the inner function: u = 3x + 2.",
        "Differentiate the outer function: 4u³.",
        "Differentiate the inner function: u' = 3.",
        "Multiply both results and substitute u = 3x + 2."
      ],
      answer: "12(3x + 2)³"
    },
    {
      title: "Example 2: Trigonometric Chain Rule",
      question: "Find the derivative of y = sin(5x).",
      steps: [
        "The outer function is sin(u), and the inner function is u = 5x.",
        "Differentiate the outer function: cos(u).",
        "Differentiate the inner function: u' = 5.",
        "Multiply and substitute u = 5x."
      ],
      answer: "5cos(5x)"
    },
    {
      title: "Example 3: Exponential Chain Rule",
      question: "Find the derivative of y = e^(x² + 1).",
      steps: [
        "Identify the inner function: u = x² + 1.",
        "Differentiate the outer function: eᵘ.",
        "Differentiate the inner function: u' = 2x.",
        "Multiply the exponential function by 2x."
      ],
      answer: "2x e^(x² + 1)"
    },
    {
      title: "Example 4: Logarithmic Chain Rule",
      question: "Find the derivative of y = ln(2x + 3).",
      steps: [
        "Identify the inner function: u = 2x + 3.",
        "Use the logarithmic Chain Rule: y' = u' / u.",
        "Differentiate the inner function: u' = 2.",
        "Substitute into the formula."
      ],
      answer: "2 / (2x + 3)"
    }
  ],

  mistakes: [
    "Forgetting to multiply by the derivative of the inner function.",
    "Differentiating only the outer function.",
    "Reducing the exponent but forgetting the inner derivative.",
    "Confusing the Chain Rule with the Product Rule.",
    "Forgetting the negative sign when differentiating cosine."
  ],

  summary: "The Chain Rule is used for composite functions. Differentiate the outer function while keeping the inner function unchanged, then multiply by the derivative of the inner function. Remember: Outside derivative × Inside derivative."
};

const implicitDifferentiationLesson = {
  introduction: [
    "Implicit Differentiation is a technique used to find derivatives when y is not isolated as a function of x.",
    "It is especially useful for equations that contain both x and y, such as circles and other curves."
  ],

  theory: [
    {
      title: "1. Explicit vs. Implicit Functions",
      text: "In an explicit function, y is written directly in terms of x. In an implicit function, x and y appear together in an equation.",
      formula: "Explicit: y = x² + 3\nImplicit: x² + y² = 25",
      note: "Implicit Differentiation allows us to differentiate equations without solving for y first."
    },
    {
      title: "2. Differentiating y Terms",
      text: "When differentiating a term containing y, remember that y depends on x. Therefore, use the Chain Rule.",
      formula: "d/dx(yⁿ) = n yⁿ⁻¹ × dy/dx",
      note: "For example, the derivative of y² is 2y(dy/dx), not just 2y."
    },
    {
      title: "3. Differentiating Both Sides",
      text: "Differentiate every term on both sides of the equation with respect to x.",
      formula: "d/dx (x² + y²) = d/dx (25)",
      note: "Differentiate x terms normally and apply the Chain Rule to y terms."
    },
    {
      title: "4. Product Rule with x and y",
      text: "When x and y are multiplied, use the Product Rule because both variables may depend on x through y.",
      formula: "d/dx(xy) = x(dy/dx) + y",
      note: "Differentiate the first factor and keep the second, then keep the first and differentiate the second."
    },
    {
      title: "5. Solving for dy/dx",
      text: "After differentiating, collect all terms containing dy/dx on one side, then factor and solve.",
      formula: "dy/dx = - (terms without dy/dx) / (coefficient of dy/dx)",
      note: "The final answer is usually written in terms of x and y."
    }
  ],

  formulas: [
    {
      name: "Derivative of y",
      formula: "d/dx(y) = dy/dx",
      description: "The derivative of y with respect to x."
    },
    {
      name: "Power of y",
      formula: "d/dx(yⁿ) = n yⁿ⁻¹(dy/dx)",
      description: "Apply the Power Rule and Chain Rule."
    },
    {
      name: "Product of x and y",
      formula: "d/dx(xy) = x(dy/dx) + y",
      description: "Apply the Product Rule."
    },
    {
      name: "Derivative of sin(y)",
      formula: "d/dx(sin(y)) = cos(y)(dy/dx)",
      description: "Apply the Chain Rule."
    },
    {
      name: "Derivative of cos(y)",
      formula: "d/dx(cos(y)) = -sin(y)(dy/dx)",
      description: "Apply the Chain Rule."
    },
    {
      name: "Derivative of eʸ",
      formula: "d/dx(eʸ) = eʸ(dy/dx)",
      description: "Apply the Chain Rule to the exponential function."
    }
  ],

  examples: [
    {
      title: "Example 1: Circle Equation",
      question: "Find dy/dx if x² + y² = 25.",
      steps: [
        "Differentiate both sides with respect to x.",
        "2x + 2y(dy/dx) = 0.",
        "Move 2x to the right side.",
        "2y(dy/dx) = -2x.",
        "Divide both sides by 2y."
      ],
      answer: "dy/dx = -x/y"
    },
    {
      title: "Example 2: Product of x and y",
      question: "Find dy/dx if xy + y² = 10.",
      steps: [
        "Differentiate xy using the Product Rule: x(dy/dx) + y.",
        "Differentiate y² using the Chain Rule: 2y(dy/dx).",
        "Combine the results: x(dy/dx) + y + 2y(dy/dx) = 0.",
        "Collect dy/dx terms: (x + 2y)(dy/dx) = -y.",
        "Divide by x + 2y."
      ],
      answer: "dy/dx = -y/(x + 2y)"
    },
    {
      title: "Example 3: Trigonometric Function",
      question: "Find dy/dx if sin(y) + x² = 4.",
      steps: [
        "Differentiate sin(y): cos(y)(dy/dx).",
        "Differentiate x²: 2x.",
        "The derivative of 4 is zero.",
        "cos(y)(dy/dx) + 2x = 0.",
        "Rearrange and divide by cos(y)."
      ],
      answer: "dy/dx = -2x/cos(y)"
    }
  ],

  mistakes: [
    "Forgetting to multiply by dy/dx when differentiating y terms.",
    "Differentiating y² as 2y instead of 2y(dy/dx).",
    "Forgetting the Product Rule when differentiating xy.",
    "Forgetting to differentiate both sides of the equation.",
    "Not collecting dy/dx terms before solving."
  ],

  summary: "Implicit Differentiation is used when x and y appear together in an equation. Differentiate both sides with respect to x, apply the Chain Rule to every y term, collect dy/dx terms, and solve for the derivative."
};

const higherOrderDerivativesLesson = {
  introduction: [
    "Higher-Order Derivatives are derivatives obtained by differentiating a function more than once.",
    "The first derivative describes the rate of change, while the second derivative describes how the rate of change itself changes."
  ],

  theory: [
    {
      title: "1. First Derivative",
      text: "The first derivative represents the instantaneous rate of change of a function and the slope of its tangent line.",
      formula: "f'(x) = dy/dx",
      note: "It helps determine where a function is increasing or decreasing."
    },
    {
      title: "2. Second Derivative",
      text: "The second derivative is obtained by differentiating the first derivative again.",
      formula: "f''(x) = d²y/dx²",
      note: "It describes the rate of change of the first derivative and helps study concavity."
    },
    {
      title: "3. Third and Higher Derivatives",
      text: "Continue differentiating to obtain the third derivative and other higher-order derivatives.",
      formula: "f'''(x) = d³y/dx³\nf⁽ⁿ⁾(x) = dⁿy/dxⁿ",
      note: "Each derivative is obtained by differentiating the previous one."
    },
    {
      title: "4. Concavity",
      text: "The second derivative tells us about the shape of a function.",
      formula: "f''(x) > 0 → Concave Up\nf''(x) < 0 → Concave Down",
      note: "A possible inflection point occurs where concavity changes."
    },
    {
      title: "5. Second Derivative Test",
      text: "At a critical point where f'(c) = 0, the second derivative can help classify a local maximum or minimum.",
      formula: "f''(c) > 0 → Local Minimum\nf''(c) < 0 → Local Maximum",
      note: "If f''(c) = 0, the test is inconclusive. Another method is needed."
    }
  ],

  formulas: [
    {
      name: "First Derivative",
      formula: "f'(x) = dy/dx",
      description: "The first derivative of a function."
    },
    {
      name: "Second Derivative",
      formula: "f''(x) = d²y/dx²",
      description: "The derivative of the first derivative."
    },
    {
      name: "Third Derivative",
      formula: "f'''(x) = d³y/dx³",
      description: "The derivative of the second derivative."
    },
    {
      name: "Nth Derivative",
      formula: "f⁽ⁿ⁾(x) = dⁿy/dxⁿ",
      description: "Represents the nth derivative."
    },
    {
      name: "Power Rule for Higher Derivatives",
      formula: "dⁿ/dxⁿ (xᵐ) = m(m-1)...(m-n+1)xᵐ⁻ⁿ",
      description: "For a non-negative integer power m, when n does not exceed m."
    }
  ],

  examples: [
    {
      title: "Example 1: Second Derivative",
      question: "Find the first and second derivatives of f(x) = x⁴ + 3x².",
      steps: [
        "Differentiate once: f'(x) = 4x³ + 6x.",
        "Differentiate again: f''(x) = 12x² + 6."
      ],
      answer: "f'(x) = 4x³ + 6x,  f''(x) = 12x² + 6"
    },
    {
      title: "Example 2: Third Derivative",
      question: "Find the third derivative of f(x) = x⁵.",
      steps: [
        "First derivative: f'(x) = 5x⁴.",
        "Second derivative: f''(x) = 20x³.",
        "Third derivative: f'''(x) = 60x²."
      ],
      answer: "f'''(x) = 60x²"
    },
    {
      title: "Example 3: Second Derivative Test",
      question: "Find the nature of the critical point of f(x) = x² - 4x + 5.",
      steps: [
        "First derivative: f'(x) = 2x - 4.",
        "Set f'(x) = 0: 2x - 4 = 0, so x = 2.",
        "Second derivative: f''(x) = 2.",
        "Since f''(2) > 0, the function has a local minimum at x = 2.",
        "Calculate the function value: f(2) = 4 - 8 + 5 = 1."
      ],
      answer: "Local minimum at (2, 1)"
    },
    {
      title: "Example 4: Concavity",
      question: "Determine the concavity of f(x) = x³.",
      steps: [
        "First derivative: f'(x) = 3x².",
        "Second derivative: f''(x) = 6x.",
        "For x < 0, f''(x) < 0, so the graph is concave down.",
        "For x > 0, f''(x) > 0, so the graph is concave up.",
        "Concavity changes at x = 0."
      ],
      answer: "Inflection point at (0, 0)"
    }
  ],

  mistakes: [
    "Confusing the first derivative with the second derivative.",
    "Forgetting to differentiate the function again when finding higher derivatives.",
    "Assuming f''(c) = 0 always means an inflection point.",
    "Using the second derivative test when the first derivative is not zero.",
    "Forgetting to substitute the critical point into the original function when finding its coordinates."
  ],

  summary: "Higher-Order Derivatives are obtained by differentiating repeatedly. The first derivative describes the rate of change, the second derivative describes concavity, and higher derivatives describe further changes. The second derivative test can classify certain local maximum and minimum points."
};

const applicationsDifferentiationLesson = {
  introduction: [
    "Differentiation is not only a mathematical technique; it is also a powerful tool for solving real-world problems.",
    "It is used to study motion, rates of change, optimization, curve behavior, and engineering applications."
  ],

  theory: [
    {
      title: "1. Related Rates",
      text: "Related Rates problems involve quantities that change with time and are connected by an equation.",
      formula: "dy/dt = (dy/dx) × (dx/dt)",
      note: "Differentiate the relationship with respect to time, then substitute the known values and rates."
    },
    {
      title: "2. Optimization",
      text: "Optimization is used to find maximum or minimum values of a quantity, such as maximum area or minimum cost.",
      formula: "f'(x) = 0",
      note: "Find critical points, check the second derivative when applicable, and consider endpoints for absolute extrema on a closed interval."
    },
    {
      title: "3. Increasing and Decreasing Functions",
      text: "The first derivative helps determine whether a function is increasing or decreasing.",
      formula: "f'(x) > 0 → Increasing\nf'(x) < 0 → Decreasing",
      note: "Study the sign of the first derivative on the intervals separated by critical points."
    },
    {
      title: "4. Local Maximum and Minimum",
      text: "A local maximum is a point where the function is greater than nearby values. A local minimum is where it is smaller than nearby values.",
      formula: "f'(c) = 0",
      note: "A critical point may be a maximum, minimum, or neither. Use derivative tests to classify it."
    },
    {
      title: "5. Concavity and Inflection Points",
      text: "The second derivative describes the concavity of a curve. An inflection point occurs when the concavity changes.",
      formula: "f''(x) > 0 → Concave Up\nf''(x) < 0 → Concave Down",
      note: "A point where f''(x) = 0 is only a possible inflection point; verify that concavity actually changes."
    },
    {
      title: "6. Motion Applications",
      text: "When position is given as a function of time, differentiation gives velocity and acceleration.",
      formula: "v(t) = s'(t)\na(t) = v'(t) = s''(t)",
      note: "Velocity is the rate of change of position, while acceleration is the rate of change of velocity."
    }
  ],

  formulas: [
    {
      name: "Critical Points",
      formula: "f'(x) = 0 or f'(x) does not exist",
      description: "Possible locations of local extrema."
    },
    {
      name: "Increasing Function",
      formula: "f'(x) > 0",
      description: "The function increases on the interval."
    },
    {
      name: "Decreasing Function",
      formula: "f'(x) < 0",
      description: "The function decreases on the interval."
    },
    {
      name: "Second Derivative Test",
      formula: "f''(c) > 0 → Local Minimum\nf''(c) < 0 → Local Maximum",
      description: "Classifies a stationary critical point when the second derivative is nonzero."
    },
    {
      name: "Velocity",
      formula: "v(t) = ds/dt",
      description: "The derivative of position with respect to time."
    },
    {
      name: "Acceleration",
      formula: "a(t) = dv/dt = d²s/dt²",
      description: "The second derivative of position with respect to time."
    },
    {
      name: "Related Rates",
      formula: "dy/dt = (dy/dx)(dx/dt)",
      description: "Connects the rates of change of related quantities."
    }
  ],

  examples: [
    {
      title: "Example 1: Finding a Local Minimum",
      question: "Find the local minimum of f(x) = x² - 6x + 10.",
      steps: [
        "Differentiate: f'(x) = 2x - 6.",
        "Set the first derivative equal to zero: 2x - 6 = 0.",
        "Solve to get x = 3.",
        "Find the second derivative: f''(x) = 2.",
        "Since f''(3) > 0, the function has a local minimum.",
        "Calculate f(3) = 9 - 18 + 10 = 1."
      ],
      answer: "Local minimum at (3, 1)"
    },
    {
      title: "Example 2: Increasing and Decreasing",
      question: "Determine where f(x) = x² - 4x is increasing or decreasing.",
      steps: [
        "Differentiate: f'(x) = 2x - 4.",
        "Find the critical point: 2x - 4 = 0, so x = 2.",
        "For x < 2, f'(x) < 0, so the function is decreasing.",
        "For x > 2, f'(x) > 0, so the function is increasing."
      ],
      answer: "Decreasing on (-∞, 2); Increasing on (2, ∞)"
    },
    {
      title: "Example 3: Motion",
      question: "A particle has position s(t) = t³ - 3t² + 2t. Find its velocity and acceleration.",
      steps: [
        "Velocity is the first derivative of position.",
        "v(t) = 3t² - 6t + 2.",
        "Acceleration is the derivative of velocity.",
        "a(t) = 6t - 6."
      ],
      answer: "v(t) = 3t² - 6t + 2; a(t) = 6t - 6"
    },
    {
      title: "Example 4: Optimization",
      question: "A rectangle has a perimeter of 20 units. Find its maximum possible area.",
      steps: [
        "Let the length be x and the width be y.",
        "From the perimeter: 2x + 2y = 20, so y = 10 - x.",
        "Area: A(x) = x(10 - x) = 10x - x².",
        "Differentiate: A'(x) = 10 - 2x.",
        "Set A'(x) = 0, giving x = 5.",
        "Then y = 5 and A(5) = 25."
      ],
      answer: "Maximum area = 25 square units"
    }
  ],

  mistakes: [
    "Assuming every critical point is a maximum or minimum.",
    "Forgetting to check endpoints when finding absolute extrema on a closed interval.",
    "Using the first derivative instead of the second derivative for concavity.",
    "Assuming f''(x) = 0 automatically means an inflection point.",
    "Confusing velocity with acceleration.",
    "Substituting values before differentiating in related-rates problems."
  ],

  summary: "Applications of Differentiation include optimization, related rates, motion, increasing and decreasing behavior, and curve analysis. The first derivative describes the rate of change, while the second derivative helps study concavity and classify certain critical points."
};

const basicIntegrationLesson = {
  introduction: [
    "Integration is one of the two main branches of Calculus. It is the reverse process of differentiation and is used to find antiderivatives and accumulated quantities.",
    "Integration has important applications in finding areas, volumes, displacement, and many engineering and scientific problems."
  ],

  theory: [
    {
      title: "1. Understanding Integration",
      text: "Integration is the process of finding a function whose derivative equals a given function.",
      formula: "∫ f(x) dx = F(x) + C",
      note: "F(x) is the antiderivative of f(x), and C is the constant of integration."
    },
    {
      title: "2. Power Rule of Integration",
      text: "To integrate a power of x, increase the exponent by one and divide by the new exponent.",
      formula: "∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ -1",
      note: "This rule does not apply when n = -1."
    },
    {
      title: "3. Constant Rule",
      text: "The integral of a constant is that constant multiplied by x.",
      formula: "∫ k dx = kx + C",
      note: "Here, k is a constant."
    },
    {
      title: "4. Constant Multiple Rule",
      text: "A constant multiplier can be moved outside the integral.",
      formula: "∫ k f(x) dx = k ∫ f(x) dx",
      note: "This makes integration easier when an expression has a constant coefficient."
    },
    {
      title: "5. Sum and Difference Rules",
      text: "The integral of a sum or difference is the sum or difference of the individual integrals.",
      formula: "∫ [f(x) ± g(x)] dx = ∫ f(x) dx ± ∫ g(x) dx",
      note: "You can integrate each term separately."
    },
    {
      title: "6. Special Integral: 1/x",
      text: "The power rule cannot be used directly when the exponent is -1. This case has a logarithmic result.",
      formula: "∫ (1/x) dx = ln|x| + C",
      note: "The absolute value is important because x can be positive or negative, but not zero."
    }
  ],

  formulas: [
    {
      name: "Power Rule",
      formula: "∫ xⁿ dx = xⁿ⁺¹/(n + 1) + C, n ≠ -1",
      description: "The basic rule for integrating powers of x."
    },
    {
      name: "Constant Rule",
      formula: "∫ k dx = kx + C",
      description: "The integral of a constant."
    },
    {
      name: "Constant Multiple Rule",
      formula: "∫ kf(x) dx = k∫ f(x) dx",
      description: "Move a constant outside the integral."
    },
    {
      name: "Sum Rule",
      formula: "∫ [f(x) + g(x)] dx = ∫f(x)dx + ∫g(x)dx",
      description: "Integrate each term separately."
    },
    {
      name: "Difference Rule",
      formula: "∫ [f(x) - g(x)] dx = ∫f(x)dx - ∫g(x)dx",
      description: "The subtraction sign remains between the integrals."
    },
    {
      name: "Logarithmic Integral",
      formula: "∫ (1/x) dx = ln|x| + C",
      description: "Special case when the power of x is -1."
    },
    {
      name: "Exponential Integral",
      formula: "∫ eˣ dx = eˣ + C",
      description: "The integral of the natural exponential function."
    },
    {
      name: "General Exponential Integral",
      formula: "∫ aˣ dx = aˣ/ln(a) + C",
      description: "For a > 0 and a ≠ 1."
    },
    {
      name: "Trigonometric Integrals",
      formula: "∫ cos(x) dx = sin(x) + C\n∫ sin(x) dx = -cos(x) + C",
      description: "Basic trigonometric integration formulas."
    }
  ],

  examples: [
    {
      title: "Example 1: Power Rule",
      question: "Evaluate ∫ x⁴ dx.",
      steps: [
        "Apply the Power Rule.",
        "Increase the exponent by one: 4 + 1 = 5.",
        "Divide by the new exponent.",
        "Add the constant of integration."
      ],
      answer: "x⁵/5 + C"
    },
    {
      title: "Example 2: Polynomial Integration",
      question: "Evaluate ∫ (3x² + 4x - 5) dx.",
      steps: [
        "Separate the integral into three terms.",
        "∫ 3x² dx = x³.",
        "∫ 4x dx = 2x².",
        "∫ -5 dx = -5x.",
        "Combine the results and add C."
      ],
      answer: "x³ + 2x² - 5x + C"
    },
    {
      title: "Example 3: Logarithmic Integral",
      question: "Evaluate ∫ (1/x) dx.",
      steps: [
        "Recognize the special form 1/x.",
        "Use the logarithmic integration formula.",
        "Include the absolute value and constant of integration."
      ],
      answer: "ln|x| + C"
    },
    {
      title: "Example 4: Exponential Integration",
      question: "Evaluate ∫ (2eˣ + 3cos(x)) dx.",
      steps: [
        "Separate the integral into two terms.",
        "∫ 2eˣ dx = 2eˣ.",
        "∫ 3cos(x) dx = 3sin(x).",
        "Combine both results and add C."
      ],
      answer: "2eˣ + 3sin(x) + C"
    }
  ],

  mistakes: [
    "Forgetting to add the constant of integration C.",
    "Using the Power Rule when the exponent is -1.",
    "Increasing the exponent without dividing by the new exponent.",
    "Forgetting to integrate every term in a polynomial.",
    "Confusing the integral of sin(x) with the integral of cos(x).",
    "Forgetting the absolute value in ln|x|."
  ],

  summary: "Integration is the reverse process of differentiation. Use the Power Rule for powers of x, the Constant Rule for constants, and the Sum and Difference Rules to integrate expressions term by term. Always remember the constant of integration C."
};

const uSubstitutionLesson = {
  intro: "U-Substitution is an integration technique used to simplify complicated integrals by replacing an inner expression with a new variable called u. It is the reverse process of the Chain Rule.",
  theory: [
    {
      title: "1. Understanding U-Substitution",
      content: "U-Substitution simplifies an integral by choosing a suitable part of the expression and replacing it with u. This makes the integral easier to solve."
    },
    {
      title: "2. Choosing u",
      content: "Choose u as an inner function, usually an expression inside parentheses, a power, a root, or a function inside another function."
    },
    {
      title: "3. Finding du",
      content: "Differentiate u with respect to x to find du. Rearrange the result to express the required part of the integral in terms of du."
    },
    {
      title: "4. Rewriting the Integral",
      content: "Replace the chosen expression with u and replace the corresponding x terms with du. The entire integral should be written using u."
    },
    {
      title: "5. Integrating and Substituting Back",
      content: "Integrate with respect to u, then replace u with its original expression in x. Do not forget the constant of integration C."
    },
    {
      title: "6. Recognizing When to Use It",
      content: "Use U-Substitution when an expression and its derivative (or a constant multiple of its derivative) appear together in the integrand."
    }
  ],
  formulas: [
    {
      name: "Substitution",
      formula: "u = g(x)"
    },
    {
      name: "Differential",
      formula: "du = g'(x) dx"
    },
    {
      name: "Substitution Rule",
      formula: "∫ f(g(x)) g'(x) dx = ∫ f(u) du"
    },
    {
      name: "Power Integral",
      formula: "∫ uⁿ du = uⁿ⁺¹/(n+1) + C, n ≠ -1"
    },
    {
      name: "Logarithmic Integral",
      formula: "∫ (1/u) du = ln|u| + C"
    }
  ],
  examples: [
    {
      title: "Example 1: Polynomial Inside a Power",
      question: "∫ 2x(x² + 1)⁵ dx",
      steps: [
        "Let u = x² + 1.",
        "Then du = 2x dx.",
        "The integral becomes ∫ u⁵ du.",
        "Integrate: u⁶/6 + C.",
        "Substitute back: (x² + 1)⁶/6 + C."
      ],
      answer: "(x² + 1)⁶/6 + C"
    },
    {
      title: "Example 2: Trigonometric Function",
      question: "∫ cos(3x) dx",
      steps: [
        "Let u = 3x.",
        "Then du = 3 dx, so dx = du/3.",
        "The integral becomes (1/3) ∫ cos(u) du.",
        "Integrate: (1/3) sin(u) + C.",
        "Substitute back: (1/3) sin(3x) + C."
      ],
      answer: "(1/3) sin(3x) + C"
    },
    {
      title: "Example 3: Exponential Function",
      question: "∫ x e^(x²) dx",
      steps: [
        "Let u = x².",
        "Then du = 2x dx, so x dx = du/2.",
        "The integral becomes (1/2) ∫ eᵘ du.",
        "Integrate: (1/2)eᵘ + C.",
        "Substitute back: (1/2)e^(x²) + C."
      ],
      answer: "(1/2)e^(x²) + C"
    },
    {
      title: "Example 4: Logarithmic Form",
      question: "∫ 2x/(x² + 4) dx",
      steps: [
        "Let u = x² + 4.",
        "Then du = 2x dx.",
        "The integral becomes ∫ 1/u du.",
        "Integrate: ln|u| + C.",
        "Substitute back: ln(x² + 4) + C."
      ],
      answer: "ln(x² + 4) + C"
    }
  ],
  mistakes: [
    "Choosing u without checking whether its derivative appears in the integral.",
    "Forgetting to change dx when converting to du.",
    "Leaving some x terms in the integral after substitution.",
    "Forgetting to substitute u back into the original variable.",
    "Forgetting the constant of integration C."
  ],
  summary: "U-Substitution makes complicated integrals simpler by choosing u = g(x), finding du, rewriting the integral in terms of u, integrating, and substituting back."
};

const integrationByPartsLesson = {
  intro: "Integration by Parts is a technique used to integrate products of two functions. It is based on the Product Rule of Differentiation and is especially useful when the integrand contains logarithmic, inverse trigonometric, algebraic, or exponential functions multiplied together.",
  theory: [
    {
      title: "1. Understanding Integration by Parts",
      content: "Integration by Parts transforms an integral of a product into a simpler integral. It is derived from the Product Rule of Differentiation."
    },
    {
      title: "2. The Main Formula",
      content: "The formula is ∫u dv = uv − ∫v du. You choose one part as u and the remaining part as dv."
    },
    {
      title: "3. Choosing u and dv",
      content: "Choose u as the function that becomes simpler when differentiated. Choose dv as the remaining part that can be integrated easily."
    },
    {
      title: "4. The LIATE Guideline",
      content: "LIATE is a useful guideline for choosing u: Logarithmic, Inverse Trigonometric, Algebraic, Trigonometric, Exponential. It is a guideline, not an absolute rule."
    },
    {
      title: "5. Repeated Integration by Parts",
      content: "Some integrals require applying the formula more than once. Each application should make the remaining integral simpler."
    },
    {
      title: "6. Definite Integrals",
      content: "For definite integrals, apply the formula and evaluate the resulting expression at the upper and lower limits."
    }
  ],
  formulas: [
    {
      name: "Integration by Parts",
      formula: "∫u dv = uv − ∫v du"
    },
    {
      name: "Definite Integration by Parts",
      formula: "∫ₐᵇ u dv = [uv]ₐᵇ − ∫ₐᵇ v du"
    },
    {
      name: "Differential of u",
      formula: "du = u'(x) dx"
    },
    {
      name: "Common Integral",
      formula: "∫eˣ dx = eˣ + C"
    },
    {
      name: "Logarithmic Derivative",
      formula: "d/dx[ln(x)] = 1/x, x > 0"
    }
  ],
  examples: [
    {
      title: "Example 1: Algebraic × Exponential",
      question: "∫ x eˣ dx",
      steps: [
        "Choose u = x and dv = eˣ dx.",
        "Then du = dx and v = eˣ.",
        "Apply the formula: uv − ∫v du.",
        "The result is xeˣ − ∫eˣ dx.",
        "Integrate the remaining term."
      ],
      answer: "xeˣ − eˣ + C"
    },
    {
      title: "Example 2: Algebraic × Trigonometric",
      question: "∫ x cos(x) dx",
      steps: [
        "Choose u = x and dv = cos(x) dx.",
        "Then du = dx and v = sin(x).",
        "Apply the formula: x sin(x) − ∫sin(x) dx.",
        "Integrate the remaining term."
      ],
      answer: "x sin(x) + cos(x) + C"
    },
    {
      title: "Example 3: Logarithmic Function",
      question: "∫ ln(x) dx",
      steps: [
        "Rewrite the integral as ∫ln(x) · 1 dx.",
        "Choose u = ln(x) and dv = dx.",
        "Then du = (1/x) dx and v = x.",
        "Apply the formula: x ln(x) − ∫1 dx."
      ],
      answer: "x ln(x) − x + C, x > 0"
    },
    {
      title: "Example 4: Repeated Integration by Parts",
      question: "∫ x² eˣ dx",
      steps: [
        "First choose u = x² and dv = eˣ dx.",
        "Then du = 2x dx and v = eˣ.",
        "The integral becomes x²eˣ − 2∫xeˣ dx.",
        "Apply Integration by Parts again to ∫xeˣ dx.",
        "Substitute the result into the original expression."
      ],
      answer: "eˣ(x² − 2x + 2) + C"
    }
  ],
  mistakes: [
    "Choosing u and dv without checking whether they simplify the integral.",
    "Forgetting the minus sign in the formula.",
    "Calculating du or v incorrectly.",
    "Forgetting to integrate the remaining integral.",
    "Forgetting the constant of integration C."
  ],
  summary: "Integration by Parts is used for products of functions. Choose u and dv, calculate du and v, then apply ∫u dv = uv − ∫v du."
};

const partialFractionsLesson = {
  intro: "Partial Fractions is an integration technique used to split a complicated rational function into simpler fractions. It is especially useful when the numerator and denominator are polynomials.",
  theory: [
    {
      title: "1. Understanding Partial Fractions",
      content: "A rational function is a fraction whose numerator and denominator are polynomials. Partial Fraction Decomposition expresses it as a sum of simpler fractions."
    },
    {
      title: "2. Check the Degrees",
      content: "Before decomposition, compare the degrees of the numerator and denominator. If the numerator's degree is greater than or equal to the denominator's degree, perform polynomial long division first."
    },
    {
      title: "3. Distinct Linear Factors",
      content: "For distinct linear factors such as (x − a)(x − b), use separate constants: A/(x − a) + B/(x − b)."
    },
    {
      title: "4. Repeated Linear Factors",
      content: "For a repeated factor such as (x − a)³, include every power: A/(x − a) + B/(x − a)² + C/(x − a)³."
    },
    {
      title: "5. Irreducible Quadratic Factors",
      content: "For an irreducible quadratic factor such as x² + 1, use a linear numerator: (Ax + B)/(x² + 1)."
    },
    {
      title: "6. Finding the Constants",
      content: "Multiply both sides by the original denominator, expand if needed, then compare coefficients or substitute convenient values of x to find the unknown constants."
    }
  ],
  formulas: [
    {
      name: "Two Distinct Linear Factors",
      formula: "P(x)/[(x-a)(x-b)] = A/(x-a) + B/(x-b)"
    },
    {
      name: "Repeated Linear Factor",
      formula: "A₁/(x-a) + A₂/(x-a)² + ... + Aₙ/(x-a)ⁿ"
    },
    {
      name: "Irreducible Quadratic Factor",
      formula: "(Ax+B)/(x²+px+q)"
    },
    {
      name: "Integration of a Linear Fraction",
      formula: "∫ 1/(x-a) dx = ln|x-a| + C"
    },
    {
      name: "Integration of a Repeated Linear Fraction",
      formula: "∫ 1/(x-a)ⁿ dx = (x-a)⁽¹⁻ⁿ⁾/(1-n) + C, n ≠ 1"
    }
  ],
  examples: [
    {
      title: "Example 1: Distinct Linear Factors",
      question: "∫ (3x + 5) / [(x + 1)(x + 2)] dx",
      steps: [
        "Decompose: (3x + 5)/[(x + 1)(x + 2)] = A/(x + 1) + B/(x + 2).",
        "Multiply by (x + 1)(x + 2): 3x + 5 = A(x + 2) + B(x + 1).",
        "Set x = -1: 2 = A, so A = 2.",
        "Set x = -2: -1 = -B, so B = 1.",
        "Integrate: ∫[2/(x + 1) + 1/(x + 2)] dx."
      ],
      answer: "2 ln|x + 1| + ln|x + 2| + C"
    },
    {
      title: "Example 2: Repeated Linear Factor",
      question: "∫ 1/[x(x + 1)²] dx",
      steps: [
        "Write: 1/[x(x + 1)²] = A/x + B/(x + 1) + C/(x + 1)².",
        "Multiply by x(x + 1)²: 1 = A(x + 1)² + Bx(x + 1) + Cx.",
        "Set x = 0: A = 1.",
        "Set x = -1: C = -1.",
        "Compare coefficients to get B = -1.",
        "Integrate: ∫[1/x − 1/(x + 1) − 1/(x + 1)²] dx."
      ],
      answer: "ln|x| − ln|x + 1| + 1/(x + 1) + C"
    },
    {
      title: "Example 3: Irreducible Quadratic Factor",
      question: "∫ (2x + 3)/[(x + 1)(x² + 1)] dx",
      steps: [
        "Write: (2x + 3)/[(x + 1)(x² + 1)] = A/(x + 1) + (Bx + C)/(x² + 1).",
        "Multiply by (x + 1)(x² + 1).",
        "Compare coefficients to obtain A = 1, B = -1, C = 1.",
        "Rewrite: 1/(x + 1) + (-x + 1)/(x² + 1).",
        "Integrate each term separately."
      ],
      answer: "ln|x + 1| − (1/2)ln(x² + 1) + tan⁻¹(x) + C"
    }
  ],
  mistakes: [
    "Forgetting polynomial long division when the numerator degree is too large.",
    "Leaving out a power when decomposing a repeated factor.",
    "Using a constant numerator for an irreducible quadratic factor.",
    "Making sign mistakes when substituting values of x.",
    "Forgetting the absolute value in logarithmic integrals."
  ],
  summary: "Partial Fractions decomposes a rational function into simpler fractions. Factor the denominator, choose the correct form for each factor, solve for the constants, and integrate each term."
};

const trigonometricIntegralsLesson = {
  intro: "Trigonometric Integrals involve integrating powers and products of trigonometric functions such as sine, cosine, tangent, and secant. The main goal is to use trigonometric identities to simplify the integral.",
  theory: [
    {
      title: "1. Understanding Trigonometric Integrals",
      content: "These integrals contain trigonometric functions raised to powers or multiplied together. Choosing the right identity makes the integration easier."
    },
    {
      title: "2. Powers of Sine and Cosine",
      content: "For sinⁿ(x) cosᵐ(x), if one power is odd, save one factor and use sin²(x) + cos²(x) = 1 to rewrite the remaining power."
    },
    {
      title: "3. Both Powers Are Even",
      content: "When both sine and cosine powers are even, use the half-angle identities to reduce the powers before integrating."
    },
    {
      title: "4. Powers of Tangent and Secant",
      content: "For tanᵐ(x) secⁿ(x), if the secant power is even, save sec²(x) and use sec²(x) = 1 + tan²(x). If the tangent power is odd, save sec(x)tan(x) and use tan²(x) = sec²(x) − 1."
    },
    {
      title: "5. Important Trigonometric Identities",
      content: "The identities sin²(x) + cos²(x) = 1, 1 + tan²(x) = sec²(x), and 1 + cot²(x) = csc²(x) are essential for simplifying these integrals."
    },
    {
      title: "6. Substitution in Trigonometric Integrals",
      content: "After applying an identity, choose a substitution that matches the remaining function and its derivative."
    }
  ],
  formulas: [
    {
      name: "Pythagorean Identity",
      formula: "sin²(x) + cos²(x) = 1"
    },
    {
      name: "Tangent Identity",
      formula: "1 + tan²(x) = sec²(x)"
    },
    {
      name: "Cotangent Identity",
      formula: "1 + cot²(x) = csc²(x)"
    },
    {
      name: "Half-Angle Identity",
      formula: "sin²(x) = [1 − cos(2x)]/2"
    },
    {
      name: "Cosine Half-Angle Identity",
      formula: "cos²(x) = [1 + cos(2x)]/2"
    },
    {
      name: "Basic Sine Integral",
      formula: "∫ sin(x) dx = −cos(x) + C"
    },
    {
      name: "Basic Cosine Integral",
      formula: "∫ cos(x) dx = sin(x) + C"
    },
    {
      name: "Basic Secant Integral",
      formula: "∫ sec(x) dx = ln|sec(x) + tan(x)| + C"
    }
  ],
  examples: [
    {
      title: "Example 1: Odd Power of Sine",
      question: "∫ sin³(x) cos(x) dx",
      steps: [
        "Let u = sin(x).",
        "Then du = cos(x) dx.",
        "Rewrite the integral as ∫u³ du.",
        "Integrate using the Power Rule.",
        "Substitute u = sin(x) back."
      ],
      answer: "sin⁴(x)/4 + C"
    },
    {
      title: "Example 2: Odd Power of Cosine",
      question: "∫ sin(x) cos³(x) dx",
      steps: [
        "Let u = cos(x).",
        "Then du = −sin(x) dx.",
        "Rewrite the integral as −∫u³ du.",
        "Integrate using the Power Rule.",
        "Substitute u = cos(x) back."
      ],
      answer: "−cos⁴(x)/4 + C"
    },
    {
      title: "Example 3: Even Powers",
      question: "∫ sin²(x) dx",
      steps: [
        "Use the half-angle identity: sin²(x) = [1 − cos(2x)]/2.",
        "Rewrite as (1/2)∫[1 − cos(2x)] dx.",
        "Integrate each term separately.",
        "Remember that ∫cos(2x) dx = sin(2x)/2."
      ],
      answer: "x/2 − sin(2x)/4 + C"
    },
    {
      title: "Example 4: Tangent and Secant",
      question: "∫ tan³(x) sec²(x) dx",
      steps: [
        "Let u = tan(x).",
        "Then du = sec²(x) dx.",
        "Rewrite the integral as ∫u³ du.",
        "Integrate using the Power Rule.",
        "Substitute u = tan(x) back."
      ],
      answer: "tan⁴(x)/4 + C"
    }
  ],
  mistakes: [
    "Applying trigonometric identities incorrectly.",
    "Forgetting to save one factor when using an odd power.",
    "Using the wrong half-angle identity.",
    "Forgetting the negative sign when differentiating cosine.",
    "Forgetting the chain rule factor when integrating functions such as cos(2x)."
  ],
  summary: "Trigonometric Integrals are solved by simplifying powers with trigonometric identities, choosing a suitable substitution, and then applying standard integration rules."
};

const definiteIntegralsLesson = {
  intro: "Definite Integration is used to calculate the accumulated value of a function over a specific interval. It is commonly used to find signed areas, displacement, and total accumulated quantities.",
  theory: [
    {
      title: "1. Understanding Definite Integrals",
      content: "A definite integral calculates the accumulated value of a function between two limits, a and b. Unlike indefinite integrals, its result is a number and does not include + C."
    },
    {
      title: "2. Upper and Lower Limits",
      content: "The lower limit a represents the starting point, while the upper limit b represents the ending point of integration."
    },
    {
      title: "3. The Fundamental Theorem of Calculus",
      content: "If F'(x) = f(x), then the definite integral from a to b equals F(b) − F(a). Find the antiderivative, substitute the upper limit, then subtract the value at the lower limit."
    },
    {
      title: "4. Geometric Meaning",
      content: "A definite integral represents signed area between the curve and the x-axis. Areas above the x-axis are positive, while areas below it are negative."
    },
    {
      title: "5. Properties of Definite Integrals",
      content: "Definite integrals are linear, reversing the limits changes the sign, and splitting an interval at a point gives the sum of the two integrals."
    },
    {
      title: "6. Symmetry Properties",
      content: "For an even function, the integral from −a to a equals twice the integral from 0 to a. For an odd function, the integral from −a to a equals zero, provided the function is integrable."
    }
  ],
  formulas: [
    {
      name: "Fundamental Theorem of Calculus",
      formula: "∫ₐᵇ f(x) dx = F(b) − F(a)"
    },
    {
      name: "Reversing Limits",
      formula: "∫ₐᵇ f(x) dx = −∫ᵦᵃ f(x) dx"
    },
    {
      name: "Same Limits",
      formula: "∫ₐᵃ f(x) dx = 0"
    },
    {
      name: "Splitting an Interval",
      formula: "∫ₐᵇ f(x) dx = ∫ₐᶜ f(x) dx + ∫ᶜᵇ f(x) dx"
    },
    {
      name: "Constant Multiple",
      formula: "∫ₐᵇ kf(x) dx = k∫ₐᵇ f(x) dx"
    },
    {
      name: "Even Function",
      formula: "∫₋ₐᵃ f(x) dx = 2∫₀ᵃ f(x) dx"
    },
    {
      name: "Odd Function",
      formula: "∫₋ₐᵃ f(x) dx = 0"
    }
  ],
  examples: [
    {
      title: "Example 1: Basic Definite Integral",
      question: "∫₀² x² dx",
      steps: [
        "Find the antiderivative: F(x) = x³/3.",
        "Apply the Fundamental Theorem: F(2) − F(0).",
        "Substitute the upper limit: 8/3.",
        "Substitute the lower limit: 0.",
        "Subtract the two values."
      ],
      answer: "8/3"
    },
    {
      title: "Example 2: Polynomial Function",
      question: "∫₁³ (2x + 1) dx",
      steps: [
        "Integrate: F(x) = x² + x.",
        "Substitute the upper limit: F(3) = 9 + 3 = 12.",
        "Substitute the lower limit: F(1) = 1 + 1 = 2.",
        "Calculate F(3) − F(1) = 12 − 2."
      ],
      answer: "10"
    },
    {
      title: "Example 3: Negative Result",
      question: "∫₀² (x − 3) dx",
      steps: [
        "Integrate: F(x) = x²/2 − 3x.",
        "Calculate F(2) = 2 − 6 = −4.",
        "Calculate F(0) = 0.",
        "Subtract: F(2) − F(0)."
      ],
      answer: "−4"
    },
    {
      title: "Example 4: Even Function",
      question: "∫₋₂² x² dx",
      steps: [
        "Notice that f(x) = x² is an even function.",
        "Use symmetry: ∫₋₂² x² dx = 2∫₀² x² dx.",
        "Integrate: 2[x³/3]₀².",
        "Evaluate the limits: 2 × (8/3)."
      ],
      answer: "16/3"
    }
  ],
  mistakes: [
    "Adding + C to a definite integral's final answer.",
    "Substituting the lower limit before the upper limit without keeping the subtraction order.",
    "Forgetting to calculate F(b) − F(a).",
    "Confusing signed area with total geometric area.",
    "Applying even or odd symmetry to a function that does not have that property."
  ],
  summary: "To evaluate a definite integral, find the antiderivative F(x), substitute the upper and lower limits, and calculate F(b) − F(a)."
};

const improperIntegralsLesson = {
  intro: "Improper Integrals are definite integrals that involve an infinite interval or an integrand that becomes unbounded at one or more points in the interval. They are evaluated using limits.",
  theory: [
    {
      title: "1. Understanding Improper Integrals",
      content: "An improper integral is a definite integral that cannot be evaluated directly using ordinary limits because the interval is infinite or the function is unbounded."
    },
    {
      title: "2. Infinite Interval",
      content: "When an integration interval extends to infinity, replace infinity with a variable limit and evaluate the integral as that limit approaches infinity."
    },
    {
      title: "3. Infinite Discontinuity",
      content: "If the integrand becomes unbounded at an endpoint, rewrite the integral using a limit approaching that endpoint."
    },
    {
      title: "4. Discontinuity Inside the Interval",
      content: "If the function becomes unbounded at an interior point c, split the integral into two separate improper integrals, one on each side of c."
    },
    {
      title: "5. Convergence and Divergence",
      content: "An improper integral converges if its defining limit exists and is finite. If the limit is infinite or does not exist, the integral diverges."
    },
    {
      title: "6. The p-Integral Test",
      content: "For ∫₁∞ 1/xᵖ dx, the integral converges when p > 1 and diverges when p ≤ 1."
    }
  ],
  formulas: [
    {
      name: "Infinite Upper Limit",
      formula: "∫ₐ∞ f(x) dx = lim(t→∞) ∫ₐᵗ f(x) dx"
    },
    {
      name: "Infinite Lower Limit",
      formula: "∫₋∞ᵇ f(x) dx = lim(t→−∞) ∫ₜᵇ f(x) dx"
    },
    {
      name: "Unbounded at Lower Endpoint",
      formula: "∫ₐᵇ f(x) dx = lim(t→a⁺) ∫ₜᵇ f(x) dx"
    },
    {
      name: "Unbounded at Upper Endpoint",
      formula: "∫ₐᵇ f(x) dx = lim(t→b⁻) ∫ₐᵗ f(x) dx"
    },
    {
      name: "p-Integral Test",
      formula: "∫₁∞ 1/xᵖ dx converges if p > 1"
    },
    {
      name: "Logarithmic Case",
      formula: "∫₁∞ 1/x dx diverges"
    }
  ],
  examples: [
    {
      title: "Example 1: Infinite Upper Limit",
      question: "∫₁∞ 1/x² dx",
      steps: [
        "Rewrite using a limit: lim(t→∞) ∫₁ᵗ 1/x² dx.",
        "Integrate: ∫x⁻² dx = −1/x.",
        "Evaluate: lim(t→∞) [−1/x]₁ᵗ.",
        "Simplify: lim(t→∞) (1 − 1/t).",
        "Evaluate the limit."
      ],
      answer: "1 (Convergent)"
    },
    {
      title: "Example 2: Divergent Integral",
      question: "∫₁∞ 1/x dx",
      steps: [
        "Rewrite: lim(t→∞) ∫₁ᵗ 1/x dx.",
        "Integrate: ln|x|.",
        "Evaluate: lim(t→∞) [ln(x)]₁ᵗ.",
        "Simplify: lim(t→∞) ln(t).",
        "The limit is infinite."
      ],
      answer: "Diverges"
    },
    {
      title: "Example 3: Unbounded at an Endpoint",
      question: "∫₀¹ 1/√x dx",
      steps: [
        "The integrand is unbounded at x = 0.",
        "Rewrite: lim(t→0⁺) ∫ₜ¹ x⁻¹ᐟ² dx.",
        "Integrate: 2√x.",
        "Evaluate: lim(t→0⁺) [2√x]ₜ¹.",
        "Simplify: lim(t→0⁺) (2 − 2√t)."
      ],
      answer: "2 (Convergent)"
    },
    {
      title: "Example 4: Discontinuity Inside the Interval",
      question: "∫₋₁¹ 1/x² dx",
      steps: [
        "The integrand is unbounded at x = 0.",
        "Split the integral: ∫₋₁⁰ 1/x² dx + ∫₀¹ 1/x² dx.",
        "Evaluate each part using a one-sided limit.",
        "Each part diverges to positive infinity.",
        "Therefore, the original improper integral diverges."
      ],
      answer: "Diverges"
    }
  ],
  mistakes: [
    "Substituting infinity directly instead of using a limit.",
    "Forgetting to use a one-sided limit at an unbounded endpoint.",
    "Ignoring a discontinuity inside the integration interval.",
    "Assuming an integral converges just because its antiderivative exists.",
    "Forgetting that every required limit must be finite for convergence."
  ],
  summary: "Improper Integrals are evaluated using limits. Identify the infinite interval or unbounded point, rewrite the integral as a limit, evaluate it, and determine whether it converges or diverges."
};


const formulaLibrary = {
  "Differentiation Formulas": [
    {
      name: "Power Rule",
      formula: "d/dx (xⁿ) = nxⁿ⁻¹",
      description: "Differentiate a power of x.",
    },
    {
      name: "Constant Rule",
      formula: "d/dx (c) = 0",
      description: "The derivative of a constant is zero.",
    },
    {
      name: "Constant Multiple Rule",
      formula: "d/dx [cf(x)] = cf'(x)",
      description: "A constant multiplier stays outside the derivative.",
    },
    {
      name: "Sum Rule",
      formula: "(f + g)' = f' + g'",
      description: "Differentiate each term separately.",
    },
    {
      name: "Difference Rule",
      formula: "(f - g)' = f' - g'",
      description: "The derivative of a difference.",
    },
    {
      name: "Product Rule",
      formula: "(fg)' = f'g + fg'",
      description: "Used when two functions are multiplied.",
    },
    {
      name: "Quotient Rule",
      formula: "(f/g)' = (f'g - fg') / g²",
      description: "Used when one function is divided by another, where g ≠ 0.",
    },
    {
      name: "Chain Rule",
      formula: "d/dx f(g(x)) = f'(g(x)) · g'(x)",
      description: "Used to differentiate composite functions.",
    },
    {
      name: "Exponential Rule",
      formula: "d/dx (eˣ) = eˣ",
      description: "The derivative of e to the power x.",
    },
    {
      name: "General Exponential Rule",
      formula: "d/dx (aˣ) = aˣ ln(a)",
      description: "Valid for a > 0.",
    },
    {
      name: "Logarithmic Rule",
      formula: "d/dx (ln x) = 1/x",
      description: "The derivative of the natural logarithm for x > 0.",
    },
    {
      name: "General Logarithm Rule",
      formula: "d/dx [ln|u|] = u'/u",
      description: "The derivative of the natural logarithm of an absolute-value function.",
    },
    {
      name: "Sine Rule",
      formula: "d/dx (sin x) = cos x",
      description: "The derivative of sine.",
    },
    {
      name: "Cosine Rule",
      formula: "d/dx (cos x) = -sin x",
      description: "The derivative of cosine.",
    },
    {
      name: "Tangent Rule",
      formula: "d/dx (tan x) = sec² x",
      description: "The derivative of tangent where defined.",
    },
    {
      name: "Cotangent Rule",
      formula: "d/dx (cot x) = -csc² x",
      description: "The derivative of cotangent where defined.",
    },
    {
      name: "Secant Rule",
      formula: "d/dx (sec x) = sec x tan x",
      description: "The derivative of secant.",
    },
    {
      name: "Cosecant Rule",
      formula: "d/dx (csc x) = -csc x cot x",
      description: "The derivative of cosecant.",
    },
    {
      name: "Inverse Sine Rule",
      formula: "d/dx (sin⁻¹ x) = 1/√(1-x²)",
      description: "Valid for -1 < x < 1.",
    },
    {
      name: "Inverse Cosine Rule",
      formula: "d/dx (cos⁻¹ x) = -1/√(1-x²)",
      description: "Valid for -1 < x < 1.",
    },
  ],

  "Integration Formulas": [
    {
      name: "Power Rule",
      formula: "∫ xⁿ dx = xⁿ⁺¹/(n+1) + C",
      description: "Valid for n ≠ -1.",
    },
    {
      name: "Constant Rule",
      formula: "∫ c dx = cx + C",
      description: "Integrate a constant.",
    },
    {
      name: "Constant Multiple Rule",
      formula: "∫ kf(x) dx = k∫f(x) dx",
      description: "A constant can be moved outside the integral.",
    },
    {
      name: "Sum Rule",
      formula: "∫ [f(x) + g(x)] dx = ∫f(x)dx + ∫g(x)dx",
      description: "Integrate each term separately.",
    },
    {
      name: "Difference Rule",
      formula: "∫ [f(x) - g(x)] dx = ∫f(x)dx - ∫g(x)dx",
      description: "The integral of a difference.",
    },
    {
      name: "Reciprocal Rule",
      formula: "∫ (1/x) dx = ln|x| + C",
      description: "The integral of the reciprocal of x.",
    },
    {
      name: "Exponential Rule",
      formula: "∫ eˣ dx = eˣ + C",
      description: "The integral of the exponential function.",
    },
    {
      name: "General Exponential Rule",
      formula: "∫ aˣ dx = aˣ/ln(a) + C",
      description: "Valid for a > 0 and a ≠ 1.",
    },
    {
      name: "Sine Rule",
      formula: "∫ sin(x) dx = -cos(x) + C",
      description: "The integral of sine.",
    },
    {
      name: "Cosine Rule",
      formula: "∫ cos(x) dx = sin(x) + C",
      description: "The integral of cosine.",
    },
    {
      name: "Tangent Rule",
      formula: "∫ sec²(x) dx = tan(x) + C",
      description: "The integral of secant squared.",
    },
    {
      name: "Cotangent Rule",
      formula: "∫ csc²(x) dx = -cot(x) + C",
      description: "The integral of cosecant squared.",
    },
    {
      name: "Secant Rule",
      formula: "∫ sec(x)tan(x) dx = sec(x) + C",
      description: "The integral of secant multiplied by tangent.",
    },
    {
      name: "Cosecant Rule",
      formula: "∫ csc(x)cot(x) dx = -csc(x) + C",
      description: "The integral of cosecant multiplied by cotangent.",
    },
    {
      name: "Integration by Parts",
      formula: "∫u dv = uv - ∫v du",
      description: "Used to integrate products of functions.",
    },
    {
      name: "U-Substitution",
      formula: "∫f(g(x))g'(x)dx = ∫f(u)du",
      description: "Simplifies integrals using u = g(x).",
    },
    {
      name: "Definite Integral",
      formula: "∫ₐᵇ f(x) dx = F(b) - F(a)",
      description: "Evaluate an antiderivative at the upper and lower limits.",
    },
  ],

  "Trigonometric Identities": [
    {
      name: "Pythagorean Identity",
      formula: "sin²(x) + cos²(x) = 1",
      description: "The fundamental trigonometric identity.",
    },
    {
      name: "Tangent Identity",
      formula: "tan(x) = sin(x) / cos(x)",
      description: "Defines tangent in terms of sine and cosine.",
    },
    {
      name: "Secant Identity",
      formula: "sec(x) = 1 / cos(x)",
      description: "Secant is the reciprocal of cosine.",
    },
    {
      name: "Cosecant Identity",
      formula: "csc(x) = 1 / sin(x)",
      description: "Cosecant is the reciprocal of sine.",
    },
    {
      name: "Cotangent Identity",
      formula: "cot(x) = cos(x) / sin(x)",
      description: "Defines cotangent in terms of cosine and sine.",
    },
    {
      name: "Tangent Pythagorean Identity",
      formula: "1 + tan²(x) = sec²(x)",
      description: "A useful identity for tangent and secant.",
    },
    {
      name: "Cotangent Pythagorean Identity",
      formula: "1 + cot²(x) = csc²(x)",
      description: "A useful identity for cotangent and cosecant.",
    },
    {
      name: "Double Angle - Sine",
      formula: "sin(2x) = 2sin(x)cos(x)",
      description: "The sine double-angle identity.",
    },
    {
      name: "Double Angle - Cosine",
      formula: "cos(2x) = cos²(x) - sin²(x)",
      description: "The cosine double-angle identity.",
    },
    {
      name: "Cosine Double Angle - Alternative 1",
      formula: "cos(2x) = 1 - 2sin²(x)",
      description: "An alternative form of the cosine double-angle identity.",
    },
    {
      name: "Cosine Double Angle - Alternative 2",
      formula: "cos(2x) = 2cos²(x) - 1",
      description: "Another alternative form of the cosine double-angle identity.",
    },
    {
      name: "Tangent Double Angle",
      formula: "tan(2x) = 2tan(x) / (1 - tan²(x))",
      description: "The tangent double-angle identity where defined.",
    },
    {
      name: "Sine Half Angle",
      formula: "sin²(x) = [1 - cos(2x)] / 2",
      description: "Useful for simplifying powers of sine.",
    },
    {
      name: "Cosine Half Angle",
      formula: "cos²(x) = [1 + cos(2x)] / 2",
      description: "Useful for simplifying powers of cosine.",
    },
  ],

  "Limits Formulas": [
    {
      name: "Constant Law",
      formula: "lim(c) = c",
      description: "The limit of a constant is the constant itself.",
    },
    {
      name: "Identity Law",
      formula: "lim(x) = a",
      description: "As x approaches a, the limit of x is a.",
    },
    {
      name: "Sum Law",
      formula: "lim(f + g) = lim f + lim g",
      description: "The limit of a sum equals the sum of limits, when they exist.",
    },
    {
      name: "Difference Law",
      formula: "lim(f - g) = lim f - lim g",
      description: "The limit of a difference.",
    },
    {
      name: "Product Law",
      formula: "lim(fg) = (lim f)(lim g)",
      description: "The limit of a product.",
    },
    {
      name: "Quotient Law",
      formula: "lim(f/g) = (lim f)/(lim g)",
      description: "Valid when the denominator limit is not zero.",
    },
    {
      name: "Power Law",
      formula: "lim [f(x)]ⁿ = [lim f(x)]ⁿ",
      description: "The limit of a function raised to a power.",
    },
    {
      name: "Root Law",
      formula: "lim √[n]{f(x)} = √[n]{lim f(x)}",
      description: "Valid when the root is defined.",
    },
    {
      name: "Special Trigonometric Limit",
      formula: "lim(x→0) sin(x)/x = 1",
      description: "As x approaches 0, with x measured in radians.",
    },
    {
      name: "Second Trigonometric Limit",
      formula: "lim(x→0) [1-cos(x)]/x² = 1/2",
      description: "A standard trigonometric limit in radians.",
    },
    {
      name: "Exponential Limit",
      formula: "lim(x→∞) (1 + 1/x)ˣ = e",
      description: "A fundamental limit defining the number e.",
    },
    {
      name: "Continuity Condition",
      formula: "lim(x→a) f(x) = f(a)",
      description: "A function is continuous at a when the limit equals its value.",
    },
  ],

  "Algebraic Formulas": [
    {
      name: "Square of a Sum",
      formula: "(a + b)² = a² + 2ab + b²",
      description: "Expand the square of a sum.",
    },
    {
      name: "Square of a Difference",
      formula: "(a - b)² = a² - 2ab + b²",
      description: "Expand the square of a difference.",
    },
    {
      name: "Difference of Squares",
      formula: "a² - b² = (a - b)(a + b)",
      description: "Factor the difference of two squares.",
    },
    {
      name: "Cube of a Sum",
      formula: "(a + b)³ = a³ + 3a²b + 3ab² + b³",
      description: "Expand the cube of a sum.",
    },
    {
      name: "Cube of a Difference",
      formula: "(a - b)³ = a³ - 3a²b + 3ab² - b³",
      description: "Expand the cube of a difference.",
    },
    {
      name: "Sum of Cubes",
      formula: "a³ + b³ = (a + b)(a² - ab + b²)",
      description: "Factor the sum of two cubes.",
    },
    {
      name: "Difference of Cubes",
      formula: "a³ - b³ = (a - b)(a² + ab + b²)",
      description: "Factor the difference of two cubes.",
    },
    {
      name: "Quadratic Formula",
      formula: "x = (-b ± √(b² - 4ac)) / (2a)",
      description: "Solve ax² + bx + c = 0, where a ≠ 0.",
    },
    {
      name: "Discriminant",
      formula: "Δ = b² - 4ac",
      description: "Determines the nature of the roots of a quadratic equation.",
    },
    {
      name: "Arithmetic Sequence",
      formula: "aₙ = a₁ + (n-1)d",
      description: "Find the nth term of an arithmetic sequence.",
    },
    {
      name: "Geometric Sequence",
      formula: "aₙ = a₁ r⁽ⁿ⁻¹⁾",
      description: "Find the nth term of a geometric sequence.",
    },
    {
      name: "Arithmetic Series",
      formula: "Sₙ = n(a₁ + aₙ)/2",
      description: "Sum the first n terms of an arithmetic sequence.",
    },
    {
      name: "Geometric Series",
      formula: "Sₙ = a₁(1-rⁿ)/(1-r), r ≠ 1",
      description: "Sum the first n terms of a finite geometric sequence.",
    },
  ],

  "Matrices Formulas": [
    {
      name: "Matrix Addition",
      formula: "A + B = [aᵢⱼ + bᵢⱼ]",
      description: "Add corresponding entries of matrices with equal dimensions.",
    },
    {
      name: "Matrix Subtraction",
      formula: "A - B = [aᵢⱼ - bᵢⱼ]",
      description: "Subtract corresponding entries of matrices with equal dimensions.",
    },
    {
      name: "Scalar Multiplication",
      formula: "kA = [kaᵢⱼ]",
      description: "Multiply every matrix entry by a scalar.",
    },
    {
      name: "Matrix Multiplication",
      formula: "(AB)ᵢⱼ = Σₖ aᵢₖ bₖⱼ",
      description: "Multiply rows of A by columns of B. The number of columns in A must equal the number of rows in B.",
    },
    {
      name: "2×2 Determinant",
      formula: "det(A) = ad - bc",
      description: "For A = [[a,b],[c,d]].",
    },
    {
      name: "3×3 Determinant",
      formula: "det(A) = a(ei-fh) - b(di-fg) + c(dh-eg)",
      description: "For A = [[a,b,c],[d,e,f],[g,h,i]].",
    },
    {
      name: "2×2 Identity Matrix",
      formula: "I = [[1,0],[0,1]]",
      description: "The identity matrix for a 2×2 matrix.",
    },
    {
      name: "2×2 Inverse Matrix",
      formula: "A⁻¹ = 1/(ad-bc) [[d,-b],[-c,a]]",
      description: "Valid when the determinant ad - bc is not zero.",
    },
    {
      name: "Transpose",
      formula: "(Aᵀ)ᵢⱼ = Aⱼᵢ",
      description: "The transpose swaps rows and columns.",
    },
    {
      name: "Determinant of a Product",
      formula: "det(AB) = det(A)det(B)",
      description: "The determinant of a product equals the product of determinants for square matrices.",
    },
    {
      name: "Inverse of a Product",
      formula: "(AB)⁻¹ = B⁻¹A⁻¹",
      description: "The inverse reverses the order of matrix multiplication.",
    },
    {
      name: "Transpose of a Product",
      formula: "(AB)ᵀ = BᵀAᵀ",
      description: "The transpose reverses the order of multiplication.",
    },
  ],
};


function App() {
  const [name, setName] = useState(
    localStorage.getItem("math2hub-name") || ""
  );

  const [page, setPage] = useState(
    localStorage.getItem("math2hub-name") ? "landing" : "welcome"
  );

  const [activeSection, setActiveSection] = useState(null);
  const [activeTopic, setActiveTopic] = useState(null);
  const [integralInput, setIntegralInput] = useState("x^2");
const [integralResult, setIntegralResult] = useState("");
const [integralError, setIntegralError] = useState("");
const [integralSteps, setIntegralSteps] = useState([]);
const [derivativeInput, setDerivativeInput] = useState("x^2");
const [derivativeResult, setDerivativeResult] = useState("");
const [derivativeSteps, setDerivativeSteps] = useState([]);
const [derivativeError, setDerivativeError] = useState("");
const [limitInput, setLimitInput] = useState("sin(x)/x");
const [limitPoint, setLimitPoint] = useState("0");
const [limitResult, setLimitResult] = useState("");
const [limitSteps, setLimitSteps] = useState([]);
const [limitError, setLimitError] = useState("");
const [algebraInput, setAlgebraInput] = useState("x^2 - 5*x + 6");
const [algebraResult, setAlgebraResult] = useState("");
const [algebraSteps, setAlgebraSteps] = useState([]);
const [algebraError, setAlgebraError] = useState("");
const [matrixA, setMatrixA] = useState("1,2;3,4");
const [matrixB, setMatrixB] = useState("5,6;7,8");
const [matrixOperation, setMatrixOperation] = useState("add");
const [matrixResult, setMatrixResult] = useState("");
const [matrixSteps, setMatrixSteps] = useState([]);
const [matrixError, setMatrixError] = useState("");
const [differentialInput, setDifferentialInput] = useState("x^2 + 3*x");
const [differentialResult, setDifferentialResult] = useState("");
const [differentialSteps, setDifferentialSteps] = useState([]);
const [differentialError, setDifferentialError] = useState("");
const [numericalFunction, setNumericalFunction] = useState("x^2 - 4");
const [numericalMethod, setNumericalMethod] = useState("bisection");
const [numericalA, setNumericalA] = useState("0");
const [numericalB, setNumericalB] = useState("3");
const [numericalN, setNumericalN] = useState("6");
const [numericalInitial, setNumericalInitial] = useState("2");
const [numericalInitial2, setNumericalInitial2] = useState("3");
const [numericalResult, setNumericalResult] = useState("");
const [numericalSteps, setNumericalSteps] = useState([]);
const [numericalError, setNumericalError] = useState("");
  const [formulaSearch, setFormulaSearch] = useState("");

  function handleContinue(e) {
    e.preventDefault();
    if (!name.trim()) return;

    localStorage.setItem("math2hub-name", name.trim());
    setName(name.trim());
    setPage("landing");
  }

  function openDashboard() {
    setActiveSection(null);
    setActiveTopic(null);
    setPage("dashboard");
  }

  function goHome() {
    setActiveSection(null);
    setActiveTopic(null);
    setPage("dashboard");
  }

  function changeUser() {
    localStorage.removeItem("math2hub-name");
    setName("");
    setActiveSection(null);
    setActiveTopic(null);
    setPage("welcome");
  }

  function openSection(sectionId) {
    setActiveSection(sectionId);
    setActiveTopic(null);
  }

  function backToTopics() {
    setActiveTopic(null);
  }
  

function solveIntegration() {
  try {
  const expression = integralInput.trim();

    if (!expression) {
      setIntegralError("Please enter a function first.");
      setIntegralResult("");
      setIntegralSteps([]);
      return;
    }

    setIntegralError("");

    const trigRules = {
      "sin(x)": {
        result: "-cos(x) + C",
        steps: [
          "Identify the standard trigonometric integration rule.",
          "Use: integral of sin(x) = -cos(x) + C.",
          "The derivative of -cos(x) is sin(x).",
        ],
      },
      "cos(x)": {
        result: "sin(x) + C",
        steps: [
          "Identify the standard trigonometric integration rule.",
          "Use: integral of cos(x) = sin(x) + C.",
          "The derivative of sin(x) is cos(x).",
        ],
      },
      "tan(x)": {
        result: "-ln|cos(x)| + C",
        steps: [
          "Rewrite tan(x) as sin(x) / cos(x).",
          "Choose u = cos(x).",
          "Then du = -sin(x) dx.",
          "Apply the logarithmic integration rule.",
          "Substitute back to obtain -ln|cos(x)| + C.",
        ],
      },
      "sec(x)^2": {
        result: "tan(x) + C",
        steps: [
          "Use the standard rule: integral of sec²(x) = tan(x) + C.",
          "The derivative of tan(x) is sec²(x).",
        ],
      },
      "csc(x)^2": {
        result: "-cot(x) + C",
        steps: [
          "Use the standard rule: integral of csc²(x) = -cot(x) + C.",
          "The derivative of -cot(x) is csc²(x).",
        ],
      },
      "sec(x)*tan(x)": {
        result: "sec(x) + C",
        steps: [
          "Use the standard rule: integral of sec(x)tan(x) = sec(x) + C.",
          "The derivative of sec(x) is sec(x)tan(x).",
        ],
      },
      "csc(x)*cot(x)": {
        result: "-csc(x) + C",
        steps: [
          "Use the standard rule: integral of csc(x)cot(x) = -csc(x) + C.",
          "The derivative of -csc(x) is csc(x)cot(x).",
        ],
      },
    };

    if (trigRules[expression]) {
      setIntegralResult(trigRules[expression].result);
      setIntegralSteps(trigRules[expression].steps);
      return;
    }

    if (expression === "1/x") {
      setIntegralResult("ln|x| + C");
      setIntegralSteps([
        "Identify the special logarithmic integration rule.",
        "Use: integral of 1/x dx = ln|x| + C.",
        "The absolute value is important because x can be negative.",
      ]);
      return;
    }

    const result = nerdamer.integrate(expression, "x").toString();
    setIntegralResult(result + " + C");

    const powerMatch = expression.match(
      /^([+-]?\d*\.?\d*)\*?x(?:\^(\d+))?$/
    );

    let steps = [];

    if (powerMatch) {
      const coefficient =
        powerMatch[1] === "" || powerMatch[1] === "+"
          ? 1
          : powerMatch[1] === "-"
          ? -1
          : Number(powerMatch[1]);

      const power = powerMatch[2] ? Number(powerMatch[2]) : 1;

      steps = [
        `Original integral: ∫ ${expression} dx`,
        "Apply the Power Rule.",
        `Coefficient: ${coefficient}, original exponent: ${power}`,
        `New exponent: ${power + 1}`,
        `Divide the coefficient by the new exponent.`,
        `Final result: ${result} + C`,
      ];
    } else {
      steps = [
        "The expression was processed by the symbolic integration engine.",
        "The result is displayed above.",
        "Detailed steps for this expression are not supported yet.",
      ];
    }

    setIntegralSteps(steps);
  } catch (error) {
    setIntegralResult("");
    setIntegralSteps([]);
    setIntegralError(
      "Unable to solve this integral. Check your expression."
    );
  }
}function solveDifferentiation() {
  try {
    const expression = derivativeInput.trim();

    if (!expression) {
      setDerivativeError("Please enter a function first.");
      setDerivativeResult("");
      setDerivativeSteps([]);
      return;
    }

    const result = nerdamer.diff(expression, "x").toString();

    setDerivativeResult(result);
    setDerivativeError("");

    let steps = [];

    const powerMatch = expression.match(
      /^([+-]?\d*\.?\d*)\*?x(?:\^(\d+))?$/
    );

    if (powerMatch) {
      const coefficient =
        powerMatch[1] === "" || powerMatch[1] === "+"
          ? 1
          : powerMatch[1] === "-"
          ? -1
          : Number(powerMatch[1]);

      const power = powerMatch[2] ? Number(powerMatch[2]) : 1;

      steps = [
        `Original function: f(x) = ${expression}`,
        "Apply the Power Rule: d/dx(ax^n) = a × n × x^(n-1).",
        `Coefficient: ${coefficient}, original exponent: ${power}.`,
        `New exponent: ${power - 1}.`,
        `Multiply the coefficient by the original exponent.`,
        `Final derivative: ${result}.`,
      ];
    } else {
      steps = [
        "The expression was processed by the symbolic differentiation engine.",
        "The derivative is displayed above.",
        "Detailed steps for this expression are not supported yet.",
      ];
    }

    setDerivativeSteps(steps);
  } catch (error) {
    setDerivativeResult("");
    setDerivativeSteps([]);
    setDerivativeError("Unable to differentiate this expression.");
  }
}function solveLimit() {
  try {
    const expression = limitInput.trim();
    const point = limitPoint.trim();

    if (!expression || !point) {
      setLimitError("Please enter a function and a limit point.");
      setLimitResult("");
      setLimitSteps([]);
      return;
    }

    const result = nerdamer(`limit(${expression}, x, ${point})`).toString();

    setLimitResult(result);
    setLimitError("");

    setLimitSteps([
      `Original limit: lim (x → ${point}) ${expression}`,
      "Identify the value that x approaches.",
      "Apply direct substitution or the appropriate limit rule.",
      `Final result: ${result}`,
    ]);
  } catch (error) {
    setLimitResult("");
    setLimitSteps([]);
    setLimitError("Unable to calculate this limit. Check your expression.");
  }
}
function solveAlgebra() {
  try {
    const expression = algebraInput.trim();

    if (!expression) {
      setAlgebraError("Please enter an equation first.");
      setAlgebraResult("");
      setAlgebraSteps([]);
      return;
    }

    const result = nerdamer.solve(expression, "x").toString();

    setAlgebraResult(result);
    setAlgebraError("");

    setAlgebraSteps([
      `Original equation: ${expression} = 0`,
      "Move all terms to one side of the equation.",
      "Apply algebraic simplification.",
      "Solve the equation for x.",
      `Final solution: x = ${result}`,
    ]);
  } catch (error) {
    setAlgebraResult("");
    setAlgebraSteps([]);
    setAlgebraError("Unable to solve this equation. Check your expression.");
  }
}
function solveMatrices() {
  try {
    const parseMatrix = (input) =>
      input.split(";").map((row) =>
        row.split(",").map((value) => {
          const number = Number(value.trim());

          if (value.trim() === "" || !Number.isFinite(number)) {
            throw new Error("Invalid matrix values.");
          }

          return number;
        })
      );

    const A = parseMatrix(matrixA);
    const B = parseMatrix(matrixB);

    const isValid = (matrix) =>
      matrix.length > 0 &&
      matrix[0].length > 0 &&
      matrix.every((row) => row.length === matrix[0].length);

    if (!isValid(A) || !isValid(B)) {
      throw new Error("All matrix rows must have the same number of columns.");
    }

    let result;
    let steps = [];

    if (matrixOperation === "add" || matrixOperation === "subtract") {
      if (
        A.length !== B.length ||
        A[0].length !== B[0].length
      ) {
        throw new Error("Matrices must have the same dimensions.");
      }

      result = A.map((row, i) =>
        row.map((value, j) =>
          matrixOperation === "add"
            ? value + B[i][j]
            : value - B[i][j]
        )
      );

      steps = [
        "Check that both matrices have the same dimensions.",
        matrixOperation === "add"
          ? "Add corresponding elements."
          : "Subtract corresponding elements.",
        "Arrange the calculated values into the result matrix.",
      ];
    } else if (matrixOperation === "multiply") {
      if (A[0].length !== B.length) {
        throw new Error(
          "Columns of Matrix A must equal rows of Matrix B."
        );
      }

      result = A.map((row, i) =>
        B[0].map((_, j) =>
          row.reduce(
            (sum, value, k) => sum + value * B[k][j],
            0
          )
        )
      );

      steps = [
        "Check that the columns of Matrix A equal the rows of Matrix B.",
        "Multiply corresponding row and column elements.",
        "Add the products to calculate each result element.",
      ];
    } else if (matrixOperation === "transpose") {
      result = A[0].map((_, j) => A.map((row) => row[j]));

      steps = [
        "Take Matrix A.",
        "Convert each row into a column.",
        "The rows and columns have been interchanged.",
      ];
    } else if (matrixOperation === "determinant") {
      if (A.length !== A[0].length) {
        throw new Error("Determinant requires a square matrix.");
      }

      const calculateDeterminant = (matrix) => {
        if (matrix.length === 1) return matrix[0][0];
        if (matrix.length === 2) {
          return (
            matrix[0][0] * matrix[1][1] -
            matrix[0][1] * matrix[1][0]
          );
        }

        return matrix[0].reduce((sum, value, j) => {
          const minor = matrix.slice(1).map((row) =>
            row.filter((_, column) => column !== j)
          );

          return (
            sum +
            (j % 2 === 0 ? 1 : -1) *
              value *
              calculateDeterminant(minor)
          );
        }, 0);
      };

      result = calculateDeterminant(A);
      steps = [
        "Check that Matrix A is square.",
        "Apply the determinant calculation.",
        `The determinant is ${result}.`,
      ];
    } else if (matrixOperation === "transposeB") {
      result = B[0].map((_, j) => B.map((row) => row[j]));

      steps = [
        "Take Matrix B.",
        "Convert each row into a column.",
        "The rows and columns have been interchanged.",
      ];
    }

    setMatrixResult(
      Array.isArray(result)
        ? result.map((row) => row.join("   ")).join("\n")
        : String(result)
    );

    setMatrixSteps(steps);
    setMatrixError("");
  } catch (error) {
    setMatrixResult("");
    setMatrixSteps([]);
    setMatrixError(error.message || "Unable to calculate the matrix operation.");
  }
}

function solveDifferentialEquation() {
  try {
    const expression = differentialInput.trim().replace(/\s+/g, "");

    if (!expression) {
      throw new Error("Please enter a differential equation.");
    }

    let solution;
    let steps = [];
// Special case: dy/dx = y
if (expression === "y") {
  solution = "C * e^x";

  steps = [
    "Given: dy/dx = y.",
    "Separate variables: dy/y = dx.",
    "Integrate both sides.",
    "ln|y| = x + C.",
    "General solution: y = C * e^x.",
  ];
} else
    // Separable equation: dy/dx = xy
    if (expression === "xy" || expression === "x*y" ||
        expression === "yx" || expression === "y*x") {
      solution = "C * e^(x^2 / 2)";

      steps = [
        `Given: dy/dx = ${expression}`,
        "Separate the variables: dy/y = x dx.",
        "Integrate both sides: ∫(1/y)dy = ∫x dx.",
        "ln|y| = x²/2 + C.",
        "General solution: y = C * e^(x²/2).",
      ];
    } else {
      // Existing support: dy/dx = f(x)
      solution = nerdamer.integrate(expression, "x").toString();

      steps = [
        `Given: dy/dx = ${expression}`,
        "Integrate both sides with respect to x.",
        `y = ∫ (${expression}) dx`,
        `General solution: y = ${solution} + C`,
      ];
    }

    setDifferentialResult(`y = ${solution}`);
    setDifferentialError("");
    setDifferentialSteps(steps);

  } catch (error) {
    setDifferentialResult("");
    setDifferentialSteps([]);
    setDifferentialError(
      error.message || "Unable to solve this equation. Check your expression."
    );
  }
}

function solveNumerical() {
  try {
    const expression = numericalFunction.trim();
    const a = Number(numericalA);
const b = Number(numericalB);
const n = Number(numericalN);

const isRootMethod =
  numericalMethod === "newton" || numericalMethod === "secant";

if (!expression) {
  throw new Error("Enter a valid function.");
}

if (!isRootMethod) {
  if (
    !Number.isFinite(a) ||
    !Number.isFinite(b) ||
    a >= b
  ) {
    throw new Error("Enter a valid interval (a < b).");
  }

  if (!Number.isInteger(n) || n <= 0) {
    throw new Error("Number of subintervals must be a positive integer.");
  }
}

if (numericalMethod === "newton" && !Number.isFinite(Number(numericalInitial))) {
  throw new Error("Enter a valid initial guess.");
}

if (
  numericalMethod === "secant" &&
  (
    !Number.isFinite(Number(numericalInitial)) ||
    !Number.isFinite(Number(numericalInitial2)) ||
    Number(numericalInitial) === Number(numericalInitial2)
  )
) {
  throw new Error("Enter two different valid initial guesses.");
}

   const f = (x) => {
  const value = nerdamer(expression).evaluate({ x });
  return Number(value.text("decimals", 12));
};

    const values = [];
    let result;
    let steps = [];

   if (numericalMethod === "bisection") {
  let left = a;
  let right = b;
  let fLeft = f(left);
  let fRight = f(right);

  if (!Number.isFinite(fLeft) || !Number.isFinite(fRight)) {
    throw new Error("Invalid function values at interval endpoints.");
  }

  if (Math.abs(fLeft) < 1e-10) {
    result = left;
    values.push(`The root is at the left endpoint: ${left}`);
  } else if (Math.abs(fRight) < 1e-10) {
    result = right;
    values.push(`The root is at the right endpoint: ${right}`);
  } else {
    if (fLeft * fRight > 0) {
      throw new Error("Bisection requires opposite signs at a and b.");
    }

    let converged = false;

    for (let i = 1; i <= 50; i++) {
      const mid = (left + right) / 2;
      const fMid = f(mid);

      if (!Number.isFinite(fMid)) {
        throw new Error("Invalid function value during iteration.");
      }

      values.push(
        `Iteration ${i}: midpoint = ${mid.toFixed(8)}, f(mid) = ${fMid.toFixed(8)}`
      );

      if (Math.abs(fMid) < 1e-10 || Math.abs(right - left) < 1e-10) {
        left = mid;
        right = mid;
        converged = true;
        break;
      }

      if (fLeft * fMid < 0) {
        right = mid;
        fRight = fMid;
      } else {
        left = mid;
        fLeft = fMid;
      }
    }

    if (!converged) {
      throw new Error("Bisection did not converge after 50 iterations.");
    }

    result = (left + right) / 2;
  }

  steps = [
    "Evaluate the function at both interval endpoints.",
    "Check that the endpoint values have opposite signs.",
    "Calculate the midpoint and keep the half containing the root.",
    ...values,
    `Approximate root = ${result}`,
  ];
} else if (numericalMethod === "newton") {
      let x = Number(numericalInitial);

      if (!Number.isFinite(x)) {
        throw new Error("Enter a valid initial guess.");
      }
let converged = false;
      for (let i = 1; i <= 50; i++) {
        const fx = f(x);

        const derivative = nerdamer
          .diff(expression, "x")
          .evaluate({ x });

        const dfx = Number(derivative.text("decimals", 12));

        if (!Number.isFinite(fx) || !Number.isFinite(dfx)) {
          throw new Error("Invalid function or derivative value.");
        }
if (Math.abs(fx) < 1e-10) {
  converged = true;
  break;
}

        if (Math.abs(dfx) < 1e-12) {
          throw new Error("Derivative is zero. Try another initial guess.");
        }

        const nextX = x - fx / dfx;

        values.push(
          `Iteration ${i}: x = ${nextX.toFixed(8)}, f(x) = ${f(nextX).toFixed(8)}`
        );

        if (Math.abs(nextX - x) < 1e-10) {
  x = nextX;
  converged = true;
  break;
}

        x = nextX;
      }
if (!converged) {
  throw new Error("Newton-Raphson did not converge after 50 iterations.");
}
      result = x;

      steps = [
        "Start with the initial guess x₀.",
        "Calculate the derivative f'(x).",
        "Apply the Newton-Raphson formula.",
        ...values,
        `Approximate root = ${result}`,
           ];
    } else if (numericalMethod === "secant") {
      let x0 = Number(numericalInitial);
      let x1 = Number(numericalInitial2);

      if (!Number.isFinite(x0) || !Number.isFinite(x1) || x0 === x1) {
        throw new Error("Enter two different valid initial guesses.");
      }

      let converged = false;

      for (let i = 1; i <= 50; i++) {
        const f0 = f(x0);
        const f1 = f(x1);

        if (!Number.isFinite(f0) || !Number.isFinite(f1)) {
          throw new Error("Invalid function values.");
        }

        if (Math.abs(f1) < 1e-10) {
          converged = true;
          break;
        }

        const denominator = f1 - f0;

        if (Math.abs(denominator) < 1e-12) {
          throw new Error("Division by zero. Try different initial guesses.");
        }

        const x2 = x1 - (f1 * (x1 - x0)) / denominator;

        values.push(
          `Iteration ${i}: x = ${x2.toFixed(8)}, f(x) = ${f(x2).toFixed(8)}`
        );

        if (Math.abs(x2 - x1) < 1e-10 || Math.abs(f(x2)) < 1e-10) {
          x1 = x2;
          converged = true;
          break;
        }

        x0 = x1;
        x1 = x2;
      }

      if (!converged) {
        throw new Error("Method did not converge after 50 iterations.");
      }

      result = x1;

      steps = [
        "Start with two initial guesses x₀ and x₁.",
        "Evaluate the function at both guesses.",
        "Apply the Secant Method formula.",
        ...values,
        `Approximate root = ${result}`,
      ];
   } else if (numericalMethod === "trapezoidal") {
  const h = (b - a) / n;

  const functionValues = Array.from(
    { length: n + 1 },
    (_, i) => f(a + i * h)
  );

  const weightedSum = functionValues.reduce(
    (sum, value, i) => {
      if (i === 0 || i === n) {
        return sum + value;
      }
      return sum + 2 * value;
    },
    0
  );

  result = (h / 2) * weightedSum;

  steps = [
  `Step size h = ${h}`,
  `f(a) = ${functionValues[0]}, f(b) = ${functionValues[n]}`,
  "Add all interior function values with weight 2.",
  "Multiply the total by h / 2.",
  `Approximate integral = ${result}`,
];
} else if (numericalMethod === "simpson13") {
  if (n % 2 !== 0) {
    throw new Error("Simpson's 1/3 Rule requires an even n.");
  }

  const h = (b - a) / n;
  let sum = f(a) + f(b);

  for (let i = 1; i < n; i++) {
    sum += (i % 2 === 0 ? 2 : 4) * f(a + i * h);
  }

  result = (h / 3) * sum;

  steps = [
    `Step size h = ${h}`,
    `f(a) = ${f(a)}, f(b) = ${f(b)}`,
    "Apply weights 4 to odd points and 2 to even interior points.",
    "Multiply the total by h / 3.",
    `Approximate integral = ${result}`,
  ];
    } else if (numericalMethod === "simpson38") {
      if (n % 3 !== 0) {
        throw new Error("Simpson's 3/8 Rule requires n to be a multiple of 3.");
      }

      const h = (b - a) / n;
      let sum = f(a) + f(b);

      for (let i = 1; i < n; i++) {
        sum += (i % 3 === 0 ? 2 : 3) * f(a + i * h);
      }

      result = (3 * h / 8) * sum;
      steps = [
        `Step size h = ${h}`,
        "Apply weight 3 to interior points except multiples of 3.",
        "Apply weight 2 to interior points whose indices are multiples of 3.",
        "Multiply the weighted sum by 3h/8.",
        `Approximate integral = ${result}`,
      ];
    } else if (
      numericalMethod === "left" ||
      numericalMethod === "right" ||
      numericalMethod === "midpoint"
    ) {
      const h = (b - a) / n;
      let sum = 0;

      for (let i = 0; i < n; i++) {
        let x;

        if (numericalMethod === "left") x = a + i * h;
        else if (numericalMethod === "right") x = a + (i + 1) * h;
        else x = a + (i + 0.5) * h;

        sum += f(x);
      }

      result = h * sum;
      steps = [
        `Step size h = ${h}`,
        `Use ${numericalMethod} endpoints for each subinterval.`,
        "Add the function values and multiply by h.",
        `Approximate integral = ${result}`,
      ];
    } else {
      throw new Error("Select a supported numerical method.");
    }

    if (!Number.isFinite(result)) {
      throw new Error("The calculation produced a non-finite result.");
    }

    setNumericalResult(String(result));
    setNumericalSteps(steps);
    setNumericalError("");
  } catch (error) {
    setNumericalResult("");
    setNumericalSteps([]);
    setNumericalError(error.message || "Unable to perform this calculation.");
  }
}
  const currentSection = sections.find(
    (section) => section.id === activeSection
  );

  const currentTopicIndex = currentSection
    ? currentSection.topics.indexOf(activeTopic)
    : -1;

    const isIntegrationSolver =
  activeSection === "calculator" &&
  activeTopic === "Integration Solver";

  const isDifferentiationSolver =
  activeSection === "calculator" &&
  activeTopic === "Differentiation Solver";

  const isLimitSolver =
  activeSection === "calculator" &&
  activeTopic === "Limits Solver";

  const isAlgebraSolver =
  activeSection === "calculator" &&
  activeTopic === "Algebra Solver";

  const isMatricesSolver =
  activeSection === "calculator" &&
  activeTopic === "Matrices Solver";

  const isDifferentialSolver =
  activeSection === "calculator" &&
  activeTopic === "Differential Equations";

  const isNumericalSolver =
  activeSection === "calculator" &&
  activeTopic === "Numerical Methods";


  function goToPreviousTopic() {
    if (currentTopicIndex > 0) {
      setActiveTopic(currentSection.topics[currentTopicIndex - 1]);
    }
  }

  function goToNextTopic() {
    if (
      currentSection &&
      currentTopicIndex < currentSection.topics.length - 1
    ) {
      setActiveTopic(currentSection.topics[currentTopicIndex + 1]);
    }
  }

  const isCalculusIntroduction =
    activeSection === "calculus" &&
    activeTopic === "Introduction to Calculus";

  const isFunctionsLesson =
    activeSection === "calculus" &&
    activeTopic === "Functions & Properties";

    const isLimitsLesson =
  activeSection === "calculus" &&
  activeTopic === "Limits & Continuity";


const isApplicationsLesson =
  activeSection === "calculus" &&
  activeTopic === "Applications of Calculus";


const isBasicDifferentiationLesson =
  activeSection === "differentiation" &&
  activeTopic === "Basic Differentiation Rules";

  const isProductQuotientLesson =
  activeSection === "differentiation" &&
  activeTopic === "Product & Quotient Rules";

  const isChainRuleLesson =
  activeSection === "differentiation" &&
  activeTopic === "Chain Rule";

  const isImplicitDifferentiationLesson =
  activeSection === "differentiation" &&
  activeTopic === "Implicit Differentiation";

  const isHigherOrderDerivativesLesson =
  activeSection === "differentiation" &&
  activeTopic === "Higher-Order Derivatives";

  const isApplicationsDifferentiationLesson =
  activeSection === "differentiation" &&
  activeTopic === "Applications of Differentiation";

  const isBasicIntegrationLesson =
  activeSection === "integration" &&
  activeTopic === "Basic Integration Rules";


const isUSubstitutionLesson =
  activeSection === "integration" &&
  activeTopic === "U-Substitution";


const isIntegrationByPartsLesson =
  activeSection === "integration" &&
  activeTopic === "Integration by Parts";


const isPartialFractionsLesson =
  activeSection === "integration" &&
  activeTopic === "Partial Fractions";


const isTrigonometricIntegralsLesson =
  activeSection === "integration" &&
  activeTopic === "Trigonometric Integrals";


const isDefiniteIntegralsLesson =
  activeSection === "integration" &&
  activeTopic === "Definite Integrals";


const isImproperIntegralsLesson =
  activeSection === "integration" &&
  activeTopic === "Improper Integrals";









  const currentFormulas = formulaLibrary[activeTopic] || [];

const filteredFormulas = currentFormulas.filter((item) => {
  const searchText = formulaSearch.toLowerCase();

  return (
    item.name.toLowerCase().includes(searchText) ||
    item.formula.toLowerCase().includes(searchText) ||
    item.description.toLowerCase().includes(searchText)
  );
});

  return (
    <div className="app">
      <header className="topbar">
        <button className="brand" onClick={() => setPage("landing")}>
          <span className="brand-symbol">M</span>
          <span>
            Math <span className="brand-accent">Hup</span>
          </span>
        </button>

        <div className="topbar-right">
          {page !== "welcome" && (
            <>
              <span className="user-label">Welcome, {name}</span>
              <button className="profile-button" onClick={changeUser}>
                {name.charAt(0).toUpperCase()}
              </button>
            </>
          )}
        </div>
      </header>

      {page === "welcome" && (
        <main className="welcome-screen">
          <div className="welcome-glow glow-one"></div>
          <div className="welcome-glow glow-two"></div>

          <div className="welcome-content">
            <div className="eyebrow">
              <span className="status-dot"></span>
              YOUR MATHEMATICS JOURNEY STARTS HERE
            </div>

            <div className="welcome-logo">M²</div>

            <h1>
              Welcome to <span>Math Hup</span>
            </h1>

            <p className="welcome-description">
              A smarter way to understand mathematics.
              Learn, explore and solve with confidence.
            </p>

            <form className="name-form" onSubmit={handleContinue}>
              <label htmlFor="username">What should we call you?</label>
              <input
                id="username"
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={35}
                autoComplete="given-name"
                required
              />
              <button className="primary-button" type="submit">
                Continue <span>→</span>
              </button>
            </form>

            <p className="privacy-note">
              No account needed. Just your name to get started.
            </p>
          </div>
        </main>
      )}

      {page === "landing" && (
        <main className="landing-screen">
          <div className="landing-glow"></div>

          <section className="hero">
            <div className="eyebrow">
              <span className="status-dot"></span>
              THE FUTURE OF LEARNING MATHEMATICS
            </div>

            <h1>
              Mathematics,
              <br />
              <span>Made Understandable.</span>
            </h1>

            <p className="hero-description">
              Discover a complete learning experience.
              From fundamental concepts to advanced mathematical
              problem solving — everything in one place.
            </p>

            <div className="hero-actions">
              <button
                className="primary-button hero-button"
                onClick={openDashboard}
              >
                Start Learning <span>→</span>
              </button>
              <span className="hero-caption">
                Learn at your own pace.
              </span>
            </div>

            <div className="hero-stats">
              <div>
                <strong>05</strong>
                <span>Learning Sections</span>
              </div>
              <div>
                <strong>∞</strong>
                <span>Learning Possibilities</span>
              </div>
              <div>
                <strong>01</strong>
                <span>Learning Destination</span>
              </div>
            </div>
          </section>

          <section className="preview-section">
            <div className="section-heading">
              <span>EXPLORE MATH HUP</span>
              <h2>Everything you need to learn.</h2>
            </div>

            <div className="preview-grid">
              {sections.map((section) => (
                <div className="preview-card" key={section.id}>
                  <div className="card-icon">{section.icon}</div>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                </div>
              ))}
            </div>
          </section>
        </main>
      )}

      {page === "dashboard" && (
        <main className="dashboard">
          <aside className="sidebar">
            <div className="sidebar-label">MAIN MENU</div>

            <button
              className={!activeSection ? "nav-item active" : "nav-item"}
              onClick={goHome}
            >
              <span>⌂</span> Home
            </button>

            <div className="sidebar-label sidebar-spaced">
              LEARNING
            </div>

            {sections.map((section) => (
              <button
                key={section.id}
                className={
                  activeSection === section.id
                    ? "nav-item active"
                    : "nav-item"
                }
                onClick={() => openSection(section.id)}
              >
                <span>{section.icon}</span>
                {section.title}
              </button>
            ))}

            <div className="sidebar-bottom">
              <span className="sidebar-mini-logo">M²</span>
              <div>
                <strong>Math Hup</strong>
                <small>Learn without limits.</small>
              </div>
            </div>
          </aside>

          <section className="dashboard-content">
            {currentSection ? (
              activeTopic ? (
                <div className="lesson-page">
                  <button className="back-button" onClick={backToTopics}>
                    ← Back to {currentSection.title}
                  </button>

                  <div className="lesson-header">
                    <div className="eyebrow">
                      {currentSection.title} / LESSON
                    </div>
                    <h1>{activeTopic}</h1>
                    <p>
                      Build your understanding step by step and explore
                      the key ideas behind this topic.
                    </p>
                  </div>

                 {isNumericalSolver ? (
  <div className="lesson-card">
    <h2>Numerical Methods Solver</h2>
    <p>Choose a numerical method and enter your function and interval.</p>

    <label>Function f(x)</label>
    <input
      className="formula-search"
      value={numericalFunction}
      onChange={(e) => setNumericalFunction(e.target.value)}
      placeholder="Example: x^2"
    />

    <label>Numerical Method</label>
    <select
      className="formula-search"
      value={numericalMethod}
      onChange={(e) => setNumericalMethod(e.target.value)}
    >
      <option value="bisection">Bisection Method</option>
      <option value="newton">Newton-Raphson Method</option>
      <option value="secant">Secant Method</option>
      <option value="trapezoidal">Trapezoidal Rule</option>
      <option value="simpson13">Simpson's 1/3 Rule</option>
      <option value="simpson38">Simpson's 3/8 Rule</option>
      <option value="left">Left Riemann Sum</option>
      <option value="right">Right Riemann Sum</option>
      <option value="midpoint">Midpoint Riemann Sum</option>
    </select>

    {numericalMethod !== "newton" && numericalMethod !== "secant" && (
  <>
    <label>Lower Bound (a)</label>
    <input
      className="formula-search"
      type="number"
      value={numericalA}
      onChange={(e) => setNumericalA(e.target.value)}
    />
  </>
)}

    {numericalMethod !== "newton" && numericalMethod !== "secant" && (
  <>
    <label>Upper Bound (b)</label>
    <input
      className="formula-search"
      type="number"
      value={numericalB}
      onChange={(e) => setNumericalB(e.target.value)}
    />
  </>
)}

    {numericalMethod !== "newton" &&
numericalMethod !== "secant" &&
numericalMethod !== "bisection" && (
  <>
    <label>Number of Subintervals (n)</label>
    <input
      className="formula-search"
      type="number"
      min="1"
      value={numericalN}
      onChange={(e) => setNumericalN(e.target.value)}
    />
  </>
)}
{numericalMethod === "newton" && (
  <>
    <label>Initial Guess (x₀)</label>
    <input
      className="formula-search"
      type="number"
      value={numericalInitial}
      onChange={(e) => setNumericalInitial(e.target.value)}
    />
  </>
)}

{numericalMethod === "secant" && (
  <>
    <label>First Initial Guess (x₀)</label>
    <input
      className="formula-search"
      type="number"
      value={numericalInitial}
      onChange={(e) => setNumericalInitial(e.target.value)}
    />

    <label>Second Initial Guess (x₁)</label>
    <input
      className="formula-search"
      type="number"
      value={numericalInitial2}
      onChange={(e) => setNumericalInitial2(e.target.value)}
    />
  </>
)}
    <button className="topic-row" onClick={solveNumerical}>
      Calculate →
    </button>

    {numericalError && (
      <p style={{ color: "#ff7070" }}>{numericalError}</p>
    )}

    {numericalResult && (
      <>
        <div className="formula-box">
          <h3>Numerical Result</h3>
          <strong>{Number(numericalResult).toFixed(8)}</strong>
        </div>

        <div className="formula-box">
          <h3>Calculation Steps</h3>
          {numericalSteps.map((step, index) => (
            <p key={index}>{index + 1}. {step}</p>
          ))}
        </div>
      </>
    )}
  </div>
) : isDifferentialSolver ? (
  <div className="lesson-card">
    <h2>Differential Equations Solver</h2>
    <p>
      Enter the right-hand side of a first-order differential equation.
      The solver currently supports equations in the form dy/dx = f(x).
    </p>

    <label>Enter f(x)</label>
    <input
      className="formula-search"
      value={differentialInput}
      onChange={(e) => setDifferentialInput(e.target.value)}
      placeholder="Example: x^2 + 3*x"
    />

    <button
      className="topic-row"
      onClick={solveDifferentialEquation}
    >
      Solve Differential Equation →
    </button>

    {differentialError && (
      <p style={{ color: "#ff7070" }}>{differentialError}</p>
    )}

    {differentialResult && (
      <>
        <div className="formula-box">
          <h3>General Solution</h3>
          <strong>{differentialResult}</strong>
        </div>

        <div className="formula-box">
          <h3>Solution Steps</h3>
          {differentialSteps.map((step, index) => (
            <p key={index}>
              {index + 1}. {step}
            </p>
          ))}
        </div>
      </>
    )}
  </div>
) : isMatricesSolver ? (
  <div className="lesson-card">
    <h2>Matrices Solver</h2>
    <p>Enter your matrices and choose an operation.</p>

    <label>Matrix A</label>
    <input
      className="formula-search"
      value={matrixA}
      onChange={(e) => setMatrixA(e.target.value)}
      placeholder="Example: 1,2;3,4"
    />

    <label>Matrix B</label>
    <input
      className="formula-search"
      value={matrixB}
      onChange={(e) => setMatrixB(e.target.value)}
      placeholder="Example: 5,6;7,8"
    />

    <label>Operation</label>
    <select
      className="formula-search"
      value={matrixOperation}
      onChange={(e) => setMatrixOperation(e.target.value)}
    >
      <option value="add">Addition (A + B)</option>
      <option value="subtract">Subtraction (A - B)</option>
      <option value="multiply">Multiplication (A × B)</option>
      <option value="transpose">Transpose (Aᵀ)</option>
      <option value="determinant">Determinant of A</option>
      <option value="transposeB">Transpose (Bᵀ)</option>
    </select>

    <p>Separate columns with commas and rows with semicolons.</p>

    <button className="topic-row" onClick={solveMatrices}>
      Calculate →
    </button>

    {matrixError && (
      <p style={{ color: "#ff7070" }}>{matrixError}</p>
    )}

    {matrixResult && (
      <>
        <div className="formula-box">
          <h3>Result</h3>
          <pre style={{ color: "#ffffff", whiteSpace: "pre-wrap" }}>
            {matrixResult}
          </pre>
        </div>

        <div className="formula-box">
          <h3>Calculation Steps</h3>
          {matrixSteps.map((step, index) => (
            <p key={index}>{index + 1}. {step}</p>
          ))}
        </div>
      </>
    )}
  </div>
) : isAlgebraSolver ? (
  <div className="lesson-card">
    <h2>Algebra Solver</h2>
    <p>Enter an equation to solve for x. The equation is assumed equal to zero.</p>

    <input
      className="formula-search"
      value={algebraInput}
      onChange={(e) => setAlgebraInput(e.target.value)}
      placeholder="Example: x^2 - 5*x + 6"
    />

    <button className="topic-row" onClick={solveAlgebra}>
      Solve Equation →
    </button>

    {algebraError && (
      <p style={{ color: "#ff7070" }}>{algebraError}</p>
    )}

    {algebraResult && (
      <>
        <div className="formula-box">
          <h3>Result</h3>
          <strong>{algebraResult}</strong>
        </div>

        <div className="formula-box">
          <h3>Step-by-Step Solution</h3>
          {algebraSteps.map((step, index) => (
            <p key={index}>{index + 1}. {step}</p>
          ))}
        </div>
      </>
    )}
  </div>
) : isLimitSolver ? (
  <div className="lesson-card">
    <h2>Limits Solver</h2>
    <p>Calculate the limit of a function as x approaches a specific value.</p>

    <label>Function</label>
    <input
      className="formula-search"
      value={limitInput}
      onChange={(e) => setLimitInput(e.target.value)}
      placeholder="Example: (x^2 - 4)/(x - 2)"
    />

    <label>As x approaches</label>
    <input
      className="formula-search"
      value={limitPoint}
      onChange={(e) => setLimitPoint(e.target.value)}
      placeholder="Example: 2"
    />

    <button className="topic-row" onClick={solveLimit}>
      Calculate Limit →
    </button>

    {limitError && (
      <p style={{ color: "#ff7070" }}>{limitError}</p>
    )}

    {limitResult && (
      <>
        <div className="formula-box">
          <h3>Result</h3>
          <strong>{limitResult}</strong>
        </div>

        <div className="formula-box">
          <h3>Step-by-Step Solution</h3>
          {limitSteps.map((step, index) => (
            <p key={index}>{index + 1}. {step}</p>
          ))}
        </div>
      </>
    )}
  </div>
) : isDifferentiationSolver ? (
  <div className="lesson-card">
    <h2>Differentiation Solver</h2>
    <p>Enter a function to calculate its derivative.</p>

    <input
      className="formula-search"
      value={derivativeInput}
      onChange={(e) => setDerivativeInput(e.target.value)}
      placeholder="Example: x^2 + 3*x + 5"
    />

    <button className="topic-row" onClick={solveDifferentiation}>
      Calculate Derivative →
    </button>

    {derivativeError && (
      <p style={{ color: "#ff7070" }}>{derivativeError}</p>
    )}

    {derivativeResult && (
      <>
        <div className="formula-box">
          <h3>Result</h3>
          <strong>{derivativeResult}</strong>
        </div>

        {derivativeSteps.length > 0 && (
          <div className="formula-box">
            <h3>Step-by-Step Solution</h3>

            {derivativeSteps.map((step, index) => (
              <p key={index}>
                {index + 1}. {step}
              </p>
            ))}
          </div>
        )}
      </>
    )}
  </div>
) : isIntegrationSolver ? (
  <>
    <div className="lesson-card">
      <h2>Integration Solver</h2>
      <p>Enter a function to calculate its indefinite integral.</p>

      <input
        className="formula-search"
        value={integralInput}
        onChange={(e) => setIntegralInput(e.target.value)}
        placeholder="Example: x^2 + 3*x + 5"
      />

      <button className="topic-row" onClick={solveIntegration}>
        Calculate Integral →
      </button>

      {integralError && (
        <p style={{ color: "#ff7070" }}>{integralError}</p>
      )}

      {integralResult && (
  <>
    <div className="formula-box">
      <h3>Result</h3>
      <strong>{integralResult}</strong>
    </div>

    {integralSteps.length > 0 && (
      <div className="formula-box">
        <h3>Step-by-Step Solution</h3>

        {integralSteps.map((step, index) => (
          <p key={index}>
            {index + 1}. {step}
          </p>
        ))}
      </div>
    )}
  </>
)}
    </div>
  </>
) : activeSection === "formulas" ? (
                    <>
                      <div className="lesson-card">
                        <h2>Formula Collection</h2>
                        <p>
                          Essential mathematical formulas with descriptions
                          and explanations of when to use them.
                        </p>
                        <p className="lesson-note">
                          Browse the formulas below and use them as a
                          mathematical reference.
                        </p>
                     
</div>

<div className="formula-search-container">
  <input
    type="text"
    className="formula-search"
   placeholder="Search formulas by name, equation, or description..."
    value={formulaSearch}
    onChange={(e) => setFormulaSearch(e.target.value)}
  />
</div>

<div className="lesson-card">
  <h2>
    {filteredFormulas.length} Important Formulas
  </h2>

  <div className="formula-list">
    {filteredFormulas.map((item, index) => (
      <div className="formula-item" key={item.name}>
        <h3>
          {String(index + 1).padStart(2, "0")}. {item.name}
        </h3>

        <div className="formula-box">
          <strong>{item.formula}</strong>
        </div>

        <p>{item.description}</p>
      </div>
    ))}
  </div>
</div>
</>

) : isBasicDifferentiationLesson ? (
  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {basicDifferentiationLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {basicDifferentiationLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {basicDifferentiationLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {basicDifferentiationLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {basicDifferentiationLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{basicDifferentiationLesson.summary}</p>
    </div>
  </>



) : isProductQuotientLesson ? (
  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {productQuotientLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {productQuotientLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {productQuotientLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {productQuotientLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {productQuotientLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{productQuotientLesson.summary}</p>
    </div>
  </>

) : isImproperIntegralsLesson ? (
  <>
    <div className="lesson-header">
      <span className="eyebrow">INTEGRATION</span>
      <h1>Improper Integrals</h1>
      <p>{improperIntegralsLesson.intro}</p>
    </div>

    <div className="lesson-card">
      <h2>Theory</h2>
      {improperIntegralsLesson.theory.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Important Formulas</h2>
      {improperIntegralsLesson.formulas.map((item, index) => (
        <div className="formula-box" key={index}>
          <strong>{item.name}</strong>
          <p>{item.formula}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Solved Examples</h2>
      {improperIntegralsLesson.examples.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p><strong>{item.question}</strong></p>
          {item.steps.map((step, stepIndex) => (
            <p key={stepIndex}>{stepIndex + 1}. {step}</p>
          ))}
          <p><strong>Final Answer: {item.answer}</strong></p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Common Mistakes</h2>
      <ul>
        {improperIntegralsLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>Quick Summary</h2>
      <p>{improperIntegralsLesson.summary}</p>
    </div>
  </>
) : isDefiniteIntegralsLesson ? (

  <>
    <div className="lesson-header">
      <span className="eyebrow">INTEGRATION</span>
      <h1>Definite Integrals</h1>
      <p>{definiteIntegralsLesson.intro}</p>
    </div>

    <div className="lesson-card">
      <h2>Theory</h2>
      {definiteIntegralsLesson.theory.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Important Formulas</h2>
      {definiteIntegralsLesson.formulas.map((item, index) => (
        <div className="formula-box" key={index}>
          <strong>{item.name}</strong>
          <p>{item.formula}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Solved Examples</h2>
      {definiteIntegralsLesson.examples.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p><strong>{item.question}</strong></p>
          {item.steps.map((step, stepIndex) => (
            <p key={stepIndex}>{stepIndex + 1}. {step}</p>
          ))}
          <p><strong>Final Answer: {item.answer}</strong></p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Common Mistakes</h2>
      <ul>
        {definiteIntegralsLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>Quick Summary</h2>
      <p>{definiteIntegralsLesson.summary}</p>
    </div>
  </>
) : isTrigonometricIntegralsLesson ? (

  <>
    <div className="lesson-header">
      <span className="eyebrow">INTEGRATION</span>
      <h1>Trigonometric Integrals</h1>
      <p>{trigonometricIntegralsLesson.intro}</p>
    </div>

    <div className="lesson-card">
      <h2>Theory</h2>
      {trigonometricIntegralsLesson.theory.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Important Formulas</h2>
      {trigonometricIntegralsLesson.formulas.map((item, index) => (
        <div className="formula-box" key={index}>
          <strong>{item.name}</strong>
          <p>{item.formula}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Solved Examples</h2>
      {trigonometricIntegralsLesson.examples.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p><strong>{item.question}</strong></p>
          {item.steps.map((step, stepIndex) => (
            <p key={stepIndex}>{stepIndex + 1}. {step}</p>
          ))}
          <p><strong>Final Answer: {item.answer}</strong></p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Common Mistakes</h2>
      <ul>
        {trigonometricIntegralsLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>Quick Summary</h2>
      <p>{trigonometricIntegralsLesson.summary}</p>
    </div>
  </>
) : isPartialFractionsLesson ? (

  <>
    <div className="lesson-header">
      <span className="eyebrow">INTEGRATION</span>
      <h1>Partial Fractions</h1>
      <p>{partialFractionsLesson.intro}</p>
    </div>

    <div className="lesson-card">
      <h2>Theory</h2>
      {partialFractionsLesson.theory.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Important Formulas</h2>
      {partialFractionsLesson.formulas.map((item, index) => (
        <div className="formula-box" key={index}>
          <strong>{item.name}</strong>
          <p>{item.formula}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Solved Examples</h2>
      {partialFractionsLesson.examples.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p><strong>{item.question}</strong></p>
          {item.steps.map((step, stepIndex) => (
            <p key={stepIndex}>{stepIndex + 1}. {step}</p>
          ))}
          <p><strong>Final Answer: {item.answer}</strong></p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Common Mistakes</h2>
      <ul>
        {partialFractionsLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>Quick Summary</h2>
      <p>{partialFractionsLesson.summary}</p>
    </div>
  </>
) : isIntegrationByPartsLesson ? (

  <>
    <div className="lesson-header">
      <span className="eyebrow">INTEGRATION</span>
      <h1>Integration by Parts</h1>
      <p>{integrationByPartsLesson.intro}</p>
    </div>

    <div className="lesson-card">
      <h2>Theory</h2>
      {integrationByPartsLesson.theory.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Important Formulas</h2>
      {integrationByPartsLesson.formulas.map((item, index) => (
        <div className="formula-box" key={index}>
          <strong>{item.name}</strong>
          <p>{item.formula}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Solved Examples</h2>
      {integrationByPartsLesson.examples.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p><strong>{item.question}</strong></p>
          {item.steps.map((step, stepIndex) => (
            <p key={stepIndex}>{stepIndex + 1}. {step}</p>
          ))}
          <p><strong>Final Answer: {item.answer}</strong></p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Common Mistakes</h2>
      <ul>
        {integrationByPartsLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>Quick Summary</h2>
      <p>{integrationByPartsLesson.summary}</p>
    </div>
  </>
) : isUSubstitutionLesson ? (

  <>
    <div className="lesson-header">
      <span className="eyebrow">INTEGRATION</span>
      <h1>U-Substitution</h1>
      <p>{uSubstitutionLesson.intro}</p>
    </div>

    <div className="lesson-card">
      <h2>Theory</h2>
      {uSubstitutionLesson.theory.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p>{item.content}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Important Formulas</h2>
      {uSubstitutionLesson.formulas.map((item, index) => (
        <div className="formula-box" key={index}>
          <strong>{item.name}</strong>
          <p>{item.formula}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Solved Examples</h2>
      {uSubstitutionLesson.examples.map((item, index) => (
        <div className="lesson-item" key={index}>
          <h3>{item.title}</h3>
          <p><strong>{item.question}</strong></p>
          {item.steps.map((step, stepIndex) => (
            <p key={stepIndex}>{stepIndex + 1}. {step}</p>
          ))}
          <p><strong>Final Answer: {item.answer}</strong></p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>Common Mistakes</h2>
      <ul>
        {uSubstitutionLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>Quick Summary</h2>
      <p>{uSubstitutionLesson.summary}</p>
    </div>
  </>
) : isBasicIntegrationLesson ? (

  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {basicIntegrationLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {basicIntegrationLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {basicIntegrationLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {basicIntegrationLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {basicIntegrationLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{basicIntegrationLesson.summary}</p>
    </div>
  </>
) : isApplicationsDifferentiationLesson ? (

  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {applicationsDifferentiationLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {applicationsDifferentiationLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {applicationsDifferentiationLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {applicationsDifferentiationLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {applicationsDifferentiationLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{applicationsDifferentiationLesson.summary}</p>
    </div>
  </>
) : isHigherOrderDerivativesLesson ? (

  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {higherOrderDerivativesLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {higherOrderDerivativesLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {higherOrderDerivativesLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {higherOrderDerivativesLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {higherOrderDerivativesLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{higherOrderDerivativesLesson.summary}</p>
    </div>
  </>
) : isImplicitDifferentiationLesson ? (

  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {implicitDifferentiationLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {implicitDifferentiationLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {implicitDifferentiationLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {implicitDifferentiationLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {implicitDifferentiationLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{implicitDifferentiationLesson.summary}</p>
    </div>
  </>
) : isChainRuleLesson ? (

  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {chainRuleLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {chainRuleLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {chainRuleLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {chainRuleLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {chainRuleLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{chainRuleLesson.summary}</p>
    </div>
  </>
) : isApplicationsLesson ? (


  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {applicationsLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {applicationsLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {applicationsLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {applicationsLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {applicationsLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{applicationsLesson.summary}</p>
    </div>
  </>


                    ) : isLimitsLesson ? (
  <>
    <div className="lesson-card">
      <h2>01. Introduction</h2>
      {limitsLesson.introduction.map((paragraph, index) => (
        <p key={index}>{paragraph}</p>
      ))}
    </div>

    <div className="lesson-card">
      <h2>02. Theory</h2>
      {limitsLesson.theory.map((item) => (
        <div className="theory-block" key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <div className="formula-box">
            <strong>{item.formula}</strong>
          </div>
          <p className="lesson-note">{item.note}</p>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>03. Important Formulas</h2>
      <div className="formula-list">
        {limitsLesson.formulas.map((item) => (
          <div className="formula-item" key={item.name}>
            <h3>{item.name}</h3>
            <div className="formula-box">
              <strong>{item.formula}</strong>
            </div>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
    </div>

    <div className="lesson-card">
      <h2>04. Solved Examples</h2>
      {limitsLesson.examples.map((example) => (
        <div className="example-block" key={example.title}>
          <h3>{example.title}</h3>
          <p>
            <strong>Question:</strong> {example.question}
          </p>
          <h4>Solution:</h4>
          <ol className="solution-steps">
            {example.steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>
          <div className="answer-box">
            <strong>Final Answer: {example.answer}</strong>
          </div>
        </div>
      ))}
    </div>

    <div className="lesson-card">
      <h2>05. Common Mistakes</h2>
      <ul className="mistakes-list">
        {limitsLesson.mistakes.map((mistake, index) => (
          <li key={index}>{mistake}</li>
        ))}
      </ul>
    </div>

    <div className="lesson-card">
      <h2>06. Quick Summary</h2>
      <p>{limitsLesson.summary}</p>
    </div>
  </>

                  ) : isFunctionsLesson ? (
                    <>
                      <div className="lesson-card">
                        <h2>01. Introduction</h2>
                        {functionsLesson.introduction.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}
                      </div>

                      <div className="lesson-card">
                        <h2>02. Theory</h2>
                        {functionsLesson.theory.map((item) => (
                          <div className="theory-block" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <div className="formula-box">
                              <strong>{item.formula}</strong>
                            </div>
                            <p className="lesson-note">{item.note}</p>
                          </div>
                        ))}
                      </div>

                      <div className="lesson-card">
                        <h2>03. Important Formulas</h2>
                        <div className="formula-list">
                          {functionsLesson.formulas.map((item) => (
                            <div className="formula-item" key={item.name}>
                              <h3>{item.name}</h3>
                              <div className="formula-box">
                                <strong>{item.formula}</strong>
                              </div>
                              <p>{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lesson-card">
                        <h2>04. Solved Examples</h2>
                        {functionsLesson.examples.map((example) => (
                          <div className="example-block" key={example.title}>
                            <h3>{example.title}</h3>
                            <p>
                              <strong>Question:</strong> {example.question}
                            </p>
                            <h4>Solution:</h4>
                            <ol className="solution-steps">
                              {example.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                              ))}
                            </ol>
                            <div className="answer-box">
                              <strong>Final Answer: {example.answer}</strong>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="lesson-card">
                        <h2>05. Common Mistakes</h2>
                        <ul className="mistakes-list">
                          {functionsLesson.mistakes.map((mistake, index) => (
                            <li key={index}>{mistake}</li>
                          ))}
                        </ul>
                      </div>

                      <div className="lesson-card">
                        <h2>06. Quick Summary</h2>
                        <p>{functionsLesson.summary}</p>
                      </div>
                    </>
                  ) : isCalculusIntroduction ? (
                    <>
                      <div className="lesson-card">
                        <h2>01. Introduction</h2>
                        {calculusIntroduction.introduction.map(
                          (paragraph, index) => (
                            <p key={index}>{paragraph}</p>
                          )
                        )}
                      </div>

                      <div className="lesson-card">
                        <h2>02. Theory</h2>
                        {calculusIntroduction.theory.map((item) => (
                          <div className="theory-block" key={item.title}>
                            <h3>{item.title}</h3>
                            <p>{item.text}</p>
                            <div className="formula-box">
                              <strong>{item.formula}</strong>
                            </div>
                            <p className="lesson-note">{item.note}</p>
                          </div>
                        ))}
                      </div>

                      <div className="lesson-card">
                        <h2>03. Important Formulas</h2>
                        <div className="formula-list">
                          {calculusIntroduction.formulas.map((item) => (
                            <div className="formula-item" key={item.name}>
                              <h3>{item.name}</h3>
                              <div className="formula-box">
                                <strong>{item.formula}</strong>
                              </div>
                              <p>{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="lesson-card">
                        <h2>04. Solved Examples</h2>
                        {calculusIntroduction.examples.map((example) => (
                          <div className="example-block" key={example.title}>
                            <h3>{example.title}</h3>
                            <p>
                              <strong>Question:</strong> {example.question}
                            </p>
                            <h4>Solution:</h4>
                            <ol className="solution-steps">
                              {example.steps.map((step, index) => (
                                <li key={index}>{step}</li>
                              ))}
                            </ol>
                            <div className="answer-box">
                              <strong>Final Answer: {example.answer}</strong>
                            </div>
                          </div>
                        ))}
                      </div>

                      <div className="lesson-card">
                        <h2>05. Common Mistakes</h2>
                        <ul className="mistakes-list">
                          {calculusIntroduction.mistakes.map(
                            (mistake, index) => (
                              <li key={index}>{mistake}</li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="lesson-card">
                        <h2>06. Quick Summary</h2>
                        <p>
                          Calculus helps us understand change and
                          accumulation. Differential Calculus focuses on
                          derivatives, while Integral Calculus focuses on
                          integrals. Limits provide an important foundation
                          for both.
                        </p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="lesson-card">
                        <h2>01. Introduction</h2>
                        <p>
                          Welcome to <strong>{activeTopic}</strong>.
                          This lesson will introduce the main concepts
                          and explain how they are used in mathematics.
                        </p>
                      </div>

                      <div className="lesson-card">
                        <h2>02. Theory</h2>
                        <p>
                          The theoretical explanation for this topic
                          will be added in the next content update.
                        </p>
                      </div>

                      <div className="lesson-card">
                        <h2>03. Important Formulas</h2>
                        <p>
                          Important formulas and their conditions
                          will be organized here.
                        </p>
                      </div>

                      <div className="lesson-card">
                        <h2>04. Solved Examples</h2>
                        <p>
                          Step-by-step examples will be added here.
                        </p>
                      </div>

                      <div className="lesson-card">
                        <h2>05. Common Mistakes</h2>
                        <p>
                          Common mistakes and useful reminders
                          will be added here.
                        </p>
                      </div>
                    </>
                  )}

                  <div className="lesson-navigation">
                    <button
                      className="secondary-button"
                      onClick={goToPreviousTopic}
                      disabled={currentTopicIndex <= 0}
                    >
                      ← Previous Topic
                    </button>

                    <button
                      className="primary-button"
                      onClick={goToNextTopic}
                      disabled={
                        currentTopicIndex >= currentSection.topics.length - 1
                      }
                    >
                      Next Topic →
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <button className="back-button" onClick={goHome}>
                    ← Back to all sections
                  </button>

                  <div className="dashboard-welcome">
                    <div className="dashboard-icon">
                      {currentSection.icon}
                    </div>
                    <div className="eyebrow">LEARNING SECTION</div>
                    <h1>{currentSection.title}</h1>
                    <p>{currentSection.description}</p>
                  </div>

                  <h2 className="topics-heading">Explore Topics</h2>

                  <div className="topics-list">
                    {currentSection.topics.map((topic, index) => (
                      <button
                        className="topic-row"
                        key={topic}
                        onClick={() => setActiveTopic(topic)}
                      >
                        <span className="topic-number">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span>{topic}</span>
                        <span className="topic-arrow">→</span>
                      </button>
                    ))}
                  </div>
                </>
              )
            ) : (
              <>
                <div className="dashboard-welcome">
                  <div className="eyebrow">
                    <span className="status-dot"></span>
                    YOUR LEARNING SPACE
                  </div>
                  <h1>
                    Hello, {name} <span className="wave">✦</span>
                  </h1>
                  <p>What would you like to explore today?</p>
                </div>

                <div className="dashboard-section-title">
                  <div>
                    <span>YOUR DESTINATION</span>
                    <h2>Explore Learning Sections</h2>
                  </div>
                  <span className="section-count">05 SECTIONS</span>
                </div>

                <div className="dashboard-grid">
                  {sections.map((section, index) => (
                    <button
                      className="dashboard-card"
                      key={section.id}
                      onClick={() => openSection(section.id)}
                    >
                      <div className="dashboard-card-top">
                        <div className="card-icon">{section.icon}</div>
                        <span className="card-index">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>
                      <h3>{section.title}</h3>
                      <p>{section.description}</p>
                      <div className="card-link">
                        Explore Section <span>→</span>
                      </div>
                    </button>
                  ))}
                </div>
              </>
            )}
          </section>
        </main>
      )}

      <footer className="footer">
        <span>© 2026 Math Hup</span>
        <span>Learn Mathematics. Understand Everything.</span>
      </footer>
    </div>
  );
}

export default App;
