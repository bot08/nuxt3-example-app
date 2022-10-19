<template>
    <div class="container mx-auto">
        <SelectTheme/>
        <slot/>
        {{ Date.now() }}
    </div>
</template>