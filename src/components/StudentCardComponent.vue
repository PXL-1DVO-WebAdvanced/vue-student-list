<template>
    <div class="student-card">
        <h2 :class="{ red: student.id % 2 == 0}">{{ student.name }}</h2>
        <p>{{ student.id }}</p>
        <!-- <p>Price: {{ student.price }}</p> -->
        <!-- <button @click="remove()">Toon naam</button>-->
        <button @click="addToCart()">Add to Cart</button> 
        <button @click="gotostudent()">Details / More info</button>
        
    </div>
</template>

<script>
import { useStudentStore } from '@/stores/student';
export default {
    props: {
        student: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            store: useStudentStore(),
        }
    },
    emits: ['removestudent'],
    methods: {  
        gotostudent() {
            this.$router.push({ name: 'studentDetail', params: { id: this.student.id } });
        },
        remove(id) {
            // this.$emit('removestudent', this.student.id);
            alert(this.student.name);
        },
    }
}
</script>

<style scoped>
.student-card {
    border: 1px solid #ccc;
    padding: 10px;
    margin: 10px;
}
button {
    background-color: red;
    color: white;
    border: none;
    padding: 5px 10px;
    cursor: pointer;
    margin: 10px;
}
.red {
    color: red;
}
</style>