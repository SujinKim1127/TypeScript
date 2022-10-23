enum E {
    X = 3, Y, Z
  }
  
  function getX(obj: { X: number }) {
    return obj.X;
  }
  console.log(getX(E)); 

  enum Enum {
    A
  }
  let a = Enum.A; // 키로 값을 획득 하기
  let keyName = Enum[a]; // 값으로 키를 획득 하기
  console.log(a);
  console.log(keyName);