<template>
  <el-popover
    :show-after="2000"
    trigger="hover"
    :width="400"
  >
    heheheheh
    <video-youtube :video-id="dataItem?.data?.videos[0]?.key" />
    <template #reference>
      <div class="cursor-pointer" @mouseover="getDetailMovie(item.id)">
        <img 
          :src="`https://image.tmdb.org/t/p/w500/${item.poster_path ??item.backdrop_path}`"
          alt="poster"
          width="240"
          height="420"
          class="rounded-lg"
        >
      </div>
    </template>
    
  </el-popover>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue';
import { IMovieDetail, IMovieItem } from '@/types';
import { detailMovieApi } from '@/services/movies.service';

defineProps<{
  item: IMovieItem;
}>();

const dataItem = ref<IMovieDetail>();

const getDetailMovie = (id: number) => {
  setTimeout(async () => {
    try {
      const res = await detailMovieApi(id);
      dataItem.value = res.data;
    } catch (error) {
      console.error(error);
    }
  }, 1500)
};
</script>