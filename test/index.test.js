const { JSDOM } = require("jsdom");
const fs = require("fs");
const path = require("path");
const assert = require("assert");

const html = fs.readFileSync(path.resolve(__dirname, "../index.html"), "utf8");

let dom;
let document;

describe("Flatbooks DOM Tests", function () {
  beforeEach(() => {
    dom = new JSDOM(html, { runScripts: "dangerously", resources: "usable" });
    document = dom.window.document;
    const scriptContent = fs.readFileSync(path.resolve(__dirname, "../index.js"), "utf8");
    const scriptEl = document.createElement("script");
    scriptEl.textContent = scriptContent;
    document.body.appendChild(scriptEl);
  });

  it("header should have text 'Flatbooks Technical Books'", function () {
    const header = document.getElementById("header");
    assert.strictEqual(header.textContent, "Flatbooks Technical Books");
  });

  it("#book-list should have book titles", function () {
    const titles = Array.from(document.querySelectorAll("#book-list h3")).map(h3 => h3.textContent);
    const expected = ["Eloquent JavaScript","You Don't Know JS","JavaScript: The Good Parts"];
    assert.deepStrictEqual(titles, expected);
  });

  it("#book-list should have book authors", function () {
    const authors = Array.from(document.querySelectorAll("#book-list p")).map(p => p.textContent);
    const expected = ["Marijn Haverbeke","Kyle Simpson","Douglas Crockford"];
    assert.deepStrictEqual(authors, expected);
  });

  it("#book-list should have book images", function () {
    const images = Array.from(document.querySelectorAll("#book-list img")).map(img => img.src);
    const expected = [
      "https://eloquentjavascript.net/img/cover.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg",
      "https://images-na.ssl-images-amazon.com/images/I/81kqrwS1nNL.jpg"
    ];
    assert.deepStrictEqual(images, expected);
  });
});