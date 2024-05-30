<script lang="ts">
    import type { Restaurant } from "$lib/restaurant.js";
    import { typedEntries } from "$lib/util.js";
    import { MetaTags } from "svelte-meta-tags";

    export let data;

    $: lang = data.lang;
    $: restaurantsByCampus = Object.groupBy(
        data.restaurants.filter((restaurant) => restaurant.lang === lang),
        (r) => r.campus ?? "Other",
    ) as Record<string, Restaurant[]>;
</script>

<MetaTags
    title={lang === "en" ? "Restaurants" : "Restaurantes"}
    description={lang === "en"
        ? "List of restaurants"
        : "Lista de restaurantes"}
    languageAlternates={[
        { hrefLang: "en", href: "/en/" },
        { hrefLang: "pt", href: "/pt/" },
    ]}
/>

{#each typedEntries(restaurantsByCampus).toSorted( ([a], [b]) => a.localeCompare(b), ) as [campus, restaurants] (campus)}
    <h2 class="text-xl">{campus}</h2>
    <ul class="grid gap-4 md:grid-cols-2">
        {#each restaurants as restaurant (restaurant.id)}
            <li>
                <a
                    href={`/${lang}/${restaurant.slug ?? restaurant.id}/`}
                    class="btn btn-lg w-full"
                >
                    {restaurant.name}
                </a>
            </li>
        {/each}
    </ul>
{/each}
