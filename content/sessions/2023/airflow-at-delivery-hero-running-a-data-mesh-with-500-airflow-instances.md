---
title: "Airflow at Delivery Hero: Running a data mesh with ~500 Airflow instances"
slug: airflow-at-delivery-hero-running-a-data-mesh-with-500-airflow-instances
aliases:
 - /sessions/2023/airflow-and-data-mesh-running-500-airflows-crunching-millions-of-meals-delivered-daily
speakers:
 - M Waqas Shahid
time_start: 2023-09-19T17:15:00-04:00
time_end: 2023-09-19T17:40:00-04:00
room: Ballroom C-D
track: Use cases
day: 1
timeslot: 16
images:
 - /images/sessions/2023/MWaqas.jpg
video: https://youtu.be/Or0nlM95b_o
#slides: https://docs.google.com/presentation/d/10_6gBlC8OhafWurFG9McojeQ4NpyrfM2sLHbE_ruCoY/edit?usp=drive_link
---

Ever thought how airflow could play a pivotal role in data mesh architecture, hosting thousands of DAGs and hundreds of thousands daily running tasks, let's find out!
 
Delivery Hero delivers food in 70 countries with 12 different brands and platforms. With thousands of engineers, analysts and data scientists spread across many countries running analytics and ML services for all these orders delivered. Serving the workflow orchestration needs for such a massive group becomes a challenge.
 
This is where airflow and data mesh comes to rescue, by running more than 500 airflow instances to empower different teams to own and curate data products. This presentation will explain how to efficiently setup and monitor airflow at massive scale. New feature of launching dynamic airflow staging and development environments dedicated for each developer. Demo about "Workspace" concept in direction of multi-tenancy management.