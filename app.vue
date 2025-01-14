<script setup>
import moment from "moment";
import "moment/dist/locale/es";
moment.locale("es");
</script>

<template>
  <NuxtLayout>
    <template #header><Header></Header></template>
    <template #main>
      <NuxtPage />
    </template>
    <template #footer><Footer></Footer></template>
  </NuxtLayout>
</template>
