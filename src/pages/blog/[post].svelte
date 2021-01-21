<script lang="ts">
	import { url } from '@roxi/routify';
	import { onDestroy } from 'svelte';
	import Post from '../../components/blog/Post.svelte';
	import posts from '../../components/blog/blog-store';

	let postData: { _id: string } = { _id: '' };
	const route = $url();

	const unsubscribe = posts.subscribe((posts) => {
		// /blog/post1
		const blogRouteLength: number = '/blog/'.length;
		const lastChar = route.length;
		const routeParam: string = route.substr(blogRouteLength, lastChar);
		posts.forEach((p) => {
			if (p.id === routeParam) {
				postData._id = p.id;
			}
		});
	});

	onDestroy(() => {
		unsubscribe();
	});
</script>

<Post id={postData.id} />
