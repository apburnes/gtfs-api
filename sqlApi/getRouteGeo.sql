SELECT
  r.route_id,
  r.route_short_name AS short_name,
  r.route_long_name AS long_name,
  r.route_type,
  r.agency_id,
  s.shape_id,
  ST_AsGeoJSON(s.the_geom) as geojson
FROM
  routes AS r,
  trips AS t,
  line_shapes as s
WHERE
  s.agency_id = $1 AND
  r.route_id = $2 AND
  r.route_id = t.route_id AND
  t.shape_id = s.shape_id
GROUP BY
  r.route_id,
  r.route_short_name,
  r.route_long_name,
  r.route_type,
  r.agency_id,
  s.the_geom,
  s.shape_id;
