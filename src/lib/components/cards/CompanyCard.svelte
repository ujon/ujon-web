<script lang="ts">
	export let company: string;
	export let jobPosition: string;
	export let startDate: Date;
	export let endDate: Date | undefined;
	export let description: string | undefined;
	export let image: string | undefined;

	let work_period = `${startDate.getFullYear()} - ${endDate ? endDate.getFullYear() : 'present'}`;
</script>

<div class="company-card-container">
	<div class="company-card-body">
		<h1 class="text-title-md">{company}</h1>
		<p class="text-title-sm" style="margin-top: var(--base-size-20)">{jobPosition}</p>
		<p class="color-text-sub" style="margin-top: var(--base-size-16)">{description}</p>
	</div>
	<div class="company-card-footer">
		<img
			src={image}
			alt={company}
		/>
		<span class="text-caption color-text-sub">{work_period}</span>
	</div>
</div>

<style>
    .company-card-container {
        display: flex;
        gap: var(--base-size-32);
    }

    .company-card-body {
        flex: 1;
        display: flex;
        flex-direction: column;
    }

    .company-card-footer {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: var(--base-size-8);

        & img {
            width: 12rem;
            aspect-ratio: 1 / 1;
            object-fit: contain;
            border-radius: var(--base-radius-md);
            background-color: var(--color-bg-sub);
        }
    }

    @media (max-width: 767px) {
        .company-card-container {
            flex-direction: column;
        }

        .company-card-footer img {
            width: 50%;
        }
    }
</style>