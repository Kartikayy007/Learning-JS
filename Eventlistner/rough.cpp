#include <iostream>
using namespace std;

int main() {
    int t;
    std::cin >> t;
    
    while (t--) {
        int a, b;
        cin>>a>>b;
        if(a == 0 && b == 0) {
            cout<<"no"<<endl;
            cout<<a<<b;
        }
        else if(a%2 == 0 && b%2 == 0) {
            cout<<"yes"<<endl;
            cout<<a<<b;
        }
        else if (a%2 != 0 && b%2 != 0) {
            cout<<"no"<<endl;
            cout<<a<<b;
        }
        else if (a%2 != 0 && b%2 == 0) {
            cout<<"YES"<<endl;
        }
        else if(a%2 == 0 && b%2 != 0) {
            cout<<"YES"<<endl;
        }
        }
    }
}