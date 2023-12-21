<template>
    <!-- Import the CDN to use the icons -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
        <section class="container">
    <section class="createTeacher">
        <h3>Add Teacher</h3>
        <div class="contForm">
        <!-- In each input the value is assigned to the object in the logic
        in this case is to teacher and his properties for example
        teacher.teacherName = input
        -->
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
                <!-- Since the teacher has many subjects, the value is assigned to the variable subject -->
                <input type="text" v-model="subject"><br><br>
                <!-- When the button is clicked, subject is add to arrays of subjects who belongs to teacher -->
            <button @click="addSubject">Add subject</button>
        </div>
        <div>
            <!-- When the button Add subject is click, the subject is show in the span -->
            <!-- Itering the teacher subjects, use the key index cause each subject has not a primary key or unique data  -->
            <span v-for="(subj, index) in teacher.subjects" :key="index">{{ subj }}, </span>
        </div>
        <div class="checkbox-container">
            <input type="checkbox" id="fullDocumentation" v-model="teacher.doc">
            <label for="fullDocumentation">Full Documentation</label>
        </div>
        <!-- Creating a new teacher and add this teacher om the teachers array -->
        <button @click="addTeacher">Add Teacher</button>
        </div>
    </section>

    <section class="teachers">
        <!-- Show the teachers -->
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
                <!-- Itering the teachers using like pk the document of each element -->
                <tr v-for="elem in teachers" :key="elem.document">
                    <td>{{ elem.teacherName }}</td>
                    <td>{{ elem.surname }}</td>
                    <td>{{ elem.document }}</td>
                    <td>
                        <ul>
                            <!-- Showing the teacher's subjects -->
                            <li v-for="(item, index) in elem.subjects" :key="index">{{ item }}</li>
                        </ul>
                    </td>
                    <!-- Validate the status of the checkbox -->
                    <td v-if="elem.doc == false">No checked</td>
                    <td v-else>Checked</td>
                    <td>
                        <!-- Using a function to delete a teacher from the list and from the array
                        this function using the elem to find the element to delete -->
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

    // creating the interfaces to typing the data of each object

    // in this case is the data of the teacher object
    interface Iteacher {
        teacherName: string,
        surname: string,
        document: string,
        subjects: Array<string>,
        doc: boolean
    }

    // here's the object that uses the previous interface. 
    // it's a Ref of Iteacher.
    let teacher:Ref<Iteacher> = ref({
        // each property has a the value of the input that has the v-model using the same property
        teacherName : '',
        surname: '',
        document: '',
        subjects: [],
        doc: false
    })


    // the array of teachers is a Ref to Array and use the interface Iteacher
    let teachers:Ref<Array<Iteacher>> = ref([]);

    // the subject has a value of the input that use the varaible in v-model
    let subject:Ref<string> = ref('');

    // when the button is clicked
    const addSubject = () => {
        // the subject is added to actual value in the object of teacher and has the actual value of the input 
        // subject
        teacher.value.subjects.push(subject.value);
        // after, the value of the subject is void cause the user can be add another subject in his array of subjects
        subject.value = '';
    }

    // when the add teacher is active:
    const addTeacher = () => {
        // at current value of the array of teachers, is added the new teacher
        teachers.value.push({
            // this teacher has the properties and the value of these is the actual value of the inputs because
            // this value is assigned to properties in the object teacher 
            teacherName: teacher.value.teacherName,
            surname: teacher.value.surname,
            document: teacher.value.document,
            subjects: teacher.value.subjects,
            doc: teacher.value.doc
        });

        // after the value of each propertie is reset and the user can create a new teacher
        teacher.value.teacherName = '';
        teacher.value.surname = '';
        teacher.value.document = '';
        teacher.value.subjects = [];
        teacher.value.doc = false;
    }

    const totalTeachers = computed(() => teachers.value.length);


    // function to delete a teacher

    // required a teacher, specify his document to find the element in the array
    const deleteTeacher = (teacher: { document: string }) => {
        // find the index in the array of teachers when the document is similar to the parameter {teacher}
        const foundTeacherIndex = teachers.value.findIndex(
            (element) => teacher.document === element.document
        );

        // if the index not is the last element in the array of teachers

        if (foundTeacherIndex !== -1) {
            // that element is removed from the current value in array of teachers
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