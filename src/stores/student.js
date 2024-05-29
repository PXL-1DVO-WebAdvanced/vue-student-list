import { defineStore } from 'pinia';

import data from '@/data/students.json'

export const useStudentStore = defineStore('students', {
    state: () => ({
        students: null,
    }),
    getters: {
        allStudents: (state) => {
            return state.students
        },
        getPopularStudents: (state) => {
            
            return state.students.filter((student) => student.popular).slice(0, 3)
        },
        getStudentById: (state) => {
            if (!state.students) 
                return null
            return (id) => state.students.find(p => p.id == id)
        },
    },
    actions: {
        fetchStudents() {
            //get data from api
            this.students = data
        }
    },
});
