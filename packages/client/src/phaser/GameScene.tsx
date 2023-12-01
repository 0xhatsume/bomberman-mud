import Phaser from 'phaser';
import Bomberman from './characters/Bomberman';
import { createAnims } from './animations/CreateAnims';

class GameScene extends Phaser.Scene {
    private cursors!: Phaser.Types.Input.Keyboard.CursorKeys
    ground!: Phaser.Tilemaps.TilemapLayer
    walls!: Phaser.Tilemaps.TilemapLayer
    scalefactor = 3
    player1!: Phaser.GameObjects.Sprite

    constructor(){
        super('GameScene')
    }

    preload(){
        
        this.load.image('battlestagetile', '/tiles/BattleStage.png')
        this.load.tilemapTiledJSON('battlestagetilemap', '/maps/BombermanBattleStage.json')
        
        this.load.atlas('bomberman1','/characters/bomber.png', '/characters/bomber.json')
        //Bomberman.preload(this)
        this.cursors = this?.input.keyboard.createCursorKeys()
    }

    create(){
        const map = this.make.tilemap({key: 'battlestagetilemap'})
        const tileset = map.addTilesetImage('BattleStage', 'battlestagetile')

        this.ground = map.createLayer('Ground', tileset as Phaser.Tilemaps.Tileset)
        this.walls = map.createLayer('Walls', tileset as Phaser.Tilemaps.Tileset)

        this.walls.setCollisionByProperty({collides: true})

        this.ground.scale = this.scalefactor
        this.walls.scale = this.scalefactor

        createAnims(this.anims)

        this.player1 = new Bomberman(this,120, 64, 'bomberman1', 'bomber01.png')
        this.add.existing(this.player1)
        this.physics.add.existing(this.player1)
        this.player1.scale = this.scalefactor

    }

    update(t: number, dt: number)
	{
		if (this.player1)
		{
			this.player1.update(this.cursors)
		}
	}

}

export default GameScene;