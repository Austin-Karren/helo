-- insert into posts(title, img, content, author_id)
-- values (
--     'test-post',
--     'https://blog-assets.hootsuite.com/wp-content/uploads/2018/04/Nyan-Cat-GIF-source.gif',
--     'Hey this is my first post',
--     1
-- );

insert into posts(title, img, content, author_id)
values(${title}, ${img}, ${content}, ${author_id});