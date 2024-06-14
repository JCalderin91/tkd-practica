<script setup>
import { ref, onMounted } from 'vue';
import Button from '@components/atoms/Button.vue';
import Typography from '@components/atoms/Typography.vue';
import Card from '@components/molecules/Card.vue';
import { getRandomExercise } from '@helpers';
const techniqueOne = ref('-')
const techniqueTwo = ref('-')


const techniqueHandleClick = () => {
    techniqueOne.value = getRandomExercise()
    techniqueTwo.value = getRandomExercise()
}

onMounted(() => {
    techniqueHandleClick()
})

</script>

<template>
    <Card>
        <template #header>
            <Typography type="title">Practica los ejercicios</Typography>
        </template>
        <template #content>
            <Typography>{{ techniqueOne }}</Typography>
            <Typography>{{ techniqueTwo }}</Typography>
        </template>
        <template #actions>
            <Button @click="techniqueHandleClick">Siguiente</Button>
        </template>
    </Card>
</template>