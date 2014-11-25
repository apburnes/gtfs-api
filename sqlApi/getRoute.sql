SELECT
  route_id,
  route_short_name,
  route_long_name,
  route_type,
  agency_id
FROM
  routes
WHERE
  agency_id = $1 AND
  route_id = $2
ORDER BY $3;
