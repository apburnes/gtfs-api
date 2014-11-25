SELECT
  route_id,
  route_short_name,
  route_long_name,
  route_type,
  agency_id
FROM
  routes
WHERE
  agency_id = $1
ORDER BY $2;
