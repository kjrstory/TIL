# BaekJoon 1259 펠린드롬수

[문제 출처](https://www.acmicpc.net/problem/1259)  

+ 풀이 방법 및 배워야할 것: 

  +  숫자를 문자열로 치환하여 해결  

* 풀이 코드 :
```cpp
#include <iostream>

using namespace std;

int main(void){

    string str;

    while(str!="0"){
        cin >> str ; 
        bool check=true; 
      
        if (str=="0"){
            break;
        }
        
        for (int i=0; i<str.size()/2;i++) {
            //cout <<str[i] << " " << str[str.size()-i-1] << "\n";
            if (str[i]!=str[ str.size()-i-1] )  {
            check = false;  
            }
        }
       
        if (check) {
            cout << "yes\n";
        }
        else {
            cout << "no\n";
        }
    }

    return 0;

}
```
