<template>
<div>
    <app-header title="Members"></app-header>
    <v-list>

        <v-list-item v-for="(item,i) in members" :key="i">
            <v-list-item-avatar tile>
                <v-img :src="item.img"></v-img>
            </v-list-item-avatar>

            <v-list-item-content>
                <v-list-item-title>{{ item.firstName }} {{ item.middleName }} {{ item.lastName }}</v-list-item-title>
                <!-- <v-list-item-subtitle>{{ item.author.name }}</v-list-item-subtitle>
                <v-list-item-subtitle>Pages: {{ item.pages }}</v-list-item-subtitle> -->
            </v-list-item-content>
        </v-list-item>
    </v-list>
</div>
</template>

<script>
import MemberList from '@/data/members.json'
import AppHeader from '@/components/AppHeader.vue'

export default {
    data() {
        return {
            members: MemberList,
            firstName: '',
            middleName: '',
            lastName: ''
        }
    },
    // computed: {
    //      fullName() {
    //        return item.firstName+' '+item.middleName+' '+item.lastName 
    //      }
    //     },
    components:{
        AppHeader
    }
}
</script>

<style lang="scss" scoped>

</style>
