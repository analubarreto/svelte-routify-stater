<script lang="ts">
  import { url } from "@roxi/routify";

  let routes: Object[] = [
    {
      name: 'Home',
      href: '/'
    },
    {
      name: 'About',
      href: './about'
    },
    {
      name: 'Blog',
      href: './blog/index'
    },
  ];
</script>

<header>
  <nav>
    <ul>
      {#each routes as route}        
        <li>
          <a href="{$url(route.href)}">{route.name}</a>
        </li>
      {/each}
    </ul>
  </nav>
</header>

<div class="container mx-auto">
  <slot />
</div>