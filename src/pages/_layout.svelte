<script lang="ts">
	import Navbar from '../components/app-wide/Navbar.svelte';
	// Uncomment the line below to enable service workers
	// import Serviceworker from '../Serviceworker.svelte';
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

<!-- Uncomment the line below to enable service workers -->
<!-- <Serviceworker /> -->
<Navbar {routes} />
<slot />
