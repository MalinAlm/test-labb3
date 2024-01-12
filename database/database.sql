CREATE TABLE IF NOT EXISTS workout_type (
 id serial PRIMARY KEY,
 name text UNIQUE  NOT NULL
);

DROP TABLE IF EXISTS workout_type;


SELECT * FROM workout_type;

INSERT INTO workout_type (name) VALUES ('Cardio');
INSERT INTO workout_type (name) VALUES ('Group workout');
INSERT INTO workout_type (name) VALUES ('Weight lifting');
INSERT INTO workout_type (name) VALUES ('Yoga');
INSERT INTO workout_type (name) VALUES ('Rest');



CREATE TABLE IF NOT EXISTS journal (
 id serial PRIMARY KEY,
 date text UNIQUE NOT NULL,
 workout text NOT NULL,
 notes text NOT NULL,
 FOREIGN KEY(workout) REFERENCES workout_type(name)
);

INSERT INTO journal (date, workout, notes)
VALUES ('Thu Dec 21 2024', 'Cardio', 'Running 45 minutes');

INSERT INTO journal (date, workout, notes)
VALUES ('Fri Dec 22 2024', 'Weight lifting', 'Back and arms');

INSERT INTO journal (date, workout, notes)
VALUES ('Sat Dec 23 2024', 'Yoga', 'Stretching and relaxation');

INSERT INTO journal (date, workout, notes)
VALUES ('Sun Dec 24 2024', 'Rest', 'Rest day');

INSERT INTO journal (date, workout, notes)
VALUES ('Mon Dec 25 2024', 'Cardio', 'Cycling 30 minutes');

INSERT INTO journal (date, workout, notes)
VALUES ('Tue Dec 26 2024', 'Weight lifting', 'Legs and core');

INSERT INTO journal (date, workout, notes)
VALUES ('Wed Dec 27 2024', 'Cardio', 'Swimming 40 minutes');

INSERT INTO journal (date, workout, notes)
VALUES ('Thu Dec 28 2024', 'Rest', 'Rest day');

INSERT INTO journal (date, workout, notes)
VALUES ('Fri Dec 29 2024', 'Cardio', 'Running 30 minutes');

INSERT INTO journal (date, workout, notes)
VALUES ('Sat Dec 30 2024', 'Weight lifting', 'Chest and shoulders');

INSERT INTO journal (date, workout, notes)
VALUES ('Sun Dec 31 2024', 'Rest', 'Rest day');

INSERT INTO journal (date, workout, notes)
VALUES ('Mon Jan 01 2025', 'Cardio', 'Elliptical 45 minutes');

INSERT INTO journal (date, workout, notes)
VALUES ('Tue Jan 02 2025', 'Weight lifting', 'Full body workout');

INSERT INTO journal (date, workout, notes)
VALUES ('Wed Jan 03 2025', 'Cardio', 'Running 35 minutes');

INSERT INTO journal (date, workout, notes)
VALUES ('Thu Jan 04 2025', 'Rest', 'Rest day');

INSERT INTO journal (date, workout, notes)
VALUES ('Fri Jan 05 2025', 'Yoga', 'Mindful stretching');

INSERT INTO journal (date, workout, notes)
VALUES ('Sat Jan 06 2025', 'Weight lifting', 'Back and biceps');

INSERT INTO journal (date, workout, notes)
VALUES ('Sun Jan 07 2025', 'Cardio', 'Rowing 40 minutes');

INSERT INTO journal (date, workout, notes)
VALUES ('Mon Jan 08 2025', 'Rest', 'Rest day');

INSERT INTO journal (date, workout, notes)
VALUES ('Tue Jan 09 2025', 'Cardio', 'Cycling 25 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-21', 'Cardio', 'Running 45 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-22', 'Weight lifting', 'Back and arms');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-23', 'Yoga', 'Stretching and relaxation');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-24', 'Rest', 'Rest day');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-25', 'Cardio', 'Cycling 30 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-26', 'Weight lifting', 'Legs and core');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-27', 'Cardio', 'Swimming 40 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-28', 'Rest', 'Rest day');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-29', 'Cardio', 'Running 30 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-30', 'Weight lifting', 'Chest and shoulders');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2024-12-31', 'Rest', 'Rest day');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-01', 'Cardio', 'Elliptical 45 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-02', 'Weight lifting', 'Full body workout');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-03', 'Cardio', 'Running 35 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-04', 'Rest', 'Rest day');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-05', 'Yoga', 'Mindful stretching');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-06', 'Weight lifting', 'Back and biceps');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-07', 'Cardio', 'Rowing 40 minutes');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-08', 'Rest', 'Rest day');

-- INSERT INTO journal (date, workout, notes)
-- VALUES ('2025-01-09', 'Cardio', 'Cycling 25 minutes');

SELECT * FROM journal;


DROP TABLE IF EXISTS journal;
