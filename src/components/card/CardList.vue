<script setup lang="ts">
import { IMovieList } from '@/types';

const props = defineProps<{
  title: string;
  popularMovies: IMovieList | undefined;
}>();

const groupMovies = computed(() => {
  const groups = [];
  const data = props.popularMovies?.data || [];
  for (let i = 0; i < data.length; i += 5) {
    groups.push(data.slice(i, i + 5));
  }
  return groups;
});
</script>
<template>
  <div>
    <h2 class="py-6 text-xl text-white font-semibold ml-[100px] ">{{ title }}</h2>
    <el-carousel :interval="5000" arrow="always" :autoplay="false">
      <el-carousel-item v-for="(group, index) in groupMovies" :key="index">
        <div class="flex gap-8 items-center justify-center">
          <CardItem v-for="item in group" :key="item.id" :item="item" />
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>