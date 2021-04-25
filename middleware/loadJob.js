export default async function({ store, route }) {
  if (typeof route.params.id !== "undefined") {
    await store.dispatch("jobs/getJob", route.params.id);
  } else {
    await store.dispatch("jobs/getJob", 1);
  }
}
