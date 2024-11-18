<script setup lang="ts">
import { footerList } from '@/data/footer';
</script>

<template>
    <footer aria-label="Footer" class="w-full">
        <div class="bg-[black] w-full py-10 flex justify-center">
            <div class="bg-[black] grid max-w-6xl w-full gap-7 py-10 text-neutral-400">
                <div class="flex items-center justify-start gap-6">
                    <Icon icon="ri:facebook-fill" color="#fff" class="text-xl"/>
                    <Icon icon="basil:instagram-solid" color="#fff" class="text-xl"/>
                    <Icon icon="mdi:twitter" color="#fff" class="text-xl"/>
                    <Icon icon="ri:youtube-fill" color="#fff" class="text-xl"/>
                </div>
                <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
                    <div v-for="(item) in footerList" :key="item.id">
                        <span class="hover:underline cursor-pointer">{{ item.title }}</span>
                    </div>
                </div>
                <div class="border p-[6.5px] w-fit cursor-pointer hover:text-white">
                    Service code
                </div>
                <p class="text-xs sm:text-sm">
                    @2023-{{ new Date().getFullYear() }} Netflx.
                </p>
            </div>
        </div>

    </footer>
</template>

<style module lang="scss">
.footerPrimary {
    display: flex;
    background-color: #f1f1f1;
    padding-bottom: 52px;
    border-top: 1px solid;
    border-color: #DEE1E3;
    padding-right: 68px;
    padding-left: 68px;
    padding: 0 68px 52px 68px;
    flex-wrap: wrap;
}

.footerPrimaryContent {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
}

.footerPrimaryTopic {
    flex-basis: 25%;
    max-width: 25%;
    padding-left: 36px;
    padding-top: 52px;
}

.footerPrimaryTopicTitle {
    line-height: 1.5;
    font-size: 16px;
    font-weight: 700;
    color: #252525;
    padding-bottom: 4px;
}

.footerPrimaryContentItem {
    font-size: 16px;
    font-weight: 400;
    color: #252525;
    line-height: 36px;
    cursor: pointer;

    &:hover {
        text-decoration: underline;
    }
}

.footerPrimaryContactIcons {
    display: flex;
    
}

.footerSecondary {
    background-color: #e0e0e0;
    padding: 12px 68px 20px 68px;
    display: flex;
    justify-content: space-between;
}

.footerContent {
    display: flex;
    flex-direction: column;
}

.footerContentItem {
    display: inline-block;
    padding-top: 8px;
    font-size: 14px;
    font-weight: 400;
    color: #252525;
    line-height: 24px;
}

.footerContentLinkItem {
    display: flex;
    gap: 6px;
    padding-bottom: 4px;
}

.footerAuthor {
    display: flex;
    align-items: end;
    gap: 6px;

    span {
        font-weight: 400;
        font-size: 14px;
    }
}

.footerLocation {
    text-decoration: underline;
}

.footerVersion {
    display: block;
    margin: 10px 5px 0 0;
    text-align: right;
    font-weight: 400;
    font-size: 14px;
}
</style>