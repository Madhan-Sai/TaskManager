var psList = require("ps-list");
(async() => {
    console.log(await psList());
    //=> [{pid: 3213, name: 'node', cmd: 'node test.js', ppid: 1, cpu: 0.1, memory: 1.5}, …]
})();