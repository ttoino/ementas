<script lang="ts">
    import type { MealType } from "$lib/meal.js";
    import { flip } from "svelte/animate";
    import { Temporal } from "temporal-polyfill";
    import { swipe } from "svelte-gestures";
    import { goto } from "$app/navigation";
    import { fade } from "svelte/transition";
    import type { RestaurantLanguage } from "$lib/restaurant.js";
    import { typedEntries } from "$lib/util.js";
    import { MetaTags } from "svelte-meta-tags";

    export let data;

    $: lang = data.lang;
    $: date = data.date;
    $: meal = data.restaurant?.meals?.[0];

    const typeClasses: Record<MealType, string> = {
        soup: "text-warning i-tabler-soup",
        meat: "text-error i-tabler-meat",
        fish: "text-info i-tabler-fish",
        diet: "text-secondary i-tabler-heart",
        vegetarian: "text-success i-tabler-leaf",
        salad: "text-accent i-tabler-salad",
        other: "i-tabler-tools-kitchen-2",
    };

    const typeNames: Record<RestaurantLanguage, Record<MealType, string>> = {
        en: {
            soup: "Soup",
            meat: "Meat",
            fish: "Fish",
            diet: "Diet",
            vegetarian: "Vegetarian",
            salad: "Salad",
            other: "Other",
        },
        pt: {
            soup: "Sopa",
            meat: "Carne",
            fish: "Peixe",
            diet: "Dieta",
            vegetarian: "Vegetariano",
            salad: "Salada",
            other: "Outro",
        },
    };

    let dates: [string, string][] = [];
    $: {
        dates = [];
        const dateObj = Temporal.PlainDate.from(
            new Date(date).toISOString().slice(0, 10),
        );
        const startDate = dateObj.subtract({ days: 7 });
        const endDate = dateObj.add({ days: 7 });

        for (
            let i = startDate;
            Temporal.PlainDate.compare(i, endDate) < 1;
            i = i.add({ days: 1 })
        )
            dates.push([
                i.toString(),
                i
                    .toLocaleString(data.lang, {
                        day: "numeric",
                        month: "short",
                        weekday: "short",
                    })
                    .replace(/\./g, ""),
            ]);
    }

    const url = (date: string) =>
        `/${data.lang}/${data.restaurant?.id}/${date}/`;
</script>

<MetaTags
    title={data.restaurant?.name ?? "Restaurant"}
    description={lang === "en"
        ? `Menu for ${data.restaurant?.name ?? "the restaurant"}`
        : `Ementa para ${data.restaurant?.name ?? "o restaurante"}`}
/>

<svelte:body
    use:swipe={{ touchAction: "pan-y" }}
    on:swipe={({ detail: { direction } }) => {
        if (direction === "left") goto(url(dates[8][0]));
        else if (direction === "right") goto(url(dates[6][0]));
    }}
    on:keydown={({ key }) => {
        console.log(key);
        if (key === "ArrowLeft") goto(url(dates[6][0]));
        else if (key === "ArrowRight") goto(url(dates[8][0]));
    }}
/>

<nav
    class="max-w-screen tabs tabs-bordered tabs-lg relative -mx-[calc((100vw-100%)*0.5)] justify-center overflow-hidden before:absolute before:bottom-0 before:left-0 before:top-0 before:z-10 before:w-[calc((100vw-theme(screens.md))/2)] before:bg-gradient-to-r before:from-base-100 before:from-[calc(100%-theme(spacing.4))] before:to-transparent after:absolute after:bottom-0 after:right-0 after:top-0 after:z-10 after:w-[calc((100vw-theme(screens.md))/2)] after:bg-gradient-to-l after:from-base-100 after:from-[calc(100%-theme(spacing.4))] after:to-transparent"
>
    {#each dates as [date, dateStr], i (date)}
        <a
            animate:flip
            href={url(date)}
            class="tab whitespace-nowrap transition-colors"
            class:tab-active={i == 7}>{dateStr}</a
        >
    {/each}
</nav>

<div class="grid">
    {#if meal && Object.values(meal.items).length > 0}
        <ul class="col-start-1 row-start-1 flex flex-col gap-4" transition:fade>
            {#each typedEntries(meal.items).filter(([_, dish]) => !!dish) as [type, dish] (type)}
                <li
                    class="flex flex-row items-center gap-4"
                    transition:fade
                    animate:flip
                >
                    <span
                        class="tooltip tooltip-bottom"
                        data-tip={typeNames[lang][type]}
                    >
                        <span
                            class="select-none text-5xl {type in typeClasses
                                ? typeClasses[type]
                                : typeClasses['other']}"
                            >{typeNames[lang][type]}</span
                        >
                    </span>
                    <div class="grid items-center">
                        {#key dish}
                            <span
                                class="col-start-1 row-start-1 text-xl"
                                transition:fade>{dish}</span
                            >
                        {/key}
                    </div>
                </li>
            {/each}
        </ul>
    {:else}
        <p
            class="col-start-1 row-start-1 m-8 flex flex-col items-center gap-4 text-center text-2xl"
            transition:fade
        >
            <span class="i-tabler-tools-kitchen-2-off text-9xl"></span>
            <span>
                {lang === "en" ? "Menu not found" : "Ementa não encontrada"}
            </span>
        </p>
    {/if}
</div>
