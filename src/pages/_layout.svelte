<script lang="ts">
	import Navbar from '../components/app-wide/Navbar.svelte';
	let routes: { name: string; href: string }[] = [
		{
			name: 'Home',
			href: '/',
		},
		{
			name: 'About',
			href: './about',
		},
		{
			name: 'Blog',
			href: './blog/index',
		},
	];
</script>

<Navbar {routes} />
<slot />
