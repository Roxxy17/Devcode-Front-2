<template>
  <div class="home">
    <div class="container">
      <input-contact-form title="Devcode Contact Manager" />
      <div class="contact-list__container">
        <!-- Display the ContactItem component for each contact in contactsData -->
        <contact-item
          v-for="contact in contactsData"
          :key="contact.id"
          :id="contact.id"
          :full_name="contact.full_name"
          :phone_number="contact.phone_number"
          :email="contact.email"
        />
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import InputContactForm from "@/components/InputContactForm.vue";
import ContactItem from "@/components/ContactItem.vue";

export default {
  name: "ContactManagerView",
  components: {
    InputContactForm,
    ContactItem,
  },
  computed: {
    // Use a computed property to get contacts from the Vuex store
    contactsData() {
      return this.$store.getters.contacts;
    },
  },
  mounted() {
    // Fetch contacts data when the component is mounted
    this.getAllContactsData();
  },
  methods: {
    async getAllContactsData() {
      // Dispatch the action to get all contacts from the Vuex store
      await this.$store.dispatch("getAllContactsData");
    },
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  justify-content: center;

  .container {
    padding: 18px;
    width: 50%;
    height: 100%;
    border: solid 4px #d4d4d4;
    background: #f4f4f4;

    .contact-list {
      &__container {
        margin-top: 48px;
        display: flex;
        flex-direction: column;
        align-items: center;
      }
    }
  }
}
</style>
