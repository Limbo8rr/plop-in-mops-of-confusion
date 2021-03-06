scene.setBackgroundColor(6)
tiles.setTilemap(tilemap`level1`)
let mySprite = sprites.create(img`
    ....66666666....
    ....66666666....
    ....76666667....
    ....d66666bd....
    .....66666b.....
    .....6666bc.....
    .....666ccc.....
    .....888888.....
    .....888888.....
    .....88..88.....
    .....88..88.....
    .....88..88.....
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    ................
    `, SpriteKind.Player)
let mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . c c c c c . . . . . 
    . . . . c c c c c c c c . . . . 
    . . . c c d d d d d d c . . . . 
    . . c c d d d d d d d c . . . . 
    . c c c d d f d d d f c . . . . 
    . c c c d d d d d d d c c . . . 
    . c c c c d d d d d d c c . . . 
    . . . . . . . d d . . . . . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 200, 200)
scene.cameraFollowSprite(mySprite)
mySprite2.setFlag(SpriteFlag.GhostThroughWalls, true)
game.onUpdate(function () {
    mySprite2.x = mySprite.x
    mySprite2.bottom = mySprite.top
})
