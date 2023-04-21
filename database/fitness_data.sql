delete from Calorie_Intake;
delete from Exercise;
delete from Diet_Plan;
delete from Exercise_Plan;
delete from Trainer;
delete from Dietician;
delete from Trainee;
delete from Users;

INSERT INTO Users (user_id, name, email, password, age, gender, user_role) VALUES 
(1, 'Crystal Spears', 'gpatrick@example.net', 'g^X$8mRwvc', 27, 'female', 'trainee') ,
(2, 'Christopher Wong', 'weaverbrian@example.org', '(J3P+VdcT6', 65, 'female', 'dietician') ,
(3, 'Samuel Kennedy', 'jasonmalone@example.org', 'jv5O+WZ_P!', 61, 'female', 'trainee') ,
(4, 'Steven Lamb', 'anthonysanchez@example.net', 'M%r8*R7ex@', 44, 'other', 'dietician') ,
(5, 'Adrian Brown', 'joyrichardson@example.net', '&oD18lIM6U', 24, 'female', 'trainer') ,
(6, 'Ashley Miller', 'chloe95@example.org', 'VXr5FVnm+5', 63, 'other', 'dietician') ,
(7, 'Susan Hill', 'khoward@example.net', 'LV*4Y4wJk+', 34, 'female', 'trainer') ,
(8, 'Nicholas Wilson', 'dukeelizabeth@example.org', '(T+AGKub#0', 38, 'male', 'trainee') ,
(9, 'Mrs. Maria Graham', 'rlopez@example.net', '#U8Ph7C76G', 55, 'other', 'dietician') ,
(10, 'Michael Washington', 'codylopez@example.net', 'DvXye9Ol!(', 53, 'other', 'trainee') ,
(11, 'Jacob Cunningham', 'ejackson@example.org', 's_1J_Zv#jV', 61, 'male', 'dietician') ,
(12, 'April Harris', 'randyross@example.org', '3CG91d@x^9', 31, 'other', 'dietician') ,
(13, 'Michael Barry', 'kellie00@example.org', '&cTqK0ad74', 60, 'male', 'trainer') ,
(14, 'Shane Mathis', 'yrichard@example.org', '46nE6xwi&6', 31, 'other', 'dietician') ,
(15, 'Kaitlyn Hines', 'jasonmorales@example.com', 'yKk4H!$x%8', 29, 'male', 'trainer') ,
(16, 'Gary Henderson', 'phillipbrown@example.org', '@2d*17iBSH', 53, 'other', 'trainee') ,
(17, 'Amanda Scott', 'washingtonjoseph@example.org', 'III8K3Fhp@', 51, 'female', 'dietician') ,
(18, 'Amber Lyons', 'zellis@example.com', 'UE+0!^Dj%s', 35, 'female', 'dietician') ,
(19, 'Justin Whitney', 'gerald43@example.org', 'vrMD^6B$L^', 49, 'other', 'trainee') ,
(20, 'Donna Johnson', 'rushrobert@example.net', 'o@36H(vrM3', 57, 'other', 'trainee') ,
(21, 'Melanie Martinez', 'kingsamantha@example.net', 'P)**5FBwxQ', 45, 'male', 'trainee') ,
(22, 'Katherine Maldonado', 'tylerdavis@example.com', '(*1)CNg)+w', 20, 'female', 'trainer') ,
(23, 'Kevin Cervantes', 'ahayes@example.net', 'IA9u0&Ezz@', 28, 'other', 'trainee') ,
(24, 'Michael Petty', 'maureenhood@example.net', '_9w^Gxrc#z', 53, 'female', 'trainer') ,
(25, 'Kevin Brooks', 'smithdavid@example.com', '+qnY9Ev_a6', 49, 'male', 'trainer') ,
(26, 'Maurice Patrick', 'alexanderjanice@example.net', '+4zU%AeZc5', 28, 'male', 'trainer') ,
(27, 'Jason Wang', 'zburgess@example.net', 'Q8X9a81e)O', 62, 'male', 'trainee') ,
(28, 'Cody Compton', 'pauljones@example.net', '$4#f7SDkyL', 34, 'other', 'trainee') ,
(29, 'Logan Gregory', 'wallaceangela@example.org', '_O%zaKTd5j', 37, 'male', 'dietician') ,
(30, 'Jason Terry', 'danielle29@example.org', '#Z0QoRex3Y', 34, 'female', 'dietician') ,
(31, 'Nina Hooper', 'lwolfe@example.net', '@YE58FObs6', 22, 'female', 'dietician') ,
(32, 'Christopher Howard', 'matthewtodd@example.com', '_0YVZRfY7B', 40, 'female', 'trainee') ,
(33, 'Rebecca Buchanan', 'jeffmalone@example.com', 'F)Tt5SuX%$', 46, 'male', 'dietician') ,
(34, 'Chris Riley DVM', 'cpatton@example.net', 'r_1$M$Q1Rv', 48, 'male', 'trainer') ,
(35, 'Sabrina Stephenson', 'oschmidt@example.org', ')RZxr0f9)8', 27, 'other', 'trainee') ,
(36, 'Marc Carlson', 'michaeloliver@example.org', 'Nrs5M)Ju#)', 62, 'male', 'trainee') ,
(37, 'Cristina Thompson', 'annebarnes@example.com', 'CyR3Dwjv$f', 21, 'other', 'dietician') ,
(38, 'Matthew Snyder', 'benjamin82@example.net', '^r5JOMc&F7', 61, 'male', 'trainer') ,
(39, 'David Ferguson', 'henrystephenson@example.net', '$4OT_$x5dr', 61, 'other', 'trainer') ,
(40, 'Gregory Harrison', 'npreston@example.org', '^RyLtl9^P9', 55, 'male', 'trainee') ,
(41, 'Gerald Alvarez', 'joshua69@example.com', 'Bq7YP@Ov@L', 45, 'male', 'dietician') ,
(42, 'Kyle Phillips', 'heathermccarty@example.net', '8xG2+a%4+F', 60, 'other', 'trainer') ,
(43, 'Christopher Martinez', 'nanderson@example.org', '#6qTeqanXU', 22, 'female', 'dietician') ,
(44, 'Tiffany Hernandez', 'sharon45@example.com', 'pyRdbmuq&7', 41, 'male', 'trainer') ,
(45, 'Charles Turner', 'williamsadam@example.com', '@)q12Osy3F', 42, 'female', 'dietician') ,
(46, 'Cassandra Brown', 'xho@example.org', 'o4$_6HcgXV', 38, 'male', 'trainer') ,
(47, 'Juan Gibson', 'kennethstevens@example.net', '+XYrCgzk5O', 60, 'female', 'trainee') ,
(48, 'Kim Johnson', 'jlee@example.org', 'E(R052Cb_%', 46, 'female', 'dietician') ,
(49, 'Samantha Chavez', 'uwilliams@example.org', '^4ACX^et6J', 36, 'male', 'trainer') ,
(50, 'John Lee', 'richard32@example.net', '#20TeMJj9+', 40, 'other', 'trainee') ,
(51, 'Ryan Schultz', 'brett03@example.com', '!XvdA8tlD6', 48, 'female', 'trainer') ,
(52, 'Deborah Rice', 'zboyd@example.net', 'G^)5aDOhGq', 40, 'female', 'dietician') ,
(53, 'Charles Morgan', 'wilsonbrooke@example.org', '5Ar#VSrY#s', 54, 'other', 'trainer') ,
(54, 'Teresa Alvarez', 'pamela36@example.org', '#7eSuNs6Z2', 31, 'female', 'trainee') ,
(55, 'Angel Cummings', 'youngdaniel@example.com', '!jTEfyNo52', 55, 'female', 'trainer') ,
(56, 'Michael Smith', 'zknight@example.org', '+Wg%!3ke1&', 58, 'other', 'dietician') ,
(57, 'Kimberly Garcia', 'jford@example.org', '(VEGkGwei9', 58, 'male', 'trainer') ,
(58, 'Breanna Pugh', 'fstephens@example.org', '_265H0iS)1', 35, 'other', 'trainee') ,
(59, 'Travis Rodriguez', 'julie98@example.org', 'o)B25PPx5T', 51, 'female', 'dietician') ,
(60, 'Jacob Collins', 'walkeramber@example.net', 'g2x4Be0jZ@', 37, 'male', 'trainee') ,
(61, 'George Anderson', 'mccoyjennifer@example.net', '@1wVSiAxIK', 45, 'male', 'dietician') ,
(62, 'Karen Miller', 'justinhill@example.org', 'hsk4NEac)k', 63, 'female', 'dietician') ,
(63, 'John Joyce Jr.', 'masondaniel@example.org', '9iO5hqf3+7', 25, 'female', 'dietician') ,
(64, 'Samuel Leblanc', 'timothygilmore@example.com', 'JxQJS(eN_6', 34, 'female', 'trainer') ,
(65, 'Kara Graham', 'reesemadison@example.org', '*5LQF@Kyo5', 39, 'female', 'trainee') ,
(66, 'Jonathan Carter', 'jenny91@example.org', '#8CCa3XdB+', 53, 'female', 'trainee') ,
(67, 'Brandy Allen', 'michellekline@example.org', '$U5TLP3k93', 44, 'male', 'trainee') ,
(68, 'Dustin Hughes', 'dmahoney@example.com', 'M0RX^rGg$X', 52, 'other', 'dietician') ,
(69, 'Marie Pitts', 'matthew68@example.org', '#2NWX4)X%o', 42, 'other', 'trainee') ,
(70, 'Angel Bryan', 'cgarcia@example.net', '$%DP%Jpe3Q', 51, 'other', 'trainer') ,
(71, 'Joseph Patterson', 'harry64@example.org', 'U+x3A)fL@_', 45, 'male', 'trainee') ,
(72, 'Anthony Navarro', 'shirleyhinton@example.com', '(7QC3tp$)R', 65, 'male', 'trainer') ,
(73, 'Tina Montgomery', 'troyharrington@example.org', '#2ZLvg_B6w', 49, 'other', 'trainee') ,
(74, 'Jennifer Rodriguez', 'mario58@example.com', '71JEAwYk#9', 29, 'other', 'trainer') ,
(75, 'Joseph Merritt', 'jonathonmckinney@example.net', '*umJ%qQR_4', 58, 'female', 'dietician') ,
(76, 'Jamie Thompson', 'heathergraves@example.net', '+^B7IXjaen', 62, 'other', 'trainee') ,
(77, 'Casey Frank', 'kshepard@example.net', 's#jum4Ljx0', 47, 'female', 'trainee') ,
(78, 'Catherine Carrillo', 'darlenecarr@example.com', 'HHS^VZVf^3', 21, 'other', 'trainee') ,
(79, 'Karen Campos', 'john09@example.org', 'X0ZsIWhN+1', 29, 'female', 'dietician') ,
(80, 'Brittany Davis', 'nathaniel03@example.net', 'P2HhJC5B!3', 36, 'male', 'dietician') ,
(81, 'Nicholas Phillips', 'lesliescott@example.com', '5)3@bXxr$e', 31, 'other', 'dietician') ,
(82, 'Kendra Lucas', 'anthony13@example.net', 'IW80W$d*J^', 55, 'male', 'dietician') ,
(83, 'Michele Morris', 'lambertmark@example.com', 'U6+MJ&Yc!Z', 27, 'male', 'trainer') ,
(84, 'Leslie Freeman', 'oclark@example.org', '#1Xr!RvBp6', 44, 'other', 'trainee') ,
(85, 'Kelly Bauer', 'elawson@example.org', '$_8YmxYx@v', 33, 'female', 'trainee') ,
(86, 'Adam Ruiz', 'anthony06@example.com', 'DS94TmXL*P', 44, 'female', 'dietician') ,
(87, 'Kelly Butler', 'smithmark@example.com', 'vfKr0CAy+a', 47, 'other', 'trainer') ,
(88, 'Mary Graham', 'ioneal@example.org', 'hS^5UULowg', 50, 'other', 'trainee') ,
(89, 'Rachel Sanchez', 'kingsteve@example.net', 'rR020Fu(@&', 49, 'male', 'trainer') ,
(90, 'Shane Carpenter', 'austinashley@example.org', '5DlvZFH9*z', 50, 'other', 'trainer') ,
(91, 'Joanna Young', 'vmack@example.org', 'm*8FKpnI^U', 37, 'female', 'dietician') ,
(92, 'Sean Wells', 'scottdunn@example.net', 'twfD&pth%8', 61, 'female', 'trainer') ,
(93, 'Brittany Walker', 'mwilliams@example.com', '6R+9LFIyy0', 33, 'other', 'trainee') ,
(94, 'Billy Brown', 'duranbrandon@example.com', '+t@06@WvPB', 65, 'male', 'dietician') ,
(95, 'Adam Campbell', 'jessica51@example.com', 'iX4$WMed+j', 48, 'male', 'dietician') ,
(96, 'Jessica Smith', 'hahnjillian@example.com', '^#6ZA+co4i', 38, 'other', 'trainee') ,
(97, 'Lynn Matthews', 'dgallagher@example.net', 'b%8fD2zK52', 23, 'female', 'trainee') ,
(98, 'Dawn Contreras', 'adamsjake@example.org', '_5e3qYj$5O', 23, 'male', 'dietician') ,
(99, 'Jill Burton', 'brownjeffrey@example.net', '8_8EZA7cfl', 22, 'other', 'trainee') ;

INSERT INTO Trainee (trainee_id, activity_level, height, weight, goal) VALUES 
(1, 4, 1.51, 57.9, 'maintain weight') ,
(3, 5, 2.08, 47.8, 'gain weight') ,
(8, 1, 1.64, 57.7, 'build muscle') ,
(10, 5, 2.13, 50.9, 'lose weight') ,
(16, 4, 1.93, 124.9, 'lose weight') ,
(19, 5, 1.78, 48.3, 'build muscle') ,
(20, 2, 2.17, 97.7, 'lose weight') ,
(21, 3, 1.73, 108.0, 'maintain weight') ,
(23, 4, 1.81, 116.9, 'maintain weight') ,
(27, 2, 1.89, 37.4, 'maintain weight') ,
(28, 4, 1.53, 76.4, 'build muscle') ,
(32, 1, 1.64, 61.1, 'maintain weight') ,
(35, 2, 2.05, 119.8, 'maintain weight') ,
(36, 2, 1.77, 74.8, 'maintain weight') ,
(40, 2, 2.08, 84.6, 'lose weight') ,
(47, 2, 1.49, 125.3, 'gain weight') ,
(50, 1, 1.5, 85.1, 'gain weight') ,
(54, 5, 2.1, 73.2, 'lose weight') ,
(58, 1, 1.43, 118.8, 'lose weight') ,
(60, 2, 2.17, 115.2, 'lose weight') ,
(65, 3, 1.53, 69.7, 'maintain weight') ,
(66, 2, 1.9, 41.3, 'maintain weight') ,
(67, 1, 2.02, 31.6, 'build muscle') ,
(69, 4, 1.57, 72.6, 'build muscle') ,
(71, 5, 1.65, 54.3, 'gain weight') ,
(73, 3, 1.86, 129.4, 'lose weight') ,
(76, 1, 1.4, 123.6, 'build muscle') ,
(77, 1, 2.1, 102.6, 'build muscle') ,
(78, 4, 2.12, 91.6, 'maintain weight') ,
(84, 3, 1.42, 44.5, 'lose weight') ,
(85, 3, 2.16, 49.2, 'lose weight') ,
(88, 4, 1.52, 127.9, 'lose weight') ,
(93, 5, 1.75, 38.7, 'lose weight') ,
(96, 4, 1.51, 90.3, 'gain weight') ,
(97, 5, 1.9, 56.7, 'lose weight') ,
(99, 1, 1.45, 123.7, 'maintain weight') ;

INSERT INTO Trainer (trainer_id, trainee_id) VALUES 
(46, 1) ,
(5, 3) ,
(92, 8) ,
(55, 10) ,
(5, 16) ,
(15, 19) ,
(89, 20) ,
(7, 21) ,
(87, 23) ,
(44, 27) ,
(55, 28) ,
(92, 32) ,
(44, 35) ,
(13, 36) ,
(89, 40) ,
(49, 47) ,
(89, 50) ,
(87, 54) ,
(39, 58) ,
(42, 60) ,
(13, 65) ,
(26, 66) ,
(22, 67) ,
(39, 69) ,
(49, 71) ,
(90, 73) ,
(5, 76) ,
(24, 77) ,
(72, 78) ,
(7, 84) ,
(49, 85) ,
(24, 88) ,
(25, 93) ,
(53, 96) ,
(7, 97) ,
(26, 99) ;

INSERT INTO Dietician (dietician_id, trainee_id) VALUES 
(33, 1) ,
(37, 3) ,
(18, 8) ,
(52, 10) ,
(11, 16) ,
(52, 19) ,
(30, 20) ,
(56, 21) ,
(52, 23) ,
(41, 27) ,
(91, 28) ,
(18, 32) ,
(94, 35) ,
(52, 36) ,
(59, 40) ,
(52, 47) ,
(45, 50) ,
(56, 54) ,
(68, 58) ,
(79, 60) ,
(18, 65) ,
(31, 66) ,
(63, 67) ,
(14, 69) ,
(2, 71) ,
(37, 73) ,
(45, 76) ,
(63, 77) ,
(52, 78) ,
(33, 84) ,
(11, 85) ,
(14, 88) ,
(2, 93) ,
(33, 96) ,
(31, 97) ,
(45, 99) ;

INSERT INTO Calorie_Intake (intake_id, trainee_id, date, meal_type, calories) VALUES 
(1, 23, '2023-04-06', 'lunch', 464) ,
(2, 84, '2023-04-04', 'dinner', 432) ,
(3, 71, '2023-04-07', 'lunch', 699) ,
(4, 1, '2023-04-05', 'dinner', 449) ,
(5, 19, '2023-04-06', 'dinner', 377) ,
(6, 50, '2023-04-05', 'snack', 554) ,
(7, 19, '2023-04-08', 'dinner', 684) ,
(8, 19, '2023-04-03', 'dinner', 600) ,
(9, 93, '2023-04-07', 'breakfast', 231) ,
(10, 76, '2023-04-04', 'snack', 313) ,
(11, 78, '2023-04-09', 'lunch', 280) ,
(12, 50, '2023-04-08', 'snack', 494) ,
(13, 78, '2023-04-03', 'dinner', 804) ,
(14, 58, '2023-04-06', 'lunch', 505) ,
(15, 77, '2023-04-07', 'snack', 860) ,
(16, 50, '2023-04-04', 'dinner', 478) ,
(17, 84, '2023-04-08', 'dinner', 414) ,
(18, 78, '2023-04-06', 'breakfast', 917) ,
(19, 10, '2023-04-07', 'lunch', 538) ,
(20, 10, '2023-04-07', 'snack', 689) ,
(21, 60, '2023-04-05', 'lunch', 958) ,
(22, 76, '2023-04-05', 'dinner', 392) ,
(23, 40, '2023-04-05', 'breakfast', 286) ,
(24, 23, '2023-04-06', 'dinner', 398) ,
(25, 66, '2023-04-08', 'breakfast', 677) ,
(26, 36, '2023-04-03', 'snack', 740) ,
(27, 66, '2023-04-04', 'snack', 187) ,
(28, 65, '2023-04-03', 'dinner', 434) ,
(29, 84, '2023-04-03', 'dinner', 520) ,
(30, 40, '2023-04-03', 'dinner', 967) ,
(31, 66, '2023-04-03', 'breakfast', 142) ,
(32, 21, '2023-04-03', 'breakfast', 630) ,
(33, 78, '2023-04-04', 'snack', 383) ,
(34, 93, '2023-04-06', 'lunch', 337) ,
(35, 27, '2023-04-04', 'snack', 407) ,
(36, 73, '2023-04-08', 'breakfast', 375) ,
(37, 21, '2023-04-04', 'lunch', 407) ,
(38, 28, '2023-04-06', 'snack', 222) ,
(39, 40, '2023-04-04', 'snack', 551) ,
(40, 97, '2023-04-03', 'snack', 167) ,
(41, 93, '2023-04-05', 'snack', 171) ,
(42, 77, '2023-04-07', 'snack', 540) ,
(43, 35, '2023-04-07', 'snack', 962) ,
(44, 19, '2023-04-06', 'breakfast', 653) ,
(45, 58, '2023-04-03', 'breakfast', 610) ,
(46, 96, '2023-04-04', 'lunch', 248) ,
(47, 66, '2023-04-07', 'breakfast', 550) ,
(48, 20, '2023-04-04', 'breakfast', 533) ,
(49, 1, '2023-04-03', 'dinner', 616) ,
(50, 76, '2023-04-05', 'lunch', 758) ,
(51, 36, '2023-04-03', 'breakfast', 232) ,
(52, 78, '2023-04-05', 'snack', 320) ,
(53, 3, '2023-04-04', 'breakfast', 450) ,
(54, 67, '2023-04-08', 'lunch', 629) ,
(55, 28, '2023-04-03', 'lunch', 127) ,
(56, 65, '2023-04-03', 'dinner', 102) ,
(57, 27, '2023-04-08', 'dinner', 932) ,
(58, 27, '2023-04-07', 'breakfast', 508) ,
(59, 36, '2023-04-05', 'breakfast', 256) ,
(60, 47, '2023-04-05', 'lunch', 596) ,
(61, 93, '2023-04-06', 'dinner', 262) ,
(62, 8, '2023-04-06', 'dinner', 868) ,
(63, 28, '2023-04-06', 'dinner', 735) ,
(64, 8, '2023-04-04', 'dinner', 522) ,
(65, 96, '2023-04-08', 'dinner', 857) ,
(66, 78, '2023-04-06', 'breakfast', 814) ,
(67, 99, '2023-04-05', 'snack', 554) ,
(68, 35, '2023-04-06', 'dinner', 798) ,
(69, 40, '2023-04-08', 'breakfast', 427) ,
(70, 47, '2023-04-06', 'lunch', 307) ,
(71, 97, '2023-04-06', 'lunch', 825) ,
(72, 20, '2023-04-04', 'breakfast', 596) ,
(73, 99, '2023-04-06', 'lunch', 151) ,
(74, 77, '2023-04-09', 'lunch', 918) ,
(75, 21, '2023-04-06', 'breakfast', 499) ,
(76, 21, '2023-04-06', 'breakfast', 403) ,
(77, 58, '2023-04-07', 'breakfast', 889) ,
(78, 67, '2023-04-07', 'dinner', 749) ,
(79, 54, '2023-04-05', 'breakfast', 303) ,
(80, 47, '2023-04-04', 'snack', 430) ,
(81, 60, '2023-04-06', 'lunch', 386) ,
(82, 93, '2023-04-09', 'snack', 339) ,
(83, 35, '2023-04-03', 'lunch', 1000) ,
(84, 66, '2023-04-08', 'breakfast', 667) ,
(85, 19, '2023-04-09', 'lunch', 922) ,
(86, 71, '2023-04-04', 'snack', 452) ,
(87, 16, '2023-04-06', 'lunch', 554) ,
(88, 20, '2023-04-05', 'breakfast', 148) ,
(89, 35, '2023-04-05', 'lunch', 308) ,
(90, 3, '2023-04-08', 'lunch', 755) ,
(91, 78, '2023-04-08', 'breakfast', 122) ,
(92, 3, '2023-04-03', 'snack', 100) ,
(93, 3, '2023-04-03', 'lunch', 450) ,
(94, 36, '2023-04-09', 'lunch', 145) ,
(95, 27, '2023-04-09', 'snack', 580) ,
(96, 36, '2023-04-04', 'breakfast', 415) ,
(97, 60, '2023-04-06', 'snack', 130) ,
(98, 65, '2023-04-05', 'lunch', 965) ,
(99, 60, '2023-04-08', 'lunch', 855) ;

INSERT INTO Exercise (exercise_id, trainee_id, date, exercise_type, duration) VALUES 
(1, 93, '2023-04-06', 'running', 18) ,
(2, 10, '2023-04-09', 'weightlifting', 22) ,
(3, 16, '2023-04-05', 'cycling', 19) ,
(4, 67, '2023-04-06', 'running', 60) ,
(5, 32, '2023-04-08', 'weightlifting', 53) ,
(6, 16, '2023-04-04', 'cycling', 44) ,
(7, 69, '2023-04-05', 'weightlifting', 47) ,
(8, 84, '2023-04-08', 'weightlifting', 47) ,
(9, 50, '2023-04-05', 'running', 42) ,
(10, 3, '2023-04-09', 'swimming', 47) ,
(11, 60, '2023-04-06', 'yoga', 16) ,
(12, 21, '2023-04-08', 'yoga', 28) ,
(13, 65, '2023-04-03', 'cycling', 18) ,
(14, 54, '2023-04-05', 'weightlifting', 35) ,
(15, 67, '2023-04-08', 'yoga', 19) ,
(16, 88, '2023-04-09', 'yoga', 47) ,
(17, 47, '2023-04-06', 'cycling', 53) ,
(18, 97, '2023-04-05', 'weightlifting', 10) ,
(19, 97, '2023-04-06', 'running', 10) ,
(20, 47, '2023-04-06', 'swimming', 22) ,
(21, 73, '2023-04-06', 'swimming', 30) ,
(22, 69, '2023-04-04', 'swimming', 20) ,
(23, 77, '2023-04-04', 'cycling', 35) ,
(24, 97, '2023-04-03', 'swimming', 40) ,
(25, 60, '2023-04-07', 'weightlifting', 43) ,
(26, 19, '2023-04-08', 'swimming', 33) ,
(27, 67, '2023-04-04', 'swimming', 43) ,
(28, 97, '2023-04-04', 'running', 12) ,
(29, 20, '2023-04-05', 'cycling', 26) ,
(30, 66, '2023-04-03', 'yoga', 24) ,
(31, 20, '2023-04-08', 'weightlifting', 51) ,
(32, 85, '2023-04-03', 'running', 44) ,
(33, 69, '2023-04-07', 'swimming', 41) ,
(34, 99, '2023-04-09', 'yoga', 59) ,
(35, 19, '2023-04-04', 'swimming', 21) ,
(36, 99, '2023-04-07', 'running', 16) ,
(37, 19, '2023-04-08', 'cycling', 44) ,
(38, 47, '2023-04-08', 'yoga', 18) ,
(39, 21, '2023-04-08', 'cycling', 40) ,
(40, 40, '2023-04-04', 'cycling', 25) ,
(41, 47, '2023-04-09', 'swimming', 31) ,
(42, 67, '2023-04-06', 'weightlifting', 15) ,
(43, 8, '2023-04-03', 'weightlifting', 56) ,
(44, 85, '2023-04-03', 'weightlifting', 54) ,
(45, 67, '2023-04-05', 'running', 13) ,
(46, 58, '2023-04-09', 'cycling', 43) ,
(47, 76, '2023-04-08', 'swimming', 37) ,
(48, 84, '2023-04-09', 'cycling', 60) ,
(49, 88, '2023-04-04', 'weightlifting', 59) ,
(50, 19, '2023-04-09', 'swimming', 27) ,
(51, 60, '2023-04-09', 'running', 57) ,
(52, 77, '2023-04-04', 'running', 22) ,
(53, 28, '2023-04-04', 'swimming', 22) ,
(54, 21, '2023-04-07', 'yoga', 25) ,
(55, 99, '2023-04-09', 'yoga', 20) ,
(56, 32, '2023-04-08', 'yoga', 15) ,
(57, 50, '2023-04-03', 'swimming', 46) ,
(58, 36, '2023-04-04', 'cycling', 44) ,
(59, 96, '2023-04-04', 'cycling', 53) ,
(60, 21, '2023-04-06', 'swimming', 12) ,
(61, 60, '2023-04-07', 'cycling', 17) ,
(62, 73, '2023-04-05', 'cycling', 15) ,
(63, 19, '2023-04-08', 'yoga', 43) ,
(64, 8, '2023-04-06', 'running', 25) ,
(65, 20, '2023-04-06', 'running', 21) ,
(66, 19, '2023-04-04', 'weightlifting', 46) ,
(67, 36, '2023-04-09', 'running', 49) ,
(68, 1, '2023-04-06', 'swimming', 38) ,
(69, 84, '2023-04-08', 'weightlifting', 59) ,
(70, 77, '2023-04-08', 'weightlifting', 37) ,
(71, 20, '2023-04-07', 'running', 46) ,
(72, 16, '2023-04-06', 'yoga', 46) ,
(73, 65, '2023-04-07', 'yoga', 24) ,
(74, 50, '2023-04-08', 'running', 33) ,
(75, 50, '2023-04-07', 'swimming', 11) ,
(76, 19, '2023-04-03', 'cycling', 56) ,
(77, 23, '2023-04-04', 'swimming', 24) ,
(78, 93, '2023-04-04', 'yoga', 11) ,
(79, 16, '2023-04-05', 'running', 28) ,
(80, 85, '2023-04-05', 'swimming', 17) ,
(81, 1, '2023-04-08', 'running', 26) ,
(82, 3, '2023-04-05', 'running', 42) ,
(83, 77, '2023-04-03', 'running', 25) ,
(84, 8, '2023-04-04', 'running', 21) ,
(85, 71, '2023-04-07', 'yoga', 46) ,
(86, 20, '2023-04-09', 'cycling', 59) ,
(87, 99, '2023-04-08', 'yoga', 23) ,
(88, 40, '2023-04-06', 'running', 12) ,
(89, 10, '2023-04-07', 'yoga', 49) ,
(90, 85, '2023-04-09', 'running', 31) ,
(91, 97, '2023-04-07', 'weightlifting', 52) ,
(92, 40, '2023-04-08', 'running', 34) ,
(93, 85, '2023-04-07', 'yoga', 58) ,
(94, 28, '2023-04-08', 'swimming', 57) ,
(95, 8, '2023-04-04', 'yoga', 18) ,
(96, 65, '2023-04-08', 'yoga', 49) ,
(97, 23, '2023-04-09', 'running', 22) ,
(98, 21, '2023-04-07', 'cycling', 48) ,
(99, 36, '2023-04-09', 'yoga', 12) ;

INSERT INTO Diet_Plan (plan_id, trainee_id, start_date, end_date, plan_description) VALUES 
(1, 1, '2023-04-15', '2023-05-01', 'Game firm occur among whom help second argue. Article significant ready easy see those resource former.') ,
(2, 3, '2023-04-13', '2023-04-25', 'Teacher recognize method expert today. Camera author yet it. Reach season seek store free customer.\nConsumer improve quite system whom. Prepare close save behind.') ,
(3, 8, '2023-04-13', '2023-04-22', 'Thus food nearly foreign clear moment source. Cultural in page until four rich man participant. Growth thank that prevent marriage.') ,
(4, 10, '2023-04-10', '2023-05-06', 'Myself new mind three nothing treat. You relationship perform development left marriage woman character.\nCup instead happen service worry his. Toward moment onto peace political shoulder.') ,
(5, 16, '2023-04-11', '2023-05-09', 'Candidate technology next fear seven message. Magazine month address see father try picture heart. Mean rate difficult choose person.') ,
(6, 19, '2023-04-15', '2023-04-25', 'Speech control yeah billion. Defense peace enter traditional.\nHappy charge see send human.\nSubject animal level Mr million.') ,
(7, 20, '2023-04-13', '2023-04-21', 'All appear hotel put. Network television should very heavy candidate pay stay. Break cultural item anyone debate. This prepare themselves well trip end expect.') ,
(8, 21, '2023-04-13', '2023-04-26', 'Coach employee community attorney direction walk. Doctor music home team. Final concern president least American defense movie it.') ,
(9, 23, '2023-04-14', '2023-04-20', 'Congress form bed put fish up. Happy recognize argue here pull difficult employee. Law finish several believe though door company.\nDiscover page decide think way.') ,
(10, 27, '2023-04-15', '2023-04-24', 'Couple talk style enter past year. Number suffer although. Do under begin.\nSmall tend others. Include political task.') ,
(11, 28, '2023-04-16', '2023-05-01', 'Walk debate culture commercial mouth. Leg man choose. Stage recently population wall ever more tough.\nOccur concern upon weight natural beat. Not why note modern.') ,
(12, 32, '2023-04-12', '2023-04-20', 'Mission body move middle. Face job individual degree itself.\nChurch score do establish approach computer impact tonight. While improve Congress.\nOnly hair challenge rate nation coach.') ,
(13, 35, '2023-04-12', '2023-04-22', 'Decide central let somebody common. Still throughout level watch also shake. Strong crime seek power listen water.\nResponse century do simply if system according call.') ,
(14, 36, '2023-04-12', '2023-04-24', 'Daughter bring trial. Example entire goal together this can.\nWithout apply week second method play song. Few million require. Economic significant determine.') ,
(15, 40, '2023-04-15', '2023-05-04', 'Indicate natural market us mother. Girl collection remain.\nEye reason focus vote small center community. Trip true stand street run smile man. Material establish company little case help.') ,
(16, 47, '2023-04-15', '2023-04-28', 'Hard ball various knowledge near open. Accept admit never.\nGuess issue recent approach. Provide least article write.\nPower red enjoy capital.') ,
(17, 50, '2023-04-16', '2023-04-21', 'Join what billion assume center. Surface explain then small garden eye.\nEye religious project ago during level possible. Cost commercial address huge toward improve summer to.') ,
(18, 54, '2023-04-11', '2023-05-04', 'Entire experience student. Poor event shake right nothing these military. Product trip middle sport successful.\nSpeech capital structure else red move short. Year truth generation get value popular.') ,
(19, 58, '2023-04-10', '2023-04-27', 'Writer direction prepare shoulder office. Mean member light likely discussion resource bar. Decision floor face floor already over.') ,
(20, 60, '2023-04-15', '2023-04-18', 'War today these hard court test activity. Who such pressure act tend commercial.\nCentury last after provide unit very. Throw quickly ok participant.') ,
(21, 65, '2023-04-11', '2023-04-22', 'Majority hear speak matter simply coach. Color include surface understand left throw remember. Leader still stay.\nFeel suddenly very specific upon. Generation growth summer factor.') ,
(22, 66, '2023-04-13', '2023-04-17', 'Attack picture each. Media house wind. Behavior usually student color.\nEnergy relate spring mention respond. Old good work lose. Laugh capital most.') ,
(23, 67, '2023-04-10', '2023-04-29', 'Son approach tend very process memory. Last knowledge rate. Including key when skin local.\nNever night send national. Condition because walk commercial. Himself someone we second than reason.') ,
(24, 69, '2023-04-10', '2023-04-29', 'Region as cause assume history. Later personal man usually price want. Accept sport quality too sport second quite.') ,
(25, 71, '2023-04-11', '2023-04-21', 'Low too pretty expert wait year area.\nChallenge heart girl political Mr player letter group. Face street instead compare will.\nExample reflect property. Office voice hospital.') ,
(26, 73, '2023-04-10', '2023-04-19', 'Baby seven research. General lot popular number nearly probably become. Wall front month care laugh everyone.\nNumber without young shake page. Already oil hard.') ,
(27, 76, '2023-04-16', '2023-04-22', 'Focus group course pay result.\nMedia like many over. Loss general teach fund.\nApply north public four Democrat mean court stage. Also hot dark training project medical.') ,
(28, 77, '2023-04-14', '2023-04-19', 'Nice unit TV girl talk sit. Person ever many stand arrive fall. Indeed contain possible large.') ,
(29, 78, '2023-04-11', '2023-04-22', 'Mouth low enter. Number through ever the serve teacher. Thing that side institution good parent.\nRegion high feeling police matter ago ahead among. Relate truth teacher back the.') ,
(30, 84, '2023-04-10', '2023-04-22', 'Continue short share. Region really next mean task price. Police final music run culture since reveal.') ,
(31, 85, '2023-04-16', '2023-04-19', 'Reflect successful spring instead detail those single. Thought huge hard recently. Direction half show TV follow.') ,
(32, 88, '2023-04-16', '2023-04-19', 'Interview cell guess teach radio. Difference score lawyer suffer realize. Program ground before top these store.') ,
(33, 93, '2023-04-11', '2023-04-17', 'Suffer term body artist. Low behavior education nothing allow far.') ,
(34, 96, '2023-04-14', '2023-04-20', 'Catch stage degree Republican knowledge. Author site health water understand. Couple despite cut reflect.\nPage scene gun think training behavior soon. North development fight allow.') ,
(35, 97, '2023-04-14', '2023-04-28', 'Family home later pass amount machine some. Finally bag check field still ok. Serve training force play option.\nBook door hand knowledge. Method American throughout shake.') ,
(36, 99, '2023-04-10', '2023-05-02', 'Bit dog computer. Feel away course. Work create meet look technology organization.\nTruth campaign player ground use policy rest green. Court name mission issue certainly form. Field popular hand.') ;

INSERT INTO Exercise_Plan (plan_id, trainee_id, start_date, end_date, plan_description) VALUES 
(1, 1, '2023-04-15', '2023-05-05', 'Most general ready threat close political woman. Class production mouth thought board. Do own government difference agency return exist power.\nYard low let economic raise always among.') ,
(2, 3, '2023-04-14', '2023-05-02', 'Mrs phone see glass. Three top ask occur military tend.\nNetwork network unit attention floor trouble. Rock discuss series bed fast move.') ,
(3, 8, '2023-04-12', '2023-04-24', 'Boy perform something some view discover sing. Play him reduce.\nDraw reduce leave another generation toward close. Walk design one life challenge. Security outside tell positive yet arrive.') ,
(4, 10, '2023-04-16', '2023-04-23', 'Catch same how. Theory feel writer. Add would success century kind change.\nSecurity note person theory involve exactly mission. Then avoid near food staff clearly end thus.') ,
(5, 16, '2023-04-16', '2023-04-21', 'Shoulder fast science cause friend particular. Possible talk there very before who.\nAccording catch make bank tax. Specific market sea indeed.') ,
(6, 19, '2023-04-14', '2023-05-03', 'Teach pay professor record suggest piece me. Woman generation car second apply bank. Citizen because man.\nInterview activity my whether show very. Improve defense ahead use box serve never.') ,
(7, 20, '2023-04-16', '2023-04-21', 'Small four list seven capital wide majority. Purpose couple according maybe small other American. Both agree study. Idea leader accept require hit product pattern occur.') ,
(8, 21, '2023-04-12', '2023-04-21', 'Forward hair measure summer fight ready task white. Sell power degree company party action star.') ,
(9, 23, '2023-04-10', '2023-05-01', 'Girl bar throughout free adult case under. Black recent star. Bill born his have war.\nCivil wrong able technology offer. Wish police with have try could. Business use open produce tax parent.') ,
(10, 27, '2023-04-12', '2023-04-28', 'General why must.\nDeep tax throughout different.\nBlack up character sing send. Probably few woman itself keep capital enjoy. Us place long person clear.') ,
(11, 28, '2023-04-11', '2023-04-25', 'Travel position big. Miss technology floor quality down.\nBenefit quickly career wall. Country produce smile question board so international among. Go training too story money provide accept.') ,
(12, 32, '2023-04-12', '2023-04-21', 'Suggest already street power note. Seek newspaper catch them social there.\nBelieve opportunity provide surface but make stuff three.') ,
(13, 35, '2023-04-10', '2023-04-19', 'Add billion heart open marriage officer student. Name hour let teacher else. Necessary game claim attention.\nFeel six and billion short accept at. Appear medical admit up.') ,
(14, 36, '2023-04-15', '2023-04-28', 'None staff decision avoid strategy watch dark. Record would relate decision ball work. Month never authority scientist realize. Deep make ball house blood.') ,
(15, 40, '2023-04-11', '2023-05-02', 'Career church deep common arm leg dog environmental. Science recognize detail.\nHow production fast whether. Figure east assume.\nStock why federal surface relate. Example bill concern improve.') ,
(16, 47, '2023-04-10', '2023-05-01', 'Discuss artist option.\nAnything meet food development none purpose discuss. Church maybe Mrs the.\nAnyone beat participant form ground. Soon his need present.') ,
(17, 50, '2023-04-16', '2023-05-08', 'Consumer job health media great safe recent. Speak since grow agree show interesting. Win dream someone box goal expert quickly study. Tell energy small eight.') ,
(18, 54, '2023-04-12', '2023-05-04', 'Miss later represent tax base. Relationship firm word offer.') ,
(19, 58, '2023-04-10', '2023-05-09', 'Wish sound try back leg. Difficult sing claim reality. Finally might life fall. Box oil authority ready apply cold.\nHalf return discover house. List will soon. Control peace huge blue stock.') ,
(20, 60, '2023-04-10', '2023-04-30', 'Once end woman fly fish. Near step concern red apply. Radio just try position.\nChoice hotel better support life air item. Food thought eight yard. Amount probably believe drug.') ,
(21, 65, '2023-04-13', '2023-05-07', 'How member develop measure campaign time. Road business how human old song.') ,
(22, 66, '2023-04-11', '2023-04-19', 'Say and next. Road voice table billion eat. Adult probably various imagine person. Modern allow market sure everything together.\nRelate senior central serious. Something with yet institution partner.') ,
(23, 67, '2023-04-14', '2023-05-01', 'Contain student nature cut. Hospital consider why decision. Under agent direction little.\nGround work rest year thank. Oil city current deep trip how whose little. Although alone try get issue.') ,
(24, 69, '2023-04-16', '2023-04-21', 'Ball voice bank hold. Agree wife claim onto.\nPart run step imagine such foot loss. Else collection per that make wrong.') ,
(25, 71, '2023-04-13', '2023-05-07', 'Rate my free suffer professor performance. Social how fly movie imagine bring.') ,
(26, 73, '2023-04-11', '2023-05-02', 'After loss party until black feeling there. Bag common help rest professor manage generation.\nDetail result rich child computer few. Either stock mind customer.') ,
(27, 76, '2023-04-14', '2023-05-04', 'Base man season.\nMrs daughter article federal above of itself. Cold occur meeting this coach thousand fly. Development official key friend.') ,
(28, 77, '2023-04-12', '2023-04-30', 'Crime smile claim play old. Stop local cut blood sister. South deep international as important able agree.\nApply behind air from card population any. Office form call test anyone claim school.') ,
(29, 78, '2023-04-14', '2023-05-07', 'South true open situation high trip very. Like nation nature commercial.\nPresident term own science same reality lay. Agent large former back thing here.') ,
(30, 84, '2023-04-14', '2023-04-17', 'Sense since strong fall really political activity. Reality south above table along then. No test least most above onto effort.') ,
(31, 85, '2023-04-16', '2023-05-01', 'Teacher thank life responsibility.\nFace manage song not body five. Few effect quite body. Reveal walk stuff participant hundred religious full.') ,
(32, 88, '2023-04-10', '2023-05-06', 'Situation modern give respond four. Himself middle approach class grow finally conference.\nDraw perform close take vote from often. Admit pay probably example check.\nReal enough long.') ,
(33, 93, '2023-04-16', '2023-04-29', 'Approach too head seem owner approach. Also it parent business dark peace.') ,
(34, 96, '2023-04-13', '2023-04-24', 'System just end school capital. Others true network throw finish red.\nDetail father gas trouble other. Catch fire lay loss rise attorney. Beyond take friend effect technology.') ,
(35, 97, '2023-04-14', '2023-05-07', 'After able condition especially natural economic. Public husband international too authority try.') ,
(36, 99, '2023-04-13', '2023-04-24', 'While behind pick see. We character fire like realize condition air.\nIssue hot enough. Law issue green score development military.') ;