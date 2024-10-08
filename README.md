# Water_Records_ETL

Group 3 Project

This is the link to an interactive map to show where the station locations are.
https://smaldonado24.github.io/Water_Records_ETL/

Purpose: Extract, Transform, & Load data from the Utah water division website on water discharge for Snake Valley district.  Extracting the data using csv downloads from the website and scraping data from the website for the station data.  Transforming the data using pandas to create a relational database between station, discharge, and location data.  And loading the data into our ProstgreSQL DB for storing and analysis.

How: Begin with the water_records_etl jupyter notebook to get the station data scrapped from the website and input in pandas dataframe for cleaning, transforming, and creating CSVs for Postgres. Next run the spring_flow_data jupyter notebook for reading the spring discharge CSVs into pandas dataframes for cleaning the untrustworthy data in the spring discharge data. This will also end with creating cleaned CSVs for loading into Postgres.  Lastly use the Reading_PostGRES juptyer notebook for reading the data out of the Postgres DB and creating dataframes for further analysis.

Ethical Considerations: As we cleaned the discharge data of the untrustworthy data we decided to remove the outliers in only the spring discharge data because there is an expectation that springs are more consistent in their flow data and the outliers could be considered to be incorrect due to measuring device malfunction.  We also did not clean the stream data because this would require more knowledge of weather, topography, and locality to consider cleaning properly.  Without that knowledge it would be unethical to clean that data.

Base URL: https://waterrights.utah.gov/distribution/WaterRecords.asp?system_name=SNAKE%20VALLEY

Station Information and Discharge URL: https://waterrights.utah.gov/cgi-bin/dvrtview.exe?Modinfo=StationView&STATION_ID=9569&RECORD_YEAR=2024 

Station Location URL: https://maps.waterrights.utah.gov/EsriMap/map.asp?layersToAdd=distribution&dist=SNAKE%20VALLEY,9569 
