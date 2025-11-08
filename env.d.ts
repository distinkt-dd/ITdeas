/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

// Объявления для модулей
declare module '@shared/ui/layouts/*'
declare module '@pages/*'
declare module '@router/*'
declare module '@/app/styles/*'
declare module '@shared/*'
declare module '@widgets/*'
declare module '@features/**'
