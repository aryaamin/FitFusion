delete from Calorie_Intake;
delete from Exercise;
delete from Diet_Plan;
delete from Exercise_Plan;
delete from Trainer;
delete from Dietician;
delete from Trainee;
delete from Users;

INSERT INTO Users (user_id, name, email, password, age, gender, user_role) VALUES 
(1, 'Christy Odom', 'gallegosstephanie@example.net', 'u3VR^#0D(4', 29, 'male', 'dietician') ,
(2, 'Katie Bates DDS', 'karen23@example.net', 'Sn2*ZHxS+5', 48, 'male', 'trainer') ,
(3, 'Darlene Walsh', 'djohnson@example.net', '+g!3iFcwxR', 26, 'male', 'trainer') ,
(4, 'Jennifer Phillips', 'pbrooks@example.net', '#3*F!)wr(%', 37, 'other', 'dietician') ,
(5, 'Alexis Duke', 'epowell@example.com', 'tguzHyoh$4', 38, 'male', 'trainee') ,
(6, 'Victor Allen', 'stephaniewhite@example.net', '867Zdy@e+A', 31, 'female', 'trainer') ,
(7, 'Barbara Davidson', 'torresshane@example.net', '!K7xeIym$p', 32, 'other', 'dietician') ,
(8, 'Jennifer Velasquez', 'nancy05@example.org', 'Y&)5E71b&q', 44, 'male', 'trainee') ,
(9, 'Rebecca Mitchell', 'orodriguez@example.com', 'F3ZMfDMe*h', 43, 'female', 'dietician') ,
(10, 'Scott Bryant', 'rachelavila@example.net', 'MCAn6AMl*x', 30, 'male', 'trainee') ,
(11, 'Mark Ortiz', 'nharvey@example.org', 'gC38RgLa+*', 43, 'female', 'trainer') ,
(12, 'Janet Ortiz', 'ericgriffin@example.com', '*$c$4UZqvu', 61, 'female', 'dietician') ,
(13, 'Edward Garcia', 'chernandez@example.org', 'YM8Ti+!09#', 28, 'male', 'trainer') ,
(14, 'Rebecca Williams', 'bherrera@example.net', '#XNbilmD5y', 59, 'female', 'dietician') ,
(15, 'Dustin Watson', 'kristen33@example.com', 't1XdMdSF+P', 45, 'female', 'dietician') ,
(16, 'Dan Cameron', 'kevinchristian@example.com', 'T!2!SKr&o@', 19, 'other', 'dietician') ,
(17, 'Carl Petersen', 'odomandrea@example.org', '@P0FX2tO7(', 34, 'female', 'trainee') ,
(18, 'Joe Harris', 'pamelaestrada@example.com', '2qPDtNlO$$', 52, 'female', 'trainer') ,
(19, 'Amanda Anthony', 'alicia93@example.net', '(9MoEawXpf', 29, 'female', 'trainee') ,
(20, 'Brandon Chaney', 'richard88@example.org', '+!I3&!w^RM', 32, 'male', 'dietician') ,
(21, 'Jonathan Jenkins', 'adamskristina@example.org', '%cj9#WfI*1', 60, 'male', 'trainer') ,
(22, 'Brandi Thompson', 'dawnjones@example.org', '4oTUOllt*q', 30, 'other', 'trainer') ,
(23, 'Linda King', 'lisa23@example.net', '@8r$7SDi4+', 18, 'other', 'dietician') ,
(24, 'Jennifer Miller', 'parkervalerie@example.net', 'X_d&L0TacC', 31, 'other', 'trainee') ,
(25, 'Jean Stout', 'pittsmary@example.org', 'H2l)3WpT*k', 51, 'female', 'dietician') ,
(26, 'Nicholas Ford', 'obarajas@example.com', 'l8WDNfp3_b', 26, 'other', 'dietician') ,
(27, 'Jennifer Brewer', 'angela03@example.net', 'uB0W(EmJp!', 29, 'male', 'trainee') ,
(28, 'Jonathan Aguirre', 'hcarr@example.net', 'LO(*2VglPs', 35, 'other', 'trainee') ,
(29, 'Derek Stewart', 'sean36@example.com', '(4rN@dZJC$', 24, 'female', 'dietician') ,
(30, 'Stephanie Davis', 'alewis@example.org', '%)Umx(L63v', 59, 'male', 'trainer') ,
(31, 'Bethany Green', 'dwright@example.com', 'm$6Bg+ig7(', 49, 'male', 'trainee') ,
(32, 'Justin Nixon', 'bwalker@example.org', '_GhXDeAf12', 34, 'male', 'trainee') ,
(33, 'Stacy Reed', 'christophermunoz@example.net', 'l5EQrzfq(R', 38, 'male', 'trainer') ,
(34, 'Patricia Ferguson', 'ibaker@example.net', ')(9LPKmc#G', 44, 'other', 'trainer') ,
(35, 'Stephen Henson', 'gthomas@example.com', '(71Fyg7pbL', 24, 'female', 'dietician') ,
(36, 'Ashley Johnson', 'sanchezaaron@example.org', 'RiTwIGsY%8', 25, 'female', 'trainee') ,
(37, 'Lindsey Cunningham', 'johnsoncalvin@example.com', '&lhoXMI35v', 52, 'female', 'trainer') ,
(38, 'Shaun Moran', 'danaward@example.net', 'J8b(%fPv%2', 53, 'other', 'trainer') ,
(39, 'Zachary Peters', 'williamspatrick@example.org', '+QISeoFD#1', 53, 'other', 'dietician') ,
(40, 'Olivia Lozano', 'emmagalloway@example.org', 'YW4MV(Bt_q', 49, 'male', 'dietician') ,
(41, 'Elizabeth Hooper', 'dixoncindy@example.org', '(mdRg8b(J0', 25, 'male', 'dietician') ,
(42, 'Tamara Brown', 'nathan17@example.net', 'o9^O2iWP@0', 51, 'female', 'dietician') ,
(43, 'Jasmine Mcneil', 'qwilliams@example.com', '*68tkBm2SI', 18, 'male', 'dietician') ,
(44, 'Jacob Norman', 'lance20@example.net', '6YzHj@id^w', 35, 'other', 'trainee') ,
(45, 'Krista Williams', 'grace48@example.org', '$w9IDQm2LA', 31, 'other', 'dietician') ,
(46, 'Anthony Ortiz', 'derek60@example.net', 'Q+hUsVbo(5', 60, 'other', 'dietician') ,
(47, 'Mary Boone', 'wongjason@example.com', '%E%S3VNgn&', 51, 'other', 'trainer') ,
(48, 'Melanie Ramirez', 'perezlisa@example.org', '9c3^#5Vg@v', 35, 'female', 'trainee') ,
(49, 'William Burgess', 'priceterri@example.net', '27RHz2H1(t', 18, 'other', 'trainer') ,
(50, 'Julie Williamson', 'zcruz@example.org', 'dYg3vpEuo*', 22, 'female', 'dietician') ,
(51, 'Douglas Lynch', 'meganperkins@example.org', '8uCKFYrh+t', 59, 'other', 'dietician') ,
(52, 'Allen Beck', 'cortezbarbara@example.org', 'L9&P1j8C*6', 60, 'male', 'trainee') ,
(53, 'Candice Davenport', 'elandry@example.org', '9^6@)M6t&B', 24, 'male', 'trainee') ,
(54, 'Brandon Smith', 'jessicablevins@example.com', '+zF*43Ix#m', 63, 'other', 'dietician') ,
(55, 'Jessica Mendez', 'ijohnston@example.net', '#iPIyLit4+', 18, 'other', 'trainee') ,
(56, 'Amy Fuentes', 'susansalinas@example.com', '$KKeRlqPj9', 22, 'other', 'trainer') ,
(57, 'Nicholas George', 'brandon36@example.com', 'Rp!87DpZgt', 38, 'other', 'dietician') ,
(58, 'Kevin Barnett', 'yjensen@example.org', 'LX3WZ9qqs*', 55, 'male', 'dietician') ,
(59, 'Kevin Perez', 'weberjames@example.com', '$y5J_5Pd$(', 40, 'male', 'dietician') ,
(60, 'Cheryl Rodriguez', 'patricia10@example.org', 'n(uz+5TwNH', 64, 'male', 'dietician') ,
(61, 'Diane Thompson', 'aliciasmith@example.org', '2V(H7DIilM', 46, 'male', 'trainee') ,
(62, 'Joshua Rivera', 'ihughes@example.net', '&5U0rDwFb7', 30, 'female', 'trainee') ,
(63, 'Jordan Weber', 'patelpatricia@example.com', '@L9bZmHg6J', 52, 'male', 'trainee') ,
(64, 'Scott Carter', 'allisonmatthew@example.com', 'o4KKzf)d+!', 40, 'female', 'trainer') ,
(65, 'Michael Brown', 'parkershannon@example.com', 'E3T7GbXe(X', 45, 'male', 'dietician') ,
(66, 'Christina Wood', 'jose62@example.net', 'Ix#4L%zuL3', 33, 'male', 'trainee') ,
(67, 'Steven Newton', 'vdavis@example.com', '7x^4gLvc&q', 36, 'other', 'trainee') ,
(68, 'Timothy Freeman', 'evansjames@example.com', 'a9o&%iU1)h', 23, 'female', 'dietician') ,
(69, 'Jacob Robinson', 'jlang@example.org', 'R6DZoIvW*8', 42, 'female', 'dietician') ,
(70, 'Joseph Moore DDS', 'kenneth09@example.com', '#O8FQ(giW!', 44, 'male', 'trainee') ,
(71, 'Michelle Phillips', 'frederickcourtney@example.org', '+q@SGsYNa5', 20, 'other', 'trainee') ,
(72, 'Walter Hawkins', 'ywong@example.org', 'Fn!UKYp0!7', 62, 'female', 'trainer') ,
(73, 'David Baker', 'josephmccarthy@example.net', '*8ZB3v(LA5', 43, 'other', 'trainer') ,
(74, 'Tracy Carpenter', 'zimmermanapril@example.net', 'q_6CptHret', 34, 'other', 'trainee') ,
(75, 'Vanessa Dodson', 'david97@example.org', 'N88*$T%K*k', 37, 'male', 'trainee') ,
(76, 'David Dean', 'david80@example.net', '*8z@Iuj2#d', 23, 'other', 'trainee') ,
(77, 'Caroline Conway', 'gonzalezcaleb@example.org', '$b^XkIeBh1', 46, 'other', 'dietician') ,
(78, 'Deborah Moody', 'pcrawford@example.org', '%2MVmWOQsg', 33, 'other', 'trainee') ,
(79, 'Jerry Becker', 'jparker@example.com', 'pKl6Kbg%^q', 48, 'female', 'trainer') ,
(80, 'Brian Brown', 'davisbenjamin@example.net', '#z5Ln&fa67', 18, 'male', 'dietician') ,
(81, 'Kevin Robinson', 'campbellmichael@example.net', 'aQ2HMa%_M*', 39, 'male', 'trainer') ,
(82, 'Ryan Robinson', 'awinters@example.com', 'W+Iu66Ku(2', 31, 'male', 'trainer') ,
(83, 'Andrea Lewis', 'jonathan19@example.org', 'q0$#Tqkl^A', 33, 'other', 'trainee') ,
(84, 'Diane Garrison', 'brandi32@example.net', '+NUrj0PGY3', 37, 'male', 'dietician') ,
(85, 'Andrea Griffin', 'weaverbradley@example.net', 'qhtlCdXc*1', 65, 'male', 'trainer') ,
(86, 'Tommy Whitney', 'meganarcher@example.net', '_KIP&w!g84', 20, 'other', 'trainee') ,
(87, 'Mark Stanton', 'hlarson@example.net', 'ur(5hGcm3L', 53, 'other', 'trainee') ,
(88, 'Autumn Sloan', 'sadams@example.com', 'q5!0CVb&+V', 37, 'female', 'trainer') ,
(89, 'Stacy Medina', 'reedjessica@example.com', '@n_6BsGb+b', 53, 'other', 'dietician') ,
(90, 'David Ballard', 'jallen@example.com', '&JM5O$inDE', 64, 'other', 'trainer') ,
(91, 'Emily Thompson', 'hamiltonhannah@example.com', '7XWsLZbL)m', 29, 'male', 'trainee') ,
(92, 'Nicholas Gonzalez', 'cgarza@example.com', 'k4n0mT!t(v', 57, 'male', 'trainer') ,
(93, 'Amber Rodriguez', 'victoriaarnold@example.com', '&2fxnIxsPh', 56, 'other', 'dietician') ,
(94, 'Robert Johnson', 'tamihoward@example.net', '8mGh(1BW%G', 53, 'female', 'trainee') ,
(95, 'Kara Moyer', 'alexandraturner@example.net', '(myg)IJ15+', 24, 'male', 'trainer') ,
(96, 'Benjamin Wagner', 'joanne09@example.org', '+r1!StBp1I', 48, 'male', 'trainer') ,
(97, 'Katelyn Keller', 'parkerchristopher@example.com', 'vD4eIboQ_Q', 19, 'male', 'dietician') ,
(98, 'Annette Davis', 'iturner@example.com', 'n)9EartY*s', 40, 'other', 'trainee') ,
(99, 'Dustin Schroeder', 'david89@example.net', '&P2GRcvMhD', 31, 'male', 'trainer') ;

INSERT INTO Trainee (trainee_id, activity_level, goal) VALUES 
(5, 3, 'lose weight') ,
(8, 1, 'build muscle') ,
(10, 2, 'gain weight') ,
(17, 1, 'gain weight') ,
(19, 3, 'build muscle') ,
(24, 2, 'gain weight') ,
(27, 1, 'build muscle') ,
(28, 4, 'lose weight') ,
(31, 4, 'build muscle') ,
(32, 1, 'gain weight') ,
(36, 3, 'maintain weight') ,
(44, 4, 'build muscle') ,
(48, 3, 'build muscle') ,
(52, 3, 'lose weight') ,
(53, 4, 'build muscle') ,
(55, 4, 'build muscle') ,
(61, 2, 'gain weight') ,
(62, 2, 'lose weight') ,
(63, 2, 'build muscle') ,
(66, 2, 'lose weight') ,
(67, 1, 'maintain weight') ,
(70, 3, 'maintain weight') ,
(71, 3, 'lose weight') ,
(74, 1, 'maintain weight') ,
(75, 1, 'maintain weight') ,
(76, 4, 'gain weight') ,
(78, 1, 'gain weight') ,
(83, 5, 'maintain weight') ,
(86, 5, 'maintain weight') ,
(87, 1, 'maintain weight') ,
(91, 3, 'lose weight') ,
(94, 3, 'maintain weight') ,
(98, 1, 'lose weight') ;

INSERT INTO Trainer (trainer_id, trainee_id) VALUES 
(3, 5) ,
(37, 8) ,
(2, 10) ,
(30, 17) ,
(56, 19) ,
(79, 24) ,
(95, 27) ,
(11, 28) ,
(56, 31) ,
(47, 32) ,
(38, 36) ,
(64, 44) ,
(90, 48) ,
(88, 52) ,
(49, 53) ,
(11, 55) ,
(18, 61) ,
(79, 62) ,
(49, 63) ,
(56, 66) ,
(3, 67) ,
(34, 70) ,
(18, 71) ,
(33, 74) ,
(18, 75) ,
(56, 76) ,
(22, 78) ,
(90, 83) ,
(82, 86) ,
(56, 87) ,
(3, 91) ,
(82, 94) ,
(56, 98) ;

INSERT INTO Dietician (dietician_id, trainee_id) VALUES 
(45, 5) ,
(14, 8) ,
(97, 10) ,
(58, 17) ,
(65, 19) ,
(57, 24) ,
(4, 27) ,
(46, 28) ,
(51, 31) ,
(14, 32) ,
(9, 36) ,
(20, 44) ,
(58, 48) ,
(40, 52) ,
(29, 53) ,
(29, 55) ,
(60, 61) ,
(69, 62) ,
(39, 63) ,
(89, 66) ,
(12, 67) ,
(4, 70) ,
(23, 71) ,
(15, 74) ,
(43, 75) ,
(77, 76) ,
(59, 78) ,
(12, 83) ,
(68, 86) ,
(57, 87) ,
(23, 91) ,
(59, 94) ,
(93, 98) ;

INSERT INTO Calorie_Intake (intake_id, trainee_id, date, meal_type, calories) VALUES 
(1, 24, '2023-04-01', 'snack', 508) ,
(2, 44, '2023-04-04', 'snack', 931) ,
(3, 53, '2023-04-04', 'breakfast', 973) ,
(4, 70, '2023-04-04', 'dinner', 323) ,
(5, 78, '2023-04-05', 'breakfast', 910) ,
(6, 62, '2023-04-01', 'snack', 307) ,
(7, 17, '2023-04-04', 'lunch', 311) ,
(8, 61, '2023-04-06', 'breakfast', 334) ,
(9, 55, '2023-04-02', 'snack', 135) ,
(10, 63, '2023-04-05', 'breakfast', 819) ,
(11, 83, '2023-04-03', 'dinner', 943) ,
(12, 19, '2023-04-07', 'lunch', 397) ,
(13, 10, '2023-04-02', 'lunch', 375) ,
(14, 52, '2023-04-05', 'lunch', 196) ,
(15, 36, '2023-04-06', 'dinner', 134) ,
(16, 28, '2023-04-07', 'breakfast', 736) ,
(17, 66, '2023-04-07', 'lunch', 891) ,
(18, 27, '2023-04-01', 'dinner', 429) ,
(19, 55, '2023-04-02', 'dinner', 884) ,
(20, 8, '2023-04-03', 'lunch', 893) ,
(21, 44, '2023-04-04', 'snack', 353) ,
(22, 94, '2023-04-07', 'snack', 432) ,
(23, 83, '2023-04-04', 'dinner', 153) ,
(24, 5, '2023-04-06', 'breakfast', 895) ,
(25, 28, '2023-04-02', 'lunch', 464) ,
(26, 61, '2023-04-03', 'breakfast', 375) ,
(27, 55, '2023-04-06', 'snack', 734) ,
(28, 66, '2023-04-02', 'breakfast', 483) ,
(29, 63, '2023-04-01', 'dinner', 818) ,
(30, 94, '2023-04-05', 'dinner', 485) ,
(31, 74, '2023-04-07', 'breakfast', 492) ,
(32, 87, '2023-04-02', 'lunch', 759) ,
(33, 31, '2023-04-02', 'snack', 223) ,
(34, 71, '2023-04-01', 'breakfast', 890) ,
(35, 66, '2023-04-07', 'lunch', 352) ,
(36, 71, '2023-04-06', 'snack', 831) ,
(37, 31, '2023-04-01', 'breakfast', 545) ,
(38, 91, '2023-04-07', 'snack', 363) ,
(39, 5, '2023-04-02', 'dinner', 518) ,
(40, 8, '2023-04-02', 'lunch', 879) ,
(41, 19, '2023-04-06', 'breakfast', 906) ,
(42, 66, '2023-04-06', 'dinner', 305) ,
(43, 48, '2023-04-04', 'snack', 288) ,
(44, 71, '2023-04-02', 'breakfast', 678) ,
(45, 5, '2023-04-06', 'snack', 699) ,
(46, 70, '2023-04-05', 'snack', 189) ,
(47, 71, '2023-04-06', 'dinner', 164) ,
(48, 5, '2023-04-06', 'lunch', 486) ,
(49, 48, '2023-04-02', 'dinner', 768) ,
(50, 74, '2023-04-06', 'breakfast', 438) ,
(51, 94, '2023-04-06', 'lunch', 760) ,
(52, 76, '2023-04-06', 'breakfast', 953) ,
(53, 5, '2023-04-05', 'dinner', 948) ,
(54, 62, '2023-04-01', 'breakfast', 324) ,
(55, 53, '2023-04-05', 'breakfast', 742) ,
(56, 71, '2023-04-04', 'lunch', 877) ,
(57, 78, '2023-04-04', 'lunch', 224) ,
(58, 74, '2023-04-05', 'dinner', 794) ,
(59, 75, '2023-04-03', 'snack', 184) ,
(60, 48, '2023-04-01', 'lunch', 965) ,
(61, 52, '2023-04-07', 'dinner', 389) ,
(62, 8, '2023-04-07', 'lunch', 885) ,
(63, 31, '2023-04-05', 'lunch', 306) ,
(64, 24, '2023-04-05', 'dinner', 203) ,
(65, 27, '2023-04-07', 'dinner', 650) ,
(66, 67, '2023-04-01', 'breakfast', 648) ,
(67, 5, '2023-04-05', 'lunch', 265) ,
(68, 98, '2023-04-01', 'lunch', 816) ,
(69, 36, '2023-04-07', 'dinner', 768) ,
(70, 19, '2023-04-06', 'lunch', 566) ,
(71, 70, '2023-04-07', 'breakfast', 254) ,
(72, 98, '2023-04-03', 'dinner', 459) ,
(73, 63, '2023-04-07', 'lunch', 626) ,
(74, 83, '2023-04-05', 'snack', 528) ,
(75, 71, '2023-04-05', 'dinner', 749) ,
(76, 31, '2023-04-07', 'dinner', 705) ,
(77, 55, '2023-04-04', 'dinner', 857) ,
(78, 86, '2023-04-07', 'dinner', 551) ,
(79, 61, '2023-04-07', 'snack', 465) ,
(80, 28, '2023-04-05', 'breakfast', 702) ,
(81, 62, '2023-04-06', 'breakfast', 792) ,
(82, 94, '2023-04-01', 'snack', 576) ,
(83, 76, '2023-04-03', 'breakfast', 369) ,
(84, 28, '2023-04-01', 'snack', 451) ,
(85, 44, '2023-04-07', 'dinner', 830) ,
(86, 63, '2023-04-07', 'lunch', 256) ,
(87, 63, '2023-04-05', 'lunch', 938) ,
(88, 71, '2023-04-06', 'snack', 911) ,
(89, 61, '2023-04-06', 'snack', 227) ,
(90, 78, '2023-04-06', 'snack', 445) ,
(91, 19, '2023-04-03', 'dinner', 222) ,
(92, 8, '2023-04-05', 'dinner', 248) ,
(93, 55, '2023-04-07', 'lunch', 954) ,
(94, 8, '2023-04-01', 'lunch', 842) ,
(95, 10, '2023-04-02', 'lunch', 122) ,
(96, 32, '2023-04-03', 'breakfast', 991) ,
(97, 5, '2023-04-07', 'snack', 646) ,
(98, 62, '2023-04-01', 'snack', 771) ,
(99, 36, '2023-04-05', 'lunch', 806) ;

INSERT INTO Exercise (exercise_id, trainee_id, date, exercise_type, duration) VALUES 
(1, 19, '2023-04-04', 'weightlifting', 54) ,
(2, 74, '2023-04-07', 'yoga', 38) ,
(3, 74, '2023-04-03', 'cycling', 13) ,
(4, 52, '2023-04-03', 'yoga', 14) ,
(5, 76, '2023-04-07', 'swimming', 58) ,
(6, 28, '2023-04-07', 'weightlifting', 52) ,
(7, 24, '2023-04-04', 'yoga', 18) ,
(8, 74, '2023-04-04', 'swimming', 47) ,
(9, 36, '2023-04-02', 'running', 56) ,
(10, 31, '2023-04-05', 'yoga', 36) ,
(11, 28, '2023-04-01', 'weightlifting', 33) ,
(12, 48, '2023-04-03', 'weightlifting', 43) ,
(13, 78, '2023-04-06', 'swimming', 54) ,
(14, 55, '2023-04-05', 'weightlifting', 17) ,
(15, 27, '2023-04-06', 'running', 42) ,
(16, 61, '2023-04-02', 'swimming', 26) ,
(17, 55, '2023-04-04', 'cycling', 36) ,
(18, 98, '2023-04-05', 'swimming', 60) ,
(19, 94, '2023-04-05', 'cycling', 38) ,
(20, 48, '2023-04-06', 'swimming', 11) ,
(21, 71, '2023-04-05', 'swimming', 30) ,
(22, 74, '2023-04-07', 'yoga', 55) ,
(23, 44, '2023-04-05', 'swimming', 30) ,
(24, 70, '2023-04-02', 'cycling', 27) ,
(25, 63, '2023-04-01', 'weightlifting', 23) ,
(26, 31, '2023-04-01', 'running', 34) ,
(27, 8, '2023-04-04', 'weightlifting', 60) ,
(28, 83, '2023-04-06', 'swimming', 53) ,
(29, 19, '2023-04-05', 'running', 31) ,
(30, 17, '2023-04-07', 'weightlifting', 28) ,
(31, 94, '2023-04-03', 'running', 39) ,
(32, 86, '2023-04-06', 'weightlifting', 38) ,
(33, 36, '2023-04-02', 'cycling', 38) ,
(34, 70, '2023-04-01', 'swimming', 38) ,
(35, 86, '2023-04-04', 'cycling', 10) ,
(36, 61, '2023-04-05', 'running', 20) ,
(37, 70, '2023-04-07', 'running', 59) ,
(38, 28, '2023-04-07', 'weightlifting', 57) ,
(39, 71, '2023-04-01', 'weightlifting', 59) ,
(40, 91, '2023-04-03', 'running', 21) ,
(41, 91, '2023-04-06', 'yoga', 45) ,
(42, 87, '2023-04-06', 'swimming', 11) ,
(43, 19, '2023-04-02', 'running', 23) ,
(44, 83, '2023-04-05', 'weightlifting', 22) ,
(45, 28, '2023-04-03', 'cycling', 27) ,
(46, 62, '2023-04-05', 'running', 57) ,
(47, 67, '2023-04-06', 'yoga', 21) ,
(48, 98, '2023-04-03', 'yoga', 40) ,
(49, 36, '2023-04-07', 'cycling', 41) ,
(50, 63, '2023-04-07', 'cycling', 58) ,
(51, 5, '2023-04-06', 'weightlifting', 47) ,
(52, 24, '2023-04-03', 'yoga', 37) ,
(53, 10, '2023-04-04', 'cycling', 11) ,
(54, 32, '2023-04-01', 'yoga', 24) ,
(55, 67, '2023-04-02', 'swimming', 38) ,
(56, 76, '2023-04-03', 'weightlifting', 29) ,
(57, 71, '2023-04-03', 'swimming', 30) ,
(58, 19, '2023-04-07', 'swimming', 52) ,
(59, 10, '2023-04-05', 'cycling', 55) ,
(60, 61, '2023-04-07', 'weightlifting', 44) ,
(61, 24, '2023-04-05', 'swimming', 34) ,
(62, 53, '2023-04-06', 'swimming', 27) ,
(63, 8, '2023-04-07', 'weightlifting', 52) ,
(64, 74, '2023-04-07', 'yoga', 44) ,
(65, 19, '2023-04-07', 'running', 50) ,
(66, 75, '2023-04-02', 'running', 10) ,
(67, 48, '2023-04-06', 'running', 50) ,
(68, 75, '2023-04-02', 'cycling', 15) ,
(69, 52, '2023-04-01', 'yoga', 15) ,
(70, 83, '2023-04-02', 'cycling', 33) ,
(71, 24, '2023-04-06', 'yoga', 38) ,
(72, 70, '2023-04-07', 'weightlifting', 46) ,
(73, 76, '2023-04-05', 'swimming', 24) ,
(74, 91, '2023-04-07', 'swimming', 35) ,
(75, 5, '2023-04-02', 'weightlifting', 27) ,
(76, 55, '2023-04-05', 'cycling', 32) ,
(77, 55, '2023-04-04', 'running', 35) ,
(78, 52, '2023-04-01', 'swimming', 41) ,
(79, 52, '2023-04-05', 'running', 36) ,
(80, 55, '2023-04-02', 'swimming', 48) ,
(81, 83, '2023-04-04', 'yoga', 15) ,
(82, 76, '2023-04-06', 'yoga', 12) ,
(83, 87, '2023-04-03', 'running', 36) ,
(84, 10, '2023-04-01', 'yoga', 24) ,
(85, 62, '2023-04-02', 'weightlifting', 59) ,
(86, 61, '2023-04-03', 'swimming', 40) ,
(87, 24, '2023-04-01', 'cycling', 55) ,
(88, 27, '2023-04-01', 'swimming', 37) ,
(89, 86, '2023-04-04', 'yoga', 19) ,
(90, 66, '2023-04-04', 'cycling', 24) ,
(91, 98, '2023-04-07', 'weightlifting', 49) ,
(92, 62, '2023-04-06', 'yoga', 43) ,
(93, 48, '2023-04-01', 'weightlifting', 26) ,
(94, 91, '2023-04-03', 'yoga', 33) ,
(95, 19, '2023-04-02', 'weightlifting', 24) ,
(96, 94, '2023-04-05', 'weightlifting', 36) ,
(97, 86, '2023-04-03', 'weightlifting', 41) ,
(98, 32, '2023-04-07', 'yoga', 20) ,
(99, 66, '2023-04-02', 'yoga', 53) ;

INSERT INTO Diet_Plan (plan_id, trainee_id, start_date, end_date, plan_description) VALUES 
(1, 5, '2023-04-09', '2023-04-18', 'Left carry door them improve. Simply close relate require. Level when degree agree that television.') ,
(2, 8, '2023-04-12', '2023-04-28', 'Follow author give whole reduce event. Agent beautiful strategy. Read word thing follow.\nSpeak them though election environmental gun wind. Thing somebody heavy up.') ,
(3, 10, '2023-04-10', '2023-04-23', 'House improve camera there most couple role hear. Child view share response garden amount least.') ,
(4, 17, '2023-04-12', '2023-04-21', 'Address environmental news why apply window. Firm still she price. Season those citizen.\nToward dream edge do there discussion. Economic college unit wife news. Easy floor human prove interest.') ,
(5, 19, '2023-04-13', '2023-05-02', 'Behind meeting later hit carry east serious.\nOperation body happy speech. Help tend thousand. Affect throw economy individual.') ,
(6, 24, '2023-04-13', '2023-05-07', 'Political anyone director your. Southern item month travel upon they win. Medical decision food threat sport total.\nBoth scientist great think wish major your. Condition view dinner.') ,
(7, 27, '2023-04-10', '2023-04-30', 'Rich art sign check.\nInterview attorney scientist theory result fast. Rise television buy American evening whatever its.\nAgreement operation section car place college. Discussion fall simple.') ,
(8, 28, '2023-04-13', '2023-04-26', 'Security behavior prevent there. Approach still exist performance article. Of walk machine amount.') ,
(9, 31, '2023-04-10', '2023-04-26', 'Score upon event push town safe. Sister test fear company.\nFactor they place operation it water. Discover find these. Step expect education detail firm discussion capital.') ,
(10, 32, '2023-04-08', '2023-04-21', 'Happen alone yourself budget present cost. Tonight concern subject win article. As five brother this record at subject.\nFather middle success personal whether. Country decision require beat.') ,
(11, 36, '2023-04-10', '2023-04-19', 'Truth college whom most. Concern leg ever.\nShake force campaign enough task bit identify. Agree have eat could sea determine example. Area another treat the.') ,
(12, 44, '2023-04-12', '2023-04-17', 'Side spend budget receive seek politics. Song price peace east trial. After television three cause unit. Wait lay gas future.') ,
(13, 48, '2023-04-13', '2023-05-04', 'Success letter Mr more the. Decide cup draw everybody particular. Think head safe avoid may best raise. Among expert wind color important lot.') ,
(14, 52, '2023-04-14', '2023-05-02', 'International listen visit sport over. Now article huge happen once whole. Size single look game trouble.\nYeah laugh real last. Especially ten industry.') ,
(15, 53, '2023-04-12', '2023-04-23', 'Only at political. If life tell service themselves. Produce respond such beautiful.\nCandidate expert good. Behind language particularly with forward key visit.') ,
(16, 55, '2023-04-12', '2023-04-19', 'From memory consumer treat. Finally day agree phone us decide every. Year feeling able parent.') ,
(17, 61, '2023-04-08', '2023-05-02', 'His care indicate example perform. Author maybe quality. Part very clear. Hear eight usually court consider.') ,
(18, 62, '2023-04-10', '2023-05-04', 'Almost eye though chair garden collection.\nThere final everybody fish plan. And head more reality than southern religious.') ,
(19, 63, '2023-04-10', '2023-05-07', 'Information figure capital thousand. Data stop run teacher. Summer worker prove should throw product.\nSome case interest by skin. Whatever whether though rock. North oil me team stock continue fly.') ,
(20, 66, '2023-04-09', '2023-04-23', 'True response forward learn trial enough election.\nLead animal entire yet rock. Box ability family difference entire Democrat since.') ,
(21, 67, '2023-04-08', '2023-05-01', 'Item suddenly night reason. Little debate contain model first.\nProbably and along responsibility some relationship would. Crime amount season performance. Any store difference.') ,
(22, 70, '2023-04-11', '2023-04-27', 'Including different issue large easy customer gas. Source most be success.\nLocal commercial guess reflect federal by hear. Surface skin list Mrs body glass.') ,
(23, 71, '2023-04-12', '2023-04-19', 'In seven similar tend. Stop local quickly determine break up.\nPolitics president Mr hair must kind.\nOur court information. Kind her thus always.') ,
(24, 74, '2023-04-11', '2023-04-20', 'Activity sing leg present memory wife general. Step field national someone recent pay effect. Young small music art.\nNote student yard force center social technology. One understand focus huge.') ,
(25, 75, '2023-04-09', '2023-04-16', 'Guess happy miss term popular catch state. Society agreement include result wall reduce general pressure.\nOld feel future happy.\nAlthough near section dog challenge turn early from.') ,
(26, 76, '2023-04-12', '2023-05-06', 'Pressure red education lot. Receive old wall daughter. Lead down behavior cost run.') ,
(27, 78, '2023-04-09', '2023-04-30', 'Argue six research grow section important. Attorney degree option range. Responsibility world old car movie spend strategy to. Energy back matter ability voice middle.') ,
(28, 83, '2023-04-10', '2023-04-25', 'Season management station. Under body idea current central trade I type.\nDeal wait agent. Strong hard listen base together beyond.') ,
(29, 86, '2023-04-11', '2023-04-29', 'Set happy style. Cause indeed should someone small value be.\nTrial wind door thus fast particular reality. Together guy husband seat.\nDesign whole carry group kid build image size. Reduce stuff off.') ,
(30, 87, '2023-04-10', '2023-04-27', 'Attorney way executive option world point. Daughter whole enough song put. Six debate study before leave theory.') ,
(31, 91, '2023-04-12', '2023-05-05', 'Page record start truth. Stage over space newspaper of scene wish. Outside grow four government if policy.\nHit both mouth usually tonight. Huge key let from reveal others or. Stuff want boy man.') ,
(32, 94, '2023-04-13', '2023-04-17', 'Time different pay life. Especially both win rule step. Material machine to market area fund.\nAnimal public increase dream computer. Or rock such tonight line.') ,
(33, 98, '2023-04-14', '2023-04-27', 'Member about road total. Individual bag majority strategy improve federal manage next. Huge media after.\nAbility until situation political. Civil character dog national.') ;

INSERT INTO Exercise_Plan (plan_id, trainee_id, start_date, end_date, plan_description) VALUES 
(1, 5, '2023-04-12', '2023-04-21', 'Moment wish throw usually onto rise. Cover rule where teacher carry. Person adult piece item board including another.') ,
(2, 8, '2023-04-10', '2023-05-07', 'Threat gun talk box. Need prepare than skill whose weight. Road two available new contain life benefit.') ,
(3, 10, '2023-04-10', '2023-04-24', 'See front short agent national. Last police suffer peace approach candidate. Defense ten letter idea same recent movie coach.') ,
(4, 17, '2023-04-11', '2023-04-23', 'Military fly speak draw. Stand learn throughout will leg career human. Town though agent whose want cell. Song where trouble report remember.') ,
(5, 19, '2023-04-14', '2023-04-20', 'Brother first people west bed. Push girl mission on nothing.\nLive work media too reveal century trouble. Such old social. Past determine during.\nHospital think other than too along.') ,
(6, 24, '2023-04-14', '2023-04-28', 'Realize industry star as do whole that. Inside same how among many turn season.\nExperience debate style dream.') ,
(7, 27, '2023-04-12', '2023-04-17', 'Summer trip month court. From manager so painting purpose draw special here.') ,
(8, 28, '2023-04-09', '2023-05-04', 'Others late majority top know PM attention. Environment design several huge task method.') ,
(9, 31, '2023-04-12', '2023-04-17', 'The plan price road yourself decade. Right last analysis detail time protect create.') ,
(10, 32, '2023-04-12', '2023-04-28', 'Marriage short theory eight finally. Imagine campaign opportunity. Term possible service wife TV statement.\nToo lose and money however. Middle save billion.') ,
(11, 36, '2023-04-10', '2023-04-29', 'If year give picture. Law perform stop family others our.\nBy doctor series theory age break. Push he instead challenge test would oil. Into guess news interest. Tax catch between tree.') ,
(12, 44, '2023-04-08', '2023-04-29', 'Name commercial bag party idea stay dog. High year book. Behavior program in.\nItself until little message entire. Agent fly house much stop.') ,
(13, 48, '2023-04-11', '2023-04-15', 'Nice again over which hand must go. Past animal thank money administration create. Born however peace produce especially full fund.') ,
(14, 52, '2023-04-09', '2023-05-05', 'Husband phone art part. Build show capital ok system. Like nature now charge physical add simple physical.') ,
(15, 53, '2023-04-10', '2023-05-01', 'Next build administration old seven fund. Would color international. Politics vote kid not line some. Prevent raise pressure again.\nWrong guess skin nature. Produce simple hand alone team whom.') ,
(16, 55, '2023-04-11', '2023-04-24', 'Career anyone light far support sing full chance. As wear but paper president test media.') ,
(17, 61, '2023-04-09', '2023-04-29', 'Picture each big social. Poor effect describe hundred. Usually church identify tonight black center. Claim bill employee participant drop.\nColor memory worker. Score simple set own gun.') ,
(18, 62, '2023-04-14', '2023-04-15', 'Or able analysis hospital machine wear sport. Sort major together act actually mouth president let. Economy nature maintain news your start its.') ,
(19, 63, '2023-04-12', '2023-04-26', 'Sea let traditional enjoy discover home process early. Example despite cut tax about style purpose. Itself carry owner friend treat suddenly.') ,
(20, 66, '2023-04-14', '2023-05-06', 'Mrs hour edge strategy heavy. Serve student type kid loss again reveal. Positive film force upon development.\nCold personal indeed quality about pressure. Concern dog room wrong level.') ,
(21, 67, '2023-04-13', '2023-04-16', 'Per foot society before. Top radio teacher.\nStage expect act go loss third land. Little low carry data action resource.\nCup everything others deep.') ,
(22, 70, '2023-04-13', '2023-04-25', 'Sense environment together detail. Physical also test husband smile major.\nWord right success another once coach friend. Challenge use like card.') ,
(23, 71, '2023-04-09', '2023-04-25', 'Media right full. Sound manage particular long. Sit scene image population travel personal everyone.\nUntil know civil. Million relate politics responsibility mouth go school.') ,
(24, 74, '2023-04-08', '2023-04-16', 'Third series operation. Risk area sell time party bank consider. Hard speech four talk provide fact.\nPerform simply property rich enough officer. Tax admit above agency.') ,
(25, 75, '2023-04-12', '2023-05-04', 'Book standard possible be want performance beautiful hair. Message goal choose according these.\nEducation trip thus. Sort worry participant newspaper. Season admit peace image manage visit type.') ,
(26, 76, '2023-04-10', '2023-04-29', 'Theory network space firm give reflect. Knowledge camera business.\nDiscuss month try figure clearly deep stay forget. Face not expect discussion. Pass daughter gas teacher life. Now media career.') ,
(27, 78, '2023-04-13', '2023-05-03', 'Information concern remain country deep.\nAnd edge its also where as walk. Father feel rule rule major on.') ,
(28, 83, '2023-04-11', '2023-05-03', 'Recent minute training land campaign. Option serve second available break adult debate. Particular fear she.') ,
(29, 86, '2023-04-13', '2023-04-21', 'Respond drop day boy pay.\nTell star decade baby better financial word skill. Wide most despite lawyer defense around economic. Dark will act wait situation eat matter activity.') ,
(30, 87, '2023-04-10', '2023-05-02', 'Such concern hold west. Woman under why officer. Coach age job beyond laugh somebody send.\nGirl green value newspaper degree. Avoid notice than. Unit different fill cell and.') ,
(31, 91, '2023-04-12', '2023-04-15', 'World current week fill strong can. Down concern beat body. Plant court cause me often charge. After now section recognize.\nNews economy west election treatment spring.') ,
(32, 94, '2023-04-14', '2023-04-16', 'Measure I page west occur prevent next shake. Time plan bit common guy cost.\nWho pick pull deal trial. Establish while give newspaper thousand along everyone. He next civil both number meet.') ,
(33, 98, '2023-04-10', '2023-05-04', 'Partner information national leave radio available surface. Either safe matter politics explain responsibility son. Rule political letter if majority practice deal.') ;
