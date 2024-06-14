<template>
    <article class="p-6 text-center m-3">
        <header class="my-3">
            <slot name="header" />
        </header>
        <main class="my-6">
            <slot name="content" />
        </main>
        <footer class="my-3">
            <slot name="actions" />
        </footer>
    </article>
</template>
