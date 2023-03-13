exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex("tables").insert([
      {
        table_name: "Bar #1",
        capacity: 2,
      },
      {
        table_name: "Bar #2",
        capacity: 4,
      },
      {
        table_name: "Table 1",
        capacity: 6,
      },
      {
        table_name: "Table 2",
        capacity: 8,
      },
    ]);
  };
  