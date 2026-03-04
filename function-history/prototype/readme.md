### 1. The Core Concept: Prototype Chain
**JavaScript is a prototypal language, not a class-based one (even though we use the class keyword). Every object has a hidden property called [[Prototype]].**

**English:**
When you try to access a property (like user.name), JS first looks at the object itself. If it’s not there, it looks at the object's Prototype. If it’s still not there, it looks at that Prototype's Prototype! This continues until it reaches null. This is the Prototype Chain.

**Bangla:**
সহজ কথায়, যখন আপনি কোনো object-এর কাছে কোনো property বা method চান, JS প্রথমে ওই object-এর নিজের ভেতর খোঁজে। সেখানে না পেলে সে তার "বাবা" বা Prototype-এর কাছে যায়। সেখানেও না থাকলে তারও উপরের Prototype-এ খোঁজে। এই চেইনটাকেই বলা হয় Prototype Chain।