import re
import random

def roll_dice(expression, count_zero = False):

    # 掷骰函数，根据表达式进行掷骰
    # 定义正则表达式匹配模式
    pattern = r'(\d{1,2})#(\d{1,4})d(\d{1,5})p(\d{1,2})b(\d{1,2})?'

    # 匹配表达式
    match = re.match(pattern, expression)
    if match:
        rounds = int(match.group(1) or 1)               # 轮数，默认为1
        dice_count = int(match.group(2) or 1)           # 骰子个数，默认为1
        dice_faces = int(match.group(3) or 100)         # 骰子面数，默认为100
        penalty_dice = int(match.group(4) or 0)         # 惩罚骰个数，默认为0
        bonus_dice = int(match.group(5) or 0)           # 奖励骰个数，默认为0

        rounds = min(max(rounds, 1), 99)                # 轮数范围，1~99
        dice_count = min(max(dice_count, 1), 9999)      # 骰子个数范围，1~9999
        dice_faces = min(max(dice_faces, 1), 99999)     # 骰子面数范围，1~99999
        penalty_dice = min(max(penalty_dice, 0), 99)    # 惩罚骰个数范围，0~99
        bonus_dice = min(max(bonus_dice, 0), 99)        # 奖励骰个数范围，0~99

        result = []
        for _ in range(rounds):
            dice_rolls = [random.randint(0 if count_zero else 1, dice_faces) for _ in range(dice_count)]
            def apply_dice_modifier(modifier_dice, operation): # 惩罚骰和奖励骰
                for i in range(len(dice_rolls)):
                    modifier_rolls = [random.randint(0 if count_zero else 1, dice_faces) for _ in range(modifier_dice)]
                    dice_rolls[i] = operation(dice_rolls[i], operation(modifier_rolls))
            if penalty_dice > 0:
                apply_dice_modifier(penalty_dice, min)
            if bonus_dice > 0:
                apply_dice_modifier(bonus_dice, max)
            result.append(dice_rolls)

        return result   # 表达式正确，返回掷骰结果，为二维数组
    else:
        return []       # 表达式不正确，默认返回空集