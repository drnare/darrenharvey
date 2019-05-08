<template>
  <Page class="contact" title="Get in touch">
    <Card v-html="content"></Card>
  </Page>
</template>


<script>
import { contact } from "../../data.json";
import Card from "../components/Card.vue";
import Page from "../components/Page.vue";

export default {
  name: "contact",
  data() {
    return { content: contact.content.join("\n") };
  },
  components: {
    Card,
    Page
  }
};
</script>
