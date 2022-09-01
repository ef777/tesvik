import requests

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
    'query': 'ayak',
}

response = requests.post('https://www.yatirimadestek.gov.tr/Ajax/searchUs97', cookies=cookies, headers=headers, data=data)