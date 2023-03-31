<template>
<div>
    <app-header :title="mytitle" @add="$router.push('/authors/0')" @search ="searchInAuthors($event)"></app-header>
    <v-list>
        <v-list-item v-for="(item,i) in authors" :key="i">

            <v-list-item-content>
                <v-list-item-title v-text="item.name"></v-list-item-title>
            </v-list-item-content>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list>
                            <v-list-item @click="$router.push('/authors/' + item._id)">
                                <v-list-item-title>Edit</v-list-item-title>
                                <v-icon>mdi-pencil</v-icon>
                            </v-list-item>
                            <v-list-item @click="$emit('delete')">
                                <v-list-item-title>Delete</v-list-item-title>
                                <v-icon>mdi-delete</v-icon>
                            </v-list-item>                       
                        </v-list>
                </v-list>
            </v-menu>
        </v-list-item>
    </v-list>
</div>
</template>

<script>
import AuthorsList from '@/data/authors.json'
import AppHeader from '@/components/AppHeader.vue'

export default {
    data() {
        return {
            authors: AuthorsList,
            mytitle: 'Authors'

        }
    },
    components: {
        AppHeader
    },
    methods:{
        searchInAuthors(searchText){
          if (typeof searchText === "string"){
            this.authors = AuthorsList.filter(rec => rec.name.toLowerCase().includes(searchText.toLowerCase()))
          }
          else{
            this.authors = AuthorsList
          }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
