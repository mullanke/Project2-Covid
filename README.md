# Project2-Covid

Project 2  
Requirement 
1.	Your visualization must include a Python Flask–powered API, HTML/CSS, JavaScript, and at least one database (SQL, MongoDB, SQLite, etc.). 
2.	Your project should fall into one of the below four tracks: ○ A custom “creative” D3.js project (i.e., a nonstandard graph or chart) 
•	A combination of web scraping and Leaflet or Plotly 
•	A dashboard page with multiple charts that update from the same data 
•	A “thick” server that performs multiple manipulations on data in a database prior to visualization (must be approved) 
3.	Your project should include at least one JS library that we did not cover. 
4.	Your project must be powered by a data set with at least 100 records. 
5.	Your project must include some level of user-driven interaction (e.g., menus, dropdowns, textboxes). 
6.	Your final visualization should ideally include at least three views.
Data Visualization 
Tell a Story with Data
Since the pandemic started, March 2021 has been one of the states showing high number of confirmed cases. 
Michigan specifically saw the highest increases in positive cases were between October 2020 to December 2020 and deaths from November 2020 to December 2020. Deaths slowly trended upwards since the beginning of the pandemic in March 2020.
During the early stages of Covid19, Michigan was Ranked 25th in the States. In February 2021, Michigan ranked 14th and currently is #1 in the United States.
Our goal was to create a fully functional web visualization dashboard that provides data on the progression of Covid-19 in Michigan over the past year. 
Theme 
1) Create a list tab which would include:
•	Create an interactive table that filters deaths, hospitalizations and confirmed cases between March 2020 and March 2021 

2) Create a heat map which would include:
•	Heat Map of Covid cases for each province in the United States as of March 2021

3) Create a charts tab which would include:
•	Bar graphs visualizing deaths and hospitalizations in 2020 Vs 2021 in Michigan
•	Graph displaying increase in Covid-19 positive cases confirmed on monthly basis 
4) Create a table and corresponding graph tab which would include:
•	A table comparing total Covid19 cases confirmed April 2020 and February 2021 
•	A corresponding graph that visualizes and compares confirmed cases by state 

Data Source
Our dataset was obtained from “Covid data” (https://www.kaggle.com/xxxx)  as well as https://data-flair.training/blogs/download-covid-19-dataset/. This dataset contains United States and Michigan data between April 2020 and March 2021.
User-driven interaction
This website provides the user with an interactive navigation bar, search and filter button on the first tab. The cases in America heat map displays the distinct locations with high cases. It also provides an interactive feature that allows users to hover and view number of cases by province. 
Coding Approach 
-	Started with Jupyter Notebook by reading csv files and sketching graphs 
-	Created database and table schemas in SQL Postgres database 
-	Connected our Pgadmin in Jupyter notebook with psycopg2
o	Created function.py file to store the connection created
o	Plotted multiple graphs in Jupyter notebook using the data in the database
o	Created interactive map in Jupyter notebook using additional dataset 
-	HTML and JavaScript coding approach 
Data munging techniques Jupyter notebook 
o	Merging 
o	Analysis 
o	Aggregation
o	Plotting 
Visualization techniques 
o	D3.js
o	Plotly
o	Multiple charts generated 
 
