<template>
  <div>
    <div class="d-flex justify-center">
        <page-header title="Get in Touch"/>
    </div>
    <ContactLinks />
  </div>
</template>

<script>
import ContactLinks from '../components/contact/ContactLinks'
import PageHeader from '../components/shared/PageHeader'
export default {
  components: {
    ContactLinks,
    PageHeader
  }
}
</script>

<style>
</style>