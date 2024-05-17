# blueprints.py

from flask import Blueprint, render_template

tools_bp = Blueprint('tools', __name__)

@tools_bp.route('/dice-roller')
def dice_roller(expression, count_zero = False):
    from plugins.dice_roller import roll_dice
    result = roll_dice(expression, count_zero)
    return render_template('dice_roller.html', result=result)

