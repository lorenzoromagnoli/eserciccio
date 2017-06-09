## esercizio 1
#### Funzione Fibonacci iterativo

```
var fibonacci_iter = function(index) {
    var lastNumber = 0;
    var newNumber = 1;
    var temp;

    if (index>0){
      for (var i = 0; i < index-1; i++) {
          temp=lastNumber + newNumber
          lastNumber = newNumber;
          newNumber=temp;
      }
    }else{
      newNumber=0
    }
    return (newNumber);
}
```

#### Funzione Fibonacci ricursiva

```
var fibonacci_recursive= function(index){
  if (index<=1) {
    return 1;
  }
  var result=fibonacci_recursive(index - 1) + fibonacci_recursive(index - 2);
  return result;
}
```

## esercizio 2
#### regular expression

```
var testDate=function(str){
  var patt = /\d{4}-[01]\d-[0-3]\d\s[0-2]\d:[0-5]\d:[0-5]\d.\d\d\d\d\d\d/g
  var res = patt.test(str);
  return(res);
}
```

## esercizio 3
#### frontend (js)
- il form è quì
- il codice js quì

## esercizio 3
#### frontend (css)
- layout realizzato è [quì](https://lorenzoromagnoli.github.io/eserciccio/)
- html quì
- e css quì

## esercizio 4
#### backend
- il php quì
