import Phaser from 'phaser';

const createAnims = (anims: Phaser.Animations.AnimationManager) => {
    const frameRate = 12;
    anims.create({
        key: 'bomberman-idle-mid',
        frames: anims.generateFrameNames(
            'bomberman1', {prefix: 'bomber0', start: 1, end: 1, suffix: '.png'}),
        repeat: -1,
        frameRate: frameRate
    });

    anims.create({
        key: 'bomberman-walk-down',
        frames: anims.generateFrameNames(
            'bomberman1', {prefix: 'bomber0', start: 1, end: 3, suffix: '.png'}),
        repeat: -1,
        frameRate: frameRate
    });

    anims.create({
        key: 'bomberman-walk-up',
        frames: anims.generateFrameNames(
            'bomberman1', {prefix: 'bomber0', start: 7, end: 9, suffix: '.png'}),
        repeat: -1,
        frameRate: frameRate
    });

    anims.create({
        key: 'bomberman-walk-left',
        frames: anims.generateFrameNames(
            'bomberman1', {prefix: 'bomber0', start: 4, end: 6, suffix: '.png'}),
        repeat: -1,
        frameRate: frameRate
    });

    anims.create({
        key: 'bomberman-walk-right',
        frames: anims.generateFrameNames(
            'bomberman1', {prefix: 'bomber0', start: 4, end: 6, suffix: '.png'}),
        repeat: -1,
        frameRate: frameRate
    });
    
}


export {
    createAnims
}