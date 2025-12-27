/// <reference types="vitest/config" />

// https://vite.dev/config/
import path from "node:path"
import { fileURLToPath } from "node:url"
import { storybookTest } from "@storybook/addon-vitest/vitest-plugin"
import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { playwright } from "@vitest/browser-playwright"
import { defineConfig } from "vite"
import dts from "vite-plugin-dts"
import { peerDependencies } from "./package.json"

const dirname =
	typeof __dirname !== "undefined"
		? __dirname
		: path.dirname(fileURLToPath(import.meta.url))

// More info at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon
export default defineConfig({
	plugins: [
		react({
			babel: {
				plugins: [["babel-plugin-react-compiler"]],
			},
		}),
		dts({
			exclude: ["**/*.test.tsx", "**/*.stories.tsx"],
		}),
		tailwindcss(),
	],
	build: {
		lib: {
			entry: fileURLToPath(new URL("./src/index.ts", import.meta.url)),
			name: "strata-ui-react",
			fileName: (format) => `strata-ui-react.${format}.js`,
			formats: ["es", "cjs", "umd"],
		},
		rollupOptions: {
			external: Object.keys(peerDependencies),
			output: {
				globals: {
					react: "React",
					"react-dom": "ReactDOM",
				},
			},
		},
	},
	test: {
		environment: "jsdom",
		projects: [
			{
				extends: true,
				plugins: [
					// The plugin will run tests for the stories defined in your Storybook config
					// See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
					storybookTest({
						configDir: path.join(dirname, ".storybook"),
					}),
				],
				test: {
					name: "storybook",
					browser: {
						enabled: true,
						headless: true,
						provider: playwright({}),
						instances: [
							{
								browser: "chromium",
							},
						],
					},
					setupFiles: [".storybook/vitest.setup.ts"],
				},
			},
		],
	},
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
})
