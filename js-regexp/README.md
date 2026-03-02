# JavaScript Regular Expressions Master Guide

A comprehensive guide to mastering patterns, flags, and methods in JS.

## 1. Quick Reference Table

| Feature | Syntax | Description |
| :--- | :--- | :--- |
| **Global Search** | `/p/g` | Finds all matches rather than stopping after the first. |
| **Insensitive** | `/p/i` | Case-insensitive matching. |
| **Digit** | `\d` | Matches any decimal digit (0-9). |
| **Word** | `\w` | Matches any alphanumeric character + underscore. |
| **Wildcard** | `.` | Matches any character except newline. |
| **Grouping** | `(...)` | Captures the match for later use. |

## 2. Essential Methods

### `regex.test(string)`
Returns `true` or `false`. Best for simple validations (e.g., "Is this an email?").

### `string.match(regex)`
Returns an array of matches. If the `g` flag is used, it returns all matches.

### `string.replace(regex, replacement)`
Powerful for formatting. You can use `$1`, `$2` to reference captured groups.

## 3. Practical Examples

### ✅ Email Validation (Basic)
```javascript
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
console.log(emailRegex.test("hello@world.com")); // true

const text = "The price is $45 and the tax is $5.";
const prices = text.match(/\d+/g); 
// ["45", "5"]

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;

const phone = "1234567890";
const formatted = phone.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
// "(123) 456-7890"

---

## Pro-Tips for Mastery

1.  **Be Greedy (or Not):** By default, quantifiers are "greedy" (they take as much as possible). Add a `?` after a quantifier (e.g., `.*?`) to make it "lazy" (take the minimum).
2.  **The `y` (Sticky) Flag:** This matches only from the `lastIndex` property of the regex, which is great for building high-performance parsers.
3.  **Use Named Groups:** Instead of remembering that the month is group `$2`, use `(?<month>\d{2})` and access it via `groups.month`.



Would you like me to create a specific regex pattern for a complex use case you're working on right now?
