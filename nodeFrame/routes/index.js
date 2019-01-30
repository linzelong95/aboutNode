const router=require("koa-router")();

router.get("/",async (ctx)=>{
    ctx.body="首页";
    await ctx.render("default/index")
});

router.get("/case",async (ctx)=>{
    ctx.body="案例";
});

router.get("/about",async (ctx)=>{
    ctx.body="关于";
});


module.exports=router.routes();