import Phaser from 'phaser';

export default class Bomberman extends Phaser.Physics.Arcade.Sprite {
    speed = 250
    constructor(scene: Phaser.Scene, x: number, y: number, 
        texture: string, frame: string | number){
            super(scene, x, y, texture, frame);
            this.anims.play('bomberman-idle-mid', true);
    }

    static preload(scene: Phaser.Scene){
        scene.load.atlas('bomberman1','/characters/bomber.png', '/characters/bomber.json')
    }

    protected preUpdate(time: number, delta: number): void {
        super.preUpdate(time, delta)
    }

    update(cursors: Phaser.Types.Input.Keyboard.CursorKeys){

        if (!cursors)
		{
			return
		}

		const leftDown = cursors.left?.isDown
		const rightDown = cursors.right?.isDown
		const upDown = cursors.up?.isDown
		const downDown = cursors.down?.isDown

        if (leftDown)
		{   
            this.anims.play('bomberman-walk-left', true)
			this.setVelocity(-this.speed, 0)
		}
		else if (rightDown)
		{
            this.anims.play('bomberman-walk-left', true)
			this.setVelocity(this.speed, 0)
			this.scaleX = -1 * this.scene.scalefactor
			
		}
		else if (upDown)
		{   
            this.anims.play('bomberman-walk-up', true)
			this.setVelocity(0, -this.speed)
		}
		else if (downDown)
		{   
            this.anims.play('bomberman-walk-down', true)
			this.setVelocity(0, this.speed)
		}
		else
		{
			this.anims.play('bomberman-idle-mid', true)
			this.setVelocity(0, 0)
		}
    }
}