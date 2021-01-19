<script>
	import { url } from '@roxi/routify';
	export let routes;
</script>

<header class="z-10 mb-10">
	<nav>
		<ul class="flex justify-evenly content-evenly">
			{#each routes as route}
				<li>
					<a href={$url(route.href)}>{route.name}</a>
				</li>
			{/each}
		</ul>
	</nav>
</header>
