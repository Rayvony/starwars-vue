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
  max-width: 300px;
  min-height: 100px;
  height: auto;
  border-radius: 5px;
}

.card img:hover {
  filter: grayscale(0%);
  cursor: pointer;
}

.imgcontainer {
  height: 430px;
  display: flex;
  align-items: center;
}

.card{
  padding: 10px;
  height: 520px;
  background-color: yellow;
  border-radius: 5px;
  transition: all 0.05s;
  display: flex;
  align-items: center;
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