import kaboom from "kaboom"

// initialize context
kaboom()

// load a sprite "bean" from an image
loadSprite("bean", "sprites/bean.png")

// add something to screen
const player = add([
  sprite("bean"),
  pos(80, 40),
  scale(3),
  rotate(0),
  color(0, 0, 255),
])

player.onUpdate(() => {
  player.angle += 120 * dt()
})