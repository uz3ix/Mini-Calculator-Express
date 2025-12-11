class CalculatorController {
 // EVAL для сложных выражений
  calculate(req, res) {
    try {
      const { expression } = req.body;

      if (!expression) {
        return res.status(400).json({ error: 'Выражение обязательно для заполнения' });
      }
      
      const result = eval(expression);
      
      res.json({
        выражение: expression,
        результат: result,
        сообщение: "Выражение успешно вычислено"
      });
    } catch (error) {
      res.status(400).json({ 
        ошибка: 'Неверное выражение',
        сообщение: error.message,
        помощь: 'Проверьте синтаксис математического выражения'
      });
    }
  }
  
  // сложение
  add(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
      return res.status(400).json({ 
        ошибка: 'Некорректные параметры',
        сообщение: 'Оба параметра a и b должны быть числами' 
      });
    }
    
    res.json({
      операция: 'сложение',
      первое_число: a,
      второе_число: b,
      результат: a + b,
      формула: `${a} + ${b} = ${a + b}`
    });
  }
  
  // вычитание
  subtract(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
      return res.status(400).json({ 
        ошибка: 'Некорректные параметры',
        сообщение: 'Оба параметра a и b должны быть числами' 
      });
    }
    
    res.json({
      операция: 'вычитание',
      уменьшаемое: a,
      вычитаемое: b,
      результат: a - b,
      формула: `${a} - ${b} = ${a - b}`
    });
  }
  
  // умножение
  multiply(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
      return res.status(400).json({ 
        ошибка: 'Некорректные параметры',
        сообщение: 'Оба параметра a и b должны быть числами' 
      });
    }
    
    res.json({
      операция: 'умножение',
      первый_множитель: a,
      второй_множитель: b,
      результат: a * b,
      формула: `${a} × ${b} = ${a * b}`
    });
  }
  
  // деление
  divide(req, res) {
    const a = parseFloat(req.query.a);
    const b = parseFloat(req.query.b);
    
    if (isNaN(a) || isNaN(b)) {
      return res.status(400).json({ 
        ошибка: 'Некорректные параметры',
        сообщение: 'Оба параметра a и b должны быть числами' 
      });
    }
    
    if (b === 0) {
      return res.status(400).json({ 
        ошибка: 'Деление на ноль',
        сообщение: 'Деление на ноль не допускается' 
      });
    }
    
    res.json({
      операция: 'деление',
      делимое: a,
      делитель: b,
      результат: a / b,
      формула: `${a} ÷ ${b} = ${a / b}`
    });
  }
  
  // степень
  power(req, res) {
    const base = parseFloat(req.query.base);
    const exponent = parseFloat(req.query.exponent);
    
    if (isNaN(base) || isNaN(exponent)) {
      return res.status(400).json({ 
        ошибка: 'Некорректные параметры',
        сообщение: 'Основание и степень должны быть числами' 
      });
    }
    
    res.json({
      операция: 'возведение в степень',
      основание: base,
      степень: exponent,
      результат: Math.pow(base, exponent),
      формула: `${base}^${exponent} = ${Math.pow(base, exponent)}`
    });
  }
  
  //корень
  sqrt(req, res) {
    const number = parseFloat(req.query.number);
    
    if (isNaN(number)) {
      return res.status(400).json({ 
        ошибка: 'Некорректный параметр',
        сообщение: 'Параметр должен быть числом' 
      });
    }
    
    if (number < 0) {
      return res.status(400).json({ 
        ошибка: 'Некорректное число',
        сообщение: 'Нельзя вычислить квадратный корень из отрицательного числа' 
      });
    }
    
    res.json({
      операция: 'квадратный корень',
      число: number,
      результат: Math.sqrt(number),
      формула: `sqrt${number} = ${Math.sqrt(number)}`
    });
  }
}

module.exports = new CalculatorController();