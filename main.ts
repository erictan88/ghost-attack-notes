controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setPosition(80, 40)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setPosition(60, 60)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Food, function (sprite, otherSprite) {
    sprite.destroy(effects.fire, 100)
    info.changeLifeBy(-1)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setPosition(100, 60)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Hero.setPosition(80, 80)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
let Ghost: Sprite = null
let Random = 0
let Hero: Sprite = null
let GameUpdate = 0
if (game.ask("", "")) {
    GameUpdate = 500
} else {
    GameUpdate = 1500
}
tiles.setTilemap(tilemap`level1`)
Hero = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f e e 2 2 2 2 2 2 e f f . . 
    . f f e 2 f f f f f f 2 e f f . 
    . f f f f f e e e e f f f f f . 
    . . f e f b f 4 4 f b f e f . . 
    . . f e 4 1 f d d f 1 4 e f . . 
    . . e f f f f d d d 4 e f . . . 
    . . f d d d d f 2 2 2 f e f . . 
    . . f b b b b f 2 2 2 f 4 e . . 
    . . f b b b b f 5 4 4 f . . . . 
    . . . f c c f f f f f f . . . . 
    . . . . f f . . . f f f . . . . 
    `, SpriteKind.Player)
Hero.setPosition(60, 60)
let Princess = sprites.create(img`
    . . . . . . 5 . 5 . . . . . . . 
    . . . . . f 5 5 5 f f . . . . . 
    . . . . f 1 5 2 5 1 6 f . . . . 
    . . . f 1 6 6 6 6 6 1 6 f . . . 
    . . . f 6 6 f f f f 6 1 f . . . 
    . . . f 6 f f d d f f 6 f . . . 
    . . f 6 f d f d d f d f 6 f . . 
    . . f 6 f d 3 d d 3 d f 6 f . . 
    . . f 6 6 f d d d d f 6 6 f . . 
    . f 6 6 f 3 f f f f 3 f 6 6 f . 
    . . f f d 3 5 3 3 5 3 3 f f . . 
    . . f d f f 3 5 5 3 f d f . . . 
    . . . f f 3 3 3 3 3 f d f . . . 
    . . . f 3 3 5 3 3 5 3 f f . . . 
    . . . f f f f f f f f f . . . . 
    . . . . . f f . . . . . . . . . 
    `, SpriteKind.Food)
info.setLife(3)
let Speed = 50
game.onUpdateInterval(GameUpdate, function () {
    Random = randint(1, 4)
    Ghost = sprites.create(img`
        . . f f f . . . . . . . . . . . 
        f f f c c . . . . . . . . f f f 
        f f c c . . c c . . . f c b b c 
        f f c 3 c c 3 c c f f b b b c . 
        f f b 3 b c 3 b c f b b c c c . 
        . c b b b b b b c f b c b c c . 
        . c b b b b b b c b b c b b c . 
        c b 1 b b b 1 b b b c c c b c . 
        c b b b b b b b b c c c c c . . 
        f b c b b b c b b b b f c . . . 
        f b 1 f f f 1 b b b b f c c . . 
        . f b b b b b b b b c f . . . . 
        . . f b b b b b b c f . . . . . 
        . . . f f f f f f f . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    if (Random == 1) {
        Ghost.setPosition(80, 0)
        Ghost.setVelocity(0, Speed)
    } else if (Random == 2) {
        Ghost.setPosition(160, 60)
        Ghost.setVelocity(Speed * -1, 0)
    } else if (Random == 3) {
        Ghost.setPosition(80, 120)
        Ghost.setVelocity(0, Speed * -1)
    } else {
        Ghost.setPosition(0, 60)
        Ghost.setVelocity(Speed, 0)
    }
    Speed += 2
})
