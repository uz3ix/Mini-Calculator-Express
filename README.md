# Калькулятор express
## API методы 
- GET `/api/calculator/add?a=X&b=Y` - сложение 
- GET `/api/calculator/subtract?a=X&b=Y` - вычитание 
- GET `/api/calculator/multiply?a=X&b=Y` - умножение
- GET `/api/calculator/divide?a=X&b=Y` - деление 
- GET `/api/calculator/power?base=X&exponent=Y` - возведение в степень 
- GET `/api/calculator/sqrt?number=X` - квадратный корень 
- POST `/api/calculator/calculate` - вычисление выражения (тело: {"выражение": "2+3*4"})
вместо X и Y подставляем число и все работает прекрасно 
