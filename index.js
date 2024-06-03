const figlet = require("figlet");

figlet("Jocoding\nHello, World!", function (err, data) {
    if (err) {
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(data);
});
