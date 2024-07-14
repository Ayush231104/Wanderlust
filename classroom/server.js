const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");  
const session = require("express-session");
const users = require("./routes/user.js");
const posts = require("./routes/post.js");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

const sessionOptions = {
    secret: "mysupersecretstring",
    resave: false,
    saveUninitialized: true
};

app.use(session(sessionOptions));
app.use(flash());

app.use("/users", users);
app.use("/posts", posts);

//*********** */
//Cookies
// app.use(cookieParser("secretcode"));

// app.get("/", (req, res) => {
//     console.dir(req.cookies);
//     res.send("Working");
// });

// app.get("/getcookies", (req,res) => {
//     res.cookie("greet", "namaste");
//     res.cookie("madeIn", "India");
//     res.send("sent you some cookies");
// });

// app.get("/greet", (req,res) => {
//     let {name = "anonymous"} = req.cookies;
//     res.send(`Hi, ${name}`);
// });

// app.get("/getsignedcookie", (req, res) => {
//     res.cookie("made-in", "India" , {signed: true});
//     res.send("signed cookie sent");
// });

// app.get("/verify", (req, res) => {
//     console.log(req.signedCookies);
//     res.send("verifyed");
// });
//*************** */

//*************** */
app.use((req, res, next) => {
    res.locals.successMsg = req.flash("success");
    res.locals.errorMsg = req.flash("error");
    next();
});

app.get("/register", (req, res) => {
    let { name  = "anonymous"} = req.query;
    req.session.name = name;
    console.log(req.session.name);
    if(name === "anonymous"){
        req.flash("error", "user not registered");
    }else{
        req.flash("success", "user register successfully!!");
    }
    res.redirect("/hello");
});

app.get("/hello", (req,res) => {
    res.render("page.ejs", {name : req.session.name});
});

// app.get("/reqcount", (req, res) => {
//     if(req.session.count){
//         req.session.count++;
//     }else{
//         req.session.count = 1;
//     }
//     res.send(`you sent a request ${req.session.count} times`);
// });

// app.get("/test", (req,res) => {
//     res.send("Test successful");
// });

app.listen(3000, () => {
    console.log("Server is listning to port 3000");
});