export default async function({ store, route }) {
  if (typeof route.params.id !== "undefined") {
    await store.dispatch("getJobs", route.params.id);
  } else {
    await store.dispatch("getJobs", 1);
  }
}
