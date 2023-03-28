use game;
db.dropDatabase();

db.highscores.insertMany([
    {
        highscore: 3
    },
    {
        highscore: 1
    },
    {
        highscore: 2
    }
    // { highscore: x if its greater than the current highscore}
])