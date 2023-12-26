<template>
  <div v-for="user in users.users" :key="user.id">
      <UserDetail :user="user" :name="user.name"/>
  </div>
</template>

<script lang="ts" setup>
    import UserDetail from './UserDetail.vue';

    interface User {
      id: number;
      name: string;
      email: string;
      role: {
        id: number;
        name: string;
      };
    }

    

    const users: { users: Array<User> } = {
  "users": [
    {
      "id": 1,
      "name": "John Doe",
      "email": "john@example.com",
      "role": {
        "id": 1,
        "name": "Admin"
      }
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "email": "jane@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    },
    {
      "id": 3,
      "name": "Alice Johnson",
      "email": "alice@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    },
    {
      "id": 4,
      "name": "Bob Brown",
      "email": "bob@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    },
    {
      "id": 5,
      "name": "Eva White",
      "email": "eva@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    },
    {
      "id": 6,
      "name": "Charlie Black",
      "email": "charlie@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    },
    {
      "id": 7,
      "name": "Grace Wilson",
      "email": "grace@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    },
    {
      "id": 8,
      "name": "David Lee",
      "email": "david@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    },
    {
      "id": 9,
      "name": "Fiona Brown",
      "email": "fiona@example.com",
      "role": {
        "id": 2,
        "name": "Selector"
      }
    },
    {
      "id": 10,
      "name": "George Miller",
      "email": "george@example.com",
      "role": {
        "id": 2,
        "name": "User"
      }
    }
  ]
}

</script>

<style scoped>
</style>