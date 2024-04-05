<script lang="ts">
    import { page } from "$app/stores";
    import type { Restaurant } from "$lib/restaurant";
    import "../app.pcss";

    export let data;

    $: lang = $page.data.lang as string | undefined;
    $: date = $page.data.date as string | undefined;

    $: restaurants = lang
        ? data.restaurants.filter((restaurant) => restaurant.lang === lang)
        : data.restaurants;

    $: selectedRestaurant =
        "restaurant" in $page.data
            ? ($page.data.restaurant as Restaurant)
            : undefined;
</script>

<div class="mx-auto flex max-w-screen-md flex-col gap-4 p-4">
    <header class="flex flex-row gap-2">
        <h1 class="flex-1 text-4xl">
            <a href="/{lang ?? ''}">
                {lang === "en" ? "Menus" : "Ementas"}
            </a>
        </h1>
        {#if selectedRestaurant}
            <div class="dropdown dropdown-end">
                <div tabindex="0" class="btn">
                    {selectedRestaurant?.name ?? "Select restaurant"}
                </div>
                <ul
                    tabindex="0"
                    class="menu dropdown-content z-20 mt-2 max-h-52 w-64 flex-nowrap overflow-y-auto rounded-box bg-base-300 p-2 shadow"
                >
                    {#each restaurants as restaurant, i (i)}
                        <li>
                            <a
                                href="/{restaurant.lang}/{restaurant.id}/{date ??
                                    ''}">{restaurant.name}</a
                            >
                        </li>
                    {/each}
                </ul>
            </div>
        {:else if lang}
            <a
                href="/{lang === 'en' ? 'pt' : 'en'}"
                class="btn tooltip tooltip-bottom inline-flex"
                data-tip={lang === "en" ? "Português" : "English"}
            >
                <span class="i-tabler-world select-none text-2xl">
                    {lang === "en" ? "Português" : "English"}
                </span>
            </a>
        {/if}
    </header>

    <slot />
</div>
