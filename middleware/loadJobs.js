export default async function({ store, route }) {
  if (typeof route.params.id !== "undefined") {
    await store.dispatch("jobs/getJobs", route.params.id);
  } else {
    await store.dispatch("jobs/getJobs", 1);
  }
}
