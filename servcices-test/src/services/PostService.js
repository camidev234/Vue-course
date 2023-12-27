// when you use a API rest, is best create a class to manage the service

// in this case this class manage the PostService, that is to say, we can create all functions like, get, post, put, etc..

import { ref } from "vue";

class PostService {

    // this service has all posts 
    #posts;
    // also has a post
    #post;

    constructor() {
        // this posts are a reactive array
        this.#posts = ref([]);
        // this post is reactive too
        this.#post = ref({})
    }

    getPosts() {
        // get the value of the this.posts that is reactive
        return this.#posts;
    }

    getPost() {
        return this.#post;
    }

    // fetch all is a function to get the data of the endpoint
    async fetchAll() {
        try {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            // the response returns a promise with the data
            const response = await fetch(url);
            // after this response is converted to json
            const json = await response.json();
            // finally to the array of posts is added the data of the json
            this.#posts.value = await json;

            // const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
            // this.#posts.value = await response.data;
            
        } catch (error) {
            console.log(error);
        }
    }

    async fetchById(id) {
        try {
            const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
            const response = await fetch(url);
            const json = await response.json();
            this.#post.value = await json;   
        } catch (error) {
            console.log(error);
        }
    }
}

export default PostService