import cron from "node-cron";

cron.schedule("*/5 * * * *", async () => {
  try {
    await fetch("https://gallery-v0hh.onrender.com/");
  } catch (error) {
    console.log(error.message);
  }
});
