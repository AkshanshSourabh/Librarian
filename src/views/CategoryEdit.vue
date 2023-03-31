<template>
    <div>
        <h1>{{ id != 0 ? "Edit Category" : "Add Category" }}</h1>
        <v-form>
            <v-text-field label="Title" v-model="category.title"></v-text-field>
            <v-textarea label ="Description" v-model="category.description"></v-textarea>
        </v-form>
    </div>
</template>

<script>
    import IssuesList from '@/data/issues.json'
    export default {
        data() {
            return{
                id: 0,
                category: {},
            }
        },
        mounted(){
            this.id = this.$route.params.id;
            this.category = IssuesList.find(rec => rec._id == this.id)

        },
    }
</script>

<style lang="scss" scoped>

</style>