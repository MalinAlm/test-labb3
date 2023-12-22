CREATE TABLE workout_type (
 id serial PRIMARY KEY,
 name text UNIQUE  NOT NULL
);

DROP TABLE workout_type;


SELECT * FROM workout_type;

INSERT INTO workout_type (name) VALUES ('Cardio');
INSERT INTO workout_type (name) VALUES ('Group workout');
INSERT INTO workout_type (name) VALUES ('Weight lifting');

CREATE TABLE journal (
 id serial PRIMARY KEY,
 date Date UNIQUE NOT NULL,
 workout text NOT NULL,
 time text NOT NULL,
 notes text NOT NULL,
 FOREIGN KEY(workout) REFERENCES workout_type(id)
);
