# JavaScript Iterator

## সজঞ (Definition)

সহজ ভষয বলত গল, **Iterator** হল জভসকরপটর এমন একট সটযনডরড ব নযম (Protocol), য বযবহর কর কন কলকশন (যমন: Array ব String) থক এক এক ডট বর কর আন যয

একট বসত ব Object-ক তখনই Iterator বল হয, যখন তর মধয একট নরদষট মথড থক, যর নম 
ext()

---

## 1. ইটরটর কভব কজ কর? (How it works?)

আপন যখনই 
ext() মথডট কল করবন, এট আপনক একট অবজকট রটরন করব যর দট পরপরট থক:

- **value**: বরতমন ভযল ব ডট
- **done**: এট একট Boolean (true/false) যদ সব ডট দওয শষ হয যয, তব এট 	rue হয, অনযথয alse থক

---

## 2. সধরণ উদহরণ (Manual Iterator Example)

নচ দখন কভব একট সধরণ অবজকটক ইটরটর হসব কজ করন যয:

\\\javascript
function myIterator(array) {
    let nextIndex = 0;
    
    return {
        next: function() {
            if (nextIndex < array.length) {
                return { value: array[nextIndex++], done: false };
            } else {
                return { value: undefined, done: true };
            }
        }
    };
}

const names = ['Karim', 'Rahim'];
const it = myIterator(names);

console.log(it.next()); // { value: "Karim", done: false }
console.log(it.next()); // { value: "Rahim", done: false }
console.log(it.next()); // { value: undefined, done: true }
\\\

---

## 3. কন ইটরটর গরতবপরণ? (Why it matters?)

জভসকরপটর অনক আধনক ফচর এই ইটরটরর ওপর ভতত কর চল:

- **for...of loop**: এট বযকএনড ইটরটর বযবহর করই চল
- **Spread Operator (...)**: এটও ইটরটর পরটকল মন চল
- **Generators**: জনরটর ফশন কল করল আসল একট ইটরটর অবজকটই তর হয

---

## 4. Built-in Iterables

সব অবজকট কনত ইটরটর নয তব জভসকরপটর কছ ডট টইপ আগ থকই ইটরটর সট কর থক (Built-in), এগলক বল হয **Iterables**:

- Arrays
- Strings
- Maps
- Sets

---

## 5. Iterable vs Iterator (পরথকয)

| টরম (Term) | বযখয (Definition) |
|---|---|
| **Iterable** | এমন একট অবজকট যটর মধয \Symbol.iterator\ মথড আছ (যমন: Array) |
| **Iterator** | এমন একট অবজকট যর মধয \
ext()\ মথড আছ এব য ডট সপলই দয |
