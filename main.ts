basic.forever(function () {
    basic.showIcon(IconNames.EigthNote)
    music.playMelody("C D E F G A B C5 ", 120)
    music.playMelody("C5 B A G F E D C ", 120)
    while (true) {
        basic.showLeds(`
            . # # . .
            . # . # .
            . # . # .
            . # . # .
            . # # . .
            `)
    }
})
