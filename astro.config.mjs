// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
  site: "https://copilotstudioquickst.art",
  integrations: [
    starlight({
      title: "Microsoft Copilot Studio QuickStart",
      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/withastro/starlight",
        },
      ],
      sidebar: [],
    }),
  ],
});
