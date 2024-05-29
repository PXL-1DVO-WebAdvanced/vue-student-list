<template>
    <div>
        <h1>student View</h1>
        <input type="text" v-model="minId" />
        <select v-model="minId">
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
        </select>
        <div v-for="item in this.store.allStudents" :key="item.id">
            <student-card :student="item" @removestudent="studentRemoved" />
        </div>
    </div>
</template>

<script>
import StudentCard from '@/components/StudentCardComponent.vue';
import { useStudentStore } from '@/stores/student';

export default {
    name: 'studentView',
    components: {
        StudentCard,
    },
    created() {
        // Fetch students from the store
        this.store.fetchStudents();
    },
    methods: {
        studentRemoved(id) {
            alert('student removed ' + id);
        },
    },
    data() {
        return {
            store: useStudentStore(),
            minId: 0,
        };
    },
};
</script>

<style>
/* Add your custom styles here */
</style>