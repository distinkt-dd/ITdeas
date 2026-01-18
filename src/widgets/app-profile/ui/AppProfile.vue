<template>
  <AppSubstrate class="page-profile">
    <div class="page-profile__column">
      <div class="page-profile__user-info user-info">
        <div class="user-info__row user-info__personal">
          <div class="user-info__desc desc">
            <div class="desc__iconbox">
              <ProfileIcon class="desc__icon" />
            </div>
            <p class="desc__text">Демаков Дмитрий Максимович</p>
            <p class="desc__text">Пол: <span>Мужской</span></p>
            <p class="desc__text">Специальность: <span>Frontend - разработчик</span></p>
            <p class="desc__text">Часовой пояс: <span>UTC +05:00 Россия/Екатеринбург</span></p>
            <p class="desc__text">Страна: <span>Россия</span></p>
            <p class="desc__text">Город: <span>Нижний Тагил</span></p>
          </div>
          <div class="user-info__buttons user-info__personal-buttons">
            <AppButton class="button-gradient user-info__button"> Редактировать профиль </AppButton>
          </div>
        </div>
        <div class="user-info__row user-info__parameters">
          <div class="user-info__desc desc">
            <h2 class="h1 desc__title">Параметры профиля</h2>
            <p class="desc__text">Электронная почта: <span>adm***@i**.ru</span></p>
            <p class="desc__text">Логин: <span>distinkt-dd</span></p>
            <p class="desc__text">Телефон: <span>+7 **** 22 ****</span></p>
          </div>
          <div class="user-info__buttons user-info__parameters-buttons">
            <AppButton class="button-gradient user-info__button"> Поменять пароль </AppButton>
            <AppButton class="button-gradient user-info__button"> Способы оплаты </AppButton>
          </div>
        </div>
        <div class="user-info__global-buttons">
          <AppButton class="button-danger-transparent" @click="navigator(router, '/auth')">
            Выйти с аккаунта</AppButton
          >
          <AppButton class="button-danger" @click="navigator(router, '/registration')">
            Удалить аккаунт</AppButton
          >
        </div>
      </div>
    </div>
    <div class="page-profile__column">
      <div class="page-profile__about-user about-user">
        <div class="about-user__text">
          <h2 class="h1 about-user__title">О себе</h2>
          <div class="about-user__subtitles">
            <p class="about-user__subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
              nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
              ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
              ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
              sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
              augue velit cursus nunc,
            </p>
            <p class="about-user__subtitle">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget
              dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes,
              nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
              quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
              nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae,
              justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus.
              Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in,
              viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet.
              Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
              ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget
              condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum.
              Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et
              ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis
              ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris
              sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales,
              augue velit cursus nunc,
            </p>
          </div>
          <AppButton class="button-gradient"> Редактировать информацию о себе </AppButton>
        </div>
      </div>
    </div>
  </AppSubstrate>
</template>

<script lang="ts" setup>
import AppButton from '@/shared/ui/elements/button/AppButton.vue'
import ProfileIcon from '@/shared/ui/elements/icons/profilebar-icon/ProfileIcon.vue'
import AppSubstrate from '@/shared/ui/elements/substrate/AppSubstrate.vue'
import { useRouter } from 'vue-router'
import { navigator } from '@/shared/utils/navigator'

const router = useRouter()
</script>

<style lang="scss" scoped>
.page-profile {
  display: flex;
  justify-content: space-between;
  grid-column: 1/-1;
  grid-row: 2 / auto;
  margin-right: 10px;
  border-radius: var(--border-radius-lg);
  border: solid var(--color-border-main) var(--border-width-sm);
  background-color: var(--background-elements);
  @include mobile {
    flex-direction: column;
  }
  &__column {
    flex: 1 1 0;

    &:first-child {
      border-right: solid var(--color-border-main) var(--border-width-sm);
      @include mobile {
        border-right: none;
      }
    }

    &:last-child {
      @include mobile {
        border-top: solid var(--color-border-main) var(--border-width-sm);
      }
    }
  }
}

.about-user {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: fluid(20, 10);

  &__text {
    display: flex;
    flex-direction: column;
    gap: fluid(20, 10);
  }

  &__subtitles {
    display: flex;
    flex-direction: column;
    row-gap: fluid(15, 10);
  }

  &__subtitle {
    @include fluid-text(16, 14);

    &:last-child {
      @include mobile {
        display: none;
      }
    }
  }
}

.user-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  &__global-buttons {
    display: flex;
    gap: fluid(20, 10);
    padding: 10px;
    justify-content: flex-end;
  }

  &__buttons {
    display: flex;
    flex-direction: column;
    margin-top: fluid(20, 10);
    gap: fluid(10, 5);
  }

  &__personal {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    &-buttons {
      align-items: flex-end;
    }
  }

  &__parameters {
    &-buttons {
      display: flex;
    }
  }

  &__row {
    flex: 1 1 0;
    padding: fluid(20, 10);
    &:first-child {
      border-bottom: solid var(--color-border-main) var(--border-width-sm);
    }
  }

  &__button {
    width: 100%;
  }
}

.desc {
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  &__icon {
    max-width: 100px;
    width: 100%;
  }

  &__text {
    font-weight: 700;
    @include fluid-text(20, 14);

    & span {
      color: var(--color-accent);
      font-weight: 400;
    }
  }
}
</style>
