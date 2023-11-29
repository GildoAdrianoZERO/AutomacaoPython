# Bibliotecas 
from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time

# variaveis
url = "https://github.com"
username = "testeFaculdadeSelenium@gmail.com"
password = "TesteSelenium@123"

# Inicializa o WebDriver 
driver = webdriver.Chrome()

# Abre o GitHub
driver.get(url)

# Localiza e clica no link "Sign in"
sign_in_link = driver.find_element("link text", "Sign in")
sign_in_link.click()

# Espera até que o campo de nome de usuário seja visível
username_field = WebDriverWait(driver, 10).until(EC.presence_of_element_located((By.ID, "login_field")))

# Preenche o nome de usuário e senha
password_field = driver.find_element("id", "password")
username_field.send_keys(username)
password_field.send_keys(password)

# Submete o formulário
password_field.send_keys(Keys.RETURN)

# Pausa de 5s
time.sleep(5)