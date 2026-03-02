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
```
--- 

### সহজ ভাষায় Regex-এর থিওরিটিক্যাল কনসেপ্ট এবং এর প্রয়োজনীয়তা নিচে আলোচনা করা হলো:

১. **Regex কী? (What is Regex?)**
Regex বা Regular Expression হলো একগুচ্ছ বিশেষ ক্যারেক্টার বা চিহ্নের সমষ্টি যা একটি নির্দিষ্ট "সার্চ প্যাটার্ন" তৈরি করে। এটি মূলত টেক্সট প্রসেসিংয়ের একটি ক্ষুদ্র কিন্তু অত্যন্ত শক্তিশালী ইঞ্জিন। ধরুন, আপনি এক হাজার পৃষ্ঠার একটি বইতে "সবগুলো ফোন নম্বর" বা "সবগুলো ইমেইল" খুঁজছেন; Regex দিয়ে আপনি একটি মাত্র লাইনের কোড লিখে সেই প্যাটার্নটি খুঁজে বের করতে পারবেন।

২. **কেন এটি দরকার? (Why do we need it?)**
সাধারণ স্ট্রিং মেথড (যেমন: includes() বা indexOf()) দিয়ে শুধু ফিক্সড টেক্সট খোঁজা যায়। কিন্তু যখন সার্চিংটা হবে ডাইনামিক বা কন্ডিশনাল, তখন Regex ছাড়া উপায় নেই।

* Validation: ইউজার সঠিক ফরমেটে ডেটা দিচ্ছে কি না তা নিশ্চিত করা।
* Search and Replace: টেক্সটের ভেতর থেকে নির্দিষ্ট প্যাটার্ন খুঁজে তা অন্য কিছু দিয়ে পরিবর্তন করা।
* Data Scraping: অগোছালো বড় কোনো টেক্সট থেকে নির্দিষ্ট তথ্য (যেমন: লিঙ্ক বা তারিখ) ছেঁকে বের করা।
* Efficiency: কয়েক শ লাইন কোড না লিখে মাত্র এক লাইন Regex দিয়ে জটিল লজিক হ্যান্ডেল করা।

৩. **রিয়েল লাইফ অ্যাপ্লিকেশন (Real-life Applications)**
* ১. পাসওয়ার্ড স্ট্রেংথ চেক: ইউজার কি অন্তত একটি বড় হাতের অক্ষর, একটি ছোট হাতের অক্ষর এবং একটি স্পেশাল ক্যারেক্টার দিয়েছে? এটা Regex দিয়ে চেক করা হয়।
* ২. ইউজারনেম চেক: ইউজারনেম কি ৩-১৬ ক্যারেক্টারের মধ্যে? এতে কি কোনো স্পেশাল ক্যারেক্টার (যেমন: !@#) নিষিদ্ধ?
* ৩. সেন্সরশিপ (Censorship): কোনো চ্যাট অ্যাপে গালি বা আপত্তিকর শব্দ অটোমেটিক স্টার (***) দিয়ে ঢেকে দেওয়া।
* ৪. লগ ফাইল অ্যানালাইসিস: সার্ভার লগের হাজার হাজার লাইনের মধ্য থেকে শুধু Error 404 এর লাইনগুলো খুঁজে বের করা।