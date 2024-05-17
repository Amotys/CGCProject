import JargonNames from '../JargonNames';
import ImageUrl from '../../images/magics/TheEyeOfDarkNight.png';

const TheEyeOfDarkNight = {
    name: '暗夜之眼',
    otherNames: ['夜视'],
    idName: 'the_eye_of_dark_night',
    level: 1,
    cost: 10,
    knowledgePool: 1400,
    chantingRound: 0,
    needDeclaration: true,
    instantChanting: false,
    imageUrl: ImageUrl,
    attributeCategory: JargonNames.attributesName.lumino,
    factionCategory: JargonNames.factionsName.nature,
    functionCategory: JargonNames.functionsName.exploration,
    acquisitionMethods: ['魔法行会习得', '知识花园习得', '七峰塔习得', '真理洞窟习得', '智慧墙习得', '拍卖会获取卷轴', '奇闻和机遇'],
    description: '使施法者在一定时间内(约30分钟)能够获取夜间视觉，即使是在黑暗的房间中也能看清物体。',
    quote: '“在漆黑之中，一双明亮的眼睛可能是最为珍贵的宝藏。”——艾莉亚丝·奥康奈利',
    story: [
        `暗夜之眼是一项古老而神奇的魔法，最初被创造出来是为了帮助人们在黑夜中辨别方向。
        然而，人们很快惊讶地发现，这种魔法不仅能够让施法者在夜晚中轻松行走，还可以在昏暗的环境中清晰地看见周围的一切。`,

        `恐惧来源于未知，当人们摸清了未知的黑暗后，心中便不再畏惧，而是积极探索其中的奥秘与可能性。
        他们变得勇敢，拥有了克服困难和迎接挑战的勇气，从而不断迈向前方。
        就像艾莉亚丝所说，一个人的眼睛在漆黑之中可能是最为珍贵的宝藏，而暗夜之眼则是这个宝藏的延伸和最完美的诠释。`
    ],
}

export default TheEyeOfDarkNight;