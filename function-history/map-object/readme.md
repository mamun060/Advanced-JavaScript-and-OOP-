# JavaScript: .map() vs new Map() 🚀

জাভাস্ক্রিপ্ট শেখার সময় আমরা প্রায়ই এই দুটি বিষয় নিয়ে কনফিউজড হয়ে যাই কারণ দুটোর নামেই **"Map"** শব্দটি আছে। কিন্তু এদের কাজ সম্পূর্ণ আলাদা।

---

## 📌 ১. .map() — এটি একটি Method (অ্যাকশন)
`.map()` হলো Array-এর একটি মেথড যা একটি অ্যারেকে পরিবর্তন (Transform) করে নতুন একটি অ্যারে তৈরি করতে ব্যবহৃত হয়।

### ব্যবহার করবেন যখন:
* অ্যারের প্রতিটি উপাদানের উপর ভিত্তি করে নতুন কিছু তৈরি করতে চান।
* API থেকে আসা ডেটাকে ফরম্যাট করতে চান (যেমন: React-এ লিস্ট রেন্ডার করা)।

### উদাহরণ:
```javascript
const numbers = [1, 2, 3, 4];
const squared = numbers.map(num => num * num); 

console.log(squared); // [1, 4, 9, 16]
```
---
## ২. new Map() — এটি একটি Data Structure (কন্টেইনার)
- new Map() হলো একটি অবজেক্টের মতো কালেকশন যেখানে আপনি Key-Value পেয়ার হিসেবে ডেটা জমা রাখতে পারেন। এটি সাধারণ Object {} এর চেয়ে অনেক বেশি শক্তিশালী।

**কেন Object এর বদলে Map ব্যবহার করবেন?**
- যেকোনো কিছু Key হতে পারে: অবজেক্টে শুধু String থাকে, কিন্তু Map-এ আপনি Function বা আস্ত একটা Object-কেও Key বানাতে পারেন।

- সরাসরি সাইজ জানা যায়: .size দিয়ে সহজেই কয়টি ডেটা আছে জানা যায়।
- সিরিয়াল ঠিক থাকে: ডেটা যে সিরিয়ালে ইনসার্ট করবেন, সেই সিরিয়ালেই থাকে।
- পারফরম্যান্স: প্রচুর ডেটা অ্যাড বা রিমুভ করার ক্ষেত্রে এটি সাধারণ অবজেক্টের চেয়ে দ্রুত।

```javascript
const myMap = new Map();

// ডেটা রাখা (Set)
myMap.set('name', 'Abir');
myMap.set(101, 'ID Number');

// ডেটা নেওয়া (Get)
console.log(myMap.get(101)); // "ID Number"
console.log(myMap.size);     // 2
```
---
***বাস্তব উদাহরণ (Real-world Use Case)***
- যখন আমরা API থেকে ডেটা পাই, তখন .map() দিয়ে ডেটা প্রসেস করি এবং প্রয়োজনে দ্রুত খুঁজে পাওয়ার জন্য new Map() এ জমা রাখি।
```javascript
const apiData = [
  { id: 1, name: "Laptop", price: 50000 },
  { id: 2, name: "Mobile", price: 20000 }
];

// ১. .map() দিয়ে শুধু নামগুলো আলাদা করা
const productNames = apiData.map(item => item.name);

// ২. new Map() দিয়ে আইডি অনুযায়ী ডেটা ইনডেক্স করা
const productMap = new Map();
apiData.map(item => productMap.set(item.id, item));

console.log(productMap.get(1)); // { id: 1, name: "Laptop", ... }
```