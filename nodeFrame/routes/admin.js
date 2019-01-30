const router=require("koa-router")();

const user=require("./admin/user.js");
const focus=require("./admin/focus.js");
const newscate=require("./admin/newscate.js");

router.get("/",(ctx)=>{
    ctx.body="后台管理系统首页";
});


router.use("/user",user);
router.use("/focus",focus);
router.use("/newscate",newscate)


module.exports=router.routes();