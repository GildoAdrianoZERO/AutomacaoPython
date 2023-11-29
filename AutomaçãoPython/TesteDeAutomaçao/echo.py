import pyautogui
import time


pyautogui.press('win')
time.sleep(0.5)
pyautogui.write('edge', interval=0.08)
pyautogui.press('enter')
time.sleep(1) 



url_formulario = 'http://192.168.1.70:5500/TelaLogin/teladelogin.html'
pyautogui.write(url_formulario, interval=0.08)
pyautogui.press('enter')
time.sleep(2) 
pyautogui.press('F11')


campos_formulario = {
    'user': 'admin',
    'pass': 'admin',
    'campo_mensagem': 'admin'
}

for campo, valor in campos_formulario.items():
    pyautogui.write(valor, interval=0.1)
    pyautogui.press('tab')  
    time.sleep(0.5)  


pyautogui.press('enter')

pyautogui.press('enter')
time.sleep(0.5)
