<script lang="ts">
    import { page } from "$app/stores";
    import { _, messages } from "$lib/i18n";

    $: code = $page.status;
    $: message = $_(
        code in messages.httpCode
            ? messages.httpCode[code as keyof typeof messages.httpCode]
            : messages.unknown,
    );
</script>

<main class="flex-1 flex-col items-center justify-center py-24 text-center">
    <span class="i-tabler-mood-sad mb-4 text-9xl"></span>
    <h2 class="text-4xl">{code}</h2>
    <h3 class="text-2xl">{message}</h3>
</main>
