select "firstName",
      "lastName",
       sum("p"."amount") as "payment"
  from "customers"
  join "payments" as "p" using ("customerId")
group by "customerId"
order by "payment" desc;
