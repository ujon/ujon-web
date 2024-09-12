<script lang="ts">
	export let title: string;
	export let date: Date;

	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
	$: formattedDate = date.toLocaleDateString('en', options);
</script>
<details>
	<summary>
		<a href="/" class="title text-title-sm">{title}</a>
		<span class="date text-title-sms">{formattedDate}</span>
	</summary>
	<div class="content">
		<span class="tag tag-sm text-body-sm">Kotlin</span>
		<span class="tag tag-sm  text-body-sm">Java</span>
		<span class="tag tag-sm  text-body-sm">javascript</span>
	</div>
</details>

<style>
    details {
    }

    summary {
        display: flex;
        align-items: start;
        justify-content: space-between;
        padding: var(--base-padding-md);

    }

    .title {
        word-break: break-all;
    }

    .title:hover {
        color: var(--color-primary);
    }

    .date {
        flex-shrink: 0;
        margin-left: var(--base-size-16);
        color: var(--color-text-muted)
    }

    .content {
        display: flex;
        flex-wrap: wrap;
        gap: var(--base-size-12) var(--base-size-16);
        padding: 0 var(--base-padding-md) var(--base-padding-md) var(--base-padding-md);
    }
</style>
