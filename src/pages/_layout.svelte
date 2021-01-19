<script lang="ts">
	import Navbar from '../components/app-wide/Navbar.svelte';
	let routes: Object[] = [
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
