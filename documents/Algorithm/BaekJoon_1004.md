# BaekJoon 1004 어린 왕자

[문제 출처](https://www.acmicpc.net/problem/1004)  

* 풀이 방법 및 배워야할 것: 

   *  원의 방정식, 시작점과 끝점이 한 원에 있을 경우만 조심해서 풀면 된다
   *  Silver 3, 2022-12-30
* 풀이 코드 :
```cpp
#include <iostream>
using namespace std;

int main(void){

    ios::sync_with_stdio(false);
	cin.tie(NULL);
	
    int T;
	
	cin >> T;
	for(int i=0; i<T; i++){
		int x1,y1,x2,y2;
		cin >> x1 >> y1 >> x2 >> y2;
		int n;
		cin >> n ;
		int ans=0;
		for (int j=0;j<n;j++){
			int cx,cy,r;
			cin >> cx >> cy >> r;
			
			if ( (x1-cx)*(x1-cx)+(y1-cy)*(y1-cy) < r*r and (x2-cx)*(x2-cx)+(y2-cy)*(y2-cy) < r*r ){			
				continue;
			}
			else if ( (x1-cx)*(x1-cx)+(y1-cy)*(y1-cy) < r*r ){			
				ans++;
			}
			else if ( (x2-cx)*(x2-cx)+(y2-cy)*(y2-cy) < r*r ){			
				ans++;
			}
		}
		
		ans = ans ;
		cout << ans;
		cout << "\n";
    }
	
	return 0;
}
```
