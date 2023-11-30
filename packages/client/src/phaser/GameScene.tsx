import Phaser from 'phaser';

class GameScene extends Phaser.Scene {
    ground!: Phaser.Tilemaps.TilemapLayer
    walls!: Phaser.Tilemaps.TilemapLayer
    scalefactor : number = 3

    constructor(){
        super('GameScene')
    }

    preload(){
        this.load.image('battlestagetile', '/tiles/BattleStage.png')
        this.load.tilemapTiledJSON('battlestagetilemap', '/maps/BombermanBattleStage.json')
    }

    create(){
        const map = this.make.tilemap({key: 'battlestagetilemap'})
        const tileset = map.addTilesetImage('BattleStage', 'battlestagetile')

        this.ground = map.createLayer('Ground', tileset as Phaser.Tilemaps.Tileset)
        this.walls = map.createLayer('Walls', tileset as Phaser.Tilemaps.Tileset)

        this.walls.setCollisionByProperty({collides: true})

        this.ground.scale = this.scalefactor
        this.walls.scale = this.scalefactor

    }

}

export default GameScene;