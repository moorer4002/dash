namespace SpriteKind {
    export const spike = SpriteKind.create()
    export const face = SpriteKind.create()
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
        playerface.setImage(frames[currentFrameIndex])
    } else {
        while (currentFrameIndex % 4 != 0) {
            currentFrameIndex = (currentFrameIndex + 1) % 16
            playerface.setImage(frames[currentFrameIndex])
        }
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile5`)) {
        if (currentNormalstyleGravity) {
            theplayer.vy = 0 - Math.sqrt(2 * (gravity * jelly_jump_hieght))
        } else {
            theplayer.vy = Math.sqrt(2 * (gravity * jelly_jump_hieght))
        }
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile6`)) {
        chnagegravity(false)
    }
    if (tiles.tileAtLocationEquals(location, assets.tile`myTile7`)) {
        chnagegravity(true)
    }
})
sprites.onOverlap(SpriteKind.face, SpriteKind.spike, function (sprite, otherSprite) {
    game.over(false)
})
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (currentNormalstyleGravity) {
        if (theplayer.isHittingTile(CollisionDirection.Bottom)) {
            theplayer.vy = 0 - Math.sqrt(2 * (gravity * jumpheight))
        }
    } else {
        if (theplayer.isHittingTile(CollisionDirection.Top)) {
            theplayer.vy = Math.sqrt(2 * (gravity * jumpheight))
        }
    }
})
function chnagegravity (gravityIsNormalStyle: boolean) {
    if (gravityIsNormalStyle == currentNormalstyleGravity) {
        return
    } else {
        currentNormalstyleGravity = gravityIsNormalStyle
        theplayer.ay = 0 - theplayer.ay
        theplayer.vy = 0
    }
}
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
let grounded = false
let newspike: Sprite = null
let currentNormalstyleGravity = false
let jumping = false
let currentFrameIndex = 0
let playerface: Sprite = null
let frames: Image[] = []
let theplayer: Sprite = null
let jelly_jump_hieght = 0
let jumpheight = 0
let gravity = 0
gravity = 500
let movespeed = 100
jumpheight = 33
jelly_jump_hieght = 49
tiles.setTilemap(tilemap`level1`)
theplayer = sprites.create(img`
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
frames = scaling.createRotations(theplayer.image, 16)
playerface = sprites.create(img`
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
    `, SpriteKind.face)
playerface.setFlag(SpriteFlag.GhostThroughWalls, true)
currentFrameIndex = 0
jumping = false
currentNormalstyleGravity = true
game.onUpdate(function () {
    if (currentNormalstyleGravity) {
        grounded = theplayer.isHittingTile(CollisionDirection.Bottom)
    } else {
        grounded = theplayer.isHittingTile(CollisionDirection.Top)
    }
    playerface.setPosition(theplayer.x, theplayer.y)
    if (theplayer.vx == 0) {
        game.over(false)
    }
})
game.onUpdateInterval(50, function () {
    if (!(grounded)) {
        currentFrameIndex = (currentFrameIndex + 1) % 16
        playerface.setImage(frames[currentFrameIndex])
    }
})
