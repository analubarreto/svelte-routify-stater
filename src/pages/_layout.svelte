<script lang="ts">
	import Navbar from '../components/app-wide/Navbar.svelte';
	import Serviceworker from '../Serviceworker.svelte';
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

<!-- Uncomment this line to enable service workers -->
<!-- <Serviceworker /> -->
<Navbar {routes} />
<slot />
