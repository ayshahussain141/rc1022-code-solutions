select "addresses"."line1" as "addresses",
       "cities"."name" as "cities",
       "addresses"."district" as "addresses",
       "countries"."name" as "countries"
from "addresses"
join "cities" using("cityId")
join "countries" using("countryId")
