<script lang="ts">
    export let data;

    $: lang = data.lang;
    $: restaurants = data.restaurants.filter(
        (restaurant) => restaurant.lang === lang,
    );
</script>

<ul class="grid md:grid-cols-2 gap-4">
    {#each restaurants as restaurant}
        <li>
            <a href={`/${lang}/${restaurant.id}/`} class="btn btn-lg w-full">
                {restaurant.name}
            </a>
        </li>
    {/each}
</ul>
