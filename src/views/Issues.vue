<template>
<div>
    <app-header :title="mytitle"></app-header>
    <v-btn text>Issued</v-btn>
    <v-btn text>Requested</v-btn>
    <v-list>
        <v-list-item v-for="(item,i) in issues" :key="i">

            <v-list-item-content>
                <v-list-item-title v-text="item.returnDate"></v-list-item-title>
            </v-list-item-content>
            <v-divider vertical></v-divider> 
            
            <v-list-item-content>
                <v-list-item-title v-text="item.book.title"></v-list-item-title>
                <v-list-item-subtitle v-text="item.member.name"></v-list-item-subtitle>
                <v-list-item-subtitle v-text="item.issueDate"></v-list-item-subtitle>
            </v-list-item-content>

            <v-menu offset-y>
                <template v-slot:activator="{ on, attrs }">
                    <v-btn v-bind="attrs" v-on="on" text>
                        <v-icon>mdi-dots-vertical</v-icon>
                    </v-btn>
                </template>
                <v-list>
                    <v-list>
                        <v-list-item>
                            <v-list-item-title>Return</v-list-item-title>
                            <v-icon>mdi-keyboard-return</v-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Issue</v-list-item-title>
                            <v-icon>mdi-plus</v-icon>
                        </v-list-item>
                        <v-list-item>
                            <v-list-item-title>Notify</v-list-item-title>
                            <v-icon>mdi-plus</v-icon>
                        </v-list-item>
                    </v-list>
                </v-list>
            </v-menu>
        </v-list-item>
    </v-list>
</div>
</template>

<script>
import IssuesList from '@/data/issues.json'
import AppHeader from '@/components/AppHeader.vue'
export default {
    data() {
        return {
            issues: IssuesList,
            mytitle: 'Issued Books'
        }
    },
    components: {
        AppHeader
    }
}
</script>

<style lang="scss" scoped>
.issue {
    padding: 1rem
}
</style>
