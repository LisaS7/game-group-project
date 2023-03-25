use game;
db.dropDatabase();

db.highscores.insertMany([
    {
        highscore: 15
    },
    {
        highscore: 20
    },
    {
        highscore: 21
    }
])