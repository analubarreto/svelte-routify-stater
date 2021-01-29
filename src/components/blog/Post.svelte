<script lang="ts">
	import { onDestroy } from 'svelte';
	import { url } from '@roxi/routify';
	import posts from './blog-store';
	import { vars } from '../../utils/envVariables';

	// example => vars.apiUrl

	export let id: string;

	let selectedPost: {
		_id: string;
		text: string[];
		title: string;
	};

	const unsubscribe = posts.subscribe((posts) => {
		selectedPost = posts.find((p) => p.id === id);
	});

	let paragraphs = selectedPost.text;

	onDestroy(() => {
		unsubscribe();
	});
</script>

<main class="flex flex-col  mx-8 my-10">
	<h1 class="text-4xl mb-5 mt-5">{selectedPost.title}</h1>
	{#each paragraphs as paragraph}
		<p>{paragraph}</p>
	{/each}

	<a href={$url('/blog')} class="mt-10">Back to Blog</a>
</main>
