<script lang="ts">
	import { url } from '@roxi/routify';
	import posts from '../../components/blog/blog-store';
</script>

<h1 class="text-4xl mb-5 mt-5">Blog Page</h1>
<ul>
	{#each $posts as post}
		<li><a href={$url(`./${post._id}`)}>{post.title}</a></li>
	{/each}
</ul>
