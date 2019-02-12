print('Введите 2 числа')
a = int(input())
b = int(input())
s = a + b
print('Сумма =',s)
print('Выберите действие: 1 - умножение на 2, 2 - деление на 2')
c = int(input())
if c == 1:
    print('Ваш ответ =' ,s * 2)
if c == 2:
    print('Ваш ответ =' ,s / 2)
   
