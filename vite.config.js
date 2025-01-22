import { defineConfig } from "vite";
import posthtml from "posthtml";
import include from "posthtml-include";

export default defineConfig({
  plugins: [
    {
      name: "vite-posthtml-include",
      transformIndexHtml: async (html) => {
        const result = await posthtml([
          include({ root: "./src", encoding: "utf8" }),
        ]).process(html);
        return result.html;
      },
    },
  ],
});
