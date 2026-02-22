### ১. Callbacks (শুরুর দিনগুলো)
- শুরুতে JavaScript-এ অ্যাসিনক্রোনাস কাজ করার একমাত্র উপায় ছিল Callbacks। একটি ফাংশন অন্য একটি ফাংশনকে আর্গুমেন্ট হিসেবে গ্রহণ করত এবং কাজ শেষ হলে তাকে কল করত।

- সমস্যা: যখন একটির পর একটি অনেকগুলো অ্যাসিনক্রোনাস কাজ করতে হতো, তখন কোড ডানে সরতে থাকত এবং দেখতে পিরামিডের মতো হয়ে যেত। একে বলা হয় "Callback Hell" বা "Pyramid of Doom"।
---
```JavaScript
// Callback Hell-এর উদাহরণ
getData(function(a) {
  getMoreData(a, function(b) {
    getEvenMoreData(b, function(c) {
      console.log(c);
    });
  });
});
```