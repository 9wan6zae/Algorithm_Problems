def solution(phone_book):
    hash = {}
    
    for phone_number in phone_book:
        hash[phone_number] = phone_number
    
    for phone_number in phone_book:
        temp = ''
        for number in phone_number:
            temp += number
            if temp in hash and temp != phone_number:
                return False
        
    return True