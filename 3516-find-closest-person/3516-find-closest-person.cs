public class Solution {
    public int FindClosest(int x, int y, int z) {
        var p1 = Math.Abs(x - z);
        var p2 = Math.Abs(y - z);
        int result;

        if(p1 < p2){
           result = 1 ;
        } 
        else if (p1 == p2){
           result = 0 ;
        } 
        else{
            result = 2;
        } 
        return result;
    } 
} 