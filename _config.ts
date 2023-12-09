import lume from "lume/mod.ts";
import favicon from "lume/plugins/favicon.ts";
import blog from "https://deno.land/x/lume_theme_simple_blog@v0.13.0/mod.ts";

const site = lume();

site.use(blog())
  .use(favicon(/* https://deno-avatar.deno.dev/avatar/f172b3.svg */));

export default site;
