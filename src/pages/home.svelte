<script lang="ts">
  let projectContent: string[] = ['TypeScript', 'TailwindCSS', 'PostCSS']
</script>

<h1 class="text-4xl mb-5 mt-5">Svelte Routify Starter</h1>

<p>This is routify/svelte starter project, it also uses:</p>
<div class="bg-gray-100 p-5 mt-4 rounded shadow-md lg:w-1/3 sm:w-full">
  <ul>
    {#each projectContent as content}
      <li class="mb-2">{content}</li>
    {/each}
  </ul>
</div>