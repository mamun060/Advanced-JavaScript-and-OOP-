# ⚙️ Throttling (থ্রোটলিং)

## 📌 The Concept

Throttling ensures a function is called **at most once** in a specified time period.

> 💧 Imagine a water tap that only lets out one drop every 5 seconds, no matter how much you shake it.

---

## 🔧 How It Works

If you set a throttle of **1 second**, and an event happens **10 times** in that second, the function will only run **once**. It "spreads out" the execution over time.

```
Event fires:  ●●●●●●●●●●   (10 times in 1 second)
Throttled:    ●             (runs only once)
```

---

## ✅ Best For

| Use Case         | Description                                      |
|------------------|--------------------------------------------------|
| `window.onscroll` | Scroll events that fire rapidly                 |
| Mouse movement   | Tracking cursor without overloading the browser  |
| Resize events    | Window resize handlers                           |
| API rate limiting | Preventing too many network requests            |

> Use throttling for any event where you need **constant updates** but not too many.

---

## 🇧🇩 বাংলা ব্যাখ্যা

থ্রোটলিং হলো এমন একটি পদ্ধতি যা নিশ্চিত করে যে একটি নির্দিষ্ট সময়ের মধ্যে একটি ফাংশন **সর্বোচ্চ একবারই** চলবে।

আপনি যতই বাটন প্রেস করেন না কেন, এটি একটি নির্দিষ্ট বিরতি (Interval) মেনে কাজ করবে।

> 💧 যেমন: পানির কল থেকে প্রতি ৫ সেকেন্ডে কেবল এক ফোঁটা পানি পড়া।

এটি সাধারণত **মাউস মুভমেন্ট** বা **স্ক্রলিং ইভেন্টে** ব্যবহার করা হয় যাতে ব্রাউজারের ওপর অতিরিক্ত চাপ না পড়ে।

---

## 💻 Example (JavaScript)

```javascript
function throttle(func, limit) {
  let lastCall = 0;
  return function (...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func.apply(this, args);
    }
  };
}

// Usage: scroll event fires at most once every 1000ms
window.addEventListener('scroll', throttle(() => {
  console.log('Scroll event handled!');
}, 1000));
```

---

*See also: **Debouncing** — another technique for controlling function execution frequency.*