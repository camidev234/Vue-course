<template>
    <div class="container">
        <PostDetail v-for="elem in info" :key="elem.title" :title="elem.title" :content="elem.content" @sayHi="showAlert"/>
    </div>
</template>

<script lang="ts" setup>
    import PostDetail from './PostDetail.vue';

    interface Post {
        title: string,
        content: string
    }



    let info:Array<Post> = [
        {
            title: 'This is the post 1', 
            content: 'Example text one'
        },
        {
            title: 'This is the post two',
            content: 'Example text two in the post'
        },
        {
            title: 'Title in the post 3',
            content: 'Content in the post 3'
        },
        {
            title: 'Title in post 4',
            content: 'Example post 4'
        },
        {
            title: 'Post 5',
            content: 'Content in the post five'
        }
    ];

    const showAlert = (msg:string) => {
        alert(msg)
    }

</script>

<style scoped>
    .container {
        display: flex;
        justify-content: space-around;
    }

</style>