const express = require("express");
const fs = require("fs");
const uuidv4 = require("uuid");
const cors = require("cors");
const NewPosts = require("./PostDatas/NewPosts.json");


const app = express();
app.use(cors());
const bodyParser = require("body-parser").json();
const port = 5000;

app.use(bodyParser);


app.listen(port, () => {
    console.log("listening");
})


app.get("/newposts", cors(), (req, res) => {
    res.json(JSON.stringify(NewPosts));
})


app.get("/getblogsbyuser", cors(), (req, res) => {

    if (req.query.username !== null && req.query.username !== "null") {
        const UserPosts = NewPosts.filter((u) => u.AuthorName === req.query.username);
        res.json(UserPosts);
    }
})

app.get("/singleblog", cors(), (req, res) => {
    const Blog = NewPosts.filter((d) => d.id === req.query.blogid)
    res.json(Blog);
})


app.post("/addpost", (req, res) => {

    console.log(JSON.stringify(req.body));

    const Data = req.body;

    Data['id'] = uuidv4.v4();

    const Posts = NewPosts;
    Posts.push(Data)
    fs.writeFile("./PostDatas/NewPosts.json", JSON.stringify(Posts), err => {
        if (err) throw err;
        console.log("added");

        res.sendStatus(200);
    })

})


app.get("/deletepost", (req, res) => {
    const Data = NewPosts;
    const query = req.query;
    if (query.id !== null) {
        const newData = Data.filter(d => d.id !== query.id)
        fs.writeFile("./PostDatas/NewPosts.json", JSON.stringify(newData), err => {
            if (err) throw err;
            console.log("added");
            res.sendStatus(200);
        })
    }
})




const UserData = require("./UserData/Users.json");

app.post("/register", (req, res) => {
    const Data = req.body;
    const User = UserData;
    Data['id'] = uuidv4.v4();
    if (User.length > 0) {
        const HasUser = User.some((d) => d.UserName === Data.UserName)
        if (!HasUser) {
            User.push(Data);
            fs.writeFile("./UserData/Users.json", JSON.stringify(User), err => {
                if (err) throw err;
                console.log("added");
                res.send({ messageSuccess: "Başarıyla Kayıt Olundu" });
            })
        } else {
            res.send({ message: "Bu Kullanıcı Zaten Kayıtlı" })
        }
    } else {
        User.push(Data);
        fs.writeFile("./UserData/Users.json", JSON.stringify(User), err => {
            if (err) throw err;
            console.log("added");
            res.send({ messageSuccess: "Başarıyla Kayıt Olundu" });
        })
    }
})


app.post("/login", (req, res) => {
    const Data = req.body;
    const User = UserData;
    if (User.length > 0) {
        const Auth = User.filter((u) => u.UserName === Data.UserName && u.password === Data.password);
        if (Auth[0] !== undefined) {
            res.status(200).send({ UserName: Auth[0].UserName })
        }
    }
})

