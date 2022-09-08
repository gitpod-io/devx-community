import { sveltekit } from '@sveltejs/kit/vite';
import { imagetools } from 'vite-imagetools';
import type { UserConfig } from 'vite';
import { execSync } from 'node:child_process';

let extendedViteDevServerOptions;

try {
	const gitpodPortUrl = execSync(`gp url ${5173}`).toString().trim();

	extendedViteDevServerOptions = {
		hmr: {
			protocol: 'wss',
			host: new URL(gitpodPortUrl).hostname,
			clientPort: 443
		}
	};
} catch {
	extendedViteDevServerOptions = {};
}

const config: UserConfig = {
	plugins: [sveltekit(), imagetools()],
	server: {
		...extendedViteDevServerOptions
	}
};

export default config;
