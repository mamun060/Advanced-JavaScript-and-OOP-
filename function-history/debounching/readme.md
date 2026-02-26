# ⏳ Debouncing (ডিবাউন্সিং)

## 📌 The Concept

Debouncing ensures a function is called **only after a certain amount of silence**.

> 🛗 Imagine an elevator: the door doesn't close as long as people keep walking in. It only starts moving once the **last person enters** and there's a pause.

---

## 🔧 How It Works

Every time the event triggers, the **timer resets**. The function finally runs only when the user **stops doing the action** for the duration of the delay.

```
Event fires:  ●  ●  ●  ●  ●       (user keeps typing)
Timer resets: ↺  ↺  ↺  ↺  ↺
Function runs:                 ●   (fires only after silence)
```

---

## ✅ Best For

| Use Case           | Description                                        |
|--------------------|----------------------------------------------------|
| 🔍 Search bars      | Wait for user to finish typing before fetching     |
| 🪟 Window resizing  | Trigger layout updates only after resize ends      |
| 📋 Form validation  | Validate input after user stops typing             |
| 💾 Auto-save        | Save draft only after user pauses writing          |

---

## 🇧🇩 বাংলা ব্যাখ্যা

ডিবাউন্সিং হলো এমন একটি টেকনিক যেখানে একটি কাজ তখনই শুরু হয় যখন **ব্যবহারকারী কাজ করা বন্ধ করেন**।

> 🛗 একটি লিফটের কথা চিন্তা করুন — যতক্ষণ মানুষ লিফটে ঢুকতে থাকে, দরজা বন্ধ হয় না। যখনই মানুষ ঢোকা বন্ধ করে এবং কিছুক্ষণ বিরতি যায়, তখনই লিফট চলা শুরু করে।

এটি সাধারণত **সার্চ বক্সের** জন্য ব্যবহার করা হয়, যাতে আপনি প্রতিটি অক্ষর টাইপ করার সাথে সাথে রিকোয়েস্ট না পাঠিয়ে, **টাইপ শেষ করার পর** একবার রিকোয়েস্ট পাঠান।

---

## 💻 Example (JavaScript)

```javascript
function debounce(func, delay) {
  let timer;
  return function (...args) {
    clearTimeout(timer); // reset the timer on every call
    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

// Usage: API call fires only after user stops typing for 500ms
const searchInput = document.getElementById('search');
searchInput.addEventListener('input', debounce((e) => {
  console.log('Searching for:', e.target.value);
  // fetch('/api/search?q=' + e.target.value)
}, 500));
```

---

## ⚡ Throttling vs Debouncing

| Feature        | Throttling                          | Debouncing                            |
|----------------|--------------------------------------|---------------------------------------|
| Fires          | At regular intervals                 | Only after silence/pause              |
| Use case       | Scroll, mouse move                   | Search input, form validation         |
| Timer behavior | Ignores calls during interval        | Resets timer on every new call        |

---

*See also: **Throttling** — for limiting execution at a fixed rate rather than after a pause.*