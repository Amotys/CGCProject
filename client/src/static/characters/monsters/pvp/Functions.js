const createUnit = (
    unitName,                   // string，单位名
    unitHealth,                 // integer，健康值
    unitMana,                   // integer，魔法值
    unitHRege,                  // integer，每回合健康值回复
    unitMRege,                  // integer，每回合魔法值回复
    unitAtk,                    // integer，攻击力
    unitDef,                    // integer，防御力
    unitDmg,                    // integer，伤害值
    unitAtkMethod,              // [[attackType(string), minRange(integer), maxRange(integer), damageType(integer)], ...]，攻击类型
    unitMov,                    // integer，移动力
    unitInit,                   // integer，先攻值
    unitMor,                    // integer，士气值
    unitCri,                    // integer，暴击值
    unitSize,                   // integer，体型
    unitCostM,                  // [integer, integer, integer]，建造花费资源
    unitCostMM,                 // [integer, integer, integer]，维护花费资源（回合）
    unitCostT,                  // integer，建造时间（回合）
    unitPop,                    // integer，占用人口
    unitReq,                    // [string, ...]，建造需求
    unitAbili,                  // {title(string):content(string), ...}，能力
    unitDesc,                   // string，描述
    unitImg,                    // [ImageURL, ImageIconURL]
) => (
    {
        name: unitName,
        health: unitHealth,
        mana: unitMana,
        healthRegenerate: unitHRege,
        manaRegenerate: unitMRege,
        atk: unitAtk,
        def: unitDef,
        dmg: unitDmg,
        attackMethod: unitAtkMethod,
        mov: unitMov,
        init: unitInit,
        mor: unitMor,
        cri: unitCri,
        size: unitSize,
        costMaterial: unitCostM,
        costMaintain: unitCostMM,
        costTime: unitCostT,
        population: unitPop,
        requirement: unitReq,
        abilities: unitAbili,
        description: unitDesc,
        imageUrl: unitImg,
    }
)

const createBuilding = (
    bdName,                     // string，建筑名
    bdHealth,                   // integer，健康值
    bdMana,                     // integer，魔法值
    bdHRege,                    // integer，每回合健康值回复
    bdMRege,                    // integer，每回合魔法值回复
    bdAtk,                      // integer，攻击力
    bdDef,                      // integer，防御力
    bdDmg,                      // integer，伤害值
    bdAtkMethod,                // [[attackType(string), minRange(integer), maxRange(integer), damageType(integer)], ...]，攻击类型
    bdSize,                     // integer，占地
    bdCostM,                    // [integer, integer, integer]，建造花费资源
    bdCostR,                    // [integer, integer, integer, health recover]，维修花费资源
    bdCostT,                    // integer，建造需求回合
    bdPop,                      // [integer, integer]，占用/提供人口
    bdReq,                      // [string, ...]，建造需求
    bdAbili,                    // {title(string):content(string), ...}，能力
    bdTech,                     // {title(string):[cost1(integer),cost2(integer),cost3(integer),costTime(intger),requirement([string,...]),content(string)], ...}，可以解锁的科技
    bdDesc,                     // string，描述
    bdImg,                      // [ImageURL, null]
) => (
    {
        name: bdName,
        health: bdHealth,
        mana: bdMana,
        healthRegenerate: bdHRege,
        manaRegenerate: bdMRege,
        atk: bdAtk,
        def: bdDef,
        dmg: bdDmg,
        attackMethod: bdAtkMethod,
        size: bdSize,
        costMaterial: bdCostM,
        costRepair: bdCostR,
        costBuildTime: bdCostT,
        population: bdPop,
        requirement: bdReq,
        abilities: bdAbili,
        technologies: bdTech,
        description: bdDesc,
        imageUrl: bdImg,
    }
)

const createHero = (
    hrName,                     // string，英雄名
    hrSubtitle,                 // string，称号
    hrHealth,                   // [integer, integer, integer, integer]，健康值
    hrMana,                     // [integer, integer, integer, integer]，魔法值
    hrHRege,                    // [integer, integer, integer, integer]，每回合健康值回复
    hrMRege,                    // [integer, integer, integer, integer]，每回合魔法值回复
    hrAtk,                      // [integer, integer, integer, integer]，攻击力
    hrDef,                      // [integer, integer, integer, integer]，防御力
    hrDmg,                      // [integer, integer, integer, integer]，伤害值
    hrAtkMethod,                // [[attackType(string), minRange(integer), maxRange(integer), damageType(integer)], ...]，攻击类型
    hrMov,                    // [integer, integer, integer, integer]，移动力
    hrInit,                   // [integer, integer, integer, integer]，先攻值
    hrMor,                    // [integer, integer, integer, integer]，士气值
    hrCri,                    // [integer, integer, integer, integer]，暴击值
    hrSize,                   // string，体型
    hrAbili1,                 // {title(string):[name(string),content(string)], ...}，
    hrDesc,                   // string，描述
    hrImg,                    // [ImageURL, ImageIconURL]
) => (
    {
        name: hrName,
        subtitle: hrSubtitle,
        health: hrHealth,
        mana: hrMana,
        healthRegenerate: hrHRege,
        manaRegenerate: hrMRege,
        atk: hrAtk,
        def: hrDef,
        dmg: hrDmg,
        attackMethod: hrAtkMethod,
        mov: hrMov,
        init: hrInit,
        mor: hrMor,
        cri: hrCri,
        size: hrSize,
        abilities: hrAbili1,
        description: hrDesc,
        imageUrl: hrImg,
    }
)


export { createUnit, createBuilding, createHero }