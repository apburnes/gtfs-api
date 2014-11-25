CREATE EXTENSION IF NOT EXISTS postgis;

CREATE TABLE agencies (
    agency_name character varying(100),
    agency_url text,
    agency_timezone character varying(100),
    agency_lang character varying(5),
    agency_phone character varying(20)
);

CREATE TABLE calendar_dates (
    service_id character varying(50),
    date date,
    exception_type integer
);

CREATE TABLE routes (
    route_id character varying(10) NOT NULL,
    route_short_name character varying(10),
    route_long_name character varying(100),
    route_type integer
);

CREATE TABLE shapes (
    shape_id character varying(15),
    shape_pt_lat double precision,
    shape_pt_lon double precision,
    shape_pt_sequence integer
);

CREATE TABLE stop_times (
    trip_id integer,
    arrival_time character varying(8),
    departure_time character varying(8),
    stop_id integer,
    stop_sequence integer,
    pickup_type integer,
    drop_off_type integer
);

CREATE TABLE stops (
    stop_id integer,
    stop_code character varying(50),
    stop_namt character varying(100),
    stop_desc text,
    stop_lat double precision,
    stop_lon double precision
);

CREATE TABLE trips (
    route_id character varying(10),
    service_id character varying(50),
    trip_id integer,
    trip_headsign character varying(100),
    direction_id integer,
    block_id integer,
    shape_id character varying(10)
);
