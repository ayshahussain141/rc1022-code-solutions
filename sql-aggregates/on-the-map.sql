select count("cityId") as "cities"
from "cities"
join "countries" using("countryId")
where "countries"."name" = 'Murica';
