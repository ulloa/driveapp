(function(dust){dust.register("signup",body_0);var blocks={"head":body_1,"body":body_2};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk;}body_1.__dustBody=!0;function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/navbar",ctx,ctx,{}).w("<div class=\"container\" id=\"first\"><div class=\"col-sm-6 col-sm-offset-3\"><h1><span class=\"fa fa-sign-in\"></span> Signup</h1>").x(ctx.get(["message"], false),ctx,{"block":body_3},{}).w("<!-- LOGIN FORM --><form action=\"/signup\" method=\"post\"><input type=\"hidden\" value=\"").f(ctx.get(["_csrf"], false),ctx,"h").w("\" name=\"_csrf\" /><div class=\"form-group\"><label>Email</label><input type=\"text\" class=\"form-control\" name=\"email\"></div><div class=\"form-group\"><label>Password</label><input type=\"password\" class=\"form-control\" name=\"password\"></div><button type=\"submit\" class=\"btn btn-warning btn-lg\">Signup</button></form><hr><p>Already have an account? <a href=\"/login\">Login</a></p><p>Or go <a href=\"/\">home</a>.</p></div></div>");}body_2.__dustBody=!0;function body_3(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.s(ctx.get(["message"], false),ctx,{"block":body_4},{});}body_3.__dustBody=!0;function body_4(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.w("<!-- show any messages that come back with authentication --><div class=\"alert alert-danger\">").f(ctx.get(["message"], false),ctx,"h").w("</div>");}body_4.__dustBody=!0;return body_0}(dust));