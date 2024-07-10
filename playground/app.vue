<script lang="ts">
import { reactive, ref, useRecaptcha } from '#imports'

export default {
  name: 'Contact',
  setup() {
    const recaptcha = useRecaptcha()
    const getInitialFormData = () => ref<Partial<{ fullname: string }>>({ fullname: '' })
    const state = reactive(getInitialFormData())
    const reset = () => Object.assign(state, getInitialFormData())

    /*
    // validator initialization
    const v$ = useVuelidate({
      state: {
        fullname: {
          required: helpers.withMessage('Full Name is required', required),
        },
      },
    }, { state }, { $lazy: true })
    */

    return { recaptcha, state, reset } // , v$ }
  },
  methods: {
    async submitForm() {
      try {
        // validate form (invalid throws error)
        // let result = await this.v$.$validate()

        // get recaptcha token
        const token = await this.recaptcha.execute('submit')
        if (token) {
          // verify recaptcha token
          const result = await this.recaptcha.verify(token)
          if (result.valid && !result.errors) {
            // save form
            /*
            const { data, error } = await useFetch('/api/Submissions/create', {
              method: 'POST',
              body: { ...this.state },
            })
            if (error.value) {
              // handle errors
              throw new Error(error.value)
            }
            */

            // reset form
            this.reset()
            return true
          }
          else if (result.errors && result.errors.length > 0) {
            // handle errors
            throw new Error(result.errors.join(', '))
          }
        }
        return false
      }
      catch { // (err) {
        // handle errors
        // console.log(`Error: ${err}`)
        return false
      }
    },
  },
}
</script>

<template>
  <h1>nuxt-gsuite playground!</h1>
  <form @submit.prevent="submitForm()">
    <div>
      <label for="fullname">Full Name</label><br>
      <input id="fullname" v-model="state.fullname" type="text">
    </div>
    <div>
      <button type="submit">
        Submit
      </button>
    </div>
  </form>
</template>
