declare module "astro:actions" {
	type Actions = typeof import("/home/mehdi/repos/mehdiakha.github.io/src/actions")["server"];

	export const actions: Actions;
}