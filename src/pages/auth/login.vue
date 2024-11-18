<route>
  {
    meta: {
      layout: "auth"
    }
  }
</route>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { FormInstance } from 'element-plus'
import router from '@/router';

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

interface DomainItem {
  key: number
  value: string
}


const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid: any) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const goToSignUp = () : void => {
  router.push({ name: 'SignUp' })
}

</script>

<template>
  <div class="relative w-full h-fit login">
    <div class="absolute inset-0 bg-[black] opacity-30 z-10"></div>
    <div class="absolute top-[50px] left-[100px] w-[100px] fill-[#E50914]">
      <svg viewBox="0 0 111 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="default-ltr-cache-1d568uk ev1dnif2"><g><path d="M105.06233,14.2806261 L110.999156,30 C109.249227,29.7497422 107.500234,29.4366857 105.718437,29.1554972 L102.374168,20.4686475 L98.9371075,28.4375293 C97.2499766,28.1563408 95.5928391,28.061674 93.9057081,27.8432843 L99.9372012,14.0931671 L94.4680851,-5.68434189e-14 L99.5313525,-5.68434189e-14 L102.593495,7.87421502 L105.874965,-5.68434189e-14 L110.999156,-5.68434189e-14 L105.06233,14.2806261 Z M90.4686475,-5.68434189e-14 L85.8749649,-5.68434189e-14 L85.8749649,27.2499766 C87.3746368,27.3437061 88.9371075,27.4055675 90.4686475,27.5930265 L90.4686475,-5.68434189e-14 Z M81.9055207,26.93692 C77.7186241,26.6557316 73.5307901,26.4064111 69.250164,26.3117443 L69.250164,-5.68434189e-14 L73.9366389,-5.68434189e-14 L73.9366389,21.8745899 C76.6248008,21.9373887 79.3120255,22.1557784 81.9055207,22.2804387 L81.9055207,26.93692 Z M64.2496954,10.6561065 L64.2496954,15.3435186 L57.8442216,15.3435186 L57.8442216,25.9996251 L53.2186709,25.9996251 L53.2186709,-5.68434189e-14 L66.3436123,-5.68434189e-14 L66.3436123,4.68741213 L57.8442216,4.68741213 L57.8442216,10.6561065 L64.2496954,10.6561065 Z M45.3435186,4.68741213 L45.3435186,26.2498828 C43.7810479,26.2498828 42.1876465,26.2498828 40.6561065,26.3117443 L40.6561065,4.68741213 L35.8121661,4.68741213 L35.8121661,-5.68434189e-14 L50.2183897,-5.68434189e-14 L50.2183897,4.68741213 L45.3435186,4.68741213 Z M30.749836,15.5928391 C28.687787,15.5928391 26.2498828,15.5928391 24.4999531,15.6875059 L24.4999531,22.6562939 C27.2499766,22.4678976 30,22.2495079 32.7809542,22.1557784 L32.7809542,26.6557316 L19.812541,27.6876933 L19.812541,-5.68434189e-14 L32.7809542,-5.68434189e-14 L32.7809542,4.68741213 L24.4999531,4.68741213 L24.4999531,10.9991564 C26.3126816,10.9991564 29.0936358,10.9054269 30.749836,10.9054269 L30.749836,15.5928391 Z M4.78114163,12.9684132 L4.78114163,29.3429562 C3.09401069,29.5313525 1.59340144,29.7497422 0,30 L0,-5.68434189e-14 L4.4690224,-5.68434189e-14 L10.562377,17.0315868 L10.562377,-5.68434189e-14 L15.2497891,-5.68434189e-14 L15.2497891,28.061674 C13.5935889,28.3437998 11.906458,28.4375293 10.1246602,28.6868498 L4.78114163,12.9684132 Z"></path></g></svg>
    </div>
    <img 
      src="https://assets.nflxext.com/ffe/siteui/vlv3/03ad76d1-e184-4d99-ae7d-708672fa1ac2/web/VN-en-20241111-TRIFECTA-perspective_10008136-a13d-418e-b56f-a5a9ceea15cf_large.jpg"
      alt="background"
    >
    <div class="absolute z-20 w-[450px] py-[3rem] px-[68px] h-fit bg-[rgba(0,0,0,0.7)] inset-0 m-auto">
      <div class="text-[2rem] text-bld text-white pb-[20px]">Sign In</div>
      <el-form
        ref="formRef"
        style="max-width: 600px"
        :model="dynamicValidateForm"
        label-width="auto"
        class="demo-dynamic"
      >
        <el-form-item
          prop="email"
          class="bg-[black] text-white pb-2"
          placeholder="Email"
          :rules="[
            {
              required: true,
              message: 'Please input email address',
              trigger: 'blur',
            },
            {
              type: 'email',
              message: 'Please input correct email address',
              trigger: ['blur', 'change'],
            },
          ]"
        >
          <el-input v-model="dynamicValidateForm.email" />
        </el-form-item>
        <el-form-item
          v-for="(domain) in dynamicValidateForm.domains"
          :key="domain.key"
          placeholder="Domain"
          prop="password"
          :rules="{
            required: true,
            message: 'domain can not be null',
            trigger: 'blur',
          }"
          class="bg-[black] text-white pb-4"
        >
          <el-input v-model="domain.value" />
        </el-form-item>
        <div class="flex flex-col items-center w-full gap-4">
          <el-button color="#E50914" @click="submitForm(formRef)">Sign in</el-button>
            <span class="text-white">OR</span>
          <el-button color="rgba(128,128,128,0.4)" class="">
            <icon icon="ri:google-fill" color="#fff" class="text-xl" />
            <span class="text-white pl-2">Sign in with Google</span>
          </el-button>
        </div>
        <el-form-item class="py-3 w-full text-center">
          <span class="text-[rgba(255,255,255,0.7)]">Don't have any account?</span>
          <span class="text-white pl-2 cursor-pointer hover:underline" @click="goToSignUp">Sign up now</span>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<style>
.login {
  .el-input__wrapper {
    background-color: transparent;
    border: 0.5px solid #fff;
    height: 50px;
    border: none;
    
    .el-input::placeholder {
      color: #fff;
      font-style: italic;
    }
  }
  .el-button {
    width: 100%;
    height: 40px;
  }
}
</style>