### 1. The Core Concept: Prototype Chain
**JavaScript is a prototypal language, not a class-based one (even though we use the class keyword). Every object has a hidden property called [[Prototype]].**

**English:**
When you try to access a property (like user.name), JS first looks at the object itself. If it’s not there, it looks at the object's Prototype. If it’s still not there, it looks at that Prototype's Prototype! This continues until it reaches null. This is the Prototype Chain.

**Bangla:**
সহজ কথায়, যখন আপনি কোনো object-এর কাছে কোনো property বা method চান, JS প্রথমে ওই object-এর নিজের ভেতর খোঁজে। সেখানে না পেলে সে তার "বাবা" বা Prototype-এর কাছে যায়। সেখানেও না থাকলে তারও উপরের Prototype-এ খোঁজে। এই চেইনটাকেই বলা হয় Prototype Chain।
---

### 2. __proto__ vs prototype (The Confusion)
This is where most developers get stuck. Here is the distinction:

**prototype:** This is a property that only functions have. It is the "blueprint" for objects created using that function with the new keyword.

**__proto__:** This is a property that every object has. It points to the actual prototype object it is inheriting from.

### 3.Prototype কেন ব্যবহার করি? (The "Class-like" behavior)
- মনে করো, তুমি একটা গেম বানাচ্ছ যেখানে ১০০০ জন Soldier আছে। প্রত্যেক Soldier-এর attack() করার ক্ষমতা দরকার।

***ভুল পদ্ধতি***: প্রত্যেক Soldier-এর ভেতরে আলাদা করে attack ফাংশন লেখা। এতে মেমরিতে ১০০০টি আলাদা ফাংশন তৈরি হবে। (Memory Waste ❌)

***Prototype পদ্ধতি:*** তুমি Soldier.prototype-এ একবার attack ফাংশনটা লিখে দিলে। এখন ১০০০ জন Soldier-ই ওই একটা ফাংশনই ব্যবহার করবে। (Memory Efficient ✅) 
---
## Examples:

### ১. ভুল পদ্ধতি (Memory Waste)
- এখানে আমরা attack ফাংশনটা সরাসরি Constructor-এর ভেতরে লিখব। এর ফলে যতবার new Soldier() কল হবে, ততবার মেমরিতে একটা নতুন ফাংশন তৈরি হবে।
```js 
function Soldier(name) {
    this.name = name;
    // এই ফাংশনটি প্রত্যেকটি অবজেক্টের জন্য আলাদাভাবে তৈরি হবে
    this.attack = function() {
        console.log(this.name + " is attacking! ⚔️");
    };
}

const s1 = new Soldier("Soldier 1");
const s2 = new Soldier("Soldier 2");

// প্রমাণ: দুইটা ফাংশন কি এক? না!
console.log(s1.attack === s2.attack); // Output: false
```
**সমস্যা:** যদি ১০০০ জন Soldier থাকে, তবে মেমরিতে ১০০০টি attack ফাংশন জায়গা দখল করবে। অথচ সব ফাংশন একই কাজ করছে!

### ২. Prototype পদ্ধতি (Memory Efficient)
- এখানে আমরা ফাংশনটি শুধু একবার Soldier.prototype-এ রাখব। সব Soldier অবজেক্ট সেই একটি ফাংশনকেই শেয়ার করবে।
```js
function Soldier(name) {
    this.name = name;
}

// ফাংশনটি প্রোটোটাইপে একবার ডিফাইন করা হলো
Soldier.prototype.attack = function() {
    console.log(this.name + " is attacking! ⚔️");
};

const s1 = new Soldier("Soldier 1");
const s2 = new Soldier("Soldier 2");

// প্রমাণ: দুইটা কি একই ফাংশন ব্যবহার করছে? হ্যাঁ!
console.log(s1.attack === s2.attack); // Output: true
```
**সুবিধা:** মেমরিতে attack ফাংশনটি এখন মাত্র একটিই আছে। ১০০০ জন বা ১ লক্ষ Soldier তৈরি করলেও তারা সবাই ওই একই ফাংশনের রেফারেন্স ব্যবহার করবে। এতে মেমরি অনেক বেঁচে যায়।