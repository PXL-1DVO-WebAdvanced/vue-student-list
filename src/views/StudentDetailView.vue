<template>
    <div class="student-detail">
        <h2>student details:</h2>
        <div v-if="student">
            <h3>{{ student.id }}</h3>
            <p>{{ student.name }}</p>
        </div>
        <div v-else>
            <p>student {{ parId }} not found</p>
        </div>
    </div>
</template>

<script>
import { useStudentStore } from '@/stores/student';

export default {
    computed: {
        student() {      
            return this.store.getStudentById(parseInt(this.$route.params.id));
        }
    },
    data() {
        return {
            store: useStudentStore(),
        };
    },
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>