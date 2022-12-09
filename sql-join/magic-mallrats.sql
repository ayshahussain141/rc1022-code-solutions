select "c"."firstName" as "customers",
       "c"."lastName",
  from "customers" as "c"
  join "inventory" using("storeId")
  join "rentals" using ("inventoryId")
  join "films" using("filmId")
  where "films"."title" = 'Magic Mallrats'
