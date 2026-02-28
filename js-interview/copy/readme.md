# Shallow Copy vs Deep Copy in JavaScript

এই ডকুমেন্টে JavaScript এ **Shallow Copy** এবং **Deep Copy** সহজ বাংলায় ব্যাখ্যা করা হয়েছে, সাথে ব্যবহারিক উদাহরণও আছে।

---

## Shallow Copy (উপর উপর কপি)

### কী?

Shallow Copy শুধু **first-level** ডেটা কপি করে। যদি nested object/array থাকে, সেগুলোকে আলাদা করে কপি না করে **reference** কপি করে।

### বৈশিষ্ট্য

* শুধু বাহিরের লেয়ার কপি হয়
* ভেতরের object/array একই মেমরি reference শেয়ার করে
* কপি করা ডেটার ভেতরের মান পরিবর্তন করলে original ডেটাতেও পরিবর্তন দেখা যায়

### Example (Array)

```js
const arr1 = [1, 2, 3, { city: "Dhaka" }];

const arr2 = [...arr1]; // Shallow Copy

arr2[3].city = "Chittagong";

console.log(arr1[3].city); // "Chittagong"
console.log(arr2[3].city); // "Chittagong"
```

### Example (Object)

```js
const user1 = {
  name: "Mamun",
  address: { city: "Dhaka" }
};

const user2 = { ...user1 }; // Shallow Copy

user2.address.city = "Rajshahi";

console.log(user1.address.city); // "Rajshahi"
```

---

## 🟩 Deep Copy (পুরোপুরি আলাদা কপি)

### কী?

Deep Copy nested object/array সহ পুরো ডেটাকেই নতুন করে কপি করে।

### বৈশিষ্ট্য

* সম্পূর্ণ আলাদা data structure তৈরি হয়
* কোনও reference শেয়ার হয় না
* পরিবর্তন করলে original ডেটায় কোনও প্রভাব পড়ে না

### Example (JSON Method)

```js
const arr1 = [1, 2, 3, { city: "Dhaka" }];

const arr2 = JSON.parse(JSON.stringify(arr1)); // Deep Copy

arr2[3].city = "Chittagong";

console.log(arr1[3].city); // "Dhaka"
console.log(arr2[3].city); // "Chittagong"
```

### Example (Modern JS: structuredClone)

```js
const user1 = {
  name: "Mamun",
  address: { city: "Dhaka" }
};

const user2 = structuredClone(user1); // Deep Copy

user2.address.city = "Rajshahi";

console.log(user1.address.city); // "Dhaka"
```

---

## 🟧 Comparison Table

| Topic                       | Shallow Copy  | Deep Copy         |
| --------------------------- | ------------- | ----------------- |
| Nested Object/Array         | Reference কপি | সম্পূর্ণ নতুন কপি |
| Memory Sharing              | হয়           | হয় না            |
| Original ডেটা পরিবর্তন হবে? | হ্যাঁ         | না                |
| Performance                 | দ্রুত         | একটু ধীর          |

---

## 📌 Summary

* Shallow Copy: উপর উপর কপি, nested ডেটা reference শেয়ার করে
* Deep Copy: পুরোপুরি আলাদা কপি, reference শেয়ার হয় না
---