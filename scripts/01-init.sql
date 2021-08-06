CREATE TABLE Messages (
  id             SERIAL PRIMARY KEY,
  channel_id     VARCHAR(30) NOT NULL,
  user_id        VARCHAR(30) NOT NULL,
  date           DATE NOT NULL,
  message_count  INTEGER NOT NULL DEFAULT 0,
  reaction_count INTEGER NOT NULL DEFAULT 0,
  CONSTRAINT "Messages_user_channel_date_unique" UNIQUE (user_id, channel_id, date)
);
