<template>
  <h1>
    NotFound: 您当前的路径 <span>{{ $route.params.pathMatch }}</span> 不正确,
    请输入正确的路径!
  </h1>
</template>

<style>
span {
  color: red;
}
</style>
