<script setup>
import Button from '@components/atoms/Button.vue';
import Typography from '@components/atoms/Typography.vue';
import Card from '@components/molecules/Card.vue';
import { getRandomVocabulary } from '@helpers';
import { ref, onMounted } from 'vue';


const vocabulary = ref('-')

const vocabularyHandleClick = () => {
    vocabulary.value = getRandomVocabulary()
}

onMounted(() => {
    vocabularyHandleClick()
})
</script>

<template>
    <Card>
        <template #header>
            <Typography type="title">Practica el vocabulario</Typography>
        </template>
        <template #content>
            <Typography type="body-sm">{{ vocabulary[0] }}</Typography>
            <Typography>{{ vocabulary[1] }}</Typography>
        </template>
        <template #actions>
            <Button @click="vocabularyHandleClick">Siguiente</Button>
        </template>
    </Card>
</template>