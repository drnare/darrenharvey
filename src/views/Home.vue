<template>
  <Page class="home" subtitle="Hello, I'm" title="Darren Harvey" isGrid>
    <router-link class="dh-card__link" v-for="page in pages" :to="page.href" :key="page.name">
      <Card :title="page.name" :icon="page.icon">
        <div>{{page.content}}</div>
      </Card>
    </router-link>
  </Page>
</template>

<script>
import Card from "../components/Card.vue";
import Page from "../components/Page.vue";

export default {
  name: "home",
  data() {
    return {
      pages: [
        {
          href: '/photography',
          name: 'Photography',
          content: 'Some snaps',
          icon: 'aperture',
        },
      ]
    };
  },
  components: {
    Card,
    Page
  }
};
</script>
