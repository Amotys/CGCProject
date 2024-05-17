# app.py

from flask import Flask, render_template

app = Flask(__name__)

# 主页面
@app.route('/')
def index():
    return render_template('index.html')

# 世界观页面
@app.route('/world')
def world():
    return render_template('world.html')

# 规则页面
@app.route('/rules')
def rules():
    return render_template('rules.html')

# 工具汇总页面
@app.route('/tools')
def tools():
    return render_template('tools.html')

# 角色卡生成工具页面
@app.route('/tools/character-generator')
def character_generator():
    return render_template('character_generator.html')

# 随机掷骰工具页面
@app.route('/tools/dice-roller')
def dice_roller():
    return render_template('dice_roller.html')

# 跑团记录整理页面
@app.route('/tools/log-analyzer')
def log_analyzer():
    return render_template('log_analyzer.html')
