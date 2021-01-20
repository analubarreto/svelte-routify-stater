<script lang="ts">
	const features: string[] = ['Prettier', 'ESLint', 'Typescript', 'Tailwind', 'PostCSS'];
</script>

<main class="flex flex-col mx-8 my-10">
	<h1 class="text-4xl mb-5 mt-5">About Page</h1>
	<p>
		This is a Svelte Routify starter template slightly changed from the <a
			href="https://github.com/roxiness/routify-starter"
			target="_blank">original Routify starter template</a
		>.
	</p>
	<p>By default, this adds:</p>
	<ul class="self-start">
		{#each features as feature}
			<li>- {feature}</li>
		{/each}
	</ul>
	<p>Along with everything else routify adds.</p>
	<p>This also has a blog starter logic.</p>
	<p>
		If you have any issues and or sugestions, please report at <a
			href="https://github.com/analubarreto/svelte-starter"
			target="_blank">the github repo</a
		>.
	</p>
</main>
