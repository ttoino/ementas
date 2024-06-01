<script lang="ts">
    import { page } from "$app/stores";
    import type { Restaurant } from "$lib/restaurant";
    import { MetaTags } from "svelte-meta-tags";
    import "../app.pcss";
    import { _, __, messages, type Language } from "$lib/i18n";
    import { sortedEntriesByKey, strCompare } from "$lib/util";

    export let data;

    $: lang = $page.data.lang as Language | undefined;
    $: date = $page.data.date as string | undefined;

    $: restaurantsByCampus = lang
        ? data.restaurantsByLanguageAndCampus[lang]
        : data.restaurantsByCampus;

    $: selectedRestaurant =
        "restaurant" in $page.data
            ? ($page.data.restaurant as Restaurant)
            : undefined;
</script>

<MetaTags titleTemplate="%s - {$_(messages.menus)}" />

<div class="mx-auto flex max-w-screen-md flex-col gap-4 p-4">
    <header class="flex flex-row gap-2">
        <h1 class="flex-1 text-4xl">
            <a href="/{lang ?? ''}">
                {$_(messages.menus)}
            </a>
        </h1>
        {#if selectedRestaurant}
            <div class="dropdown dropdown-end">
                <button class="btn">
                    {selectedRestaurant?.name ?? $_(messages.selectRestaurant)}
                </button>
                <ul
                    class="menu dropdown-content z-20 mt-2 max-h-52 w-64 flex-nowrap overflow-y-auto rounded-box bg-base-300 p-2 shadow"
                >
                    {#each sortedEntriesByKey(restaurantsByCampus, strCompare) as [campus, restaurants] (campus)}
                        <li class="menu-title">{campus}</li>
                        {#each restaurants as restaurant (restaurant.id)}
                            <li>
                                <a
                                    class:active={restaurant.id ===
                                        selectedRestaurant.id}
                                    href="/{restaurant.lang}/{restaurant.slug ??
                                        restaurant.id}/{date ?? ''}"
                                >
                                    {restaurant.name}
                                </a>
                            </li>
                        {/each}
                    {/each}
                </ul>
            </div>
        {:else if lang}
            {@const otherLang = lang === "en" ? "pt" : "en"}
            <a
                href="/{otherLang}"
                class="btn tooltip tooltip-bottom inline-flex"
                data-tip={__(otherLang, messages.language)}
            >
                <span class="i-tabler-world select-none text-2xl">
                    {__(otherLang, messages.language)}
                </span>
            </a>
        {/if}
        <a
            href="https://github.com/ttoino/ementas"
            class="btn tooltip tooltip-bottom inline-flex"
            data-tip="Github"
            target="_blank"
        >
            <span class="i-tabler-brand-github select-none text-2xl">
                {$_(messages.github)}
            </span>
        </a>
    </header>

    <slot />
</div>
