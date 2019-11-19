INSERT INTO content (id, title) VALUES
(1, 'Content 1'),
(2, 'Content 2'),
(3, 'Content 3'),
(4, 'Content 4'),
(5, 'Content 5');

INSERT INTO type (id, title) VALUES
(1, 'SPAM'),
(2, 'INFRINGES_PROPERTY'),
(3, 'VIOLATES_POLICIES');

INSERT INTO state (id, title) VALUES
(1, 'Open'),
(2, 'Resolved'),
(3, 'Blocked');

INSERT INTO report (fk_content, type, state, message) VALUES
(1, 2, 1, 'oklsjdf ksdjfhksjfh '),
(2, 3, 1, 'sdfsdfsdf sdfs'),
(2, 1, 1, 'aaaaa aaas'),
(3, 1, 1, null);

INSERT INTO "user" (login, password) VALUES
('user1', '$2y$12$AOj/oKWlz3dWDKerk2XimOV6xXLfeGkEnZSd3gWYBOXtNiexZDfTq'), -- test
('user2', '$2y$12$K1B2IaA8.WuwPh3kxDbT.edzr1YfmhCJXiJ0C8T/u8cYa0vpwke.m'); -- test2
