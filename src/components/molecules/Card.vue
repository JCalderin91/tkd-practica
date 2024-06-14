<template>
    <article class="p-6 text-center m-3">
        <header class="py-3">
            <slot name="header" />
        </header>
        <main class="py-6">
            <slot name="content" />
        </main>
        <footer class="py-3">
            <slot name="actions" />
        </footer>
    </article>
</template>
