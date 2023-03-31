<template>
    <div>
        <h1>{{ id != 0 ? "Edit Author" : "Add Author" }}</h1>
       <v-form>
            <v-text-field label="Namr" v-model="author.name"></v-text-field>
            <!-- <v-textarea label ="Description" v-model="book.description"></v-textarea> -->
       </v-form>
    </div>
</template>

<script>
    import AuthorsList from '@/data/books.json'
    export default {
        data() {
            return {
                id: 0,
                author: {},

            }
        },
        mounted () {
            this.id = this.$route.params.id;
            this.author = AuthorsList.find(rec => rec._id == this.id)
        },        
    }
</script>

<style lang="scss" scoped>

</style>