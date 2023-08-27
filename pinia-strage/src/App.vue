

<template>
  <header>
    <h1>Piniaサンプル</h1>
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