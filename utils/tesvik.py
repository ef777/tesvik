import requests

cookies = {
    '_ga': 'GA1.3.826170572.1661779980',
    '_gid': 'GA1.3.1845503905.1661779980',
    'wbn_session': 'b17a75647b1c077bfa75d8fd5371f8bb8b09abec',
    '_gat_gtag_UA_169940278_1': '1',
}

headers = {
    'authority': 'www.yatirimadestek.gov.tr',
    'accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
    'accept-language': 'tr-TR,tr;q=0.9,en-US;q=0.8,en;q=0.7',
    'cache-control': 'max-age=0',
    # Requests sorts cookies= alphabetically
    # 'cookie': '_ga=GA1.3.826170572.1661779980; _gid=GA1.3.1845503905.1661779980; wbn_session=b17a75647b1c077bfa75d8fd5371f8bb8b09abec; _gat_gtag_UA_169940278_1=1',
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
    'yatirimin_tanimi_id': '907',
    'yatirimin_tanimi': 'Derisi dikenliler gömlekliler omurgasızların toplanması ve avcılığı 0500.0.07.15',
    'yatirim_yeri': '17',
    'ilce_id': '59',
    'osb_ici': '0',
    'sozlesme': '1',
}

response = requests.post('https://www.yatirimadestek.gov.tr/tesvik-robotu', cookies=cookies, headers=headers, data=data)

print(response.text)

import requests

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
print(response.text)