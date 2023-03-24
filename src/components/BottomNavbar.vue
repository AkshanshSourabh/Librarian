<template>
    <v-bottom-navigation app>
    <v-btn value="recent" @click= "$router.push('/books')">
      <span>Books</span>

      <v-icon>mdi-bookshelf</v-icon>
    </v-btn>

    <v-btn value="favorites" @click= "$router.push('/')">
      <span>Authors</span>

      <v-icon>mdi-badge-account</v-icon>
    </v-btn>

    <v-btn value="nearby">
      <span>Members</span>

      <v-icon>mdi-account</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>