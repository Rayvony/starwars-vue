<template>
    <div class="card">
        <div class="card-body">
        <slot></slot>
        </div>
    </div>
</template>

<script setup>
const card = {
  name: 'CardComponent'
};
</script>

<style>
.card img {
  filter: grayscale(100%);
  width: 200px;
  height: auto;
  border-radius: 5px;
}

.card img:hover {
  filter: grayscale(0%);
  cursor: pointer;
}

.card{
  padding: 10px;
  background-color: yellow;
  border-radius: 5px;
  transition: all 0.05s;
  cursor: pointer;
}

.card h3{
  color: black;
  user-select: none;
}

.card:hover{
  transform: scale(1.05);
}

a{
  text-decoration: none;
}

</style>