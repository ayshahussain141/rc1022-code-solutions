insert into "languages" ("name")
values ('CSS'),
       ('HTML'),
       ('JavasScript')
returning *;

 select *
 from "languages";
