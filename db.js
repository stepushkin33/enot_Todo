const moment = require("moment");
module.exports = () => {
  const tasks = [];
  const date = moment();

  for (let i = 0; i <= 10; i++) {
    tasks.push({
      id: i,
      date: date.format("YYYY-MM-DD"),
      title: `Lorem Ipsum ${i}`,
      description:
        "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...",
    });
    date.add(1, "d");
  }
  return { tasks };
};
