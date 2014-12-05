SELECT
 t.agency_id,
 t.service_id AS service,
 t.trip_headsign AS headsign,
 r.route_short_name AS short_name,
 r.route_long_name AS long_name,
 r.route_type AS route_type,
 ST_AsGeoJSON(s.the_geom) AS geojson
FROM
  trips AS t,
  routes AS r,
  line_shapes AS s
WHERE
  t.agency_id = $1 AND
  t.agency_id = r.agency_id AND
  t.agency_id = s.agency_id AND
  t.trip_id = $2 AND
  t.shape_id = s.shape_id AND
  t.route_id = r.route_id;
