<template>
<div>
    <app-header title="Books" tooltip="Add Book" @add="$router.push('/books/0')" @search = searchInBooks($event) ></app-header>
    <v-list three-line>

        <v-list-item v-for="(item,i) in books" :key="i">
            <v-list-item-avatar tile>
                <v-img :src="item.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.author.name }}</v-list-item-subtitle>
                <v-list-item-subtitle>Pages: {{ item.pages }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-icon>
                <div>
                    <v-menu offset-y>
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn v-bind="attrs" v-on="on" text>
                                <v-icon>mdi-dots-vertical</v-icon>
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item @click="$router.push('/books/' + item._id)">
                                <v-list-item-title>Edit</v-list-item-title>
                                <v-icon>mdi-pencil</v-icon>
                            </v-list-item>
                            <v-list-item @click="$emit('delete')">
                                <v-list-item-title>Delete</v-list-item-title>
                                <v-icon>mdi-delete</v-icon>

                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Issue</v-list-item-title>
                                <v-icon>mdi-plus</v-icon>

                            </v-list-item>
                            <v-list-item>
                                <v-list-item-title>Return</v-list-item-title>
                                <v-icon>mdi-keyboard-return</v-icon>

                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <p>Status</p>
                </div>
            </v-list-item-icon>
        </v-list-item>
    </v-list>

</div>
</template>

<script>
import BooksList from '@/data/books.json'
import AppHeader from '@/components/AppHeader.vue'

export default {
    data() {
        return {
            books: BooksList,

        }
    },
    components: {
        AppHeader
    },
    methods:{
        searchInBooks(searchText){
          if (typeof searchText === "string"){
            this.books = BooksList.filter(rec => rec.title.toLowerCase().includes(searchText.toLowerCase()))
          }
          else{
            this.books = BooksList
          }
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
<!-- <template>
    <div>
      <app-header title="Books"></app-header>
      <v-list>
        <v-list-item v-for="(item,i) in books" :key="i">
          <v-list-item-avatar tile>
            <v-img :src="item.img"></v-img>
          </v-list-item-avatar>
  
          <v-col
            cols="12"
            md="10"
            lg="8"
            class="d-flex flex-column justify-space-between"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
              <v-list-item-subtitle>{{ item.author.name }}</v-list-item-subtitle>
              <v-list-item-subtitle>Pages: {{ item.pages }}</v-list-item-subtitle>
            </v-list-item-content>
  
            <v-list-item-icon>
              <div>
                <v-menu offset-y>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text>
                      <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item>
                      <v-list-item-title>Edit</v-list-item-title>
                      <v-icon>mdi-pencil</v-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Delete</v-list-item-title>
                      <v-icon>mdi-delete</v-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Issue</v-list-item-title>
                      <v-icon>mdi-plus</v-icon>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-title>Return</v-list-item-title>
                      <v-icon>mdi-keyboard-return</v-icon>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <p>Status</p>
              </div>
            </v-list-item-icon>
          </v-col>
        </v-list-item>
      </v-list>
    </div>
  </template>
  
  <script>
  import BooksList from "@/data/books.json";
  import AppHeader from "@/components/AppHeader.vue";
  
  export default {
    data() {
      return {
        books: BooksList,
      };
    },
    components: {
      AppHeader,
    },
  };
  </script>
  
  <style lang="scss" scoped></style>
   -->