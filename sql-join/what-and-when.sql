select "films"."releaseYear" as "films",
       "filmGenre"."genreId" as "filmGeneres",
       "genres"."name" as "genres"
from "films"
join "filmGenre" using ("filmId")
join "genres" using("genreId")
where "films"."title" = 'Boogie Amelie';
