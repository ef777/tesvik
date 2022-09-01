# Importing all the required modules
from cgi import print_form
from typing import Literal
from urllib.request import Request
from flask import (
    Flask,
    flash,
    request,
    redirect,
    url_for,
    render_template,
    abort
)
from bs4 import BeautifulSoup

import re 
import requests

app = Flask(__name__)
    
# Set a password

# Create a route for home page




@app.route("/", methods=["GET", "POST"])
def sorgua():
    return render_template("anasayfa.html")




@app.route("/tesvikgetir", methods=["GET", "POST"])
def tes2():
    sonuc=tesvikgetir()    
    return render_template("tesvikgetir.html",sonsonuc = sonuc)
 

@app.route("/ilcegetir", methods=["GET", "POST"])
def ilcebul():
    bulunanilceler = request.args.get('ilceid')
    sondeger=ilcegetir(bulunanilceler)
    return sondeger
    
@app.route("/ara", methods=["GET", "POST"])
def aramala():
    aranan = request.args.get('arama')
    sonuc=aramafonk(aranan)
    return sonuc

@app.route("/nacegetir", methods=["GET", "POST"])
def nace():
    idsi = request.args.get('id')
    sonuc=nacegetir(idsi)
    return sonuc    


@app.route("/tesviksorgu", methods=["GET", "POST"])
def tes():
    form = request.args.get('form')
    sonuc=tessorgu(form)
    return sonuc    



def ilcegetir(ilceid):
   
    
    cookies = {
        '_ga': 'GA1.3.826170572.1661779980',
        '_gid': 'GA1.3.1845503905.1661779980',
        'wbn_session': '0cccd28f5ed99d7d225786a168a9f3c331199713',
        '_gat_gtag_UA_169940278_1': '1',
    }
    
    headers = {
        'authority': 'www.yatirimadestek.gov.tr',
        'accept': '*/*',
        'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        # Requests sorts cookies= alphabetically
        # 'cookie': '_ga=GA1.3.826170572.1661779980; _gid=GA1.3.1845503905.1661779980; wbn_session=0cccd28f5ed99d7d225786a168a9f3c331199713; _gat_gtag_UA_169940278_1=1',
        'origin': 'https://www.yatirimadestek.gov.tr',
        'referer': 'https://www.yatirimadestek.gov.tr/tesvik-robotu',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }
    
    data = {
        'il_id': ilceid,
    }
    
    response = requests.post('https://www.yatirimadestek.gov.tr/Ajax/tesvikIlceGetir', cookies=cookies, headers=headers, data=data)
    return response.json()
    


def nacegetir(id):

    cookies = {
        '_ga': 'GA1.3.826170572.1661779980',
        '_gid': 'GA1.3.1845503905.1661779980',
        'wbn_session': '8646aeaf8b811e8216cba7d79f80dcd14f91b45c',
        '_gat_gtag_UA_169940278_1': '1',
    }
    
    headers = {
        'authority': 'www.yatirimadestek.gov.tr',
        'accept': '*/*',
        'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        # Requests sorts cookies= alphabetically
        # 'cookie': '_ga=GA1.3.826170572.1661779980; _gid=GA1.3.1845503905.1661779980; wbn_session=8646aeaf8b811e8216cba7d79f80dcd14f91b45c; _gat_gtag_UA_169940278_1=1',
        'origin': 'https://www.yatirimadestek.gov.tr',
        'referer': 'https://www.yatirimadestek.gov.tr/tesvik-robotu',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }
    
    data = {
        'id': id,
    }
    
    response = requests.post('https://www.yatirimadestek.gov.tr/Ajax/naceGetir', cookies=cookies, headers=headers, data=data)
    return response.content

def itemduzelt(tumurl:str):
    dene=tumurl
    
  

    soup = BeautifulSoup(dene, "html.parser")
  
    listem=[]

    listem=soup.findAll('li')
    
        
    print(listem)
 
    return listem  
                      



def aramafonk(aranan):   

   
    data = {
    'query': aranan,
     }
        
    headers = {
    'authority': 'www.yatirimadestek.gov.tr',
    'accept': '*/*',
    'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
    'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
    # Requests sorts cookies= alphabetically
    # 'cookie': '_ga=GA1.3.826170572.1661779980; _gid=GA1.3.1845503905.1661779980; wbn_session=0cccd28f5ed99d7d225786a168a9f3c331199713; _gat_gtag_UA_169940278_1=1',
    'origin': 'https://www.yatirimadestek.gov.tr',
    'referer': 'https://www.yatirimadestek.gov.tr/tesvik-robotu',
    'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
    'sec-ch-ua-mobile': '?0',
    'sec-ch-ua-platform': '"Linux"',
    'sec-fetch-dest': 'empty',
    'sec-fetch-mode': 'cors',
    'sec-fetch-site': 'same-origin',
    'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
    'x-requested-with': 'XMLHttpRequest',
}
    cookies = {
    '_ga': 'GA1.3.826170572.1661779980',
    '_gid': 'GA1.3.1845503905.1661779980',
    'wbn_session': '0cccd28f5ed99d7d225786a168a9f3c331199713',
    '_gat_gtag_UA_169940278_1': '1',
    }   
    response = requests.post('https://www.yatirimadestek.gov.tr/Ajax/searchUs97', cookies=cookies, headers=headers, data=data) 
 
   
    return response.content


def tessorgu(form):   
    cookies = {
        '_ga': 'GA1.3.826170572.1661779980',
        '_gid': 'GA1.3.1845503905.1661779980',
        'wbn_session': 'b17a75647b1c077bfa75d8fd5371f8bb8b09abec',
    }
    
    headers = {
        'authority': 'www.yatirimadestek.gov.tr',
        'accept': '*/*',
        'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
        'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
        # Requests sorts cookies= alphabetically
        # 'cookie': '_ga=GA1.3.826170572.1661779980; _gid=GA1.3.1845503905.1661779980; wbn_session=b17a75647b1c077bfa75d8fd5371f8bb8b09abec',
        'origin': 'https://www.yatirimadestek.gov.tr',
        'referer': 'https://www.yatirimadestek.gov.tr/tesvik-robotu',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
        'x-requested-with': 'XMLHttpRequest',
    }
    
    data = {
        'form': 'yatirimin_tanimi_id=907&yatirim_yeri=17&ilce_id=59&osb_ici=0&ongorulen_istihdam_sayisi=12&gumruk_vergisi_orani=2&kdv=18&makine_ekipman_tutari=1.000.000.000&makine_ekipman_tutari_yabanci=1&arsa_arazi_tutari=1&insaat=1&diger_giderler=1&faiz_destegine_esas_tutar=1&vade=1',
    }
    
    response = requests.post('https://www.yatirimadestek.gov.tr/Ajax/tesvik_hesapla', cookies=cookies, headers=headers, data=data)
    print("teşvik tutarı hesap")
    return response.content
     
    
    
def tesvikgetir():
   

    cookies = {
        '_ga': 'GA1.3.826170572.1661779980',
        '_gid': 'GA1.3.1845503905.1661779980',
        'wbn_session': '44e31de1a1776ff092617a6e2cfbc08683090724',
        '_gat_gtag_UA_169940278_1': '1',
    }
    
    headers = {
        'authority': 'www.yatirimadestek.gov.tr',
        'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
        'cache-control': 'max-age=0',
        # Requests sorts cookies= alphabetically
        # 'cookie': '_ga=GA1.3.826170572.1661779980; _gid=GA1.3.1845503905.1661779980; wbn_session=44e31de1a1776ff092617a6e2cfbc08683090724; _gat_gtag_UA_169940278_1=1',
        'origin': 'https://www.yatirimadestek.gov.tr',
        'referer': 'https://www.yatirimadestek.gov.tr/tesvik-robotu',
        'sec-ch-ua': '" Not A;Brand";v="99", "Chromium";v="102", "Google Chrome";v="102"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"Linux"',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'same-origin',
        'sec-fetch-user': '?1',
        'upgrade-insecure-requests': '1',
        'user-agent': 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36',
    }
    
    data = {
        'yatirimin_tanimi_id': '3411',
        'yatirimin_tanimi': 'Gazolin (motor ispirtosu) (uçak yakıtı dahil) 2320.0.01',
        'yatirim_yeri': '63',
        'ilce_id': 'diger',
        'osb_ici': '0',
        'sozlesme': '1',
    }
    
    response = requests.post('https://www.yatirimadestek.gov.tr/tesvik-robotu', cookies=cookies, headers=headers, data=data)
    
    dene=response.content
        
    soup = BeautifulSoup(dene, "html.parser")
   
    listem=[]
    listem = soup.find_all(class_ = "block-ust")
    return listem
     
        
    
    
    
    
    