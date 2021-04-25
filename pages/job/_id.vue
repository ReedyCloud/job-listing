<template>
  <div>
    <div>
      <h1>
        Details of our job offer
      </h1>
      <div>
        <div>
          Company name: <b> {{ selectedJobDetails.company }}</b>
        </div>
        <div>
          Your job will as <b>{{ selectedJobDetails.title }}</b> consist of
          <b>{{ selectedJobDetails.description }}</b>
        </div>
        <div>
          Our department is placed in <b> {{ selectedJobDetails.department }}</b
          >,
          <br />
          <b> {{ selectedJobDetails.location }}</b
          >,
          <b> {{ selectedJobDetails.location_state }}</b>
        </div>
        <div>
          Salary:
          <b>
            {{ selectedJobDetails.salary }}
            {{ selectedJobDetails.salary_currency }}
          </b>
        </div>
        <div></div>
      </div>
    </div>
    <form @submit.prevent="submitForm">
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
        v-model="last_name"
      />
      <CFieldInput
        id="email"
        placeholder="email..."
        label="Your email: "
        inputType="email"
        v-model="email"
      />
      <CFieldInput
        id="phone"
        placeholder="phone number..."
        label="Your Phone Number: "
        inputType="tel"
        v-model="phone"
      />
      <CFieldInput
        id="cv"
        placeholder="cv..."
        label="Your cv: "
        inputType="file"
        v-model="cv_file_id"
      />

      <button type="submit">submit my application</button>
    </form>
    <CJobList v-if="filteredJobs.length" :jobList="filteredJobs" />
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
    }
  },
  data() {
    return {
      first_name: undefined,
      last_name: undefined,
      email: undefined,
      phone: undefined,
      cv_file_id: undefined
    };
  },
  methods: {
    async submitForm() {
      // const res = await this.$axios.post(
      //   `jobs/${this.$route.params.id}/applications`,
      //   {
      //     first_name: this.first_name,
      //     last_name: this.last_name,
      //     email: this.email,
      //     phone: this.phone,
      //     cv_file_id: this.cv_file_id
      //   }
      // );
      // console.log(res);
    }
  }
});
</script>

<style scoped></style>
