# 🏆 JSON Mastery: From Zero to Hero
> **English:** A guide to mastering JavaScript Object Notation.
> **Bengali:** JSON (JavaScript Object Notation) এ দক্ষ হওয়ার একটি পূর্ণাঙ্গ নির্দেশিকা।

---

## 1. What is JSON? | JSON কী?
**English:** JSON is a lightweight format for storing and transporting data. It is "language independent," meaning it works with Python, JS, PHP, Java, etc.
**Bengali:** JSON হলো ডেটা আদান-প্রদান এবং জমা রাখার একটি হালকা ফরম্যাট। এটি কোনো নির্দিষ্ট প্রোগ্রামিং ল্যাঙ্গুয়েজের ওপর নির্ভরশীল নয়।


---

## 2. The Golden Rules | প্রধান নিয়মাবলি
To be a master, you must never break these rules:

1. **Double Quotes Only:** Keys and Strings must use `"`, not `'`.
   * *Bengali:* কী (Key) এবং স্ট্রিং অবশ্যই ডাবল কোটেশন (`"`) এর ভেতরে থাকতে হবে।
2. **No Trailing Commas:** Never put a comma after the last item.
   * *Bengali:* শেষ আইটেমের পরে কমা দেওয়া যাবে না।
3. **Data Types:** Only 6 types allowed (String, Number, Object, Array, Boolean, Null).
   * *Bengali:* শুধুমাত্র ৬টি ডেটা টাইপ সাপোর্ট করে।

---

## 3. Deep Dive: Syntax Structure | সিনট্যাক্স বিশ্লেষণ

### A. Objects (The Container)
**English:** Wrapped in `{}`, represents a single entity.
**Bengali:** কার্লি ব্র্যাকেট `{}` দিয়ে শুরু ও শেষ হয়, এটি একটি এনটিটি বা বস্তু বোঝায়।

```json
{
  "name": "Gemini",
  "version": 3.0,
  "is_active": true
}
```
### Task (কাজ),JavaScript Method,Description
- Parsing,JSON.parse(text),Converts String to Object (স্ট্রিং থেকে অবজেক্ট বানায়)
- Stringify,JSON.stringify(obj),Converts Object to String (অবজেক্ট থেকে স্ট্রিং বানায়)