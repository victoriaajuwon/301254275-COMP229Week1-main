function parent() {
    const message = 'Hello World';
    function child() {
    alert (message);
    }
    console.log(child);
    }
    const childFN = parent();
   childFN();
    