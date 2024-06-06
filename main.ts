for (let index = 0; index < 2; index++) {
    for (let index = 0; index < 4; index++) {
        music.playTone(440, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(554, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(494, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 4; index++) {
        music.playTone(659, music.beat(BeatFraction.Half))
    }
    for (let index = 0; index < 12; index++) {
        music.playTone(740, music.beat(BeatFraction.Half))
    }
    music.playTone(494, music.beat(BeatFraction.Half))
    music.playTone(440, music.beat(BeatFraction.Half))
    music.playTone(415, music.beat(BeatFraction.Half))
    music.playTone(330, music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Sixteenth))
    for (let index = 0; index < 2; index++) {
        music.playTone(370, music.beat(BeatFraction.Half))
        music.rest(music.beat(BeatFraction.Sixteenth))
        music.playTone(370, music.beat(BeatFraction.Half))
        music.playTone(554, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Whole))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        music.playTone(494, music.beat(BeatFraction.Whole))
        music.playTone(440, music.beat(BeatFraction.Half))
        music.playTone(415, music.beat(BeatFraction.Half))
        for (let index = 0; index < 2; index++) {
            music.playTone(370, music.beat(BeatFraction.Whole))
            music.playTone(370, music.beat(BeatFraction.Half))
            music.playTone(880, music.beat(BeatFraction.Half))
            music.playTone(831, music.beat(BeatFraction.Half))
            music.playTone(880, music.beat(BeatFraction.Half))
            music.playTone(831, music.beat(BeatFraction.Half))
            music.playTone(880, music.beat(BeatFraction.Half))
        }
    }
}
