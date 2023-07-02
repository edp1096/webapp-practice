// const jsdom = require("jsdom");
// const jsdom = resuire("./jsdom/lib/api.js");
// const { JSDOM } = jsdom;
// import { JSDOM } from "./jsdom/lib/api.js";

import { JSDOM } from "jsdom";

const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<body>
    <div id="main">
        <p>Hello</p>
        <p>World</p>
    </div>
</body>
</html>
`);

console.log(dom.window.document.querySelector("#main").textContent);
