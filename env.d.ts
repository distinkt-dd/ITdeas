/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<object, object, unknown>
  export default component
}

// Объявления для модулей
declare module '@layouts/*'
declare module '@components/*'
declare module '@pages/*'
declare module '@router/*'
declare module '@styles/*'
declare module '@shared/*'
