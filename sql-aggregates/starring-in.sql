SELECT  count ("name") AS "genrecount",
          "name" as "genrename"
from "genres"
join "filmGenre" using("genreId")
join "castMembers" using("filmId")
join "actors" using("actorId")
where "firstName" = 'Lisa'
group by "genres"."name";
