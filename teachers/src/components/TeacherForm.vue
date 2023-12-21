<template>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
        <section class="container">
    <section class="createTeacher">
        <h3>Add Teacher</h3>
        <div class="contForm">
        <div>
            <Label>Name:</Label> <input type="text" v-model="teacher.teacherName">
        </div>
        <div>
            <Label>Last name:</Label> <input type="text" v-model="teacher.surname">
        </div>
        <div>
            <Label>Document:</Label> <input type="text" v-model="teacher.document">
        </div>
        <div>
            <Label>Subjects:</Label> 
            <input type="text" v-model="subject"><br><br>
            <button @click="addSubject">Add subject</button>
        </div>
        <div>
            <span v-for="(subj, index) in teacher.subjects" :key="index">{{ subj }}, </span>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="fullDocumentation" v-model="teacher.doc">
            <label for="fullDocumentation">Full Documentation</label>
        </div>
        <button @click="addTeacher">Add Teacher</button>
        </div>
    </section>

    <section class="teachers">
        <h3>All Teachers: {{ totalTeachers }}</h3>

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Surname</th>
                    <th>Dni</th>
                    <th>Subjects</th>
                    <th>Documentation</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="elem in teachers" :key="elem.document">
                    <td>{{ elem.teacherName }}</td>
                    <td>{{ elem.surname }}</td>
                    <td>{{ elem.document }}</td>
                    <td>
                        <ul>
                            <li v-for="(item, index) in elem.subjects" :key="index">{{ item }}</li>
                        </ul>
                    </td>
                    <td v-if="elem.doc == false">No checked</td>
                    <td v-else>Checked</td>
                    <td>
                        <button @click="deleteTeacher(elem)">Delete <i class="bi bi-trash-fill"></i></button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</section>
</template>

<script lang="ts" setup>
    import { Ref, ref, computed } from 'vue';

    interface Iteacher {
        teacherName: string,
        surname: string,
        document: string,
        subjects: Array<string>,
        doc: boolean
    }

    let teacher:Ref<Iteacher> = ref({
        teacherName : '',
        surname: '',
        document: '',
        subjects: [],
        doc: false
    })



    let teachers:Ref<Array<Iteacher>> = ref([]);

    let subject:Ref<string> = ref('');

    const addSubject = () => {
        teacher.value.subjects.push(subject.value);
        subject.value = '';
    }

    const addTeacher = () => {
        teachers.value.push({
            teacherName: teacher.value.teacherName,
            surname: teacher.value.surname,
            document: teacher.value.document,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc
        });

        teacher.value.teacherName = '';
        teacher.value.surname = '';
        teacher.value.document = '';
        teacher.value.subjects = [];
        teacher.value.doc = false;
    }

    const totalTeachers = computed(() => teachers.value.length);


    const deleteTeacher = (teacher: { document: string }) => {
        const foundTeacherIndex = teachers.value.findIndex(
            (element) => teacher.document === element.document
        );

        if (foundTeacherIndex !== -1) {
            teachers.value.splice(foundTeacherIndex, 1);
        }
    };
</script>

<style scoped>
    .container {
        width: 100%;
        height: 3000px;
        background-color: rgb(20, 20, 20);
    }

    .createTeacher {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;

    }

    .contForm {
    width: 45%;
    background-color: #333;
    color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    margin-bottom: 20px;
}

.createTeacher h3 {
    margin-top: 40px;
    margin-bottom: 20px;
    text-align: center;
}

.createTeacher div {
    margin-bottom: 15px;
}

.createTeacher Label {
    display: block;
    margin-bottom: 5px;
}

.createTeacher input {
    width: 100%;
    padding: 8px;
    border: 1px solid #555;
    border-radius: 4px;
    background-color: #444;
    color: #fff;
}

.createTeacher button {
    padding: 8px 15px;
    border: 1px solid white;
    border-radius: 4px;
    background-color: #033679;
    color: #fff;
    cursor: pointer;
}

.checkbox-container {
    display: flex;
    align-items: center;
  }

  .checkbox-container input {
    margin-right: 5px; /* Espaciado entre el checkbox y el texto */
  }

  .checkbox-container label {
    color: #fff;
    margin-bottom: 0; /* Ajusta según sea necesario para reducir el espacio */ margin-bottom: 0; /* Ajusta según sea necesario para reducir el espacio */
}


.teachers {
    width: 83%;
    margin: auto;
    margin-top: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 10px;
  }

  th, td {
    padding: 12px;
    text-align: left;
    border-bottom: 1px solid #ddd;
    color: #fff;
  }

  th {
    background-color: #333;
  }

  tr:hover {
    background-color: #1b1b1b;
  }

  ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
  }

  li {
    margin-bottom: 5px;
    color: #fff;
  }

  button {
    padding: 8px 15px;
    border: 1px solid #fff;
    border-radius: 4px;
    background-color: #033679;
    color: #fff;
    cursor: pointer;
  }

  button:hover {
    background-color: #03225c;
  }

  .bi-trash-fill {
    margin-right: 5px;
  }


</style>