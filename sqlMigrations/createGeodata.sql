ALTER TABLE
  agencies
ADD COLUMN
  id SERIAL PRIMARY KEY;

ALTER TABLE
  calendar_dates
ADD COLUMN
  id SERIAL PRIMARY KEY,
ADD COLUMN
  agency_id INT;

UPDATE
  calendar_dates
SET
  agency_id = 1;

ALTER TABLE
  routes
ADD PRIMARY KEY (route_id),
ADD COLUMN
  agency_id INT;

UPDATE
  routes
SET
  agency_id = 1;

ALTER TABLE
  stop_times
ADD COLUMN
  id SERIAL PRIMARY KEY,
ADD COLUMN
  agency_id INT;

UPDATE
  stop_times
SET
  agency_id = 1;

CREATE INDEX stop_times_trip_id_idx ON stop_times (trip_id);
CREATE INDEX stop_times_stop_id_idx ON stop_times (stop_id);

ALTER TABLE
  stops
ADD COLUMN
  id SERIAL PRIMARY KEY,
ADD COLUMN
  agency_id INT;

UPDATE
  stops
SET
  agency_id = 1;

SELECT
  id,
  agency_id,
  stop_id,
  stop_code,
  stop_namt AS stop_name,
  stop_desc AS description,
  ST_SetSRID(ST_MakePoint(stop_lon, stop_lat), 4326) AS the_geom
INTO
  point_stops
FROM
  stops;

CREATE UNIQUE INDEX point_stops_id_idx ON point_stops (id);
CREATE UNIQUE INDEX point_stops_stop_id_idx ON point_stops (stop_id);
CREATE INDEX point_stops_geom_idx ON point_stops USING GIST (the_geom);

ALTER TABLE
  trips
ADD COLUMN
  id SERIAL PRIMARY KEY,
ADD COLUMN
  agency_id INT;

UPDATE
  trips
SET
  agency_id = 1;

CREATE INDEX trips_route_id_idx ON trips (route_id);
CREATE INDEX trips_service_id_idx ON trips (service_id);
CREATE INDEX trips_trip_id_idx ON trips (trip_id);
CREATE INDEX trips_shape_id_idx ON trips (shape_id);

SELECT
  pts.shape_id,
  ST_MakeLine(pts.the_geom) as the_geom
INTO
  line_shapes
FROM (
  SELECT
    shape_id AS shape_id,
    ST_SetSRID(ST_MakePoint(shape_pt_lon, shape_pt_lat),4326) AS the_geom
  FROM shapes
  GROUP BY shape_id, shape_pt_sequence, shape_pt_lat, shape_pt_lon
  ORDER BY shape_id, shape_pt_sequence
) AS pts
Group By pts.shape_id;

CREATE UNIQUE INDEX line_shapes_shape_id_idx ON line_shapes (shape_id);
CREATE INDEX line_shapes_geom_idx ON line_shapes USING GIST (the_geom);

ALTER TABLE
  line_shapes
ADD COLUMN
  agency_id INT;

UPDATE
  line_shapes
SET
  agency_id = 1;
