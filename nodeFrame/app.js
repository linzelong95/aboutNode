const Koa=require("koa");
const router=require("koa-router")();
const static=require("koa-static");
const render=require("koa-art-template");
const path=require("path");
// const ObjectId=require("mongodb").ObjectId;
// const MongoClient=require("mongodb").MongoClient;
// const mysql=require("mysql");
// const bodyParser=require("koa-bodyparser");

const admin=require("./routes/admin.js");
const api=require("./routes/api.js");
const index=require("./routes/index.js");

const app=new Koa();
render(app,{
  root:path.join(__dirname,"views"),
  extname:".html",
  debug:process.env.NODE_ENV!=="production"
});
app.use(static(path.join(__dirname,"statics")));

router.use(index);
router.use("/admin",admin);
router.use("/api",api);

app.use(router.routes()).use(router.allowedMethods());






app.listen(3000,()=>console.log("do something"));