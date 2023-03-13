exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tables").insert([
      {
        table_name: "Bar #1",
        capacity: 1,
      },
      {
        table_name: "Bar #2",
        capacity: 1,
      },
      {
        table_name: "Bar #3",
        capacity: 6,
      },
      {
        table_name: "Table 1",
        capacity: 6,
      },
      {
        table_name: "Table 2",
        capacity: 6,
      },
      {
        table_name: "Table 3",
        capacity: 6,
      },
      {
        table_name: "Table 4",
        capacity: 6,
      },
      {
        table_name: "Table 5",
        capacity: 6,
      },
      {
        table_name: "Table 6",
        capacity: 6,
      },
    ]);
  };
  