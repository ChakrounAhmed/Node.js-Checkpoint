const fs = require("fs");

fs.writeFile("./welcome.txt", "Hello Node", (err) => {
  if (err) console.log("Error:", err);
  console.log("File created successfully!");
});

fs.readFile("welcome.txt", (err, data) => {
  if (err) console.error("Error:", err);

  console.log(data.toString());
});
