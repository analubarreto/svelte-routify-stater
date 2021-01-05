<script>
	import Products from './products/index.svelte';
	import { metatags } from '@roxi/routify';
	metatags.title = 'Product List App';
	metatags.description = 'A simple product list app';
</script>

<Products />
