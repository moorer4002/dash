namespace SpriteKind {
    export const spike = SpriteKind.create()
}
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile1`, function (sprite, location) {
    newspike = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . 9 3 9 . . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . 9 9 3 9 9 . . . . . . 
        . . . . . 9 3 9 3 9 . . . . . . 
        . . . . 9 3 9 3 9 9 1 . . . . . 
        . . . . 9 9 3 9 3 9 1 . . . . . 
        . . . 9 9 3 9 3 9 9 1 1 . . . . 
        . . . 9 3 9 3 9 9 9 1 1 . . . . 
        . . 9 3 9 3 9 3 9 9 1 1 1 . . . 
        . . 9 9 3 9 9 9 9 9 1 1 1 . . . 
        . 9 9 3 9 9 9 9 9 1 1 1 1 1 . . 
        . 9 3 9 9 9 9 9 1 1 1 1 1 1 . . 
        `, SpriteKind.spike)
    newspike.setFlag(SpriteFlag.AutoDestroy, true)
    tiles.setTileAt(location, assets.tile`myTile0`)
    tiles.placeOnTile(newspike, location)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    jumping = false
    if (currentFrameIndex % 4 == 1) {
        currentFrameIndex = (currentFrameIndex - 1) % 16
    } else {
        while (currentFrameIndex % 4 == 0) {
        	
        }
    }
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile3`, function (sprite, location) {
    game.over(false)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile2`, function (sprite, location) {
    newspike = sprites.create(img`
        . 9 3 9 9 9 9 9 1 1 1 1 1 1 . . 
        . 9 9 3 9 9 9 9 9 1 1 1 1 1 . . 
        . . 9 9 3 9 9 9 9 9 1 1 1 . . . 
        . . 9 3 9 3 9 3 9 9 1 1 1 . . . 
        . . . 9 3 9 3 9 9 9 1 1 . . . . 
        . . . 9 9 3 9 3 9 9 1 1 . . . . 
        . . . . 9 9 3 9 3 9 1 . . . . . 
        . . . . 9 3 9 3 9 9 1 . . . . . 
        . . . . . 9 3 9 3 9 . . . . . . 
        . . . . . 9 9 3 9 9 . . . . . . 
        . . . . . . 9 9 9 . . . . . . . 
        . . . . . . 9 3 9 . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . . 9 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.spike)
    newspike.setFlag(SpriteFlag.AutoDestroy, true)
    tiles.setTileAt(location, assets.tile`myTile0`)
    tiles.placeOnTile(newspike, location)
})
let newspike: Sprite = null
let jumping = false
let currentFrameIndex = 0
let gravity = 500
let movespeed = 100
let jelly_jump_hieght = 49
tiles.setTilemap(tilemap`level1`)
let theplayer = sprites.create(img`
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 1 7 7 7 7 7 7 7 7 7 7 1 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 1 1 1 1 1 1 1 1 1 1 1 1 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    7 7 7 7 7 7 7 7 7 7 7 7 7 7 
    `, SpriteKind.Player)
theplayer.ay = gravity
scene.cameraFollowSprite(theplayer)
theplayer.setVelocity(100, 0)
theplayer.setFlag(SpriteFlag.Invisible, true)
let frames = scaling.createRotations(theplayer.image, 16)
theplayer.setFlag(SpriteFlag.GhostThroughWalls, true)
currentFrameIndex = 0
jumping = false
let currentNormalstyleGravity = true
game.onUpdateInterval(50, function () {
    let grounded = 0
    if (!(grounded)) {
        currentFrameIndex = (currentFrameIndex + 1) % 16
        theplayer.setImage(frames[currentFrameIndex])
    }
})
