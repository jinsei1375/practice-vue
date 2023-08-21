<script setup lang="ts">
import { reactive, provide } from 'vue';
import { RouterView } from 'vue-router';
import type { Member } from '@/interfaces';

const memberList = new Map<number, Member>();
memberList.set(33456, {id: 33456, name: "田中太郎", email: "aaa@example.com", points: 35, note: "初回入会特典あり"});
memberList.set(44787, {id: 44787, name: "鈴木じろう", email: "bbb@example.com", points: 35, note: "初回入会特典あり"});

provide("memberList", reactive(memberList));
</script>

<template>
  <header>
    <h1>Vue Routerサンプル</h1>
  </header>
  <main>
    <RouterView/>
  </main>
</template>

<style>
  #app {
    display: block;
  }
  main {
    border: 1px solid blue;
    padding: 10px;
  }
  #breadcrumb ul li {
    display: inline;
    list-style-type: none;
  }
  #breadcrumb { 
    margin-left: 0px;
  }
  #breadcrumb ul {
    padding-left: 0px;
  }
  #breadcrumb ul .current {
    color: red;
  }
  #breadcrumb ul li::before {
    content: " > ";
  }
  #breadcrumb ul li:first-child::before {
    content: none;
  }
</style>