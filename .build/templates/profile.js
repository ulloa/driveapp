(function(dust){dust.register("profile",body_0);var blocks={"head":body_1,"body":body_2};function body_0(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/master",ctx,ctx,{});}body_0.__dustBody=!0;function body_1(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk;}body_1.__dustBody=!0;function body_2(chk,ctx){ctx=ctx.shiftBlocks(blocks);return chk.p("layouts/navbar",ctx,ctx,{}).w("<div class=\"container\" id=\"first\"><div class=\"page-header text-center\"><h1><span class=\"fa fa-anchor\"></span> Profile Page</h1><a href=\"/logout\" class=\"btn btn-default btn-sm\">Logout</a></div><div class=\"row\"><!-- LOCAL INFORMATION --><div class=\"col-sm-6\"><div class=\"well\"><h3><span class=\"fa fa-user\"></span> Local</h3><p><strong>id</strong>: ").f(ctx.getPath(false, ["user","_id"]),ctx,"h").w("<strong>email</strong>: ").f(ctx.getPath(false, ["user","local","email"]),ctx,"h").w("<strong>password</strong>: ").f(ctx.getPath(false, ["user","local","password"]),ctx,"h").w("</p></div></div></div></div>");}body_2.__dustBody=!0;return body_0}(dust));