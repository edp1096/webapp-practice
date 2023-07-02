const fs = require("fs").promises;

const jsdom = require("jsdom");
// const jsdom = require("./jsdom/lib/api.js");
const { JSDOM } = jsdom;

async function main(fpath) {
    const fdata = (await fs.readFile(`${fbase}/${fpath}`)).toString();

    const dom = new JSDOM(fdata, { runScripts: 'dangerously' });

    dom.window.document.addEventListener("DOMContentLoaded", () => { console.log(dom.serialize()); });
}

const fbase = "./";
const fpath = "public/index.html";
main(fpath);