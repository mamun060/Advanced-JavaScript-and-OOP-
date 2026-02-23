function createLogger(tag) {
  // এই ফাংশনটি একটি নতুন ফাংশন রিটার্ন করছে
  return function(message) {
    console.log(`${tag}: ${message}`);
  };
}

const infoLogger = createLogger("[INFO]");
const errorLogger = createLogger("[ERROR]");

infoLogger("System is updating..."); // [INFO]: সিস্টেম আপডেট হচ্ছে...
errorLogger("Database connection failed!"); // [ERROR]: ডেটাবেস কানেকশন ফেইল্ড!