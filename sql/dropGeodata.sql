ALTER TABLE
  agencies
DROP COLUMN
  id;

ALTER TABLE
  calendar_dates
DROP COLUMN
  id;

ALTER TABLE
  routes
DROP CONSTRAINT
  routes_pkey;

ALTER TABLE
  stop_times
DROP COLUMN
  id;

DROP INDEX IF EXISTS stop_times_trip_id_idx;
DROP INDEX IF EXISTS stop_times_stop_id_idx;

ALTER TABLE
  stops
DROP COLUMN
  id;

DROP INDEX IF EXISTS point_stops_stop_id_idx;
DROP INDEX IF EXISTS point_stops_geom_idx;

ALTER TABLE
  point_stops
DROP COLUMN
  id;

DROP TABLE IF EXISTS point_stops;

ALTER TABLE
  trips
DROP COLUMN
  id;

DROP INDEX IF EXISTS trips_route_id_idx;
DROP INDEX IF EXISTS trips_service_id_idx;
DROP INDEX IF EXISTS trips_trip_id_idx;
DROP INDEX IF EXISTS trips_shape_id_idx;

DROP INDEX IF EXISTS line_shapes_shape_id_idx;
DROP INDEX IF EXISTS line_shapes_geom_idx;

DROP TABLE IF EXISTS line_shapes;
