CREATE TABLE "Discharge" (
	"Record ID" SERIAL PRIMARY KEY,
    "Station ID" INT   NOT NULL,
    "Station Name" VARCHAR   NOT NULL,
    "Date" VARCHAR   NOT NULL,
    "Flow" FLOAT   NOT NULL
);

CREATE TABLE "Stations" (
    "Station ID" INT   NOT NULL,
    "Station Name" VARCHAR   NOT NULL,
    "Station Type" VARCHAR   NOT NULL,
    "Description" VARCHAR,
    "Active" BOOLEAN   NOT NULL,
    "Measuring Device" VARCHAR,
    "Record Type" VARCHAR   NOT NULL,
    "Record Rating" VARCHAR   NOT NULL,
    "Start Period" INT   NOT NULL,
    "End Period" INT   NOT NULL,
    CONSTRAINT "pk_Stations" PRIMARY KEY (
        "Station ID"
     )
);

CREATE TABLE "Locations" (
    "Station ID" INT   NOT NULL,
    "Station Name" VARCHAR   NOT NULL,
    "Latitude" FLOAT   NOT NULL,
    "Longitude" FLOAT   NOT NULL
);

ALTER TABLE "Discharge" ADD CONSTRAINT "fk_Discharge_Station_ID" FOREIGN KEY("Station ID")
REFERENCES "Stations" ("Station ID");

ALTER TABLE "Locations" ADD CONSTRAINT "fk_Locations_Station_ID" FOREIGN KEY("Station ID")
REFERENCES "Stations" ("Station ID");

SELECT * FROM "Discharge"
