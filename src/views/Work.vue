<template>
  <Page
    class="work"
    :title="page.name"
    v-if="isCompanyPage"
  >
    <Card v-html="page.content.join('\n')"></Card>
  </Page>
  <Page
    class="work"
    title="Work"
    isGrid
    v-else
  >
    <router-link class="dh-card__link" v-for="page in pages" :to="'/work/' + page.id" :key="page.name">
      <Card :title="page.name">
        <div>{{page.blurb}}</div>
      </Card>
    </router-link>
  </Page>
</template>


<script>

import { work } from "../../data.json";

import Card from '../components/Card.vue';
import Page from '../components/Page.vue';

export default {
  name: 'work',
  data() {
    return {
      pages: work.pages,
      page: this.$route.params.companyId ? work.pages.filter(page => page.id === this.$route.params.companyId)[0] : null,
    }
  },
  computed: {
    isCompanyPage() {
      return this.page !== null;
    }
  },
  components: {
    Card,
    Page,
  },
};
</script>
