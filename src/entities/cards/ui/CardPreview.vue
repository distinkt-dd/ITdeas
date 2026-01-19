<template>
  <div class="card" @click="navigator(router, '/full-card')">
    <AppSubstrate class="card__substrate">
      <div class="card__user">
        <ProfileIcon class="card__user-profileicon" />
        <h2 class="h2 card__user-title">
          <span>Дмитрий</span>
          <span>Демаков</span>
        </h2>
      </div>
      <div class="card__content">
        <div class="card__content-header card__header">
          <h2 class="h2 card__header-title">Приложение ITdeas</h2>
          <p class="card__header-subtitle">
            Разработка приложения ITdeas. Суть приложения в том, что авторы идей IT проектов
            выкладывают свои предложения на платформе. Все желающие поучаствовать в проекте могут
            сделать отклик. Авторы могут связаться с желающими через соц-сети или внутренний
            мессенджер...
          </p>
          <div class="card__header-btnwrapper">
            <AppButton class="card__header-button button-gradient"> Читать больше </AppButton>
          </div>
        </div>
        <div class="card__content-skills card__skills">
          <AppSkill> html </AppSkill>
          <AppSkill> css </AppSkill>
          <AppSkill> scss </AppSkill>
          <AppSkill> js </AppSkill>
          <AppSkill> vite </AppSkill>
          <AppSkill> vue3 </AppSkill>
        </div>
      </div>
      <div class="card__managment">
        <div
          v-if="route.meta.personalName !== 'myIdeasPage'"
          class="card__managment-item card__managment-likes likes-block"
        >
          <div class="likes-block__content">
            <HearthIcon :class="{ active: isLiked }" @click="toggleLike" />
          </div>
        </div>
        <div v-else class="card__managment-item card__managment-more more-block">
          <div class="more-block__content">
            <MoreIcon />
          </div>
        </div>
        <div class="card__managment-item card__managment-views views-block">
          <div class="views-block__content">
            <ViewsIcon />
            <p class="views-block__content-text">3000</p>
          </div>
        </div>
      </div>
    </AppSubstrate>
  </div>
</template>

<style lang="scss" scoped>
.card {
  --border-card: var(--border-width-sm) solid var(--color-border-main);
  min-height: 250px;
  max-width: 100%;
  width: 100%;
  &__substrate {
    border-radius: var(--border-radius-md);
    display: grid;
    grid-template-columns: auto 60% auto;
    width: 100%;
    border-width: var(--border-width-sm);
    height: 100%;
    gap: 10px;
    @include mobile {
      grid-template-columns: auto auto;
      grid-template-rows: auto auto;
      column-gap: 0px;
    }
  }

  &__user {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-block: fluid(20, 10);
    gap: fluid(30, 15);
    &-profileicon {
      max-width: 100px;
      width: 100px;
    }

    &-title {
      font-weight: 600;
      color: var(--color-accent);
      & span {
        display: block;
        text-align: center;
      }
    }
  }

  &__content {
    display: grid;
    grid-template-rows: 1fr max-content;
    max-width: 100%;
    width: 100%;
    border-inline: var(--border-card);
    @include mobile {
      grid-row: 2/3;
      border-inline: none;
    }
  }

  &__header {
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 10px;
    border-bottom: var(--border-card);

    &-btnwrapper {
      max-width: 100%;
      width: 100%;
      display: flex;
      justify-content: right;
    }

    &-button {
      max-width: 142px;
      width: 100%;
      font-weight: 500;
      font-size: 12px;
      padding-block: 3px;
    }

    &-title {
      color: var(--color-accent);
    }
  }

  &__skills {
    display: flex;
    align-items: center;
    padding-block: 10px;
    padding-inline: 13px;
    gap: 10px;
    flex-wrap: wrap;
  }

  &__managment {
    display: flex;
    flex-direction: column;
    padding: 10px 10px 10px 0;

    @include mobile {
      grid-row: 1/3;
      border-left: var(--border-card);
      padding: 10px 10px 10px 10px;
    }

    &-item {
      flex: 1 1 0;
    }

    & .likes-block {
      display: flex;
      justify-content: end;
    }

    & .more-block {
      display: flex;
      justify-content: end;
      &__content {
        display: flex;
        justify-content: center;
        align-items: center;
        @include square(30px);
        cursor: pointer;

        @include hover {
          color: var(--color-accent);
        }
      }
    }

    & .views-block {
      display: flex;
      justify-content: end;
      align-items: end;

      &__content {
        display: flex;
        align-items: center;
        gap: 10px;
      }
    }
  }
}
</style>
<script setup lang="ts">
import MoreIcon from '@/shared/ui/elements/icons/more-icon/MoreIcon.vue'
import { navigator } from '@/shared/utils/navigator'
import AppButton from '@shared/ui/elements/button/AppButton.vue'
import HearthIcon from '@shared/ui/elements/icons/hearth-icon/HearthIcon.vue'
import ProfileIcon from '@shared/ui/elements/icons/profilebar-icon/ProfileIcon.vue'
import AppSkill from '@shared/ui/elements/skill/AppSkill.vue'
import AppSubstrate from '@shared/ui/elements/substrate/AppSubstrate.vue'
import ViewsIcon from '@shared/ui/elements/views/ViewsIcon.vue'
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const isLiked = ref(false)

if (route.meta.personalName && route.meta.personalName === 'favoritesPage') {
  isLiked.value = true
}

const toggleLike = () => {
  isLiked.value = !isLiked.value
}
</script>
