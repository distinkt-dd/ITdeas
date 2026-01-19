<script setup lang="ts">
import AppSubstrate from '@/shared/ui/elements/substrate/AppSubstrate.vue'
import AppSkill from '@/shared/ui/elements/skill/AppSkill.vue'
import ProfileIcon from '@/shared/ui/elements/icons/profilebar-icon/ProfileIcon.vue'
import ViewsIcon from '@/shared/ui/elements/views/ViewsIcon.vue'
import AppButton from '@/shared/ui/elements/button/AppButton.vue'
import CrossIcon from '@/shared/ui/elements/icons/cross-icon/CrossIcon.vue'
import { navigator } from '@/shared/utils/navigator'
import { useRouter } from 'vue-router'

const router = useRouter()
</script>

<template>
  <AppSubstrate class="card page-full-card">
    <AppButton class="card-cross" @click="navigator(router, '/')">
      <CrossIcon />
    </AppButton>
    <div class="card__column card-info">
      <div class="card__author card__row">
        <ProfileIcon class="card__author-icon" />
        <h2 class="h2 card__author-name">Дмитрий Демаков</h2>
      </div>
      <div class="card__skills card__row">
        <AppSkill> html </AppSkill>
        <AppSkill> css </AppSkill>
        <AppSkill> scss </AppSkill>
        <AppSkill> js </AppSkill>
        <AppSkill> vite </AppSkill>
        <AppSkill> vue3 </AppSkill>
      </div>
    </div>
    <div class="card__column">
      <div class="card__description">
        <div class="card__description-text">
          <h3 class="card__description-title">Описание идей</h3>
          <p class="card__description-subtitle">
            Разработка приложения ITdeas. Суть приложения в том, что авторы идей IT проектов
            выкладывают свои предложения на платформе. Все желающие поучаствовать в проекте могут
            сделать отклик. Авторы могут связаться с желающими через соц-сети или внутренний
            мессенджер...
          </p>
          <p class="card__description-subtitle">
            Разработка приложения ITdeas. Суть приложения в том, что авторы идей IT проектов
            выкладывают свои предложения на платформе. Все желающие поучаствовать в проекте могут
            сделать отклик. Авторы могут связаться с желающими через соц-сети или внутренний
            мессенджер... Разработка приложения ITdeas. Суть приложения в том, что авторы идей IT
            проектов выкладывают свои предложения на платформе. Все желающие поучаствовать в проекте
            могут сделать отклик. Авторы могут связаться с желающими через соц-сети или внутренний
            мессенджер...
          </p>
          <p class="card__description-subtitle">
            Разработка приложения ITdeas. Суть приложения в том, что авторы идей IT проектов
            выкладывают свои предложения на платформе. Все желающие поучаствовать в проекте могут
            сделать отклик. Авторы могут связаться с желающими через соц-сети или внутренний
            мессенджер... Разработка приложения ITdeas. Суть приложения в том, что авторы идей IT
            проектов выкладывают свои предложения на платформе. Все желающие поучаствовать в проекте
            могут сделать отклик. Авторы могут связаться с желающими через соц-сети или внутренний
            мессенджер...
          </p>
          <div class="card__description-sett sett">
            <p><span>Тип проекта: </span>учебный</p>
            <p><span>Платформы </span>Desktop</p>
            <p><span>Теги: </span>#Frontend, #backend, #startup, #design, #itdeas</p>
          </div>
        </div>

        <div class="card__description-managment managment">
          <div class="managment__views">
            <ViewsIcon />
            <p class="managment__views-counter">3000</p>
          </div>
          <div class="managment__response">
            <p class="managment__response-text">Уже откликнулось: 200</p>
          </div>
          <div class="managment__btnbox">
            <AppButton class="managment__button button-gradient"> Откликнуться </AppButton>
          </div>
        </div>
      </div>
    </div>
  </AppSubstrate>
</template>

<style lang="scss" scoped>
.card {
  position: relative;
  border-radius: var(--border-radius-md);
  height: 100%;
  display: flex;

  &-cross {
    position: absolute;
    top: 0;
    right: 0;
    & svg {
      max-width: fluid(44, 24);
    }
  }

  @include mobile {
    flex-direction: column;
  }

  &-info {
    max-width: 550px;
    width: 100%;
    display: flex;
    flex-direction: column;
    border-right: solid var(--color-border-main) 2px;
    @include mobile {
      max-width: 100%;
      width: 100%;
      border-right: none;
      border-bottom: solid var(--color-border-main) 2px;
    }
  }

  &__column {
    padding: fluid(20, 10);

    &:first-child {
      border-right: solid var(--color-border-main) 2px !important;
      @include mobile {
        border-right: none;
        border-bottom: solid var(--color-border-main) 2px;
      }
    }
  }

  &__row {
    padding: 20px;

    &:last-child {
      border-top: solid var(--color-border-main) 2px;
    }
  }

  &__author {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: fluid(30, 20);
    &-name {
      color: var(--color-accent);
    }
    &-icon {
      max-width: 100px;
      width: 100%;
    }
  }

  &__skills {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
    @include mobile {
      justify-content: center;
    }
  }

  &__description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    &-text {
      display: flex;
      flex-direction: column;
      gap: fluid(15, 10);
    }
    &-title {
      color: var(--color-accent);
    }
  }

  .sett {
    display: flex;
    flex-direction: column;
    gap: fluid(15, 10);

    & p {
      margin: 0;
    }

    & span {
      color: var(--color-accent);
    }
  }

  .managment {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 10px;

    &__views {
      display: flex;
      align-items: center;
      gap: 10px;
    }

    &__btnbox {
      max-width: 142px;
      width: 100%;
    }

    &__button {
      max-width: 100%;
      width: 100%;
    }
  }
}
</style>
