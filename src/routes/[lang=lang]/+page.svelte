<script lang="ts">
    import { MetaTags } from "svelte-meta-tags";

    export let data;

    $: lang = data.lang;
    $: restaurants = data.restaurants.filter(
        (restaurant) => restaurant.lang === lang,
    );
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
