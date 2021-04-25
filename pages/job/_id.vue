<template>
  <div>
    <div class="mb-5">
      <h1>
        Details of job offer
      </h1>
      <div>
        <div>
          Company name: <b> {{ selectedJobDetails.company }}</b
          >.
        </div>
        <div>
          Your job as <b>{{ selectedJobDetails.title }}</b> will consist of
          <b>{{ selectedJobDetails.description }}</b
          >.
        </div>
        <div>
          Our department is placed in <b> {{ selectedJobDetails.department }}</b
          >,
          <br />
          <b> {{ selectedJobDetails.location }}</b
          >, <b> {{ selectedJobDetails.location_state }}</b
          >.
        </div>
        <div>
          Salary:
          <b>
            {{ selectedJobDetails.salary }}
            {{ selectedJobDetails.salary_currency }} </b
          >.
        </div>
      </div>
    </div>
    <h2>Apply for our offer</h2>
    <form
      ref="applicationForm"
      @submit.prevent="handleSubmit"
      class="d-flex flex-column align-items-center mb-5"
    >
      <CFieldInput
        id="first_name"
        placeholder="name..."
        label="Your Name: "
        required
        v-model="first_name"
      />
      <CFieldInput
        id="last_name"
        placeholder="surname..."
        label="Your Surname: "
        required
        v-model="last_name"
      />
      <CFieldInput
        id="email"
        placeholder="email..."
        label="Your email: "
        inputType="email"
        required
        v-model="email"
      />
      <CFieldInput
        id="phone"
        placeholder="phone number..."
        label="Your Phone Number: "
        inputType="tel"
        required
        v-model="phone"
      />
      <CFieldInput
        id="cv"
        placeholder="cv..."
        label="Your cv: "
        inputType="file"
        required
      />
      <button :disabled="isSubmitting" type="submit">
        submit my application
      </button>
    </form>
    <h3 class="mb-3">
      Other job offers in <b>{{ selectedJobDetails.location_state }}</b>
    </h3>
    <CJobList v-if="filteredJobs.length" :jobList="filteredJobs" />
    <h4 v-else>
      looks like its only job in {{ selectedJobDetails.location_state }} :(
    </h4>
    <div
      v-if="error || success || isSubmitting"
      class="form-modal d-flex flex-column  align-items-center justify-content-center"
    >
      <CLoader v-if="isSubmitting" />
      <div v-else>
        <h3 v-if="success">form sent succesfully</h3>
        <h3 v-else>there was an error</h3>
        <button class="mt-5" @click="clearStatus">close modal</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Job } from "@/types/job.types";
import { mapState } from "vuex";
export default Vue.extend({
  middleware: "loadJob",
  computed: {
    ...mapState({
      jobs: (state: any): Job[] => state.jobs.jobs
    }),
    filteredJobs(): Job[] {
      let jobs = [...this.jobs];
      return jobs.filter(job => job.id !== this.$route.params.id);
    },
    selectedJobDetails(): Job {
      let jobs = [...this.jobs];
      jobs = jobs.filter(job => job.id === this.$route.params.id);
      return jobs?.[0];
    },
    invalidName(): boolean {
      return this.first_name.trim() === "";
    },
    invalidSurname(): boolean {
      return this.last_name.trim() === "";
    },
    invalidEmail(): boolean {
      const re = /^[^@\s]+@[^@\s\.]+\.[^@\.\s]+$/;
      return !re.test(this.email);
    },
    invalidPhone(): boolean {
      const re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
      return !re.test(this.phone);
    }
  },

  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      cv_file_id: "",
      success: false,
      error: false,
      isSubmitting: false
    };
  },
  methods: {
    clearStatus() {
      this.success = false;
      this.error = false;
    },
    handleSubmit(): void {
      this.isSubmitting = true;
      this.clearStatus();
      const cv: any = document.getElementById("cv");
      if (!cv?.files.length) {
        this.error = true;
        return;
      } else if (
        this.invalidName ||
        this.invalidSurname ||
        this.invalidPhone ||
        this.invalidEmail
      ) {
        this.error = true;
        return;
      }
      this.cv_file_id = cv.files[0].name;

      this.submitForm();
    },
    async submitForm() {
      try {
        const res = await this.$axios.post(
          `jobs/${this.$route.params.id}/applications`,
          {
            first_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            phone: this.phone,
            cv_file_id: this.cv_file_id
          }
          // normally i'd do sth with response data
        );
        this.success = true;
        this.isSubmitting = false;
      } catch (error) {
        this.error = true;
        this.isSubmitting = false;
      }
    }
  }
});
</script>

<style scoped>
.form-modal {
  position: fixed;
  background-color: #aaa;
  left: 50%;
  top: 30%;
  width: 300px;
  height: 200px;
  transform: translateX(-50%);
}
</style>
