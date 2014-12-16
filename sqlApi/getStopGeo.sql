SELECT
  s.agency_id,
  s.stop_id,
  s.stop_code,
  s.stop_name,
  s.description,
  ST_AsGeoJSON(s.the_geom) AS geojson
FROM
  point_stops AS s
WHERE
  s.agency_id = $1 AND
  s.stop_id = $2;
