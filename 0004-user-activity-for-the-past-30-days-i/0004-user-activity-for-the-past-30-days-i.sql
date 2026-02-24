/* Write your T-SQL query statement below */
select activity_date as day,count(distinct user_id) as active_users
from Activity
where datediff (day, activity_date, (select max(activity_date) from Activity)) < 25
group by activity_date;