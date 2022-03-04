<template>
    <select v-model="$colorMode.preference" class="border w-24 h-8 dark:bg-gray-900 dark:text-white dark:border-gray-700">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
    <button class="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none" @click="$colorMode.preference = 'dark'">Dark</button>
    <button class="items-center m-2 text-center px-7 py-1 shadow-lg text-base font-medium text-white transition ease-in-out bg-indigo-600 border border-transparent rounded-md hover:bg-indigo-500 dark:hover:bg-indigo-700 focus:outline-none" @click="$colorMode.preference = 'light'">Light</button>
    <hr class="mb-2 border-gray-300 dark:border-gray-500">
</template>