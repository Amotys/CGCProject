import React, { useState, useImperativeHandle, forwardRef } from "react";

const BCResultPartOutcomes = forwardRef(({
    leftData,
    rightData,
    validStates,
    checked,
    selectionLeft,
    selectionRight,
    percentageLeft,
    percentageRight,
    RBLeft,
    RBRight,
}, ref) => {
    const [result, setResult] = useState([])
    const [resultDecrease, setResultDecrease] = useState(['', ''])
    const calculateResult = (direction, toDirection) => {
        const validSelection = (selection) => {
            selection.attackType = selection.attackType || '徒手格斗'
            selection.defendType = selection.defendType || '闪避'
            selection.damageType = selection.damageType || '近战物理'
        }
        // 预处理参数部分
        if (validStates) {
            let stringArray = []
            const prevData = {
                data: direction === 'left' ? leftData : rightData,
                selection: direction === 'left' ? selectionLeft : selectionRight,
                percentage: direction === 'left' ? percentageLeft : percentageRight,
                useLastStand: direction === 'left' ? checked.useLastStandLeft : checked.useLastStandRight,
                severeInjury: direction === 'left' ? checked.severeInjuryLeft : checked.severeInjuryRight,
                resistAndBonus: direction === 'left' ? RBLeft : RBRight,
            }
            const nextData = {
                data: toDirection === 'left' ? leftData : rightData,
                selection: toDirection === 'left' ? selectionLeft : selectionRight,
                percentage: toDirection === 'left' ? percentageLeft : percentageRight,
                useLastStand: toDirection === 'left' ? checked.useLastStandLeft : checked.useLastStandRight,
                severeInjury: toDirection === 'left' ? checked.severeInjuryLeft : checked.severeInjuryRight,
                resistAndBonus: toDirection === 'left' ? RBLeft : RBRight,
            }
            validSelection(prevData.selection)
            validSelection(nextData.selection)
            const subSymbol = '-' // 分支下的符号

            // 定义用到的函数
            const pushTip = (tipString) => {
                stringArray.push(tipString)
            }
            const randomInt = (skillName, min, max, level, showTip) => {
                if (max - min === 0) { return 0 }
                const result = Math.floor(Math.random() * (max - min + 1.0)) + min
                let symbolString = ''
                for (let i = 0; i < level; i++) { symbolString += subSymbol }
                if (showTip) { pushTip(symbolString + `判定：(${skillName}${min}~${max})=${result}`) }
                return result
            }
            const counter = (skillaName, skillbName, skilla, skillb, level) => {
                const randa = randomInt(null, 0, skilla, 0, false)
                const randb = randomInt(null, 0, skillb, 0, false)
                let symbolString = ''
                for (let i = 0; i < level; i++) {
                    symbolString += subSymbol
                }
                pushTip(symbolString + `对抗：(${skillaName}0~${skilla})VS(${skillbName}0~${skillb})=${randa}vs${randb}，
                ${randa >= randb ? '成功' : '失败'}`)
                return randa >= randb
            }

            // 定义用到的变量
            let severeInjuryStatePercentage = [1.0, 1.0]                // 重伤导致为原判定比率
            let lastStandSevereInjuryImmuteFactor = [0, 0]              // 最后一搏重伤免疫率
            let lastStandStateUpFactor = [0, 0]                         // 最后一搏判定提升率
            let lastStandDamageUpFactor = [0, 0]                        // 最后一搏伤害提升率
            let decreaseDealt = 0                                       // 造成的最终减值
            let counterDecreaseDealt = 0                                // 造成的反击减值
            let finalStateFactor = [1.0, 1.0]                           // 最终判定比率
            const handleStates = () => {
                const handleSevereInjury = () => {
                    pushTip('====重伤====')
                    const dealingSevereInjury = (isAttacker) => {
                        const personString = isAttacker ? '攻击方' : '防御方'
                        const personIndex = isAttacker ? 0 : 1
                        pushTip(subSymbol + subSymbol + `${personString}因重伤导致判定下降50%`)
                        severeInjuryStatePercentage[personIndex] = 0.5
                    }
                    if (prevData.severeInjury) {
                        pushTip(subSymbol + '检测到攻击方为重伤状态')
                        dealingSevereInjury(true)
                    }
                    if (nextData.severeInjury) {
                        pushTip(subSymbol + '检测到防御方为重伤状态')
                        dealingSevereInjury(false)
                    }
                    if (!prevData.severeInjury && !nextData.severeInjury) { pushTip(subSymbol + '重伤状态不满足') }
                }
                handleSevereInjury()
                const handleLastStand = () => {
                    pushTip('====最后一搏====')
                    const dealingLastStand = (isAttacker) => {
                        const data = isAttacker ? prevData : nextData
                        const personString = isAttacker ? '攻击方' : '防御方'
                        const personIndex = isAttacker ? 0 : 1
                        const calculateSevereInjuryImmuteFactor = (points) => (
                            parseFloat(Math.min((points * 0.001).toFixed(3), 1.0))
                        )
                        const calculateStateUpFactor = (points) => (
                            parseFloat((points * 0.0002).toFixed(4))
                        )
                        const calculateDamageUpFactor = (points) => (
                            parseFloat((points * 0.00015).toFixed(5))
                        )
                        const lastStandPoints = parseInt(data.data.lastStand)
                        const si = calculateSevereInjuryImmuteFactor(lastStandPoints)
                        const su = calculateStateUpFactor(lastStandPoints)
                        const du = calculateDamageUpFactor(lastStandPoints)
                        pushTip(subSymbol + subSymbol + `${personString}因最后一搏导致重伤惩罚下降${parseFloat((si * 100).toFixed(6))}%`)
                        pushTip(subSymbol + subSymbol + `${personString}因最后一搏导致判定提升${parseFloat((su * 100).toFixed(6))}%`)
                        pushTip(subSymbol + subSymbol + `${personString}因最后一搏导致伤害提升${parseFloat((du * 100).toFixed(6))}%`)
                        lastStandSevereInjuryImmuteFactor[personIndex] = si
                        lastStandStateUpFactor[personIndex] = su
                        lastStandDamageUpFactor[personIndex] = du
                    }
                    if (prevData.useLastStand) {
                        pushTip(subSymbol + '检测到攻击方启用最后一搏')
                        dealingLastStand(true)
                    }
                    if (nextData.useLastStand) {
                        pushTip(subSymbol + '检测到防御方启用最后一搏')
                        dealingLastStand(false)
                    }
                    if (!prevData.useLastStand && !nextData.useLastStand) { pushTip(subSymbol + '最后一搏没有被启用') }
                }
                handleLastStand()
                const stateFactorModify = () => {
                    pushTip('====判定比率====')
                    pushTip(subSymbol + `将进行判定比率修正：最终判定比率=(100%+最后一搏判定提升率)×[若重伤状态：100%-50%×(100%-最后一搏重伤惩罚下降率)]`)
                    finalStateFactor[0] = parseFloat((1.0 + lastStandStateUpFactor[0]) * (severeInjuryStatePercentage[0] === 1.0 ?
                        1.0 : 0.5 + 0.5 * lastStandSevereInjuryImmuteFactor[0]
                    ).toFixed(6))
                    finalStateFactor[1] = parseFloat((1.0 + lastStandStateUpFactor[1]) * (severeInjuryStatePercentage[1] === 1.0 ?
                        1.0 : 0.5 + 0.5 * lastStandSevereInjuryImmuteFactor[1]
                    ).toFixed(6))
                    pushTip(subSymbol + `攻击方最终判定比率为${parseFloat((finalStateFactor[0] * 100).toFixed(6))}%`)
                    pushTip(subSymbol + `防御方最终判定比率为${parseFloat((finalStateFactor[1] * 100).toFixed(6))}%`)
                }
                stateFactorModify()
            }
            handleStates()

            pushTip('====攻防技能对抗====')
            let rollResult = 0
            let skipDecreaseCalculation = false
            let counterResultArray = []
            const handleCounter = () => {
                const attackerData = {
                    attackType: prevData.selection.attackType,
                    attackPoint: parseInt(prevData.data[
                        prevData.selection.attackType === '徒手格斗' ? 'handToHandCombat' :
                            prevData.selection.attackType === '近战武器' ? 'meleeWeapons' :
                                prevData.selection.attackType === '盾牌格斗' ? 'shieldCombat' :
                                    prevData.selection.attackType === '箭术' ? 'archery' : 'throwing'
                    ]),
                }
                const defenderData = {
                    defendType: nextData.selection.defendType,
                    defendPoint: parseInt(nextData.data[
                        nextData.selection.defendType === '闪避' ? 'evasion' :
                            nextData.selection.defendType === '格挡反击' ? 'parryCounter' : 'precisionDefense'
                    ]),
                }
                if (attackerData.attackType === '箭术' && checked.useRapidFire) {
                    pushTip(subSymbol + '攻击方攻击类型为箭术，且启用快速射击，将优先验证快速射击')
                    rollResult = randomInt('快速射击', 0, Math.floor(prevData.data.rapidFire * finalStateFactor[0]), 1, true)
                    if (rollResult >= 250) { pushTip(subSymbol + '快速射击验证通过，将继续进行攻防技能对抗') }
                    else {
                        pushTip(subSymbol + '快速射击验证未通过，攻击落空，将直接结束伤害计算')
                        skipDecreaseCalculation = true
                        return
                    }
                }
                if (defenderData.defendType === '无' || attackerData.attackType === '魔法或技能') {
                    if (defenderData.defendType === '无') { pushTip(subSymbol + '防御方没有防御行为，将直接计算伤害') }
                    else { pushTip(subSymbol + '防御方进行防御行为') }
                    if (attackerData.attackType === '魔法或技能') { pushTip(subSymbol + '攻击方攻击类型为魔法或技能，将直接计算伤害') }
                    else { pushTip(subSymbol + '攻击方攻击类型不为魔法或技能') }
                }
                else {
                    if (defenderData.defendType === '闪避') {
                        const handleEvasionCounter = () => {
                            pushTip(subSymbol + subSymbol + `攻击方攻击类型为${attackerData.attackType}`)
                            pushTip(subSymbol + subSymbol + `攻击方${attackerData.attackType}点数为${attackerData.attackPoint}`)
                            pushTip(subSymbol + subSymbol + `防御方闪避点数为${defenderData.defendPoint}`)
                            const afp = Math.floor(attackerData.attackPoint * finalStateFactor[0])
                            const dfp = Math.floor(defenderData.defendPoint * finalStateFactor[1])
                            pushTip(subSymbol + subSymbol + `攻击方${attackerData.attackType}最终修正点数为${afp}`)
                            pushTip(subSymbol + subSymbol + `防御方闪避最终修正点数为${dfp}`)
                            const counterResult = counter(attackerData.attackType, '闪避', afp, dfp, 2)
                            if (counterResult) {
                                pushTip(subSymbol + subSymbol + `闪避失败，将进行伤害计算处理`)
                                counterResultArray = ['闪避']
                            }
                            else {
                                pushTip(subSymbol + subSymbol + `闪避成功，将直接结束伤害计算`)
                                skipDecreaseCalculation = true
                            }
                        }
                        pushTip(subSymbol + '检测到防御方防御类型为闪避，将进行闪避类对抗处理')
                        handleEvasionCounter()
                    }
                    else if (defenderData.defendType === '格挡反击') {
                        const handleParryCounter = () => {
                            pushTip(subSymbol + subSymbol + `攻击方攻击类型为${attackerData.attackType}`)
                            pushTip(subSymbol + subSymbol + `攻击方${attackerData.attackType}点数为${attackerData.attackPoint}`)
                            pushTip(subSymbol + subSymbol + `防御方格挡反击点数为${defenderData.defendPoint}`)
                            let afp = Math.floor(attackerData.attackPoint * finalStateFactor[0])
                            let dfp = Math.floor(defenderData.defendPoint * finalStateFactor[1])
                            pushTip(subSymbol + subSymbol + `攻击方${attackerData.attackType}最终修正点数为${afp}`)
                            pushTip(subSymbol + subSymbol + `防御方格挡反击最终修正点数为${dfp}`)
                            let counterResult = counter(attackerData.attackType, '格挡反击', afp, dfp, 2)
                            if (counterResult) {
                                pushTip(subSymbol + subSymbol + `格挡反击失败，将进行伤害计算处理`)
                                counterResultArray = ['格挡反击', false]
                            }
                            else {
                                pushTip(subSymbol + subSymbol + `格挡反击成功，将进行完美格挡对抗处理`)
                                pushTip(subSymbol + subSymbol + subSymbol + `攻击方力量点数为${parseInt(prevData.data.str)}`)
                                pushTip(subSymbol + subSymbol + subSymbol + `防御方体质点数为${parseInt(nextData.data.con)}`)
                                afp = Math.floor(parseInt(prevData.data.str) * finalStateFactor[0])
                                dfp = Math.floor(parseInt(nextData.data.con) * finalStateFactor[1])
                                pushTip(subSymbol + subSymbol + subSymbol + `攻击方力量最终修正点数为${afp}`)
                                pushTip(subSymbol + subSymbol + subSymbol + `防御方体质最终修正点数为${dfp}`)
                                counterResult = counter('力量', '体质', afp, dfp, 3)
                                if (counterResult) {
                                    pushTip(subSymbol + subSymbol + subSymbol + `非完美格挡，将进行伤害计算处理`)
                                    counterResultArray = ['格挡反击', true, false]
                                }
                                else {
                                    pushTip(subSymbol + subSymbol + subSymbol + `完美格挡，进行反击对抗处理`)
                                    pushTip(subSymbol + subSymbol + subSymbol + subSymbol + `防御方攻击类型为${nextData.selection.attackType}`)
                                    pushTip(subSymbol + subSymbol + subSymbol + subSymbol + `防御方${nextData.selection.attackType}点数为${parseInt(
                                        nextData.data[
                                        nextData.selection.attackType === '徒手格斗' ? 'handToHandCombat' :
                                            nextData.selection.attackType === '近战武器' ? 'meleeWeapons' : 'shieldCombat'
                                        ]
                                    )}`)
                                    pushTip(subSymbol + subSymbol + subSymbol + subSymbol + `攻击方闪避点数为${parseInt(prevData.data.evasion)}`)
                                    afp = Math.floor(parseInt(prevData.data.evasion) * finalStateFactor[0])
                                    dfp = Math.floor(parseInt(
                                        nextData.data[
                                        nextData.selection.attackType === '徒手格斗' ? 'handToHandCombat' :
                                            nextData.selection.attackType === '近战武器' ? 'meleeWeapons' : 'shieldCombat'
                                        ]
                                    ) * finalStateFactor[1])
                                    pushTip(subSymbol + subSymbol + subSymbol + subSymbol + `防御方${nextData.selection.attackType}最终修正点数为${afp}`)
                                    pushTip(subSymbol + subSymbol + subSymbol + subSymbol + `攻击方闪避最终修正点数为${dfp}`)
                                    counterResult = counter(nextData.selection.attackType, '闪避', dfp, afp, 4)
                                    if (counterResult) {
                                        pushTip(subSymbol + subSymbol + subSymbol + subSymbol + `反击成功，将进行伤害计算处理`)
                                        counterResultArray = ['格挡反击', true, true, true]
                                    } else {
                                        pushTip(subSymbol + subSymbol + subSymbol + subSymbol + `反击失败，将进行伤害计算处理`)
                                        counterResultArray = ['格挡反击', true, true, false]
                                    }
                                }
                            }
                        }
                        pushTip(subSymbol + '检测到防御方防御类型为格挡反击，将进行格挡反击类对抗处理')
                        handleParryCounter()
                    }
                    else if (nextData.selection.defendType === '精准防御') {
                        const handlePrecisionDefenseCounter = () => {
                            pushTip(subSymbol + subSymbol + `攻击方攻击类型为${attackerData.attackType}`)
                            pushTip(subSymbol + subSymbol + `攻击方${attackerData.attackType}点数为${attackerData.attackPoint}`)
                            pushTip(subSymbol + subSymbol + `防御方精准防御点数为${defenderData.defendPoint}`)
                            const afp = Math.floor(attackerData.attackPoint * finalStateFactor[0])
                            const dfp = Math.floor(defenderData.defendPoint * finalStateFactor[1])
                            pushTip(subSymbol + subSymbol + `攻击方${attackerData.attackType}最终修正点数为${afp}`)
                            pushTip(subSymbol + subSymbol + `防御方精准防御最终修正点数为${dfp}`)
                            const counterResult = counter(attackerData.attackType, '精准防御', afp, dfp, 2)
                            if (counterResult) {
                                pushTip(subSymbol + subSymbol + `精准防御失败，将进行伤害计算处理`)
                                counterResultArray = ['精准防御', false]
                            }
                            else {
                                pushTip(subSymbol + subSymbol + `精准防御成功，将进行伤害计算处理`)
                                counterResultArray = ['精准防御', true]
                            }
                        }
                        pushTip(subSymbol + '检测到防御方防御类型为精准防御，将进行精准防御类对抗处理')
                        handlePrecisionDefenseCounter()
                    }
                }
            }
            handleCounter()
            const handleDamage = () => {
                const attackerData = {
                    dmg: parseFloat(prevData.data.dmg),
                    atk: parseFloat(prevData.data.atk),
                    def: parseFloat(prevData.data.def),
                    '近战物理': prevData.percentage.meleePercentage === '' ? 1.0 : parseFloat((prevData.percentage.meleePercentage / 100).toFixed(6)),
                    '远程物理': prevData.percentage.archeryPercentage === '' ? 1.0 : parseFloat((prevData.percentage.archeryPercentage / 100).toFixed(6)),
                    '物理伤害': prevData.percentage.psychicPercentage === '' ? 1.0 : parseFloat((prevData.percentage.psychicPercentage / 100).toFixed(6)),
                    '气系魔法': prevData.percentage.anemoPercentage === '' ? 1.0 : parseFloat((prevData.percentage.anemoPercentage / 100).toFixed(6)),
                    '水系魔法': prevData.percentage.hydroPercentage === '' ? 1.0 : parseFloat((prevData.percentage.hydroPercentage / 100).toFixed(6)),
                    '火系魔法': prevData.percentage.pyroPercentage === '' ? 1.0 : parseFloat((prevData.percentage.pyroPercentage / 100).toFixed(6)),
                    '土系魔法': prevData.percentage.geoPercentage === '' ? 1.0 : parseFloat((prevData.percentage.geoPercentage / 100).toFixed(6)),
                    '光系魔法': prevData.percentage.luminoPercentage === '' ? 1.0 : parseFloat((prevData.percentage.luminoPercentage / 100).toFixed(6)),
                    '暗系魔法': prevData.percentage.umbrakinPercentage === '' ? 1.0 : parseFloat((prevData.percentage.umbrakinPercentage / 100).toFixed(6)),
                    '源力魔法': prevData.percentage.magicPercentage === '' ? 1.0 : parseFloat((prevData.percentage.magicPercentage / 100).toFixed(6)),
                    bonus: prevData.resistAndBonus.bonus === '' ? 1.0 : parseFloat((prevData.resistAndBonus.bonus / 100).toFixed(6)),
                    resist: prevData.resistAndBonus.resist === '' ? 1.0 : parseFloat((prevData.resistAndBonus.resist / 100).toFixed(6)),
                }
                const defenderData = {
                    dmg: parseFloat(nextData.data.dmg),
                    atk: parseFloat(nextData.data.atk),
                    def: parseFloat(nextData.data.def),
                    '近战物理': nextData.percentage.meleePercentage === '' ? 1.0 : parseFloat((nextData.percentage.meleePercentage / 100).toFixed(6)),
                    '远程物理': nextData.percentage.archeryPercentage === '' ? 1.0 : parseFloat((nextData.percentage.archeryPercentage / 100).toFixed(6)),
                    '物理伤害': nextData.percentage.psychicPercentage === '' ? 1.0 : parseFloat((nextData.percentage.psychicPercentage / 100).toFixed(6)),
                    '气系魔法': nextData.percentage.anemoPercentage === '' ? 1.0 : parseFloat((nextData.percentage.anemoPercentage / 100).toFixed(6)),
                    '水系魔法': nextData.percentage.hydroPercentage === '' ? 1.0 : parseFloat((nextData.percentage.hydroPercentage / 100).toFixed(6)),
                    '火系魔法': nextData.percentage.pyroPercentage === '' ? 1.0 : parseFloat((nextData.percentage.pyroPercentage / 100).toFixed(6)),
                    '土系魔法': nextData.percentage.geoPercentage === '' ? 1.0 : parseFloat((nextData.percentage.geoPercentage / 100).toFixed(6)),
                    '光系魔法': nextData.percentage.luminoPercentage === '' ? 1.0 : parseFloat((nextData.percentage.luminoPercentage / 100).toFixed(6)),
                    '暗系魔法': nextData.percentage.umbrakinPercentage === '' ? 1.0 : parseFloat((nextData.percentage.umbrakinPercentage / 100).toFixed(6)),
                    '源力魔法': nextData.percentage.magicPercentage === '' ? 1.0 : parseFloat((nextData.percentage.magicPercentage / 100).toFixed(6)),
                    bonus: nextData.resistAndBonus.bonus === '' ? 1.0 : parseFloat((nextData.resistAndBonus.bonus / 100).toFixed(6)),
                    resist: nextData.resistAndBonus.resist === '' ? 1.0 : parseFloat((nextData.resistAndBonus.resist / 100).toFixed(6)),
                }
                pushTip('====攻击伤害计算====')
                pushTip(subSymbol + `攻击方的伤害值：${attackerData.dmg}`)
                pushTip(subSymbol + `攻击方的攻击力：${attackerData.atk}`)
                pushTip(subSymbol + `防御方的防御力：${defenderData.def}`)
                pushTip(subSymbol + `攻击方的伤害类型：${prevData.selection.damageType}`)

                if (prevData.selection.damageType === '真实伤害') {
                    pushTip(subSymbol + `攻击方的伤害类型为真实伤害，将直接计算攻击造成的相对伤害：攻击方的伤害值×攻击方的攻击力÷防御方的防御力
                    ×(100%+最后一搏伤害提升率)×(若背击：200%)`)
                    decreaseDealt = parseFloat((attackerData.dmg * attackerData.atk / defenderData.def *
                        (1.0 + lastStandDamageUpFactor[0]) * (checked.useBackstab ? 2.0 : 1.0)).toFixed(6))
                    pushTip(subSymbol + subSymbol + `攻击造成的相对伤害为：${decreaseDealt}`)
                }
                else {
                    pushTip(subSymbol + `攻击方造成伤害加成：${parseFloat((attackerData.bonus * 100).toFixed(6))}%`)
                    if (prevData.selection.damageType === '灵能伤害') {
                        pushTip(subSymbol + `攻击方的伤害类型为灵能伤害，将直接计算攻击造成的相对伤害：攻击方的伤害值×攻击方造成伤害加成×
                        攻击方的攻击力÷防御方的防御力×(100%+最后一搏伤害提升率)×(若背击：200%)`)
                        decreaseDealt = parseFloat((attackerData.dmg * attackerData.atk * attackerData.bonus / defenderData.def *
                            (1.0 + lastStandDamageUpFactor[0]) * (checked.useBackstab ? 2.0 : 1.0)).toFixed(6))
                        pushTip(subSymbol + subSymbol + `攻击造成的相对伤害为：${decreaseDealt}`)
                    } else {
                        pushTip(subSymbol + `防御方受到伤害加成：${parseFloat((defenderData.resist * 100).toFixed(6))}%`)
                        let currentPercentage = 1.0
                        switch (prevData.selection.damageType) {
                            case '近战物理':
                                currentPercentage = attackerData['近战物理'] * attackerData['物理伤害']
                                break
                            case '远程物理':
                                currentPercentage = attackerData['远程物理'] * attackerData['物理伤害']
                                break
                            case '气系魔法':
                                currentPercentage = attackerData['气系魔法'] * attackerData['源力魔法']
                                break
                            case '水系魔法':
                                currentPercentage = attackerData['水系魔法'] * attackerData['源力魔法']
                                break
                            case '火系魔法':
                                currentPercentage = attackerData['火系魔法'] * attackerData['源力魔法']
                                break
                            case '土系魔法':
                                currentPercentage = attackerData['土系魔法'] * attackerData['源力魔法']
                                break
                            case '光系魔法':
                                currentPercentage = attackerData['光系魔法'] * attackerData['源力魔法']
                                break
                            case '暗系魔法':
                                currentPercentage = attackerData['暗系魔法'] * attackerData['源力魔法']
                                break
                            case '源力魔法':
                                currentPercentage = attackerData['源力魔法']
                                break
                            default:
                                break
                        }
                        currentPercentage = parseFloat(currentPercentage.toFixed(6))
                        pushTip(subSymbol + `防御方所受全物理伤害百分比：${parseFloat((attackerData['物理伤害'] * 100).toFixed(6))}%`)
                        pushTip(subSymbol + `防御方所受全魔法伤害百分比：${parseFloat((attackerData['源力魔法'] * 100).toFixed(6))}%`)
                        pushTip(subSymbol + `防御方所受${prevData.selection.damageType}伤害百分比：${parseFloat((currentPercentage * 100).toFixed(6))}%`)
                        pushTip(subSymbol + '将计算攻击方的总伤害倍率：攻击方造成伤害加成×防御方所受属性伤害百分比×防御方受到伤害加成×(100%+最后一搏伤害提升率)×(若背击：200%)')
                        let finalDamageTimes = parseFloat((attackerData.bonus * defenderData.resist * currentPercentage *
                            (1.0 + lastStandDamageUpFactor[0]) * (checked.useBackstab ? 2.0 : 1.0)).toFixed(6))
                        if (checked.useBackstab) { pushTip(subSymbol + subSymbol + '检测到背击规则启用') }
                        pushTip(subSymbol + subSymbol + `攻击方造成的伤害倍率为：${parseFloat((finalDamageTimes * 100).toFixed(6))}%`)
                        if (prevData.selection.attackType === '魔法或技能') {
                            pushTip(subSymbol + `攻击方的攻击类型为${prevData.selection.attackType}，伤害不存在浮动`)
                        } else {
                            pushTip(subSymbol + `攻击方的攻击类型为${prevData.selection.attackType}，伤害在80%~120%之间随机浮动，将计算浮动倍率`)
                            const randomFactor = parseFloat((randomInt(null, 80000, 120000, 0, false) / 100000).toFixed(6))
                            pushTip(subSymbol + subSymbol + `随机浮动伤害倍率为：${parseFloat((randomFactor * 100).toFixed(6))}%`)
                            finalDamageTimes = parseFloat((finalDamageTimes * randomFactor).toFixed(6))
                            pushTip(subSymbol + subSymbol + `最终伤害倍率为：${parseFloat((finalDamageTimes * 100).toFixed(6))}%`)
                        }
                        pushTip(subSymbol + '将计算攻击造成的相对伤害：攻击方的伤害值×最终伤害倍率×攻击方的攻击力÷防御方的防御力')
                        decreaseDealt = parseFloat((attackerData.dmg * finalDamageTimes * attackerData.atk / defenderData.def).toFixed(6))
                        pushTip(subSymbol + subSymbol + `攻击造成的相对伤害为：${decreaseDealt}`)
                    }
                }
            }
            const handleDecrease = () => {
                pushTip('====造成减值计算====')
                if (counterResultArray[0] === '闪避') {
                    pushTip(subSymbol + `防御方的防御技能为闪避，没有任何受到的相对伤害修正`)
                    pushTip(subSymbol + `防御方最终受到伤害减值：${decreaseDealt}，向下取整为：${Math.floor(decreaseDealt)}}`)
                }
                else if (counterResultArray[0] === '格挡反击') {
                    pushTip(subSymbol + `防御方的防御技能为格挡反击，结果为${counterResultArray[1] === true ? '成功' : '失败'}`)
                    if (!counterResultArray[1]) {
                        pushTip(subSymbol + `防御方最终受到伤害减值：${decreaseDealt}，向下取整为：${Math.floor(decreaseDealt)}}`)
                    } else {
                        pushTip(subSymbol + `格挡反击的完美格挡结果为${counterResultArray[2] === true ? '成功' : '失败'}`)
                        const parryCounter = nextData.data.parryCounter
                        const parryCounterFactor1 = counterResultArray[2] === true ? parseFloat(Math.min((0.1 + parryCounter * 0.0004).toFixed(4), 0.7)) :
                            parseFloat(Math.min((0.1 + parryCounter * 0.0003).toFixed(4), 0.35))
                        pushTip(subSymbol + `防御方的格挡反击点数：${parryCounter}`)
                        pushTip(subSymbol + `格挡反击的伤害减免比率：${parseFloat((parryCounterFactor1 * 100).toFixed(4))}%`)
                        pushTip(subSymbol + '将计算格挡反击作用下的最终减值：攻击相对伤害×(100%-格挡反击伤害减免比率)')
                        decreaseDealt = parseFloat((decreaseDealt * (1.0 - parryCounterFactor1)).toFixed(3))
                        pushTip(subSymbol + subSymbol + `防御方最终受到伤害减值：${decreaseDealt}，向下取整为：${Math.floor(decreaseDealt)}`)
                        if (counterResultArray[2]) {
                            if (counterResultArray[3]) {
                                const parryCounterFactor2 = parseFloat(Math.min((0.35 + parryCounter * 0.00016).toFixed(5), 0.75))
                                pushTip(subSymbol + `格挡反击的反击伤害比率：${parseFloat((parryCounterFactor2 * 100).toFixed(4))}%`)
                                pushTip(subSymbol + '将计算反击动作')
                                let counterAttackResult = true
                                const handleCounterattack = () => {
                                    const handlePart1 = () => {
                                        pushTip('====反击攻防技能对抗====')
                                        const attackerData = {
                                            defendType: prevData.selection.defendType,
                                            defendPoint: parseInt(prevData.data.evasion),
                                        }
                                        const defenderData = {
                                            attackType: nextData.selection.attackType,
                                            attackPoint: parseInt(nextData.data[
                                                nextData.selection.attackType === '徒手格斗' ? 'handToHandCombat' :
                                                    nextData.selection.attackType === '近战武器' ? 'meleeWeapons' : 'shieldCombat'
                                            ]),
                                        }
                                        if (attackerData.defendType === '无') {
                                            pushTip(subSymbol + subSymbol + `受击方没有防御动作，将直接计算反击伤害`)
                                            counterAttackResult = true
                                        } else {
                                            pushTip(subSymbol + '受击方的防御类型必须为闪避，将进行闪避类对抗处理')
                                            pushTip(subSymbol + subSymbol + `反击方攻击类型为${defenderData.attackType}`)
                                            pushTip(subSymbol + subSymbol + `反击方${defenderData.attackType}点数为${defenderData.attackPoint}`)
                                            pushTip(subSymbol + subSymbol + `受击方闪避点数为${attackerData.defendPoint}`)
                                            const afp = Math.floor(attackerData.defendPoint * finalStateFactor[0])
                                            const dfp = Math.floor(defenderData.attackPoint * finalStateFactor[1])
                                            pushTip(subSymbol + subSymbol + `反击方${defenderData.attackType}最终修正点数为${dfp}`)
                                            pushTip(subSymbol + subSymbol + `受击方闪避最终修正点数为${afp}`)
                                            const counterResult = counter(defenderData.attackType, '闪避', dfp, afp, 2)
                                            if (counterResult) {
                                                pushTip(subSymbol + subSymbol + `闪避失败，将进行伤害计算处理`)
                                                counterAttackResult = true
                                            }
                                            else {
                                                pushTip(subSymbol + subSymbol + `闪避成功，将直接结束伤害计算`)
                                                counterAttackResult = false
                                            }
                                        }
                                    }
                                    //handlePart1()
                                    const handlePart2 = () => {
                                        if (counterAttackResult) {
                                            const attackerData = {
                                                dmg: parseFloat(prevData.data.dmg),
                                                atk: parseFloat(prevData.data.atk),
                                                def: parseFloat(prevData.data.def),
                                                '近战物理': prevData.percentage.meleePercentage === '' ? 1.0 : parseFloat((prevData.percentage.meleePercentage / 100).toFixed(6)),
                                                '远程物理': prevData.percentage.archeryPercentage === '' ? 1.0 : parseFloat((prevData.percentage.archeryPercentage / 100).toFixed(6)),
                                                '物理伤害': prevData.percentage.psychicPercentage === '' ? 1.0 : parseFloat((prevData.percentage.psychicPercentage / 100).toFixed(6)),
                                                '气系魔法': prevData.percentage.anemoPercentage === '' ? 1.0 : parseFloat((prevData.percentage.anemoPercentage / 100).toFixed(6)),
                                                '水系魔法': prevData.percentage.hydroPercentage === '' ? 1.0 : parseFloat((prevData.percentage.hydroPercentage / 100).toFixed(6)),
                                                '火系魔法': prevData.percentage.pyroPercentage === '' ? 1.0 : parseFloat((prevData.percentage.pyroPercentage / 100).toFixed(6)),
                                                '土系魔法': prevData.percentage.geoPercentage === '' ? 1.0 : parseFloat((prevData.percentage.geoPercentage / 100).toFixed(6)),
                                                '光系魔法': prevData.percentage.luminoPercentage === '' ? 1.0 : parseFloat((prevData.percentage.luminoPercentage / 100).toFixed(6)),
                                                '暗系魔法': prevData.percentage.umbrakinPercentage === '' ? 1.0 : parseFloat((prevData.percentage.umbrakinPercentage / 100).toFixed(6)),
                                                '源力魔法': prevData.percentage.magicPercentage === '' ? 1.0 : parseFloat((prevData.percentage.magicPercentage / 100).toFixed(6)),
                                                bonus: prevData.resistAndBonus.bonus === '' ? 1.0 : parseFloat((prevData.resistAndBonus.bonus / 100).toFixed(6)),
                                                resist: prevData.resistAndBonus.resist === '' ? 1.0 : parseFloat((prevData.resistAndBonus.resist / 100).toFixed(6)),
                                            }
                                            const defenderData = {
                                                dmg: parseFloat(nextData.data.dmg),
                                                atk: parseFloat(nextData.data.atk),
                                                def: parseFloat(nextData.data.def),
                                                '近战物理': nextData.percentage.meleePercentage === '' ? 1.0 : parseFloat((nextData.percentage.meleePercentage / 100).toFixed(6)),
                                                '远程物理': nextData.percentage.archeryPercentage === '' ? 1.0 : parseFloat((nextData.percentage.archeryPercentage / 100).toFixed(6)),
                                                '物理伤害': nextData.percentage.psychicPercentage === '' ? 1.0 : parseFloat((nextData.percentage.psychicPercentage / 100).toFixed(6)),
                                                '气系魔法': nextData.percentage.anemoPercentage === '' ? 1.0 : parseFloat((nextData.percentage.anemoPercentage / 100).toFixed(6)),
                                                '水系魔法': nextData.percentage.hydroPercentage === '' ? 1.0 : parseFloat((nextData.percentage.hydroPercentage / 100).toFixed(6)),
                                                '火系魔法': nextData.percentage.pyroPercentage === '' ? 1.0 : parseFloat((nextData.percentage.pyroPercentage / 100).toFixed(6)),
                                                '土系魔法': nextData.percentage.geoPercentage === '' ? 1.0 : parseFloat((nextData.percentage.geoPercentage / 100).toFixed(6)),
                                                '光系魔法': nextData.percentage.luminoPercentage === '' ? 1.0 : parseFloat((nextData.percentage.luminoPercentage / 100).toFixed(6)),
                                                '暗系魔法': nextData.percentage.umbrakinPercentage === '' ? 1.0 : parseFloat((nextData.percentage.umbrakinPercentage / 100).toFixed(6)),
                                                '源力魔法': nextData.percentage.magicPercentage === '' ? 1.0 : parseFloat((nextData.percentage.magicPercentage / 100).toFixed(6)),
                                                bonus: nextData.resistAndBonus.bonus === '' ? 1.0 : parseFloat((nextData.resistAndBonus.bonus / 100).toFixed(6)),
                                                resist: nextData.resistAndBonus.resist === '' ? 1.0 : parseFloat((nextData.resistAndBonus.resist / 100).toFixed(6)),
                                            }
                                            pushTip('====反击伤害计算====')
                                            pushTip(subSymbol + `反击方的伤害值：${defenderData.dmg}`)
                                            pushTip(subSymbol + `反击方的攻击力：${defenderData.atk}`)
                                            pushTip(subSymbol + `受击方的防御力：${attackerData.def}`)
                                            pushTip(subSymbol + `反击方的伤害类型：${nextData.selection.damageType}`)
                                            if (nextData.selection.damageType === '真实伤害') {
                                                pushTip(subSymbol + `反击方的伤害类型为真实伤害，将直接计算反击造成的相对伤害：反击方的伤害值×反击方的攻击力÷受击方的防御力
                                                ×(100%+最后一搏伤害提升率)`)
                                                counterDecreaseDealt = parseFloat((defenderData.dmg * defenderData.atk / attackerData.def *
                                                    (1.0 + lastStandDamageUpFactor[1])).toFixed(6))
                                                pushTip(subSymbol + subSymbol + `反击造成的相对伤害为：${counterDecreaseDealt}`)
                                            } else {
                                                pushTip(subSymbol + `反击方造成伤害加成：${parseFloat((defenderData.bonus * 100).toFixed(6))}%`)
                                                if (nextData.selection.damageType === '灵能伤害') {
                                                    pushTip(subSymbol + `反击方的伤害类型为灵能伤害，将直接计算反击造成的相对伤害：反击方的伤害值×反击方造成伤害加成
                                                    ×反击方的攻击力÷受击方的防御力×(100%+最后一搏伤害提升率)`)
                                                    counterDecreaseDealt = parseFloat((defenderData.dmg * defenderData.atk * defenderData.bonus
                                                        / attackerData.def * (1.0 + lastStandDamageUpFactor[1])).toFixed(6))
                                                    pushTip(subSymbol + subSymbol + `反击造成的相对伤害为：${counterDecreaseDealt}`)
                                                } else {
                                                    pushTip(subSymbol + `受击方受到伤害加成：${parseFloat((attackerData.resist * 100).toFixed(6))}%`)
                                                    let currentPercentage = 1.0
                                                    switch (nextData.selection.damageType) {
                                                        case '近战物理':
                                                            currentPercentage = defenderData['近战物理'] * defenderData['物理伤害']
                                                            break
                                                        case '远程物理':
                                                            currentPercentage = defenderData['远程物理'] * defenderData['物理伤害']
                                                            break
                                                        case '气系魔法':
                                                            currentPercentage = defenderData['气系魔法'] * defenderData['源力魔法']
                                                            break
                                                        case '水系魔法':
                                                            currentPercentage = defenderData['水系魔法'] * defenderData['源力魔法']
                                                            break
                                                        case '火系魔法':
                                                            currentPercentage = defenderData['火系魔法'] * defenderData['源力魔法']
                                                            break
                                                        case '土系魔法':
                                                            currentPercentage = defenderData['土系魔法'] * defenderData['源力魔法']
                                                            break
                                                        case '光系魔法':
                                                            currentPercentage = defenderData['光系魔法'] * defenderData['源力魔法']
                                                            break
                                                        case '暗系魔法':
                                                            currentPercentage = defenderData['暗系魔法'] * defenderData['源力魔法']
                                                            break
                                                        case '源力魔法':
                                                            currentPercentage = defenderData['源力魔法']
                                                            break
                                                        default:
                                                            break
                                                    }
                                                    currentPercentage = parseFloat(currentPercentage.toFixed(6))
                                                    pushTip(subSymbol + `受击方所受全物理伤害百分比：${parseFloat((defenderData['物理伤害'] * 100).toFixed(6))}%`)
                                                    pushTip(subSymbol + `受击方所受全魔法伤害百分比：${parseFloat((defenderData['源力魔法'] * 100).toFixed(6))}%`)
                                                    pushTip(subSymbol + `受击方所受${nextData.selection.damageType}伤害百分比：
                                                    ${parseFloat((currentPercentage * 100).toFixed(6))}%`)
                                                    pushTip(subSymbol + '将计算反击方的总伤害倍率：' +
                                                        '反击方造成伤害加成×防御方所受属性伤害百分比×防御方受到伤害加成×(100%+最后一搏伤害提升率)')
                                                    let finalDamageTimes = parseFloat((defenderData.bonus * attackerData.resist * currentPercentage *
                                                        (1.0 + lastStandDamageUpFactor[1])).toFixed(6))
                                                    pushTip(subSymbol + subSymbol + `反击方造成的伤害倍率为：${parseFloat((finalDamageTimes * 100).toFixed(6))}%`)
                                                    pushTip(subSymbol + `反击方的攻击类型为${nextData.selection.attackType}，伤害在80%~120%之间随机浮动，将计算浮动倍率`)
                                                    const randomFactor = parseFloat((randomInt(null, 80000, 120000, 0, false) / 100000).toFixed(6))
                                                    pushTip(subSymbol + subSymbol + `随机浮动伤害倍率为：${parseFloat((randomFactor * 100).toFixed(6))}%`)
                                                    finalDamageTimes = parseFloat((finalDamageTimes * randomFactor).toFixed(6))
                                                    pushTip(subSymbol + subSymbol + `最终伤害倍率为：${parseFloat((finalDamageTimes * 100).toFixed(6))}%`)
                                                    pushTip(subSymbol + '将计算反击造成的相对伤害：反击方的伤害值×最终伤害倍率×反击方的攻击力÷受击方的防御力')
                                                    counterDecreaseDealt = parseFloat((defenderData.dmg * finalDamageTimes * defenderData.atk / attackerData.def).toFixed(6))
                                                    pushTip(subSymbol + subSymbol + `反击造成的相对伤害为：${counterDecreaseDealt}`)
                                                }
                                            }
                                        }
                                    }
                                    handlePart2()
                                    const handlePart3 = () => {
                                        if (counterAttackResult) {
                                            pushTip('====造成减值计算====')
                                            pushTip(subSymbol + `反击方的反击伤害比率为${parryCounterFactor2}%，将进行反击减值修正`)
                                            counterDecreaseDealt = parseFloat((parryCounterFactor2 * counterDecreaseDealt).toFixed(3))
                                            pushTip(subSymbol + `受击方最终受到伤害减值：${counterDecreaseDealt}，向下取整为：${Math.floor(counterDecreaseDealt)}`)
                                        }
                                    }
                                    handlePart3()
                                }
                                handleCounterattack()
                            }
                        }
                    }
                }
                else if (counterResultArray[0] === '精准防御') {
                    pushTip(subSymbol + `防御方的防御技能为精准防御，结果为${counterResultArray[1] === true ? '成功' : '失败'}`)
                    const precisionDefense = nextData.data.precisionDefense
                    const precisionDefenseFacotr1 = parseFloat(Math.min((precisionDefense * 0.00025).toFixed(5), 0.75))
                    const precisionDefenseFacotr2 = counterResultArray[1] === true ? 1.0 : parseFloat(Math.min((precisionDefense * 0.0008).toFixed(4), 1.0))
                    pushTip(subSymbol + `防御方的精准防御点数：${precisionDefense}`)
                    pushTip(subSymbol + `精准防御被动伤害减免比率：${parseFloat((precisionDefenseFacotr1 * 100).toFixed(5))}%`)
                    pushTip(subSymbol + `精准防御无视超出防御力部分的攻击力比率：${parseFloat((precisionDefenseFacotr2 * 100).toFixed(4))}%`)
                    const finalAtk = parseFloat((prevData.data.atk - Math.max((prevData.data.atk - nextData.data.def), 0) * precisionDefenseFacotr2).toFixed(3))
                    pushTip(subSymbol + `精准防御无视部分超出防御力的攻击力后，攻击方攻击力为：${finalAtk}%`)
                    pushTip(subSymbol + '将计算精准防御作用下的最终减值：攻击相对伤害×(100%-精准防御伤害减免比率)×(攻击方修正后攻击力÷攻击方原攻击力)')
                    decreaseDealt = parseFloat((decreaseDealt * (1.0 - precisionDefenseFacotr1) * finalAtk / prevData.data.atk).toFixed(3))
                    pushTip(subSymbol + `防御方最终受到伤害减值：${decreaseDealt}，向下取整为：${Math.floor(decreaseDealt)}}`)
                }
            }
            if (!skipDecreaseCalculation) {
                handleDamage()
                handleDecrease()
            }
            pushTip('====总结====')
            pushTip(subSymbol + `攻击方对防御方造成的最终伤害减值为：${decreaseDealt}，向下取整为：${Math.floor(decreaseDealt)}`)
            if (counterDecreaseDealt !== 0) {
                pushTip(subSymbol + `反击方对受反击方造成的最终伤害减值为：${counterDecreaseDealt}，向下取整为：${Math.floor(counterDecreaseDealt)}`)
            }
            setResult(stringArray)
            if (checked.keepFloat) {
                setResultDecrease([decreaseDealt, counterDecreaseDealt])
            } else {
                setResultDecrease([Math.floor(decreaseDealt), Math.floor(counterDecreaseDealt)])
            }
        }
    }

    useImperativeHandle(ref, () => ({
        calculateResult: calculateResult,
    }))
    return (
        <div className="container" style={{
            paddingTop: '2rem',
        }}>
            <div className="container flex flex-col" style={{
                borderTop: '0.05rem solid darkgreen',
            }}>
                <div style={{
                    padding: '1.5rem',
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    fontFamily: 'KaiTi',
                    fontWeight: 'bold',
                    color: 'darkgreen',
                    textAlign: 'center',
                }}>
                    <div style={validStates ?
                        {
                            background: `linear - gradient(to right, transparent 0 %, #c5e09b 25 %, #c5e09b 75 %, transparent 100 %)`,
                            width: '60%',
                            padding: '1rem',
                        } :
                        {
                            background: `linear - gradient(to right, transparent 0 %, #c5e09b 25 %, #c5e09b 75 %, transparent 100 %)`,
                            width: '60%',
                            padding: '1rem',
                            color: 'red',
                        }
                    }>
                        {!validStates ? '有未通过验证的数据，请先通过验证' :
                            result.length === 0 ? '点击上面的发动攻击按钮结算' : '结算完毕，再次点击将进行新一轮结算'
                        }
                    </div>
                </div>
            </div>

            {/* 展示部分 */}
            <div>
                <table>
                    <tbody>
                        {result.map((tipString, index) => (
                            <tr key={`BCRP Outcomes row ${index} `}>
                                <td>{tipString}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
})

export default BCResultPartOutcomes