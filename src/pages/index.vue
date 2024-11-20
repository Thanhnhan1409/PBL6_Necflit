<script lang="ts" setup>
import { popularMoviesApi } from '@/services/movies.service';
import { IMovieList } from '@/types';

const popularMovies = ref<IMovieList>();

const getPopularMovies = async () => {
  try {
    const response = await popularMoviesApi();
    popularMovies.value = response.data;
  } catch (error) {
    console.error(error);
  }
};

onMounted(() => {
  getPopularMovies();
});
</script>

<template>
  <div class="home bg-[#141414] pb-10">
    <div>
      <img
        src="../assets/images/bg_home.webp"
        alt="background"
        class="w-full"
      >
    </div>
    <div>
      <CardList title="Popular Movies" :popular-movies="popularMovies" />
    </div>
  </div>
</template>

<style lang="scss">
.home {
  .el-carousel__container {
    height: 420px;
  }
  .el-carousel__indicators--horizontal {
    display: none;
  }
}
</style>