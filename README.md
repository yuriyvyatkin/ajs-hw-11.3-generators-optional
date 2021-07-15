# Домашнее задание №3 к лекции «Символы, итераторы, генераторы»

[![Build status](https://ci.appveyor.com/api/projects/status/cv8q3hl9257mhm7u?svg=true)](https://ci.appveyor.com/project/yuriyvyatkin/ajs-hw-11-3-generators-optional)

## Генераторы (задача со звёздочкой)

**Важно**: данная задача не является обязательной 

### Легенда

Как вы знаете, объекты, позволяющие организовать итерирование, содержат метод с "именем" `Symbol.iterator`. Напишите функцию `canIterate`, которая определяет, соответствует ли объект протоколу итерирования, возвращая, соответственно, `true`/`false`.

Примеры использования:
```javascript
canIterate(new Map()); // true
canIterate(new Set()); // true
canIterate(null); // false
canIterate(10); // false
canIterate("Netology"); // true
```
