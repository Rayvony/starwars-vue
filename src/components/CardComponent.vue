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