<script lang="ts">
	import { onDestroy } from 'svelte';
	import { url } from '@roxi/routify';
	import posts from './blog-store';

	export let id: string;

	let selectedPost: Object[];

	const unsubscribe = posts.subscribe((posts) => {
		selectedPost = posts.find((p) => p.id === id);
	});

	let paragraphs = selectedPost.text;

	onDestroy(() => {
		unsubscribe();
	});
</script>

<main class="flex flex-col">
	<h1 class="text-4xl mb-5 mt-5">{selectedPost.title}</h1>
	{#each paragraphs as paragraph}
		<p>{paragraph}</p>
	{/each}

	<a href={$url('/blog')} class="mt-10">Back to Blog</a>
</main>
