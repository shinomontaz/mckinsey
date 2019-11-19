INSERT INTO contents (id, title) VALUES
(1, 'Content 1'),
(2, 'Content 2'),
(3, 'Content 3'),
(4, 'Content 4'),
(5, 'Content 5');

INSERT INTO type (id, title) VALUES
(1, 'SPAM'),
(2, 'INFRINGES_PROPERTY');
(3, 'VIOLATES_POLICIES');

INSERT INTO state (id, title) VALUES
(1, 'Open'),
(2, 'Resolved');
(3, 'Blocked');

INSERT INTO report (fk_content, type, state, message) VALUES
(1, 2, 1, 'i\'m in this picture! and i didn\'t sign a model release form'),
(2, 3, 1, 'sdfsdfsdf sdfs'),
(2, 1, 1, 'aaaaa aaas'),
(3, 1, 1, null);

-- INSERT INTO "user" (login, password) VALUES
-- ('user1', ),
-- ('user2', );
