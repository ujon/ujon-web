<script lang="ts">
	export let name: string = '';
</script>

<div class="tag-tech">
	<slot />
	<p class="text-body-md">{name}</p>
</div>

<style>
    .tag-tech {
        display: inline-flex;
        align-items: center;
        padding: 0.25rem 0.75rem;
        gap: 0.5rem;
        background-color: var(--color-bg-sub);
        white-space: nowrap
    }
</style>