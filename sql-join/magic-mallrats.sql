select "c"."firstName" as "customers",
       "c"."lastName",
       "inventory"."storeId",
       "rentals"."inventoryId"
  from "customers" as "c"
  join "inventory" using("storeId")
  join "rentals" using ("inventoryId")
  join "films" using("filmId")
  where "films"."title" = 'Magic Mallrats'
  limit 10;
